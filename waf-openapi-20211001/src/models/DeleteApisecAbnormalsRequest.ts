// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApisecAbnormalsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of API security risk IDs to delete. You can specify up to multiple risk IDs at a time.
   * 
   * This parameter is required.
   */
  abnormalIds?: string[];
  /**
   * @remarks
   * The ID of the Hybrid Cloud WAF cluster.
   * 
   * > This parameter applies only to hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query the ID of the Hybrid Cloud WAF cluster.
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
   * waf_v3prepaid_public_cn-nwy*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
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
  static names(): { [key: string]: string } {
    return {
      abnormalIds: 'AbnormalIds',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
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

