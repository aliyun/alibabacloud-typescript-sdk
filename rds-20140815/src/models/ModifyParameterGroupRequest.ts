// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterGroupRequest extends $dara.Model {
  modifyMode?: string;
  ownerId?: number;
  parameterGroupDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameterGroupId?: string;
  parameterGroupName?: string;
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
      modifyMode: 'ModifyMode',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
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
      modifyMode: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
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

