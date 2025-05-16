// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBooksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @example
   * 231698
   */
  bookId?: string;
  /**
   * @example
   * 1
   */
  grade?: string;
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * 1
   */
  page?: string;
  version?: string;
  /**
   * @example
   * 1
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      bookId: 'bookId',
      grade: 'grade',
      maxResults: 'maxResults',
      page: 'page',
      version: 'version',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      bookId: 'string',
      grade: 'string',
      maxResults: 'string',
      page: 'string',
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

