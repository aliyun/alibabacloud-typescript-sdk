// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn extends $dara.Model {
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of alerting events that are triggered.
   * 
   * @example
   * 5
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

