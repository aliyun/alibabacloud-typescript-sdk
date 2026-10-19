// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverDBClusterZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
   */
  clientToken?: string;
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to switch back to the original primary zone after a failover. Valid values:
   * 
   * - true: Switch back to the original primary zone.
   * - false: Do not switch back to the original primary zone.
   * 
   * @example
   * false
   */
  rollBackForDisaster?: boolean;
  /**
   * @remarks
   * The ID of the node to be switched to the primary node. If you leave this parameter empty, the system automatically elects a node. You can call the DescribeDBClusters operation to query the node ID.
   * 
   * @example
   * pi-***********
   */
  targetDBNodeId?: string;
  /**
   * @remarks
   * Specifies whether the switchover is a primary/secondary switchover within the primary zone. Valid values:
   * 
   * - Primary: primary/secondary switchover within the primary zone.
   * - Standby: switchover to the hot standby storage cluster.
   * 
   * Default value: Primary. This value indicates that the switchover is performed within the active zone.
   * 
   * @example
   * Primary
   */
  targetZoneType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rollBackForDisaster: 'RollBackForDisaster',
      targetDBNodeId: 'TargetDBNodeId',
      targetZoneType: 'TargetZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rollBackForDisaster: 'boolean',
      targetDBNodeId: 'string',
      targetZoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

