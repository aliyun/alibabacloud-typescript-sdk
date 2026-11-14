// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom tags from the resources. **This parameter takes effect only when TagKey.N is not specified**. If TagKey.N is specified, this parameter is ignored. Valid values:
   * 
   * - true: Removes all custom tags from the resources, including Wuying system tags that start with `System/` and are bound by calling the [TagResources](~~TagResources~~) operation.
   * - false (default): Does not remove all tags. If TagKey.N is also not specified, the error code InvalidParameter.TagKeyListOrAll is returned.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID. This parameter is required. Set this parameter to the ID of the region where the app instance group resides, such as cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs from which you want to remove tags. This parameter is required. Specify the app instance group IDs. A maximum of 50 IDs can be specified in a single request. Duplicate IDs are automatically deduplicated.
   * 
   * **All IDs must belong to existing app instance groups within the current Alibaba Cloud account.** If any ID does not exist or does not belong to the current account, the entire request fails and the error code InvalidAppInstanceGroup.NotFound is returned. No tags are removed from any resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. This parameter is required. **Currently, only app instance groups are supported**. The value is not case-sensitive, but we recommend that you use uppercase letters:
   * 
   * - APPINSTANCEGROUP: Wuying app instance group.
   * 
   * If you specify other values, the error code InvalidResourceType.Invalid is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * APPINSTANCEGROUP
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to be removed. A maximum of 20 tag keys can be specified in a single request. **You must specify at least one of TagKey.N and All**. If neither is specified, the error code InvalidParameter.TagKeyListOrAll is returned.
   * 
   * - If TagKey.N is specified, only the tags corresponding to these tag keys are removed, and the All parameter is ignored.
   * - If a specified tag key does not exist on a resource, the tag key is skipped and no error is returned.
   * - If TagKey.N is not specified, you must set All to true to remove all custom tags from the resources.
   * 
   * Tag keys that start with `System/` are Wuying system tags. Only the following values are supported:
   * 
   * - System/Scheduler/GRAYSCALE: The grayscale tag for the app instance group.
   * - System/Scheduler/STOP_NEW_USER_CONNECTION: Prevents new connections from users newly bound to the app instance group.
   * 
   * If you specify other tag keys that start with `System/`, the error code InvalidTagPolicy.KeyInvalid or InvalidTag.SystemKeyNotAllow is returned.
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

