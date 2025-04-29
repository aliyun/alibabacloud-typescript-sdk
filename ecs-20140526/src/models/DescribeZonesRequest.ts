// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The natural language that is used to filter responses. For more information, see [RFC 7231](https://tools.ietf.org/html/rfc7231). Valid values:
   * 
   * *   zh-CN: Simplified Chinese
   * *   zh_TW: Traditional Chinese
   * *   en-US: English
   * *   ja: Japanese
   * *   fr: French
   * *   de: German
   * *   ko: Korean
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method of resources. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * *   Prepaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. You can specify this parameter when you set `InstanceChargeType` to PostPaid. For more information, see [Preemptible instances](https://help.aliyun.com/document_detail/52088.html). Valid values:
   * 
   * *   NoSpot: The instances are regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instance is a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to display detailed information.
   * 
   * *   true: displays detailed information.
   * *   false: does not display detailed information.
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceChargeType: 'InstanceChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotStrategy: 'SpotStrategy',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotStrategy: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

