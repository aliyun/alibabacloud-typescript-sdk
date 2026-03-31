// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultHttpsResponseBodyDefaultHttps extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suites. Valid values:
   * 
   * *   **1**: all cipher suites.
   * *   **2**: strong cipher suites.
   * *   **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: string;
  /**
   * @remarks
   * The custom cipher suite.
   * 
   * @example
   * ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384
   */
  customCiphers?: string;
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * The version of the TLS protocol. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'string',
      customCiphers: 'string',
      enableTLSv3: 'boolean',
      TLSVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultHttpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default SSL and TLS settings.
   */
  defaultHttps?: DescribeDefaultHttpsResponseBodyDefaultHttps;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultHttps: 'DefaultHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultHttps: DescribeDefaultHttpsResponseBodyDefaultHttps,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defaultHttps && typeof (this.defaultHttps as any).validate === 'function') {
      (this.defaultHttps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

