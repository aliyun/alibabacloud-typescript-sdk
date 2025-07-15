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

export class ListLegacyQueueEventLogsResponseBodyData extends $dara.Model {
  list?: ListLegacyQueueEventLogsResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListLegacyQueueEventLogsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 1A5A8998-41F9-5F85-BFCF-EB2B6E376812
   */
  requestId?: string;
  /**
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

