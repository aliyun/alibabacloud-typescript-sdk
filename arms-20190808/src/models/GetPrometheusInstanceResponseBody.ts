// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusInstanceResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagValue1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The permission type. Valid values: readWrite, readOnly, and httpReadOnly
   * 
   * @example
   * readWrite
   */
  accessType?: string;
  /**
   * @remarks
   * The number of days for which data is automatically archived after the storage duration expires. Valid values: 60, 90, 180, and 365. 0 indicates that the data is not archived.
   * 
   * @example
   * 60
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The whitelist of IP addresses for which password-free read is enabled.
   * 
   * @example
   * null
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * The whitelist of IP addresses for which password-free write is enabled.
   * 
   * @example
   * null
   */
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * The authorization token.
   * 
   * @example
   * GciOiJIUzI1NiJ9***
   */
  authToken?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * c589a1b8db05c4561aefbb898ca8fb1cf
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the monitoring object.
   * 
   * @example
   * prom1
   */
  clusterName?: string;
  /**
   * @remarks
   * *   remote-write: general-purpose Prometheus instance
   * *   ecs: Prometheus instances for ECS
   * *   cloud-monitor: Prometheus instance for Alibaba Cloud services in the Chinese mainland
   * *   cloud-product: Prometheus instance for Alibaba Cloud services outside the Chinese mainland
   * *   global-view: global aggregation instance
   * *   aliyun-cs: Prometheus instance for Container Service
   * 
   * @example
   * remote-write
   */
  clusterType?: string;
  /**
   * @remarks
   * The data storage status at the backend.
   * 
   * @example
   * RUNNING
   */
  dbInstanceStatus?: string;
  /**
   * @remarks
   * Indicates whether password-free read is enabled.
   * 
   * @example
   * false
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Indicates whether password-free write is enabled.
   * 
   * @example
   * false
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Indicates whether access token authentication is enabled.
   * 
   * @example
   * true
   */
  enableAuthToken?: string;
  /**
   * @remarks
   * The extra information. This parameter is returned only for console requests.
   */
  extraInfo?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the Grafana workspace.
   * 
   * @example
   * grafana-rnggfvhlcdl6m71***
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The public URL for the HTTP API.
   * 
   * @example
   * https://cn-beijing.arms.aliyuncs.com:9443/api/v1/prometheus/xxx
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * The internal URL for the HTTP API.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx
   */
  httpApiIntraUrl?: string;
  openTelemetryInterUrl?: string;
  openTelemetryIntraUrl?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the billing method was modified.
   * 
   * @example
   * 2025-02-26T06:05:01Z
   */
  paymentTypeUpdateTime?: string;
  /**
   * @remarks
   * The product to which the Prometheus instance belongs. Valid values: arms and cms.
   * 
   * @example
   * arms
   */
  product?: string;
  /**
   * @remarks
   * The public URL for Pushgateway.
   * 
   * @example
   * https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v2
   */
  pushGatewayInterUrl?: string;
  /**
   * @remarks
   * The internal URL for Pushgateway.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v2
   */
  pushGatewayIntraUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The public URL for remote read.
   * 
   * @example
   * http://cn-beijing.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * The internal URL for remote read.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/xxx/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * The public URL for remote write.
   * 
   * @example
   * https://cn-beijing.arms.aliyuncs.com/prometheus/xxx/api/v3/write
   */
  remoteWriteInterUrl?: string;
  /**
   * @remarks
   * The internal URL for remote write.
   * 
   * @example
   * http://cn-beijing-intranet.arms.aliyuncs.com/prometheus/xxx/api/v3/write
   */
  remoteWriteIntraUrl?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2vezare****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to PROMETHEUS.
   * 
   * @example
   * PROMETHEUS
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
   * 
   * @example
   * sg-8vbdgmf4nraiqa9bx0jo
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The data storage duration. Unit: days.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * The child instances of the global aggregation instance. The value is a JSON string.
   * 
   * @example
   * [{"headers":{},"regionId":"cn-hangzhou","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c39a1048921e04fceb039db2fbb73\\*\\*\\*","sourceName":"arms-luyao-test","dataSource":"","userId":"167275301789\\*\\*\\*"},{"headers":{},"regionId":"cn-beijing","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c6b6485496d5b400abde22cb47b5\\*\\*\\*\\*","sourceName":"agent-321-test","dataSource":"","userId":"1672753017899\\*\\*\\*"},{"headers":{},"regionId":"cn-zhangjiakou","sourceType":"AlibabaPrometheus","extras":{},"clusterId":"c261a4f3200c446659133f1ade789b15e","sourceName":"zaifeng-cardinality-01","dataSource":"","userId":"167275301789\\*\\*\\*"}]
   */
  subClustersJson?: string;
  /**
   * @remarks
   * The supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetPrometheusInstanceResponseBodyDataTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 167275301789****
   */
  userId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
   * 
   * @example
   * vsw-f8z73vcja1tqnw90aav5a
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * V1
   */
  version?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is returned only for Prometheus instances for ECS.
   * 
   * @example
   * vpc-8vb02uk57qbcktqcvqqqj
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      archiveDuration: 'ArchiveDuration',
      authFreeReadPolicy: 'AuthFreeReadPolicy',
      authFreeWritePolicy: 'AuthFreeWritePolicy',
      authToken: 'AuthToken',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      dbInstanceStatus: 'DbInstanceStatus',
      enableAuthFreeRead: 'EnableAuthFreeRead',
      enableAuthFreeWrite: 'EnableAuthFreeWrite',
      enableAuthToken: 'EnableAuthToken',
      extraInfo: 'ExtraInfo',
      grafanaInstanceId: 'GrafanaInstanceId',
      httpApiInterUrl: 'HttpApiInterUrl',
      httpApiIntraUrl: 'HttpApiIntraUrl',
      openTelemetryInterUrl: 'OpenTelemetryInterUrl',
      openTelemetryIntraUrl: 'OpenTelemetryIntraUrl',
      paymentType: 'PaymentType',
      paymentTypeUpdateTime: 'PaymentTypeUpdateTime',
      product: 'Product',
      pushGatewayInterUrl: 'PushGatewayInterUrl',
      pushGatewayIntraUrl: 'PushGatewayIntraUrl',
      regionId: 'RegionId',
      remoteReadInterUrl: 'RemoteReadInterUrl',
      remoteReadIntraUrl: 'RemoteReadIntraUrl',
      remoteWriteInterUrl: 'RemoteWriteInterUrl',
      remoteWriteIntraUrl: 'RemoteWriteIntraUrl',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      securityGroupId: 'SecurityGroupId',
      storageDuration: 'StorageDuration',
      subClustersJson: 'SubClustersJson',
      supportAuthTypes: 'SupportAuthTypes',
      tags: 'Tags',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      archiveDuration: 'number',
      authFreeReadPolicy: 'string',
      authFreeWritePolicy: 'string',
      authToken: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      dbInstanceStatus: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthFreeWrite: 'boolean',
      enableAuthToken: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      grafanaInstanceId: 'string',
      httpApiInterUrl: 'string',
      httpApiIntraUrl: 'string',
      openTelemetryInterUrl: 'string',
      openTelemetryIntraUrl: 'string',
      paymentType: 'string',
      paymentTypeUpdateTime: 'string',
      product: 'string',
      pushGatewayInterUrl: 'string',
      pushGatewayIntraUrl: 'string',
      regionId: 'string',
      remoteReadInterUrl: 'string',
      remoteReadIntraUrl: 'string',
      remoteWriteInterUrl: 'string',
      remoteWriteIntraUrl: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      securityGroupId: 'string',
      storageDuration: 'number',
      subClustersJson: 'string',
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetPrometheusInstanceResponseBodyDataTags },
      userId: 'string',
      vSwitchId: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.supportAuthTypes)) {
      $dara.Model.validateArray(this.supportAuthTypes);
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

export class GetPrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetPrometheusInstanceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 52C422FD-6B43-524D-B8A1-A4693294318C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetPrometheusInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

