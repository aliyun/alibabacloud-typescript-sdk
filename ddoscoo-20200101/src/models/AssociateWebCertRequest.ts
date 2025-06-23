// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateWebCertRequest extends $dara.Model {
  cert?: string;
  certId?: number;
  /**
   * @remarks
   * The globally unique ID of the certificate. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of the CertIdentifier parameter is 123-cn-hangzhou.
   * 
   * >  You can specify only one of this parameter and the CertId parameter.
   * 
   * @example
   * 9430680-cn-hangzhou
   */
  certIdentifier?: string;
  certName?: string;
  /**
   * @remarks
   * The region of the certificate. Valid values: **cn-hangzhou** and **ap-southeast-1**. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certRegion: 'CertRegion',
      domain: 'Domain',
      key: 'Key',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

