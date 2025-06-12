// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLoginProfileResponseBodyLoginProfile } from "./CreateLoginProfileResponseBodyLoginProfile";


export class CreateLoginProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon configurations of the RAM user.
   */
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginProfile: 'LoginProfile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginProfile: CreateLoginProfileResponseBodyLoginProfile,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginProfile && typeof (this.loginProfile as any).validate === 'function') {
      (this.loginProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

