// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatFlowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Business tenant code, default is “ALICOM_OPAAS”.
   * 
   * This parameter is required.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * Search keyword.
   * 
   * @example
   * LLM
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Trigger type, with the following enum values:
   * 
   * - TriggeredManually
   * - TriggeredByWhatsApp
   * - TriggeredByInstagram
   * - TriggeredByViber
   * - TriggeredByMessenger
   * 
   * @example
   * TriggeredByWhatsApp
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

