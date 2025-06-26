// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfigDashScopeConfigAppCredentials } from "./AgentServiceConfigDashScopeConfigAppCredentials";


export class AgentServiceConfigDashScopeConfig extends $dara.Model {
  appCredentials?: AgentServiceConfigDashScopeConfigAppCredentials[];
  static names(): { [key: string]: string } {
    return {
      appCredentials: 'appCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCredentials: { 'type': 'array', 'itemType': AgentServiceConfigDashScopeConfigAppCredentials },
    };
  }

  validate() {
    if(Array.isArray(this.appCredentials)) {
      $dara.Model.validateArray(this.appCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

