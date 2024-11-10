type CommentType = {
    id: number;
    email: string;
};

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<void> => {
    try {

        const response = await fetch(url);

        const data: CommentType[] = await response.json();


        data.forEach(comment => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getData(COMMENTS_URL);

