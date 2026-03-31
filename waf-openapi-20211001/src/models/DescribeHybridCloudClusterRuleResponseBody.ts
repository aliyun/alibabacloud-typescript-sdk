// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRuleResponseBodyClusterRule extends $dara.Model {
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The configuration of the rule.
   * 
   * @example
   * {\\"check_mode\\":\\"all\\",\\"exclude\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * on
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **pullin**: The traffic redirection rule of the hybrid cloud cluster.
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
   * The details of the rule.
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

