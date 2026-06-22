// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3993**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The budget, in cents.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  budget?: number;
  /**
   * @remarks
   * The budget type.
   * 
   * This parameter is required.
   * 
   * @example
   * daily
   */
  budgetType?: string;
  /**
   * @remarks
   * The space ID of an Independent Software Vendor (ISV) sub-customer or the instance ID of a direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * Example
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Messenger Page ID.
   * 
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

