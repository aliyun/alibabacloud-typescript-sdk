// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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
   * > If you do not specify this parameter for a sharded cluster instance, the entire sharded cluster instance is restarted.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to restart mongos nodes in parallel. This parameter takes effect only when you restart multiple mongos nodes at a time.
   */
  parallelRestartMongos?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when the instance is restarted. Valid values:
   * - 0: Immediately.
   * - 1: Within the O&M window.
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

