// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return in a paginated query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether fuzzy match is supported for account names. Set this parameter to **1** to enable fuzzy match. Any other value or an empty value indicates that fuzzy match is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * Specifies whether the account to query has ROOT permissions. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isRoot?: string;
  /**
   * @remarks
   * The end timestamp for querying the last logon time of the account. Unit: milliseconds.
   * 
   * @example
   * 1651298836000
   */
  lastLoginTimeEnd?: number;
  /**
   * @remarks
   * The start timestamp for querying the last logon time of the account. Unit: milliseconds.
   * 
   * @example
   * 164922523600
   */
  lastLoginTimeStart?: number;
  /**
   * @remarks
   * The token that marks the current position from which to start reading. Leave this parameter empty to start from the beginning.
   * 
   * > Do not specify this parameter for the first call. The response includes the NextToken value for the second call. Each subsequent response contains the NextToken value for the next call.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of account asset fingerprint entries per page in a paging query. Default value: **10**, which indicates 10 account asset fingerprint entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server to query.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list data. If this parameter is used, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Uses the NextToken method.
   * - **false**: Does not use the NextToken method.
   * 
   * @example
   * false
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The account name on the server to query.
   * 
   * @example
   * bin
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server to query.
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

