// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebCertConfig extends $dara.Model {
  certName?: string;
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

