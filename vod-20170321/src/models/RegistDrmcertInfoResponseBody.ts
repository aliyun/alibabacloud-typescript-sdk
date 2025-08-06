// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistDRMCertInfoResponseBody extends $dara.Model {
  certId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

