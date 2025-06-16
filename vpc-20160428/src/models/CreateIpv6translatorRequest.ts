// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values: **true and false**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth of the IPv6 Translation Service instance. Unit: Mbit/s. Valid values: **1** to **200**. If you do not specify the bandwidth for the mapping entry, the bandwidth is shared with the mapping entry.
   * 
   * > If you do not specify this parameter, the default bandwidth is 10 Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * sha111
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   If the billing cycle is **Month**, valid values are **1** to **9**.
   * *   If the billing cycle is **Year**, set the value to **3**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance. The default name is the instance ID. It must be 2 to 100 characters in length and must start with a letter. It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
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
   * *   **PREPAY**: subscription
   * *   **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * 
   * *   **Month** (default)
   * *   **Year**
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The specification of the IPv6 Translation Service instance. Set the value to **small**.
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

