// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newDisplayName: 'NewDisplayName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDisplayName: 'string',
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

