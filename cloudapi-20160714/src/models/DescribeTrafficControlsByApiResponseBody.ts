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

export class DescribeTrafficControlsByApiResponseBodyTrafficControlItems extends $dara.Model {
  trafficControlItem?: DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      trafficControlItem: 'TrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControlItem: { 'type': 'array', 'itemType': DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlItem)) {
      $dara.Model.validateArray(this.trafficControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficControlsByApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The returned throttling policy information. It is an array consisting of TrafficControlItem data.
   */
  trafficControlItems?: DescribeTrafficControlsByApiResponseBodyTrafficControlItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlItems: 'TrafficControlItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlItems: DescribeTrafficControlsByApiResponseBodyTrafficControlItems,
    };
  }

  validate() {
    if(this.trafficControlItems && typeof (this.trafficControlItems as any).validate === 'function') {
      (this.trafficControlItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

