// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationRequestMessages extends $dara.Model {
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * 你是一个信息处理专家
   */
  content?: string;
  /**
   * @remarks
   * Message role.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestToolsFunctionParameters extends $dara.Model {
  /**
   * @remarks
   * Properties.
   * 
   * @example
   * {
   *                             "location": {
   *                                 "type": "string",
   *                                 "description": "The city and state, e.g. San Francisco, CA"
   *                             },
   *                             "unit": {
   *                                 "type": "string",
   *                                 "enum": [
   *                                     "celsius",
   *                                     "fahrenheit"
   *                                 ]
   *                             }
   *                         }
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * Type.
   * 
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestToolsFunction extends $dara.Model {
  /**
   * @remarks
   * A string describing the tool function. This helps the model decide when and how to call it.
   * 
   * @example
   * 工具函数的描述
   */
  description?: string;
  /**
   * @remarks
   * A string representing the tool function name. It must contain only letters, digits, underscores, and hyphens. Maximum length is 64 characters.
   * 
   * @example
   * get_time
   */
  name?: string;
  /**
   * @remarks
   * An object describing the tool parameters. It must be a valid JSON Schema.
   */
  parameters?: RunChatResultGenerationRequestToolsFunctionParameters;
  /**
   * @remarks
   * List of required parameters.
   */
  required?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: RunChatResultGenerationRequestToolsFunctionParameters,
      required: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestTools extends $dara.Model {
  /**
   * @remarks
   * An object containing name, description, and parameters.
   */
  function?: RunChatResultGenerationRequestToolsFunction;
  /**
   * @remarks
   * A string indicating the tool type. Currently, only "function" is supported.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: RunChatResultGenerationRequestToolsFunction,
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * Hyperparameters used for inference.
   * 
   * @example
   * {"topP": 0.8}
   */
  inferenceParameters?: { [key: string]: any };
  /**
   * @remarks
   * Messages to input into the model.
   * 
   * This parameter is required.
   */
  messages?: RunChatResultGenerationRequestMessages[];
  /**
   * @remarks
   * The model service type. Get this value from the /api/app/config API endpoint in the llmHelperTypeList field.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * Session ID. Use this to mark a conversation.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @remarks
   * Streaming mode. Set to true for streaming responses. Set to false for full responses. Default is false.
   * 
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * Tool information. Specify a list of tools the model can call. When multiple tools are provided, the model selects one to generate a response.
   */
  tools?: RunChatResultGenerationRequestTools[];
  static names(): { [key: string]: string } {
    return {
      inferenceParameters: 'inferenceParameters',
      messages: 'messages',
      modelId: 'modelId',
      sessionId: 'sessionId',
      stream: 'stream',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messages: { 'type': 'array', 'itemType': RunChatResultGenerationRequestMessages },
      modelId: 'string',
      sessionId: 'string',
      stream: 'boolean',
      tools: { 'type': 'array', 'itemType': RunChatResultGenerationRequestTools },
    };
  }

  validate() {
    if(this.inferenceParameters) {
      $dara.Model.validateMap(this.inferenceParameters);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

