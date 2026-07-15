// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. This parameter is valid only when tags are empty. Valid values:
   * 
   * - true
   * - false
   * - True
   * - False
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 subkeys.
   * 
   * @example
   * ["gw-xxx","gw-yyy"]
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 subkeys.
   * 
   * @example
   * ["env","team"]
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

