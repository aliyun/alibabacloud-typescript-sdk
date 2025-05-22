// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateScratchRequestSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tags. A tag contains a tag key and a tag value.
   * 
   * If you want to specify only the tag key, you must leave the tag value empty. Example: {"TagKey": ""}.
   * 
   * If you set TemplateScratchType to ArchitectureDetection, you can add up to 5 source tags. In other cases, you can add up to 10 source tags.
   * 
   * This parameter is required.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource types for filtering resources.
   */
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.resourceTags) {
      $dara.Model.validateMap(this.resourceTags);
    }
    if(Array.isArray(this.resourceTypeFilter)) {
      $dara.Model.validateArray(this.resourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

