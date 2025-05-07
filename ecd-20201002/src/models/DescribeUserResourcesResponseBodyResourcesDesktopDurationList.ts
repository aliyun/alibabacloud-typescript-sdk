// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesDesktopDurationList extends $dara.Model {
  /**
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  orderInstanceId?: string;
  /**
   * @example
   * 2025-01-17T07:01Z
   */
  packageCreationTime?: string;
  /**
   * @example
   * 2025-02-17T15:59Z
   */
  packageExpiredTime?: string;
  /**
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  packageId?: string;
  /**
   * @example
   * Available
   */
  packageStatus?: string;
  /**
   * @example
   * NORMAL_PACKAGE
   */
  packageType?: string;
  /**
   * @example
   * Postpaid
   */
  packageUsedUpStrategy?: string;
  /**
   * @example
   * 2025-02-17T15:59Z
   */
  periodEndTime?: string;
  /**
   * @example
   * 2025-01-17T07:01Z
   */
  periodStartTime?: string;
  /**
   * @example
   * 199
   */
  postPaidLimitFee?: number;
  /**
   * @example
   * 432000
   */
  totalDuration?: number;
  /**
   * @example
   * 16850
   */
  usedDuration?: number;
  static names(): { [key: string]: string } {
    return {
      orderInstanceId: 'OrderInstanceId',
      packageCreationTime: 'PackageCreationTime',
      packageExpiredTime: 'PackageExpiredTime',
      packageId: 'PackageId',
      packageStatus: 'PackageStatus',
      packageType: 'PackageType',
      packageUsedUpStrategy: 'PackageUsedUpStrategy',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      postPaidLimitFee: 'PostPaidLimitFee',
      totalDuration: 'TotalDuration',
      usedDuration: 'UsedDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInstanceId: 'string',
      packageCreationTime: 'string',
      packageExpiredTime: 'string',
      packageId: 'string',
      packageStatus: 'string',
      packageType: 'string',
      packageUsedUpStrategy: 'string',
      periodEndTime: 'string',
      periodStartTime: 'string',
      postPaidLimitFee: 'number',
      totalDuration: 'number',
      usedDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

