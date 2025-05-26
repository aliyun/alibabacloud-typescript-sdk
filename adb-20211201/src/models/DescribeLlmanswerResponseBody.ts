// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLLMAnswerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The answer by the intelligent assistant to the question.
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 456
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

