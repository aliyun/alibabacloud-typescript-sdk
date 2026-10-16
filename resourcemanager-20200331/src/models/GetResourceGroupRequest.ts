// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return tag information. Valid values:
   * 
   * - false (default): does not return tag information.
   * - true: returns tag information.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can call [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query resource group IDs.
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

