// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDefaultIPSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether basic policies are enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125adf1
   */
  requestId?: string;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose.
   * *   **2**: medium.
   * *   **3**: strict.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the intrusion prevention system (IPS). Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      requestId: 'RequestId',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      requestId: 'string',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

