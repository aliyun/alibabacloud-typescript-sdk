// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial extends $dara.Model {
  /**
   * @remarks
   * The AppId or user account corresponding to SpecialType.
   * 
   * @example
   * test_wg@aliyun.com
   */
  specialKey?: string;
  /**
   * @remarks
   * The throttling value.
   * 
   * @example
   * 100
   */
  trafficValue?: number;
  static names(): { [key: string]: string } {
    return {
      specialKey: 'SpecialKey',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialKey: 'string',
      trafficValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

