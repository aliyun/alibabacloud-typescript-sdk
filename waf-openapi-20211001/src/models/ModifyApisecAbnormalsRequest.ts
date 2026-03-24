// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecAbnormalsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of API security risk IDs.
   * 
   * This parameter is required.
   */
  abnormalIds?: string[];
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is available only for hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query information about hybrid cloud clusters.
   * 
   * @example
   * 428
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The remarks for the status change.
   * 
   * @example
   * already fixed.
   */
  note?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: a region outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the security risk. Valid values:
   * 
   * - **toBeConfirmed**: The security risk is to be confirmed.
   * 
   * - **confirmed**: The security risk is confirmed.
   * 
   * - **toBeFixed**: The security risk is to be fixed.
   * 
   * - **fixed**: The security risk is fixed.
   * 
   * - **ignored**: The security risk is ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * fixed
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalIds: 'AbnormalIds',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      note: 'Note',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      instanceId: 'string',
      note: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormalIds)) {
      $dara.Model.validateArray(this.abnormalIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

