// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageLoginResponseBodyLoginInfo extends $dara.Model {
  adbLoginPort?: number;
  /**
   * @example
   * 12.10.4.10
   */
  loginHostname?: string;
  /**
   * @example
   * 10004
   */
  loginPort?: number;
  static names(): { [key: string]: string } {
    return {
      adbLoginPort: 'AdbLoginPort',
      loginHostname: 'LoginHostname',
      loginPort: 'LoginPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbLoginPort: 'number',
      loginHostname: 'string',
      loginPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

