// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance extends $dara.Model {
  accessStrategyNum?: number;
  addressPoolNum?: number;
  alertGroup?: string;
  cname?: string;
  cnameMode?: string;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  lbaStrategy?: string;
  resourceGroupId?: string;
  ttl?: number;
  userDomainName?: string;
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

