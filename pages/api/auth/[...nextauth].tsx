import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'test@gmail.com' },
        password: { label: 'Passowrd', type: 'password' }
      },
      async authorize(credentials, req) {

        console.log("credentials: ", credentials);

        return {
          email: 'random@test.com',
          name: 'John Random',
          image: 'https://non-existing.com/john-random'
        };
      }
    }),
  ]
})