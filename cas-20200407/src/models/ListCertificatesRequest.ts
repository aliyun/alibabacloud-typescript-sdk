// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the certificate.
   * 
   * - BUY: A purchased certificate.
   * 
   * - TEST: A test certificate.
   * 
   * - UPLOAD: An uploaded certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * - **issued**: The certificate is issued.
   * 
   * - **revoked**: The certificate is revoked.
   * 
   * - **willExpire**: The certificate is about to expire.
   * 
   * - **expired**: The certificate has expired.
   * 
   * @example
   * issued
   */
  certificateStatus?: string;
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
   * The ID of the instance.
   * 
   * @example
   * cas-ivauto-hqito6
   */
  instanceId?: string;
  /**
   * @remarks
   * A keyword for a fuzzy query. The keyword can be a domain name, a certificate name, or a resource ID.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      certificateSource: 'CertificateSource',
      certificateStatus: 'CertificateStatus',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateSource: 'string',
      certificateStatus: 'string',
      currentPage: 'number',
      instanceId: 'string',
      keyword: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

