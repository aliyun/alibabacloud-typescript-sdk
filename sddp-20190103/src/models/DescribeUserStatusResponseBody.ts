// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserStatusResponseBodyUserStatus } from "./DescribeUserStatusResponseBodyUserStatus";


export class DescribeUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the current account.
   */
  userStatus?: DescribeUserStatusResponseBodyUserStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatus: DescribeUserStatusResponseBodyUserStatus,
    };
  }

  validate() {
    if(this.userStatus && typeof (this.userStatus as any).validate === 'function') {
      (this.userStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

