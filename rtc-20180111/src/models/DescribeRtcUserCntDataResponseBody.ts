// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval } from "./DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval";


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

