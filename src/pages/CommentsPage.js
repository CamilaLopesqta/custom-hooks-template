import { Title, PostContainer } from "../style";
import { Card } from "../components/Card/Card";
import { useCapturarPostagem } from "../hooks/useCapturarPostagem";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants";

const CommentsPage = () => {
  //const [posts] = useCapturarPostagem()
  const [posts, error, isLoading] = useRequestData([], `${BASE_URL}comments`);

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoading && <p>Carregando ...</p>}
        {!isLoading && error && (
          <p>Ocorreu um erro. Tente novamente mais tarde.</p>
        )}
        {!isLoading && !error && posts && posts.length === 0 && (
          <p>Lista vazia.</p>
        )}
        {posts.map((post) => {
          //console.log(post);
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={"#1dc690"}
              textColor={"#ffffff"}
            />
          );
        })}
      </PostContainer>
    </div>
  );
};

export default CommentsPage;
