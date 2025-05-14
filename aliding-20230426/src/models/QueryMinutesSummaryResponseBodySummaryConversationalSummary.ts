// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesSummaryResponseBodySummaryConversationalSummary extends $dara.Model {
  /**
   * @example
   * 012345
   */
  speakerId?: string;
  /**
   * @example
   * 发言人姓名
   */
  speakerName?: string;
  /**
   * @example
   * 发言人对应的总结
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      speakerId: 'SpeakerId',
      speakerName: 'SpeakerName',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speakerId: 'string',
      speakerName: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

