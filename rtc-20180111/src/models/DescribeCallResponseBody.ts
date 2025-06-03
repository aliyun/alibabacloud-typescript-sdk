// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCallResponseBodyCallInfo } from "./DescribeCallResponseBodyCallInfo";
import { DescribeCallResponseBodyUserDetailList } from "./DescribeCallResponseBodyUserDetailList";


export class DescribeCallResponseBody extends $dara.Model {
  callInfo?: DescribeCallResponseBodyCallInfo;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      requestId: 'string',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.userDetailList)) {
      $dara.Model.validateArray(this.userDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

