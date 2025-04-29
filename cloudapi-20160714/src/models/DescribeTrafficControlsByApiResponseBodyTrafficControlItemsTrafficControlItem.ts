// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem extends $dara.Model {
  /**
   * @remarks
   * The binding time of the policy.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  trafficControlItemId?: string;
  /**
   * @remarks
   * The name of the throttling policy.
   * 
   * @example
   * mysecret
   */
  trafficControlItemName?: string;
  static names(): { [key: string]: string } {
    return {
      boundTime: 'BoundTime',
      trafficControlItemId: 'TrafficControlItemId',
      trafficControlItemName: 'TrafficControlItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTime: 'string',
      trafficControlItemId: 'string',
      trafficControlItemName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

