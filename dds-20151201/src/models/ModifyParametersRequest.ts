// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **db**: a shard node.
   * *   **cs**: a Configserver node.
   * *   **mongos**: a mongos node.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the NodeId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp19f409d75****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in the specified sharded cluster instance.
   * 
   * >  This parameter is valid only when DBInstanceId is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp1b7bb3bbe****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance parameters that you want to modify and their values. Specify this parameter in a JSON string. Sample format: {"ParameterName1":"ParameterValue1","ParameterName2":"ParameterValue2"}.
   * 
   * >  You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query a list of default parameter templates.
   * 
   * This parameter is required.
   * 
   * @example
   * {"operationProfiling.mode":"all","operationProfiling.slowOpThresholdMs":"200"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

