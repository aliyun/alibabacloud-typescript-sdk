// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudResourceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TagKey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TagValue1
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

export class CreateCloudResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener configurations.
   * 
   * This parameter is required.
   */
  listenShrink?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 123
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The forwarding configurations.
   */
  redirectShrink?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: the Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: CreateCloudResourceShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      listenShrink: 'Listen',
      ownerUserId: 'OwnerUserId',
      redirectShrink: 'Redirect',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      listenShrink: 'string',
      ownerUserId: 'string',
      redirectShrink: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCloudResourceShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

