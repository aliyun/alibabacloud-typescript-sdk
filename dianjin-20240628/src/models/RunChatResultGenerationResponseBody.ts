// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunChatResultGenerationResponseBodyChoices } from "./RunChatResultGenerationResponseBodyChoices";
import { RunChatResultGenerationResponseBodyUsage } from "./RunChatResultGenerationResponseBodyUsage";


export class RunChatResultGenerationResponseBody extends $dara.Model {
  choices?: RunChatResultGenerationResponseBodyChoices[];
  /**
   * @example
   * 1720602203
   */
  created?: number;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
  usage?: RunChatResultGenerationResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunChatResultGenerationResponseBodyChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: RunChatResultGenerationResponseBodyUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

