// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource group or member of a resource directory. Valid values:
   * - false (default): No.
   * - true: Yes.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the resource group or the member of the resource directory.
   * 
   * You can specify up to 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - ResourceGroup (default): Removes tags from resource groups.
   * - Account: Removes tags from members of a resource directory.
   * 
   * > This parameter is required when you remove tags from members of a resource directory.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * You can remove up to 20 tag keys.
   * 
   * > If the All parameter is set to true to remove all tags, you do not need to specify tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

