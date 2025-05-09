// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TeeEvidenceVO extends $dara.Model {
  cipherSuite?: string;
  enclaveData?: string;
  encryptPublicKeyPem?: string;
  encryptPublicKeyType?: string;
  modifiedDate?: string;
  publicKey?: string;
  publicKeyRaBase64?: string;
  publicKeyRaType?: string;
  quoteReport?: string;
  signPublicKeyPem?: string;
  signPublicKeyType?: string;
  trustedMrEnclave?: string[];
  static names(): { [key: string]: string } {
    return {
      cipherSuite: 'CipherSuite',
      enclaveData: 'EnclaveData',
      encryptPublicKeyPem: 'EncryptPublicKeyPem',
      encryptPublicKeyType: 'EncryptPublicKeyType',
      modifiedDate: 'ModifiedDate',
      publicKey: 'PublicKey',
      publicKeyRaBase64: 'PublicKeyRaBase64',
      publicKeyRaType: 'PublicKeyRaType',
      quoteReport: 'QuoteReport',
      signPublicKeyPem: 'SignPublicKeyPem',
      signPublicKeyType: 'SignPublicKeyType',
      trustedMrEnclave: 'TrustedMrEnclave',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherSuite: 'string',
      enclaveData: 'string',
      encryptPublicKeyPem: 'string',
      encryptPublicKeyType: 'string',
      modifiedDate: 'string',
      publicKey: 'string',
      publicKeyRaBase64: 'string',
      publicKeyRaType: 'string',
      quoteReport: 'string',
      signPublicKeyPem: 'string',
      signPublicKeyType: 'string',
      trustedMrEnclave: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trustedMrEnclave)) {
      $dara.Model.validateArray(this.trustedMrEnclave);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

