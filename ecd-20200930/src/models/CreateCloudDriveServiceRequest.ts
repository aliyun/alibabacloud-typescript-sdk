// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true: enables the auto-payment feature. Ensure your Alibaba Cloud account has sufficient balance. Insufficient balance may result in abnormal orders.
   * *   false (default): disables the auto-payment feature. The order is generated, but payment must be made manually. You can log on to the Alibaba Cloud Management Console and complete the payment based on the order ID on the Orders page.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Optional. Specifies whether to enable the auto-renewal feature. This parameter takes effect only if you set CdsChargeType to `Prepaid`.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 3
   */
  bizType?: number;
  /**
   * @remarks
   * The billing method of the enterprise drive.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  cdsChargeType?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance. This parameter takes effect only if you set `OfficeSiteType` to `AD_CONNECTOR`. If you have configured `OfficeSiteId`, you can leave this parameter empty.
   * 
   * @example
   * cen-g4ba1mkji8nj6****
   */
  cenId?: string;
  /**
   * @remarks
   * The domain name of the enterprise AD office network. This parameter takes effect only if you set `OfficeSiteType` to `AD_CONNECTOR`. If you have configured `OfficeSiteId`, you can leave this parameter empty.
   * 
   * @example
   * test.local
   */
  domainName?: string;
  /**
   * @remarks
   * The user IDs.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The maximum storage capacity of the enterprise drive.
   * 
   * *   For a pay-as-you-go enterprise drive, the unit is bytes.
   * *   For a subscription enterprise drive, the unit is GiB. For example, to create a 500 GiB subscription drive, set the value to 500 GiB. To create a 2 TiB subscription drive, set the value to 2048 GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 536870912000
   */
  maxSize?: number;
  /**
   * @remarks
   * The name of the enterprise drive
   * 
   * @example
   * wuying-pds
   */
  name?: string;
  /**
   * @remarks
   * The ID of the office network. This parameter takes effect only if you set OfficeSiteType to `AD_CONNECTOR`.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the office network.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience office network.
   * *   AD_CONNECTOR: enterprise Active Directory (AD) office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. This parameter takes effect only if you set `CdsChargeType` to `PrePaid`.
   * 
   * Valid values:
   * 
   * *   1
   * *   2
   * *   3
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Required. The unit of the subscription duration. This parameter takes effect only if you set `CdsChargeType` to `PrePaid`.
   * 
   * Valid value:
   * 
   * *   Year
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Enterprise Drive Service is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * co-0esnf8kb8zpfbqmvt
   */
  solutionId?: string;
  /**
   * @remarks
   * Required. The maximum number of users allowed on the enterprise drive. This parameter takes effect only if you set `CdsChargeType` to `PrePaid`.
   * 
   * Valid values:
   * 
   * *   5 when the value of MaxSize is 500 GiB.
   * *   20 when the value of MaxSize is 2048 GiB.
   * *   50 when the value of MaxSize is 5120 GiB.
   * 
   * @example
   * 5
   */
  userCount?: number;
  /**
   * @remarks
   * The maximum storage capacity of the user\\"s personal disk when allocated. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizType: 'BizType',
      cdsChargeType: 'CdsChargeType',
      cenId: 'CenId',
      domainName: 'DomainName',
      endUserId: 'EndUserId',
      maxSize: 'MaxSize',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      solutionId: 'SolutionId',
      userCount: 'UserCount',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizType: 'number',
      cdsChargeType: 'string',
      cenId: 'string',
      domainName: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxSize: 'number',
      name: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      solutionId: 'string',
      userCount: 'number',
      userMaxSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

