// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @example
   * { "key1": "value1", "key2": "value2" }
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
   * false
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
   * @example
   * User\\"s order details
   */
  description?: string;
  meta?: PromptAgentSessionRequestParamsPromptMeta;
  /**
   * @example
   * csv
   */
  mimeType?: string;
  /**
   * @example
   * xxx.csv
   */
  name?: string;
  /**
   * @example
   * 2048000
   */
  size?: number;
  /**
   * @example
   * How many skills do you have?
   */
  text?: string;
  /**
   * @example
   * user_orders
   */
  title?: string;
  /**
   * @example
   * text
   */
  type?: string;
  /**
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
  meta?: PromptAgentSessionRequestParamsMeta;
  prompt?: PromptAgentSessionRequestParamsPrompt[];
  /**
   * @example
   * 046d002e-0c68-4fa2-9fd8-341d9b85afb7
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
   * product=HOLOGRES
   */
  callerContext?: string;
  /**
   * @example
   * 2072736942627512345
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
      callerContext: 'Caller-Context',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerContext: 'string',
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

