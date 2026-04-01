// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic extends $dara.Model {
  expiredCount?: number;
  expiringCount?: number;
  fileSystemType?: string;
  meteredSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      expiredCount: 'ExpiredCount',
      expiringCount: 'ExpiringCount',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredCount: 'number',
      expiringCount: 'number',
      fileSystemType: 'string',
      meteredSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemStatistics extends $dara.Model {
  fileSystemStatistic?: DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic[];
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistic: 'FileSystemStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistic: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemStatistic)) {
      $dara.Model.validateArray(this.fileSystemStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage extends $dara.Model {
  expiredTime?: string;
  packageId?: string;
  size?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      packageId: 'PackageId',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      packageId: 'string',
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

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages extends $dara.Model {
  package?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage },
    };
  }

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem extends $dara.Model {
  capacity?: number;
  chargeType?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  fileSystemId?: string;
  fileSystemType?: string;
  meteredIASize?: number;
  meteredSize?: number;
  packages?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages;
  protocolType?: string;
  regionId?: string;
  status?: string;
  storageType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredIASize: 'MeteredIASize',
      meteredSize: 'MeteredSize',
      packages: 'Packages',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredIASize: 'number',
      meteredSize: 'number',
      packages: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages,
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystems extends $dara.Model {
  fileSystem?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystem)) {
      $dara.Model.validateArray(this.fileSystem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBody extends $dara.Model {
  fileSystemStatistics?: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics;
  fileSystems?: DescribeFileSystemStatisticsResponseBodyFileSystems;
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F088138-FD73-4B68-95CC-DFAD4D85****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file system entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistics: 'FileSystemStatistics',
      fileSystems: 'FileSystems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistics: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics,
      fileSystems: DescribeFileSystemStatisticsResponseBodyFileSystems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystemStatistics && typeof (this.fileSystemStatistics as any).validate === 'function') {
      (this.fileSystemStatistics as any).validate();
    }
    if(this.fileSystems && typeof (this.fileSystems as any).validate === 'function') {
      (this.fileSystems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

