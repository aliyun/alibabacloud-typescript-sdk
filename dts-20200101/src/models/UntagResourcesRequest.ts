// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove instance tags from the instance. Valid values:
   * 
   * - **true**: yes. Removes instance tags from the instance.
   * - **false**: no. You must specify the tags to be removed in the **TagKey.N** parameter.
   * 
   * > - You must specify at least one of the **TagKey.N** parameter and this parameter.
   * - If you specify both the **TagKey.N** parameter and this parameter, this parameter does not take effect.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the data migration, data synchronization, and change tracking instances. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance IDs.
   * > N specifies the sequence number of the instance ID. For example, ResourceId.0 specifies the first instance ID, and ResourceId.1 specifies the second instance ID. You can remove tags from 1 to 50 instances at a time.
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
   * The tag key.
   * > - N specifies the sequence number of the tag key. For example, TagKey.0 specifies the first tag key, and TagKey.1 specifies the second tag key. You can remove 1 to 20 tag keys at a time.
   * - Empty strings are not allowed.
   * - You must specify at least one of the **All** parameter and this parameter.
   * - If you specify both the **All** parameter and this parameter, only this parameter takes effect.
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

