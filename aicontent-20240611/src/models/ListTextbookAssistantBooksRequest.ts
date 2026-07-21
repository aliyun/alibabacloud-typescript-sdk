// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBooksRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization token for the API call. You can obtain this token by calling the authorization API for the AI textbook assistant feature.
   * 
   * This parameter is required.
   * 
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
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
   * The grade level. The value is a string from "1" to "9".
   * 
   * @example
   * 1
   */
  grade?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. The value cannot exceed 20.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: string;
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
   * The volume. Valid values: 0 (all-in-one volume), 1 (first volume), and 2 (second volume).
   * 
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

