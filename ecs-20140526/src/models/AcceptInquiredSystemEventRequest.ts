// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptInquiredSystemEventRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is unavailable to general users.
   * 
   * @example
   * hide
   */
  choice?: string;
  /**
   * @remarks
   * The ID of the system event.
   * 
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
   * The region ID of the system event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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

