// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * Ca status.
   * 
   * - issue: inUse.
   * - forbidden: forbidden.
   * - revoke: revoked.
   * 
   * @example
   * issue
   */
  caStatus?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * - root: rootCA.
   * - subRoot: subCA.
   * - externalCa: import.
   * 
   * @example
   * subRoot
   */
  certType?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifiers of all CA certificates.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The CA Issuer Type.
   * 
   * - local: Private certificate.
   * - iTrusChina: Compliance CA.
   * - external: External Import.
   * 
   * @example
   * local
   */
  issuerType?: string;
  /**
   * @remarks
   * The number of CA certificates per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * valid time.
   * 
   * - valid: means in the valid period.
   * - notValid: means expired.
   * 
   * @example
   * valid
   */
  validStatus?: string;
  static names(): { [key: string]: string } {
    return {
      caStatus: 'CaStatus',
      certType: 'CertType',
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      issuerType: 'IssuerType',
      showSize: 'ShowSize',
      validStatus: 'ValidStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caStatus: 'string',
      certType: 'string',
      currentPage: 'number',
      identifier: 'string',
      issuerType: 'string',
      showSize: 'number',
      validStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

