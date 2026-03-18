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

export class ListTextbookAssistantBooksResponseBodyDataPaginationData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      maxResults: 'maxResults',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBodyData extends $dara.Model {
  bookList?: ListTextbookAssistantBooksResponseBodyDataBookList[];
  paginationData?: ListTextbookAssistantBooksResponseBodyDataPaginationData;
  static names(): { [key: string]: string } {
    return {
      bookList: 'bookList',
      paginationData: 'paginationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookList: { 'type': 'array', 'itemType': ListTextbookAssistantBooksResponseBodyDataBookList },
      paginationData: ListTextbookAssistantBooksResponseBodyDataPaginationData,
    };
  }

  validate() {
    if(Array.isArray(this.bookList)) {
      $dara.Model.validateArray(this.bookList);
    }
    if(this.paginationData && typeof (this.paginationData as any).validate === 'function') {
      (this.paginationData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantBooksResponseBody extends $dara.Model {
  data?: ListTextbookAssistantBooksResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B695B377-7029-5805-9DE2-1AAE06C1BF6B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTextbookAssistantBooksResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

