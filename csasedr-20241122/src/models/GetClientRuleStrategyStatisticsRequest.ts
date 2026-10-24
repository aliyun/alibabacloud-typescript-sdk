// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientRuleStrategyStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The policy type. Set this parameter to 2 to query the statistics of proactive defense policies.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  policyType?: number;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

