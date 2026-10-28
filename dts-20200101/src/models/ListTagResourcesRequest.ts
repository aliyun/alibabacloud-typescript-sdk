// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * > - N specifies the sequence number of the tag key. For example, Tag.0.Key specifies the first tag key, and Tag.1.Key specifies the second tag key. You can specify 1 to 20 tag keys at a time.
   * - You must specify at least one of this parameter and the **ResourceId.N** parameter. If you specify this parameter, you cannot specify an empty string.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > - N specifies the sequence number of the tag value. For example, Tag.0.Value specifies the first tag value, and Tag.1.Value specifies the second tag value. You can specify 1 to 20 tag values at a time.
   * - You can specify an empty string.
   * 
   * @example
   * testvalue1
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The query token.
   * > If a single query does not return all results, you can include the **NextToken** value returned from the previous query in the subsequent query to retrieve more results.
   * 
   * @example
   * 212db86sca4384811e0b5e8707ec2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instances reside. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The IDs of the data migration, data synchronization, and change tracking instances. You can obtain the instance IDs by calling the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation.
   * > - N specifies the sequence number of the instance ID. For example, ResourceId.0 specifies the first instance ID, and ResourceId.1 specifies the second instance ID. You can specify 1 to 50 instance IDs at a time.
   * - You must specify at least one of this parameter and the **Tag.N.Key** parameter.
   * 
   * @example
   * dtsntk10k6r12v****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **ALIYUN::DTS::INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag values that correspond to the tag keys.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

