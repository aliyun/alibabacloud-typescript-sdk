// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeImageResponseBody extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 1000
   */
  inputTokens?: string;
  /**
   * @example
   * 2000
   */
  outputTokens?: string;
  /**
   * @example
   * 9*****-AE0D-5EE3-B1AF-48632CB0831C
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  text?: string;
  /**
   * @example
   * 3000
   */
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
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

