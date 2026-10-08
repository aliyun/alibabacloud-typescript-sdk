// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is managed. Valid values: 1 (managed) and 0 (not managed).
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
   * The page number of the current page in a paging query. Settings the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance type. Valid values: BUY (official certificate) and TEST (test certificate).
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
   * - 1: is.
   * - 0: no.
   * 
   * @example
   * 1
   */
  serverDeployFlag?: number;
  /**
   * @remarks
   * The number of instances to display per page in a paging query. Settings the number of instances displayed per page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **inactive**: Pending use.
   * - **pending**: Under review. The latest certificate is being submitted for review.
   * - **willExpire**: The instance is about to expire.
   * - **expired**: The instance has expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Shutdown and unavailable.
   * 
   * @example
   * inactive
   */
  status?: string;
  /**
   * @remarks
   * The version type. Valid values: basic (Basic Edition), standard (Standard Edition), professional (Professional Edition), and ultimate (Ultimate Edition).
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

