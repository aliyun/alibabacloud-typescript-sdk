// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListQueuesResponseBodyDataQueues extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心座席数
   * 
   * @example
   * 51
   */
  callClientNum?: number;
  /**
   * @remarks
   * 在线客服数
   * 
   * @example
   * 72
   */
  chatClientNum?: number;
  /**
   * @remarks
   * 队列 Id
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * 队列名
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * 全渠道座席数
   * 
   * @example
   * 87
   */
  omniClientNum?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 1221
   */
  qno?: string;
  static names(): { [key: string]: string } {
    return {
      callClientNum: 'CallClientNum',
      chatClientNum: 'ChatClientNum',
      id: 'Id',
      name: 'Name',
      omniClientNum: 'OmniClientNum',
      qno: 'Qno',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callClientNum: 'number',
      chatClientNum: 'number',
      id: 'number',
      name: 'string',
      omniClientNum: 'number',
      qno: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListQueuesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 本次请求id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 分页大小
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * queues
   */
  queues?: ClinkListQueuesResponseBodyDataQueues[];
  /**
   * @remarks
   * 总数
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queues: 'Queues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queues: { 'type': 'array', 'itemType': ClinkListQueuesResponseBodyDataQueues },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListQueuesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListQueuesResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ClinkListQueuesResponseBodyData,
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

