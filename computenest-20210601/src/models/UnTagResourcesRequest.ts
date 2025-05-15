// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   true: All tags are removed from the resource.
   * *   false (default): The specified tags are removed from the resource.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * You can remove tags from up to 50 resources at a time.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * *   dataset: dataset
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   * 
   * You can specify a maximum of 20 tag keys.
   * 
   * > If you set the `All` parameter to `true`, you do not need to specify tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
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

