// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManageLoginResponseBodyLoginInfo } from "./ManageLoginResponseBodyLoginInfo";


export class ManageLoginResponseBody extends $dara.Model {
  loginInfo?: ManageLoginResponseBodyLoginInfo;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginInfo: 'LoginInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginInfo: ManageLoginResponseBodyLoginInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginInfo && typeof (this.loginInfo as any).validate === 'function') {
      (this.loginInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

