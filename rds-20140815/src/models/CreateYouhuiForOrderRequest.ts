// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYouhuiForOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket that was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 171151088708****
   */
  activityId?: number;
  ownerId?: string;
  /**
   * @remarks
   * The promotion ID. You can call the GetResourcePrice operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 200000199****
   */
  promotionId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query available region IDs.
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

