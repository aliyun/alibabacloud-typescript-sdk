// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransportCertificateInfo } from "./TransportCertificateInfo";


export class TransportEncryptionInfo extends $dara.Model {
  certificates?: TransportCertificateInfo[];
  deployError?: string;
  deployStatus?: string;
  http2Enabled?: boolean;
  tlsPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'certificates',
      deployError: 'deployError',
      deployStatus: 'deployStatus',
      http2Enabled: 'http2Enabled',
      tlsPolicy: 'tlsPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': TransportCertificateInfo },
      deployError: 'string',
      deployStatus: 'string',
      http2Enabled: 'boolean',
      tlsPolicy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

