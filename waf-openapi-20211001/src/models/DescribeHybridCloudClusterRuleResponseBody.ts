// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRuleResponseBodyClusterRule extends $dara.Model {
  /**
   * @remarks
   * The resource ID of the cluster rule.
   * 
   * @example
   * hdbc-clusterrule-2m*****m0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The configuration of the traffic routing rule.
   * 
   * - **check_mode**: Defines the traffic scope for the routing rule. Valid values:
   * 
   *   - **all**: Routes all traffic.
   * 
   *   - **part**: Routes a portion of the traffic.
   * 
   * - **type**: The rule\\"s match type. Valid values:
   * 
   *   - **exact**: Exact match.
   * 
   *   - **regex**: Regular expression match.
   * 
   * - **substance**: The value of the rule.
   * 
   * @example
   * {\\"check_mode\\":\\"all\\",\\"exclude\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule.
   * 
   * - pullin: The traffic routing rule.
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRuleResourceId: 'ClusterRuleResourceId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRuleResourceId: 'string',
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

export class DescribeHybridCloudClusterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rule.
   */
  clusterRule?: DescribeHybridCloudClusterRuleResponseBodyClusterRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F29A6D2-9EB6-526D-A997-36888**99CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRule: 'ClusterRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRule: DescribeHybridCloudClusterRuleResponseBodyClusterRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterRule && typeof (this.clusterRule as any).validate === 'function') {
      (this.clusterRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

