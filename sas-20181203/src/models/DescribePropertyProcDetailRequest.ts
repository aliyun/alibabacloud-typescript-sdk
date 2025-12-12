// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyProcDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The startup parameter of the process.
   * 
   * @example
   * ./8888
   */
  cmdline?: string;
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
   * Specifies whether fuzzy search by process name is supported. If you want to use fuzzy search, set the parameter to 1. If you set the parameter to a different value or leave the parameter empty, fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * 8888
   */
  name?: string;
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
   * The timestamp when the process ends. Unit: milliseconds.
   * 
   * @example
   * 1649587453000
   */
  procTimeEnd?: number;
  /**
   * @remarks
   * The timestamp when the process starts. Unit: milliseconds.
   * 
   * @example
   * 1648809853000
   */
  procTimeStart?: number;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the account ID.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  useNextToken?: boolean;
  /**
   * @remarks
   * The user who runs the process.
   * 
   * @example
   * root
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
      cmdline: 'Cmdline',
      currentPage: 'CurrentPage',
      extend: 'Extend',
      name: 'Name',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      procTimeEnd: 'ProcTimeEnd',
      procTimeStart: 'ProcTimeStart',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      useNextToken: 'UseNextToken',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdline: 'string',
      currentPage: 'number',
      extend: 'string',
      name: 'string',
      nextToken: 'string',
      pageSize: 'number',
      procTimeEnd: 'number',
      procTimeStart: 'number',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
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

