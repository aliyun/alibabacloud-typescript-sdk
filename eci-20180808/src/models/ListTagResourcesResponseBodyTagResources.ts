// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eci-2zelg8vwnlzdhf8hv****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   ContainerGroup: elastic container instance
   * *   ImageCache: image cache
   * *   DataCache: data cache
   * *   VirtualNode: virtual node
   * 
   * @example
   * ContainerGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that is added to the resource.
   * 
   * @example
   * testkey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * @example
   * testvalue
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

