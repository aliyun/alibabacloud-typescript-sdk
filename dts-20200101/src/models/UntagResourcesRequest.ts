// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the specified instances. Valid values:
   * 
   * *   **true**: unbinds all tags from the specified instances.
   * *   **false**: To unbind only specific tags, you must specify the **TagKey.N** parameter.
   * 
   * > 
   * *   You must specify at least one of the All and **TagKey.N** parameters.
   * *   If you specify both the All parameter and the **TagKey.N** parameter, the All parameter does not take effect.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the region where the data migration, data synchronization, or change tracking instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the data migration, synchronization, and subscription instances, which can be queried by calling the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) API. > N indicates the Nth instance ID to be passed. For example, ResourceId.0 represents passing the first instance ID; ResourceId.1 represents passing the second instance ID. You can unbind tags for 1 to 50 instances simultaneously.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsntk10k6r12v****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid value: **ALIYUN::DTS::INSTANCE**.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key. > - N indicates the position of the tag key being passed. For example, TagKey.0 represents the first tag key; TagKey.1 represents the second tag key. Up to 20 tag keys can be unbound simultaneously. - Empty strings are not allowed. - At least one of **All** or this parameter must be provided. - If both **All** and this parameter are provided, only this parameter will take effect.
   * 
   * @example
   * testkey1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
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

