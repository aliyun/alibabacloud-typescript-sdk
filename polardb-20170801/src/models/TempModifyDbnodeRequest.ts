// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TempModifyDBNodeRequestDBNode } from "./TempModifyDbnodeRequestDbnode";


export class TempModifyDBNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the scaled/added node.
   * 
   * This parameter is required.
   */
  DBNode?: TempModifyDBNodeRequestDBNode[];
  /**
   * @remarks
   * The type of configuration change. Set the value to **TempUpgrade**.
   * 
   * This parameter is required.
   * 
   * @example
   * TempUpgrade
   */
  modifyType?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   **Modify**: temporarily upgrades the configuration of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Modify
   */
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rollback time of the configuration for the temporary upgrade. Specify the time in the ISO 8601 standard in the YYYY-MM-DD hh:mm:ss format.
   * 
   * >  The rollback time cannot be 1 hour earlier than the current time and cannot be later than one day before the time when the cluster expires.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-23 18:16:00
   */
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      modifyType: 'ModifyType',
      operationType: 'OperationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': TempModifyDBNodeRequestDBNode },
      modifyType: 'string',
      operationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

