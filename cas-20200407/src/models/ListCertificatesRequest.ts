// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * - BUY: a formal certificate.
   * - TEST: a test certificate.
   * - UPLOAD: an uploaded certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * - **issued**: Issued.
   * - **revoked**: Revoked.
   * - **willExpire**: About to expire.
   * - **expired**: Expired.
   * 
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The page number of the current page.
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
   * The keyword for fuzzy match. The keyword is matched against domain names, names, and corresponding resource IDs.
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
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

