// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * Specifies whether connections must be encrypted using SSL. Valid values:
   * 
   * - **1**: Connections must be encrypted using SSL.
   * 
   * - **0**: Connections do not need to be encrypted using SSL.
   * 
   * @example
   * 0
   */
  forceEncryption?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36BB1BC2-789C-4BBA-A519-C5B388E4B0D4
   */
  requestId?: string;
  /**
   * @remarks
   * The expiration time of the SSL certificate. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2020-03-11T02:28:25Z
   */
  SSLExpiredTime?: string;
  /**
   * @remarks
   * The status of the SSL feature.
   * 
   * - **Open**: The SSL feature is enabled.
   * 
   * - **Closed**: The SSL feature is disabled.
   * 
   * @example
   * Open
   */
  SSLStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      forceEncryption: 'ForceEncryption',
      requestId: 'RequestId',
      SSLExpiredTime: 'SSLExpiredTime',
      SSLStatus: 'SSLStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      forceEncryption: 'string',
      requestId: 'string',
      SSLExpiredTime: 'string',
      SSLStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

