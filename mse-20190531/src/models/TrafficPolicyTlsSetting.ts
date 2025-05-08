// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficPolicyTlsSetting extends $dara.Model {
  caCertContent?: string;
  certId?: string;
  sni?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SIMPLE
   */
  tlsMode?: string;
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      certId: 'CertId',
      sni: 'Sni',
      tlsMode: 'TlsMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      certId: 'string',
      sni: 'string',
      tlsMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

