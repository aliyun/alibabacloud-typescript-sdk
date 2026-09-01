// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableDBClusterServerlessRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately run the task or run it during a scheduled time window. Valid values:
   * 
   * - false (default): The task is run during a scheduled time window.
   * - true: The task is immediately run.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start running the scheduled task. Specify the time in the YYYY-MM-DDThh:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start running the scheduled task (that is, the task is run within the specified time range). Specify the time in the YYYY-MM-DDThh:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
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

