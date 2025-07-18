// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpFeishuSubConfig extends $dara.Model {
  appId?: string;
  appSecret?: string;
  corpId?: string;
  eventAesKey?: string;
  eventLabel?: string;
  eventVerifyToken?: string;
  redirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

