// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter keys. You can specify at most five filter keys. Valid values of **N**: **1 to 5**. The following filter keys are supported:
   * 
   * *   **VpcId**: virtual private cloud (VPC) ID
   * *   **VSwitchId**: vSwitch ID
   * *   **Status**: HAVIP status
   * *   **HaVipId**: HAVIP ID
   * *   **HaVipAddress**: HAVIP IP address
   * 
   * You can specify multiple values for each filter key. The logical operator among multiple values is OR. If one value is matched, the filter key is matched.
   * 
   * The logical operator among multiple filter keys is AND. HAVIPs can be queried only if all filter keys are matched.
   * 
   * @example
   * HaVipId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key. Valid values of **N**: **1 to 5**.
   * 
   * @example
   * havip-bp19o63nequs01i8d****
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

