// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsQualificationRecordResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 审核备注。
   * 
   * @example
   * 无
   */
  auditRemark?: string;
  /**
   * @remarks
   * 审核时间。
   * 
   * @example
   * 2024-12-26 17:29:04
   */
  auditTime?: string;
  /**
   * @remarks
   * 企业名称。
   * 
   * @example
   * 阿里云云通信有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * 资质创建时间。
   * 
   * @example
   * 2025-02-20 11:59:30
   */
  createDate?: string;
  /**
   * @remarks
   * 资质ID。
   * 
   * @example
   * 10000****
   */
  groupId?: number;
  /**
   * @remarks
   * 法人姓名。
   * 
   * @example
   * 李华
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 资质名称。
   * 
   * @example
   * 阿里云云通信有限公司李华
   */
  qualificationGroupName?: string;
  /**
   * @remarks
   * 审核状态。取值：
   * 
   * - INIT：审核中。
   * - NOT_PASS：审核不通过。 
   * - PASS：审核通过。
   * - NOT_FINISH：资料待补充。
   * - CANCEL：已撤回。
   * 
   * @example
   * INIT
   */
  stateName?: string;
  /**
   * @remarks
   * 资质申请用途，取值：
   * 
   * - **true**：自用。
   * - **false**：他用。
   * 
   * @example
   * true
   */
  useBySelf?: string;
  /**
   * @remarks
   * 审核工单ID。
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRemark: 'AuditRemark',
      auditTime: 'AuditTime',
      companyName: 'CompanyName',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      legalPersonName: 'LegalPersonName',
      qualificationGroupName: 'QualificationGroupName',
      stateName: 'StateName',
      useBySelf: 'UseBySelf',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRemark: 'string',
      auditTime: 'string',
      companyName: 'string',
      createDate: 'string',
      groupId: 'number',
      legalPersonName: 'string',
      qualificationGroupName: 'string',
      stateName: 'string',
      useBySelf: 'string',
      workOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsQualificationRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 满足过滤条件的数据列表。
   */
  list?: QuerySmsQualificationRecordResponseBodyDataList[];
  /**
   * @remarks
   * 当前页码。
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页数据条数。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 总条数。
   * 
   * @example
   * 25
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QuerySmsQualificationRecordResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

export class QuerySmsQualificationRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝详细信息。
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码。
   * 
   * * 返回OK代表请求成功。
   * * 其他错误码，请参见本章节的错误码列表或产品[API错误码](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 资质审核列表
   */
  data?: QuerySmsQualificationRecordResponseBodyData;
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - **true**：调用成功。
   * - **false**：调用失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySmsQualificationRecordResponseBodyData,
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

