// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateWithCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * CertKmcRep1.
   * 
   * @example
   * userSeal=MHkCIEu94PQAahFWuFk%
   * ***
   * EtFw%2FkMMBjw8i5bFfSkV%2FIUrcOJD
   */
  certKmcRep1?: string;
  /**
   * @remarks
   * Cert Sign Buf Kmc.
   * 
   * @example
   * userSeal=MHkCIEu94PQAahFWuFk%
   * ***
   * EtFw%2FkMMBjw8i5bFfSkV%2FIUrcOJD
   */
  certSignBufKmc?: string;
  /**
   * @remarks
   * The certificate chain of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate.
   * 
   * @example
   * 200ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 31C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the server certificate.
   * 
   * @example
   * 0f29522da2dae7a1c4b6ab7132ad3c06
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certKmcRep1: 'CertKmcRep1',
      certSignBufKmc: 'CertSignBufKmc',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certKmcRep1: 'string',
      certSignBufKmc: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

