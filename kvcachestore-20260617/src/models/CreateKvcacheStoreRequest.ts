// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKVCacheStoreRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * 000098da1005a3df
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * 000088aabb0023f7
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKVCacheStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The storage capacity in GiB. The minimum capacity is 300 TiB (307200 GiB), and the capacity is scaled in increments of 300 TiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2395
   */
  capacity?: number;
  /**
   * @remarks
   * The client token used to ensure idempotence of the request. The token can be up to 64 characters in length. Use a UUID.
   * 
   * @example
   * YOUR_CLIENT_TOKEN
   */
  clientToken?: string;
  /**
   * @remarks
   * The KVCacheStore description. The description must be 2 to 256 characters in length and cannot start with http:// or https://. Default value: empty.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The HPN cluster ID, which is used to create an affinity scheduling relationship between the KVCacheStore and the specified HPN cluster. After creation, the KVCacheStore may have affinity relationships with multiple HPN clusters based on network topology. You can call GetKVCacheStore to query the available HPN clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * B6
   */
  hpnZone?: string;
  /**
   * @remarks
   * The KVCacheStore name. The name must be 2 to 128 characters in length and can contain characters from the Unicode letter category (including English and Chinese characters) and digits. The name can contain colons (:), underscores (_), periods (.), and hyphens (-). If this parameter is not specified, the default value is the KVCacheStore ID.
   * 
   * @example
   * sc-data-warehouse-server
   */
  name?: string;
  /**
   * @remarks
   * The billing method. Valid values: POSTPAY (pay-as-you-go). Default value: POSTPAY.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID in which to create the KVCacheStore. You can call DescribeRegions to query the list of available regions.
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
   * rg-aekzafsjd7i4qaq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resource tag key-value pairs. A maximum of 20 tags are supported. This overrides the parent TagDTO type and uses the same Tag type as the Get/List response.
   */
  tag?: CreateKVCacheStoreRequestTag[];
  /**
   * @remarks
   * The zone ID. You can call DescribeZones to query the list of zones in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      description: 'Description',
      hpnZone: 'HpnZone',
      name: 'Name',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      clientToken: 'string',
      description: 'string',
      hpnZone: 'string',
      name: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateKVCacheStoreRequestTag },
      zoneId: 'string',
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

