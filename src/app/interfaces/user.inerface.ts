export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
