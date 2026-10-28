// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom tags from the resources. **This parameter takes effect only when `TagKey.N` is not specified**. If `TagKey.N` is specified, this parameter is ignored. Valid values:
   * 
   * - `true`: removes all custom tags from the resources, including Wuying system tags that start with `System/` and were bound by calling the [TagResources](~~TagResources~~) operation.
   * - `false` (default): does not remove all tags. If `TagKey.N` is also not specified, the operation returns the error code `InvalidParameter.TagKeyListOrAll`.
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
   * The region ID. This parameter is required. Specify the ID of the region where the app instance group resides, such as `cn-hangzhou`.
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
   * **All IDs must belong to existing app instance groups within the current Alibaba Cloud account.** If any ID does not exist or does not belong to the current account, the entire request fails and the operation returns the error code `InvalidAppInstanceGroup.NotFound`. No resources are untagged.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. This parameter is required. **Currently, only app instance groups are supported**. The value is case-insensitive. We recommend that you use uppercase letters:
   * 
   * - `APPINSTANCEGROUP`: Wuying app instance group.
   * 
   * If you specify other values, the operation returns the error code `InvalidResourceType.Invalid`.
   * 
   * This parameter is required.
   * 
   * @example
   * APPINSTANCEGROUP
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to be removed. A maximum of 20 tag keys can be specified in a single request. **You must specify at least one of `TagKey.N` and `All`**. If neither is specified, the operation returns the error code `InvalidParameter.TagKeyListOrAll`.
   * 
   * - If `TagKey.N` is specified, only the tags corresponding to these tag keys are removed, and the `All` parameter is ignored.
   * - If a specified tag key does not exist on a resource, the tag key is skipped and no error is returned.
   * - If `TagKey.N` is not specified, you must set `All` to `true` to remove all custom tags from the resources.
   * 
   * Tag keys that start with `System/` are Wuying system tags. Only the following values are supported:
   * 
   * - `System/Scheduler/GRAYSCALE`: The grayscale tag for the app instance group.
   * - `System/Scheduler/STOP_NEW_USER_CONNECTION`: Prevents newly bound users from establishing connections to the app instance group.
   * 
   * If you specify other tag keys that start with `System/`, the operation returns the error code `InvalidTagPolicy.KeyInvalid` or `InvalidTag.SystemKeyNotAllow`.
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

