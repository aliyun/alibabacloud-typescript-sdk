// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralAnalyzeImageResponseBody extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 1000
   */
  inputTokens?: number;
  /**
   * @example
   * 2000
   */
  outputTokens?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D718325-92F9-5588-803B-C4A69A5F0AE1
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
  totalTokens?: number;
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
      inputTokens: 'number',
      outputTokens: 'number',
      requestId: 'string',
      success: 'boolean',
      text: 'string',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

