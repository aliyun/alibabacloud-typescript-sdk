// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDomainCertRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certId?: string;
  /**
   * @example
   * 1
   */
  cipherSuite?: string;
  customCiphers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * false
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-ww**b06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

