// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The ID of the hybrid cloud cluster.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the cluster rule resource.
   * 
   * @example
   * hdbc-clusterrule-*******m0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uqm33n***02
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: The Chinese mainland.
   * 
   * - **ap-southeast-1**: Outside the Chinese mainland.
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
   * **[Deprecated]** The rule type. Valid values:
   * - **pullin**: cluster traffic diversion
   * 
   * @example
   * pullin
   * 
   * @deprecated
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterRuleResourceId: 'ClusterRuleResourceId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      clusterRuleResourceId: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

