// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * @example
   * 1018
   */
  clusterId?: number;
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.[](~~140857~~)
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-n6w***x52m
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the WAF instance. Valid value:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
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
   * The configuration of the rule.
   * 
   * @example
   * {\\"check_mode\\":\\"part\\",\\"include\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **on**: enables the rule.
   * *   **off**: disables the rule.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **pullin**: The traffic redirection rule.
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

