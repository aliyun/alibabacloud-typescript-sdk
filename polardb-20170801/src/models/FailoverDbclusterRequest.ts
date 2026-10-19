// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.
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
   * The ID of the node that you want to promote to the primary node. If you leave this parameter empty, the system automatically elects a node. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query node IDs and other information.
   * 
   * > - Automatic election of the primary node: The system identifies all read-only nodes that are eligible for election. The system selects one or more read-only nodes with the highest priority. If the switchover to the first node fails due to reasons such as network issues or abnormal replication status, the system attempts to switch to the next node until the switchover succeeds.
   * >- This parameter is required when the cluster is a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster. This parameter is optional when the cluster is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-***********
   */
  targetDBNodeId?: string;
  /**
   * @remarks
   * Specifies whether the primary/secondary switchover is performed within the primary zone. Valid values:
   * - Primary: The primary/secondary switchover is performed within the primary zone.
   * - Standby: The switchover is performed to the hot standby storage cluster.
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

