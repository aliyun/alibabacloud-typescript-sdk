// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect and is optional only when CdsChargeType is set to `PrePaid`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The billing method of the NAS drive.
   * 
   * @example
   * PostPaid
   */
  cdsChargeType?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN) associated with the AD office network. This parameter takes effect only when `OfficeSiteType` is set to `AD_CONNECTOR`. If `OfficeSiteId` is specified, you do not need to specify this parameter.
   * 
   * @example
   * cen-g4ba1mkji8nj6****
   */
  cenId?: string;
  /**
   * @remarks
   * The domain controller name of the AD office network. This parameter takes effect only when `OfficeSiteType` is set to `AD_CONNECTOR`. If `OfficeSiteId` is specified, you do not need to specify this parameter.
   * 
   * @example
   * test.local
   */
  domainName?: string;
  /**
   * @remarks
   * The list of user IDs.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The Peak Volume of the NAS drive storage space.
   * 
   * - When you create a pay-as-you-go NAS drive, the unit is bytes.
   * - When you create an upfront NAS drive, the unit is GiB. For example, to create a 500 GiB upfront NAS drive, set this parameter to 500. To create a 2 TiB upfront NAS drive, set this parameter to 2048.
   * 
   * This parameter is required.
   * 
   * @example
   * 536870912000
   */
  maxSize?: number;
  /**
   * @remarks
   * The name of the enterprise NAS drive.
   * 
   * @example
   * wuying-cds
   */
  name?: string;
  /**
   * @remarks
   * The ID of the office network. This parameter takes effect only when the network type is set to `AD_CONNECTOR`.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The network type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. This parameter takes effect and is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the subscription NAS drive. This parameter takes effect and is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID for resource ownership in reseller pattern. You do not need to specify this parameter if you are not in reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * sol-2i8qxpv6t1a03****
   */
  solutionId?: string;
  /**
   * @remarks
   * The maximum number of users for the subscription NAS drive. This parameter takes effect and is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * 5
   */
  userCount?: number;
  /**
   * @remarks
   * The maximum storage capacity of a personal drive when you assign a personal drive to a user. Unit: bytes.
   * 
   * @example
   * 104857600
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

