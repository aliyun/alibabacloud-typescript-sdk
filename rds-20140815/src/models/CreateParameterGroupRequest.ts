// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineVersion?: string;
  ownerId?: number;
  parameterGroupDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameters?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameters: 'string',
      regionId: 'string',
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

