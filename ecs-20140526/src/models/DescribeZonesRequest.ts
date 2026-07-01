// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The natural language that is used to filter response results. For more information, see [RFC 7231](https://tools.ietf.org/html/rfc7231). Valid values:  
   *          
   * - zh-CN: simplified Chinese.
   * - zh-TW: traditional Chinese.
   * - en-US: English.
   * - ja: Japanese.
   * - fr: French.
   * - de: German.
   * - ko: Korean.
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method supported by resources in the active zone. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values: 
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
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
   * The ID of the region where the zones are located. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The bidding policy for pay-as-you-go instances. You can specify this parameter when `InstanceChargeType=PostPaid`. For more information, see [Spot instances](https://help.aliyun.com/document_detail/52088.html). Valid values:
   *          
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a maximum price limit.
   * - SpotAsPriceGo: spot instance priced at the market price with the pay-as-you-go price as the upper limit.
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
   * - true: Display detailed information.
   * - false: Do not display detailed information.
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

