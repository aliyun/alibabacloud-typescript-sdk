// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDefaultIPSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether basic policies are enabled. Valid values:
   * 
   * - **1**: On.
   * 
   * - **0**: Off.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * - **1**: On.
   * 
   * - **0**: Off.
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
   * 850A84D6-****-00090125adf1
   */
  requestId?: string;
  /**
   * @remarks
   * The IPS rule group. Valid values:
   * 
   * - **1**: Loose rule group.
   * 
   * - **2**: Medium rule group.
   * 
   * - **3**: Strict rule group.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the intrusion prevention system (IPS). Valid values:
   * 
   * - **1**: Block Mode.
   * 
   * - **0**: Monitor Mode.
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

