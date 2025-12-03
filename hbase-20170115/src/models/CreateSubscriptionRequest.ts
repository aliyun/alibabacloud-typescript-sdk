// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  destinationInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationInstanceRegionId?: string;
  extraContext?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mapping?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slbServer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceInstanceRegionId?: string;
  subscriptionDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscriptionType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationInstanceId: 'DestinationInstanceId',
      destinationInstanceRegionId: 'DestinationInstanceRegionId',
      extraContext: 'ExtraContext',
      mapping: 'Mapping',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slbServer: 'SlbServer',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      subscriptionDescription: 'SubscriptionDescription',
      subscriptionType: 'SubscriptionType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationInstanceId: 'string',
      destinationInstanceRegionId: 'string',
      extraContext: 'string',
      mapping: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slbServer: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
      subscriptionDescription: 'string',
      subscriptionType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

