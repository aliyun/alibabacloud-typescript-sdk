// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID to update
   * 
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * Application ID
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * New avatar
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * List of files to update
   * 
   * @example
   * [{"FileName":"SOUL.md","FileContent":"You are a helpful assistant."}]
   */
  filesShrink?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * false
   */
  keepWorkspaceFiles?: boolean;
  /**
   * @remarks
   * Model override
   * 
   * @example
   * claude-sonnet-4-5
   */
  model?: string;
  /**
   * @remarks
   * New display name
   * 
   * @example
   * Work Bot
   */
  name?: string;
  /**
   * @remarks
   * Whether to restart the gateway after creation, default is true
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * New workspace directory path
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
      isDefault: 'IsDefault',
      keepWorkspaceFiles: 'KeepWorkspaceFiles',
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
      isDefault: 'boolean',
      keepWorkspaceFiles: 'boolean',
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

