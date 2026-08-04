// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpDingtalkSubConfig extends $dara.Model {
  /**
   * @remarks
   * Your application\\"s unique identifier. You can get this identifier from the DingTalk Open Platform.
   */
  appKey?: string;
  /**
   * @remarks
   * Your application\\"s secret key. You can get this key from the DingTalk Open Platform.
   */
  appSecret?: string;
  /**
   * @remarks
   * Your enterprise\\"s unique ID in DingTalk.
   */
  corpId?: string;
  /**
   * @remarks
   * The AES key used to decrypt the content of event callbacks. This ensures the confidentiality of the event data.
   */
  eventAesKey?: string;
  /**
   * @remarks
   * A custom label for event subscriptions. This field is reserved for future use.
   */
  eventLabel?: string;
  /**
   * @remarks
   * The token used to verify the authenticity of event callback requests from DingTalk.
   */
  eventVerifyToken?: string;
  /**
   * @remarks
   * Specifies whether this identity provider is the exclusive login method. If set to `true`, other login methods are disabled.
   */
  exclusive?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the OAuth authentication flow.
   */
  oauth?: boolean;
  /**
   * @remarks
   * The URL where the user is redirected after successful authorization. You must register this URL on the DingTalk Open Platform.
   */
  redirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      eventAesKey: 'EventAesKey',
      eventLabel: 'EventLabel',
      eventVerifyToken: 'EventVerifyToken',
      exclusive: 'Exclusive',
      oauth: 'Oauth',
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      eventAesKey: 'string',
      eventLabel: 'string',
      eventVerifyToken: 'string',
      exclusive: 'boolean',
      oauth: 'boolean',
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

