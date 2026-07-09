// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusInstanceResponseBodyPrometheusInstanceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * openStorage
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The access type. Valid values:
   * - readWrite
   * - readOnly
   * - httpReadOnly
   * 
   * @example
   * readOnly
   */
  accessType?: string;
  /**
   * @remarks
   * The number of days that data is automatically archived after the storage period expires. A value of 0 indicates that data is not archived. A value of 3650 indicates that data is permanently retained.
   * 
   * @example
   * 90
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The authentication-free read policy. IP CIDR blocks and VPC IDs are supported.
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
   * The authentication-free write policy. IP CIDR blocks and VPC IDs are supported.
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
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * The authentication token.
   * 
   * @example
   * eJwixxxxx
   */
  authToken?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in UTC+0 and in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether authentication-free read is enabled.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Indicates whether authentication-free write is enabled.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Indicates whether the authentication token is enabled.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The extended information.
   */
  extraInfo?: { [key: string]: string };
  /**
   * @remarks
   * The dashboard directory URL.
   * 
   * @example
   * https://gnew.console.aliyun.com/dashboards/f/c49a80d2a551d4a20a8c4b996b0be4e52/xxxxxxx
   */
  folderUrl?: string;
  /**
   * @remarks
   * The instance ID of the attached managed Grafana instance.
   * 
   * @example
   * SHARED
   */
  grafanaInstanceId?: string;
  /**
   * @remarks
   * The name of the associated managed Grafana instance.
   * 
   * @example
   * 共享版
   */
  grafanaInstanceName?: string;
  /**
   * @remarks
   * The HTTP public endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  httpApiInterUrl?: string;
  /**
   * @remarks
   * The HTTP internal endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  httpApiInternalUrl?: string;
  /**
   * @remarks
   * The HTTP private endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  httpApiIntraUrl?: string;
  /**
   * @remarks
   * The Prometheus instance type.
   * 
   * @example
   * remote-write
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POSTPAY: pay-as-you-go based on the number of reported metrics.
   * - POSTPAY_GB: pay-as-you-go based on the volume of written metrics.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the billing method of the instance was last modified, in UTC format.
   * 
   * @example
   * 2025-08-10T02:07:53Z
   */
  paymentTypeUpdateTime?: string;
  /**
   * @remarks
   * The product to which the Prometheus instance belongs (arms or cms).
   * 
   * @example
   * cms
   */
  product?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rw-524ada714221af267c73122af2e1
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The PushGateway public endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  pushGatewayInterUrl?: string;
  /**
   * @remarks
   * The PushGateway internal endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  pushGatewayInternalUrl?: string;
  /**
   * @remarks
   * The PushGateway private endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  pushGatewayIntraUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The public read endpoint.
   * 
   * @example
   * http://workspace-default-cms-xxxxxxx
   */
  remoteReadInterUrl?: string;
  /**
   * @remarks
   * The RemoteRead internal endpoint.
   * 
   * @example
   * https://workspace-default-cms-1xxxxxxxxxx
   */
  remoteReadInternalUrl?: string;
  /**
   * @remarks
   * The private read endpoint.
   * 
   * @example
   * https://workspace-default-cms-1xxxxxxxxxx
   */
  remoteReadIntraUrl?: string;
  /**
   * @remarks
   * The public write endpoint.
   * 
   * @example
   * https://workspace-default-cms-xxxxxxxxxx
   */
  remoteWriteInterUrl?: string;
  /**
   * @remarks
   * The RemoteWrite internal endpoint.
   * 
   * @example
   * https://workspace-default-cms-xxxxxxxxxx
   */
  remoteWriteInternalUrl?: string;
  /**
   * @remarks
   * The private write endpoint.
   * 
   * @example
   * https://workspace-default-cms-xxxxxxxxxx
   */
  remoteWriteIntraUrl?: string;
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
   * Fixed value: PrometheusInstance.
   * 
   * @example
   * Prometheus
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage duration, in days.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * The supported authentication types.
   */
  supportAuthTypes?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetPrometheusInstanceResponseBodyPrometheusInstanceTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 170731234567
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
   * The workspace to which the Prometheus instance belongs.
   * 
   * @example
   * ws1
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
  /**
   * @remarks
   * The details of the Prometheus instance.
   */
  prometheusInstance?: GetPrometheusInstanceResponseBodyPrometheusInstance;
  /**
   * @remarks
   * The request ID.
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

