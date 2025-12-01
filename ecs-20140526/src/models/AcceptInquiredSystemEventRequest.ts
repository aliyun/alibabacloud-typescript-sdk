// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptInquiredSystemEventRequest extends $dara.Model {
  /**
   * @example
   * hide
   */
  choice?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e-2zeielxl1qzq8slb****
   */
  eventId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
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
      choice: 'Choice',
      eventId: 'EventId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choice: 'string',
      eventId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

