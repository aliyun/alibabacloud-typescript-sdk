// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name bound to the certificate.
   * 
   * @example
   * pxc-sddddddcym7g7w****.polarx.singapore.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled for the instance:
   * 
   * - **true**: enabled
   * - **false**: disabled
   * 
   * @example
   * false
   */
  SSLEnabled?: boolean;
  /**
   * @remarks
   * The expiration time of the SSL certificate.
   * 
   * @example
   * 2022-11-04T09:39:07Z
   */
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
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

export class DescribeDBInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: DescribeDBInstanceSSLResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceSSLResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

