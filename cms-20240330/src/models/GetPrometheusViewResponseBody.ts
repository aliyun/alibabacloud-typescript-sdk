// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances extends $dara.Model {
  /**
   * @example
   * rw-63549e054ff596a4149927961dff
   */
  prometheusInstanceId?: string;
  /**
   * @example
   * cn-north-2-gov-1
   */
  regionId?: string;
  /**
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
   * @example
   * global_score_series
   */
  key?: string;
  /**
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
   * @example
   * 0.0.0.0/0
   */
  authFreeReadPolicy?: string;
  /**
   * @example
   * eJxxxxxx
   */
  authToken?: string;
  /**
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @example
   * https://xxxx
   */
  folderUrl?: string;
  /**
   * @example
   * g-xxx
   */
  grafanaInstanceId?: string;
  /**
   * @example
   * gxxx
   */
  grafanaInstanceName?: string;
  /**
   * @example
   * http://xxxxxxxx
   */
  httpApiInterUrl?: string;
  /**
   * @example
   * http://xxxxxxxx
   */
  httpApiIntraUrl?: string;
  /**
   * @example
   * prom-view
   */
  instanceType?: string;
  /**
   * @example
   * FREE
   */
  paymentType?: string;
  /**
   * @example
   * cms
   */
  product?: string;
  prometheusInstances?: GetPrometheusViewResponseBodyPrometheusViewPrometheusInstances[];
  /**
   * @example
   * view-xxx
   */
  prometheusViewId?: string;
  /**
   * @example
   * view1
   */
  prometheusViewName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadInterUrl?: string;
  /**
   * @example
   * http://workspace-default-cms-xxx-cn-hangzhou.cn-hangzhou-intranet.log.aliyuncs.com/prometheus/workspace-default-cms-xxx-cn-hangzhou/xxx/api/v1/read
   */
  remoteReadIntraUrl?: string;
  /**
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @example
   * RegistryModule
   */
  resourceType?: string;
  /**
   * @example
   * Pending2Running
   */
  status?: string;
  supportAuthTypes?: string[];
  tags?: GetPrometheusViewResponseBodyPrometheusViewTags[];
  /**
   * @example
   * 11222
   */
  userId?: string;
  /**
   * @example
   * V1
   */
  version?: string;
  /**
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

