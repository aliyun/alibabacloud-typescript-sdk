// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaProcessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application process. Default value: **java**. Valid values:
   * 
   * - **java**: Java process
   * - **php**: PHP process
   * 
   * @example
   * java
   */
  bizType?: string;
  /**
   * @remarks
   * The startup parameter.
   * > Only prefix match is supported. Fuzzy match is not supported.
   * 
   * @example
   * java -jar
   */
  cmdline?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. The default number of entries per page for paging is 10. If this parameter is left empty, 10 entries are returned by default.
   * > Specify a value for this parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The process ID.
   * > Only exact match is supported.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The asset information to query. You can set this parameter to the asset name, public IP address, or private IP address. Fuzzy match is supported.
   * 
   * @example
   * 10.167.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The UUID of the server.
   * >- You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * >- Only exact match is supported.
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

