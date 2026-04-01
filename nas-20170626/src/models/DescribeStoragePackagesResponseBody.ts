// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStoragePackagesResponseBodyPackagesPackage extends $dara.Model {
  expiredTime?: string;
  fileSystemId?: string;
  packageId?: string;
  size?: number;
  startTime?: string;
  status?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      packageId: 'PackageId',
      size: 'Size',
      startTime: 'StartTime',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      fileSystemId: 'string',
      packageId: 'string',
      size: 'number',
      startTime: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBodyPackages extends $dara.Model {
  package?: DescribeStoragePackagesResponseBodyPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeStoragePackagesResponseBodyPackagesPackage },
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

export class DescribeStoragePackagesResponseBody extends $dara.Model {
  packages?: DescribeStoragePackagesResponseBodyPackages;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of storage plans returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 035B3A3A-E514-4B41-B906-5D906CFB****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of storage plans.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      packages: 'Packages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packages: DescribeStoragePackagesResponseBodyPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

