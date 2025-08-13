// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   If the resources belong to a service that is centrally deployed, set the value to `cn-hangzhou` or to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](https://help.aliyun.com/document_detail/2579691.html).
   * *   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a resource.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****
   */
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The key-value pairs of tags. You can specify 1 to 10 key-value pairs.
   * 
   * If you specify multiple tags, the system adds all the tags to the specified resources.
   * 
   * Limits:
   * 
   * *   A tag key must be 1 to 128 characters in length.
   * *   A tag value must be 1 to 128 characters in length.
   * *   Tag keys and tag values are case-sensitive.
   * *   Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.
   * 
   * This parameter is required.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

