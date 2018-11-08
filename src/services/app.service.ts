import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findOneById(id: number) {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
      books: [
        {
          id: 1,
          title: 'Harry Potter',
          publisher: 'Book Company',
          author: {
            id,
            firstName: 'John',
            lastName: 'Doe',
          },
        },
        {
          id: 2,
          title: 'Nijntje',
          publisher: 'Dick Bruna',
          author: {
            id,
            firstName: 'John',
            lastName: 'Doe',
          },
        },
        {
          id: 3,
          title: 'Bernini mysterie',
          publisher: 'Stephen King',
          author: {
            id,
            firstName: 'John',
            lastName: 'Doe',
          },
        },
      ],
    };
  }
}
