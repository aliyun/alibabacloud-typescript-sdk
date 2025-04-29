// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationWritingResponseBodyHeader extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 436BC5AE-0573-59D8-9803-6B5FDCD3BBA1
   */
  requestId?: string;
  /**
   * @example
   * uqubxgqzlnf4exfektij032lgb3yvix678p232n56387aqxdo4uutdt9wstqzovvz6j3ho7wnbgye785u79yn5q3euqmsvzmqdn3nmfq2826oscjvsi43kof8b8uxufpp1x97jjukk6jd3183hy8ni6hqpskuhuascpd
   */
  sessionId?: string;
  /**
   * @example
   * 13312125943232
   */
  taskId?: string;
  /**
   * @example
   * 213e20e517049392478441155e8b2a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

