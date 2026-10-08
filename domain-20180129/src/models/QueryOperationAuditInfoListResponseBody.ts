// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Information pending review.
   * 
   * @example
   * {"regType":1,"registrantName":"张三","telephone":"1390123****","account":"username@example.com","reason":1,"remark":"账号丢失"}
   */
  auditInfo?: string;
  /**
   * @remarks
   * Review status. Valid values:
   * 
   * - **0**: Information to be completed.
   * - **1**, **2**, **3**, **4**: Under review.
   * - **5**: Review failed.
   * - **6**: Review succeeded.
   * - **7**: Review canceled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Review type. Valid value:
   * 
   * **1**: Offline domain name transfer.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * Name of the reviewed business.
   * 
   * @example
   * example.com等域名线下转移
   */
  businessName?: string;
  /**
   * @remarks
   * Record creation time.
   * 
   * @example
   * 1581919010101
   */
  createTime?: number;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Review record ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Review remark.
   * 
   * @example
   * 审核中
   */
  remark?: string;
  /**
   * @remarks
   * Record update time.
   * 
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
   * @remarks
   * Current page number.
   * 
   * @example
   * 2
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Review data.
   */
  data?: QueryOperationAuditInfoListResponseBodyData[];
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   * 
   * @example
   * true
   */
  prePage?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 199
   */
  totalItemNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
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

