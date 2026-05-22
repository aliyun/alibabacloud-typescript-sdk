// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadOriginClientCertificateResponseBody extends $dara.Model {
  commonName?: string;
  fingerprintSha256?: string;
  id?: string;
  issuer?: string;
  notAfter?: string;
  notBefore?: string;
  requestId?: string;
  serialNumber?: string;
  signatureAlgorithm?: string;
  status?: string;
  validityDays?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      validityDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

