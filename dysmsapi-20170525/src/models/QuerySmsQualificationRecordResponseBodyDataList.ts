// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsQualificationRecordResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 审核备注
   * 
   * @example
   * 示例值示例值
   */
  auditRemark?: string;
  /**
   * @remarks
   * 审核时间
   * 
   * @example
   * 2024-12-26 17:29:04
   */
  auditTime?: string;
  /**
   * @remarks
   * 公司名称或实人认证姓名
   * 
   * @example
   * 示例值示例值示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-02-20 11:59:30
   */
  createDate?: string;
  /**
   * @remarks
   * 资质组ID
   * 
   * @example
   * 10000****
   */
  groupId?: number;
  /**
   * @remarks
   * 法人名称
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  /**
   * @remarks
   * 资质组名称
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationGroupName?: string;
  /**
   * @remarks
   * 审核状态名
   * 
   * @example
   * INT
   */
  stateName?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * true
   */
  useBySelf?: string;
  /**
   * @remarks
   * 工单ID
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

