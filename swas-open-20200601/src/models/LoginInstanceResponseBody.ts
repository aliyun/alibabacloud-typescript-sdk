// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The session protocol.
   * 
   * @example
   * SSH
   */
  protocol?: string;
  /**
   * @remarks
   * The URL of the remote logon desktop.
   * 
   * @example
   * https://ecs-workbench.aliyun.com/view/instance/single/gbktfz****
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2DE174B-7196-5778-A00D-6EA2601B****
   */
  requestId?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * ik1mb2g69ksagyybrd13be7h3655yuhb
   */
  securityToken?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * s-0rwwbwxymfzobrcz8
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      redirectUrl: 'RedirectUrl',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      redirectUrl: 'string',
      requestId: 'string',
      securityToken: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

