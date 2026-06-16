// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the CA. Valid values:
   * 
   * - issue: enabled.
   * 
   * - forbidden: disabled.
   * 
   * - revoke: revoked.
   * 
   * @example
   * issue
   */
  caStatus?: string;
  /**
   * @remarks
   * The type of the CA. Valid values:
   * 
   * - root: root CA.
   * 
   * - subRoot: intermediate CA.
   * 
   * - externalCa: an imported external CA.
   * 
   * @example
   * subRoot
   */
  certType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) to query the unique identifiers of all CA certificates.
   * 
   * @example
   * 1ee47e24-c51b-67cc-aa6b-1f7561cf9d9a
   */
  identifier?: string;
  /**
   * @remarks
   * The issuer of the CA. Valid values:
   * 
   * - local: private certificate.
   * 
   * - iTrusChina: a trusted CA.
   * 
   * - external: an imported external CA.
   * 
   * @example
   * local
   */
  issuerType?: string;
  /**
   * @remarks
   * The resource group ID. You can obtain this ID by calling the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The validity status of the CA. Valid values:
   * 
   * - valid: The CA certificate is valid.
   * 
   * - notValid: The CA certificate has expired.
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

