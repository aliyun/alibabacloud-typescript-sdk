// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. Before calling this operation, ensure that the instance is in the Running state. You can check the current status of the instance by checking the DBInstanceStatus field returned by the DescribeDBInstanceAttribute operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance.
   * 
   * > If the instance is a sharded cluster instance and this parameter is not specified, the entire sharded cluster instance is restarted.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node to be restarted in the sharded cluster instance. Valid values:
   * - **db**: shard node.
   * - **mongos**: mongos node.
   * - **cs**: Configserver node.
   * 
   * @example
   * db
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to restart mongos nodes in parallel. This parameter takes effect only when multiple mongos nodes are restarted in a batch.
   */
  parallelRestartMongos?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when the instance is restarted. Valid values:
   * - 0: Restarts the instance immediately.
   * - 1: Restarts the instance within the O&M window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parallelRestartMongos: 'ParallelRestartMongos',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parallelRestartMongos: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

