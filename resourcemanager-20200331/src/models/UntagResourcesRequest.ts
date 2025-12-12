// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource groups or members. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of a resource group or member.
   * 
   * You can specify a maximum of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects from which you want to remove tags. Valid values:
   * 
   * *   ResourceGroup: resource group. This is the default value.
   * *   Account: member.
   * 
   * >  This parameter is required if you remove tags from members in a resource directory.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * A tag key.
   * 
   * You can specify a maximum of 20 tag keys.
   * 
   * >  If you set the `All` parameter to `true`, you do not need to configure this parameter.
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

