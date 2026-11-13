// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The target resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2thxggoqhmhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-asfx12xxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Workspace
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

