// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawAgentFileResponseBodyFile extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * You are a helpful assistant.
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the file is missing.
   * 
   * @example
   * false
   */
  missing?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SOUL.md
   */
  name?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /home/node/.openclaw/workspace-main/SOUL.md
   */
  path?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The last updated UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1716000000000
   */
  updatedAtMs?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      missing: 'Missing',
      name: 'Name',
      path: 'Path',
      size: 'Size',
      updatedAtMs: 'UpdatedAtMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      missing: 'boolean',
      name: 'string',
      path: 'string',
      size: 'number',
      updatedAtMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawAgentFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The file details.
   */
  file?: DescribePolarClawAgentFileResponseBodyFile;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The working directory path.
   * 
   * @example
   * /home/node/.openclaw/workspace-main
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      file: 'File',
      message: 'Message',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      file: DescribePolarClawAgentFileResponseBodyFile,
      message: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

