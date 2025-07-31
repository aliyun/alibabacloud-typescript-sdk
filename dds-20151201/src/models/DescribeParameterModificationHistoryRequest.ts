// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterModificationHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **db**: shard
   * *   **cs**: Configserver
   * *   **mongos**: mongos
   * *   **logic**: sharded cluster instance
   * 
   * @example
   * mongos
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-02T12:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node whose parameter modification records you want to query in the instance.
   * 
   * >  This parameter is valid only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp1158****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

