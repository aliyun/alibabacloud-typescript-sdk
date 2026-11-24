// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpWeixin2SubConfig extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the WeCom application.
   * 
   * @example
   * 1000002
   */
  agentId?: string;
  /**
   * @remarks
   * The schema used to launch the application from the WeCom Android client.
   * 
   * @example
   * wwautha1b2c3****
   */
  appSchema?: string;
  /**
   * @remarks
   * The secret of the WeCom application.
   * 
   * @example
   * s1e2c3r4e5****
   */
  appSecret?: string;
  /**
   * @remarks
   * The WeCom enterprise ID (CorpId).
   * 
   * @example
   * wwa1b2c3d4****
   */
  corpId?: string;
  /**
   * @remarks
   * The AES encryption key for WeCom event callbacks.
   * 
   * @example
   * a1e2s3k4e5****
   */
  eventAesKey?: string;
  /**
   * @remarks
   * The label (callback URL) for WeCom event callbacks.
   * 
   * @example
   * https://auth.example.com/callback/wework/a1b2****
   */
  eventLabel?: string;
  /**
   * @remarks
   * The verification token for WeCom event callbacks.
   * 
   * @example
   * v1t2o3k4e5****
   */
  eventVerifyToken?: string;
  /**
   * @remarks
   * The callback URL for WeCom logon authorization.
   * 
   * @example
   * https://auth.example.com/callback
   */
  redirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      appSchema: 'AppSchema',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      eventAesKey: 'EventAesKey',
      eventLabel: 'EventLabel',
      eventVerifyToken: 'EventVerifyToken',
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appSchema: 'string',
      appSecret: 'string',
      corpId: 'string',
      eventAesKey: 'string',
      eventLabel: 'string',
      eventVerifyToken: 'string',
      redirectUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

