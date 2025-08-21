// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TongyiChatDebugInfoResponseBodyPipeline extends $dara.Model {
  input?: any;
  name?: string;
  /**
   * @example
   * system_strategy
   */
  nodeType?: string;
  output?: any;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      name: 'Name',
      nodeType: 'NodeType',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'any',
      name: 'string',
      nodeType: 'string',
      output: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TongyiChatDebugInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 2828708A-2C7A-1BAE-B810-87DB9DA9C661
   */
  messageId?: string;
  pipeline?: TongyiChatDebugInfoResponseBodyPipeline[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      pipeline: { 'type': 'array', 'itemType': TongyiChatDebugInfoResponseBodyPipeline },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pipeline)) {
      $dara.Model.validateArray(this.pipeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

