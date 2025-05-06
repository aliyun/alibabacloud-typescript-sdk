// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeConversationResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidUser.NotFound
   */
  errorCode?: string;
  errorInfo?: string;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  inputTokens?: string;
  outputTokens?: string;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorInfo: 'errorInfo',
      finishReason: 'finishReason',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      requestId: 'requestId',
      success: 'success',
      text: 'text',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      finishReason: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

