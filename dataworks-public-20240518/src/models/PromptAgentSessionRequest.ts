// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionRequestParamsMeta extends $dara.Model {
  /**
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
  description?: string;
  meta?: PromptAgentSessionRequestParamsPromptMeta;
  mimeType?: string;
  name?: string;
  size?: number;
  text?: string;
  title?: string;
  type?: string;
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
  meta?: PromptAgentSessionRequestParamsMeta;
  prompt?: PromptAgentSessionRequestParamsPrompt[];
  /**
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
   * @example
   * 1021418411
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

