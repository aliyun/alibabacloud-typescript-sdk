// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS storage plan.
   * 
   * @example
   * testDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the OSS storage plan expires. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-30T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum storage capacity offered by the OSS storage plan.
   * 
   * @example
   * 500
   */
  initCapacity?: number;
  /**
   * @remarks
   * The time when the OSS storage plan was purchased. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      initCapacity: 'number',
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

export class DescribeSnapshotPackageResponseBodySnapshotPackages extends $dara.Model {
  snapshotPackage?: DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage[];
  static names(): { [key: string]: string } {
    return {
      snapshotPackage: 'SnapshotPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotPackage: { 'type': 'array', 'itemType': DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotPackage)) {
      $dara.Model.validateArray(this.snapshotPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the OSS storage plans.
   */
  snapshotPackages?: DescribeSnapshotPackageResponseBodySnapshotPackages;
  /**
   * @remarks
   * The total number of OSS storage plans.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotPackages: 'SnapshotPackages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotPackages: DescribeSnapshotPackageResponseBodySnapshotPackages,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshotPackages && typeof (this.snapshotPackages as any).validate === 'function') {
      (this.snapshotPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

