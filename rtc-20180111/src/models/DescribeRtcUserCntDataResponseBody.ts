// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeUserCnt?: number;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeUserCnt: 'ActiveUserCnt',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCnt: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval extends $dara.Model {
  userCntModule?: DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule[];
  static names(): { [key: string]: string } {
    return {
      userCntModule: 'UserCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCntModule: { 'type': 'array', 'itemType': DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule },
    };
  }

  validate() {
    if(Array.isArray(this.userCntModule)) {
      $dara.Model.validateArray(this.userCntModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  userCntDataPerInterval?: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userCntDataPerInterval: 'UserCntDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userCntDataPerInterval: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval,
    };
  }

  validate() {
    if(this.userCntDataPerInterval && typeof (this.userCntDataPerInterval as any).validate === 'function') {
      (this.userCntDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

