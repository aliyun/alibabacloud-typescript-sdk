// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackageResponseBodyPackageList extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-10-30 00:00:00
   */
  expiredAt?: string;
  /**
   * @remarks
   * The list of node instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The credit quota of the package.
   * 
   * @example
   * 8000
   */
  packageCredit?: string;
  /**
   * @remarks
   * The package ID.
   * 
   * @example
   * cmag-bp19i1yxu60r7twy****
   */
  packageId?: string;
  /**
   * @remarks
   * The package specification.
   * 
   * @example
   * advanced
   */
  packageSpec?: string;
  packageSpecName?: string;
  /**
   * @remarks
   * The package status.
   * 
   * @example
   * ACTIVE
   */
  packageStatus?: string;
  periodEndTime?: string;
  periodStartTime?: string;
  /**
   * @remarks
   * The number of credits that have been used.
   * 
   * @example
   * 1000
   */
  usedCredit?: string;
  static names(): { [key: string]: string } {
    return {
      expiredAt: 'ExpiredAt',
      instanceIds: 'InstanceIds',
      packageCredit: 'PackageCredit',
      packageId: 'PackageId',
      packageSpec: 'PackageSpec',
      packageSpecName: 'PackageSpecName',
      packageStatus: 'PackageStatus',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      usedCredit: 'UsedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredAt: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      packageCredit: 'string',
      packageId: 'string',
      packageSpec: 'string',
      packageSpecName: 'string',
      packageStatus: 'string',
      periodEndTime: 'string',
      periodStartTime: 'string',
      usedCredit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMobileAgentPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The list of package information.
   */
  packageList?: DescribeMobileAgentPackageResponseBodyPackageList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      packageList: 'PackageList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      packageList: { 'type': 'array', 'itemType': DescribeMobileAgentPackageResponseBodyPackageList },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.packageList)) {
      $dara.Model.validateArray(this.packageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

