// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGadInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gad-pfx10jt8b8***
   */
  instanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

