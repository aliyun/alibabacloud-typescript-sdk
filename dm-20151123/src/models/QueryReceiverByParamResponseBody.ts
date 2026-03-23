// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverByParamResponseBodyDataReceiver extends $dara.Model {
  count?: string;
  createTime?: string;
  desc?: string;
  receiverId?: string;
  receiversAlias?: string;
  receiversName?: string;
  receiversStatus?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      desc: 'Desc',
      receiverId: 'ReceiverId',
      receiversAlias: 'ReceiversAlias',
      receiversName: 'ReceiversName',
      receiversStatus: 'ReceiversStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      createTime: 'string',
      desc: 'string',
      receiverId: 'string',
      receiversAlias: 'string',
      receiversName: 'string',
      receiversStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBodyData extends $dara.Model {
  receiver?: QueryReceiverByParamResponseBodyDataReceiver[];
  static names(): { [key: string]: string } {
    return {
      receiver: 'receiver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiver: { 'type': 'array', 'itemType': QueryReceiverByParamResponseBodyDataReceiver },
    };
  }

  validate() {
    if(Array.isArray(this.receiver)) {
      $dara.Model.validateArray(this.receiver);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for paging. If more results are available, set this value as the NextStart parameter in your next request.
   * 
   * @example
   * 6aec200853#102#1638894326#test@example.com
   */
  nextStart?: string;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  data?: QueryReceiverByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverByParamResponseBodyData,
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

