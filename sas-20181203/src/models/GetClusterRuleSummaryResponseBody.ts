// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRuleSummaryResponseBodyClusterRuleSummary extends $dara.Model {
  /**
   * @remarks
   * The number of disabled cluster defense rules.
   * 
   * @example
   * 1
   */
  closeRuleCount?: number;
  /**
   * @remarks
   * The number of alerts that are triggered by the cluster defense rules in the last seven days.
   * 
   * @example
   * 10
   */
  interceptionCount7Day?: number;
  /**
   * @remarks
   * The status of the container firewall feature. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  interceptionSwitch?: number;
  /**
   * @remarks
   * The interception mode.
   * 
   * @example
   * 0
   */
  interceptionType?: number;
  /**
   * @remarks
   * The number of enabled cluster defense rules.
   * 
   * @example
   * 1
   */
  openRuleCount?: number;
  /**
   * @remarks
   * The total number of configured cluster defense rules.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * The number of recommended cluster defense rules.
   * 
   * @example
   * 1
   */
  suggestRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      closeRuleCount: 'CloseRuleCount',
      interceptionCount7Day: 'InterceptionCount7Day',
      interceptionSwitch: 'InterceptionSwitch',
      interceptionType: 'InterceptionType',
      openRuleCount: 'OpenRuleCount',
      ruleCount: 'RuleCount',
      suggestRuleCount: 'SuggestRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeRuleCount: 'number',
      interceptionCount7Day: 'number',
      interceptionSwitch: 'number',
      interceptionType: 'number',
      openRuleCount: 'number',
      ruleCount: 'number',
      suggestRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRuleSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The overall information about the cluster defense rules.
   */
  clusterRuleSummary?: GetClusterRuleSummaryResponseBodyClusterRuleSummary;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 291B49F9-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRuleSummary: 'ClusterRuleSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRuleSummary: GetClusterRuleSummaryResponseBodyClusterRuleSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterRuleSummary && typeof (this.clusterRuleSummary as any).validate === 'function') {
      (this.clusterRuleSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

