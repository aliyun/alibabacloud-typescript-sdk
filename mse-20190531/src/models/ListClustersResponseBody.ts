// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyDataMaintenancePeriod extends $dara.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

export class ListClustersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.9.3
   */
  appVersion?: string;
  /**
   * @remarks
   * Indicates whether the instance can be upgraded.
   * 
   * @example
   * true
   */
  canUpdate?: boolean;
  /**
   * @remarks
   * The billing method, such as subscription or pay-as-you-go.
   * 
   * @example
   * Pay-as-you-go
   */
  chargeType?: string;
  /**
   * @remarks
   * The alias of the cluster.
   * 
   * @example
   * mse-7413****
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values: ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * Eureka
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-07-31 11:36:08
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The initialization status of the instance.
   * 
   * @example
   * RESTART_SUCCESS
   */
  initStatus?: string;
  /**
   * @remarks
   * The number of clusters.
   * 
   * @example
   * 2
   */
  instanceCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * mse-7413****-p.eureka.mse.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * mse-7413****-eureka.mse.aliyuncs.com
   */
  intranetDomain?: string;
  maintenancePeriod?: ListClustersResponseBodyDataMaintenancePeriod;
  /**
   * @remarks
   * The edition of the cluster.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmv7jiavm4uxa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are attached to the instance.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * EUREKA_1_9_3
   */
  versionCode?: string;
  versionLifecycle?: string;
  /**
   * @example
   * vpc-bp1hcg467ekqsv0zr****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      canUpdate: 'CanUpdate',
      chargeType: 'ChargeType',
      clusterAliasName: 'ClusterAliasName',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      endDate: 'EndDate',
      initStatus: 'InitStatus',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      internetAddress: 'InternetAddress',
      internetDomain: 'InternetDomain',
      intranetAddress: 'IntranetAddress',
      intranetDomain: 'IntranetDomain',
      maintenancePeriod: 'MaintenancePeriod',
      mseVersion: 'MseVersion',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      versionCode: 'VersionCode',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      canUpdate: 'boolean',
      chargeType: 'string',
      clusterAliasName: 'string',
      clusterName: 'string',
      clusterType: 'string',
      createTime: 'string',
      endDate: 'string',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      internetAddress: 'string',
      internetDomain: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      maintenancePeriod: ListClustersResponseBodyDataMaintenancePeriod,
      mseVersion: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionCode: 'string',
      versionLifecycle: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.maintenancePeriod && typeof (this.maintenancePeriod as any).validate === 'function') {
      (this.maintenancePeriod as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListClustersResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69AD2AA7-DB47-449B-941B-B14409DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned instances.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

