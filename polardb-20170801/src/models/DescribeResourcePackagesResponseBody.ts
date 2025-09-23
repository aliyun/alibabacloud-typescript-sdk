// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList extends $dara.Model {
  /**
   * @example
   * 6
   */
  allocatedCapacity?: number;
  /**
   * @example
   * pj-87681rbcef6******
   */
  projectId?: string;
  /**
   * @example
   * 2
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      allocatedCapacity: 'AllocatedCapacity',
      projectId: 'ProjectId',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedCapacity: 'number',
      projectId: 'string',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackagesResponseBodyResourcePackageListTags extends $dara.Model {
  /**
   * @example
   * Key
   */
  key?: string;
  /**
   * @example
   * Value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackagesResponseBodyResourcePackageList extends $dara.Model {
  /**
   * @example
   * true
   */
  autoQuota?: boolean;
  /**
   * @example
   * 1744621511000
   */
  createTime?: number;
  /**
   * @example
   * 1747238400000
   */
  expireTime?: number;
  /**
   * @example
   * pm-bp11b0i9389******
   */
  resourcePackageId?: string;
  resourcePackageQuotaList?: DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList[];
  /**
   * @example
   * MySQL
   */
  resourcePackageType?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  tags?: DescribeResourcePackagesResponseBodyResourcePackageListTags[];
  /**
   * @example
   * 8
   */
  totalCapacity?: number;
  /**
   * @example
   * 4
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      autoQuota: 'AutoQuota',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      resourcePackageId: 'ResourcePackageId',
      resourcePackageQuotaList: 'ResourcePackageQuotaList',
      resourcePackageType: 'ResourcePackageType',
      status: 'Status',
      tags: 'Tags',
      totalCapacity: 'TotalCapacity',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoQuota: 'boolean',
      createTime: 'number',
      expireTime: 'number',
      resourcePackageId: 'string',
      resourcePackageQuotaList: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList },
      resourcePackageType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageListTags },
      totalCapacity: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageQuotaList)) {
      $dara.Model.validateArray(this.resourcePackageQuotaList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackagesResponseBody extends $dara.Model {
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  resourcePackageList?: DescribeResourcePackagesResponseBodyResourcePackageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageList: 'ResourcePackageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageList: { 'type': 'array', 'itemType': DescribeResourcePackagesResponseBodyResourcePackageList },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageList)) {
      $dara.Model.validateArray(this.resourcePackageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

