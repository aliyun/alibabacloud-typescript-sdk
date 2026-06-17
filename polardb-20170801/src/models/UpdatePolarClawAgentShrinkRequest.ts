// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent to update.
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
   * The new avatar for the agent.
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * The file list to update.
   * 
   * @example
   * [{"FileName":"SOUL.md","FileContent":"You are a helpful assistant."}]
   */
  filesShrink?: string;
  /**
   * @remarks
   * The model to override the agent\\"s default setting.
   * 
   * @example
   * claude-sonnet-4-5
   */
  model?: string;
  /**
   * @remarks
   * The new display name for the agent.
   * 
   * @example
   * Work Bot
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the update. The default value is true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * The new path for the agent\\"s workspace.
   * 
   * @example
   * /home/node/.openclaw/workspace-work-v2
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      avatar: 'Avatar',
      filesShrink: 'Files',
      model: 'Model',
      name: 'Name',
      restart: 'Restart',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      avatar: 'string',
      filesShrink: 'string',
      model: 'string',
      name: 'string',
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

