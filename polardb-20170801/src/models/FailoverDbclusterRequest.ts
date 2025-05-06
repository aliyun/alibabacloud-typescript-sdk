// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailoverDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. The token is case-sensitive.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the cluster.
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
   * Specifies whether to switch back services to the original primary zone when the original primary zone recovers.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  rollBackForDisaster?: boolean;
  /**
   * @remarks
   * The ID of the read-only node that you want to promote to the primary node. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query node information, such as node IDs.
   * 
   * > *   If you leave this parameter empty, the system selects one or more available read-only nodes that have the highest failover priority as candidate primary nodes. If the failover to the first read-only node fails due to network issues, abnormal replication status, or other reasons, the system attempts to fail over your applications to the next read-only node until the failover is successful.
   * >*  This parameter is required for PolarDB for Oracle and PolarDB for PostgreSQL clusters. This parameter is optional for PolarDB for MySQL clusters.
   * 
   * @example
   * pi-***********
   */
  targetDBNodeId?: string;
  /**
   * @remarks
   * Whether it is a primary-standby switch within the primary availability zone, with the following values:
   * 
   * Primary: Primary-standby switch within the primary availability zone.
   * Standby: Switch to the storage hot backup cluster.
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

