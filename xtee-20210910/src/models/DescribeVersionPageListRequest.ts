// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for the request and response messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Maximum number of results to be read in this call, with a default value of 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Used to mark the starting position for reading. An empty value indicates starting from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Name of the variable.
   * 
   * @example
   * ex_OERlw0Zqfb23
   */
  objectCode?: string;
  /**
   * @remarks
   * Primary key ID of the variable.
   * 
   * @example
   * 392023
   */
  objectId?: number;
  /**
   * @remarks
   * Number of items per page, with a default value of 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Pagination flag, with a default value of true.
   * 
   * @example
   * true
   */
  paging?: boolean;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      currentPage: 'currentPage',
      objectCode: 'objectCode',
      objectId: 'objectId',
      pageSize: 'pageSize',
      paging: 'paging',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      currentPage: 'number',
      objectCode: 'string',
      objectId: 'number',
      pageSize: 'number',
      paging: 'boolean',
      regId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

