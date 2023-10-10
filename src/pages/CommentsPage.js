import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'
import { useCapturarPostagem } from '../hooks/useCapturarPostagem'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from '../constants/constants'

const  CommentsPage = () => {
//const [posts] = useCapturarPostagem()
  const [posts] = useRequestData([], `${BASE_URL}comments`)

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      {posts.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



