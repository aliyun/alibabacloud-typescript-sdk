// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterializedViewRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database where the materialized view resides.
   * 
   * This parameter is required.
   * 
   * @example
   * myDB
   */
  dbName?: string;
  /**
   * @remarks
   * Enable the refresh delay alert. Valid values:
   * 
   * *   true: Enables alert.
   * *   false: Disables alert.
   * 
   * @example
   * false
   */
  enableDelayAlert?: boolean;
  /**
   * @remarks
   * Specifies whether to send alerts when the refresh task fails. Valid values:
   * 
   * *   true: Send alerts.
   * *   false: Alerts disabled.
   * 
   * @example
   * false
   */
  enableFailureAlert?: boolean;
  /**
   * @remarks
   * The name of the resource group to which the materialized view is bound.
   * 
   * @example
   * res_1
   */
  groupName?: string;
  /**
   * @remarks
   * Refresh delay tolerance (in minutes).
   * 
   * @example
   * 2
   */
  latencyTolerance?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable query rewrite. Valid values:
   * 
   * *   true: Enables query rewrite.
   * *   false: Disables query rewrite.
   * 
   * @example
   * true
   */
  queryWrite?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the materialized view.
   * 
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

