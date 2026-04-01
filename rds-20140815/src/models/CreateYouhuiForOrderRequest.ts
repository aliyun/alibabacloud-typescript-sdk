// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYouhuiForOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1711510887******
   */
  activityId?: number;
  ownerId?: string;
  /**
   * @remarks
   * The promotion ID. You can call the GetResourcePrice operation to query the promotion ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000001******
   */
  promotionId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      ownerId: 'OwnerId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      ownerId: 'string',
      promotionId: 'number',
      regionId: 'string',
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

