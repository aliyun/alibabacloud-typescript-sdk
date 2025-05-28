// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataProducerInfoRecords extends $dara.Model {
  /**
   * @remarks
   * Arrive time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  arriveTime?: string;
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @remarks
   * Dead-letter queue message ID.
   * 
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  dlqOriginMessageId?: string;
  /**
   * @remarks
   * Dead-letter queue topic.
   * 
   * @example
   * test_topic
   */
  dlqOriginTopic?: string;
  /**
   * @remarks
   * Message source.
   * 
   * @example
   * CONSOLE
   */
  messageSource?: string;
  /**
   * @remarks
   * Producer duration.
   * 
   * @example
   * 100
   */
  produceDuration?: number;
  /**
   * @remarks
   * Producer status.
   * 
   * @example
   * SUCCESS
   */
  produceStatus?: string;
  /**
   * @remarks
   * Producer time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  produceTime?: string;
  /**
   * @remarks
   * The time when the scheduled message withdrawal request was initiated
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  recallTime?: string;
  /**
   * @remarks
   * Producer name.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      arriveTime: 'arriveTime',
      clientHost: 'clientHost',
      dlqOriginMessageId: 'dlqOriginMessageId',
      dlqOriginTopic: 'dlqOriginTopic',
      messageSource: 'messageSource',
      produceDuration: 'produceDuration',
      produceStatus: 'produceStatus',
      produceTime: 'produceTime',
      recallTime: 'recallTime',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arriveTime: 'string',
      clientHost: 'string',
      dlqOriginMessageId: 'string',
      dlqOriginTopic: 'string',
      messageSource: 'string',
      produceDuration: 'number',
      produceStatus: 'string',
      produceTime: 'string',
      recallTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

