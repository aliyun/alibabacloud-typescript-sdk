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
   * Specifies whether to enable auto-renewal. This parameter applies only when `CdsChargeType` is set to `PrePaid`.
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
   * null
   */
  bizType?: number;
  /**
   * @remarks
   * The billing method of the cloud drive.
   * 
   * @example
   * PostPaid
   */
  cdsChargeType?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required when `OfficeSiteType` is set to `AD_CONNECTOR` and you do not specify `OfficeSiteId`.
   * 
   * @example
   * cen-g4ba1mkji8nj6****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the domain controller. This parameter is required when `OfficeSiteType` is set to `AD_CONNECTOR` and you do not specify `OfficeSiteId`.
   * 
   * @example
   * test.local
   */
  domainName?: string;
  /**
   * @remarks
   * A list of user IDs.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The total capacity of the cloud drive.
   * 
   * - For pay-as-you-go cloud drives, the unit is bytes.
   * 
   * - For subscription cloud drives, the unit is GiB. For example, set the value to 500 for 500 GiB, or to 2048 for 2 TiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 536870912000
   */
  maxSize?: number;
  /**
   * @remarks
   * The name of the cloud drive.
   * 
   * @example
   * wuying-cds
   */
  name?: string;
  /**
   * @remarks
   * The ID of the office site. This parameter applies only when `OfficeSiteType` is set to `AD_CONNECTOR`.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the office site.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The subscription duration. The unit is specified by `PeriodUnit`. This parameter is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
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
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  solutionId?: string;
  /**
   * @remarks
   * The maximum number of users for a subscription cloud drive. This parameter is required only when `CdsChargeType` is set to `PrePaid`.
   * 
   * @example
   * 5
   */
  userCount?: number;
  /**
   * @remarks
   * The maximum size of the personal disk for each user, in bytes.
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

