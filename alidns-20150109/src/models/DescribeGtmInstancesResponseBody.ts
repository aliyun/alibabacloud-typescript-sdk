// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance extends $dara.Model {
  /**
   * @remarks
   * The number of access policies.
   * 
   * @example
   * 5
   */
  accessStrategyNum?: number;
  /**
   * @remarks
   * The number of address pools.
   * 
   * @example
   * 5
   */
  addressPoolNum?: number;
  /**
   * @remarks
   * The name of the alert group.
   * 
   * @example
   * [\\\\"R\\&D group\\\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The CNAME domain name that is used to access the instance.
   * 
   * @example
   * instance1.14.com
   */
  cname?: string;
  /**
   * @remarks
   * The CNAME domain name used to access the instance. Valid values:
   * 
   * *   **SYSTEM_ASSIGN**: A CNAME domain name assigned by the system is used.
   * *   **CUSTOM**: A custom CNAME domain name is used.
   * 
   * @example
   * SYSTEM_ASSIGN
   */
  cnameMode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance was created.
   * 
   * @example
   * 1528284856000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance expires.
   * 
   * @example
   * 1528284856000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The load balancing policy that is used. Valid values:
   * 
   * *   **ALL_RR**: Load balancing
   * *   **RATIO**: Weighted round-robin
   * 
   * @example
   * RATIO
   */
  lbaStrategy?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm2q2jqpjh***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The global time to live (TTL).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The domain name of the user.
   * 
   * @example
   * www.example.com
   */
  userDomainName?: string;
  /**
   * @remarks
   * The version code of the instance.
   * 
   * @example
   * biaozhun
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessStrategyNum: 'AccessStrategyNum',
      addressPoolNum: 'AddressPoolNum',
      alertGroup: 'AlertGroup',
      cname: 'Cname',
      cnameMode: 'CnameMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lbaStrategy: 'LbaStrategy',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessStrategyNum: 'number',
      addressPoolNum: 'number',
      alertGroup: 'string',
      cname: 'string',
      cnameMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      lbaStrategy: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      userDomainName: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBodyGtmInstances extends $dara.Model {
  gtmInstance?: DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance[];
  static names(): { [key: string]: string } {
    return {
      gtmInstance: 'GtmInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstance: { 'type': 'array', 'itemType': DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance },
    };
  }

  validate() {
    if(Array.isArray(this.gtmInstance)) {
      $dara.Model.validateArray(this.gtmInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of queried instances.
   */
  gtmInstances?: DescribeGtmInstancesResponseBodyGtmInstances;
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 193B0163-7F93-42DF-AB05-ACEEB7D22707
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: DescribeGtmInstancesResponseBodyGtmInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.gtmInstances && typeof (this.gtmInstances as any).validate === 'function') {
      (this.gtmInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

