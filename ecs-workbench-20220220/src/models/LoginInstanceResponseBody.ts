// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginInstanceResponseBodyRootDisposableAccount extends $dara.Model {
  /**
   * @example
   * abc
   */
  loginFormActionUrl?: string;
  /**
   * @example
   * abc
   */
  loginUrl?: string;
  static names(): { [key: string]: string } {
    return {
      loginFormActionUrl: 'LoginFormActionUrl',
      loginUrl: 'LoginUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginFormActionUrl: 'string',
      loginUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView extends $dara.Model {
  /**
   * @example
   * abc
   */
  defaultViewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      defaultViewUrl: 'DefaultViewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultViewUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootInstanceLoginInfoList extends $dara.Model {
  /**
   * @example
   * i-abc
   */
  instanceId?: string;
  /**
   * @example
   * 134
   */
  instanceLoginToken?: string;
  instanceLoginView?: LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView;
  /**
   * @example
   * true
   */
  loginSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceLoginToken: 'InstanceLoginToken',
      instanceLoginView: 'InstanceLoginView',
      loginSuccess: 'LoginSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceLoginToken: 'string',
      instanceLoginView: LoginInstanceResponseBodyRootInstanceLoginInfoListInstanceLoginView,
      loginSuccess: 'boolean',
    };
  }

  validate() {
    if(this.instanceLoginView && typeof (this.instanceLoginView as any).validate === 'function') {
      (this.instanceLoginView as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRootSessionControl extends $dara.Model {
  /**
   * @example
   * abc
   */
  baseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBodyRoot extends $dara.Model {
  disposableAccount?: LoginInstanceResponseBodyRootDisposableAccount;
  instanceLoginInfoList?: LoginInstanceResponseBodyRootInstanceLoginInfoList[];
  sessionControl?: LoginInstanceResponseBodyRootSessionControl;
  static names(): { [key: string]: string } {
    return {
      disposableAccount: 'DisposableAccount',
      instanceLoginInfoList: 'InstanceLoginInfoList',
      sessionControl: 'SessionControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disposableAccount: LoginInstanceResponseBodyRootDisposableAccount,
      instanceLoginInfoList: { 'type': 'array', 'itemType': LoginInstanceResponseBodyRootInstanceLoginInfoList },
      sessionControl: LoginInstanceResponseBodyRootSessionControl,
    };
  }

  validate() {
    if(this.disposableAccount && typeof (this.disposableAccount as any).validate === 'function') {
      (this.disposableAccount as any).validate();
    }
    if(Array.isArray(this.instanceLoginInfoList)) {
      $dara.Model.validateArray(this.instanceLoginInfoList);
    }
    if(this.sessionControl && typeof (this.sessionControl as any).validate === 'function') {
      (this.sessionControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * abc-123
   */
  requestId?: string;
  root?: LoginInstanceResponseBodyRoot;
  /**
   * @example
   * true/false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: LoginInstanceResponseBodyRoot,
      success: 'string',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

