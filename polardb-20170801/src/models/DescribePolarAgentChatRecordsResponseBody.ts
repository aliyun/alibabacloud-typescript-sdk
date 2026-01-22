// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentChatRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  answer?: string;
  /**
   * @example
   * 0
   */
  feedbackType?: string;
  /**
   * @example
   * xxx
   */
  query?: string;
  /**
   * @remarks
   * Query ID。
   * 
   * @example
   * sq202506261002hz8b24fe80067683
   */
  queryId?: string;
  /**
   * @example
   * 44dcdf31-04cd-4a44-9bae-834dd6657e29
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      feedbackType: 'FeedbackType',
      query: 'Query',
      queryId: 'QueryId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      feedbackType: 'string',
      query: 'string',
      queryId: 'string',
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

export class DescribePolarAgentChatRecordsResponseBody extends $dara.Model {
  data?: DescribePolarAgentChatRecordsResponseBodyData[];
  /**
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePolarAgentChatRecordsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

