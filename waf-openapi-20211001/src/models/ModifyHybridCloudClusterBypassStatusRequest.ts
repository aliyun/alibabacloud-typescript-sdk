// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterBypassStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The resource ID of the hybrid cloud cluster.
   * > Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation and find the target hybrid cloud cluster in the **ClusterInfos** array of the response. Use the value of the **ClusterResourceId** field. If no cluster is available, call the [CreateHybridCloudCluster](https://help.aliyun.com/document_detail/2980286.html) operation to create a hybrid cloud cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hdbc_cluster_****
   */
  clusterResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
  /**
   * @remarks
   * The enabling status of the manual bypass switch. Valid values:
   * 
   * - **on**: enabled.
   * 
   * - **off (default)**: shutdown.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clusterResourceId: 'ClusterResourceId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterResourceId: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

