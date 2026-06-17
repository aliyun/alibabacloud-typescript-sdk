// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverDBClusterZonalRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The client generates this token. It must be unique across requests. The token is case-sensitive and cannot exceed 64 ASCII characters.
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
   * Specifies whether to fail back to the original primary zone after a failover. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  rollBackForDisaster?: boolean;
  /**
   * @remarks
   * The ID of the node to promote to the primary node. If you do not specify this parameter, the system automatically selects a node. Call the DescribeDBClusters operation to query node information, such as node IDs.
   * 
   * @example
   * pi-***********
   */
  targetDBNodeId?: string;
  /**
   * @remarks
   * The type of failover. Valid values:
   * 
   * - Primary: A primary/secondary failover within the primary zone.
   * 
   * - Standby: A switch to the hot standby storage cluster.
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

