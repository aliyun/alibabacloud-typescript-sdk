// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If streaming output is used, this value is null during generation. When generation is complete, the value is stop if the generation ended due to a stop token.
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
   * 这段对话似乎是客服与客户之间关于一个服务或产品的讨论，但具体内容难以明确理解，因为对话中的言语比较零散和抽象。
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
   * The number of times the plus model was used.
   * 
   * @example
   * 1
   */
  tyxmPlusCount?: string;
  /**
   * @remarks
   * The number of times the turbo model was used.
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
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
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
   * Indicates whether the request was successful. The caller can use this field to determine whether the request was successful. Valid values: **true**: The request was successful. **false/null**: The request failed.
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

