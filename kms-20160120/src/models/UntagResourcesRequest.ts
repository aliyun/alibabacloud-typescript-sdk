// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from resources. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * >  This parameter takes effect only when you specify an empty tag key.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/601478.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources from which you want to remove tags. You can enter up to 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId.1","ResourceId.2",...]` format.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags. Valid values:
   * 
   * *   key
   * *   secret
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags that you want to remove. You can enter up to 20 tag keys.
   * 
   * Enter multiple tag keys in the `["key.1","key.2",...]` format.
   * 
   * >  The tag key cannot start with aliyun or acs:.
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

