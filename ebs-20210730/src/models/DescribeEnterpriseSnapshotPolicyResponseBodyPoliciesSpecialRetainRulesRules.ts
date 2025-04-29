// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The unit of the special retention period.
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * The value of the retention period.
   * 
   * @example
   * 1
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period.
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

