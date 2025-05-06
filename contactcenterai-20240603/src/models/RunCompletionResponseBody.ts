// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionResponseBody extends $dara.Model {
  finishReason?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  totalTokens?: string;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
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

