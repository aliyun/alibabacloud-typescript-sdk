// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the fuzzy search by account name is supported. If you want to use fuzzy search, set the parameter to **1**. If you set the parameter to a different value or leave the parameter empty, fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * Specifies whether the account has root permissions. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  isRoot?: string;
  /**
   * @remarks
   * The timestamp of the last logoff from the account. Unit: milliseconds.
   * 
   * @example
   * 164922523600
   */
  lastLoginTimeEnd?: number;
  /**
   * @remarks
   * The timestamp of the last logon to the account. Unit: milliseconds.
   * 
   * @example
   * 164922523600
   */
  lastLoginTimeStart?: number;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  useNextToken?: boolean;
  /**
   * @remarks
   * The name of the account to which the server belongs.
   * 
   * @example
   * bin
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server.
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

