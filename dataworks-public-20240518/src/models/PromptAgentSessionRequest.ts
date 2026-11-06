// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * A map. In custom agent scenarios, you can use this value to replace specific placeholder parameters.
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
   * Specifies whether to hide the prompt from the user. For example, if a user asks a question in the chat dialog box, such as "Sales amount in the last 7 days", and the calling system retrieves business domain knowledge through RAG before calling the API operation to supplement the agent context without displaying it to the user, set this parameter to true.
   * 
   * @example
   * true
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
   * Valid when Type is set to resource_link. Example: Sales order details.csv
   */
  description?: string;
  /**
   * @remarks
   * The DataWorks extended prompt metadata.
   */
  meta?: PromptAgentSessionRequestParamsPromptMeta;
  /**
   * @remarks
   * The MIME type of the file.
   * 
   * @example
   * Valid when Type is set to resource_link. Example: text/csv
   */
  mimeType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Valid when Type is set to resource_link. Example: xxx.csv
   */
  name?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * Valid only when Type is set to `resource_link`.
   * 
   * @example
   * 1231231
   */
  size?: number;
  /**
   * @remarks
   * **Text content**
   * 
   * @example
   * Valid when Type is set to text. Example: Sales amount in the last 7 days
   */
  text?: string;
  /**
   * @remarks
   * The file title.
   * 
   * @example
   * Valid when Type is set to resource_link. Example: Sales order details.csv
   */
  title?: string;
  /**
   * @remarks
   * **Content block type**
   * 
   * @example
   * Currently supported values: text and resource_link
   */
  type?: string;
  /**
   * @remarks
   * The URI of the file.
   * 
   * @example
   * Valid when Type is set to resource_link. Example: oss://${bucket}/${ossKey}
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
   * The extended metadata.
   * >Notice: If the agent name bound to the specified session is dataworks_ai_assistant_agent (AI Assistant Service), you must provide the instance ID of the AI Assistant Service in the Context.agent.instanceId field of the extended metadata.</notice>
   */
  meta?: PromptAgentSessionRequestParamsMeta;
  /**
   * @remarks
   * The array of user message content blocks. For more information, see https://agentclientprotocol.com/protocol/content.
   */
  prompt?: PromptAgentSessionRequestParamsPrompt[];
  /**
   * @remarks
   * The ID of the target session. If the session does not exist, an SSE error frame is returned.
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
   * The ID passed by the requester, which is echoed back as is.
   * 
   * @example
   * 1021418411
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
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

