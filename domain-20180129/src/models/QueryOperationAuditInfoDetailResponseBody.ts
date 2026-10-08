// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Review information.
   * 
   * @example
   * {"regType":1,"registrantName":"张三","telephone":"1390123****","account":"username@example.com","reason":1,"remark":"账号丢失"}
   */
  auditInfo?: string;
  /**
   * @remarks
   * Review Status. Valid values:  
   * - **0**: Pending supplementary information.  
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
   * Review Type. Valid value:  
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
   * 1581919010100
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
  id?: string;
  /**
   * @remarks
   * Review remark.
   * 
   * @example
   * 审核通过
   */
  remark?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D1L
   */
  requestId?: string;
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
      requestId: 'RequestId',
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
      id: 'string',
      remark: 'string',
      requestId: 'string',
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

