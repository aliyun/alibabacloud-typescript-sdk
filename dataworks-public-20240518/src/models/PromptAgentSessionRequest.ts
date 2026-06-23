// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * A Map-type value. In custom agent scenarios, you can use this parameter to replace placeholder parameters.
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
   * Specifies whether to hide the prompt from the user. For example, if a user asks "Sales amount in the last 7 days" in a chat dialog, the calling system may use RAG to retrieve relevant business domain knowledge and append it to the agent context before calling the API. If you do not want to display this supplemental information to the user, set this parameter to true.
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
   * The description of the file.
   * 
   * @example
   * Sales_Order_Details.csv
   */
  description?: string;
  /**
   * @remarks
   * The prompt metadata extended by DataWorks.
   */
  meta?: PromptAgentSessionRequestParamsPromptMeta;
  /**
   * @remarks
   * The MIME type of the file.
   * 
   * @example
   * text/csv‌
   */
  mimeType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * xxx.csv
   */
  name?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 1231231
   */
  size?: number;
  /**
   * @remarks
   * **The text content.**
   * 
   * @example
   * Sales in the last 7 days
   */
  text?: string;
  /**
   * @remarks
   * The title of the file.
   * 
   * @example
   * Sales_Order_Details.csv
   */
  title?: string;
  /**
   * @remarks
   * **The content block type.**
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The URI of the file.
   * 
   * @example
   * oss://${bucket}/${ossKey}
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
   */
  meta?: PromptAgentSessionRequestParamsMeta;
  /**
   * @remarks
   * The array of user message content blocks. For more information, see https\\://agentclientprotocol.com/protocol/content
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
   * The ID passed in by the caller. The value is returned as-is in the response.
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

