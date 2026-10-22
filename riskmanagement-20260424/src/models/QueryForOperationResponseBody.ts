// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryForOperationResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1788873796000
   */
  applyTime?: number;
  /**
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @example
   * agree
   */
  auditMemo?: string;
  /**
   * @example
   * 1791937132000
   */
  auditTime?: number;
  /**
   * @example
   * 149754
   */
  auditor?: string;
  /**
   * @example
   * 1068723216148614
   */
  customerUid?: string;
  /**
   * @example
   * xxx
   */
  emailType?: string;
  /**
   * @example
   * true
   */
  hasUnsubscribe?: boolean;
  /**
   * @example
   * 710864062
   */
  id?: number;
  /**
   * @example
   * 10.0.158.58
   */
  ip?: string;
  /**
   * @example
   * 10
   */
  sendCount?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  list?: QueryForOperationResponseBodyDataList[];
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
   * @example
   * 200
   */
  code?: string;
  data?: QueryForOperationResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * BEE90F8C-EDC2-5394-953B-D07A121612B5
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

