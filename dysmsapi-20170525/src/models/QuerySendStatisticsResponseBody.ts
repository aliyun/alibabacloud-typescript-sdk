// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendStatisticsResponseBodyDataTargetList extends $dara.Model {
  /**
   * @remarks
   * The number of messages with no delivery receipts.
   * 
   * @example
   * 1
   */
  noRespondedCount?: number;
  /**
   * @remarks
   * The number of messages with failed delivery receipts.
   * 
   * @example
   * 2
   */
  respondedFailCount?: number;
  /**
   * @remarks
   * The number of messages with successful delivery receipts.
   * 
   * @example
   * 17
   */
  respondedSuccessCount?: number;
  /**
   * @remarks
   * The date the messages were sent. Format: yyyyMMdd.
   * 
   * @example
   * 20201010
   */
  sendDate?: string;
  /**
   * @remarks
   * The number of successfully sent messages (billable message count).
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
   * A list of delivery statistics.
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
   * The response code. Valid values:
   * 
   * - OK: The request was successful.
   * 
   * - For other values, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
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
   * The description of the status code.
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
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
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

