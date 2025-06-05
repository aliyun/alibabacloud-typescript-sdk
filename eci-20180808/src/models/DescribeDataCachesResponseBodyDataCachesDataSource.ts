// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCachesResponseBodyDataCachesDataSource extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for the data source.
   * 
   * @example
   * {
   *       "options": {
   *             "path": "/",
   *             "server": "0ce1f4****-or***.cn-hangzhou.nas.aliyuncs.com",
   *             "vers": "3",
   *             "options": "nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport"
   *       },
   *       "type": "NAS"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   NAS
   * *   OSS
   * *   URL
   * *   SNAPSHOT
   * 
   * @example
   * URL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

