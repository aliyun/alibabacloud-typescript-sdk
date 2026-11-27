// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return tag information. Valid values:
   * 
   * - false (default): Tag information is not returned.
   * - true: Tag information is returned.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
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

