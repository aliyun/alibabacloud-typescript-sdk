// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseMarketingFLowRequest extends $dara.Model {
  /**
   * @remarks
   * The activity code.
   * 
   * @example
   * 439859845**234
   */
  activityCode?: string;
  /**
   * @remarks
   * The activity ID (deprecated).
   * 
   * @example
   * N/A
   */
  activityId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityId: 'ActivityId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityId: 'string',
      ownerId: 'number',
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

