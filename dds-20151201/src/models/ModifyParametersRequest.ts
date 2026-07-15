// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * - **db**: shard node.
   * 
   * - **cs**: Configserver node.
   * 
   * - **mongos**: mongos node.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If this parameter is a sharded cluster instance ID, you must also specify the NodeId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp19f409d75****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in the sharded cluster instance.
   * 
   * > This parameter is active only when the DBInstanceId parameter is set to a sharded cluster instance ID.
   * 
   * @example
   * d-bp1b7bb3bbe****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameters and their new values. The value must be a JSON string. Example: {"ParameterName1":"ParameterValue1","ParameterName2":"ParameterValue2"}.
   * 
   * > Call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query the list of default parameter templates.
   * 
   * This parameter is required.
   * 
   * @example
   * {"operationProfiling.mode":"all","operationProfiling.slowOpThresholdMs":"200"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the instance. To query the latest region list, call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time to apply the parameter modifications. Valid values:
   * 
   * - 0: Immediately.
   * 
   * - 1: During the maintenance window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameters: 'string',
      regionId: 'string',
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

