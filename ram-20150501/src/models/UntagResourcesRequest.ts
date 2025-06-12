// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources.
   * 
   * Enumerated values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The names of the resources. You can specify up to 50 resource names.
   */
  resourceNames?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * Enumerated values:
   * 
   * *   role
   * *   policy
   * 
   * @example
   * role
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags. You can specify up to 20 tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceNames: 'ResourceNames',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceNames: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceNames)) {
      $dara.Model.validateArray(this.resourceNames);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

