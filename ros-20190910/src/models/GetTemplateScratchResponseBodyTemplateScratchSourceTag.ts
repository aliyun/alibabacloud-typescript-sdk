// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchResponseBodyTemplateScratchSourceTag extends $dara.Model {
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * {"a": "b"}
   */
  resourceTags?: { [key: string]: any };
  /**
   * @remarks
   * The resource type filters.
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

