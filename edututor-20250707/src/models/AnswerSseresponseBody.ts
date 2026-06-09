// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerSSEResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  finishReason?: string;
  httpStatusCode?: number;
  inputTokens?: number;
  message?: string;
  outputTokens?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      finishReason: 'finish_reason',
      httpStatusCode: 'httpStatusCode',
      inputTokens: 'input_tokens',
      message: 'message',
      outputTokens: 'output_tokens',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      finishReason: 'string',
      httpStatusCode: 'number',
      inputTokens: 'number',
      message: 'string',
      outputTokens: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

