// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCasterResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * a41300c9-23d3-470e-b9bd-****663e0700
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekz7***34cn5ty
   */
  newResourceGroupId?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      newResourceGroupId: 'NewResourceGroupId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      newResourceGroupId: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

