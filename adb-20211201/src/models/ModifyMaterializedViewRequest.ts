// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myDB
   */
  dbName?: string;
  /**
   * @example
   * false
   */
  enableDelayAlert?: boolean;
  /**
   * @example
   * false
   */
  enableFailureAlert?: boolean;
  /**
   * @example
   * res_1
   */
  groupName?: string;
  /**
   * @example
   * 2
   */
  latencyTolerance?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * true
   */
  queryWrite?: boolean;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mv_1
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dbName: 'DbName',
      enableDelayAlert: 'EnableDelayAlert',
      enableFailureAlert: 'EnableFailureAlert',
      groupName: 'GroupName',
      latencyTolerance: 'LatencyTolerance',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      queryWrite: 'QueryWrite',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      dbName: 'string',
      enableDelayAlert: 'boolean',
      enableFailureAlert: 'boolean',
      groupName: 'string',
      latencyTolerance: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      queryWrite: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

