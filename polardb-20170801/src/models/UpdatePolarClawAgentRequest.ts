// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentRequestFiles extends $dara.Model {
  /**
   * @remarks
   * File content
   * 
   * @example
   * You are a helpful assistant.
   */
  fileContent?: string;
  /**
   * @remarks
   * File name, must be one of the allowed file names (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md, MEMORY.md, MEMORY.alt.md)
   * 
   * @example
   * SOUL.md
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawAgentRequest extends $dara.Model {
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
  files?: UpdatePolarClawAgentRequestFiles[];
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
      files: 'Files',
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
      files: { 'type': 'array', 'itemType': UpdatePolarClawAgentRequestFiles },
      isDefault: 'boolean',
      keepWorkspaceFiles: 'boolean',
      model: 'string',
      name: 'string',
      restart: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

