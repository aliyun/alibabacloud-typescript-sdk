// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * [Deprecated] The ID of the hybrid cloud cluster.
   * 
   * @example
   * 10*
   */
  clusterId?: number;
  /**
   * @remarks
   * The resource ID of the cluster rule.
   * 
   * @example
   * hdbc-clusterrule-*******ym0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
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
   * The traffic redirection rule configuration.
   * 
   * <notice>The mode cannot be modified.</notice>
   * - **check_mode**: The mode. Valid values:
   *   - **all**: full traffic redirection.
   *   - **part**: partial traffic redirection.
   * - **type**: The rule matching type. Valid values:
   *   - **exact**: exact match.
   *   - **regex**: regular expression.
   * - **substance**: The rule value.
   * 
   * @example
   * {\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * [Deprecated] The rule type. Valid values:
   * - **pullin**: traffic redirection configuration.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterRuleResourceId: 'ClusterRuleResourceId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
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
      ruleConfig: 'string',
      ruleStatus: 'string',
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

