// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BucketInfo extends $tea.Model {
  bucketAcl?: string;
  bucketName?: string;
  comment?: string;
  createTime?: string;
  dataRedundancyType?: string;
  dispatcherType?: string;
  endpoint?: string;
  ensRegionId?: string;
  modifyTime?: string;
  resourceType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataRedundancyType: 'DataRedundancyType',
      dispatcherType: 'DispatcherType',
      endpoint: 'Endpoint',
      ensRegionId: 'EnsRegionId',
      modifyTime: 'ModifyTime',
      resourceType: 'ResourceType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      createTime: 'string',
      dataRedundancyType: 'string',
      dispatcherType: 'string',
      endpoint: 'string',
      ensRegionId: 'string',
      modifyTime: 'string',
      resourceType: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HealthCheck extends $tea.Model {
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpConfig extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  idleTimeout?: number;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  stickySession?: string;
  stickySessionType?: string;
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      idleTimeout: 'IdleTimeout',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      XForwardedFor: 'XForwardedFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      idleTimeout: 'number',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      XForwardedFor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SecurityGroupRule extends $tea.Model {
  description?: string;
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      priority: 'priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TcpConfig extends $tea.Model {
  establishedTimeout?: number;
  persistenceTimeout?: number;
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      establishedTimeout: 'EstablishedTimeout',
      persistenceTimeout: 'PersistenceTimeout',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      establishedTimeout: 'number',
      persistenceTimeout: 'number',
      scheduler: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdpCheck extends $tea.Model {
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckInterval?: number;
  healthyThreshold?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckInterval: 'HealthCheckInterval',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckInterval: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UdpConfig extends $tea.Model {
  hashKey?: string;
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      hashKey: 'HashKey',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKey: 'string',
      scheduler: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersRequest extends $tea.Model {
  backendServers?: AddBackendServersRequestBackendServers[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: { 'type': 'array', 'itemType': AddBackendServersRequestBackendServers },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersShrinkRequest extends $tea.Model {
  backendServersShrink?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServersShrink: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServersShrink: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBody extends $tea.Model {
  backendServers?: AddBackendServersResponseBodyBackendServers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddBackendServersResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceInternetPortRequest extends $tea.Model {
  ISP?: string;
  instanceId?: string;
  internalIp?: string;
  internalPort?: string;
  natType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ISP: 'ISP',
      instanceId: 'InstanceId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      natType: 'NatType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISP: 'string',
      instanceId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      natType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceInternetPortResponseBody extends $tea.Model {
  requestId?: string;
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceInternetPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDeviceInternetPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDeviceInternetPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceRequest extends $tea.Model {
  autoStart?: boolean;
  instanceId?: string;
  networks?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      instanceId: 'InstanceId',
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      instanceId: 'string',
      networks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddNetworkInterfaceToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddNetworkInterfaceToInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesRequest extends $tea.Model {
  networkInterfaceId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponseBody extends $tea.Model {
  assignedPrivateIpAddressesSet?: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedPrivateIpAddressesSet: 'AssignedPrivateIpAddressesSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedPrivateIpAddressesSet: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssignPrivateIpAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignPrivateIpAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEnsEipAddressRequest extends $tea.Model {
  allocationId?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEnsEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEnsEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateEnsEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateEnsEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDiskRequest extends $tea.Model {
  deleteWithInstance?: string;
  diskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'string',
      diskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDiskResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesRequest extends $tea.Model {
  instanceId?: string;
  scripts?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scripts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachEnsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachEnsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupRequest extends $tea.Model {
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  securityGroupId?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressRequest extends $tea.Model {
  destCidrIp?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  securityGroupId?: string;
  sourcePortRange?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourcePortRange: 'SourcePortRange',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourcePortRange: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeSecurityGroupEgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeSecurityGroupEgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateARMServerInstancesRequest extends $tea.Model {
  amount?: number;
  autoRenew?: boolean;
  ensRegionId?: string;
  frequency?: number;
  imageId?: string;
  instanceType?: string;
  keyPairName?: string;
  payType?: string;
  period?: number;
  periodUnit?: string;
  resolution?: string;
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      ensRegionId: 'EnsRegionId',
      frequency: 'Frequency',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      keyPairName: 'KeyPairName',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resolution: 'Resolution',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      ensRegionId: 'string',
      frequency: 'number',
      imageId: 'string',
      instanceType: 'string',
      keyPairName: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      resolution: 'string',
      serverType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateARMServerInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateARMServerInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateARMServerInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateARMServerInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  template?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassicNetworkRequest extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  ensRegionId?: string;
  networkName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkName: 'NetworkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassicNetworkResponseBody extends $tea.Model {
  networkId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClassicNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClassicNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClassicNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequest extends $tea.Model {
  category?: string;
  ensRegionId?: string;
  instanceChargeType?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ensRegionId: 'EnsRegionId',
      instanceChargeType: 'InstanceChargeType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ensRegionId: 'string',
      instanceChargeType: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskResponseBody extends $tea.Model {
  instanceIds?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEipInstanceRequest extends $tea.Model {
  bandwidth?: number;
  ensRegionId?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  isp?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      ensRegionId: 'EnsRegionId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      isp: 'Isp',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ensRegionId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      isp: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEipInstanceResponseBody extends $tea.Model {
  allocationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEipInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEipInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEipInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsRouteEntryRequest extends $tea.Model {
  description?: string;
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopType?: string;
  routeEntryName?: string;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsRouteEntryResponseBody extends $tea.Model {
  requestId?: string;
  routeEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeEntryId: 'RouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnsRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnsRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceRequest extends $tea.Model {
  ensServiceId?: string;
  orderType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ensServiceId: 'EnsServiceId',
      orderType: 'OrderType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensServiceId: 'string',
      orderType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceRequest extends $tea.Model {
  EPNInstanceName?: string;
  EPNInstanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      networkingModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceResponseBody extends $tea.Model {
  EPNInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryRequest extends $tea.Model {
  externalIp?: string;
  externalPort?: string;
  forwardEntryName?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryName: 'ForwardEntryName',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryName: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryResponseBody extends $tea.Model {
  forwardEntryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateForwardEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateForwardEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  deleteAfterImageUpload?: string;
  imageName?: string;
  instanceId?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAfterImageUpload: 'DeleteAfterImageUpload',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAfterImageUpload: 'string',
      imageName: 'string',
      instanceId: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
  code?: number;
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  dataDisk?: CreateInstanceRequestDataDisk[];
  systemDisk?: CreateInstanceRequestSystemDisk;
  autoRenew?: string;
  autoRenewPeriod?: string;
  ensRegionId?: string;
  hostName?: string;
  imageId?: string;
  instanceName?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipType?: string;
  keyPairName?: string;
  ownerId?: number;
  password?: string;
  passwordInherit?: boolean;
  paymentType?: string;
  period?: string;
  privateIpAddress?: string;
  publicIpIdentification?: boolean;
  quantity?: string;
  uniqueSuffix?: boolean;
  userData?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipType: 'IpType',
      keyPairName: 'KeyPairName',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      paymentType: 'PaymentType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      quantity: 'Quantity',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': CreateInstanceRequestDataDisk },
      systemDisk: CreateInstanceRequestSystemDisk,
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipType: 'string',
      keyPairName: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      paymentType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      quantity: 'string',
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: number;
  instanceIds?: CreateInstanceResponseBodyInstanceIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceIds: CreateInstanceResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequest extends $tea.Model {
  keyPairName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBody extends $tea.Model {
  keyPairFingerPrint?: string;
  keyPairId?: string;
  keyPairName?: string;
  privateKeyBody?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      privateKeyBody: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  ensRegionId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  networkId?: string;
  payType?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      networkId: 'string',
      payType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerName?: string;
  networkId?: string;
  requestId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      networkId: 'NetworkId',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      networkId: 'string',
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerRequest extends $tea.Model {
  description?: string;
  forwardPort?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  requestTimeout?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      forwardPort: 'ForwardPort',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      forwardPort: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerHTTPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerHTTPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerRequest extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  description?: string;
  forwardPort?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  loadBalancerId?: string;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  stickySessionType?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      description: 'Description',
      forwardPort: 'ForwardPort',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      description: 'string',
      forwardPort: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerHTTPSListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerHTTPSListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerHTTPSListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerRequest extends $tea.Model {
  backendServerPort?: number;
  description?: string;
  eipTransmit?: string;
  establishedTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  persistenceTimeout?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      description: 'Description',
      eipTransmit: 'EipTransmit',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      persistenceTimeout: 'PersistenceTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      description: 'string',
      eipTransmit: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      persistenceTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerTCPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerTCPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerTCPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerRequest extends $tea.Model {
  backendServerPort?: number;
  description?: string;
  eipTransmit?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      description: 'Description',
      eipTransmit: 'EipTransmit',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      description: 'string',
      eipTransmit: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerUDPListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoadBalancerUDPListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerUDPListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequest extends $tea.Model {
  ensRegionId?: string;
  name?: string;
  networkId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      networkId: 'NetworkId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      name: 'string',
      networkId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBody extends $tea.Model {
  natGatewayId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNatGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNatGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRequest extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  ensRegionId?: string;
  networkName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkName: 'NetworkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkResponseBody extends $tea.Model {
  networkId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupRequest extends $tea.Model {
  description?: string;
  securityGroupName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityGroupName: 'SecurityGroupName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      securityGroupName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryRequest extends $tea.Model {
  natGatewayId?: string;
  snatEntryName?: string;
  snatIp?: string;
  sourceCIDR?: string;
  sourceVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      sourceCIDR: 'SourceCIDR',
      sourceVSwitchId: 'SourceVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      sourceCIDR: 'string',
      sourceVSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snatEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchRequest extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  ensRegionId?: string;
  networkId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkId: 'NetworkId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponseBody extends $tea.Model {
  requestId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceInternetPortRequest extends $tea.Model {
  instanceId?: string;
  natType?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      natType: 'NatType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      natType: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceInternetPortResponseBody extends $tea.Model {
  requestId?: string;
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceInternetPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDeviceInternetPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeviceInternetPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnsRouteEntryRequest extends $tea.Model {
  routeEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryId: 'RouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnsRouteEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnsRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnsRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnsRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryRequest extends $tea.Model {
  forwardEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteForwardEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteForwardEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $tea.Model {
  keyPairName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayRequest extends $tea.Model {
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNatGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNatGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRequest extends $tea.Model {
  networkId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRequest extends $tea.Model {
  securityGroupId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryRequest extends $tea.Model {
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchRequest extends $tea.Model {
  vSwitchId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationRequest extends $tea.Model {
  appId?: string;
  appVersions?: string;
  level?: string;
  outDetailStatParams?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersions: 'AppVersions',
      level: 'Level',
      outDetailStatParams: 'OutDetailStatParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersions: 'string',
      level: 'string',
      outDetailStatParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResponseBody extends $tea.Model {
  application?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryRequest extends $tea.Model {
  level?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryResponseBody extends $tea.Model {
  applicationResource?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationResource: 'ApplicationResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationResource: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApplicationResourceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationResourceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeAvailableResourceResponseBodyImages;
  requestId?: string;
  supportResources?: DescribeAvailableResourceResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeAvailableResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBody extends $tea.Model {
  images?: DescribeAvailableResourceInfoResponseBodyImages;
  requestId?: string;
  supportResources?: DescribeAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeAvailableResourceInfoResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceInfoResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableResourceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeResponseBody extends $tea.Model {
  bandWithTypeInfo?: string;
  chargeContractType?: string;
  chargeCycleInfo?: string;
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWithTypeInfo: 'BandWithTypeInfo',
      chargeContractType: 'ChargeContractType',
      chargeCycleInfo: 'ChargeCycleInfo',
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWithTypeInfo: 'string',
      chargeContractType: 'string',
      chargeCycleInfo: 'string',
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBandWithdChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBandWithdChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  endTime?: string;
  ensRegionId?: string;
  isp?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      isp: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeResponseBody extends $tea.Model {
  bandwidthValue?: number;
  internetChargeType?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthValue: 'BandwidthValue',
      internetChargeType: 'InternetChargeType',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthValue: 'number',
      internetChargeType: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBandwitdhByInternetChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBandwitdhByInternetChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskAvailableResourceInfoResponseBody extends $tea.Model {
  requestId?: string;
  supportResources?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskAvailableResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudDiskAvailableResourceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudDiskAvailableResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskTypesRequest extends $tea.Model {
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskTypesResponseBody extends $tea.Model {
  requestId?: string;
  supportResources?: DescribeCloudDiskTypesResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeCloudDiskTypesResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudDiskTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudDiskTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultRequest extends $tea.Model {
  instanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseBody extends $tea.Model {
  instanceCreateResult?: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateResult: 'InstanceCreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCreatePrePaidInstanceResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCreatePrePaidInstanceResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultRequest extends $tea.Model {
  appId?: string;
  dataNames?: string;
  dataVersions?: string;
  instanceIds?: string;
  maxDate?: string;
  minDate?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      instanceIds: 'InstanceIds',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      instanceIds: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBody extends $tea.Model {
  distResults?: DescribeDataDistResultResponseBodyDistResults;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distResults: 'DistResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResults: DescribeDataDistResultResponseBodyDistResults,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDataDistResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataDistResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLRequest extends $tea.Model {
  appId?: string;
  dataName?: string;
  dataVersion?: string;
  expireTimeout?: number;
  serverFilterStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataName: 'DataName',
      dataVersion: 'DataVersion',
      expireTimeout: 'ExpireTimeout',
      serverFilterStrategy: 'ServerFilterStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataName: 'string',
      dataVersion: 'string',
      expireTimeout: 'number',
      serverFilterStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeDataDownloadURLResponseBodyData;
  message?: string;
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
      data: DescribeDataDownloadURLResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDataDownloadURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataDownloadURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultRequest extends $tea.Model {
  appId?: string;
  dataNames?: string;
  dataVersions?: string;
  maxDate?: string;
  minDate?: string;
  pageNumber?: number;
  pageSize?: number;
  regionIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pushResults?: DescribeDataPushResultResponseBodyPushResults;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushResults: 'PushResults',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushResults: DescribeDataPushResultResponseBodyPushResults,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDataPushResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataPushResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceRequest extends $tea.Model {
  appId?: string;
  ensRegionId?: string;
  instanceId?: string;
  orderId?: string;
  regionId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      orderId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBody extends $tea.Model {
  appMetaData?: DescribeDeviceServiceResponseBodyAppMetaData;
  appStatus?: DescribeDeviceServiceResponseBodyAppStatus;
  requestId?: string;
  resourceDetailInfos?: DescribeDeviceServiceResponseBodyResourceDetailInfos[];
  resourceInfos?: DescribeDeviceServiceResponseBodyResourceInfos[];
  static names(): { [key: string]: string } {
    return {
      appMetaData: 'AppMetaData',
      appStatus: 'AppStatus',
      requestId: 'RequestId',
      resourceDetailInfos: 'ResourceDetailInfos',
      resourceInfos: 'ResourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appMetaData: DescribeDeviceServiceResponseBodyAppMetaData,
      appStatus: DescribeDeviceServiceResponseBodyAppStatus,
      requestId: 'string',
      resourceDetailInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceDetailInfos },
      resourceInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeviceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeviceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksRequest extends $tea.Model {
  category?: string;
  diskChargeType?: string;
  diskId?: string;
  diskIds?: string;
  diskName?: string;
  diskType?: string;
  ensRegionId?: string;
  ensRegionIds?: string;
  orderByParams?: string;
  pageNumber?: string;
  pageSize?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      diskType: 'DiskType',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskIds: 'string',
      diskName: 'string',
      diskType: 'string',
      ensRegionId: 'string',
      ensRegionIds: 'string',
      orderByParams: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBody extends $tea.Model {
  code?: number;
  disks?: DescribeDisksResponseBodyDisks;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      disks: DescribeDisksResponseBodyDisks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $tea.Model {
  eips?: string;
  ensRegionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      eips: 'Eips',
      ensRegionId: 'EnsRegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eips: 'string',
      ensRegionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBody extends $tea.Model {
  eipAddresses?: DescribeEipAddressesResponseBodyEipAddresses;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEipAddressesResponseBodyEipAddresses,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEipAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEipAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElbAvailableResourceInfoResponseBody extends $tea.Model {
  elbAvailableResourceInfo?: DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elbAvailableResourceInfo: 'ElbAvailableResourceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elbAvailableResourceInfo: { 'type': 'array', 'itemType': DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElbAvailableResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeElbAvailableResourceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElbAvailableResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesRequest extends $tea.Model {
  allocationId?: string;
  associatedInstanceId?: string;
  associatedInstanceType?: string;
  eipAddress?: string;
  ensRegionId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      eipAddress: 'EipAddress',
      ensRegionId: 'EnsRegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      eipAddress: 'string',
      ensRegionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBody extends $tea.Model {
  eipAddresses?: DescribeEnsEipAddressesResponseBodyEipAddresses;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEnsEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsEipAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsEipAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictRequest extends $tea.Model {
  netDistrictCode?: string;
  netLevelCode?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      netDistrictCode: 'NetDistrictCode',
      netLevelCode: 'NetLevelCode',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netLevelCode: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBody extends $tea.Model {
  code?: number;
  ensNetDistricts?: DescribeEnsNetDistrictResponseBodyEnsNetDistricts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetDistricts: DescribeEnsNetDistrictResponseBodyEnsNetDistricts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsNetDistrictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsNetDistrictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBody extends $tea.Model {
  code?: number;
  ensNetLevels?: DescribeEnsNetLevelResponseBodyEnsNetLevels;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetLevels: 'EnsNetLevels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetLevels: DescribeEnsNetLevelResponseBodyEnsNetLevels,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsNetLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsNetLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictRequest extends $tea.Model {
  netDistrictCode?: string;
  netLevelCode?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      netDistrictCode: 'NetDistrictCode',
      netLevelCode: 'NetLevelCode',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDistrictCode: 'string',
      netLevelCode: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBody extends $tea.Model {
  code?: number;
  ensNetDistricts?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetDistricts: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsNetSaleDistrictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsNetSaleDistrictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoRequest extends $tea.Model {
  ensRegionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponseBody extends $tea.Model {
  requestId?: string;
  supportIpv6Info?: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportIpv6Info: 'SupportIpv6Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportIpv6Info: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsRegionIdIpv6InfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsRegionIdIpv6InfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceRequest extends $tea.Model {
  endTime?: string;
  isp?: string;
  orderByParams?: string;
  pageNumber?: number;
  pageSize?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isp: 'Isp',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      isp: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBody extends $tea.Model {
  ensRegionIdResources?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResources: 'EnsRegionIdResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResources: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsRegionIdResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsRegionIdResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsRequest extends $tea.Model {
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBody extends $tea.Model {
  code?: number;
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensRegions: 'EnsRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensRegions: DescribeEnsRegionsResponseBodyEnsRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsResourceUsageRequest extends $tea.Model {
  expiredEndTime?: string;
  expiredStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredEndTime: 'ExpiredEndTime',
      expiredStartTime: 'ExpiredStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredEndTime: 'string',
      expiredStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsResourceUsageResponseBody extends $tea.Model {
  ensResourceUsage?: DescribeEnsResourceUsageResponseBodyEnsResourceUsage[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ensResourceUsage: 'EnsResourceUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensResourceUsage: { 'type': 'array', 'itemType': DescribeEnsResourceUsageResponseBodyEnsResourceUsage },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsResourceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListRequest extends $tea.Model {
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopType?: string;
  pageNumber?: number;
  pageSize?: number;
  routeEntryId?: string;
  routeEntryName?: string;
  routeEntryType?: string;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeEntryType: 'RouteEntryType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeEntryType: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routeEntrys?: DescribeEnsRouteEntryListResponseBodyRouteEntrys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeEntrys: { 'type': 'array', 'itemType': DescribeEnsRouteEntryListResponseBodyRouteEntrys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnsRouteEntryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnsRouteEntryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataRequest extends $tea.Model {
  EPNInstanceId?: string;
  endTime?: string;
  ensRegionId?: string;
  instanceId?: string;
  isp?: string;
  networkingModel?: string;
  period?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      period: 'Period',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      isp: 'string',
      networkingModel: 'string',
      period: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBody extends $tea.Model {
  monitorData?: DescribeEpnBandWidthDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeEpnBandWidthDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEpnBandWidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEpnBandWidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  endTime?: string;
  ensRegionId?: string;
  isp?: string;
  networkingModel?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      isp: 'string',
      networkingModel: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeResponseBody extends $tea.Model {
  bandwidthValue?: number;
  internetChargeType?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthValue: 'BandwidthValue',
      internetChargeType: 'InternetChargeType',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthValue: 'number',
      internetChargeType: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEpnBandwitdhByInternetChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEpnBandwitdhByInternetChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBody extends $tea.Model {
  confVersions?: DescribeEpnInstanceAttributeResponseBodyConfVersions[];
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  instances?: DescribeEpnInstanceAttributeResponseBodyInstances[];
  networkingModel?: string;
  requestId?: string;
  vSwitches?: DescribeEpnInstanceAttributeResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      confVersions: 'ConfVersions',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      instances: 'Instances',
      networkingModel: 'NetworkingModel',
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersions: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyConfVersions },
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      instances: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyInstances },
      networkingModel: 'string',
      requestId: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyVSwitches },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEpnInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEpnInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesRequest extends $tea.Model {
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBody extends $tea.Model {
  EPNInstances?: DescribeEpnInstancesResponseBodyEPNInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstances: 'EPNInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstances: DescribeEpnInstancesResponseBodyEPNInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEpnInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEpnInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataRequest extends $tea.Model {
  endDate?: string;
  startDate?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBody extends $tea.Model {
  measurementDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEpnMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEpnMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoRequest extends $tea.Model {
  imageId?: string;
  imageName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBody extends $tea.Model {
  images?: DescribeExportImageInfoResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeExportImageInfoResponseBodyImages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExportImageInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExportImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusRequest extends $tea.Model {
  imageId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusResponseBody extends $tea.Model {
  imageExportStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageExportStatus: 'ImageExportStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageExportStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExportImageStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExportImageStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesRequest extends $tea.Model {
  externalIp?: string;
  forwardEntryId?: string;
  forwardEntryName?: string;
  internalIp?: string;
  ipProtocol?: string;
  natGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      internalIp: 'InternalIp',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      internalIp: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBody extends $tea.Model {
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      forwardTableEntries: 'ForwardTableEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntries: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntries },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeForwardTableEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeForwardTableEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosRequest extends $tea.Model {
  osType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeImageInfosResponseBodyImages;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImageInfosResponseBodyImages,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionRequest extends $tea.Model {
  aliyunId?: number;
  imageId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'number',
      imageId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBody extends $tea.Model {
  accounts?: DescribeImageSharePermissionResponseBodyAccounts;
  imageId?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeImageSharePermissionResponseBodyAccounts,
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageSharePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageSharePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  ensRegionId?: string;
  imageId?: string;
  imageName?: string;
  pageNumber?: string;
  pageSize?: string;
  status?: string;
  version?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      version: 'Version',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      status: 'string',
      version: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeImagesResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImagesResponseBodyImages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeRequest extends $tea.Model {
  instanceIds?: string;
  ownerId?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBody extends $tea.Model {
  code?: number;
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceRenewAttributes: 'InstanceRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  period?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      period: 'Period',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      period: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBody extends $tea.Model {
  code?: number;
  monitorData?: DescribeInstanceMonitorDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeInstanceMonitorDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBody extends $tea.Model {
  bandwidthLimit?: number;
  code?: number;
  dataDiskMaxSize?: number;
  dataDiskMinSize?: number;
  instanceSpecs?: DescribeInstanceSpecResponseBodyInstanceSpecs;
  requestId?: string;
  systemDiskMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      code: 'Code',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
      systemDiskMaxSize: 'SystemDiskMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      code: 'number',
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      instanceSpecs: DescribeInstanceSpecResponseBodyInstanceSpecs,
      requestId: 'string',
      systemDiskMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBody extends $tea.Model {
  code?: number;
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponseBody extends $tea.Model {
  requestId?: string;
  vncUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncUrl: 'VncUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceVncUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceVncUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  ensRegionId?: string;
  ensRegionIds?: string;
  ensServiceId?: string;
  imageId?: string;
  instanceId?: string;
  instanceIds?: string;
  instanceName?: string;
  instanceResourceType?: string;
  networkId?: string;
  orderByParams?: string;
  pageNumber?: number;
  pageSize?: string;
  searchKey?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      ensServiceId: 'EnsServiceId',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      instanceResourceType: 'InstanceResourceType',
      networkId: 'NetworkId',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: 'string',
      ensServiceId: 'string',
      imageId: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      instanceResourceType: 'string',
      networkId: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      searchKey: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  code?: number;
  instances?: DescribeInstancesResponseBodyInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instances: DescribeInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsRequest extends $tea.Model {
  keyPairName?: string;
  pageNumber?: string;
  pageSize?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBody extends $tea.Model {
  keyPairs?: DescribeKeyPairsResponseBodyKeyPairs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyPairs: 'KeyPairs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairs: DescribeKeyPairsResponseBodyKeyPairs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeRequest extends $tea.Model {
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers[];
  bandwidth?: number;
  createTime?: string;
  endTime?: string;
  ensRegionId?: string;
  listenerPorts?: string[];
  listenerPortsAndProtocols?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols[];
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  loadBalancerStatus?: string;
  networkId?: string;
  payType?: string;
  requestId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocols: 'ListenerPortsAndProtocols',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      networkId: 'NetworkId',
      payType: 'PayType',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      backendServers: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServers },
      bandwidth: 'number',
      createTime: 'string',
      endTime: 'string',
      ensRegionId: 'string',
      listenerPorts: { 'type': 'array', 'itemType': 'string' },
      listenerPortsAndProtocols: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols },
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      networkId: 'string',
      payType: 'string',
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  bandwidth?: number;
  description?: string;
  forwardPort?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  requestId?: string;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  status?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      description: 'Description',
      forwardPort: 'ForwardPort',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      description: 'string',
      forwardPort: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      requestId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerHTTPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  bandwidth?: number;
  description?: string;
  forwardPort?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerForward?: string;
  listenerPort?: number;
  requestId?: string;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  status?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      description: 'Description',
      forwardPort: 'ForwardPort',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      description: 'string',
      forwardPort: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      requestId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerHTTPSListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerSpecRequest extends $tea.Model {
  loadBalancerSpec?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSpec: 'LoadBalancerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerSpecResponseBody extends $tea.Model {
  loadBalancerSpecs?: DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSpecs: 'LoadBalancerSpecs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSpecs: { 'type': 'array', 'itemType': DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  backendServerPort?: number;
  bandwidth?: number;
  description?: string;
  eipTransmit?: string;
  establishedTimeout?: number;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  persistenceTimeout?: number;
  requestId?: string;
  scheduler?: string;
  status?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      eipTransmit: 'EipTransmit',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      persistenceTimeout: 'PersistenceTimeout',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      eipTransmit: 'string',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      persistenceTimeout: 'number',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerTCPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  listenerPort?: number;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  backendServerPort?: number;
  bandwidth?: number;
  description?: string;
  eipTransmit?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  requestId?: string;
  scheduler?: string;
  status?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      eipTransmit: 'EipTransmit',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      eipTransmit: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancerUDPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersRequest extends $tea.Model {
  address?: string;
  ensRegionId?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  networkId?: string;
  pageNumber?: number;
  pageSize?: number;
  serverId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serverId: 'ServerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ensRegionId: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serverId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBody extends $tea.Model {
  loadBalancers?: DescribeLoadBalancersResponseBodyLoadBalancers;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: DescribeLoadBalancersResponseBodyLoadBalancers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataRequest extends $tea.Model {
  endDate?: string;
  startDate?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBody extends $tea.Model {
  measurementDatas?: DescribeMeasurementDataResponseBodyMeasurementDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysRequest extends $tea.Model {
  ensRegionId?: string;
  name?: string;
  natGatewayId?: string;
  networkId?: string;
  pageNumber?: number;
  pageSize?: number;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      name: 'string',
      natGatewayId: 'string',
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBody extends $tea.Model {
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natGateways: 'NatGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateways: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNatGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNatGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeRequest extends $tea.Model {
  networkId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBody extends $tea.Model {
  cidrBlock?: string;
  cloudResources?: DescribeNetworkAttributeResponseBodyCloudResources;
  createdTime?: string;
  description?: string;
  ensRegionId?: string;
  networkId?: string;
  networkName?: string;
  requestId?: string;
  routerTableId?: string;
  status?: string;
  vSwitchIds?: DescribeNetworkAttributeResponseBodyVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      cloudResources: 'CloudResources',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
      requestId: 'RequestId',
      routerTableId: 'RouterTableId',
      status: 'Status',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      cloudResources: DescribeNetworkAttributeResponseBodyCloudResources,
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkId: 'string',
      networkName: 'string',
      requestId: 'string',
      routerTableId: 'string',
      status: 'string',
      vSwitchIds: DescribeNetworkAttributeResponseBodyVSwitchIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNetworkAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworkAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesRequest extends $tea.Model {
  ensRegionId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  primaryIpAddress?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      primaryIpAddress: 'PrimaryIpAddress',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      primaryIpAddress: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBody extends $tea.Model {
  networkInterfaceSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNetworkInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworkInterfacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksRequest extends $tea.Model {
  ensRegionId?: string;
  networkId?: string;
  networkName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      networkId: 'string',
      networkName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBody extends $tea.Model {
  networks?: DescribeNetworksResponseBodyNetworks;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networks: 'Networks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networks: DescribeNetworksResponseBodyNetworks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNetworksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockRequest extends $tea.Model {
  dataDiskSize?: number;
  ensRegionId?: string;
  instanceSpec?: string;
  systemDiskSize?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      ensRegionId: 'string',
      instanceSpec: 'string',
      systemDiskSize: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockResponseBody extends $tea.Model {
  avaliableCount?: number;
  cores?: number;
  dataDiskSize?: number;
  ensRegionId?: string;
  instanceSpec?: string;
  memory?: number;
  requestId?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      avaliableCount: 'AvaliableCount',
      cores: 'Cores',
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      memory: 'Memory',
      requestId: 'RequestId',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableCount: 'number',
      cores: 'number',
      dataDiskSize: 'number',
      ensRegionId: 'string',
      instanceSpec: 'string',
      memory: 'number',
      requestId: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePrePaidInstanceStockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePrePaidInstanceStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  dataDisk?: DescribePriceRequestDataDisk[];
  systemDisk?: DescribePriceRequestSystemDisk;
  dataDisks?: DescribePriceRequestDataDisks[];
  ensRegionId?: string;
  instanceType?: string;
  internetChargeType?: string;
  period?: number;
  periodUnit?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      dataDisks: 'DataDisks',
      ensRegionId: 'EnsRegionId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      systemDisk: DescribePriceRequestSystemDisk,
      dataDisks: { 'type': 'array', 'itemType': DescribePriceRequestDataDisks },
      ensRegionId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceShrinkRequest extends $tea.Model {
  dataDisk?: DescribePriceShrinkRequestDataDisk[];
  systemDisk?: DescribePriceShrinkRequestSystemDisk;
  dataDisksShrink?: string;
  ensRegionId?: string;
  instanceType?: string;
  internetChargeType?: string;
  period?: number;
  periodUnit?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      dataDisksShrink: 'DataDisks',
      ensRegionId: 'EnsRegionId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribePriceShrinkRequestDataDisk },
      systemDisk: DescribePriceShrinkRequestSystemDisk,
      dataDisksShrink: 'string',
      ensRegionId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionIspsRequest extends $tea.Model {
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionIspsResponseBody extends $tea.Model {
  isps?: DescribeRegionIspsResponseBodyIsps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeRegionIspsResponseBodyIsps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionIspsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionIspsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionIspsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeReservedResourceResponseBodyImages;
  requestId?: string;
  supportResources?: DescribeReservedResourceResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeReservedResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeReservedResourceResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeReservedResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeReservedResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeRequest extends $tea.Model {
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBody extends $tea.Model {
  description?: string;
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  requestId?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      permissions: 'Permissions',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  securityGroupId?: string;
  securityGroupName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityGroups: DescribeSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleRequest extends $tea.Model {
  appId?: string;
  podConfigName?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      podConfigName: 'PodConfigName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      podConfigName: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBody extends $tea.Model {
  index?: number;
  instanceId?: string;
  instanceIp?: string;
  instancePort?: number;
  podAbstractInfo?: DescribeServcieScheduleResponseBodyPodAbstractInfo;
  requestId?: string;
  requestRepeated?: boolean;
  tcpPorts?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      podAbstractInfo: 'PodAbstractInfo',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      podAbstractInfo: DescribeServcieScheduleResponseBodyPodAbstractInfo,
      requestId: 'string',
      requestRepeated: 'boolean',
      tcpPorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeServcieScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServcieScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesRequest extends $tea.Model {
  natGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  snatEntryId?: string;
  snatEntryName?: string;
  snatIp?: string;
  sourceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      sourceCIDR: 'SourceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      sourceCIDR: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatTableEntries: 'SnatTableEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatTableEntries: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntries },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSnatTableEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSnatTableEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataRequest extends $tea.Model {
  endTime?: string;
  ensRegionId?: string;
  instanceId?: string;
  isp?: string;
  period?: string;
  startTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      isp: 'Isp',
      period: 'Period',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      isp: 'string',
      period: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBody extends $tea.Model {
  code?: number;
  monitorData?: DescribeUserBandWidthDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeUserBandWidthDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserBandWidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserBandWidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  ensRegionId?: string;
  networkId?: string;
  orderByParams?: string;
  pageNumber?: number;
  pageSize?: number;
  vSwitchId?: string;
  vSwitchName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      networkId: 'NetworkId',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      networkId: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchId: 'string',
      vSwitchName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDiskRequest extends $tea.Model {
  diskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDiskResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataRequest extends $tea.Model {
  appId?: string;
  data?: string;
  distStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      distStrategy: 'DistStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      distStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBody extends $tea.Model {
  distInstanceIds?: DistApplicationDataResponseBodyDistInstanceIds;
  distInstanceTotalCount?: number;
  distResults?: DistApplicationDataResponseBodyDistResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      distInstanceIds: 'DistInstanceIds',
      distInstanceTotalCount: 'DistInstanceTotalCount',
      distResults: 'DistResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceIds: DistApplicationDataResponseBodyDistInstanceIds,
      distInstanceTotalCount: 'number',
      distResults: DistApplicationDataResponseBodyDistResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DistApplicationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DistApplicationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataRequest extends $tea.Model {
  endDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataResponseBody extends $tea.Model {
  filePath?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportBillDetailDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportBillDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageRequest extends $tea.Model {
  imageId?: string;
  OSSBucket?: string;
  OSSPrefix?: string;
  OSSRegionId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSPrefix: 'OSSPrefix',
      OSSRegionId: 'OSSRegionId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      OSSBucket: 'string',
      OSSPrefix: 'string',
      OSSRegionId: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponseBody extends $tea.Model {
  exportedImageURL?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedImageURL: 'ExportedImageURL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedImageURL: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataRequest extends $tea.Model {
  endDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataResponseBody extends $tea.Model {
  filePath?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInternetPortRequest extends $tea.Model {
  instanceId?: string;
  natType?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      natType: 'NatType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      natType: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInternetPortResponseBody extends $tea.Model {
  instanceId?: string;
  networkInfo?: GetDeviceInternetPortResponseBodyNetworkInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkInfo: 'NetworkInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkInfo: { 'type': 'array', 'itemType': GetDeviceInternetPortResponseBodyNetworkInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInternetPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeviceInternetPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceInternetPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $tea.Model {
  keyPairName?: string;
  publicKeyBody?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      publicKeyBody: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $tea.Model {
  keyPairFingerPrint?: string;
  keyPairName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  instanceInfos?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JoinPublicIpsToEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JoinPublicIpsToEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupRequest extends $tea.Model {
  instanceId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JoinSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JoinSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  vSwitchesInfo?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JoinVSwitchesToEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JoinVSwitchesToEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupRequest extends $tea.Model {
  instanceId?: string;
  securityGroupId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityGroupId: 'SecurityGroupId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityGroupId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LeaveSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LeaveSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  appVersions?: string;
  clusterNames?: string;
  level?: string;
  maxDate?: string;
  minDate?: string;
  outAppInfoParams?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'AppVersions',
      clusterNames: 'ClusterNames',
      level: 'Level',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      outAppInfoParams: 'OutAppInfoParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: 'string',
      clusterNames: 'string',
      level: 'string',
      maxDate: 'string',
      minDate: 'string',
      outAppInfoParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEnsEipAddressAttributeRequest extends $tea.Model {
  allocationId?: string;
  bandwidth?: number;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEnsEipAddressAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEnsEipAddressAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyEnsEipAddressAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEnsEipAddressAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  internetMaxBandwidthOut?: number;
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      internetMaxBandwidthOut: 'number',
      networkingModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  imageId?: string;
  imageName?: string;
  version?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      version: 'Version',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      version: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyImageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionRequest extends $tea.Model {
  addAccounts?: string;
  imageId?: string;
  removeAccounts?: string;
  static names(): { [key: string]: string } {
    return {
      addAccounts: 'AddAccounts',
      imageId: 'ImageId',
      removeAccounts: 'RemoveAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccounts: 'string',
      imageId: 'string',
      removeAccounts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyImageSharePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImageSharePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  password?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      password: 'Password',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      password: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewAttributeRequest extends $tea.Model {
  autoRenew?: string;
  duration?: string;
  instanceIds?: string;
  ownerId?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      duration: 'Duration',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      duration: 'string',
      instanceIds: 'string',
      ownerId: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewAttributeResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerAttributeRequest extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerName?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoadBalancerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkAttributeRequest extends $tea.Model {
  description?: string;
  networkId?: string;
  networkName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkId: 'string',
      networkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNetworkAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyNetworkAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequest extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPrepayInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPrepayInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeRequest extends $tea.Model {
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySecurityGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecurityGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeRequest extends $tea.Model {
  description?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVSwitchAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVSwitchAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceRequest extends $tea.Model {
  bandwidthType?: string;
  buyResourcesDetail?: string;
  dataDiskSize?: string;
  ensServiceName?: string;
  imageId?: string;
  instanceBandwithdLimit?: string;
  instanceSpec?: string;
  keyPairName?: string;
  netLevel?: string;
  password?: string;
  schedulingPriceStrategy?: string;
  schedulingStrategy?: string;
  systemDiskSize?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
      buyResourcesDetail: 'BuyResourcesDetail',
      dataDiskSize: 'DataDiskSize',
      ensServiceName: 'EnsServiceName',
      imageId: 'ImageId',
      instanceBandwithdLimit: 'InstanceBandwithdLimit',
      instanceSpec: 'InstanceSpec',
      keyPairName: 'KeyPairName',
      netLevel: 'NetLevel',
      password: 'Password',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      schedulingStrategy: 'SchedulingStrategy',
      systemDiskSize: 'SystemDiskSize',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: 'string',
      buyResourcesDetail: 'string',
      dataDiskSize: 'string',
      ensServiceName: 'string',
      imageId: 'string',
      instanceBandwithdLimit: 'string',
      instanceSpec: 'string',
      keyPairName: 'string',
      netLevel: 'string',
      password: 'string',
      schedulingPriceStrategy: 'string',
      schedulingStrategy: 'string',
      systemDiskSize: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceResponseBody extends $tea.Model {
  buyResourcesDetail?: string;
  code?: number;
  ensServiceId?: string;
  netLevel?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buyResourcesDetail: 'BuyResourcesDetail',
      code: 'Code',
      ensServiceId: 'EnsServiceId',
      netLevel: 'NetLevel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResourcesDetail: 'string',
      code: 'number',
      ensServiceId: 'string',
      netLevel: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreCreateEnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreCreateEnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataRequest extends $tea.Model {
  appId?: string;
  data?: string;
  pushStrategy?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      pushStrategy: 'PushStrategy',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      pushStrategy: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBody extends $tea.Model {
  pushResults?: PushApplicationDataResponseBodyPushResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushResults: 'PushResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResults: PushApplicationDataResponseBodyPushResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushApplicationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushApplicationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskRequest extends $tea.Model {
  diskId?: string;
  imageId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      imageId: 'ImageId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      imageId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReInitDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReInitDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceRequest extends $tea.Model {
  forceStop?: string;
  instanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStop: 'string',
      instanceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebootInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseARMServerInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseARMServerInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseARMServerInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseARMServerInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseARMServerInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceRequest extends $tea.Model {
  instanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleasePostPaidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePostPaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleasePrePaidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePrePaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersRequest extends $tea.Model {
  backendServers?: RemoveBackendServersRequestBackendServers[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: { 'type': 'array', 'itemType': RemoveBackendServersRequestBackendServers },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersShrinkRequest extends $tea.Model {
  backendServersShrink?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServersShrink: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServersShrink: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBody extends $tea.Model {
  backendServers?: RemoveBackendServersResponseBodyBackendServers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: RemoveBackendServersResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  instanceInfos?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemovePublicIpsFromEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePublicIpsFromEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  vSwitchesInfo?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveVSwitchesFromEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveVSwitchesFromEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewARMServerInstanceRequest extends $tea.Model {
  instanceId?: string;
  period?: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewARMServerInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewARMServerInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewARMServerInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewARMServerInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  instanceId?: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationRequest extends $tea.Model {
  appId?: string;
  rescaleLevel?: string;
  rescaleType?: string;
  resourceSelector?: string;
  timeout?: number;
  toAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rescaleLevel: 'RescaleLevel',
      rescaleType: 'RescaleType',
      resourceSelector: 'ResourceSelector',
      timeout: 'Timeout',
      toAppVersion: 'ToAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rescaleLevel: 'string',
      rescaleType: 'string',
      resourceSelector: 'string',
      timeout: 'number',
      toAppVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RescaleApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RescaleApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleDeviceServiceRequest extends $tea.Model {
  appId?: string;
  imageId?: string;
  ipType?: number;
  rescaleLevel?: string;
  rescaleType?: string;
  resourceInfo?: string;
  resourceSelector?: string;
  resourceSpec?: string;
  serviceId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageId: 'ImageId',
      ipType: 'IpType',
      rescaleLevel: 'RescaleLevel',
      rescaleType: 'RescaleType',
      resourceInfo: 'ResourceInfo',
      resourceSelector: 'ResourceSelector',
      resourceSpec: 'ResourceSpec',
      serviceId: 'ServiceId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageId: 'string',
      ipType: 'number',
      rescaleLevel: 'string',
      rescaleType: 'string',
      resourceInfo: 'string',
      resourceSelector: 'string',
      resourceSpec: 'string',
      serviceId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleDeviceServiceResponseBody extends $tea.Model {
  deviceIds?: string[];
  orderId?: string;
  requestId?: string;
  resourceDetailInfos?: RescaleDeviceServiceResponseBodyResourceDetailInfos[];
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceDetailInfos: 'ResourceDetailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
      resourceDetailInfos: { 'type': 'array', 'itemType': RescaleDeviceServiceResponseBodyResourceDetailInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleDeviceServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RescaleDeviceServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RescaleDeviceServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceInstanceRequest extends $tea.Model {
  appId?: string;
  imageId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDeviceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetDeviceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDeviceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDeviceInstanceRequest extends $tea.Model {
  appId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDeviceInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDeviceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartDeviceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartDeviceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupRequest extends $tea.Model {
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  securityGroupId?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressRequest extends $tea.Model {
  destCidrIp?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  securityGroupId?: string;
  sourcePortRange?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourcePortRange: 'SourcePortRange',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourcePortRange: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeSecurityGroupEgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeSecurityGroupEgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  fromAppVersion?: string;
  timeout?: number;
  toAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fromAppVersion: 'FromAppVersion',
      timeout: 'Timeout',
      toAppVersion: 'ToAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fromAppVersion: 'string',
      timeout: 'number',
      toAppVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequest extends $tea.Model {
  amount?: number;
  autoRenew?: boolean;
  carrier?: string;
  dataDisk?: RunInstancesRequestDataDisk[];
  ensRegionId?: string;
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceName?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPairName?: string;
  netDistrictCode?: string;
  netWorkId?: string;
  password?: string;
  period?: number;
  periodUnit?: string;
  privateIpAddress?: string;
  publicIpIdentification?: boolean;
  scheduleAreaLevel?: string;
  schedulingPriceStrategy?: string;
  schedulingStrategy?: string;
  securityId?: string;
  systemDisk?: RunInstancesRequestSystemDisk;
  uniqueSuffix?: boolean;
  userData?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      carrier: 'Carrier',
      dataDisk: 'DataDisk',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      keyPairName: 'KeyPairName',
      netDistrictCode: 'NetDistrictCode',
      netWorkId: 'NetWorkId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      scheduleAreaLevel: 'ScheduleAreaLevel',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      schedulingStrategy: 'SchedulingStrategy',
      securityId: 'SecurityId',
      systemDisk: 'SystemDisk',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      carrier: 'string',
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPairName: 'string',
      netDistrictCode: 'string',
      netWorkId: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      scheduleAreaLevel: 'string',
      schedulingPriceStrategy: 'string',
      schedulingStrategy: 'string',
      securityId: 'string',
      systemDisk: RunInstancesRequestSystemDisk,
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesShrinkRequest extends $tea.Model {
  amount?: number;
  autoRenew?: boolean;
  carrier?: string;
  dataDiskShrink?: string;
  ensRegionId?: string;
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceName?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  keyPairName?: string;
  netDistrictCode?: string;
  netWorkId?: string;
  password?: string;
  period?: number;
  periodUnit?: string;
  privateIpAddress?: string;
  publicIpIdentification?: boolean;
  scheduleAreaLevel?: string;
  schedulingPriceStrategy?: string;
  schedulingStrategy?: string;
  securityId?: string;
  systemDiskShrink?: string;
  uniqueSuffix?: boolean;
  userData?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      carrier: 'Carrier',
      dataDiskShrink: 'DataDisk',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      keyPairName: 'KeyPairName',
      netDistrictCode: 'NetDistrictCode',
      netWorkId: 'NetWorkId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      scheduleAreaLevel: 'ScheduleAreaLevel',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      schedulingStrategy: 'SchedulingStrategy',
      securityId: 'SecurityId',
      systemDiskShrink: 'SystemDisk',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      carrier: 'string',
      dataDiskShrink: 'string',
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      keyPairName: 'string',
      netDistrictCode: 'string',
      netWorkId: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      scheduleAreaLevel: 'string',
      schedulingPriceStrategy: 'string',
      schedulingStrategy: 'string',
      securityId: 'string',
      systemDiskShrink: 'string',
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleRequest extends $tea.Model {
  appId?: string;
  clientIp?: string;
  directorys?: string;
  podConfigName?: string;
  preLockedTimeout?: number;
  scheduleStrategy?: string;
  serviceAction?: string;
  serviceCommands?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientIp: 'ClientIp',
      directorys: 'Directorys',
      podConfigName: 'PodConfigName',
      preLockedTimeout: 'PreLockedTimeout',
      scheduleStrategy: 'ScheduleStrategy',
      serviceAction: 'ServiceAction',
      serviceCommands: 'ServiceCommands',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientIp: 'string',
      directorys: 'string',
      podConfigName: 'string',
      preLockedTimeout: 'number',
      scheduleStrategy: 'string',
      serviceAction: 'string',
      serviceCommands: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBody extends $tea.Model {
  commandResults?: RunServiceScheduleResponseBodyCommandResults;
  index?: number;
  instanceId?: string;
  instanceIp?: string;
  instancePort?: number;
  requestId?: string;
  requestRepeated?: string;
  tcpPorts?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandResults: 'CommandResults',
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResults: RunServiceScheduleResponseBodyCommandResults,
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      requestId: 'string',
      requestRepeated: 'string',
      tcpPorts: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunServiceScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunServiceScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersRequest extends $tea.Model {
  backendServers?: SetBackendServersRequestBackendServers[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: { 'type': 'array', 'itemType': SetBackendServersRequestBackendServers },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersShrinkRequest extends $tea.Model {
  backendServersShrink?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServersShrink: 'BackendServers',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServersShrink: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBody extends $tea.Model {
  backendServers?: SetBackendServersResponseBodyBackendServers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: SetBackendServersResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetBackendServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetBackendServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeRequest extends $tea.Model {
  description?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  requestTimeout?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetLoadBalancerHTTPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetLoadBalancerHTTPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeRequest extends $tea.Model {
  description?: string;
  healthCheck?: string;
  healthCheckConnectPort?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckMethod?: string;
  healthCheckTimeout?: number;
  healthCheckURI?: string;
  healthyThreshold?: number;
  idleTimeout?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  requestTimeout?: number;
  scheduler?: string;
  serverCertificateId?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerHTTPSListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetLoadBalancerHTTPSListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetLoadBalancerHTTPSListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusRequest extends $tea.Model {
  loadBalancerId?: string;
  loadBalancerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetLoadBalancerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetLoadBalancerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeRequest extends $tea.Model {
  description?: string;
  eipTransmit?: string;
  establishedTimeout?: number;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckDomain?: string;
  healthCheckHttpCode?: string;
  healthCheckInterval?: number;
  healthCheckType?: string;
  healthCheckURI?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  persistenceTimeout?: number;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eipTransmit: 'EipTransmit',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      persistenceTimeout: 'PersistenceTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eipTransmit: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      persistenceTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerTCPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetLoadBalancerTCPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetLoadBalancerTCPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeRequest extends $tea.Model {
  description?: string;
  eipTransmit?: string;
  healthCheckConnectPort?: number;
  healthCheckConnectTimeout?: number;
  healthCheckExp?: string;
  healthCheckInterval?: number;
  healthCheckReq?: string;
  healthyThreshold?: number;
  listenerPort?: number;
  loadBalancerId?: string;
  scheduler?: string;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eipTransmit: 'EipTransmit',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eipTransmit: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      scheduler: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoadBalancerUDPListenerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetLoadBalancerUDPListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetLoadBalancerUDPListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  instanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  forceStop?: string;
  instanceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStop: 'string',
      instanceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerRequest extends $tea.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoadBalancerListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopLoadBalancerListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopLoadBalancerListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateEnsEipAddressRequest extends $tea.Model {
  allocationId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateEnsEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateEnsEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnAssociateEnsEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnAssociateEnsEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignPrivateIpAddressesRequest extends $tea.Model {
  networkInterfaceId?: string;
  privateIpAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignPrivateIpAddressesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignPrivateIpAddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnassignPrivateIpAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnassignPrivateIpAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationRequest extends $tea.Model {
  appId?: string;
  template?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersRequestBackendServers extends $tea.Model {
  ip?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  ip?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: AddBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet extends $tea.Model {
  networkInterfaceId?: string;
  privateIpSet?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      privateIpSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestDataDisk extends $tea.Model {
  size?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestSystemDisk extends $tea.Model {
  size?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyImagesImage extends $tea.Model {
  imageId?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyImages extends $tea.Model {
  image?: DescribeAvailableResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportResourcesSupportResource extends $tea.Model {
  dataDiskSize?: string;
  ensRegionId?: string;
  instanceSpec?: string;
  supportResourcesCount?: string;
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'string',
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeAvailableResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodyImagesImage extends $tea.Model {
  imageId?: string;
  imageName?: string;
  imageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodyImages extends $tea.Model {
  image?: DescribeAvailableResourceInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes extends $tea.Model {
  bandwidthType?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds extends $tea.Model {
  ensRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId extends $tea.Model {
  area?: string;
  enName?: string;
  ensRegionId?: string;
  name?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      name: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends extends $tea.Model {
  ensRegionId?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces extends $tea.Model {
  instanceSpec?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource extends $tea.Model {
  bandwidthTypes?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes;
  dataDiskMaxSize?: number;
  dataDiskMinSize?: number;
  ensRegionIds?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds;
  ensRegionIdsExtends?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends;
  instanceSpeces?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces;
  systemDiskMaxSize?: number;
  systemDiskMinSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthTypes: 'BandwidthTypes',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      ensRegionIds: 'EnsRegionIds',
      ensRegionIdsExtends: 'EnsRegionIdsExtends',
      instanceSpeces: 'InstanceSpeces',
      systemDiskMaxSize: 'SystemDiskMaxSize',
      systemDiskMinSize: 'SystemDiskMinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthTypes: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceBandwidthTypes,
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      ensRegionIds: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIds,
      ensRegionIdsExtends: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends,
      instanceSpeces: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceInstanceSpeces,
      systemDiskMaxSize: 'number',
      systemDiskMinSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceInfoResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource extends $tea.Model {
  canBuyCount?: number;
  category?: string;
  defaultDiskSize?: number;
  diskMaxSize?: number;
  diskMinSize?: number;
  ensRegionId?: string;
  ensRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      canBuyCount: 'CanBuyCount',
      category: 'Category',
      defaultDiskSize: 'DefaultDiskSize',
      diskMaxSize: 'DiskMaxSize',
      diskMinSize: 'DiskMinSize',
      ensRegionId: 'EnsRegionId',
      ensRegionName: 'EnsRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBuyCount: 'number',
      category: 'string',
      defaultDiskSize: 'number',
      diskMaxSize: 'number',
      diskMinSize: 'number',
      ensRegionId: 'string',
      ensRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskTypesResponseBodySupportResourcesSupportResource extends $tea.Model {
  category?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskTypesResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeCloudDiskTypesResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeCloudDiskTypesResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult extends $tea.Model {
  instanceCreateStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateStatus: 'InstanceCreateStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance extends $tea.Model {
  instanceId?: string;
  startTime?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances extends $tea.Model {
  instance?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat extends $tea.Model {
  instanceCount?: string;
  instances?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'string',
      instances: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats extends $tea.Model {
  statusStat?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResult extends $tea.Model {
  name?: string;
  statusStats?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStats: 'StatusStats',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStats: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResults extends $tea.Model {
  distResult?: DescribeDataDistResultResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLResponseBodyDataServerList extends $tea.Model {
  host?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLResponseBodyData extends $tea.Model {
  expireTime?: string;
  serverList?: DescribeDataDownloadURLResponseBodyDataServerList[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      serverList: 'ServerList',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      serverList: { 'type': 'array', 'itemType': DescribeDataDownloadURLResponseBodyDataServerList },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId extends $tea.Model {
  regionId?: string;
  startTime?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds extends $tea.Model {
  regionId?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat extends $tea.Model {
  regionIdCount?: number;
  regionIds?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionIdCount: 'RegionIdCount',
      regionIds: 'RegionIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdCount: 'number',
      regionIds: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS extends $tea.Model {
  statusStat?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResult extends $tea.Model {
  name?: string;
  statusStatS?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStatS: 'StatusStatS',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStatS: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResults extends $tea.Model {
  pushResult?: DescribeDataPushResultResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyAppMetaData extends $tea.Model {
  appId?: string;
  appName?: string;
  appStableVersion?: string;
  appType?: string;
  clusterName?: string;
  createTime?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStableVersion: 'AppStableVersion',
      appType: 'AppType',
      clusterName: 'ClusterName',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStableVersion: 'string',
      appType: 'string',
      clusterName: 'string',
      createTime: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyAppStatus extends $tea.Model {
  phase?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceDetailInfos extends $tea.Model {
  deviceName?: string;
  ID?: string;
  IP?: string;
  ISP?: string;
  imageID?: string;
  mac?: string;
  regionID?: string;
  server?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      ID: 'ID',
      IP: 'IP',
      ISP: 'ISP',
      imageID: 'ImageID',
      mac: 'Mac',
      regionID: 'RegionID',
      server: 'Server',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      ID: 'string',
      IP: 'string',
      ISP: 'string',
      imageID: 'string',
      mac: 'string',
      regionID: 'string',
      server: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork extends $tea.Model {
  containerPorts?: string;
  externalIp?: string;
  hostPorts?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      containerPorts: 'ContainerPorts',
      externalIp: 'ExternalIp',
      hostPorts: 'HostPorts',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerPorts: 'string',
      externalIp: 'string',
      hostPorts: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos extends $tea.Model {
  name?: string;
  network?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      network: 'Network',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      network: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosInternalIps extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfosPublicIps extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceServiceResponseBodyResourceInfos extends $tea.Model {
  appVersion?: string;
  areaCode?: string;
  areaName?: string;
  createTime?: string;
  deviceInfos?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos[];
  instanceId?: string;
  instanceStatus?: string;
  internalIps?: DescribeDeviceServiceResponseBodyResourceInfosInternalIps[];
  publicIps?: DescribeDeviceServiceResponseBodyResourceInfosPublicIps[];
  regionCode?: string;
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      areaCode: 'AreaCode',
      areaName: 'AreaName',
      createTime: 'CreateTime',
      deviceInfos: 'DeviceInfos',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internalIps: 'InternalIps',
      publicIps: 'PublicIps',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      areaCode: 'string',
      areaName: 'string',
      createTime: 'string',
      deviceInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos },
      instanceId: 'string',
      instanceStatus: 'string',
      internalIps: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosInternalIps },
      publicIps: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosPublicIps },
      regionCode: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDisks extends $tea.Model {
  category?: string;
  creationTime?: string;
  diskChargeType?: string;
  diskId?: string;
  diskName?: string;
  ensRegionId?: string;
  instanceId?: string;
  instanceName?: string;
  portable?: boolean;
  size?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      portable: 'Portable',
      size: 'Size',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      portable: 'boolean',
      size: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisks extends $tea.Model {
  disks?: DescribeDisksResponseBodyDisksDisks[];
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddress extends $tea.Model {
  eip?: string;
  instanceIdInternetIp?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddresses extends $tea.Model {
  eipAddress?: DescribeEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo extends $tea.Model {
  area?: string;
  canBuyCount?: string;
  enName?: string;
  ensRegionId?: string;
  loadBalancerSpec?: string[];
  name?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      canBuyCount: 'CanBuyCount',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      loadBalancerSpec: 'LoadBalancerSpec',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      canBuyCount: 'string',
      enName: 'string',
      ensRegionId: 'string',
      loadBalancerSpec: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress extends $tea.Model {
  allocationId?: string;
  allocationTime?: string;
  bandwidth?: number;
  chargeType?: string;
  description?: string;
  ensRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  isp?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      isp: 'Isp',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'number',
      chargeType: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      isp: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsEipAddressesResponseBodyEipAddresses extends $tea.Model {
  eipAddress?: DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEnsEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  ensRegionIdCount?: string;
  netDistrictCode?: string;
  netDistrictEnName?: string;
  netDistrictFatherCode?: string;
  netDistrictLevel?: string;
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      netDistrictCode: 'NetDistrictCode',
      netDistrictEnName: 'NetDistrictEnName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictName: 'NetDistrictName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdCount: 'string',
      netDistrictCode: 'string',
      netDistrictEnName: 'string',
      netDistrictFatherCode: 'string',
      netDistrictLevel: 'string',
      netDistrictName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBodyEnsNetDistricts extends $tea.Model {
  ensNetDistrict?: DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel extends $tea.Model {
  ensNetLevelCode?: string;
  static names(): { [key: string]: string } {
    return {
      ensNetLevelCode: 'EnsNetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevelCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBodyEnsNetLevels extends $tea.Model {
  ensNetLevel?: DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel[];
  static names(): { [key: string]: string } {
    return {
      ensNetLevel: 'EnsNetLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevel: { 'type': 'array', 'itemType': DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  ensRegionIdCount?: string;
  instanceCount?: string;
  netDistrictCode?: string;
  netDistrictEnName?: string;
  netDistrictFatherCode?: string;
  netDistrictLevel?: string;
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      instanceCount: 'InstanceCount',
      netDistrictCode: 'NetDistrictCode',
      netDistrictEnName: 'NetDistrictEnName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictName: 'NetDistrictName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdCount: 'string',
      instanceCount: 'string',
      netDistrictCode: 'string',
      netDistrictEnName: 'string',
      netDistrictFatherCode: 'string',
      netDistrictLevel: 'string',
      netDistrictName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts extends $tea.Model {
  ensNetDistrict?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info extends $tea.Model {
  ensRegionId?: string;
  supportIpv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      supportIpv6: 'SupportIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      supportIpv6: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource extends $tea.Model {
  area?: string;
  areaCode?: string;
  bizDate?: string;
  ensRegionId?: string;
  ensRegionIdName?: string;
  instanceCount?: number;
  internetBandwidth?: number;
  isp?: string;
  VCpu?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      areaCode: 'AreaCode',
      bizDate: 'BizDate',
      ensRegionId: 'EnsRegionId',
      ensRegionIdName: 'EnsRegionIdName',
      instanceCount: 'InstanceCount',
      internetBandwidth: 'InternetBandwidth',
      isp: 'Isp',
      VCpu: 'VCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      areaCode: 'string',
      bizDate: 'string',
      ensRegionId: 'string',
      ensRegionIdName: 'string',
      instanceCount: 'number',
      internetBandwidth: 'number',
      isp: 'string',
      VCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources extends $tea.Model {
  ensRegionIdResource?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource[];
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResource: 'EnsRegionIdResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResource: { 'type': 'array', 'itemType': DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions extends $tea.Model {
  area?: string;
  enName?: string;
  ensRegionId?: string;
  name?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      name: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBodyEnsRegions extends $tea.Model {
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions[];
  static names(): { [key: string]: string } {
    return {
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegions: { 'type': 'array', 'itemType': DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsResourceUsageResponseBodyEnsResourceUsage extends $tea.Model {
  computeResourceCount?: number;
  cpuSum?: number;
  diskCount?: number;
  downCount?: number;
  expiredCount?: number;
  expiringCount?: number;
  gpuSum?: number;
  instanceCount?: number;
  runningCount?: number;
  serviceType?: string;
  storageSum?: number;
  static names(): { [key: string]: string } {
    return {
      computeResourceCount: 'ComputeResourceCount',
      cpuSum: 'CpuSum',
      diskCount: 'DiskCount',
      downCount: 'DownCount',
      expiredCount: 'ExpiredCount',
      expiringCount: 'ExpiringCount',
      gpuSum: 'GpuSum',
      instanceCount: 'InstanceCount',
      runningCount: 'RunningCount',
      serviceType: 'ServiceType',
      storageSum: 'StorageSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceCount: 'number',
      cpuSum: 'number',
      diskCount: 'number',
      downCount: 'number',
      expiredCount: 'number',
      expiringCount: 'number',
      gpuSum: 'number',
      instanceCount: 'number',
      runningCount: 'number',
      serviceType: 'string',
      storageSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops extends $tea.Model {
  nextHopId?: string;
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponseBodyRouteEntrys extends $tea.Model {
  description?: string;
  destinationCidrBlock?: string;
  nextHops?: DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops[];
  routeEntryId?: string;
  routeEntryName?: string;
  routeTableId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHops: 'NextHops',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      nextHops: { 'type': 'array', 'itemType': DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops },
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $tea.Model {
  downBandWidth?: number;
  internetRX?: number;
  internetTX?: number;
  timeStamp?: string;
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBodyMonitorData extends $tea.Model {
  bandWidthMonitorData?: DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  maxDownBandWidth?: number;
  maxUpBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'number',
      maxUpBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyConfVersions extends $tea.Model {
  confVersion?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      confVersion: 'ConfVersion',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersion: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyInstances extends $tea.Model {
  ensRegionId?: string;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddress: 'PublicIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      privateIpAddress: 'string',
      publicIpAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyVSwitches extends $tea.Model {
  cidrBlock?: string;
  ensRegionId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ensRegionId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance extends $tea.Model {
  creationTime?: string;
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  EPNInstanceType?: string;
  endTime?: string;
  internetMaxBandwidthOut?: number;
  modifyTime?: string;
  networkingModel?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyTime: 'ModifyTime',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
      modifyTime: 'string',
      networkingModel: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBodyEPNInstances extends $tea.Model {
  EPNInstance?: DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance[];
  static names(): { [key: string]: string } {
    return {
      EPNInstance: 'EPNInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstance: { 'type': 'array', 'itemType': DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costCode?: string;
  costName?: string;
  costType?: string;
  costVal?: number;
  ispLine?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costType: 'CostType',
      costVal: 'CostVal',
      ispLine: 'IspLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costType: 'string',
      costVal: 'number',
      ispLine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $tea.Model {
  bandWidthFeeDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
  chargeModel?: string;
  costCycle?: string;
  costEndTime?: string;
  costStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatas extends $tea.Model {
  measurementData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBodyImagesImage extends $tea.Model {
  architecture?: string;
  creationTime?: string;
  exportedImageURL?: string;
  imageExportStatus?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      exportedImageURL: 'ExportedImageURL',
      imageExportStatus: 'ImageExportStatus',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      exportedImageURL: 'string',
      imageExportStatus: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBodyImages extends $tea.Model {
  image?: DescribeExportImageInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeExportImageInfoResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $tea.Model {
  externalIp?: string;
  externalPort?: string;
  forwardEntryId?: string;
  forwardEntryName?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  natGatewayId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBodyImagesImage extends $tea.Model {
  description?: string;
  imageId?: string;
  imageSize?: string;
  imageVersion?: string;
  OSName?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageVersion: 'ImageVersion',
      OSName: 'OSName',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageSize: 'string',
      imageVersion: 'string',
      OSName: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBodyImages extends $tea.Model {
  image?: DescribeImageInfosResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImageInfosResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBodyAccounts extends $tea.Model {
  account?: string[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImage extends $tea.Model {
  architecture?: string;
  creationTime?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  imageSize?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageSize: 'ImageSize',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageSize: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  image?: DescribeImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $tea.Model {
  autoRenewal?: boolean;
  duration?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      duration: 'Duration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      duration: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes extends $tea.Model {
  instanceRenewAttribute?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $tea.Model {
  CPU?: string;
  instanceId?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      instanceId: 'InstanceId',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      instanceId: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBodyMonitorData extends $tea.Model {
  instanceMonitorData?: DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec extends $tea.Model {
  core?: string;
  displayName?: string;
  instanceType?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      displayName: 'DisplayName',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'string',
      displayName: 'string',
      instanceType: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBodyInstanceSpecs extends $tea.Model {
  instanceSpec?: DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $tea.Model {
  cpuCoreCount?: number;
  instanceTypeId?: string;
  instanceTypeName?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeId: 'string',
      instanceTypeName: 'string',
      memorySize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $tea.Model {
  instanceType?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk extends $tea.Model {
  category?: string;
  diskId?: string;
  diskName?: string;
  size?: number;
  deviceType?: string;
  diskType?: string;
  name?: string;
  storage?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      size: 'Size',
      deviceType: 'device_type',
      diskType: 'disk_type',
      name: 'name',
      storage: 'storage',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      diskName: 'string',
      size: 'number',
      deviceType: 'string',
      diskType: 'string',
      name: 'string',
      storage: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceDataDisk extends $tea.Model {
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress extends $tea.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress extends $tea.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes extends $tea.Model {
  networkId?: string;
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      privateIpAddress: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress,
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress extends $tea.Model {
  gateWay?: string;
  ip?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      gateWay: 'GateWay',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateWay: 'string',
      ip: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses extends $tea.Model {
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddress extends $tea.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress extends $tea.Model {
  gateWay?: string;
  ip?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      gateWay: 'GateWay',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateWay: 'string',
      ip: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses extends $tea.Model {
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds extends $tea.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceSystemDisk extends $tea.Model {
  category?: string;
  diskId?: string;
  diskName?: string;
  size?: number;
  deviceType?: string;
  diskType?: string;
  name?: string;
  storage?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      size: 'Size',
      deviceType: 'device_type',
      diskType: 'disk_type',
      name: 'name',
      storage: 'storage',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      diskName: 'string',
      size: 'number',
      deviceType: 'string',
      diskType: 'string',
      name: 'string',
      storage: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstance extends $tea.Model {
  cpu?: string;
  creationTime?: string;
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDisk;
  disk?: number;
  ensRegionId?: string;
  expiredTime?: string;
  hostName?: string;
  imageId?: string;
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  instanceId?: string;
  instanceName?: string;
  instanceResourceType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  memory?: number;
  networkAttributes?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes;
  OSName?: string;
  privateIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses;
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  publicIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses;
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  specName?: string;
  status?: string;
  systemDisk?: DescribeInstancesResponseBodyInstancesInstanceSystemDisk;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDisk: 'DataDisk',
      disk: 'Disk',
      ensRegionId: 'EnsRegionId',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceResourceType: 'InstanceResourceType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      memory: 'Memory',
      networkAttributes: 'NetworkAttributes',
      OSName: 'OSName',
      privateIpAddresses: 'PrivateIpAddresses',
      publicIpAddress: 'PublicIpAddress',
      publicIpAddresses: 'PublicIpAddresses',
      securityGroupIds: 'SecurityGroupIds',
      specName: 'SpecName',
      status: 'Status',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      creationTime: 'string',
      dataDisk: DescribeInstancesResponseBodyInstancesInstanceDataDisk,
      disk: 'number',
      ensRegionId: 'string',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      innerIpAddress: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress,
      instanceId: 'string',
      instanceName: 'string',
      instanceResourceType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      memory: 'number',
      networkAttributes: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes,
      OSName: 'string',
      privateIpAddresses: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses,
      publicIpAddress: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress,
      publicIpAddresses: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses,
      securityGroupIds: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds,
      specName: 'string',
      status: 'string',
      systemDisk: DescribeInstancesResponseBodyInstancesInstanceSystemDisk,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $tea.Model {
  creationTime?: string;
  keyPairFingerPrint?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairs extends $tea.Model {
  keyPair?: DescribeKeyPairsResponseBodyKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $tea.Model {
  ip?: string;
  port?: string;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'string',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocols extends $tea.Model {
  description?: string;
  forwardPort?: number;
  listenerForward?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      forwardPort: 'ForwardPort',
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      forwardPort: 'number',
      listenerForward: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs extends $tea.Model {
  displayName?: string;
  loadBalancerSpec?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loadBalancerSpec: 'LoadBalancerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loadBalancerSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer extends $tea.Model {
  address?: string;
  addressIPVersion?: string;
  createTime?: string;
  ensRegionId?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerStatus?: string;
  networkId?: string;
  payType?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      createTime: 'CreateTime',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      createTime: 'string',
      ensRegionId: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      networkId: 'string',
      payType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  loadBalancer?: DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer[];
  static names(): { [key: string]: string } {
    return {
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancer: { 'type': 'array', 'itemType': DescribeLoadBalancersResponseBodyLoadBalancersLoadBalancer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costCode?: string;
  costName?: string;
  costVal?: number;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData extends $tea.Model {
  memory?: number;
  storage?: number;
  vcpu?: number;
  static names(): { [key: string]: string } {
    return {
      memory: 'Memory',
      storage: 'Storage',
      vcpu: 'Vcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'number',
      storage: 'number',
      vcpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail extends $tea.Model {
  costCode?: string;
  costName?: string;
  costVal?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails extends $tea.Model {
  resourceFeeDataDetail?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceFeeDataDetail: 'ResourceFeeDataDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceFeeDataDetail: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $tea.Model {
  bandWidthFeeDatas?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
  chargeModel?: string;
  costCycle?: string;
  costEndTime?: string;
  costStartTime?: string;
  resourceFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData;
  resourceFeeDataDetails?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
      resourceFeeData: 'ResourceFeeData',
      resourceFeeDataDetails: 'ResourceFeeDataDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
      resourceFeeData: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData,
      resourceFeeDataDetails: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatas extends $tea.Model {
  measurementData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGateways extends $tea.Model {
  creationTime?: string;
  ensRegionId?: string;
  name?: string;
  natGatewayId?: string;
  networkId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      networkId: 'NetworkId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ensRegionId: 'string',
      name: 'string',
      natGatewayId: 'string',
      networkId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType extends $tea.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyCloudResources extends $tea.Model {
  cloudResourceSetType?: DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAttributeResponseBodyVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet extends $tea.Model {
  primary?: boolean;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets extends $tea.Model {
  privateIpSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $tea.Model {
  creationTime?: string;
  ensRegionId?: string;
  instanceId?: string;
  macAddress?: string;
  networkInterfaceId?: string;
  primaryIp?: string;
  primaryIpType?: string;
  privateIpSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  status?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      primaryIp: 'PrimaryIp',
      primaryIpType: 'PrimaryIpType',
      privateIpSets: 'PrivateIpSets',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIp: 'string',
      primaryIpType: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      status: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets extends $tea.Model {
  networkInterfaceSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetworkVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetwork extends $tea.Model {
  cidrBlock?: string;
  createdTime?: string;
  description?: string;
  ensRegionId?: string;
  networkId?: string;
  networkName?: string;
  routerTableId?: string;
  status?: string;
  vSwitchIds?: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
      routerTableId: 'RouterTableId',
      status: 'Status',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      networkId: 'string',
      networkName: 'string',
      routerTableId: 'string',
      status: 'string',
      vSwitchIds: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworks extends $tea.Model {
  network?: DescribeNetworksResponseBodyNetworksNetwork[];
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeNetworksResponseBodyNetworksNetwork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestDataDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSystemDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestDataDisks extends $tea.Model {
  category?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceShrinkRequestDataDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceShrinkRequestSystemDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $tea.Model {
  price?: DescribePriceResponseBodyPriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponseBodyPriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionIspsResponseBodyIsps extends $tea.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodyImagesImage extends $tea.Model {
  imageId?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodyImages extends $tea.Model {
  image?: DescribeReservedResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeReservedResourceResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes extends $tea.Model {
  dataDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes extends $tea.Model {
  systemDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResourcesSupportResource extends $tea.Model {
  dataDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes;
  ensRegionId?: string;
  instanceSpec?: string;
  supportResourcesCount?: string;
  systemDiskSizes?: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes;
  static names(): { [key: string]: string } {
    return {
      dataDiskSizes: 'DataDiskSizes',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSizes: 'SystemDiskSizes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes,
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSizes: DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedResourceResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeReservedResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeReservedResourceResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyPermissionsPermission extends $tea.Model {
  creationTime?: string;
  description?: string;
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyPermissions extends $tea.Model {
  permission?: DescribeSecurityGroupAttributeResponseBodyPermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyPermissionsPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup extends $tea.Model {
  creationTime?: string;
  description?: string;
  instanceCount?: number;
  securityGroupId?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      instanceCount: 'InstanceCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      instanceCount: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  securityGroup?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus extends $tea.Model {
  containerId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses extends $tea.Model {
  containerStatus?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfo extends $tea.Model {
  containerService?: boolean;
  containerStatuses?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses;
  name?: boolean;
  namespace?: boolean;
  resourceScope?: boolean;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      containerService: 'ContainerService',
      containerStatuses: 'ContainerStatuses',
      name: 'Name',
      namespace: 'Namespace',
      resourceScope: 'ResourceScope',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerService: 'boolean',
      containerStatuses: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses,
      name: 'boolean',
      namespace: 'boolean',
      resourceScope: 'boolean',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $tea.Model {
  natGatewayId?: string;
  snatEntryId?: string;
  snatEntryName?: string;
  snatIp?: string;
  sourceCIDR?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      sourceCIDR: 'SourceCIDR',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      sourceCIDR: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $tea.Model {
  downBandWidth?: number;
  internetRX?: number;
  internetTX?: number;
  timeStamp?: string;
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBodyMonitorData extends $tea.Model {
  bandWidthMonitorData?: DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  maxDownBandWidth?: string;
  maxUpBandWidth?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'string',
      maxUpBandWidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $tea.Model {
  cidrBlock?: string;
  createdTime?: string;
  description?: string;
  ensRegionId?: string;
  freeIpCount?: number;
  networkId?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      freeIpCount: 'FreeIpCount',
      networkId: 'NetworkId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      freeIpCount: 'number',
      networkId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $tea.Model {
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBodyDistInstanceIds extends $tea.Model {
  distInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      distInstanceId: 'DistInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBodyDistResultsDistResult extends $tea.Model {
  name?: string;
  resultCode?: number;
  resultDescrip?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBodyDistResults extends $tea.Model {
  distResult?: DistApplicationDataResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DistApplicationDataResponseBodyDistResultsDistResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceInternetPortResponseBodyNetworkInfo extends $tea.Model {
  externalIp?: string;
  externalPort?: string;
  ISP?: string;
  internalIp?: string;
  internalPort?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      ISP: 'ISP',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      ISP: 'string',
      internalIp: 'string',
      internalPort: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppListApp extends $tea.Model {
  appId?: string;
  appInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppList extends $tea.Model {
  app?: ListApplicationsResponseBodyApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationAppListApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplication extends $tea.Model {
  appList?: ListApplicationsResponseBodyApplicationsApplicationAppList;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListApplicationsResponseBodyApplicationsApplicationAppList,
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBodyPushResultsPushResult extends $tea.Model {
  name?: string;
  resultCode?: number;
  resultDescrip?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBodyPushResults extends $tea.Model {
  pushResult?: PushApplicationDataResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': PushApplicationDataResponseBodyPushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersRequestBackendServers extends $tea.Model {
  ip?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  ip?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: RemoveBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleDeviceServiceResponseBodyResourceDetailInfos extends $tea.Model {
  ID?: string;
  IP?: string;
  ISP?: string;
  mac?: string;
  regionID?: string;
  server?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ID: 'ID',
      IP: 'IP',
      ISP: 'ISP',
      mac: 'Mac',
      regionID: 'RegionID',
      server: 'Server',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ID: 'string',
      IP: 'string',
      ISP: 'string',
      mac: 'string',
      regionID: 'string',
      server: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestDataDisk extends $tea.Model {
  category?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSystemDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBodyCommandResultsCommandResult extends $tea.Model {
  command?: string;
  containerName?: string;
  resultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerName: 'ContainerName',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerName: 'string',
      resultMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBodyCommandResults extends $tea.Model {
  commandResult?: RunServiceScheduleResponseBodyCommandResultsCommandResult[];
  static names(): { [key: string]: string } {
    return {
      commandResult: 'CommandResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResult: { 'type': 'array', 'itemType': RunServiceScheduleResponseBodyCommandResultsCommandResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersRequestBackendServers extends $tea.Model {
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServersBackendServer extends $tea.Model {
  ip?: string;
  port?: number;
  serverId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackendServersResponseBodyBackendServers extends $tea.Model {
  backendServer?: SetBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ens", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addBackendServersWithOptions(tmpReq: AddBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<AddBackendServersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBackendServers",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBackendServersResponse>(await this.callApi(params, req, runtime), new AddBackendServersResponse({}));
  }

  async addBackendServers(request: AddBackendServersRequest): Promise<AddBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  async addDeviceInternetPortWithOptions(request: AddDeviceInternetPortRequest, runtime: $Util.RuntimeOptions): Promise<AddDeviceInternetPortResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDeviceInternetPort",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDeviceInternetPortResponse>(await this.callApi(params, req, runtime), new AddDeviceInternetPortResponse({}));
  }

  async addDeviceInternetPort(request: AddDeviceInternetPortRequest): Promise<AddDeviceInternetPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeviceInternetPortWithOptions(request, runtime);
  }

  async addNetworkInterfaceToInstanceWithOptions(request: AddNetworkInterfaceToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AddNetworkInterfaceToInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networks)) {
      query["Networks"] = request.networks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddNetworkInterfaceToInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddNetworkInterfaceToInstanceResponse>(await this.callApi(params, req, runtime), new AddNetworkInterfaceToInstanceResponse({}));
  }

  async addNetworkInterfaceToInstance(request: AddNetworkInterfaceToInstanceRequest): Promise<AddNetworkInterfaceToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNetworkInterfaceToInstanceWithOptions(request, runtime);
  }

  async assignPrivateIpAddressesWithOptions(request: AssignPrivateIpAddressesRequest, runtime: $Util.RuntimeOptions): Promise<AssignPrivateIpAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignPrivateIpAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new AssignPrivateIpAddressesResponse({}));
  }

  async assignPrivateIpAddresses(request: AssignPrivateIpAddressesRequest): Promise<AssignPrivateIpAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignPrivateIpAddressesWithOptions(request, runtime);
  }

  async associateEnsEipAddressWithOptions(request: AssociateEnsEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateEnsEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateEnsEipAddress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateEnsEipAddressResponse>(await this.callApi(params, req, runtime), new AssociateEnsEipAddressResponse({}));
  }

  async associateEnsEipAddress(request: AssociateEnsEipAddressRequest): Promise<AssociateEnsEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateEnsEipAddressWithOptions(request, runtime);
  }

  async attachDiskWithOptions(request: AttachDiskRequest, runtime: $Util.RuntimeOptions): Promise<AttachDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteWithInstance)) {
      query["DeleteWithInstance"] = request.deleteWithInstance;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDiskResponse>(await this.callApi(params, req, runtime), new AttachDiskResponse({}));
  }

  async attachDisk(request: AttachDiskRequest): Promise<AttachDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDiskWithOptions(request, runtime);
  }

  async attachEnsInstancesWithOptions(request: AttachEnsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachEnsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scripts)) {
      query["Scripts"] = request.scripts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachEnsInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachEnsInstancesResponse>(await this.callApi(params, req, runtime), new AttachEnsInstancesResponse({}));
  }

  async attachEnsInstances(request: AttachEnsInstancesRequest): Promise<AttachEnsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEnsInstancesWithOptions(request, runtime);
  }

  async authorizeSecurityGroupWithOptions(request: AuthorizeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeSecurityGroupResponse>(await this.callApi(params, req, runtime), new AuthorizeSecurityGroupResponse({}));
  }

  async authorizeSecurityGroup(request: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  async authorizeSecurityGroupEgressWithOptions(request: AuthorizeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destCidrIp)) {
      query["DestCidrIp"] = request.destCidrIp;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeSecurityGroupEgress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeSecurityGroupEgressResponse>(await this.callApi(params, req, runtime), new AuthorizeSecurityGroupEgressResponse({}));
  }

  async authorizeSecurityGroupEgress(request: AuthorizeSecurityGroupEgressRequest): Promise<AuthorizeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupEgressWithOptions(request, runtime);
  }

  async createARMServerInstancesWithOptions(request: CreateARMServerInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateARMServerInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.serverType)) {
      query["ServerType"] = request.serverType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateARMServerInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateARMServerInstancesResponse>(await this.callApi(params, req, runtime), new CreateARMServerInstancesResponse({}));
  }

  async createARMServerInstances(request: CreateARMServerInstancesRequest): Promise<CreateARMServerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createARMServerInstancesWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createClassicNetworkWithOptions(request: CreateClassicNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateClassicNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClassicNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClassicNetworkResponse>(await this.callApi(params, req, runtime), new CreateClassicNetworkResponse({}));
  }

  async createClassicNetwork(request: CreateClassicNetworkRequest): Promise<CreateClassicNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClassicNetworkWithOptions(request, runtime);
  }

  async createDiskWithOptions(request: CreateDiskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiskResponse>(await this.callApi(params, req, runtime), new CreateDiskResponse({}));
  }

  async createDisk(request: CreateDiskRequest): Promise<CreateDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskWithOptions(request, runtime);
  }

  async createEipInstanceWithOptions(request: CreateEipInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEipInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEipInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEipInstanceResponse>(await this.callApi(params, req, runtime), new CreateEipInstanceResponse({}));
  }

  async createEipInstance(request: CreateEipInstanceRequest): Promise<CreateEipInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEipInstanceWithOptions(request, runtime);
  }

  async createEnsRouteEntryWithOptions(request: CreateEnsRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnsRouteEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.nextHopId)) {
      query["NextHopId"] = request.nextHopId;
    }

    if (!Util.isUnset(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!Util.isUnset(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnsRouteEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEnsRouteEntryResponse>(await this.callApi(params, req, runtime), new CreateEnsRouteEntryResponse({}));
  }

  async createEnsRouteEntry(request: CreateEnsRouteEntryRequest): Promise<CreateEnsRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnsRouteEntryWithOptions(request, runtime);
  }

  async createEnsServiceWithOptions(request: CreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensServiceId)) {
      query["EnsServiceId"] = request.ensServiceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnsService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEnsServiceResponse>(await this.callApi(params, req, runtime), new CreateEnsServiceResponse({}));
  }

  async createEnsService(request: CreateEnsServiceRequest): Promise<CreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnsServiceWithOptions(request, runtime);
  }

  async createEpnInstanceWithOptions(request: CreateEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
    }

    if (!Util.isUnset(request.EPNInstanceType)) {
      query["EPNInstanceType"] = request.EPNInstanceType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEpnInstanceResponse>(await this.callApi(params, req, runtime), new CreateEpnInstanceResponse({}));
  }

  async createEpnInstance(request: CreateEpnInstanceRequest): Promise<CreateEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEpnInstanceWithOptions(request, runtime);
  }

  async createForwardEntryWithOptions(request: CreateForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!Util.isUnset(request.externalPort)) {
      query["ExternalPort"] = request.externalPort;
    }

    if (!Util.isUnset(request.forwardEntryName)) {
      query["ForwardEntryName"] = request.forwardEntryName;
    }

    if (!Util.isUnset(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!Util.isUnset(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateForwardEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateForwardEntryResponse>(await this.callApi(params, req, runtime), new CreateForwardEntryResponse({}));
  }

  async createForwardEntry(request: CreateForwardEntryRequest): Promise<CreateForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardEntryWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteAfterImageUpload)) {
      query["DeleteAfterImageUpload"] = request.deleteAfterImageUpload;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageResponse>(await this.callApi(params, req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.publicIpIdentification)) {
      query["PublicIpIdentification"] = request.publicIpIdentification;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.uniqueSuffix)) {
      query["UniqueSuffix"] = request.uniqueSuffix;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset($tea.toMap(request.systemDisk))) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeyPair",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateKeyPairResponse>(await this.callApi(params, req, runtime), new CreateKeyPairResponse({}));
  }

  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerSpec)) {
      query["LoadBalancerSpec"] = request.loadBalancerSpec;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancer",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerResponse({}));
  }

  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPListenerWithOptions(request: CreateLoadBalancerHTTPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerForward)) {
      query["ListenerForward"] = request.listenerForward;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!Util.isUnset(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPListenerResponse({}));
  }

  async createLoadBalancerHTTPListener(request: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerHTTPSListenerWithOptions(request: CreateLoadBalancerHTTPSListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!Util.isUnset(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.forwardPort)) {
      query["ForwardPort"] = request.forwardPort;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerForward)) {
      query["ListenerForward"] = request.listenerForward;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerHTTPSListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerHTTPSListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerHTTPSListenerResponse({}));
  }

  async createLoadBalancerHTTPSListener(request: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPSListenerWithOptions(request, runtime);
  }

  async createLoadBalancerTCPListenerWithOptions(request: CreateLoadBalancerTCPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerTCPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerTCPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerTCPListenerResponse({}));
  }

  async createLoadBalancerTCPListener(request: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  async createLoadBalancerUDPListenerWithOptions(request: CreateLoadBalancerUDPListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerUDPListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["HealthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["HealthCheckReq"] = request.healthCheckReq;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancerUDPListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerUDPListenerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerUDPListenerResponse({}));
  }

  async createLoadBalancerUDPListener(request: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerUDPListenerWithOptions(request, runtime);
  }

  async createNatGatewayWithOptions(request: CreateNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateNatGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNatGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNatGatewayResponse>(await this.callApi(params, req, runtime), new CreateNatGatewayResponse({}));
  }

  async createNatGateway(request: CreateNatGatewayRequest): Promise<CreateNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNatGatewayWithOptions(request, runtime);
  }

  async createNetworkWithOptions(request: CreateNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkResponse>(await this.callApi(params, req, runtime), new CreateNetworkResponse({}));
  }

  async createNetwork(request: CreateNetworkRequest): Promise<CreateNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkWithOptions(request, runtime);
  }

  async createSecurityGroupWithOptions(request: CreateSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecurityGroupResponse>(await this.callApi(params, req, runtime), new CreateSecurityGroupResponse({}));
  }

  async createSecurityGroup(request: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityGroupWithOptions(request, runtime);
  }

  async createSnatEntryWithOptions(request: CreateSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.snatEntryName)) {
      query["SnatEntryName"] = request.snatEntryName;
    }

    if (!Util.isUnset(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    if (!Util.isUnset(request.sourceCIDR)) {
      query["SourceCIDR"] = request.sourceCIDR;
    }

    if (!Util.isUnset(request.sourceVSwitchId)) {
      query["SourceVSwitchId"] = request.sourceVSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSnatEntryResponse>(await this.callApi(params, req, runtime), new CreateSnatEntryResponse({}));
  }

  async createSnatEntry(request: CreateSnatEntryRequest): Promise<CreateSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnatEntryWithOptions(request, runtime);
  }

  async createVSwitchWithOptions(request: CreateVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<CreateVSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVSwitch",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVSwitchResponse>(await this.callApi(params, req, runtime), new CreateVSwitchResponse({}));
  }

  async createVSwitch(request: CreateVSwitchRequest): Promise<CreateVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  async deleteDeviceInternetPortWithOptions(request: DeleteDeviceInternetPortRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceInternetPortResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeviceInternetPort",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceInternetPortResponse>(await this.callApi(params, req, runtime), new DeleteDeviceInternetPortResponse({}));
  }

  async deleteDeviceInternetPort(request: DeleteDeviceInternetPortRequest): Promise<DeleteDeviceInternetPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceInternetPortWithOptions(request, runtime);
  }

  async deleteEnsRouteEntryWithOptions(request: DeleteEnsRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnsRouteEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnsRouteEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnsRouteEntryResponse>(await this.callApi(params, req, runtime), new DeleteEnsRouteEntryResponse({}));
  }

  async deleteEnsRouteEntry(request: DeleteEnsRouteEntryRequest): Promise<DeleteEnsRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnsRouteEntryWithOptions(request, runtime);
  }

  async deleteEpnInstanceWithOptions(request: DeleteEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEpnInstanceResponse>(await this.callApi(params, req, runtime), new DeleteEpnInstanceResponse({}));
  }

  async deleteEpnInstance(request: DeleteEpnInstanceRequest): Promise<DeleteEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEpnInstanceWithOptions(request, runtime);
  }

  async deleteForwardEntryWithOptions(request: DeleteForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteForwardEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteForwardEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteForwardEntryResponse>(await this.callApi(params, req, runtime), new DeleteForwardEntryResponse({}));
  }

  async deleteForwardEntry(request: DeleteForwardEntryRequest): Promise<DeleteForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardEntryWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyPairs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new DeleteKeyPairsResponse({}));
  }

  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  async deleteLoadBalancerListenerWithOptions(request: DeleteLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancerListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerListenerResponse({}));
  }

  async deleteLoadBalancerListener(request: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  async deleteNatGatewayWithOptions(request: DeleteNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNatGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNatGateway",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNatGatewayResponse>(await this.callApi(params, req, runtime), new DeleteNatGatewayResponse({}));
  }

  async deleteNatGateway(request: DeleteNatGatewayRequest): Promise<DeleteNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNatGatewayWithOptions(request, runtime);
  }

  async deleteNetworkWithOptions(request: DeleteNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetwork",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkResponse>(await this.callApi(params, req, runtime), new DeleteNetworkResponse({}));
  }

  async deleteNetwork(request: DeleteNetworkRequest): Promise<DeleteNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityGroupResponse>(await this.callApi(params, req, runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async deleteSnatEntryWithOptions(request: DeleteSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.snatEntryId)) {
      query["SnatEntryId"] = request.snatEntryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnatEntry",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnatEntryResponse>(await this.callApi(params, req, runtime), new DeleteSnatEntryResponse({}));
  }

  async deleteSnatEntry(request: DeleteSnatEntryRequest): Promise<DeleteSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  async deleteVSwitchWithOptions(request: DeleteVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVSwitch",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVSwitchResponse>(await this.callApi(params, req, runtime), new DeleteVSwitchResponse({}));
  }

  async deleteVSwitch(request: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  async describeApplicationWithOptions(request: DescribeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersions)) {
      query["AppVersions"] = request.appVersions;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.outDetailStatParams)) {
      query["OutDetailStatParams"] = request.outDetailStatParams;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationResponse>(await this.callApi(params, req, runtime), new DescribeApplicationResponse({}));
  }

  async describeApplication(request: DescribeApplicationRequest): Promise<DescribeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationWithOptions(request, runtime);
  }

  async describeApplicationResourceSummaryWithOptions(request: DescribeApplicationResourceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResourceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationResourceSummary",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationResourceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeApplicationResourceSummaryResponse({}));
  }

  async describeApplicationResourceSummary(request: DescribeApplicationResourceSummaryRequest): Promise<DescribeApplicationResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationResourceSummaryWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeAvailableResourceInfoWithOptions(request: DescribeAvailableResourceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceInfoResponse({}));
  }

  async describeAvailableResourceInfo(request: DescribeAvailableResourceInfoRequest): Promise<DescribeAvailableResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceInfoWithOptions(request, runtime);
  }

  async describeBandWithdChargeTypeWithOptions(request: DescribeBandWithdChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandWithdChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBandWithdChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBandWithdChargeTypeResponse>(await this.callApi(params, req, runtime), new DescribeBandWithdChargeTypeResponse({}));
  }

  async describeBandWithdChargeType(request: DescribeBandWithdChargeTypeRequest): Promise<DescribeBandWithdChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandWithdChargeTypeWithOptions(request, runtime);
  }

  async describeBandwitdhByInternetChargeTypeWithOptions(request: DescribeBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBandwitdhByInternetChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBandwitdhByInternetChargeTypeResponse>(await this.callApi(params, req, runtime), new DescribeBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeBandwitdhByInternetChargeType(request: DescribeBandwitdhByInternetChargeTypeRequest): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async describeCloudDiskAvailableResourceInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCloudDiskAvailableResourceInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeCloudDiskAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudDiskAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new DescribeCloudDiskAvailableResourceInfoResponse({}));
  }

  async describeCloudDiskAvailableResourceInfo(): Promise<DescribeCloudDiskAvailableResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudDiskAvailableResourceInfoWithOptions(runtime);
  }

  async describeCloudDiskTypesWithOptions(request: DescribeCloudDiskTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudDiskTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudDiskTypes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudDiskTypesResponse>(await this.callApi(params, req, runtime), new DescribeCloudDiskTypesResponse({}));
  }

  async describeCloudDiskTypes(request: DescribeCloudDiskTypesRequest): Promise<DescribeCloudDiskTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudDiskTypesWithOptions(request, runtime);
  }

  async describeCreatePrePaidInstanceResultWithOptions(request: DescribeCreatePrePaidInstanceResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCreatePrePaidInstanceResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCreatePrePaidInstanceResultResponse>(await this.callApi(params, req, runtime), new DescribeCreatePrePaidInstanceResultResponse({}));
  }

  async describeCreatePrePaidInstanceResult(request: DescribeCreatePrePaidInstanceResultRequest): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCreatePrePaidInstanceResultWithOptions(request, runtime);
  }

  async describeDataDistResultWithOptions(request: DescribeDataDistResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataDistResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.dataNames)) {
      query["DataNames"] = request.dataNames;
    }

    if (!Util.isUnset(request.dataVersions)) {
      query["DataVersions"] = request.dataVersions;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!Util.isUnset(request.minDate)) {
      query["MinDate"] = request.minDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataDistResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataDistResultResponse>(await this.callApi(params, req, runtime), new DescribeDataDistResultResponse({}));
  }

  async describeDataDistResult(request: DescribeDataDistResultRequest): Promise<DescribeDataDistResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataDistResultWithOptions(request, runtime);
  }

  async describeDataDownloadURLWithOptions(request: DescribeDataDownloadURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataDownloadURLResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataDownloadURL",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataDownloadURLResponse>(await this.callApi(params, req, runtime), new DescribeDataDownloadURLResponse({}));
  }

  async describeDataDownloadURL(request: DescribeDataDownloadURLRequest): Promise<DescribeDataDownloadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataDownloadURLWithOptions(request, runtime);
  }

  async describeDataPushResultWithOptions(request: DescribeDataPushResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataPushResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.dataNames)) {
      query["DataNames"] = request.dataNames;
    }

    if (!Util.isUnset(request.dataVersions)) {
      query["DataVersions"] = request.dataVersions;
    }

    if (!Util.isUnset(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!Util.isUnset(request.minDate)) {
      query["MinDate"] = request.minDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionIds)) {
      query["RegionIds"] = request.regionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataPushResult",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataPushResultResponse>(await this.callApi(params, req, runtime), new DescribeDataPushResultResponse({}));
  }

  async describeDataPushResult(request: DescribeDataPushResultRequest): Promise<DescribeDataPushResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataPushResultWithOptions(request, runtime);
  }

  async describeDeviceServiceWithOptions(request: DescribeDeviceServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeviceService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeviceServiceResponse>(await this.callApi(params, req, runtime), new DescribeDeviceServiceResponse({}));
  }

  async describeDeviceService(request: DescribeDeviceServiceRequest): Promise<DescribeDeviceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceServiceWithOptions(request, runtime);
  }

  async describeDisksWithOptions(request: DescribeDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.diskChargeType)) {
      query["DiskChargeType"] = request.diskChargeType;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!Util.isUnset(request.diskName)) {
      query["DiskName"] = request.diskName;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!Util.isUnset(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDisks",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDisksResponse>(await this.callApi(params, req, runtime), new DescribeDisksResponse({}));
  }

  async describeDisks(request: DescribeDisksRequest): Promise<DescribeDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisksWithOptions(request, runtime);
  }

  async describeEipAddressesWithOptions(request: DescribeEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eips)) {
      query["Eips"] = request.eips;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEipAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEipAddressesResponse>(await this.callApi(params, req, runtime), new DescribeEipAddressesResponse({}));
  }

  async describeEipAddresses(request: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipAddressesWithOptions(request, runtime);
  }

  async describeElbAvailableResourceInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeElbAvailableResourceInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeElbAvailableResourceInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElbAvailableResourceInfoResponse>(await this.callApi(params, req, runtime), new DescribeElbAvailableResourceInfoResponse({}));
  }

  async describeElbAvailableResourceInfo(): Promise<DescribeElbAvailableResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElbAvailableResourceInfoWithOptions(runtime);
  }

  async describeEnsEipAddressesWithOptions(request: DescribeEnsEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsEipAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!Util.isUnset(request.associatedInstanceId)) {
      query["AssociatedInstanceId"] = request.associatedInstanceId;
    }

    if (!Util.isUnset(request.associatedInstanceType)) {
      query["AssociatedInstanceType"] = request.associatedInstanceType;
    }

    if (!Util.isUnset(request.eipAddress)) {
      query["EipAddress"] = request.eipAddress;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsEipAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsEipAddressesResponse>(await this.callApi(params, req, runtime), new DescribeEnsEipAddressesResponse({}));
  }

  async describeEnsEipAddresses(request: DescribeEnsEipAddressesRequest): Promise<DescribeEnsEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsEipAddressesWithOptions(request, runtime);
  }

  async describeEnsNetDistrictWithOptions(request: DescribeEnsNetDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetDistrictResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!Util.isUnset(request.netLevelCode)) {
      query["NetLevelCode"] = request.netLevelCode;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsNetDistrict",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsNetDistrictResponse>(await this.callApi(params, req, runtime), new DescribeEnsNetDistrictResponse({}));
  }

  async describeEnsNetDistrict(request: DescribeEnsNetDistrictRequest): Promise<DescribeEnsNetDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetDistrictWithOptions(request, runtime);
  }

  async describeEnsNetLevelWithOptions(request: DescribeEnsNetLevelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetLevelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsNetLevel",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsNetLevelResponse>(await this.callApi(params, req, runtime), new DescribeEnsNetLevelResponse({}));
  }

  async describeEnsNetLevel(request: DescribeEnsNetLevelRequest): Promise<DescribeEnsNetLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetLevelWithOptions(request, runtime);
  }

  async describeEnsNetSaleDistrictWithOptions(request: DescribeEnsNetSaleDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetSaleDistrictResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!Util.isUnset(request.netLevelCode)) {
      query["NetLevelCode"] = request.netLevelCode;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsNetSaleDistrict",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsNetSaleDistrictResponse>(await this.callApi(params, req, runtime), new DescribeEnsNetSaleDistrictResponse({}));
  }

  async describeEnsNetSaleDistrict(request: DescribeEnsNetSaleDistrictRequest): Promise<DescribeEnsNetSaleDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetSaleDistrictWithOptions(request, runtime);
  }

  async describeEnsRegionIdIpv6InfoWithOptions(request: DescribeEnsRegionIdIpv6InfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsRegionIdIpv6Info",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsRegionIdIpv6InfoResponse>(await this.callApi(params, req, runtime), new DescribeEnsRegionIdIpv6InfoResponse({}));
  }

  async describeEnsRegionIdIpv6Info(request: DescribeEnsRegionIdIpv6InfoRequest): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdIpv6InfoWithOptions(request, runtime);
  }

  async describeEnsRegionIdResourceWithOptions(request: DescribeEnsRegionIdResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsRegionIdResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsRegionIdResourceResponse>(await this.callApi(params, req, runtime), new DescribeEnsRegionIdResourceResponse({}));
  }

  async describeEnsRegionIdResource(request: DescribeEnsRegionIdResourceRequest): Promise<DescribeEnsRegionIdResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdResourceWithOptions(request, runtime);
  }

  async describeEnsRegionsWithOptions(request: DescribeEnsRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsRegions",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsRegionsResponse>(await this.callApi(params, req, runtime), new DescribeEnsRegionsResponse({}));
  }

  async describeEnsRegions(request: DescribeEnsRegionsRequest): Promise<DescribeEnsRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionsWithOptions(request, runtime);
  }

  async describeEnsResourceUsageWithOptions(request: DescribeEnsResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsResourceUsageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsResourceUsage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeEnsResourceUsageResponse({}));
  }

  async describeEnsResourceUsage(request: DescribeEnsResourceUsageRequest): Promise<DescribeEnsResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsResourceUsageWithOptions(request, runtime);
  }

  async describeEnsRouteEntryListWithOptions(request: DescribeEnsRouteEntryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRouteEntryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationCidrBlock)) {
      query["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.nextHopId)) {
      query["NextHopId"] = request.nextHopId;
    }

    if (!Util.isUnset(request.nextHopType)) {
      query["NextHopType"] = request.nextHopType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.routeEntryId)) {
      query["RouteEntryId"] = request.routeEntryId;
    }

    if (!Util.isUnset(request.routeEntryName)) {
      query["RouteEntryName"] = request.routeEntryName;
    }

    if (!Util.isUnset(request.routeEntryType)) {
      query["RouteEntryType"] = request.routeEntryType;
    }

    if (!Util.isUnset(request.routeTableId)) {
      query["RouteTableId"] = request.routeTableId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnsRouteEntryList",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnsRouteEntryListResponse>(await this.callApi(params, req, runtime), new DescribeEnsRouteEntryListResponse({}));
  }

  async describeEnsRouteEntryList(request: DescribeEnsRouteEntryListRequest): Promise<DescribeEnsRouteEntryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRouteEntryListWithOptions(request, runtime);
  }

  async describeEpnBandWidthDataWithOptions(request: DescribeEpnBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandWidthDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEpnBandWidthData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEpnBandWidthDataResponse>(await this.callApi(params, req, runtime), new DescribeEpnBandWidthDataResponse({}));
  }

  async describeEpnBandWidthData(request: DescribeEpnBandWidthDataRequest): Promise<DescribeEpnBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandWidthDataWithOptions(request, runtime);
  }

  async describeEpnBandwitdhByInternetChargeTypeWithOptions(request: DescribeEpnBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEpnBandwitdhByInternetChargeType",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEpnBandwitdhByInternetChargeTypeResponse>(await this.callApi(params, req, runtime), new DescribeEpnBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeEpnBandwitdhByInternetChargeType(request: DescribeEpnBandwitdhByInternetChargeTypeRequest): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async describeEpnInstanceAttributeWithOptions(request: DescribeEpnInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEpnInstanceAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEpnInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeEpnInstanceAttributeResponse({}));
  }

  async describeEpnInstanceAttribute(request: DescribeEpnInstanceAttributeRequest): Promise<DescribeEpnInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstanceAttributeWithOptions(request, runtime);
  }

  async describeEpnInstancesWithOptions(request: DescribeEpnInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEpnInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEpnInstancesResponse>(await this.callApi(params, req, runtime), new DescribeEpnInstancesResponse({}));
  }

  async describeEpnInstances(request: DescribeEpnInstancesRequest): Promise<DescribeEpnInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstancesWithOptions(request, runtime);
  }

  async describeEpnMeasurementDataWithOptions(request: DescribeEpnMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnMeasurementDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEpnMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEpnMeasurementDataResponse>(await this.callApi(params, req, runtime), new DescribeEpnMeasurementDataResponse({}));
  }

  async describeEpnMeasurementData(request: DescribeEpnMeasurementDataRequest): Promise<DescribeEpnMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnMeasurementDataWithOptions(request, runtime);
  }

  async describeExportImageInfoWithOptions(request: DescribeExportImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExportImageInfo",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExportImageInfoResponse>(await this.callApi(params, req, runtime), new DescribeExportImageInfoResponse({}));
  }

  async describeExportImageInfo(request: DescribeExportImageInfoRequest): Promise<DescribeExportImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageInfoWithOptions(request, runtime);
  }

  async describeExportImageStatusWithOptions(request: DescribeExportImageStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExportImageStatus",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExportImageStatusResponse>(await this.callApi(params, req, runtime), new DescribeExportImageStatusResponse({}));
  }

  async describeExportImageStatus(request: DescribeExportImageStatusRequest): Promise<DescribeExportImageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageStatusWithOptions(request, runtime);
  }

  async describeForwardTableEntriesWithOptions(request: DescribeForwardTableEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeForwardTableEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!Util.isUnset(request.forwardEntryId)) {
      query["ForwardEntryId"] = request.forwardEntryId;
    }

    if (!Util.isUnset(request.forwardEntryName)) {
      query["ForwardEntryName"] = request.forwardEntryName;
    }

    if (!Util.isUnset(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeForwardTableEntries",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeForwardTableEntriesResponse>(await this.callApi(params, req, runtime), new DescribeForwardTableEntriesResponse({}));
  }

  async describeForwardTableEntries(request: DescribeForwardTableEntriesRequest): Promise<DescribeForwardTableEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeForwardTableEntriesWithOptions(request, runtime);
  }

  async describeImageInfosWithOptions(request: DescribeImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageInfos",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageInfosResponse>(await this.callApi(params, req, runtime), new DescribeImageInfosResponse({}));
  }

  async describeImageInfos(request: DescribeImageInfosRequest): Promise<DescribeImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageInfosWithOptions(request, runtime);
  }

  async describeImageSharePermissionWithOptions(request: DescribeImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageSharePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunId)) {
      query["AliyunId"] = request.aliyunId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageSharePermission",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageSharePermissionResponse>(await this.callApi(params, req, runtime), new DescribeImageSharePermissionResponse({}));
  }

  async describeImageSharePermission(request: DescribeImageSharePermissionRequest): Promise<DescribeImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageSharePermissionWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    if (!Util.isUnset(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImages",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImagesResponse>(await this.callApi(params, req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewAttributeWithOptions(request: DescribeInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAutoRenewAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAutoRenewAttributeResponse({}));
  }

  async describeInstanceAutoRenewAttribute(request: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeInstanceMonitorDataWithOptions(request: DescribeInstanceMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceMonitorData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeInstanceMonitorDataResponse({}));
  }

  async describeInstanceMonitorData(request: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMonitorDataWithOptions(request, runtime);
  }

  async describeInstanceSpecWithOptions(request: DescribeInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecResponse({}));
  }

  async describeInstanceSpec(request: DescribeInstanceSpecRequest): Promise<DescribeInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTypes",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTypesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async describeInstanceVncUrlWithOptions(request: DescribeInstanceVncUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceVncUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceVncUrl",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new DescribeInstanceVncUrlResponse({}));
  }

  async describeInstanceVncUrl(request: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.ensRegionIds)) {
      query["EnsRegionIds"] = request.ensRegionIds;
    }

    if (!Util.isUnset(request.ensServiceId)) {
      query["EnsServiceId"] = request.ensServiceId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceResourceType)) {
      query["InstanceResourceType"] = request.instanceResourceType;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeyPairs",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKeyPairsResponse>(await this.callApi(params, req, runtime), new DescribeKeyPairsResponse({}));
  }

  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  async describeLoadBalancerAttributeWithOptions(request: DescribeLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerAttributeResponse({}));
  }

  async describeLoadBalancerAttribute(request: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPListenerAttribute(request: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerHTTPSListenerAttributeWithOptions(request: DescribeLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerHTTPSListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async describeLoadBalancerHTTPSListenerAttribute(request: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerSpecWithOptions(request: DescribeLoadBalancerSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerSpecResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerSpecResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerSpecResponse({}));
  }

  async describeLoadBalancerSpec(request: DescribeLoadBalancerSpecRequest): Promise<DescribeLoadBalancerSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerSpecWithOptions(request, runtime);
  }

  async describeLoadBalancerTCPListenerAttributeWithOptions(request: DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  async describeLoadBalancerTCPListenerAttribute(request: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancerUDPListenerAttributeWithOptions(request: DescribeLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancerUDPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancerUDPListenerAttributeResponse({}));
  }

  async describeLoadBalancerUDPListenerAttribute(request: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async describeLoadBalancersWithOptions(request: DescribeLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoadBalancersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLoadBalancers",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new DescribeLoadBalancersResponse({}));
  }

  async describeLoadBalancers(request: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  async describeMeasurementDataWithOptions(request: DescribeMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeasurementDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMeasurementDataResponse>(await this.callApi(params, req, runtime), new DescribeMeasurementDataResponse({}));
  }

  async describeMeasurementData(request: DescribeMeasurementDataRequest): Promise<DescribeMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeasurementDataWithOptions(request, runtime);
  }

  async describeNatGatewaysWithOptions(request: DescribeNatGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatGatewaysResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNatGateways",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNatGatewaysResponse>(await this.callApi(params, req, runtime), new DescribeNatGatewaysResponse({}));
  }

  async describeNatGateways(request: DescribeNatGatewaysRequest): Promise<DescribeNatGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatGatewaysWithOptions(request, runtime);
  }

  async describeNetworkAttributeWithOptions(request: DescribeNetworkAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkAttributeResponse>(await this.callApi(params, req, runtime), new DescribeNetworkAttributeResponse({}));
  }

  async describeNetworkAttribute(request: DescribeNetworkAttributeRequest): Promise<DescribeNetworkAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkAttributeWithOptions(request, runtime);
  }

  async describeNetworkInterfacesWithOptions(request: DescribeNetworkInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfacesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.primaryIpAddress)) {
      query["PrimaryIpAddress"] = request.primaryIpAddress;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkInterfaces",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new DescribeNetworkInterfacesResponse({}));
  }

  async describeNetworkInterfaces(request: DescribeNetworkInterfacesRequest): Promise<DescribeNetworkInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfacesWithOptions(request, runtime);
  }

  async describeNetworksWithOptions(request: DescribeNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworks",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworksResponse>(await this.callApi(params, req, runtime), new DescribeNetworksResponse({}));
  }

  async describeNetworks(request: DescribeNetworksRequest): Promise<DescribeNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworksWithOptions(request, runtime);
  }

  async describePrePaidInstanceStockWithOptions(request: DescribePrePaidInstanceStockRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrePaidInstanceStockResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrePaidInstanceStock",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePrePaidInstanceStockResponse>(await this.callApi(params, req, runtime), new DescribePrePaidInstanceStockResponse({}));
  }

  async describePrePaidInstanceStock(request: DescribePrePaidInstanceStockRequest): Promise<DescribePrePaidInstanceStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrePaidInstanceStockWithOptions(request, runtime);
  }

  async describePriceWithOptions(tmpReq: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataDisks)) {
      request.dataDisksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisks, "DataDisks", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dataDisksShrink)) {
      query["DataDisks"] = request.dataDisksShrink;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset($tea.toMap(request.systemDisk))) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrice",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeRegionIspsWithOptions(request: DescribeRegionIspsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionIspsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegionIsps",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionIspsResponse>(await this.callApi(params, req, runtime), new DescribeRegionIspsResponse({}));
  }

  async describeRegionIsps(request: DescribeRegionIspsRequest): Promise<DescribeRegionIspsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionIspsWithOptions(request, runtime);
  }

  async describeReservedResourceWithOptions(request: DescribeReservedResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReservedResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReservedResource",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReservedResourceResponse>(await this.callApi(params, req, runtime), new DescribeReservedResourceResponse({}));
  }

  async describeReservedResource(request: DescribeReservedResourceRequest): Promise<DescribeReservedResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReservedResourceWithOptions(request, runtime);
  }

  async describeSecurityGroupAttributeWithOptions(request: DescribeSecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityGroupAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityGroupAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSecurityGroupAttributeResponse({}));
  }

  async describeSecurityGroupAttribute(request: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityGroups",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityGroupsResponse({}));
  }

  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  async describeServcieScheduleWithOptions(request: DescribeServcieScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServcieScheduleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.podConfigName)) {
      query["PodConfigName"] = request.podConfigName;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServcieSchedule",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServcieScheduleResponse>(await this.callApi(params, req, runtime), new DescribeServcieScheduleResponse({}));
  }

  async describeServcieSchedule(request: DescribeServcieScheduleRequest): Promise<DescribeServcieScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServcieScheduleWithOptions(request, runtime);
  }

  async describeSnatTableEntriesWithOptions(request: DescribeSnatTableEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnatTableEntriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSnatTableEntries",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSnatTableEntriesResponse>(await this.callApi(params, req, runtime), new DescribeSnatTableEntriesResponse({}));
  }

  async describeSnatTableEntries(request: DescribeSnatTableEntriesRequest): Promise<DescribeSnatTableEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnatTableEntriesWithOptions(request, runtime);
  }

  async describeUserBandWidthDataWithOptions(request: DescribeUserBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBandWidthDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserBandWidthData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBandWidthDataResponse>(await this.callApi(params, req, runtime), new DescribeUserBandWidthDataResponse({}));
  }

  async describeUserBandWidthData(request: DescribeUserBandWidthDataRequest): Promise<DescribeUserBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBandWidthDataWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.orderByParams)) {
      query["OrderByParams"] = request.orderByParams;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVSwitches",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async detachDiskWithOptions(request: DetachDiskRequest, runtime: $Util.RuntimeOptions): Promise<DetachDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachDiskResponse>(await this.callApi(params, req, runtime), new DetachDiskResponse({}));
  }

  async detachDisk(request: DetachDiskRequest): Promise<DetachDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDiskWithOptions(request, runtime);
  }

  async distApplicationDataWithOptions(request: DistApplicationDataRequest, runtime: $Util.RuntimeOptions): Promise<DistApplicationDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.distStrategy)) {
      query["DistStrategy"] = request.distStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DistApplicationData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DistApplicationDataResponse>(await this.callApi(params, req, runtime), new DistApplicationDataResponse({}));
  }

  async distApplicationData(request: DistApplicationDataRequest): Promise<DistApplicationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.distApplicationDataWithOptions(request, runtime);
  }

  async exportBillDetailDataWithOptions(request: ExportBillDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportBillDetailDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportBillDetailData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportBillDetailDataResponse>(await this.callApi(params, req, runtime), new ExportBillDetailDataResponse({}));
  }

  async exportBillDetailData(request: ExportBillDetailDataRequest): Promise<ExportBillDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportBillDetailDataWithOptions(request, runtime);
  }

  async exportImageWithOptions(request: ExportImageRequest, runtime: $Util.RuntimeOptions): Promise<ExportImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    if (!Util.isUnset(request.OSSPrefix)) {
      query["OSSPrefix"] = request.OSSPrefix;
    }

    if (!Util.isUnset(request.OSSRegionId)) {
      query["OSSRegionId"] = request.OSSRegionId;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportImage",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportImageResponse>(await this.callApi(params, req, runtime), new ExportImageResponse({}));
  }

  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  async exportMeasurementDataWithOptions(request: ExportMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportMeasurementDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportMeasurementData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportMeasurementDataResponse>(await this.callApi(params, req, runtime), new ExportMeasurementDataResponse({}));
  }

  async exportMeasurementData(request: ExportMeasurementDataRequest): Promise<ExportMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportMeasurementDataWithOptions(request, runtime);
  }

  async getDeviceInternetPortWithOptions(request: GetDeviceInternetPortRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceInternetPortResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceInternetPort",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceInternetPortResponse>(await this.callApi(params, req, runtime), new GetDeviceInternetPortResponse({}));
  }

  async getDeviceInternetPort(request: GetDeviceInternetPortRequest): Promise<GetDeviceInternetPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceInternetPortWithOptions(request, runtime);
  }

  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportKeyPair",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportKeyPairResponse>(await this.callApi(params, req, runtime), new ImportKeyPairResponse({}));
  }

  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  async joinPublicIpsToEpnInstanceWithOptions(request: JoinPublicIpsToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinPublicIpsToEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.instanceInfos)) {
      query["InstanceInfos"] = request.instanceInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JoinPublicIpsToEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinPublicIpsToEpnInstanceResponse>(await this.callApi(params, req, runtime), new JoinPublicIpsToEpnInstanceResponse({}));
  }

  async joinPublicIpsToEpnInstance(request: JoinPublicIpsToEpnInstanceRequest): Promise<JoinPublicIpsToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinPublicIpsToEpnInstanceWithOptions(request, runtime);
  }

  async joinSecurityGroupWithOptions(request: JoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JoinSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinSecurityGroupResponse>(await this.callApi(params, req, runtime), new JoinSecurityGroupResponse({}));
  }

  async joinSecurityGroup(request: JoinSecurityGroupRequest): Promise<JoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinSecurityGroupWithOptions(request, runtime);
  }

  async joinVSwitchesToEpnInstanceWithOptions(request: JoinVSwitchesToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinVSwitchesToEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.vSwitchesInfo)) {
      query["VSwitchesInfo"] = request.vSwitchesInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JoinVSwitchesToEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinVSwitchesToEpnInstanceResponse>(await this.callApi(params, req, runtime), new JoinVSwitchesToEpnInstanceResponse({}));
  }

  async joinVSwitchesToEpnInstance(request: JoinVSwitchesToEpnInstanceRequest): Promise<JoinVSwitchesToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinVSwitchesToEpnInstanceWithOptions(request, runtime);
  }

  async leaveSecurityGroupWithOptions(request: LeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LeaveSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LeaveSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LeaveSecurityGroupResponse>(await this.callApi(params, req, runtime), new LeaveSecurityGroupResponse({}));
  }

  async leaveSecurityGroup(request: LeaveSecurityGroupRequest): Promise<LeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveSecurityGroupWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersions)) {
      query["AppVersions"] = request.appVersions;
    }

    if (!Util.isUnset(request.clusterNames)) {
      query["ClusterNames"] = request.clusterNames;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.maxDate)) {
      query["MaxDate"] = request.maxDate;
    }

    if (!Util.isUnset(request.minDate)) {
      query["MinDate"] = request.minDate;
    }

    if (!Util.isUnset(request.outAppInfoParams)) {
      query["OutAppInfoParams"] = request.outAppInfoParams;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  async modifyEnsEipAddressAttributeWithOptions(request: ModifyEnsEipAddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEnsEipAddressAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEnsEipAddressAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEnsEipAddressAttributeResponse>(await this.callApi(params, req, runtime), new ModifyEnsEipAddressAttributeResponse({}));
  }

  async modifyEnsEipAddressAttribute(request: ModifyEnsEipAddressAttributeRequest): Promise<ModifyEnsEipAddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEnsEipAddressAttributeWithOptions(request, runtime);
  }

  async modifyEpnInstanceWithOptions(request: ModifyEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.EPNInstanceName)) {
      query["EPNInstanceName"] = request.EPNInstanceName;
    }

    if (!Util.isUnset(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.networkingModel)) {
      query["NetworkingModel"] = request.networkingModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEpnInstanceResponse>(await this.callApi(params, req, runtime), new ModifyEpnInstanceResponse({}));
  }

  async modifyEpnInstance(request: ModifyEpnInstanceRequest): Promise<ModifyEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEpnInstanceWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    if (!Util.isUnset(request.product)) {
      query["product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImageAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImageAttributeResponse>(await this.callApi(params, req, runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async modifyImageSharePermissionWithOptions(request: ModifyImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageSharePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addAccounts)) {
      query["AddAccounts"] = request.addAccounts;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.removeAccounts)) {
      query["RemoveAccounts"] = request.removeAccounts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImageSharePermission",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImageSharePermissionResponse>(await this.callApi(params, req, runtime), new ModifyImageSharePermissionResponse({}));
  }

  async modifyImageSharePermission(request: ModifyImageSharePermissionRequest): Promise<ModifyImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageSharePermissionWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewAttributeWithOptions(request: ModifyInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceAutoRenewAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAutoRenewAttributeResponse({}));
  }

  async modifyInstanceAutoRenewAttribute(request: ModifyInstanceAutoRenewAttributeRequest): Promise<ModifyInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async modifyLoadBalancerAttributeWithOptions(request: ModifyLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoadBalancerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new ModifyLoadBalancerAttributeResponse({}));
  }

  async modifyLoadBalancerAttribute(request: ModifyLoadBalancerAttributeRequest): Promise<ModifyLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoadBalancerAttributeWithOptions(request, runtime);
  }

  async modifyNetworkAttributeWithOptions(request: ModifyNetworkAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    if (!Util.isUnset(request.networkName)) {
      query["NetworkName"] = request.networkName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNetworkAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNetworkAttributeResponse>(await this.callApi(params, req, runtime), new ModifyNetworkAttributeResponse({}));
  }

  async modifyNetworkAttribute(request: ModifyNetworkAttributeRequest): Promise<ModifyNetworkAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkAttributeWithOptions(request, runtime);
  }

  async modifyPrepayInstanceSpecWithOptions(request: ModifyPrepayInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPrepayInstanceSpec",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPrepayInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyPrepayInstanceSpecResponse({}));
  }

  async modifyPrepayInstanceSpec(request: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  async modifySecurityGroupAttributeWithOptions(request: ModifySecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityGroupAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityGroupAttributeResponse>(await this.callApi(params, req, runtime), new ModifySecurityGroupAttributeResponse({}));
  }

  async modifySecurityGroupAttribute(request: ModifySecurityGroupAttributeRequest): Promise<ModifySecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupAttributeWithOptions(request, runtime);
  }

  async modifyVSwitchAttributeWithOptions(request: ModifyVSwitchAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVSwitchAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vSwitchName)) {
      query["VSwitchName"] = request.vSwitchName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVSwitchAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVSwitchAttributeResponse>(await this.callApi(params, req, runtime), new ModifyVSwitchAttributeResponse({}));
  }

  async modifyVSwitchAttribute(request: ModifyVSwitchAttributeRequest): Promise<ModifyVSwitchAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVSwitchAttributeWithOptions(request, runtime);
  }

  async preCreateEnsServiceWithOptions(request: PreCreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<PreCreateEnsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!Util.isUnset(request.buyResourcesDetail)) {
      query["BuyResourcesDetail"] = request.buyResourcesDetail;
    }

    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.ensServiceName)) {
      query["EnsServiceName"] = request.ensServiceName;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceBandwithdLimit)) {
      query["InstanceBandwithdLimit"] = request.instanceBandwithdLimit;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.netLevel)) {
      query["NetLevel"] = request.netLevel;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.schedulingPriceStrategy)) {
      query["SchedulingPriceStrategy"] = request.schedulingPriceStrategy;
    }

    if (!Util.isUnset(request.schedulingStrategy)) {
      query["SchedulingStrategy"] = request.schedulingStrategy;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      query["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreCreateEnsService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreCreateEnsServiceResponse>(await this.callApi(params, req, runtime), new PreCreateEnsServiceResponse({}));
  }

  async preCreateEnsService(request: PreCreateEnsServiceRequest): Promise<PreCreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preCreateEnsServiceWithOptions(request, runtime);
  }

  async pushApplicationDataWithOptions(request: PushApplicationDataRequest, runtime: $Util.RuntimeOptions): Promise<PushApplicationDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.pushStrategy)) {
      query["PushStrategy"] = request.pushStrategy;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushApplicationData",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushApplicationDataResponse>(await this.callApi(params, req, runtime), new PushApplicationDataResponse({}));
  }

  async pushApplicationData(request: PushApplicationDataRequest): Promise<PushApplicationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushApplicationDataWithOptions(request, runtime);
  }

  async reInitDiskWithOptions(request: ReInitDiskRequest, runtime: $Util.RuntimeOptions): Promise<ReInitDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReInitDisk",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReInitDiskResponse>(await this.callApi(params, req, runtime), new ReInitDiskResponse({}));
  }

  async reInitDisk(request: ReInitDiskRequest): Promise<ReInitDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reInitDiskWithOptions(request, runtime);
  }

  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootInstanceResponse>(await this.callApi(params, req, runtime), new RebootInstanceResponse({}));
  }

  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  async releaseARMServerInstanceWithOptions(request: ReleaseARMServerInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseARMServerInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseARMServerInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseARMServerInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseARMServerInstanceResponse({}));
  }

  async releaseARMServerInstance(request: ReleaseARMServerInstanceRequest): Promise<ReleaseARMServerInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseARMServerInstanceWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async releasePostPaidInstanceWithOptions(request: ReleasePostPaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePostPaidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePostPaidInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePostPaidInstanceResponse>(await this.callApi(params, req, runtime), new ReleasePostPaidInstanceResponse({}));
  }

  async releasePostPaidInstance(request: ReleasePostPaidInstanceRequest): Promise<ReleasePostPaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePostPaidInstanceWithOptions(request, runtime);
  }

  async releasePrePaidInstanceWithOptions(request: ReleasePrePaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePrePaidInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePrePaidInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePrePaidInstanceResponse>(await this.callApi(params, req, runtime), new ReleasePrePaidInstanceResponse({}));
  }

  async releasePrePaidInstance(request: ReleasePrePaidInstanceRequest): Promise<ReleasePrePaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePrePaidInstanceWithOptions(request, runtime);
  }

  async removeBackendServersWithOptions(tmpReq: RemoveBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackendServersResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveBackendServers",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveBackendServersResponse>(await this.callApi(params, req, runtime), new RemoveBackendServersResponse({}));
  }

  async removeBackendServers(request: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  async removePublicIpsFromEpnInstanceWithOptions(request: RemovePublicIpsFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.instanceInfos)) {
      query["InstanceInfos"] = request.instanceInfos;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePublicIpsFromEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePublicIpsFromEpnInstanceResponse>(await this.callApi(params, req, runtime), new RemovePublicIpsFromEpnInstanceResponse({}));
  }

  async removePublicIpsFromEpnInstance(request: RemovePublicIpsFromEpnInstanceRequest): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePublicIpsFromEpnInstanceWithOptions(request, runtime);
  }

  async removeVSwitchesFromEpnInstanceWithOptions(request: RemoveVSwitchesFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    if (!Util.isUnset(request.vSwitchesInfo)) {
      query["VSwitchesInfo"] = request.vSwitchesInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveVSwitchesFromEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveVSwitchesFromEpnInstanceResponse>(await this.callApi(params, req, runtime), new RemoveVSwitchesFromEpnInstanceResponse({}));
  }

  async removeVSwitchesFromEpnInstance(request: RemoveVSwitchesFromEpnInstanceRequest): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVSwitchesFromEpnInstanceWithOptions(request, runtime);
  }

  async renewARMServerInstanceWithOptions(request: RenewARMServerInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewARMServerInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewARMServerInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewARMServerInstanceResponse>(await this.callApi(params, req, runtime), new RenewARMServerInstanceResponse({}));
  }

  async renewARMServerInstance(request: RenewARMServerInstanceRequest): Promise<RenewARMServerInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewARMServerInstanceWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async rescaleApplicationWithOptions(request: RescaleApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.rescaleLevel)) {
      query["RescaleLevel"] = request.rescaleLevel;
    }

    if (!Util.isUnset(request.rescaleType)) {
      query["RescaleType"] = request.rescaleType;
    }

    if (!Util.isUnset(request.resourceSelector)) {
      query["ResourceSelector"] = request.resourceSelector;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.toAppVersion)) {
      query["ToAppVersion"] = request.toAppVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RescaleApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RescaleApplicationResponse>(await this.callApi(params, req, runtime), new RescaleApplicationResponse({}));
  }

  async rescaleApplication(request: RescaleApplicationRequest): Promise<RescaleApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rescaleApplicationWithOptions(request, runtime);
  }

  async rescaleDeviceServiceWithOptions(request: RescaleDeviceServiceRequest, runtime: $Util.RuntimeOptions): Promise<RescaleDeviceServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!Util.isUnset(request.rescaleLevel)) {
      query["RescaleLevel"] = request.rescaleLevel;
    }

    if (!Util.isUnset(request.rescaleType)) {
      query["RescaleType"] = request.rescaleType;
    }

    if (!Util.isUnset(request.resourceSpec)) {
      query["ResourceSpec"] = request.resourceSpec;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceInfo)) {
      body["ResourceInfo"] = request.resourceInfo;
    }

    if (!Util.isUnset(request.resourceSelector)) {
      body["ResourceSelector"] = request.resourceSelector;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RescaleDeviceService",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RescaleDeviceServiceResponse>(await this.callApi(params, req, runtime), new RescaleDeviceServiceResponse({}));
  }

  async rescaleDeviceService(request: RescaleDeviceServiceRequest): Promise<RescaleDeviceServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rescaleDeviceServiceWithOptions(request, runtime);
  }

  async resetDeviceInstanceWithOptions(request: ResetDeviceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ResetDeviceInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDeviceInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDeviceInstanceResponse>(await this.callApi(params, req, runtime), new ResetDeviceInstanceResponse({}));
  }

  async resetDeviceInstance(request: ResetDeviceInstanceRequest): Promise<ResetDeviceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDeviceInstanceWithOptions(request, runtime);
  }

  async restartDeviceInstanceWithOptions(request: RestartDeviceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDeviceInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDeviceInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDeviceInstanceResponse>(await this.callApi(params, req, runtime), new RestartDeviceInstanceResponse({}));
  }

  async restartDeviceInstance(request: RestartDeviceInstanceRequest): Promise<RestartDeviceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDeviceInstanceWithOptions(request, runtime);
  }

  async revokeSecurityGroupWithOptions(request: RevokeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeSecurityGroup",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeSecurityGroupResponse>(await this.callApi(params, req, runtime), new RevokeSecurityGroupResponse({}));
  }

  async revokeSecurityGroup(request: RevokeSecurityGroupRequest): Promise<RevokeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupWithOptions(request, runtime);
  }

  async revokeSecurityGroupEgressWithOptions(request: RevokeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destCidrIp)) {
      query["DestCidrIp"] = request.destCidrIp;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeSecurityGroupEgress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeSecurityGroupEgressResponse>(await this.callApi(params, req, runtime), new RevokeSecurityGroupEgressResponse({}));
  }

  async revokeSecurityGroupEgress(request: RevokeSecurityGroupEgressRequest): Promise<RevokeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupEgressWithOptions(request, runtime);
  }

  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.fromAppVersion)) {
      query["FromAppVersion"] = request.fromAppVersion;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.toAppVersion)) {
      query["ToAppVersion"] = request.toAppVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackApplicationResponse>(await this.callApi(params, req, runtime), new RollbackApplicationResponse({}));
  }

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackApplicationWithOptions(request, runtime);
  }

  async runInstancesWithOptions(tmpReq: RunInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RunInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new RunInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataDisk)) {
      request.dataDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataDisk, "DataDisk", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.systemDisk))) {
      request.systemDiskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.systemDisk), "SystemDisk", "json");
    }

    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.carrier)) {
      query["Carrier"] = request.carrier;
    }

    if (!Util.isUnset(request.dataDiskShrink)) {
      query["DataDisk"] = request.dataDiskShrink;
    }

    if (!Util.isUnset(request.ensRegionId)) {
      query["EnsRegionId"] = request.ensRegionId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.netDistrictCode)) {
      query["NetDistrictCode"] = request.netDistrictCode;
    }

    if (!Util.isUnset(request.netWorkId)) {
      query["NetWorkId"] = request.netWorkId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.publicIpIdentification)) {
      query["PublicIpIdentification"] = request.publicIpIdentification;
    }

    if (!Util.isUnset(request.scheduleAreaLevel)) {
      query["ScheduleAreaLevel"] = request.scheduleAreaLevel;
    }

    if (!Util.isUnset(request.schedulingPriceStrategy)) {
      query["SchedulingPriceStrategy"] = request.schedulingPriceStrategy;
    }

    if (!Util.isUnset(request.schedulingStrategy)) {
      query["SchedulingStrategy"] = request.schedulingStrategy;
    }

    if (!Util.isUnset(request.securityId)) {
      query["SecurityId"] = request.securityId;
    }

    if (!Util.isUnset(request.systemDiskShrink)) {
      query["SystemDisk"] = request.systemDiskShrink;
    }

    if (!Util.isUnset(request.uniqueSuffix)) {
      query["UniqueSuffix"] = request.uniqueSuffix;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunInstances",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunInstancesResponse>(await this.callApi(params, req, runtime), new RunInstancesResponse({}));
  }

  async runInstances(request: RunInstancesRequest): Promise<RunInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runInstancesWithOptions(request, runtime);
  }

  async runServiceScheduleWithOptions(request: RunServiceScheduleRequest, runtime: $Util.RuntimeOptions): Promise<RunServiceScheduleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.directorys)) {
      query["Directorys"] = request.directorys;
    }

    if (!Util.isUnset(request.podConfigName)) {
      query["PodConfigName"] = request.podConfigName;
    }

    if (!Util.isUnset(request.preLockedTimeout)) {
      query["PreLockedTimeout"] = request.preLockedTimeout;
    }

    if (!Util.isUnset(request.scheduleStrategy)) {
      query["ScheduleStrategy"] = request.scheduleStrategy;
    }

    if (!Util.isUnset(request.serviceAction)) {
      query["ServiceAction"] = request.serviceAction;
    }

    if (!Util.isUnset(request.serviceCommands)) {
      query["ServiceCommands"] = request.serviceCommands;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunServiceSchedule",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunServiceScheduleResponse>(await this.callApi(params, req, runtime), new RunServiceScheduleResponse({}));
  }

  async runServiceSchedule(request: RunServiceScheduleRequest): Promise<RunServiceScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runServiceScheduleWithOptions(request, runtime);
  }

  async setBackendServersWithOptions(tmpReq: SetBackendServersRequest, runtime: $Util.RuntimeOptions): Promise<SetBackendServersResponse> {
    Util.validateModel(tmpReq);
    let request = new SetBackendServersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.backendServers)) {
      request.backendServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backendServers, "BackendServers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.backendServersShrink)) {
      query["BackendServers"] = request.backendServersShrink;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetBackendServers",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetBackendServersResponse>(await this.callApi(params, req, runtime), new SetBackendServersResponse({}));
  }

  async setBackendServers(request: SetBackendServersRequest): Promise<SetBackendServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackendServersWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPListenerAttributeWithOptions(request: SetLoadBalancerHTTPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPListenerAttribute(request: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerHTTPSListenerAttributeWithOptions(request: SetLoadBalancerHTTPSListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckMethod)) {
      query["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!Util.isUnset(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverCertificateId)) {
      query["ServerCertificateId"] = request.serverCertificateId;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerHTTPSListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerHTTPSListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerHTTPSListenerAttributeResponse({}));
  }

  async setLoadBalancerHTTPSListenerAttribute(request: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPSListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerStatusWithOptions(request: SetLoadBalancerStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerStatus",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerStatusResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerStatusResponse({}));
  }

  async setLoadBalancerStatus(request: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  async setLoadBalancerTCPListenerAttributeWithOptions(request: SetLoadBalancerTCPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
    }

    if (!Util.isUnset(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!Util.isUnset(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  async setLoadBalancerTCPListenerAttribute(request: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  async setLoadBalancerUDPListenerAttributeWithOptions(request: SetLoadBalancerUDPListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eipTransmit)) {
      query["EipTransmit"] = request.eipTransmit;
    }

    if (!Util.isUnset(request.healthCheckConnectPort)) {
      query["HealthCheckConnectPort"] = request.healthCheckConnectPort;
    }

    if (!Util.isUnset(request.healthCheckConnectTimeout)) {
      query["HealthCheckConnectTimeout"] = request.healthCheckConnectTimeout;
    }

    if (!Util.isUnset(request.healthCheckExp)) {
      query["HealthCheckExp"] = request.healthCheckExp;
    }

    if (!Util.isUnset(request.healthCheckInterval)) {
      query["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!Util.isUnset(request.healthCheckReq)) {
      query["HealthCheckReq"] = request.healthCheckReq;
    }

    if (!Util.isUnset(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoadBalancerUDPListenerAttribute",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoadBalancerUDPListenerAttributeResponse>(await this.callApi(params, req, runtime), new SetLoadBalancerUDPListenerAttributeResponse({}));
  }

  async setLoadBalancerUDPListenerAttribute(request: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoadBalancerUDPListenerAttributeWithOptions(request, runtime);
  }

  async startEpnInstanceWithOptions(request: StartEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartEpnInstanceResponse>(await this.callApi(params, req, runtime), new StartEpnInstanceResponse({}));
  }

  async startEpnInstance(request: StartEpnInstanceRequest): Promise<StartEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEpnInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async startLoadBalancerListenerWithOptions(request: StartLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartLoadBalancerListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StartLoadBalancerListenerResponse({}));
  }

  async startLoadBalancerListener(request: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoadBalancerListenerWithOptions(request, runtime);
  }

  async stopEpnInstanceWithOptions(request: StopEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopEpnInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.EPNInstanceId)) {
      query["EPNInstanceId"] = request.EPNInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopEpnInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopEpnInstanceResponse>(await this.callApi(params, req, runtime), new StopEpnInstanceResponse({}));
  }

  async stopEpnInstance(request: StopEpnInstanceRequest): Promise<StopEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEpnInstanceWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async stopLoadBalancerListenerWithOptions(request: StopLoadBalancerListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopLoadBalancerListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopLoadBalancerListener",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new StopLoadBalancerListenerResponse({}));
  }

  async stopLoadBalancerListener(request: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoadBalancerListenerWithOptions(request, runtime);
  }

  async unAssociateEnsEipAddressWithOptions(request: UnAssociateEnsEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnAssociateEnsEipAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allocationId)) {
      query["AllocationId"] = request.allocationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnAssociateEnsEipAddress",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnAssociateEnsEipAddressResponse>(await this.callApi(params, req, runtime), new UnAssociateEnsEipAddressResponse({}));
  }

  async unAssociateEnsEipAddress(request: UnAssociateEnsEipAddressRequest): Promise<UnAssociateEnsEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unAssociateEnsEipAddressWithOptions(request, runtime);
  }

  async unassignPrivateIpAddressesWithOptions(request: UnassignPrivateIpAddressesRequest, runtime: $Util.RuntimeOptions): Promise<UnassignPrivateIpAddressesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkInterfaceId)) {
      query["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnassignPrivateIpAddresses",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnassignPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new UnassignPrivateIpAddressesResponse({}));
  }

  async unassignPrivateIpAddresses(request: UnassignPrivateIpAddressesRequest): Promise<UnassignPrivateIpAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassignPrivateIpAddressesWithOptions(request, runtime);
  }

  async upgradeApplicationWithOptions(request: UpgradeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.template)) {
      query["Template"] = request.template;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeApplication",
      version: "2017-11-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeApplicationResponse>(await this.callApi(params, req, runtime), new UpgradeApplicationResponse({}));
  }

  async upgradeApplication(request: UpgradeApplicationRequest): Promise<UpgradeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeApplicationWithOptions(request, runtime);
  }

}
