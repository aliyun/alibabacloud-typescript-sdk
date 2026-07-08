// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudClusterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Hybrid Cloud WAF cluster.
   * 
   * > This parameter applies only to hybrid cloud scenarios. Call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to obtain information about Hybrid Cloud WAF clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * 428
   */
  clusterId?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqt****
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
  /**
   * @remarks
   * The configuration of the traffic redirection rule, in JSON format.
   * 
   * > The modes are mutually exclusive. You can select only one mode. If you change the mode, all traffic redirection rules in the previous mode are cleared.
   * 
   * - **check_mode**: the traffic redirection mode. Valid values:
   * 
   *   - **all**: redirects all traffic.
   * 
   *   - **part**: redirects a specific portion of traffic.
   * 
   * - **type**: the match type for the rule. Valid values:
   * 
   *   - **exact**: exact match.
   * 
   *   - **regex**: regular expression match.
   * 
   * - **substance**: the match value of the rule.
   * 
   * @example
   * full volume drainage:{\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   * Specified partial drainage：{\\"check_mode\\": \\"part\\", \\"type\\": \\"exact\\", \\"substance\\": \\"12222\\"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the traffic redirection rule. Valid values:
   * 
   * - **on**: enabled.
   * 
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
   * The type of the traffic redirection rule. Valid values:
   * 
   * - **pullin**: traffic redirection
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

