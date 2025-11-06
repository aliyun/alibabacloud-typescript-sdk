// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoDetailResponseBody extends $dara.Model {
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
   * 1581919010100
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
  id?: string;
  remark?: string;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D1L
   */
  requestId?: string;
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

