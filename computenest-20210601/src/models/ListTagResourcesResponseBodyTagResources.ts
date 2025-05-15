// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * si-44b9923be2d048eb8f5f
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * 
   * @example
   * serviceinstance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The values of the tags.
   * 
   * @example
   * major
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

