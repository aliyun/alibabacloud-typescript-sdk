// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SSL certificate information.
   * 
   * @example
   * *.gpdbmaster.xxx.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5FF8636-37F6-4CE0-8002-F8734C62C686
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether Secure Sockets Layer (SSL) encryption is enabled. Valid values:
   * 
   * - **true**: SSL encryption is enabled.
   * - **false**: SSL encryption is disabled.
   * 
   * @example
   * true
   */
  SSLEnabled?: boolean;
  /**
   * @remarks
   * The expiration time of the SSL certificate.
   * 
   * @example
   * 2023-08-05T09:05:53Z
   */
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      SSLEnabled: 'boolean',
      SSLExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

