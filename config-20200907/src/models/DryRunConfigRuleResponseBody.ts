// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunConfigRuleResponseBody extends $dara.Model {
  /**
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C32EEAD7-BF64-5927-977A-AFF9342B7275
   */
  requestId?: string;
  /**
   * @example
   * {
   * 			"result":"NON_COMPLIANT",
   * 			"children":[
   * 				{
   * 					"featureValue":"1",
   * 					"featureSource":"CONFIGURATION",
   * 					"result":"NON_COMPLIANT",
   * 					"desired":"4",
   * 					"children":[],
   * 					"operator":"StringEquals",
   * 					"featurePath":"$.Cpu"
   * 				}
   * 			],
   * 			"operator":"and"
   * 		}
   * 	}
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

