// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsQualificationRecordRequest extends $dara.Model {
  /**
   * @remarks
   * 公司名
   * 
   * @example
   * 示例值
   */
  companyName?: string;
  /**
   * @remarks
   * 法人姓名
   * 
   * @example
   * 示例值示例值
   */
  legalPersonName?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 资质组名称
   * 
   * @example
   * 示例值示例值
   */
  qualificationGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 审核状态。INT:审核中FAILED:审核失败,PASSED:审核通过,NOT_FINISH:资料待补充,CANCELED:已撤回
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * 是否自用
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
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
      companyName: 'CompanyName',
      legalPersonName: 'LegalPersonName',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationGroupName: 'QualificationGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
      useBySelf: 'UseBySelf',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      legalPersonName: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
      useBySelf: 'boolean',
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

