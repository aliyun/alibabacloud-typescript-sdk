// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for subscription bills. Valid values: **true** and **false**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth of the IPv6 Translation Service instance. Unit: Mbit/s. Valid values: **1** to **200**. If you do not specify the bandwidth for an IPv6 translation mapping entry, all IPv6 translation mapping entries in the instance share this bandwidth. 
   * 
   * > If you do not specify the bandwidth, the default value is 10 Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client token must be unique across different requests and can contain a maximum of 64 ASCII characters.
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
   * - If the billing cycle is **Year**, the valid value is **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance. Default value: the instance ID. The name must be 2 to 100 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * ipv6_1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the IPv6 Translation Service instance. Valid values: 
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
   * The billing cycle of the subscription instance. Valid values: 
   * 
   * - **Month** (default): billed on a monthly basis.
   * 
   * - **Year**: billed on a yearly basis.
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
   * The specification of the IPv6 Translation Service instance. Valid value: **small**.
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

