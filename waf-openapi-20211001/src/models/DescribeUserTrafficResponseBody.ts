// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTrafficResponseBodyUserTraffic extends $dara.Model {
  /**
   * @remarks
   * The sequence number sorted in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 1024
   */
  pv?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      pv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC10C9EA-A367-52D5-***-***
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user traffic data.
   */
  userTraffic?: DescribeUserTrafficResponseBodyUserTraffic[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userTraffic: 'UserTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userTraffic: { 'type': 'array', 'itemType': DescribeUserTrafficResponseBodyUserTraffic },
    };
  }

  validate() {
    if(Array.isArray(this.userTraffic)) {
      $dara.Model.validateArray(this.userTraffic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

