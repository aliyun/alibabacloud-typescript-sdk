// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is managed. Valid values:
   * - 1: Managed.
   * - 0: Unmanaged.
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
   * The certificate status. Valid values:
   * - **issued**: Issued.
   * - **revoked**: Revoked.
   * - **willExpire**: Expiring soon.
   * - **expired**: Expired.
   * 
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The certificate type. Valid values: DV, OV, and EV.
   * 
   * @example
   * DV
   */
  certificateType?: string;
  /**
   * @remarks
   * The paging Settings for the current page number in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - BUY: Official certificate.
   * - TEST: Test certificate.
   * 
   * @example
   * BUY
   */
  instanceType?: string;
  /**
   * @remarks
   * The keyword for fuzzy search. It matches domain names, instance names, or corresponding resource IDs.
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
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return only instances that meet the server deployment conditions. Valid values:
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 1
   */
  serverDeployFlag?: number;
  /**
   * @remarks
   * The paging Settings for the number of instances to return on each page in a paged query. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **inactive**: Pending.
   * - **pending**: Under review. The latest certificate is submitted for review.
   * - **willExpire**: Expiring soon.
   * - **expired**: Expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Closed. The instance cannot be used.
   * 
   * @example
   * inactive
   */
  status?: string;
  /**
   * @remarks
   * The edition. Valid values: basic, standard, professional, and ultimate.
   * 
   * @example
   * professional
   */
  versionType?: string;
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
      versionType: 'VersionType',
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
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

