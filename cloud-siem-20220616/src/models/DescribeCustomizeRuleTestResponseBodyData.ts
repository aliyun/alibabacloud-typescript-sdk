// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeRuleTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The historical data that is used in the simulation test.
   * 
   * @example
   * [{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]
   */
  simulateData?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   10: The simulation data is tested.
   * *   15: The business data is being tested.
   * *   20: The business data test ends.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      simulateData: 'SimulateData',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      simulateData: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

