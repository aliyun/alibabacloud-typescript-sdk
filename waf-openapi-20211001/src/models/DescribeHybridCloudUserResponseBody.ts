// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudUserResponseBodyUserInfo } from "./DescribeHybridCloudUserResponseBodyUserInfo";


export class DescribeHybridCloudUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9178CB86-285F-5679-A30A-3B3F007E4206
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ports that can be used by a hybrid cloud cluster.
   */
  userInfo?: DescribeHybridCloudUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribeHybridCloudUserResponseBodyUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

