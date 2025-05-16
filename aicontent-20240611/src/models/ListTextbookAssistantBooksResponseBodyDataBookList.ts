// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBooksResponseBodyDataBookList extends $dara.Model {
  author?: string;
  /**
   * @example
   * 231698
   */
  bookId?: string;
  bookName?: string;
  /**
   * @example
   * null
   */
  coverImage?: string;
  /**
   * @example
   * 2024-7（1）
   */
  edition?: string;
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 2024-7（1）
   */
  impression?: string;
  /**
   * @example
   * 9787107382505
   */
  isbn?: string;
  publisher?: string;
  /**
   * @example
   * ENGLISH
   */
  subject?: string;
  version?: string;
  /**
   * @example
   * 0
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      bookId: 'bookId',
      bookName: 'bookName',
      coverImage: 'coverImage',
      edition: 'edition',
      grade: 'grade',
      impression: 'impression',
      isbn: 'isbn',
      publisher: 'publisher',
      subject: 'subject',
      version: 'version',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      bookId: 'string',
      bookName: 'string',
      coverImage: 'string',
      edition: 'string',
      grade: 'string',
      impression: 'string',
      isbn: 'string',
      publisher: 'string',
      subject: 'string',
      version: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

