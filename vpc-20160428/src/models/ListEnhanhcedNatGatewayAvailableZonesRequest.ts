// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnhanhcedNatGatewayAvailableZonesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Only **PrivateLinkEnabled** is supported.
   * 
   * @example
   * PrivateLinkEnabled
   */
  key?: string;
  /**
   * @remarks
   * The filter value corresponding to the filter key.
   * 
   * > If the filter key is **PrivateLinkEnabled**, you must specify a filter value. Valid values: **true** and **false**.
   * 
   * @example
   * true
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

export class ListEnhanhcedNatGatewayAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the response is returned. Valid values:
   * 
   * - **zh-CN** (default): Chinese.
   * - **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The filter conditions. You can specify key-value pairs to filter the query results.
   */
  filter?: ListEnhanhcedNatGatewayAvailableZonesRequestFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs. This example queries the available zones for NAT gateway resources in the UAE (Dubai) region.
   * 
   * This parameter is required.
   * 
   * @example
   * me-east-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      filter: { 'type': 'array', 'itemType': ListEnhanhcedNatGatewayAvailableZonesRequestFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

