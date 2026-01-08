// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3993**
   */
  adAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300
   */
  budget?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * daily
   */
  budgetType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 238***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      budget: 'Budget',
      budgetType: 'BudgetType',
      custSpaceId: 'CustSpaceId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      budget: 'number',
      budgetType: 'string',
      custSpaceId: 'string',
      name: 'string',
      ownerId: 'number',
      pageId: 'string',
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

