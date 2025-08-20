// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSSLResponseBody extends $dara.Model {
  /**
   * @example
   * amv-*********.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 2022-10-11T08:16:43Z
   */
  expireTime?: string;
  /**
   * @example
   * 348303D8-6F42-5141-9B00-A6EECA1E37B6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  SSLEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      expireTime: 'string',
      requestId: 'string',
      SSLEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

