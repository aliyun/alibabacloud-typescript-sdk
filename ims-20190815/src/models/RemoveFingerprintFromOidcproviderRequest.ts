// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFingerprintFromOIDCProviderRequest extends $dara.Model {
  fingerprint?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

