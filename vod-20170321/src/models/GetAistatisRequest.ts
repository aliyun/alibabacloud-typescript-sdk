// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIStatisRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
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
      type: 'Type',
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

