// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The CA brand. Valid values: WoSign, CFCA, DigiCert, GeoTrust, GlobalSign, vTrus, and Alibaba.
   * 
   * @example
   * Digicert
   */
  brand?: string;
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
   * The type of the certificate. Valid values: DV, OV, and EV.
   * 
   * @example
   * DV
   */
  certificateType?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - BUY: official certificate.
   * - TEST: test certificate.
   * 
   * @example
   * BUY
   */
  instanceType?: string;
  /**
   * @remarks
   * The keyword for fuzzy search. Matches domain names, instance names, or corresponding resource IDs.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of instances to display per page in a paged query. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **inactive**: Pending use.
   * - **pending**: Under review. The latest certificate is being reviewed.
   * - **willExpire**: About to expire.
   * - **expired**: Expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Closed and unavailable.
   * 
   * @example
   * inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      currentPage: 'CurrentPage',
      instanceType: 'InstanceType',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      certificateStatus: 'string',
      certificateType: 'string',
      currentPage: 'number',
      instanceType: 'string',
      keyword: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

