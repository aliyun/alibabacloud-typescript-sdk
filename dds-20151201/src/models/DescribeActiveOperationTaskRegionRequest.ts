// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the historical tasks. Default value: 0. Valid values:
   * 
   * - 0: returns the current task.
   * - 1: returns the historical tasks.
   * 
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - rds_apsaradb_ha: master-replica switchover
   * - rds_apsaradb_transfer: instance migration
   * - rds_apsaradb_upgrade: minor version update
   * - all: all types
   * 
   * This parameter is required.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

