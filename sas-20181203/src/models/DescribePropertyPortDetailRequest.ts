// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyPortDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address bound to the port.
   * 
   * @example
   * 0.0.XX.XX
   */
  bindIp?: string;
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
   * Specifies whether fuzzy search by port number is supported. If you want to use fuzzy search, set the parameter to **1**. If you set the parameter to a different value or leave the parameter empty, fuzzy search is not supported.
   * 
   * @example
   * 1
   */
  extend?: string;
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
   * The listening port of the server.
   * 
   * @example
   * 22
   */
  port?: string;
  /**
   * @remarks
   * The name of the server process.
   * 
   * @example
   * sshd
   */
  procName?: string;
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
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
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
      bindIp: 'BindIp',
      currentPage: 'CurrentPage',
      extend: 'Extend',
      pageSize: 'PageSize',
      port: 'Port',
      procName: 'ProcName',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindIp: 'string',
      currentPage: 'number',
      extend: 'string',
      pageSize: 'number',
      port: 'string',
      procName: 'string',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
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

