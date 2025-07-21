// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverByParamResponseBodyDataReceiver extends $dara.Model {
  /**
   * @remarks
   * Total number of recipient addresses
   * 
   * @example
   * 3
   */
  count?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * Description
   */
  desc?: string;
  /**
   * @remarks
   * Recipient list ID
   * 
   * @example
   * 0c910a7143044b1e116719eb678907b3
   */
  receiverId?: string;
  /**
   * @remarks
   * Recipient list alias
   * 
   * @example
   * 10***@example.com
   */
  receiversAlias?: string;
  /**
   * @remarks
   * Recipient list name
   * 
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @remarks
   * List status. Values:
   * 
   * - 0: Uploading
   * - 1: Upload completed
   * 
   * @example
   * 0
   */
  receiversStatus?: string;
  /**
   * @remarks
   * UTC formatted creation time
   * 
   * @example
   * 1569734892
   */
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
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 6aec200853#102#1638894326#test@example.com
   */
  nextStart?: string;
  /**
   * @remarks
   * Number of items displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * Detailed information of the recipient list
   */
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

