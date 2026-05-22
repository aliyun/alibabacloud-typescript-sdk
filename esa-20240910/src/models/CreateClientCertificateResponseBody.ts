// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateResponseBody extends $dara.Model {
  CACertificateId?: string;
  certificate?: string;
  commonName?: string;
  fingerprintSha256?: string;
  id?: string;
  issuer?: string;
  notAfter?: string;
  notBefore?: string;
  privateKey?: string;
  requestId?: string;
  serialNumber?: string;
  signatureAlgorithm?: string;
  status?: string;
  validityDays?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      certificate: 'Certificate',
      commonName: 'CommonName',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      certificate: 'string',
      commonName: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      privateKey: 'string',
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

