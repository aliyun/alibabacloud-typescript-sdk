// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter is required. The tag key must be 1 to 128 characters in length and is case-sensitive. It cannot start with `aliyun` or `acs:` (case-insensitive) and cannot contain `http://` or `https://`. It supports letters, digits, spaces, and common Chinese and English punctuation marks. If the tag key does not meet the rules, the error code `InvalidTagPolicy.KeyInvalid` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * Resolution
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter is required. The tag value must be 0 to 256 characters in length and is case-sensitive. Empty strings are allowed. It cannot contain `http://` or `https://`. If the tag value does not meet the rules, the error code `InvalidTagPolicy.ValueInvalid` is returned.
   * 
   * If the tag key is a system tag, the tag value can only be `true` or `false`.
   * 
   * This parameter is required.
   * 
   * @example
   * 720p
   * 
   * **if can be null:**
   * false
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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
   * The list of resource IDs to which you want to bind tags. This parameter is required. Specify the app instance group IDs. You can specify up to 50 IDs in a single request. Duplicate IDs are automatically deduplicated.
   * 
   * **All IDs must belong to existing app instance groups under the current Alibaba Cloud account.** If any ID does not exist or does not belong to the current account, the entire request fails and the error code `InvalidAppInstanceGroup.NotFound` is returned. No tags are bound to any resources.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. This parameter is required. **Currently, only app instance groups are supported**. The value is case-insensitive, but we recommend that you use uppercase letters:
   * 
   * - `APPINSTANCEGROUP`: app instance group.
   * 
   * If you specify other values, the error code `InvalidResourceType.Invalid` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * APPINSTANCEGROUP
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags to bind. This parameter is required. You can specify up to 20 tags in a single request. You must specify both Key and Value for each tag.
   * 
   * - Tag keys in the same request cannot be duplicate. Otherwise, the error code `InvalidTag.Duplicated` is returned.
   * - If a tag with the same key already exists on the resource, the tag value is updated to the value specified in the current request.
   * - A single resource can be bound to up to 20 custom tags. If this limit is exceeded, the error code `ResourceTag.CustomTagCountExceed` is returned.
   * 
   * Tag keys starting with `System/` are Wuying system tags. Only the following values are supported, and the tag value can only be `true` or `false`:
   * 
   * - `System/Scheduler/GRAYSCALE`: the canary release tag for the app instance group.
   * - `System/Scheduler/STOP_NEW_USER_CONNECTION`: prevents newly bound users from establishing connections to the app instance group.
   * 
   * If you specify other tag keys starting with `System/`, the error code `InvalidTag.SystemTagKeyInvalid` or `InvalidTag.SystemKeyNotAllow` is returned.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

