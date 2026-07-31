// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultHttpsResponseBodyDefaultHttps extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suite. Valid values:
   * 
   * - **1**: All cipher suites are added.
   * 
   * - **2**: Strong cipher suites are added. This value is available only when TLSVersion is set to tlsv1.2.
   * 
   * - **99**: Custom cipher suites are added. This value is available only when TLSVersion is not set to tlsv1.3.
   * 
   * @example
   * 1
   */
  cipherSuite?: string;
  /**
   * @remarks
   * The custom cipher suites.
   * 
   * @example
   * ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384
   */
  customCiphers?: string;
  /**
   * @remarks
   * Indicates whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * > This parameter takes effect only when HttpsPorts is not empty, which indicates that the domain name uses the HTTPS protocol. When TLSVersion is set to tlsv1.3, this value must be true.
   * 
   * @example
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * The TLS version. Valid values:
   * 
   * - **tlsv1**: TLS 1.0 and later are supported. This value provides the highest compatibility and the lowest security.
   * 
   * - **tlsv1.1**: TLS 1.1 and later are supported. This value provides good compatibility and security.
   * 
   * - **tlsv1.2**: TLS 1.2 and later are supported. This value provides good compatibility and the highest security.
   * 
   * - **tlsv1.3**: Only TLS 1.3 is supported. This value provides the highest security and the lowest compatibility.
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
   * The default SSL/TLS settings.
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

