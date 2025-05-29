// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * *.gpdbmaster.xxx.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D5FF8636-37F6-4CE0-8002-F8734C62C686
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled.
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

