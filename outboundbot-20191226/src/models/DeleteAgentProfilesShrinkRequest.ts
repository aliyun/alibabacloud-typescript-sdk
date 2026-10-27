// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentProfilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of agent configuration IDs.
   */
  agentProfileIdsShrink?: string;
  /**
   * @remarks
   * The app_ip (system field, optional).
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileIdsShrink: 'AgentProfileIds',
      appIp: 'AppIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileIdsShrink: 'string',
      appIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

