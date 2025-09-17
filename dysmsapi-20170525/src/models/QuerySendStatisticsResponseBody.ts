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

export class QuerySendStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  targetList?: QuerySendStatisticsResponseBodyDataTargetList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      targetList: 'TargetList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetList: { 'type': 'array', 'itemType': QuerySendStatisticsResponseBodyDataTargetList },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QuerySendStatisticsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySendStatisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

