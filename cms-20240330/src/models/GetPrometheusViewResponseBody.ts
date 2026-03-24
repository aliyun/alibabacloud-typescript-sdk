// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-north-2-gov-1
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
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
   * The integration key for PagerDuty.
   * 
   * @example
   * global_score_series
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The password-free read policy. It supports IP address segments and VPC IDs.
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
   * The authToken string.
   * 
   * @example
   * eJxxxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in UTC and follows the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether password-free read is enabled.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Indicates whether authToken is enabled.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The URL of the observability dashboard.
   * 
   * @example
   * https://xxxx
   */
  folderUrl?: string;
  /**
   * @remarks
   * The ID of the attached managed Grafana instance.
   * 
   * @example
   * g-xxx
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The name of the attached managed Grafana instance.
   * 
   * @example
   * gxxx
   */
  grafanaInstanceName?: string;
  /**
   * @remarks
   * The HTTP API endpoint for the Internet.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * The HTTP API endpoint for the internal network.
   * 
   * @example
   * http://xxxxxxxx
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * The instance type. The value is fixed to prom-view.
   * 
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method. The value is fixed to FREE.
   * 
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @remarks
   * The product to which the Prometheus instance belongs.
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * A list of Prometheus instances.
   */
  prometheusInstances?: GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances[];
  /**
   * @remarks
   * The ID of the Prometheus view.
   * 
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @remarks
   * The name of the Prometheus view.
   * 
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The remote read URL for the Internet.
   * 
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * The remote read URL for the internal network.
   * 
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou-intranet.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The value is fixed to PrometheusView.
   * 
   * @example
   * RegistryModule
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the backend data storage.
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  /**
   * @remarks
   * The supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetPrometheusViewResponseBodyPrometheusViewTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 11222
   */
  userId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * V1
   */
  version?: string;
  /**
   * @remarks
   * The workspace to which the environment belongs.
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
   * The view instance.
   */
  prometheusView?: GetPrometheusViewResponseBodyPrometheusView;
  /**
   * @remarks
   * The ID of the request.
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

