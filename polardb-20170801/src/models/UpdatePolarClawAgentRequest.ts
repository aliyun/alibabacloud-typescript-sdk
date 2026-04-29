// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentRequestFiles extends $dara.Model {
  /**
   * @example
   * You are a helpful assistant.
   */
  fileContent?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * test
   */
  avatar?: string;
  /**
   * @example
   * [{"FileName":"SOUL.md","FileContent":"You are a helpful assistant."}]
   */
  files?: UpdatePolarClawAgentRequestFiles[];
  /**
   * @example
   * claude-sonnet-4-5
   */
  model?: string;
  /**
   * @example
   * Work Bot
   */
  name?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
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

