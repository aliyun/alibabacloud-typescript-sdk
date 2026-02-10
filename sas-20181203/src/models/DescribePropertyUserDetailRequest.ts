// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Set which page of the returned results to start displaying the query results. The default value is **1**, indicating that the display starts from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Whether the account name supports fuzzy search. To enable fuzzy search, set this parameter\\"s value to **1**; other values or an empty value indicate that fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * Whether the queried account has ROOT privileges. Possible values include:
   * 
   * - **0**: No
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isRoot?: string;
  /**
   * @remarks
   * The end timestamp for the last login retrieval. The unit is milliseconds.
   * 
   * @example
   * 1651298836000
   */
  lastLoginTimeEnd?: number;
  /**
   * @remarks
   * The start timestamp for the last login retrieval. The unit is milliseconds.
   * 
   * @example
   * 164922523600
   */
  lastLoginTimeStart?: number;
  /**
   * @remarks
   * Used to mark the starting position for reading. Leave it empty to start from the beginning.
   * 
   * > For the first call, you do not need to fill in this field. The response will include the NextToken for the second call, and each subsequent call will include the NextToken for the next call.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Set the number of account asset fingerprint information items to display per page during pagination. The default value is **10**, indicating that 10 items of account asset fingerprint information are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server to be queried.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * Whether to use the NextToken method to fetch vulnerability list data. If this parameter is used, TotalCount will no longer be returned. Possible values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
   * 
   * @example
   * false
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The account name of the server to be queried.
   * 
   * @example
   * bin
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server to be queried.
   * 
   * @example
   * 50d213b4-3a35-427a-b8a5-04b0c7e1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      extend: 'Extend',
      isRoot: 'IsRoot',
      lastLoginTimeEnd: 'LastLoginTimeEnd',
      lastLoginTimeStart: 'LastLoginTimeStart',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      remark: 'Remark',
      useNextToken: 'UseNextToken',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      extend: 'string',
      isRoot: 'string',
      lastLoginTimeEnd: 'number',
      lastLoginTimeStart: 'number',
      nextToken: 'string',
      pageSize: 'number',
      remark: 'string',
      useNextToken: 'boolean',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

