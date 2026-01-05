// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * 模板审核状态
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  ownerId?: number;
  /**
   * @remarks
   * 页码, 默认1
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * 每页数量，默认10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 模板code
   * 
   * @example
   * SMS_1688168
   */
  templateCode?: string;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * 示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板标签
   * 
   * @example
   * 示例值示例值
   */
  templateTag?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 0
   */
  templateType?: number;
  /**
   * @remarks
   * 模板状态
   */
  usableStateList?: string[];
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
      usableStateList: 'UsableStateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateCode: 'string',
      templateName: 'string',
      templateTag: 'string',
      templateType: 'number',
      usableStateList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.usableStateList)) {
      $dara.Model.validateArray(this.usableStateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

