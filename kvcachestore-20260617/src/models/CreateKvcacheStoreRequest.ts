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
   * The storage capacity, in GiB. The minimum capacity is 300 TiB (307,200 GiB), and the capacity scales in increments of 300 TiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2395
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure request idempotence. The token can be up to 64 characters in length. Use a UUID.
   * 
   * @example
   * YOUR_CLIENT_TOKEN
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the KVCacheStore. The description must be 2 to 256 characters in length and cannot start with http:// or https://. Default value: empty.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The HPN cluster ID, which is used to create an affinity scheduling relationship between the KVCacheStore and the specified HPN cluster. After the KVCacheStore is created, it may have affinity relationships with multiple HPN clusters based on network topology. You can call the GetKVCacheStore operation to query the available HPN clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * B6
   */
  hpnZone?: string;
  /**
   * @remarks
   * The name of the KVCacheStore. The name must be 2 to 128 characters in length and can contain letters and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-). If this parameter is not specified, the default value is the KVCacheStore ID.
   * 
   * @example
   * sc-data-warehouse-server
   */
  name?: string;
  /**
   * @remarks
   * The billing method. Valid value: POSTPAY (pay-as-you-go). Default value: POSTPAY.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the region where the KVCacheStore is created. You can call the DescribeRegions operation to query the list of activated regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzafsjd7i4qaq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tag key-value pairs for the resource. A maximum of 20 tags are supported. This parameter overrides the parent TagDTO type and uses the Tag type that is consistent with the Get and List responses.
   */
  tag?: CreateKVCacheStoreRequestTag[];
  /**
   * @remarks
   * The zone ID. You can call the DescribeZones operation to query the list of zones in the specified region.
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

