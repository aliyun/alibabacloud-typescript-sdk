// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackageResponseBodyPackageList extends $dara.Model {
  /**
   * @example
   * 2026-10-30 00:00:00
   */
  expiredAt?: string;
  instanceIds?: string[];
  /**
   * @example
   * 8000
   */
  packageCredit?: string;
  /**
   * @example
   * cmag-bp19i1yxu60r7twy****
   */
  packageId?: string;
  /**
   * @example
   * advanced
   */
  packageSpec?: string;
  packageSpecName?: string;
  /**
   * @example
   * ACTIVE
   */
  packageStatus?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success.
   */
  message?: string;
  packageList?: DescribeMobileAgentPackageResponseBodyPackageList[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  /**
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

