// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-0be9c4b624-37****
   */
  packageId?: string;
  /**
   * @remarks
   * The type of the storage plan.
   * 
   * Valid values:
   * - ssd: the storage plan for Performance NAS file systems.
   * - hybrid: the storage plan for Capacity NAS file systems.
   * 
   * @example
   * hybrid
   */
  packageType?: string;
  /**
   * @remarks
   * The capacity of the storage plan. Unit: bytes.
   * 
   * @example
   * 107374182400
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      packageId: 'PackageId',
      packageType: 'PackageType',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      packageId: 'string',
      packageType: 'string',
      size: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

