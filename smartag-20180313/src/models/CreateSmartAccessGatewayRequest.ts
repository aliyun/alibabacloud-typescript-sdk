// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether you already have an SAG device. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  alreadyHaveSag?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-payment for the instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * If you set the parameter to false, go to Billing Management to complete the payment after you call this operation. After you complete the payment, the instance can be created.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The remarks left by the buyer.
   * 
   * This parameter is required.
   * 
   * @example
   * Remarks
   */
  buyerMessage?: string;
  /**
   * @remarks
   * The edition of SAG when you create an SAG vCPE instance.
   * 
   * Set the value to **basic**, which specifies Basic Edition.
   * 
   * @example
   * basic
   */
  CPEVersion?: string;
  /**
   * @remarks
   * The billing method of the SAG instance.
   * 
   * Set the value to **PREPAY**, which specifies the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The description of the SAG instance.
   * 
   * The description must be 2 to 256 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The deployment mode. Valid values:
   * 
   * *   **no_backup**: You buy only one SAG device to connect private networks to Alibaba Cloud.
   * *   **cold_backup**: You buy two SAG devices in active-standby mode. One SAG device serves as an active device and the other serves as a standby device. Only the active device is connected to Alibaba Cloud. If the active device is not working as expected, you must manually perform a switchover.
   * *   **warm_backup**: You buy two SAG devices in active-active mode. Both SAG devices are connected to Alibaba Cloud. If an active device is not working as expected, a failover is automatically performed.
   * 
   * >  If you want to create an SAG vCPE instance, set the value to **warm_backup**.
   * 
   * This parameter is required.
   * 
   * @example
   * no_backup
   */
  haType?: string;
  /**
   * @remarks
   * The type of the SAG instance. Valid values:
   * 
   * *   **sag-100wm**
   * *   **sag-1000**
   * *   **sag-vcpe**
   * 
   * This parameter is required.
   * 
   * @example
   * sag-100wm
   */
  hardWareSpec?: string;
  /**
   * @remarks
   * The bandwidth of the SAG instance.
   * 
   * *   If you want to create an SAG CPE instance and the model is **sag-100wm**, valid values of this parameter are **2** to **50**. Unit: Mbit/s.
   * *   If you want to create an SAG CPE instance and the model is **sag-1000**, valid values of this parameter are **10** to **500**. Unit: Mbit/s.
   * *   If you want to create an SAG vCPE instance, valid values of this parameter are **10** to **1000**. Unit: Mbit/s.
   * 
   * @example
   * 12
   */
  maxBandWidth?: number;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * The name must be 2 to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * testname
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period of the SAG instance. Unit: months.
   * 
   * Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The detailed address of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * No.XX
   */
  receiverAddress?: string;
  /**
   * @remarks
   * The city of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  receiverCity?: string;
  /**
   * @remarks
   * The country of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * China
   */
  receiverCountry?: string;
  /**
   * @remarks
   * The district of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * West Lake
   */
  receiverDistrict?: string;
  /**
   * @remarks
   * The email address of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * xx@example.com
   */
  receiverEmail?: string;
  /**
   * @remarks
   * The mobile phone number of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * 1884085****
   */
  receiverMobile?: string;
  /**
   * @remarks
   * The name of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * Alice
   */
  receiverName?: string;
  /**
   * @remarks
   * The landline phone number of the recipient.
   * 
   * @example
   * 8585****
   */
  receiverPhone?: string;
  /**
   * @remarks
   * The province of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  receiverState?: string;
  /**
   * @remarks
   * The town of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhuan Tang
   */
  receiverTown?: string;
  /**
   * @remarks
   * The postcode of the recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * 310000
   */
  receiverZip?: string;
  /**
   * @remarks
   * The ID of the region where you want to deploy the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyHaveSag: 'AlreadyHaveSag',
      autoPay: 'AutoPay',
      buyerMessage: 'BuyerMessage',
      CPEVersion: 'CPEVersion',
      chargeType: 'ChargeType',
      description: 'Description',
      haType: 'HaType',
      hardWareSpec: 'HardWareSpec',
      maxBandWidth: 'MaxBandWidth',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      receiverAddress: 'ReceiverAddress',
      receiverCity: 'ReceiverCity',
      receiverCountry: 'ReceiverCountry',
      receiverDistrict: 'ReceiverDistrict',
      receiverEmail: 'ReceiverEmail',
      receiverMobile: 'ReceiverMobile',
      receiverName: 'ReceiverName',
      receiverPhone: 'ReceiverPhone',
      receiverState: 'ReceiverState',
      receiverTown: 'ReceiverTown',
      receiverZip: 'ReceiverZip',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyHaveSag: 'boolean',
      autoPay: 'boolean',
      buyerMessage: 'string',
      CPEVersion: 'string',
      chargeType: 'string',
      description: 'string',
      haType: 'string',
      hardWareSpec: 'string',
      maxBandWidth: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      receiverAddress: 'string',
      receiverCity: 'string',
      receiverCountry: 'string',
      receiverDistrict: 'string',
      receiverEmail: 'string',
      receiverMobile: 'string',
      receiverName: 'string',
      receiverPhone: 'string',
      receiverState: 'string',
      receiverTown: 'string',
      receiverZip: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

