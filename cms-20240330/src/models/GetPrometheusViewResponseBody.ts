// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-north-2-gov-1
   */
  regionId?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 122xxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusInstanceId: 'prometheusInstanceId',
      regionId: 'regionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusViewResponseBodyPrometheusViewTags extends $dara.Model {
  /**
   * @remarks
   * PagerDuty integration key.
   * 
   * @example
   * global_score_series
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * 371293199010092839
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

export class GetPrometheusViewResponseBodyPrometheusView extends $dara.Model {
  /**
   * @remarks
   * Password-free read policy (supports IP segments and VpcId).
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * authToken string.
   * 
   * @example
   * eJxxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * Instance creation time, using UTC+0 time, format is yyyy-MM-ddTHH:mmZ.
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * Whether to enable password-free read.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Whether to enable authToken.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * Observability dashboard URL.
   * 
   * @example
   * https://xxxx
   */
  folderUrl?: string;
  /**
   * @remarks
   * Bound managed Grafana instance ID.
   * 
   * @example
   * g-xxx
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * Bound managed Grafana instance name.
   * 
   * @example
   * gxxx
   */
  grafanaInstanceName?: string;
  /**
   * @remarks
   * Public HTTP address.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * Private HTTP address.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * Instance type, fixed value prom-view.
   * 
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @remarks
   * Payment type. Currently, the fixed value is FREE (free).
   * 
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @remarks
   * Product that the prom instance belongs to.
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * Prometheus instance list.
   */
  prometheusInstances?: GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances[];
  /**
   * @remarks
   * Prometheus view ID.
   * 
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @remarks
   * Prometheus view name.
   * 
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Remote read public URL.
   * 
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * Remote read intranet URL.
   * 
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou-intranet.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Fixed value: PrometheusView
   * 
   * @example
   * RegistryModule
   */
  resourceType?: string;
  /**
   * @remarks
   * Backend data storage status
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  /**
   * @remarks
   * Supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * Instance tag keys.
   */
  tags?: GetPrometheusViewResponseBodyPrometheusViewTags[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 11222
   */
  userId?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * V1
   */
  version?: string;
  /**
   * @remarks
   * Workspace to which the environment belongs
   * 
   * @example
   * cms-monitor-test-aysls-pub-cn-fuzhou-monitor
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      authFreeReadPolicy: 'authFreeReadPolicy',
      authToken: 'authToken',
      createTime: 'createTime',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthToken: 'enableAuthToken',
      folderUrl: 'folderUrl',
      grafanaInstanceId: 'grafanaInstanceId',
      grafanaInstanceName: 'grafanaInstanceName',
      httpApiInterUrl: 'httpApiInterUrl',
      httpApiIntraUrl: 'httpApiIntraUrl',
      instanceType: 'instanceType',
      paymentType: 'paymentType',
      product: 'product',
      prometheusInstances: 'prometheusInstances',
      prometheusViewId: 'prometheusViewId',
      prometheusViewName: 'prometheusViewName',
      regionId: 'regionId',
      remoteReadInterUrl: 'remoteReadInterUrl',
      remoteReadIntraUrl: 'remoteReadIntraUrl',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      status: 'status',
      supportAuthTypes: 'supportAuthTypes',
      tags: 'tags',
      userId: 'userId',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authFreeReadPolicy: 'string',
      authToken: 'string',
      createTime: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthToken: 'boolean',
      folderUrl: 'string',
      grafanaInstanceId: 'string',
      grafanaInstanceName: 'string',
      httpApiInterUrl: 'string',
      httpApiIntraUrl: 'string',
      instanceType: 'string',
      paymentType: 'string',
      product: 'string',
      prometheusInstances: { 'type': 'array', 'itemType': GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances },
      prometheusViewId: 'string',
      prometheusViewName: 'string',
      regionId: 'string',
      remoteReadInterUrl: 'string',
      remoteReadIntraUrl: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      status: 'string',
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetPrometheusViewResponseBodyPrometheusViewTags },
      userId: 'string',
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusInstances)) {
      $dara.Model.validateArray(this.prometheusInstances);
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

export class GetPrometheusViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * View instance.
   */
  prometheusView?: GetPrometheusViewResponseBodyPrometheusView;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusView: 'prometheusView',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusView: GetPrometheusViewResponseBodyPrometheusView,
      requestId: 'string',
    };
  }

  validate() {
    if(this.prometheusView && typeof (this.prometheusView as any).validate === 'function') {
      (this.prometheusView as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

