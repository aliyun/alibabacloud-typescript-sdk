// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
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
   * The key of tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceARN)) {
      $dara.Model.validateArray(this.resourceARN);
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

