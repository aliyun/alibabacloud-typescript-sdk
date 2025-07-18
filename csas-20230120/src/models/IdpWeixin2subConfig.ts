// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpWeixin2SubConfig extends $dara.Model {
  agentId?: string;
  appSchema?: string;
  appSecret?: string;
  corpId?: string;
  eventAesKey?: string;
  eventLabel?: string;
  eventVerifyToken?: string;
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

