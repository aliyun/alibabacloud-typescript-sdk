// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * You are a helpful assistant.
   */
  fileContent?: string;
  /**
   * @remarks
   * The file name. This must be one of the allowed file names: AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md, MEMORY.md, or MEMORY.alt.md.
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
  files?: UpdatePolarClawAgentRequestFiles[];
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
      files: 'Files',
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

