// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgentServiceConfigDashScopeConfigAppCredentials extends $dara.Model {
  apiKey?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      appId: 'appId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

