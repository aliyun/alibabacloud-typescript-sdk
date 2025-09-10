// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusInstanceResponseBodyPrometheusInstanceTags extends $dara.Model {
  /**
   * @example
   * openStorage
   */
  key?: string;
  /**
   * @example
   * 130303196111114281
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

export class GetPrometheusInstanceResponseBodyPrometheusInstance extends $dara.Model {
  /**
   * @example
   * readOnly
   */
  accessType?: string;
  /**
   * @example
   * 165
   */
  archiveDuration?: number;
  /**
   * @example
   * 0.0.0.0/0
   */
  authFreeReadPolicy?: string;
  /**
   * @example
   * 0.0.0.0/0
   */
  authFreeWritePolicy?: string;
  /**
   * @example
   * eJwixxxxx
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
  enableAuthFreeWrite?: boolean;
  /**
   * @example
   * true
   */
  enableAuthToken?: boolean;
  extraInfo?: { [key: string]: string };
  /**
   * @example
   * https://gnew.console.aliyun.com/dashboards/f/c49a80d2a551d4a20a8c4b996b0be4e52/xxxxxxx
   */
  folderUrl?: string;
  /**
   * @example
   * SHARED
   */
  grafanaInstanceId?: string;
  grafanaInstanceName?: string;
  /**
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  httpApiInterUrl?: string;
  /**
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * remote-write（Prometheus for Remote Write）
   * 
   * @example
   * e1
   */
  instanceType?: string;
  /**
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @example
   * null
   */
  paymentTypeUpdateTime?: string;
  /**
   * @example
   * NAS
   */
  product?: string;
  /**
   * @example
   * rw-524ada714221af267c73122af2e1
   */
  prometheusInstanceId?: string;
  /**
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  pushGatewayInterUrl?: string;
  /**
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  pushGatewayIntraUrl?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  remoteReadInterUrl?: string;
  /**
   * @example
   * https://workspace-default-cms-1xxxxxxxxxx
   */
  remoteReadIntraUrl?: string;
  /**
   * @example
   * https://workspace-default-cms-xxxxxxxxxx
   */
  remoteWriteInterUrl?: string;
  /**
   * @example
   * https://workspace-default-cms-xxxxxxxxxx
   */
  remoteWriteIntraUrl?: string;
  /**
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @example
   * Prometheus
   */
  resourceType?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 90
   */
  storageDuration?: number;
  supportAuthTypes?: string[];
  tags?: GetPrometheusInstanceResponseBodyPrometheusInstanceTags[];
  /**
   * @example
   * 170731234567
   */
  userId?: string;
  /**
   * @example
   * *
   */
  version?: string;
  /**
   * @example
   * rum-monitor-test-aysls-pub-cn-qingdao-monitor
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
      httpApiIntraUrl: 'httpApiIntraUrl',
      instanceType: 'instanceType',
      paymentType: 'paymentType',
      paymentTypeUpdateTime: 'paymentTypeUpdateTime',
      product: 'product',
      prometheusInstanceId: 'prometheusInstanceId',
      prometheusInstanceName: 'prometheusInstanceName',
      pushGatewayInterUrl: 'pushGatewayInterUrl',
      pushGatewayIntraUrl: 'pushGatewayIntraUrl',
      regionId: 'regionId',
      remoteReadInterUrl: 'remoteReadInterUrl',
      remoteReadIntraUrl: 'remoteReadIntraUrl',
      remoteWriteInterUrl: 'remoteWriteInterUrl',
      remoteWriteIntraUrl: 'remoteWriteIntraUrl',
      resourceGroupId: 'resourceGroupId',
      resourceType: 'resourceType',
      status: 'status',
      storageDuration: 'storageDuration',
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
      httpApiIntraUrl: 'string',
      instanceType: 'string',
      paymentType: 'string',
      paymentTypeUpdateTime: 'string',
      product: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      pushGatewayInterUrl: 'string',
      pushGatewayIntraUrl: 'string',
      regionId: 'string',
      remoteReadInterUrl: 'string',
      remoteReadIntraUrl: 'string',
      remoteWriteInterUrl: 'string',
      remoteWriteIntraUrl: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      status: 'string',
      storageDuration: 'number',
      supportAuthTypes: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetPrometheusInstanceResponseBodyPrometheusInstanceTags },
      userId: 'string',
      version: 'string',
      workspace: 'string',
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
  prometheusInstance?: GetPrometheusInstanceResponseBodyPrometheusInstance;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusInstance: 'prometheusInstance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstance: GetPrometheusInstanceResponseBodyPrometheusInstance,
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

