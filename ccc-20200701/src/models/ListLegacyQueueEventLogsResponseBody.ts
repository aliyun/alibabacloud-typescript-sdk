// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyQueueEventLogsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * 456328****
   */
  acid?: string;
  /**
   * @remarks
   * Calling party
   * 
   * @example
   * 8012****
   */
  ani?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  answerPhone?: string;
  /**
   * @remarks
   * Acknowledgement duration, in seconds.
   * 
   * @example
   * 15
   */
  answerTime?: number;
  /**
   * @remarks
   * Hang-up reason.
   * 
   * @example
   * 正常
   */
  cause?: string;
  /**
   * @remarks
   * Dialed number.
   * 
   * @example
   * 1312211****
   */
  dnis?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 109160
   */
  id?: number;
  /**
   * @remarks
   * Queue duration, in seconds.
   * 
   * @example
   * 10
   */
  queueTime?: number;
  /**
   * @remarks
   * Statistics date.
   * 
   * @example
   * 2021-12-03T10:15:30
   */
  statisticDate?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * acc3733
   */
  tenantId?: string;
  /**
   * @remarks
   * Queue name.
   * 
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

export class ListLegacyQueueEventLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of queue event logs.
   */
  list?: ListLegacyQueueEventLogsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 1000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 1000.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListLegacyQueueEventLogsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLegacyQueueEventLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListLegacyQueueEventLogsResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1A5A8998-41F9-5F85-BFCF-EB2B6E376812
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLegacyQueueEventLogsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

