// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshProxyLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-******************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the execution is initiated by the scheduled task service. Default value: false. If this parameter is set to false and PlannedStartTime is specified, a scheduled task is created. If this parameter is set to true, the task is executed immediately. Usage notes: If the DBClusterStatus of the cluster is not Running, you must specify the PlannedStartTime and PlannedEndTime parameters to create a scheduled task. The description of this parameter specifies that the task can be executed immediately only when the cluster is in the Running state and this parameter is set to true.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the proxy upgrade, in the YYYY-MM-DDThh:mm:ssZ format (UTC). Usage notes: If the DBClusterStatus of the cluster is not Running, you must specify both the PlannedStartTime and PlannedEndTime parameters to create a scheduled task. The description of the FromTimeService parameter specifies that the task can be executed immediately only when the cluster is in the Running state and FromTimeService is set to true.
   * 
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the proxy upgrade, in the YYYY-MM-DDThh:mm:ssZ format (UTC). Usage notes: If the DBClusterStatus of the cluster is not Running, you must specify both the PlannedStartTime and PlannedEndTime parameters to create a scheduled task. The description of the FromTimeService parameter specifies that the task can be executed immediately only when the cluster is in the Running state and FromTimeService is set to true.
   * 
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The target proxy performance level. Valid values: ProxyStandard, ProxyStandardx2, and ProxyStandardx4.
   * 
   * This parameter is required.
   * 
   * @example
   * ProxyStandard
   */
  proxyTargetClass?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
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
      proxyTargetClass: 'ProxyTargetClass',
      resourceGroupId: 'ResourceGroupId',
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
      proxyTargetClass: 'string',
      resourceGroupId: 'string',
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

