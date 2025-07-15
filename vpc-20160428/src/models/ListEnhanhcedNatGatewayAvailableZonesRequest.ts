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
   * The value of the filter key.
   * 
   * >  If the filter key is set to **PrivateLinkEnabled**, you must specify a filter value. Valid values: **true** and **false**.
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
   * The language to display the results. Valid values:
   * 
   * *   **zh-CN** (default): Chinese
   * *   **en-US**: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The filter information. You can specify a filter key and a filter value.
   */
  filter?: ListEnhanhcedNatGatewayAvailableZonesRequestFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * In this example, zones that support NAT gateways in the UAE (Dubai) region are queried.
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

