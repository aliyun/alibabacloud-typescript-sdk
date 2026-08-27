// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowNodePrototypeV2Request extends $dara.Model {
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * This parameter is required.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The component group code. Valid values:
   * 
   * - Messaging: messaging components.
   * 
   * - Core: core components.
   * 
   * - Intelligence: intelligent components.
   * 
   * - Contact: contact management components.
   * 
   * @example
   * Core
   */
  groupCode?: string;
  /**
   * @remarks
   * The search keyword. This parameter is used for fuzzy match based on the flow component name.
   * 
   * @example
   * WhatsApp
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      groupCode: 'GroupCode',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      groupCode: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

