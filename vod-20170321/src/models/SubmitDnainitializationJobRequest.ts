// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAInitializationJobRequest extends $dara.Model {
  endTime?: string;
  ownerAccount?: string;
  ownerId?: string;
  recentNumber?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recentNumber: 'RecentNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      recentNumber: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

