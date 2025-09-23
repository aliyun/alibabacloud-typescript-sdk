// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer7CertRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  cert?: string;
  /**
   * @example
   * 1234
   */
  certId?: number;
  certIdentifier?: string;
  /**
   * @example
   * testCertName
   */
  certName?: string;
  certRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * xx
   */
  key?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certRegion: 'CertRegion',
      domain: 'Domain',
      key: 'Key',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      certRegion: 'string',
      domain: 'string',
      key: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

