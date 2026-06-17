// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDBClusterServerlessRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of steady-state AP read-only nodes. Valid values: 0 to 7.
   * 
   * @example
   * 1
   */
  scaleApRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of steady-state AP read-only nodes. Valid values: 0 to 7.
   * 
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @remarks
   * The maximum scaling limit per node. Valid values: 0 PCU to 16 PCU.
   * 
   * @example
   * 2
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum scaling limit per node. Valid values: 0 PCU to 16 PCU.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 2
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleRoNumMin?: string;
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
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
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
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

