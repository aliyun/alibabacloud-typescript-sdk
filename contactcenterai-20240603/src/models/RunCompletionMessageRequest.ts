// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCompletionMessageRequestMessages } from "./RunCompletionMessageRequestMessages";


export class RunCompletionMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunCompletionMessageRequestMessages[];
  /**
   * @example
   * ccai-14b
   */
  modelCode?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  responseFormatType?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      modelCode: 'ModelCode',
      stream: 'Stream',
      responseFormatType: 'responseFormatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunCompletionMessageRequestMessages },
      modelCode: 'string',
      stream: 'boolean',
      responseFormatType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

