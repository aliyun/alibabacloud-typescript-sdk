// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The code of the face library.
   * 
   * @example
   * groupCode001
   */
  groupCode?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the face library.
   * 
   * @example
   * test008
   */
  name?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * WpY9RBGa5Vrzxi3+mp2Cdw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupCode: 'GroupCode',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupCode: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

