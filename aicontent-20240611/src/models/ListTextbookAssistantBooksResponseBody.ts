// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBooksResponseBodyDataBookList extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 吴欣
   */
  author?: string;
  /**
   * @remarks
   * The book ID.
   * 
   * @example
   * 231698
   */
  bookId?: string;
  /**
   * @remarks
   * The book name.
   * 
   * @example
   * K12英语-人教版PEP三起-三年级上册
   */
  bookName?: string;
  /**
   * @remarks
   * The cover image.
   * 
   * @example
   * null
   */
  coverImage?: string;
  /**
   * @remarks
   * The edition.
   * 
   * @example
   * 2024-7（1）
   */
  edition?: string;
  /**
   * @remarks
   * The grade. Valid values are strings from `"1"` to `"9"`.
   * 
   * @example
   * 3
   */
  grade?: string;
  /**
   * @remarks
   * The impression.
   * 
   * @example
   * 2024-7（1）
   */
  impression?: string;
  /**
   * @remarks
   * The International Standard Book Number (ISBN).
   * 
   * @example
   * 9787107382505
   */
  isbn?: string;
  /**
   * @remarks
   * The publisher.
   * 
   * @example
   * 人民教育出版社
   */
  publisher?: string;
  /**
   * @remarks
   * The subject.
   * 
   * @example
   * ENGLISH
   */
  subject?: string;
  /**
   * @remarks
   * The textbook version.
   * 
   * @example
   * 人教版
   */
  version?: string;
  /**
   * @remarks
   * The volume. Valid values: `"0"` (all-in-one), `"1"` (first semester), and `"2"` (second semester).
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of items per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The total number of items.
   * 
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
  /**
   * @remarks
   * A list of book objects.
   */
  bookList?: ListTextbookAssistantBooksResponseBodyDataBookList[];
  /**
   * @remarks
   * The pagination data.
   */
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
  /**
   * @remarks
   * The data object in the response.
   */
  data?: ListTextbookAssistantBooksResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 用户不存在
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B695B377-7029-5805-9DE2-1AAE06C1BF6B
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded.
   * 
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

