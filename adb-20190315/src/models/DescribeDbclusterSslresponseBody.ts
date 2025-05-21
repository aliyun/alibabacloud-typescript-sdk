// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is protected by SSL encryption.
   * 
   * @example
   * am-d7oualxo05x4o5be872***.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-11T08:16:43Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 348303D8-6F42-5141-9B00-A6EECA1E37B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
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

