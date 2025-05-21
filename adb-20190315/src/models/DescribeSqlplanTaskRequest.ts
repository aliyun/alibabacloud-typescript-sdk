// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPlanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 201907241445301720211111570315107****
   */
  processId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The stage of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1785135913****
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      processId: 'ProcessId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      processId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

