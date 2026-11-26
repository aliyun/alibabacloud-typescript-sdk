// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLJobAgentServiceEnvVar } from "./RljobAgentServiceEnvVar";


export class RLJobAgentServiceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the companion AgentService for the job. Default value: false.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of name-value environment variables for AgentService. You cannot overwrite platform-reserved variables. The GetRLJob operation returns an asterisk (*) for the values of E2B_API_KEY and platform-specified credentials, and keeps other values unchanged. Automatic masking is not guaranteed for all custom sensitive values.
   */
  env?: RLJobAgentServiceEnvVar[];
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      env: { 'type': 'array', 'itemType': RLJobAgentServiceEnvVar },
    };
  }

  validate() {
    if(Array.isArray(this.env)) {
      $dara.Model.validateArray(this.env);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

