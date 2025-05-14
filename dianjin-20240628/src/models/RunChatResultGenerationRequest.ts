// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunChatResultGenerationRequestMessages } from "./RunChatResultGenerationRequestMessages";
import { RunChatResultGenerationRequestTools } from "./RunChatResultGenerationRequestTools";


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

