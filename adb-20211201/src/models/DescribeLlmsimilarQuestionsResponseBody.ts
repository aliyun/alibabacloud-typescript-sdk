// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLLMSimilarQuestionsResponseBodyItems } from "./DescribeLlmsimilarQuestionsResponseBodyItems";


export class DescribeLLMSimilarQuestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried similar questions.
   */
  items?: DescribeLLMSimilarQuestionsResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 4847
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeLLMSimilarQuestionsResponseBodyItems },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

