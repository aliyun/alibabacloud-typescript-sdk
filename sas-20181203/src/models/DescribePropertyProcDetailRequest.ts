// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyProcDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * ./8888
   */
  cmdline?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether fuzzy match is supported for the process name. Set this parameter to 1 to enable fuzzy match. Other values or an empty value indicate that fuzzy match is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * 8888
   */
  name?: string;
  /**
   * @remarks
   * The token that marks the current position from which to start reading. Leave this parameter empty to start reading from the beginning.
   * 
   * > You do not need to specify this parameter for the first call. The NextToken value for the second call is included in the response of the first call. Each subsequent response contains the NextToken value for the next call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k+AtdhNE3kgQEK36GujZ5on+tWdc+4WoaoMP/kUNxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates that 10 entries of process Asset Fingerprints information are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The end timestamp of the process startup time range. Unit: milliseconds.
   * 
   * @example
   * 1649587453000
   */
  procTimeEnd?: number;
  /**
   * @remarks
   * The start timestamp of the process startup time range. Unit: milliseconds.
   * 
   * @example
   * 1648809853000
   */
  procTimeStart?: number;
  /**
   * @remarks
   * The name or IP address of the server that you want to query.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list data. If this parameter is used, TotalCount is no longer returned. Valid values:
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
   * The information about the user that runs the process.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server that you want to query.
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

