// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
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
   * The billing method of the instance.  For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html).
   *  Valid values:
   * 
   * - PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient balance or credits in your account. Otherwise, the InvalidPayMethod error code is returned.
   * - PostPaid: pay-as-you-go.
   * SpotWithPriceLimit: spot instance for which a maximum hourly price is specified.
   * - SpotAsPriceGo: spot instance for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * - instance: Elastic Compute Service (ECS) instance
   * - disk: disk
   * - reservedinstance: reserved instance
   * - scu: storage capacity unit (SCU)
   * 
   * Default value: instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceChargeType: 'InstanceChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

