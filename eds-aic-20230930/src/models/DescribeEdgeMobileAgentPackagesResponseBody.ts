// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMobileAgentPackagesResponseBodyPackages extends $dara.Model {
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * BOX
   */
  deviceClass?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-01-05 10:04:07
   */
  expireDate?: string;
  /**
   * @remarks
   * The list of license keys.
   */
  licenseKeys?: string[];
  /**
   * @remarks
   * The package ID.
   * 
   * @example
   * cmag-0c1g77wjljl9hc****
   */
  packageId?: string;
  /**
   * @remarks
   * The package specification. Currently, only hardware is supported.
   * 
   * @example
   * hardware
   */
  packageSpec?: string;
  /**
   * @remarks
   * The package status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceClass: 'DeviceClass',
      expireDate: 'ExpireDate',
      licenseKeys: 'LicenseKeys',
      packageId: 'PackageId',
      packageSpec: 'PackageSpec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceClass: 'string',
      expireDate: 'string',
      licenseKeys: { 'type': 'array', 'itemType': 'string' },
      packageId: 'string',
      packageSpec: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.licenseKeys)) {
      $dara.Model.validateArray(this.licenseKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeMobileAgentPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actual number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more data exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of packages.
   */
  packages?: DescribeEdgeMobileAgentPackagesResponseBodyPackages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packages: 'Packages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      packages: { 'type': 'array', 'itemType': DescribeEdgeMobileAgentPackagesResponseBodyPackages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

