// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance type of the rule. Valid values:
   * 
   * - COMPLIANT: Compliant.
   * 
   * - NON_COMPLIANT: Non-compliant.
   * 
   * - NOT_APPLICABLE: Not applicable.
   * 
   * - INSUFFICIENT_DATA: Insufficient data.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C32EEAD7-BF64-5927-977A-AFF9342B****
   */
  requestId?: string;
  /**
   * @remarks
   * The context of the rule conditions.
   * 
   * @example
   * {
   *   "result":"NON_COMPLIANT",
   *   "children":[
   *     {
   *       "featureValue":"1",
   *       "featureSource":"CONFIGURATION",
   *       "result":"NON_COMPLIANT",
   *       "desired":"4",
   *       "children":[],
   *       "operator":"StringEquals",
   *       "featurePath":"$.Cpu"
   *     }
   *   ],
   *   "operator":"and"
   * }
   */
  ruleConditionContext?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      requestId: 'RequestId',
      ruleConditionContext: 'RuleConditionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      requestId: 'string',
      ruleConditionContext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

