// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePdnsUserInfoResponseBodyUserInfo } from "./DescribePdnsUserInfoResponseBodyUserInfo";


export class DescribePdnsUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD552816-FCC8-4832-B4A2-2DA0C2BA1688
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
  userInfo?: DescribePdnsUserInfoResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribePdnsUserInfoResponseBodyUserInfo,
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

