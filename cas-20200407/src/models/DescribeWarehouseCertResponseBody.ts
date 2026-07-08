// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWarehouseCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * @example
   * issued
   */
  certStatus?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * OV
   */
  certType?: string;
  /**
   * @remarks
   * The common name of the certificate subject. This field is empty if the certificate subject does not include a common name (CN).
   * 
   * @example
   * aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The content of the certificate, including the certificate chain.
   * 
   * @example
   * ---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * The fingerprint of the certificate content.
   * 
   * @example
   * C1291AF83F48170E48140FDFE5DADC19FE51F261
   */
  fingerprint?: string;
  /**
   * @remarks
   * The common name (or organization name) of the issuer.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The unique identifier of the issuer certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  issuerIdentifier?: string;
  /**
   * @remarks
   * The instance ID of the private CA instance associated with the certificate.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  privateCaInstanceId?: string;
  /**
   * @remarks
   * The region ID of the private CA instance associated with the certificate.
   * 
   * @example
   * cn-hangzhou
   */
  privateCaRegionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the certificate warehouse.
   * 
   * @example
   * 66
   */
  warehouseInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      certStatus: 'CertStatus',
      certType: 'CertType',
      commonName: 'CommonName',
      content: 'Content',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      issuerIdentifier: 'IssuerIdentifier',
      privateCaInstanceId: 'PrivateCaInstanceId',
      privateCaRegionId: 'PrivateCaRegionId',
      requestId: 'RequestId',
      warehouseInstanceId: 'WarehouseInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      certStatus: 'string',
      certType: 'string',
      commonName: 'string',
      content: 'string',
      fingerprint: 'string',
      issuer: 'string',
      issuerIdentifier: 'string',
      privateCaInstanceId: 'string',
      privateCaRegionId: 'string',
      requestId: 'string',
      warehouseInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

