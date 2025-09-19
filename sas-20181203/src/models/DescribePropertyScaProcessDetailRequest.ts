// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaProcessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application process. Default value: **java**. Valid values:
   * 
   * *   **java**: Java process.
   * *   **php**: PHP process.
   * 
   * @example
   * java
   */
  bizType?: string;
  /**
   * @remarks
   * The startup parameter.
   * 
   * >  This parameter supports only prefix queries. Fuzzy match is not supported.
   * 
   * @example
   * java -jar
   */
  cmdline?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you leave this parameter empty, 10 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * >  Only exact match is supported.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The information about the server that you want to query. The value can be the public IP address, private IP address, or name of the server. Fuzzy match is supported.
   * 
   * @example
   * 10.167.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > 
   * 
   * *   You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * *   Only exact match is supported.
   * 
   * @example
   * D0D6E6E4-CB8C-4897-B852-46AEFDA0****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      cmdline: 'Cmdline',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pid: 'Pid',
      remark: 'Remark',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      cmdline: 'string',
      currentPage: 'number',
      pageSize: 'number',
      pid: 'string',
      remark: 'string',
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

