// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common name of the CA certificate. The default value is the internal network endpoint of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The download URL of the CA certificate.
   * 
   * @example
   * https://apsaradb-public.oss-ap-sout****-1.aliy****.com/ApsaraDB-CA-Chain.zip
   */
  certDownloadURL?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02260F96-913E-4655-9BA5-A3651CAF****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the TLS (SSL) encryption feature. Valid values:
   * * **Enable**: Enabled.
   * * **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The expiration time of the CA certificate.
   * 
   * The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format in UTC.
   * 
   * @example
   * 2020-08-05T09:05:53Z
   */
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      certDownloadURL: 'CertDownloadURL',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      certDownloadURL: 'string',
      instanceId: 'string',
      requestId: 'string',
      SSLEnabled: 'string',
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

