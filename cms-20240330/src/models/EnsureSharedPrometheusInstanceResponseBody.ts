// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrometheusInstanceStoreConfig } from "./PrometheusInstanceStoreConfig";


export class EnsureSharedPrometheusInstanceResponseBodyPrometheusInstanceTags extends $dara.Model {
  /**
   * @remarks
   * The key of the instance tag.
   * 
   * @example
   * acs:cms:shareScope
   */
  key?: string;
  /**
   * @remarks
   * The value of the instance tag.
   * 
   * @example
   * region:cn-hangzhou:team-workspace
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class EnsureSharedPrometheusInstanceResponseBodyPrometheusInstance extends $dara.Model {
  /**
   * @remarks
   * The access permissions of the instance. Valid values: readWrite, readOnly, and httpReadOnly.
   * 
   * @example
   * readWrite
   */
  accessType?: string;
  /**
   * @remarks
   * The number of days for automatic archive retention after the storage expires. A value of 0 indicates no archiving, and 3650 indicates permanent retention.
   * 
   * @example
   * 0
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The IP address whitelist policy that allows access to the authentication-free read endpoint.
   * 
   * @example
   * 127.0.0.1
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * The IP address whitelist policy that allows access to the authentication-free write endpoint.
   * 
   * @example
   * 127.0.0.1
   */
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * The authentication token of the instance.
   * 
   * @example
   * example-auth-token
   */
  authToken?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in UTC+0 in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2026-11-11T06:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether authentication-free read is enabled.
   * 
   * @example
   * false
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Indicates whether authentication-free write is enabled.
   * 
   * @example
   * false
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Indicates whether authentication token-based authentication is enabled.
   * 
   * @example
   * false
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The extended information. This field is returned only for console requests.
   * 
   * @example
   * {"slsProject":"proj-cms-cn-hangzhou"}
   */
  extraInfo?: { [key: string]: string };
  /**
   * @remarks
   * The URL of the dashboard associated with the instance.
   * 
   * @example
   * https://g.console.aliyun.com/folders/example
   */
  folderUrl?: string;
  /**
   * @remarks
   * The ID of the bound managed Grafana instance.
   * 
   * @example
   * grafana-cn-hangzhou-example
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The name of the bound managed Grafana instance.
   * 
   * @example
   * shared-grafana
   */
  grafanaInstanceName?: string;
  /**
   * @remarks
   * The public endpoint of the Prometheus HTTP API.
   * 
   * @example
   * https://cn-hangzhou.arms.aliyuncs.com/prometheus/rw-example/api/v1
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * The internal endpoint of the Prometheus HTTP API.
   * 
   * @example
   * http://prometheus.cn-hangzhou.aliyuncs.com/prometheus/rw-example/api/v1
   */
  httpApiInternalUrl?: string;
  /**
   * @remarks
   * The internal network endpoint of the Prometheus HTTP API.
   * 
   * @example
   * https://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/rw-example/api/v1
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * The instance type. For a shared instance, the value is remote-write, which indicates Prometheus for Remote Write.
   * 
   * @example
   * remote-write
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method. POSTPAY indicates pay-as-you-go billing based on the number of reported metrics, and POSTPAY_GB indicates pay-as-you-go billing based on the volume of written metrics.
   * 
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the billing method of the instance was last modified. The time is in UTC+0 and formatted as yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2026-11-11T06:00Z
   */
  paymentTypeUpdateTime?: string;
  /**
   * @remarks
   * The product to which the instance belongs. Valid values: arms and cms.
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * rw-8f3c1a2b4d5e6f70
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The name of the Prometheus instance. For a workspace shared instance, the name is generated by the server in the RegionShare:{workspace}:{regionId} format.
   * 
   * @example
   * RegionShare:team-workspace:cn-hangzhou
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The public endpoint of Pushgateway.
   * 
   * @example
   * https://cn-hangzhou.arms.aliyuncs.com/prometheus/rw-example/api/v1/pushgateway
   */
  pushGatewayInterUrl?: string;
  /**
   * @remarks
   * The internal endpoint of Pushgateway.
   * 
   * @example
   * http://prometheus.cn-hangzhou.aliyuncs.com/prometheus/rw-example/api/v1/pushgateway
   */
  pushGatewayInternalUrl?: string;
  /**
   * @remarks
   * The internal network endpoint of Pushgateway.
   * 
   * @example
   * https://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/rw-example/api/v1/pushgateway
   */
  pushGatewayIntraUrl?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The public endpoint of Remote Read.
   * 
   * @example
   * https://cn-hangzhou.arms.aliyuncs.com/prometheus/rw-example/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * The internal endpoint of Remote Read.
   * 
   * @example
   * http://prometheus.cn-hangzhou.aliyuncs.com/prometheus/rw-example/api/v1/read
   */
  remoteReadInternalUrl?: string;
  /**
   * @remarks
   * The internal network endpoint of Remote Read.
   * 
   * @example
   * https://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/rw-example/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * The public endpoint of Remote Write.
   * 
   * @example
   * https://cn-hangzhou.arms.aliyuncs.com/prometheus/rw-example/api/v1/write
   */
  remoteWriteInterUrl?: string;
  /**
   * @remarks
   * The internal endpoint of Remote Write.
   * 
   * @example
   * http://prometheus.cn-hangzhou.aliyuncs.com/prometheus/rw-example/api/v1/write
   */
  remoteWriteInternalUrl?: string;
  /**
   * @remarks
   * The internal network endpoint of Remote Write.
   * 
   * @example
   * https://cn-hangzhou-intranet.arms.aliyuncs.com/prometheus/rw-example/api/v1/write
   */
  remoteWriteIntraUrl?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyexample
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as PrometheusInstance.
   * 
   * @example
   * PrometheusInstance
   */
  resourceType?: string;
  /**
   * @remarks
   * The backend data storage status, such as Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The metric storage duration in days.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * The Prometheus query cache and parallel query configurations.
   */
  storeConfig?: PrometheusInstanceStoreConfig;
  /**
   * @remarks
   * The list of authentication and authorization types supported by the instance.
   * 
   * @example
   * BasicAuth
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * The instance tags. A workspace shared instance includes the system tag acs:cms:shareScope.
   */
  tags?: EnsureSharedPrometheusInstanceResponseBodyPrometheusInstanceTags[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 1234567890123456
   */
  userId?: string;
  /**
   * @remarks
   * The version of the instance, such as V2.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * The name of the workspace to which the instance belongs.
   * 
   * @example
   * team-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'accessType',
      archiveDuration: 'archiveDuration',
      authFreeReadPolicy: 'authFreeReadPolicy',
      authFreeWritePolicy: 'authFreeWritePolicy',
      authToken: 'authToken',
      createTime: 'createTime',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthFreeWrite: 'enableAuthFreeWrite',
      enableAuthToken: 'enableAuthToken',
      extraInfo: 'extraInfo',
      folderUrl: 'folderUrl',
      grafanaInstanceId: 'grafanaInstanceId',
      grafanaInstanceName: 'grafanaInstanceName',
      httpApiInterUrl: 'httpApiInterUrl',
      httpApiInternalUrl: 'httpApiInternalUrl',
      httpApiIntraUrl: 'httpApiIntraUrl',
      instanceType: 'instanceType',
      paymentType: 'paymentType',
      paymentTypeUpdateTime: 'paymentTypeUpdateTime',
      product: 'product',
      prometheusInstanceId: 'prometheusInstanceId',
      prometheusInstanceName: 'prometheusInstanceName',
      pushGatewayInterUrl: 'pushGatewayInterUrl',
      pushGatewayInternalUrl: 'pushGatewayInternalUrl',
      pushGatewayIntraUrl: 'pushGatewayIntraUrl',
      regionId: 'regionId',
      remoteReadInterUrl: 'remoteReadInterUrl',
      remoteReadInternalUrl: 'remoteReadInternalUrl',
      remoteReadIntraUrl: 'remoteReadIntraUrl',
      remoteWriteInterUrl: 'remoteWriteInterUrl',
      remoteWriteInternalUrl: 'remoteWriteInternalUrl',
      remoteWriteIntraUrl: 'remoteWriteIntraUrl',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      status: 'status',
      storageDuration: 'storageDuration',
      storeConfig: 'storeConfig',
      supportAuthTypes: 'supportAuthTypes',
      tags: 'tags',
      userId: 'userId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      archiveDuration: 'number',
      authFreeReadPolicy: 'string',
      authFreeWritePolicy: 'string',
      authToken: 'string',
      createTime: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthFreeWrite: 'boolean',
      enableAuthToken: 'boolean',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      folderUrl: 'string',
      grafanaInstanceId: 'string',
      grafanaInstanceName: 'string',
      httpApiInterUrl: 'string',
      httpApiInternalUrl: 'string',
      httpApiIntraUrl: 'string',
      instanceType: 'string',
      paymentType: 'string',
      paymentTypeUpdateTime: 'string',
      product: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      pushGatewayInterUrl: 'string',
      pushGatewayInternalUrl: 'string',
      pushGatewayIntraUrl: 'string',
      regionId: 'string',
      remoteReadInterUrl: 'string',
      remoteReadInternalUrl: 'string',
      remoteReadIntraUrl: 'string',
      remoteWriteInterUrl: 'string',
      remoteWriteInternalUrl: 'string',
      remoteWriteIntraUrl: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      status: 'string',
      storageDuration: 'number',
      storeConfig: PrometheusInstanceStoreConfig,
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': EnsureSharedPrometheusInstanceResponseBodyPrometheusInstanceTags },
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.storeConfig && typeof (this.storeConfig as any).validate === 'function') {
      (this.storeConfig as any).validate();
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

export class EnsureSharedPrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a new instance is created by this call. The value is false if an existing instance is found.
   * 
   * @example
   * false
   */
  created?: boolean;
  /**
   * @remarks
   * The details of the shared Prometheus instance. The fields are the same as the prometheusInstance field in GetPrometheusInstance.
   */
  prometheusInstance?: EnsureSharedPrometheusInstanceResponseBodyPrometheusInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      prometheusInstance: 'prometheusInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'boolean',
      prometheusInstance: EnsureSharedPrometheusInstanceResponseBodyPrometheusInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.prometheusInstance && typeof (this.prometheusInstance as any).validate === 'function') {
      (this.prometheusInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

