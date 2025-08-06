// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSFlowStatisRequest extends $dara.Model {
  division?: string;
  endTime?: number;
  endTimeUTC?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  level?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  startTime?: number;
  startTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      division: 'Division',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      level: 'Level',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      division: 'string',
      endTime: 'number',
      endTimeUTC: 'string',
      level: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      startTime: 'number',
      startTimeUTC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

