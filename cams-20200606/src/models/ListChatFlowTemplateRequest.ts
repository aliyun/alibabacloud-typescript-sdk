// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatFlowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  bizCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @example
   * 75
   */
  pageNo?: number;
  /**
   * @example
   * 72
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

