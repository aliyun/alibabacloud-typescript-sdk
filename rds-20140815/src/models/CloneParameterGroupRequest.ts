// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneParameterGroupRequest extends $dara.Model {
  ownerId?: number;
  parameterGroupDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

