// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpDingtalkSubConfig extends $dara.Model {
  appKey?: string;
  appSecret?: string;
  corpId?: string;
  eventAesKey?: string;
  eventLabel?: string;
  eventVerifyToken?: string;
  exclusive?: boolean;
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

