// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRuleResponseBodyClusterRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster rule resource.
   * 
   * @example
   * hdbc-clusterrule-2m*****m0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The traffic diversion rule configuration:
   * 
   * - **check_mode**: The mode selection. Valid values:
   *   - **all**: full traffic diversion
   *   - **part**: specified partial traffic diversion
   * - **type**: The rule match type. Valid values:
   *   - **exact**: exact match
   *   - **regex**: regular expression
   * - **substance**: The rule value.
   * 
   * @example
   * {\\"check_mode\\":\\"all\\",\\"exclude\\":{\\"exact\\":[],\\"regex\\":[]}}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The rule status. Valid values:
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
   * The rule type. Valid values:
   * 
   * - pullin: traffic diversion rule
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
   * The rule information.
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

