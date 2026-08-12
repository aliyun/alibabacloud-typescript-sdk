// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The hybrid cloud cluster ID.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  clusterId?: number;
  /**
   * @remarks
   * The cluster rule resource ID.
   * 
   * @example
   * hdbc-clusterrule-*******m0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-uqm33n***02
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** The rule type. Valid values:
   * - **pullin**: cluster traffic redirection
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

