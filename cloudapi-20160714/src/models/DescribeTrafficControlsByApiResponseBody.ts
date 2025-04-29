// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsByApiResponseBodyTrafficControlItems } from "./DescribeTrafficControlsByApiResponseBodyTrafficControlItems";


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

