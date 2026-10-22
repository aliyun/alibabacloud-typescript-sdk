// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryForOperationResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The application time.
   * 
   * @example
   * 1788873796000
   */
  applyTime?: number;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **EIP**: VPC public IP address.
   * - **SLB**: load balancing.
   * - **ECS**: Public IP address in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The review remarks.
   * 
   * @example
   * agree
   */
  auditMemo?: string;
  /**
   * @remarks
   * The review time.
   * 
   * @example
   * 1791937132000
   */
  auditTime?: number;
  /**
   * @remarks
   * The reviewer.
   * 
   * @example
   * 149754
   */
  auditor?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1068723216148614
   */
  customerUid?: string;
  /**
   * @remarks
   * The type of the sent email.
   * 
   * @example
   * xxx
   */
  emailType?: string;
  /**
   * @remarks
   * Specifies whether the email contains an unsubscribe option. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  hasUnsubscribe?: boolean;
  /**
   * @remarks
   * The unique ID.
   * 
   * @example
   * 710864062
   */
  id?: number;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @remarks
   * The description of the number of sent emails.
   * 
   * @example
   * 10
   */
  sendCount?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **auditing**: Under review.
   * - **approved**: Approved.
   * - **rejected**: Rejected.
   * - **effective**: Effective.
   * - **ineffective**: Ineffective.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  useDesc?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      assetType: 'AssetType',
      auditMemo: 'AuditMemo',
      auditTime: 'AuditTime',
      auditor: 'Auditor',
      customerUid: 'CustomerUid',
      emailType: 'EmailType',
      hasUnsubscribe: 'HasUnsubscribe',
      id: 'Id',
      ip: 'Ip',
      sendCount: 'SendCount',
      status: 'Status',
      useDesc: 'UseDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      assetType: 'string',
      auditMemo: 'string',
      auditTime: 'number',
      auditor: 'string',
      customerUid: 'string',
      emailType: 'string',
      hasUnsubscribe: 'boolean',
      id: 'number',
      ip: 'string',
      sendCount: 'string',
      status: 'string',
      useDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForOperationResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number from which the query results are displayed.
   * 
   * > Default value: 1, which indicates that the query results are displayed from the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event data.
   */
  list?: QueryForOperationResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: QueryForOperationResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryForOperationResponseBodyDataList },
      pageInfo: QueryForOperationResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   */
  data?: QueryForOperationResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEE90F8C-EDC2-5394-953B-D07A121612B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryForOperationResponseBodyData,
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

