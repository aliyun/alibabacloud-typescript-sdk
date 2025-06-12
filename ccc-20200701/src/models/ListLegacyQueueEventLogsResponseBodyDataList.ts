// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyQueueEventLogsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 456328****
   */
  acid?: string;
  /**
   * @example
   * 8012****
   */
  ani?: string;
  /**
   * @example
   * agent@ccc-test
   */
  answerPhone?: string;
  /**
   * @example
   * 15
   */
  answerTime?: number;
  cause?: string;
  /**
   * @example
   * 1312211****
   */
  dnis?: string;
  id?: number;
  /**
   * @example
   * 10
   */
  queueTime?: number;
  /**
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @example
   * acc3733
   */
  tenantId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  vq?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      ani: 'Ani',
      answerPhone: 'AnswerPhone',
      answerTime: 'AnswerTime',
      cause: 'Cause',
      dnis: 'Dnis',
      id: 'Id',
      queueTime: 'QueueTime',
      statisticDate: 'StatisticDate',
      tenantId: 'TenantId',
      vq: 'Vq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      ani: 'string',
      answerPhone: 'string',
      answerTime: 'number',
      cause: 'string',
      dnis: 'string',
      id: 'number',
      queueTime: 'number',
      statisticDate: 'string',
      tenantId: 'string',
      vq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

