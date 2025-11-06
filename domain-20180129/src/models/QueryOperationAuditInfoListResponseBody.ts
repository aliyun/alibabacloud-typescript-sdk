// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoListResponseBodyData extends $dara.Model {
  auditInfo?: string;
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  businessName?: string;
  /**
   * @example
   * 1581919010101
   */
  createTime?: number;
  /**
   * @example
   * example.com,aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  remark?: string;
  /**
   * @example
   * 1581919010101
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditStatus: 'AuditStatus',
      auditType: 'AuditType',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      id: 'Id',
      remark: 'Remark',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditStatus: 'number',
      auditType: 'number',
      businessName: 'string',
      createTime: 'number',
      domainName: 'string',
      id: 'number',
      remark: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOperationAuditInfoListResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  currentPageNum?: number;
  data?: QueryOperationAuditInfoListResponseBodyData[];
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  prePage?: boolean;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 199
   */
  totalItemNum?: number;
  /**
   * @example
   * 10
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryOperationAuditInfoListResponseBodyData },
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

