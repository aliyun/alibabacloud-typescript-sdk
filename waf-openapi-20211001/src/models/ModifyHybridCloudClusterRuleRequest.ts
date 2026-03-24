// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * [Deprecated] The hybrid cloud cluster ID.
   * 
   * @example
   * 10*
   */
  clusterId?: number;
  /**
   * @remarks
   * The cluster rule resource ID.
   * 
   * @example
   * hdbc-clusterrule-*******ym0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The Web Application Firewall (WAF) instance ID.
   * 
   * > Call [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) to query the current WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
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
   * The traffic routing rule configuration:
   * 
   * >Notice: 
   * 
   * The mode cannot be changed after it is selected.
   * 
   * 
   * 
   * - **check_mode** Defines the traffic scope for the routing rule. Valid values:
   * 
   *   - **all**: Routes all traffic.
   * 
   *   - **part**: Routes a specified portion of traffic.
   * 
   * - **type**: The rule\\"s match type. Valid values:
   * 
   *   - **exact**: Exact match
   * 
   *   - **regex**: Regular expression match.
   * 
   * - **substance**: The value of the rule.
   * 
   * @example
   * {\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **on**: Enabled
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * [Deprecated] The rule type. Valid values:
   * 
   * - **pullin**: Traffic routing configuration.
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

