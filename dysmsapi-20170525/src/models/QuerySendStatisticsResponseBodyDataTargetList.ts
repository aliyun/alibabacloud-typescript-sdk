// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendStatisticsResponseBodyDataTargetList extends $dara.Model {
  /**
   * @remarks
   * The number of messages without a delivery receipt.
   * 
   * @example
   * 1
   */
  noRespondedCount?: number;
  /**
   * @remarks
   * The number of messages with a delivery receipt that indicates a failure.
   * 
   * @example
   * 2
   */
  respondedFailCount?: number;
  /**
   * @remarks
   * The number of messages with a delivery receipt that indicates a success.
   * 
   * @example
   * 17
   */
  respondedSuccessCount?: number;
  /**
   * @remarks
   * The date when the message is sent. Format: yyyyMMdd. Example: 20181225.
   * 
   * @example
   * 20201010
   */
  sendDate?: string;
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      noRespondedCount: 'NoRespondedCount',
      respondedFailCount: 'RespondedFailCount',
      respondedSuccessCount: 'RespondedSuccessCount',
      sendDate: 'SendDate',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noRespondedCount: 'number',
      respondedFailCount: 'number',
      respondedSuccessCount: 'number',
      sendDate: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

