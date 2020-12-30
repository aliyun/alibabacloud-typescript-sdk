// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateClusterRequest extends $tea.Model {
  vpcId?: string;
  clusterType?: string;
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

export class CreateClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
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

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  instanceId?: string;
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

export class CreateImageResponseBody extends $tea.Model {
  requestId?: string;
  imageId?: string;
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

export class CreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  clusterId?: string;
  vSwitchId?: string;
  name?: string;
  imageId?: string;
  systemDiskSize?: number;
  systemDiskCategory?: string;
  allocatePublicAddress?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  instanceType?: string;
  instanceChargeType?: string;
  autoRenew?: string;
  period?: number;
  periodUnit?: string;
  workMode?: string;
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

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
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

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
  requestId?: string;
  alreadyExists?: boolean;
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
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

export class DeleteClusterResponseBody extends $tea.Model {
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

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterResponseBody,
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

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
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

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  availableResources?: DescribeAvailableResourceResponseBodyAvailableResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableResources: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterADDomainRequest extends $tea.Model {
  clusterId?: string;
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

export class DescribeClusterADDomainResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  domainName?: string;
  taskFinished?: boolean;
  isSupported?: boolean;
  domainDnsIp?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      domainName: 'DomainName',
      taskFinished: 'TaskFinished',
      isSupported: 'IsSupported',
      domainDnsIp: 'DomainDnsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      domainName: 'string',
      taskFinished: 'boolean',
      isSupported: 'boolean',
      domainDnsIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterADDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterADDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterADDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionsRequest extends $tea.Model {
  clusterId?: string;
  startTime?: string;
  endTime?: string;
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

export class DescribeClusterConnectionsResponseBody extends $tea.Model {
  connections?: DescribeClusterConnectionsResponseBodyConnections[];
  totalCount?: number;
  taskId?: string;
  requestId?: string;
  taskFinished?: boolean;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      totalCount: 'TotalCount',
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskFinished: 'TaskFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': DescribeClusterConnectionsResponseBodyConnections },
      totalCount: 'number',
      taskId: 'string',
      requestId: 'string',
      taskFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPolicyRequest extends $tea.Model {
  taskId?: string;
  asyncMode?: boolean;
  clusterId?: string;
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

export class DescribeClusterPolicyResponseBody extends $tea.Model {
  taskId?: string;
  udpPort?: string;
  requestId?: string;
  localDrive?: string;
  usbRedirect?: string;
  taskFinished?: boolean;
  clipboard?: string;
  domainList?: string;
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      udpPort: 'UdpPort',
      requestId: 'RequestId',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      taskFinished: 'TaskFinished',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      udpPort: 'string',
      requestId: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      taskFinished: 'boolean',
      clipboard: 'string',
      domainList: 'string',
      watermark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterPolicyResponseBody,
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

export class DescribeClustersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: DescribeClustersResponseBodyClusters[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClusters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClustersResponseBody,
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

export class DescribeImagesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  images?: DescribeImagesResponseBodyImages[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePolicyRequest extends $tea.Model {
  instanceId?: string;
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

export class DescribeInstancePolicyResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskFinished?: boolean;
  visualLossless?: string;
  optimizeFor3d?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskFinished: 'TaskFinished',
      visualLossless: 'VisualLossless',
      optimizeFor3d: 'OptimizeFor3d',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskFinished: 'boolean',
      visualLossless: 'string',
      optimizeFor3d: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancePolicyResponseBody,
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

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectTicketRequest extends $tea.Model {
  instanceId?: string;
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

export class GetConnectTicketResponseBody extends $tea.Model {
  ticket?: string;
  taskId?: string;
  requestId?: string;
  taskFinished?: boolean;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskFinished: 'TaskFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      taskId: 'string',
      requestId: 'string',
      taskFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConnectTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConnectTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsUserAdminResponseBody extends $tea.Model {
  isAdmin?: boolean;
  requestId?: string;
  isAllow?: boolean;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      requestId: 'RequestId',
      isAllow: 'IsAllow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      requestId: 'string',
      isAllow: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsUserAdminResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IsUserAdminResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IsUserAdminResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
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

export class RestartInstanceResponseBody extends $tea.Model {
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

export class RestartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterADDomainRequest extends $tea.Model {
  clusterId?: string;
  domainDnsIp?: string;
  domainName?: string;
  domainPassword?: string;
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

export class SetClusterADDomainResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterADDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetClusterADDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetClusterADDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterDnatRequest extends $tea.Model {
  clusterId?: string;
  natId?: string;
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

export class SetClusterDnatResponseBody extends $tea.Model {
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

export class SetClusterDnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetClusterDnatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetClusterDnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterNameRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
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

export class SetClusterNameResponseBody extends $tea.Model {
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

export class SetClusterNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterPolicyRequest extends $tea.Model {
  clusterId?: string;
  usbRedirect?: string;
  watermark?: string;
  localDrive?: string;
  clipboard?: string;
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

export class SetClusterPolicyResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetClusterPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetImageNameRequest extends $tea.Model {
  imageId?: string;
  name?: string;
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

export class SetImageNameResponseBody extends $tea.Model {
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

export class SetImageNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetImageNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetImageNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceNameRequest extends $tea.Model {
  instanceId?: string;
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

export class SetInstanceNameResponseBody extends $tea.Model {
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

export class SetInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancePolicyRequest extends $tea.Model {
  instanceId?: string;
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

export class SetInstancePolicyResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetInstancePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstancePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceUserRequest extends $tea.Model {
  instanceId?: string;
  userUid?: number;
  userName?: string;
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

export class SetInstanceUserResponseBody extends $tea.Model {
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

export class SetInstanceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetInstanceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstanceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
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

export class StartInstanceResponseBody extends $tea.Model {
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

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
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

export class StopInstanceResponseBody extends $tea.Model {
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

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInstanceResponseBody,
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

export class DescribeAvailableResourceResponseBodyAvailableResources extends $tea.Model {
  clusterType?: string;
  zone?: string;
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

export class DescribeClusterConnectionsResponseBodyConnections extends $tea.Model {
  logoffStatus?: string;
  instanceName?: string;
  logonTime?: string;
  hostName?: string;
  logoffTime?: string;
  instanceId?: string;
  clientName?: string;
  static names(): { [key: string]: string } {
    return {
      logoffStatus: 'LogoffStatus',
      instanceName: 'InstanceName',
      logonTime: 'LogonTime',
      hostName: 'HostName',
      logoffTime: 'LogoffTime',
      instanceId: 'InstanceId',
      clientName: 'ClientName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoffStatus: 'string',
      instanceName: 'string',
      logonTime: 'string',
      hostName: 'string',
      logoffTime: 'string',
      instanceId: 'string',
      clientName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyClusters extends $tea.Model {
  vpcId?: string;
  status?: string;
  natId?: string;
  instanceCount?: number;
  createTime?: string;
  natEip?: string;
  securityGroup?: string;
  name?: string;
  domainName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      natId: 'NatId',
      instanceCount: 'InstanceCount',
      createTime: 'CreateTime',
      natEip: 'NatEip',
      securityGroup: 'SecurityGroup',
      name: 'Name',
      domainName: 'DomainName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      natId: 'string',
      instanceCount: 'number',
      createTime: 'string',
      natEip: 'string',
      securityGroup: 'string',
      name: 'string',
      domainName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  status?: string;
  imageType?: string;
  progress?: string;
  size?: number;
  createTime?: string;
  name?: string;
  imageId?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      imageType: 'ImageType',
      progress: 'Progress',
      size: 'Size',
      createTime: 'CreateTime',
      name: 'Name',
      imageId: 'ImageId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      imageType: 'string',
      progress: 'string',
      size: 'number',
      createTime: 'string',
      name: 'string',
      imageId: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesAppList extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  workMode?: string;
  expireTime?: string;
  createTime?: string;
  stoppedMode?: string;
  userUid?: number;
  instanceId?: string;
  instanceType?: string;
  domainName?: string;
  instanceChargeType?: string;
  appList?: DescribeInstancesResponseBodyInstancesAppList[];
  maxBandwidthIn?: number;
  isBoundUser?: boolean;
  maxBandwidthOut?: number;
  name?: string;
  userName?: string;
  imageId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      workMode: 'WorkMode',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      stoppedMode: 'StoppedMode',
      userUid: 'UserUid',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      domainName: 'DomainName',
      instanceChargeType: 'InstanceChargeType',
      appList: 'AppList',
      maxBandwidthIn: 'MaxBandwidthIn',
      isBoundUser: 'IsBoundUser',
      maxBandwidthOut: 'MaxBandwidthOut',
      name: 'Name',
      userName: 'UserName',
      imageId: 'ImageId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      workMode: 'string',
      expireTime: 'string',
      createTime: 'string',
      stoppedMode: 'string',
      userUid: 'number',
      instanceId: 'string',
      instanceType: 'string',
      domainName: 'string',
      instanceChargeType: 'string',
      appList: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesAppList },
      maxBandwidthIn: 'number',
      isBoundUser: 'boolean',
      maxBandwidthOut: 'number',
      name: 'string',
      userName: 'string',
      imageId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-southeast-3': "gws.ap-northeast-3.aliyuncs.com",
      'cn-hangzhou-finance': "ecd.cn-hangzhou-finance.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gws", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterResponse>(await this.doRPCRequest("CreateCluster", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageResponse>(await this.doRPCRequest("CreateImage", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterResponse>(await this.doRPCRequest("DeleteCluster", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageResponse>(await this.doRPCRequest("DeleteImage", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(runtime);
  }

  async describeClusterADDomainWithOptions(request: DescribeClusterADDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterADDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterADDomainResponse>(await this.doRPCRequest("DescribeClusterADDomain", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterADDomainResponse({}));
  }

  async describeClusterADDomain(request: DescribeClusterADDomainRequest): Promise<DescribeClusterADDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterADDomainWithOptions(request, runtime);
  }

  async describeClusterConnectionsWithOptions(request: DescribeClusterConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterConnectionsResponse>(await this.doRPCRequest("DescribeClusterConnections", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterConnectionsResponse({}));
  }

  async describeClusterConnections(request: DescribeClusterConnectionsRequest): Promise<DescribeClusterConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterConnectionsWithOptions(request, runtime);
  }

  async describeClusterPolicyWithOptions(request: DescribeClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterPolicyResponse>(await this.doRPCRequest("DescribeClusterPolicy", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterPolicyResponse({}));
  }

  async describeClusterPolicy(request: DescribeClusterPolicyRequest): Promise<DescribeClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterPolicyWithOptions(request, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClustersResponse>(await this.doRPCRequest("DescribeClusters", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClustersResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImagesResponse>(await this.doRPCRequest("DescribeImages", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeInstancePolicyWithOptions(request: DescribeInstancePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancePolicyResponse>(await this.doRPCRequest("DescribeInstancePolicy", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancePolicyResponse({}));
  }

  async describeInstancePolicy(request: DescribeInstancePolicyRequest): Promise<DescribeInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePolicyWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async getConnectTicketWithOptions(request: GetConnectTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConnectTicketResponse>(await this.doRPCRequest("GetConnectTicket", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetConnectTicketResponse({}));
  }

  async getConnectTicket(request: GetConnectTicketRequest): Promise<GetConnectTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectTicketWithOptions(request, runtime);
  }

  async isUserAdminWithOptions(runtime: $Util.RuntimeOptions): Promise<IsUserAdminResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<IsUserAdminResponse>(await this.doRPCRequest("IsUserAdmin", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new IsUserAdminResponse({}));
  }

  async isUserAdmin(): Promise<IsUserAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.isUserAdminWithOptions(runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartInstanceResponse>(await this.doRPCRequest("RestartInstance", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async setClusterADDomainWithOptions(request: SetClusterADDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterADDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetClusterADDomainResponse>(await this.doRPCRequest("SetClusterADDomain", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetClusterADDomainResponse({}));
  }

  async setClusterADDomain(request: SetClusterADDomainRequest): Promise<SetClusterADDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterADDomainWithOptions(request, runtime);
  }

  async setClusterDnatWithOptions(request: SetClusterDnatRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterDnatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetClusterDnatResponse>(await this.doRPCRequest("SetClusterDnat", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetClusterDnatResponse({}));
  }

  async setClusterDnat(request: SetClusterDnatRequest): Promise<SetClusterDnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterDnatWithOptions(request, runtime);
  }

  async setClusterNameWithOptions(request: SetClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetClusterNameResponse>(await this.doRPCRequest("SetClusterName", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetClusterNameResponse({}));
  }

  async setClusterName(request: SetClusterNameRequest): Promise<SetClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterNameWithOptions(request, runtime);
  }

  async setClusterPolicyWithOptions(request: SetClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetClusterPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetClusterPolicyResponse>(await this.doRPCRequest("SetClusterPolicy", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetClusterPolicyResponse({}));
  }

  async setClusterPolicy(request: SetClusterPolicyRequest): Promise<SetClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setClusterPolicyWithOptions(request, runtime);
  }

  async setImageNameWithOptions(request: SetImageNameRequest, runtime: $Util.RuntimeOptions): Promise<SetImageNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetImageNameResponse>(await this.doRPCRequest("SetImageName", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetImageNameResponse({}));
  }

  async setImageName(request: SetImageNameRequest): Promise<SetImageNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setImageNameWithOptions(request, runtime);
  }

  async setInstanceNameWithOptions(request: SetInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstanceNameResponse>(await this.doRPCRequest("SetInstanceName", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstanceNameResponse({}));
  }

  async setInstanceName(request: SetInstanceNameRequest): Promise<SetInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceNameWithOptions(request, runtime);
  }

  async setInstancePolicyWithOptions(request: SetInstancePolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetInstancePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstancePolicyResponse>(await this.doRPCRequest("SetInstancePolicy", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstancePolicyResponse({}));
  }

  async setInstancePolicy(request: SetInstancePolicyRequest): Promise<SetInstancePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstancePolicyWithOptions(request, runtime);
  }

  async setInstanceUserWithOptions(request: SetInstanceUserRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstanceUserResponse>(await this.doRPCRequest("SetInstanceUser", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstanceUserResponse({}));
  }

  async setInstanceUser(request: SetInstanceUserRequest): Promise<SetInstanceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceUserWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopInstanceResponse>(await this.doRPCRequest("StopInstance", "2019-06-18", "HTTPS", "POST", "AK", "json", req, runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

}
