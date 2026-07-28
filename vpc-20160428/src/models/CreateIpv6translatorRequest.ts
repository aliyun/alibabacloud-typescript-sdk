// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the subscription bill. Valid values: **true|false**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The billing bandwidth of the IPv6 Translation Service instance, in Mbit/s. Valid values: **1** to **200**. If you do not set the bandwidth for translation mapping entries, the mapping entries in the instance share this bandwidth. 
   * 
   * > If you do not specify the bandwidth, the default value is 10 Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client token must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * sha111
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If the billing cycle is **Month**, valid values are **1** to **9**.  
   * - If the billing cycle is **Year**, the value is **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance. The name defaults to the instance ID. The name must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-), but cannot start with `http://` or `https://`.
   * 
   * @example
   * ipv6_1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The payment method of the IPv6 Translation Service instance. Valid values: 
   * 
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle for subscription. Valid values: 
   * 
   * - **Month** (default): monthly subscription.
   * 
   * - **Year**: yearly subscription.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cm-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specification of the IPv6 Translation Service instance. Valid values: **small**.
   * 
   * @example
   * small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      duration: 'Duration',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      duration: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

