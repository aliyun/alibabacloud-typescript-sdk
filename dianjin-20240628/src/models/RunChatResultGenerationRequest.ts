// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunChatResultGenerationRequestMessages extends $dara.Model {
  content?: string;
  /**
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
  description?: string;
  /**
   * @example
   * get_time
   */
  name?: string;
  parameters?: RunChatResultGenerationRequestToolsFunctionParameters;
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
  function?: RunChatResultGenerationRequestToolsFunction;
  /**
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
   * @example
   * {"topP": 0.8}
   */
  inferenceParameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunChatResultGenerationRequestMessages[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
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

