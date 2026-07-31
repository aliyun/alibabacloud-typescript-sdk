// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * A Map type. In custom Agent scenarios, some placeholder parameters can be replaced through this value.
   * 
   * @example
   * {
   *    "key1": "value1",
   *    "key2": "value2"
   * }
   */
  context?: any;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionRequestParamsPromptMeta extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to hide this prompt from the user. For example, in a chat dialog box, the user asks a question such as "Sales amount in the last 7 days". Before calling the OpenAPI, the calling system retrieves some business domain knowledge through RAG that needs to be added to the Agent context but should not be displayed to the user. In this case, set this value to true.
   * 
   * @example
   * true or false
   */
  hide?: boolean;
  static names(): { [key: string]: string } {
    return {
      hide: 'Hide',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hide: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionRequestParamsPrompt extends $dara.Model {
  /**
   * @remarks
   * The file description.
   * 
   * @example
   * Effective when Type=resource_link. Example: SalesOrderDetails.csv.
   */
  description?: string;
  /**
   * @remarks
   * The DataWorks extended prompt meta information.
   */
  meta?: PromptAgentSessionRequestParamsPromptMeta;
  /**
   * @remarks
   * The MIME type of the file.
   * 
   * @example
   * Effective when Type=resource_link. Example: text/csv.
   */
  mimeType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Effective when Type=resource_link. Example: xxx.csv.
   */
  name?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * Effective when Type=resource_link. Example: 1231231
   */
  size?: number;
  /**
   * @remarks
   * **The text content.**
   * 
   * @example
   * Effective when Type=text. Example: Sales amount in the last 7 days.
   */
  text?: string;
  /**
   * @remarks
   * The title of the file.
   * 
   * @example
   * Effective when Type=resource_link. Example: SalesOrderDetails.csv.
   */
  title?: string;
  /**
   * @remarks
   * **The content block type.**
   * 
   * @example
   * Currently supported: text, resource_link.
   */
  type?: string;
  /**
   * @remarks
   * The URI of the file.
   * 
   * @example
   * Effective when Type=resource_link. Example: oss://${bucket}/${ossKey}
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      meta: 'Meta',
      mimeType: 'MimeType',
      name: 'Name',
      size: 'Size',
      text: 'Text',
      title: 'Title',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      meta: PromptAgentSessionRequestParamsPromptMeta,
      mimeType: 'string',
      name: 'string',
      size: 'number',
      text: 'string',
      title: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionRequestParams extends $dara.Model {
  /**
   * @remarks
   * The extended meta information.
   * >Notice: If the Agent bound to the specified session is named dataworks_ai_assistant_agent (AI Assistant Service), provide the instance ID of the AI Assistant Service in the Context.agent.instanceId field of the extended meta information.
   */
  meta?: PromptAgentSessionRequestParamsMeta;
  /**
   * @remarks
   * The array of user message content blocks. For more information, visit: https://agentclientprotocol.com/protocol/content.
   */
  prompt?: PromptAgentSessionRequestParamsPrompt[];
  /**
   * @remarks
   * The target session ID. If the session does not exist, an SSE error frame is returned.
   * 
   * @example
   * sess_0f12abc34
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      prompt: 'Prompt',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: PromptAgentSessionRequestParamsMeta,
      prompt: { 'type': 'array', 'itemType': PromptAgentSessionRequestParamsPrompt },
      sessionId: 'string',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.prompt)) {
      $dara.Model.validateArray(this.prompt);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID passed by the requester. The value is returned as-is.
   * 
   * @example
   * 1021418411
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed value: 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameters.
   */
  params?: PromptAgentSessionRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: PromptAgentSessionRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

