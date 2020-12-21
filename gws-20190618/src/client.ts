// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SetClusterDnatRequest extends $tea.Model {
  clusterId: string;
  natId: string;
  natEip?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      natId: 'NatId',
      natEip: 'NatEip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      natId: 'string',
      natEip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterDnatResponse extends $tea.Model {
  requestId: string;
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

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  requestId: string;
  alreadyExists: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alreadyExists: 'AlreadyExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alreadyExists: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionsRequest extends $tea.Model {
  clusterId: string;
  startTime: string;
  endTime: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionsResponse extends $tea.Model {
  requestId: string;
  taskFinished: boolean;
  taskId: string;
  totalCount: number;
  connections: DescribeClusterConnectionsResponseConnections[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskFinished: 'TaskFinished',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskFinished: 'boolean',
      taskId: 'string',
      totalCount: 'number',
      connections: { 'type': 'array', 'itemType': DescribeClusterConnectionsResponseConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterADDomainRequest extends $tea.Model {
  clusterId: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterADDomainResponse extends $tea.Model {
  requestId: string;
  isSupported: boolean;
  taskFinished: boolean;
  taskId: string;
  domainName: string;
  domainDnsIp: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSupported: 'IsSupported',
      taskFinished: 'TaskFinished',
      taskId: 'TaskId',
      domainName: 'DomainName',
      domainDnsIp: 'DomainDnsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSupported: 'boolean',
      taskFinished: 'boolean',
      taskId: 'string',
      domainName: 'string',
      domainDnsIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterADDomainRequest extends $tea.Model {
  clusterId: string;
  domainDnsIp: string;
  domainName: string;
  domainPassword: string;
  domainAdmin?: string;
  domainDelete?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      domainDnsIp: 'DomainDnsIp',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainAdmin: 'DomainAdmin',
      domainDelete: 'DomainDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      domainDnsIp: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainAdmin: 'string',
      domainDelete: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterADDomainResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePolicyRequest extends $tea.Model {
  instanceId: string;
  taskId?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePolicyResponse extends $tea.Model {
  requestId: string;
  visualLossless: string;
  optimizeFor3d: string;
  taskId: string;
  taskFinished: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      visualLossless: 'VisualLossless',
      optimizeFor3d: 'OptimizeFor3d',
      taskId: 'TaskId',
      taskFinished: 'TaskFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      visualLossless: 'string',
      optimizeFor3d: 'string',
      taskId: 'string',
      taskFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancePolicyRequest extends $tea.Model {
  instanceId: string;
  visualLossless?: string;
  optimizeFor3d?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      visualLossless: 'VisualLossless',
      optimizeFor3d: 'OptimizeFor3d',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      visualLossless: 'string',
      optimizeFor3d: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancePolicyResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  requestId: string;
  availableResources: DescribeAvailableResourceResponseAvailableResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableResources: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseAvailableResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterPolicyRequest extends $tea.Model {
  clusterId: string;
  usbRedirect: string;
  watermark: string;
  localDrive: string;
  clipboard: string;
  udpPort?: string;
  domainList?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      localDrive: 'LocalDrive',
      clipboard: 'Clipboard',
      udpPort: 'UdpPort',
      domainList: 'DomainList',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      localDrive: 'string',
      clipboard: 'string',
      udpPort: 'string',
      domainList: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterPolicyResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPolicyRequest extends $tea.Model {
  taskId?: string;
  asyncMode?: boolean;
  clusterId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      asyncMode: 'AsyncMode',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      asyncMode: 'boolean',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPolicyResponse extends $tea.Model {
  requestId: string;
  usbRedirect: string;
  watermark: string;
  localDrive: string;
  clipboard: string;
  udpPort: string;
  domainList: string;
  taskId: string;
  taskFinished: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      localDrive: 'LocalDrive',
      clipboard: 'Clipboard',
      udpPort: 'UdpPort',
      domainList: 'DomainList',
      taskId: 'TaskId',
      taskFinished: 'TaskFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      localDrive: 'string',
      clipboard: 'string',
      udpPort: 'string',
      domainList: 'string',
      taskId: 'string',
      taskFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceNameRequest extends $tea.Model {
  instanceId: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceNameResponse extends $tea.Model {
  requestId: string;
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

export class SetImageNameRequest extends $tea.Model {
  imageId: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetImageNameResponse extends $tea.Model {
  requestId: string;
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

export class SetClusterNameRequest extends $tea.Model {
  clusterId: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterNameResponse extends $tea.Model {
  requestId: string;
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

export class StopInstanceRequest extends $tea.Model {
  instanceId: string;
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

export class StopInstanceResponse extends $tea.Model {
  requestId: string;
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

export class StartInstanceRequest extends $tea.Model {
  instanceId: string;
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

export class StartInstanceResponse extends $tea.Model {
  requestId: string;
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

export class SetInstanceUserRequest extends $tea.Model {
  instanceId: string;
  userUid: number;
  userName: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userUid: 'UserUid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userUid: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceUserResponse extends $tea.Model {
  requestId: string;
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

export class RestartInstanceRequest extends $tea.Model {
  instanceId: string;
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

export class RestartInstanceResponse extends $tea.Model {
  requestId: string;
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

export class IsUserAdminRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsUserAdminResponse extends $tea.Model {
  requestId: string;
  isAdmin: boolean;
  isAllow: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isAdmin: 'IsAdmin',
      isAllow: 'IsAllow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isAdmin: 'boolean',
      isAllow: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectTicketRequest extends $tea.Model {
  instanceId: string;
  appName?: string;
  userName?: string;
  password?: string;
  taskId?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      appName: 'AppName',
      userName: 'UserName',
      password: 'Password',
      taskId: 'TaskId',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      appName: 'string',
      userName: 'string',
      password: 'string',
      taskId: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectTicketResponse extends $tea.Model {
  requestId: string;
  ticket: string;
  taskId: string;
  taskFinished: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ticket: 'Ticket',
      taskId: 'TaskId',
      taskFinished: 'TaskFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ticket: 'string',
      taskId: 'string',
      taskFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  clusterId?: string;
  instanceId?: string;
  userUid?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      userUid: 'UserUid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      clusterId: 'string',
      instanceId: 'string',
      userUid: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instances: DescribeInstancesResponseInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  images: DescribeImagesResponseImages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      images: { 'type': 'array', 'itemType': DescribeImagesResponseImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  clusters: DescribeClustersResponseClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      clusters: { 'type': 'array', 'itemType': DescribeClustersResponseClusters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId: string;
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

export class DeleteInstanceResponse extends $tea.Model {
  requestId: string;
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

export class DeleteImageRequest extends $tea.Model {
  imageId: string;
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

export class DeleteImageResponse extends $tea.Model {
  requestId: string;
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

export class DeleteClusterRequest extends $tea.Model {
  clusterId: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  requestId: string;
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

export class CreateInstanceRequest extends $tea.Model {
  clusterId: string;
  vSwitchId?: string;
  name?: string;
  imageId: string;
  systemDiskSize: number;
  systemDiskCategory: string;
  allocatePublicAddress?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  instanceType: string;
  instanceChargeType?: string;
  autoRenew?: string;
  period?: number;
  periodUnit?: string;
  workMode: string;
  appList?: CreateInstanceRequestAppList[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      vSwitchId: 'VSwitchId',
      name: 'Name',
      imageId: 'ImageId',
      systemDiskSize: 'SystemDiskSize',
      systemDiskCategory: 'SystemDiskCategory',
      allocatePublicAddress: 'AllocatePublicAddress',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      instanceType: 'InstanceType',
      instanceChargeType: 'InstanceChargeType',
      autoRenew: 'AutoRenew',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      workMode: 'WorkMode',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      vSwitchId: 'string',
      name: 'string',
      imageId: 'string',
      systemDiskSize: 'number',
      systemDiskCategory: 'string',
      allocatePublicAddress: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      instanceType: 'string',
      instanceChargeType: 'string',
      autoRenew: 'string',
      period: 'number',
      periodUnit: 'string',
      workMode: 'string',
      appList: { 'type': 'array', 'itemType': CreateInstanceRequestAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  instanceId: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  requestId: string;
  imageId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  vpcId: string;
  clusterType: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      clusterType: 'ClusterType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      clusterType: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  requestId: string;
  clusterId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionsResponseConnections extends $tea.Model {
  instanceId: string;
  instanceName: string;
  hostName: string;
  clientName: string;
  logonTime: string;
  logoffTime: string;
  logoffStatus: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      clientName: 'ClientName',
      logonTime: 'LogonTime',
      logoffTime: 'LogoffTime',
      logoffStatus: 'LogoffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      hostName: 'string',
      clientName: 'string',
      logonTime: 'string',
      logoffTime: 'string',
      logoffStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableResources extends $tea.Model {
  clusterType: string;
  zone: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesAppList extends $tea.Model {
  appName: string;
  appPath: string;
  appArgs: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appPath: 'AppPath',
      appArgs: 'AppArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appPath: 'string',
      appArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstances extends $tea.Model {
  instanceId: string;
  name: string;
  clusterId: string;
  status: string;
  workMode: string;
  stoppedMode: string;
  imageId: string;
  instanceChargeType: string;
  instanceType: string;
  createTime: string;
  expireTime: string;
  userUid: number;
  userName: string;
  domainName: string;
  maxBandwidthIn: number;
  maxBandwidthOut: number;
  isBoundUser: boolean;
  appList: DescribeInstancesResponseInstancesAppList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      clusterId: 'ClusterId',
      status: 'Status',
      workMode: 'WorkMode',
      stoppedMode: 'StoppedMode',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      userUid: 'UserUid',
      userName: 'UserName',
      domainName: 'DomainName',
      maxBandwidthIn: 'MaxBandwidthIn',
      maxBandwidthOut: 'MaxBandwidthOut',
      isBoundUser: 'IsBoundUser',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      clusterId: 'string',
      status: 'string',
      workMode: 'string',
      stoppedMode: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      createTime: 'string',
      expireTime: 'string',
      userUid: 'number',
      userName: 'string',
      domainName: 'string',
      maxBandwidthIn: 'number',
      maxBandwidthOut: 'number',
      isBoundUser: 'boolean',
      appList: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesAppList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImages extends $tea.Model {
  imageId: string;
  name: string;
  size: number;
  status: string;
  createTime: string;
  progress: string;
  imageType: string;
  productCode: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      size: 'Size',
      status: 'Status',
      createTime: 'CreateTime',
      progress: 'Progress',
      imageType: 'ImageType',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      size: 'number',
      status: 'string',
      createTime: 'string',
      progress: 'string',
      imageType: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseClusters extends $tea.Model {
  clusterId: string;
  name: string;
  status: string;
  vpcId: string;
  createTime: string;
  securityGroup: string;
  domainName: string;
  natId: string;
  natEip: string;
  instanceCount: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      status: 'Status',
      vpcId: 'VpcId',
      createTime: 'CreateTime',
      securityGroup: 'SecurityGroup',
      domainName: 'DomainName',
      natId: 'NatId',
      natEip: 'NatEip',
      instanceCount: 'InstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      status: 'string',
      vpcId: 'string',
      createTime: 'string',
      securityGroup: 'string',
      domainName: 'string',
      natId: 'string',
      natEip: 'string',
      instanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestAppList extends $tea.Model {
  appName?: string;
  appPath?: string;
  appArgs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appPath: 'AppPath',
      appArgs: 'AppArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appPath: 'string',
      appArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-southeast-3': "gws.ap-northeast-3.aliyuncs.com",
      'cn-hangzhou-finance': "ecd.cn-hangzhou-finance.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gws", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async setClusterDnatWithOptions(request: SetClusterDnatRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterDnatResponse> {
    Util.validateModel(request);
    return $tea.cast<SetClusterDnatResponse>(await this.doRequest("SetClusterDnat", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetClusterDnatResponse({}));
  }

  async setClusterDnat(request: SetClusterDnatRequest): Promise<SetClusterDnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterDnatWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRequest("CreateServiceLinkedRole", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async describeClusterConnectionsWithOptions(request: DescribeClusterConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterConnectionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClusterConnectionsResponse>(await this.doRequest("DescribeClusterConnections", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeClusterConnectionsResponse({}));
  }

  async describeClusterConnections(request: DescribeClusterConnectionsRequest): Promise<DescribeClusterConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterConnectionsWithOptions(request, runtime);
  }

  async describeClusterADDomainWithOptions(request: DescribeClusterADDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterADDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClusterADDomainResponse>(await this.doRequest("DescribeClusterADDomain", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeClusterADDomainResponse({}));
  }

  async describeClusterADDomain(request: DescribeClusterADDomainRequest): Promise<DescribeClusterADDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterADDomainWithOptions(request, runtime);
  }

  async setClusterADDomainWithOptions(request: SetClusterADDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterADDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<SetClusterADDomainResponse>(await this.doRequest("SetClusterADDomain", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetClusterADDomainResponse({}));
  }

  async setClusterADDomain(request: SetClusterADDomainRequest): Promise<SetClusterADDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterADDomainWithOptions(request, runtime);
  }

  async describeInstancePolicyWithOptions(request: DescribeInstancePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancePolicyResponse>(await this.doRequest("DescribeInstancePolicy", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeInstancePolicyResponse({}));
  }

  async describeInstancePolicy(request: DescribeInstancePolicyRequest): Promise<DescribeInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePolicyWithOptions(request, runtime);
  }

  async setInstancePolicyWithOptions(request: SetInstancePolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetInstancePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<SetInstancePolicyResponse>(await this.doRequest("SetInstancePolicy", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetInstancePolicyResponse({}));
  }

  async setInstancePolicy(request: SetInstancePolicyRequest): Promise<SetInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstancePolicyWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRequest("DescribeAvailableResource", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async setClusterPolicyWithOptions(request: SetClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<SetClusterPolicyResponse>(await this.doRequest("SetClusterPolicy", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetClusterPolicyResponse({}));
  }

  async setClusterPolicy(request: SetClusterPolicyRequest): Promise<SetClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterPolicyWithOptions(request, runtime);
  }

  async describeClusterPolicyWithOptions(request: DescribeClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClusterPolicyResponse>(await this.doRequest("DescribeClusterPolicy", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeClusterPolicyResponse({}));
  }

  async describeClusterPolicy(request: DescribeClusterPolicyRequest): Promise<DescribeClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterPolicyWithOptions(request, runtime);
  }

  async setInstanceNameWithOptions(request: SetInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceNameResponse> {
    Util.validateModel(request);
    return $tea.cast<SetInstanceNameResponse>(await this.doRequest("SetInstanceName", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetInstanceNameResponse({}));
  }

  async setInstanceName(request: SetInstanceNameRequest): Promise<SetInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceNameWithOptions(request, runtime);
  }

  async setImageNameWithOptions(request: SetImageNameRequest, runtime: $Util.RuntimeOptions): Promise<SetImageNameResponse> {
    Util.validateModel(request);
    return $tea.cast<SetImageNameResponse>(await this.doRequest("SetImageName", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetImageNameResponse({}));
  }

  async setImageName(request: SetImageNameRequest): Promise<SetImageNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setImageNameWithOptions(request, runtime);
  }

  async setClusterNameWithOptions(request: SetClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterNameResponse> {
    Util.validateModel(request);
    return $tea.cast<SetClusterNameResponse>(await this.doRequest("SetClusterName", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetClusterNameResponse({}));
  }

  async setClusterName(request: SetClusterNameRequest): Promise<SetClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterNameWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInstanceResponse>(await this.doRequest("StopInstance", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StartInstanceResponse>(await this.doRequest("StartInstance", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async setInstanceUserWithOptions(request: SetInstanceUserRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceUserResponse> {
    Util.validateModel(request);
    return $tea.cast<SetInstanceUserResponse>(await this.doRequest("SetInstanceUser", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new SetInstanceUserResponse({}));
  }

  async setInstanceUser(request: SetInstanceUserRequest): Promise<SetInstanceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceUserWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RestartInstanceResponse>(await this.doRequest("RestartInstance", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async isUserAdminWithOptions(request: IsUserAdminRequest, runtime: $Util.RuntimeOptions): Promise<IsUserAdminResponse> {
    Util.validateModel(request);
    return $tea.cast<IsUserAdminResponse>(await this.doRequest("IsUserAdmin", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new IsUserAdminResponse({}));
  }

  async isUserAdmin(request: IsUserAdminRequest): Promise<IsUserAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isUserAdminWithOptions(request, runtime);
  }

  async getConnectTicketWithOptions(request: GetConnectTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectTicketResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConnectTicketResponse>(await this.doRequest("GetConnectTicket", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new GetConnectTicketResponse({}));
  }

  async getConnectTicket(request: GetConnectTicketRequest): Promise<GetConnectTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectTicketWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancesResponse>(await this.doRequest("DescribeInstances", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImagesResponse>(await this.doRequest("DescribeImages", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClustersResponse>(await this.doRequest("DescribeClusters", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DescribeClustersResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteInstanceResponse>(await this.doRequest("DeleteInstance", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteImageResponse>(await this.doRequest("DeleteImage", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteClusterResponse>(await this.doRequest("DeleteCluster", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateInstanceResponse>(await this.doRequest("CreateInstance", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateImageResponse>(await this.doRequest("CreateImage", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateClusterResponse>(await this.doRequest("CreateCluster", "HTTPS", "POST", "2019-06-18", "AK", null, $tea.toMap(request), runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
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

}
