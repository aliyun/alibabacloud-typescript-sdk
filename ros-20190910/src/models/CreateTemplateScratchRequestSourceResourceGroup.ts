// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateScratchRequestSourceResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the source resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeFilter)) {
      $dara.Model.validateArray(this.resourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

