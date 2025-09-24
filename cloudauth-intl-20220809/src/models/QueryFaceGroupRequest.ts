// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * groupCode001
   */
  groupCode?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * test008
   */
  name?: string;
  /**
   * @example
   * WpY9RBGa5Vrzxi3+mp2Cdw==
   */
  nextToken?: string;
  /**
   * @remarks
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

