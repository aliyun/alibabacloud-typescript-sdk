// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is managed. Valid values:
   * - 1: Managed.
   * - 0: Not managed.
   * 
   * @example
   * 1
   */
  autoReissueFlag?: number;
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
   * - BUY: formal certificate.
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
   * Specifies whether to return only instances that meet server deployment conditions. Valid values:
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 1
   */
  serverDeployFlag?: number;
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
   * - **willExpire**: The instance is about to expire.
   * - **expired**: The instance has expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Closed. The instance is unavailable.
   * 
   * @example
   * inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoReissueFlag: 'AutoReissueFlag',
      brand: 'Brand',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      currentPage: 'CurrentPage',
      instanceType: 'InstanceType',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      serverDeployFlag: 'ServerDeployFlag',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissueFlag: 'number',
      brand: 'string',
      certificateStatus: 'string',
      certificateType: 'string',
      currentPage: 'number',
      instanceType: 'string',
      keyword: 'string',
      resourceGroupId: 'string',
      serverDeployFlag: 'number',
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

