// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the generation finished. For streaming output, this field is null during generation. If the generation stops due to a stop token, the value is stop.
   * 
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * The request ID returned by the large language model service.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  llmRequestId?: string;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 200
   */
  outputTokens?: number;
  /**
   * @remarks
   * The result returned by the large language model.
   * 
   * @example
   * This conversation appears to be a discussion between a customer service representative and a customer about a service or product, but the specific content is difficult to understand clearly because the language in the conversation is relatively fragmented and abstract
   */
  text?: string;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 300
   */
  totalTokens?: number;
  /**
   * @remarks
   * The number of times the plus model is used.
   * 
   * @example
   * 1
   */
  tyxmPlusCount?: string;
  /**
   * @remarks
   * The number of times the turbo model is used.
   * 
   * @example
   * 1
   */
  tyxmTurboCount?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      inputTokens: 'InputTokens',
      llmRequestId: 'LlmRequestId',
      outputTokens: 'OutputTokens',
      text: 'Text',
      totalTokens: 'TotalTokens',
      tyxmPlusCount: 'TyxmPlusCount',
      tyxmTurboCount: 'TyxmTurboCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      inputTokens: 'number',
      llmRequestId: 'string',
      outputTokens: 'number',
      text: 'string',
      totalTokens: 'number',
      tyxmPlusCount: 'string',
      tyxmTurboCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ExecuteAgentResponseBodyData;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. You can use this field to determine the request result. **true** indicates success. **false** or **null** indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecuteAgentResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

