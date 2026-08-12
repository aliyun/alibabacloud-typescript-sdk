// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * > This parameter applies only to hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain hybrid cloud cluster information.
   * 
   * This parameter is required.
   * 
   * @example
   * 428
   */
  clusterId?: number;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
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
   * The traffic redirection rule configuration.
   * 
   * > The mode options are mutually exclusive. You can select only one. If you change the mode, all traffic redirection rules under the original mode are cleared.
   * - **check_mode**: the mode. Valid values:
   *     - **all**: full traffic redirection.
   *     - **part**: partial traffic redirection.
   * - **type**: the rule matching type. Valid values:
   *     - **exact**: exact match.
   *     - **regex**: regular expression.
   * - **substance**: the rule value.
   * 
   * @example
   * full volume drainage:{\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   * Specified partial drainage：{\\"check_mode\\": \\"part\\", \\"type\\": \\"exact\\", \\"substance\\": \\"12222\\"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **pullin**: cluster traffic redirection.
   * 
   * This parameter is required.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
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

