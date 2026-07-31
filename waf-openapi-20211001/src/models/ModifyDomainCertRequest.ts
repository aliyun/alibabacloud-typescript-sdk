// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainCertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The type of the cipher suite.
   * 
   * @example
   * 1
   */
  cipherSuite?: string;
  /**
   * @remarks
   * The specific custom cipher suites to add. This parameter is used only when **CipherSuite** is set to **99**.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * The domain name that you want to manage.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether TLS 1.3 is supported. Valid values:
   * 
   * - **true**: TLS 1.3 is supported.
   * 
   * - **false**: TLS 1.3 is not supported.
   * 
   * > This parameter is used only when HttpsPorts is not empty, which indicates that the domain name uses the HTTPS protocol. When TLSVersion is set to tlsv1.3, this value must be true.
   * 
   * @example
   * false
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-ww**b06
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The TLS version.
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
      domain: 'Domain',
      enableTLSv3: 'EnableTLSv3',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      cipherSuite: 'string',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      enableTLSv3: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      TLSVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

