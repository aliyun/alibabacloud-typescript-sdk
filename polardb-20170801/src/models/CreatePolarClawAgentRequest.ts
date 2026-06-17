// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The avatar\\"s URL or path.
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * The emoji character.
   * 
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the agent is created. The default value is `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * The absolute path of the agent workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/node/.openclaw/workspace-work
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      avatar: 'Avatar',
      emoji: 'Emoji',
      restart: 'Restart',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      avatar: 'string',
      emoji: 'string',
      restart: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

