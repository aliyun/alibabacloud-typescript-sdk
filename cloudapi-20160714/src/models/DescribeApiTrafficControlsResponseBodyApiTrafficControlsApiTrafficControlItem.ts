// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 46fbb52840d146f186e38e8e70fc8c90
   */
  apiId?: string;
  /**
   * @remarks
   * API operation
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The binding time of the throttling policy.
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
  trafficControlId?: string;
  /**
   * @remarks
   * The name of the throttling policy.
   * 
   * @example
   * backendsignature
   */
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

