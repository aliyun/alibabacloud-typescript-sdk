// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateWebCertRequest extends $dara.Model {
  cert?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
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

