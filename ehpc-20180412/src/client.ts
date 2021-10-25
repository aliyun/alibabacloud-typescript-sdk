// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeJobRequest extends $tea.Model {
  clusterId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $tea.Model {
  requestId?: string;
  message?: DescribeJobResponseBodyMessage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: DescribeJobResponseBodyMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  clusterId?: string;
  repository?: string;
  imageTag?: string;
  containerType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      repository: 'Repository',
      imageTag: 'ImageTag',
      containerType: 'ContainerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      repository: 'string',
      imageTag: 'string',
      containerType: 'string',
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

export class DeleteGWSClusterRequest extends $tea.Model {
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

export class DeleteGWSClusterResponseBody extends $tea.Model {
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

export class DeleteGWSClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGWSClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGWSClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequest extends $tea.Model {
  clusterId?: string;
  user?: DeleteUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': DeleteUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponseBody extends $tea.Model {
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

export class DeleteUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $tea.Model {
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

export class DescribeClusterResponseBody extends $tea.Model {
  requestId?: string;
  clusterInfo?: DescribeClusterResponseBodyClusterInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterInfo: DescribeClusterResponseBodyClusterInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
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

export class ListUsersResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      users: ListUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppRequest extends $tea.Model {
  containerId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponseBody extends $tea.Model {
  requestId?: string;
  containerAppInfo?: DescribeContainerAppResponseBodyContainerAppInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      containerAppInfo: 'ContainerAppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      containerAppInfo: DescribeContainerAppResponseBodyContainerAppInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullImageRequest extends $tea.Model {
  clusterId?: string;
  repository?: string;
  imageTag?: string;
  containerType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      repository: 'Repository',
      imageTag: 'ImageTag',
      containerType: 'ContainerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      repository: 'string',
      imageTag: 'string',
      containerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullImageResponseBody extends $tea.Model {
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

export class PullImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PullImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PullImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequest extends $tea.Model {
  clusterId?: string;
  role?: string;
  instance?: StopNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      role: 'Role',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      role: 'string',
      instance: { 'type': 'array', 'itemType': StopNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponseBody extends $tea.Model {
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

export class StopNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueRequest extends $tea.Model {
  clusterId?: string;
  queueName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  nodes?: ListNodesByQueueResponseBodyNodes;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      nodes: ListNodesByQueueResponseBodyNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesByQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesByQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyContainerAppAttributesRequest extends $tea.Model {
  containerId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyContainerAppAttributesResponseBody extends $tea.Model {
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

export class ModifyContainerAppAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyContainerAppAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyContainerAppAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  pbsInfo?: SetSchedulerInfoRequestPbsInfo[];
  slurmInfo?: SetSchedulerInfoRequestSlurmInfo[];
  scheduler?: SetSchedulerInfoRequestScheduler[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      pbsInfo: 'PbsInfo',
      slurmInfo: 'SlurmInfo',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      pbsInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfo },
      slurmInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestSlurmInfo },
      scheduler: { 'type': 'array', 'itemType': SetSchedulerInfoRequestScheduler },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSchedulerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSchedulerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  profilingId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      profilingId: 'ProfilingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      profilingId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBody extends $tea.Model {
  requestId?: string;
  svgUrls?: GetCloudMetricProfilingResponseBodySvgUrls;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      svgUrls: 'SvgUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      svgUrls: GetCloudMetricProfilingResponseBodySvgUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCloudMetricProfilingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCloudMetricProfilingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceRequest extends $tea.Model {
  imageId?: string;
  priceUnit?: string;
  skuCode?: string;
  period?: number;
  amount?: number;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      priceUnit: 'PriceUnit',
      skuCode: 'SkuCode',
      period: 'Period',
      amount: 'Amount',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      priceUnit: 'string',
      skuCode: 'string',
      period: 'number',
      amount: 'number',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponseBody extends $tea.Model {
  amount?: number;
  requestId?: string;
  discountPrice?: number;
  tradePrice?: number;
  originalPrice?: number;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      requestId: 'RequestId',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      originalPrice: 'OriginalPrice',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      requestId: 'string',
      discountPrice: 'number',
      tradePrice: 'number',
      originalPrice: 'number',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImagePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGWSInstanceRequest extends $tea.Model {
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

export class StopGWSInstanceResponseBody extends $tea.Model {
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

export class StopGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigRequest extends $tea.Model {
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

export class GetAutoScaleConfigResponseBody extends $tea.Model {
  maxNodesInCluster?: number;
  growTimeoutInMinutes?: number;
  spotStrategy?: string;
  enableAutoShrink?: boolean;
  requestId?: string;
  enableAutoGrow?: boolean;
  clusterType?: string;
  excludeNodes?: string;
  shrinkIntervalInMinutes?: number;
  growIntervalInMinutes?: number;
  spotPriceLimit?: number;
  extraNodesGrowRatio?: number;
  shrinkIdleTimes?: number;
  imageId?: string;
  growRatio?: number;
  clusterId?: string;
  uid?: string;
  queues?: GetAutoScaleConfigResponseBodyQueues;
  static names(): { [key: string]: string } {
    return {
      maxNodesInCluster: 'MaxNodesInCluster',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      spotStrategy: 'SpotStrategy',
      enableAutoShrink: 'EnableAutoShrink',
      requestId: 'RequestId',
      enableAutoGrow: 'EnableAutoGrow',
      clusterType: 'ClusterType',
      excludeNodes: 'ExcludeNodes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      imageId: 'ImageId',
      growRatio: 'GrowRatio',
      clusterId: 'ClusterId',
      uid: 'Uid',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNodesInCluster: 'number',
      growTimeoutInMinutes: 'number',
      spotStrategy: 'string',
      enableAutoShrink: 'boolean',
      requestId: 'string',
      enableAutoGrow: 'boolean',
      clusterType: 'string',
      excludeNodes: 'string',
      shrinkIntervalInMinutes: 'number',
      growIntervalInMinutes: 'number',
      spotPriceLimit: 'number',
      extraNodesGrowRatio: 'number',
      shrinkIdleTimes: 'number',
      imageId: 'string',
      growRatio: 'number',
      clusterId: 'string',
      uid: 'string',
      queues: GetAutoScaleConfigResponseBodyQueues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  clusterId?: string;
  role?: string;
  hostName?: string;
  pageNumber?: number;
  pageSize?: number;
  sequence?: string;
  sortBy?: string;
  filter?: string;
  privateIpAddress?: string;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      role: 'Role',
      hostName: 'HostName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      filter: 'Filter',
      privateIpAddress: 'PrivateIpAddress',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      role: 'string',
      hostName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sequence: 'string',
      sortBy: 'string',
      filter: 'string',
      privateIpAddress: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  nodes?: ListNodesResponseBodyNodes;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      nodes: ListNodesResponseBodyNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  commands?: ListCommandsResponseBodyCommands;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      commands: ListCommandsResponseBodyCommands,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSImageRequest extends $tea.Model {
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

export class CreateGWSImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandRequest extends $tea.Model {
  clusterId?: string;
  command?: string;
  workingDir?: string;
  timeout?: number;
  instance?: InvokeShellCommandRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      command: 'Command',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      command: 'string',
      workingDir: 'string',
      timeout: 'number',
      instance: { 'type': 'array', 'itemType': InvokeShellCommandRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBody extends $tea.Model {
  commandId?: string;
  requestId?: string;
  instanceIds?: InvokeShellCommandResponseBodyInstanceIds;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      requestId: 'RequestId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      requestId: 'string',
      instanceIds: InvokeShellCommandResponseBodyInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeShellCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeShellCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  fileSystemList?: ListFileSystemWithMountTargetsResponseBodyFileSystemList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      fileSystemList: 'FileSystemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      fileSystemList: ListFileSystemWithMountTargetsResponseBodyFileSystemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFileSystemWithMountTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFileSystemWithMountTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesRequest extends $tea.Model {
  clusterId?: string;
  name?: string;
  description?: string;
  imageOwnerAlias?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      description: 'Description',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      description: 'string',
      imageOwnerAlias: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesResponseBody extends $tea.Model {
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

export class ModifyClusterAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesRequest extends $tea.Model {
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesResponseBody extends $tea.Model {
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

export class DeleteJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsRequest extends $tea.Model {
  clusterId?: string;
  from?: number;
  to?: number;
  reverse?: boolean;
  aggregationType?: string;
  aggregationInterval?: number;
  metricScope?: string;
  filter?: string;
  metricCategories?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      from: 'From',
      to: 'To',
      reverse: 'Reverse',
      aggregationType: 'AggregationType',
      aggregationInterval: 'AggregationInterval',
      metricScope: 'MetricScope',
      filter: 'Filter',
      metricCategories: 'MetricCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      from: 'number',
      to: 'number',
      reverse: 'boolean',
      aggregationType: 'string',
      aggregationInterval: 'number',
      metricScope: 'string',
      filter: 'string',
      metricCategories: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBody extends $tea.Model {
  requestId?: string;
  metricLogs?: GetCloudMetricLogsResponseBodyMetricLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metricLogs: 'MetricLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metricLogs: GetCloudMetricLogsResponseBodyMetricLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCloudMetricLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCloudMetricLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateRequest extends $tea.Model {
  commandLine?: string;
  name?: string;
  runasUser?: string;
  priority?: number;
  packagePath?: string;
  stdoutRedirectPath?: string;
  stderrRedirectPath?: string;
  reRunable?: boolean;
  arrayRequest?: string;
  variables?: string;
  queue?: string;
  clockTime?: string;
  node?: number;
  task?: number;
  thread?: number;
  mem?: string;
  gpu?: number;
  static names(): { [key: string]: string } {
    return {
      commandLine: 'CommandLine',
      name: 'Name',
      runasUser: 'RunasUser',
      priority: 'Priority',
      packagePath: 'PackagePath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      stderrRedirectPath: 'StderrRedirectPath',
      reRunable: 'ReRunable',
      arrayRequest: 'ArrayRequest',
      variables: 'Variables',
      queue: 'Queue',
      clockTime: 'ClockTime',
      node: 'Node',
      task: 'Task',
      thread: 'Thread',
      mem: 'Mem',
      gpu: 'Gpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandLine: 'string',
      name: 'string',
      runasUser: 'string',
      priority: 'number',
      packagePath: 'string',
      stdoutRedirectPath: 'string',
      stderrRedirectPath: 'string',
      reRunable: 'boolean',
      arrayRequest: 'string',
      variables: 'string',
      queue: 'string',
      clockTime: 'string',
      node: 'number',
      task: 'number',
      thread: 'number',
      mem: 'string',
      gpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponseBody extends $tea.Model {
  templateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigRequest extends $tea.Model {
  clusterId?: string;
  node?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      node: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigResponseBody extends $tea.Model {
  clusterConfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHybridClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHybridClusterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesRequest extends $tea.Model {
  clusterId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userUid?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userUid: 'UserUid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userUid: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  instances?: DescribeGWSInstancesResponseBodyInstances;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      instances: DescribeGWSInstancesResponseBodyInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: ResetNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': ResetNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponseBody extends $tea.Model {
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

export class ResetNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwareRequest extends $tea.Model {
  clusterId?: string;
  application?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      application: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwareResponseBody extends $tea.Model {
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

export class UninstallSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequest extends $tea.Model {
  clusterId?: string;
  imageId?: string;
  computeSpotStrategy?: string;
  computeSpotPriceLimit?: number;
  systemDiskType?: string;
  systemDiskSize?: number;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  allocatePublicAddress?: boolean;
  internetChargeType?: string;
  internetMaxBandWidthIn?: number;
  internetMaxBandWidthOut?: number;
  cores?: number;
  memory?: number;
  instanceFamilyLevel?: string;
  targetCapacity?: number;
  resourceAmountType?: string;
  priorityStrategy?: string;
  strictSatisfiedTargetCapacity?: boolean;
  systemDiskLevel?: string;
  strictResourceProvision?: boolean;
  round?: number;
  interval?: number;
  zoneInfos?: ApplyNodesRequestZoneInfos[];
  instanceTypeModel?: ApplyNodesRequestInstanceTypeModel[];
  tag?: ApplyNodesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      systemDiskType: 'SystemDiskType',
      systemDiskSize: 'SystemDiskSize',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      allocatePublicAddress: 'AllocatePublicAddress',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      cores: 'Cores',
      memory: 'Memory',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      targetCapacity: 'TargetCapacity',
      resourceAmountType: 'ResourceAmountType',
      priorityStrategy: 'PriorityStrategy',
      strictSatisfiedTargetCapacity: 'StrictSatisfiedTargetCapacity',
      systemDiskLevel: 'SystemDiskLevel',
      strictResourceProvision: 'StrictResourceProvision',
      round: 'Round',
      interval: 'Interval',
      zoneInfos: 'ZoneInfos',
      instanceTypeModel: 'InstanceTypeModel',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageId: 'string',
      computeSpotStrategy: 'string',
      computeSpotPriceLimit: 'number',
      systemDiskType: 'string',
      systemDiskSize: 'number',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      allocatePublicAddress: 'boolean',
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      cores: 'number',
      memory: 'number',
      instanceFamilyLevel: 'string',
      targetCapacity: 'number',
      resourceAmountType: 'string',
      priorityStrategy: 'string',
      strictSatisfiedTargetCapacity: 'boolean',
      systemDiskLevel: 'string',
      strictResourceProvision: 'boolean',
      round: 'number',
      interval: 'number',
      zoneInfos: { 'type': 'array', 'itemType': ApplyNodesRequestZoneInfos },
      instanceTypeModel: { 'type': 'array', 'itemType': ApplyNodesRequestInstanceTypeModel },
      tag: { 'type': 'array', 'itemType': ApplyNodesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBody extends $tea.Model {
  requestId?: string;
  satisfiedAmount?: number;
  taskId?: string;
  detail?: string;
  instanceIds?: ApplyNodesResponseBodyInstanceIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      satisfiedAmount: 'SatisfiedAmount',
      taskId: 'TaskId',
      detail: 'Detail',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      satisfiedAmount: 'number',
      taskId: 'string',
      detail: 'string',
      instanceIds: ApplyNodesResponseBodyInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersRequest extends $tea.Model {
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

export class DescribeGWSClustersResponseBody extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  callerType?: string;
  totalCount?: number;
  clusters?: DescribeGWSClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      callerType: 'CallerType',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      callerType: 'string',
      totalCount: 'number',
      clusters: DescribeGWSClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
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

export class DeleteJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesRequest extends $tea.Model {
  clusterId?: string;
  containerType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBody extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  DBInfo?: string;
  images?: ListContainerImagesResponseBodyImages;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      DBInfo: 'DBInfo',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      DBInfo: 'string',
      images: ListContainerImagesResponseBodyImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContainerImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContainerImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequest extends $tea.Model {
  clusterId?: string;
  releaseInstance?: boolean;
  sync?: boolean;
  instance?: DeleteNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
      sync: 'Sync',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'boolean',
      sync: 'boolean',
      instance: { 'type': 'array', 'itemType': DeleteNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $tea.Model {
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

export class DeleteNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  clusterId?: string;
  owner?: string;
  state?: string;
  rerunable?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      owner: 'Owner',
      state: 'State',
      rerunable: 'Rerunable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      owner: 'string',
      state: 'string',
      rerunable: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  jobs?: ListJobsResponseBodyJobs;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      jobs: ListJobsResponseBodyJobs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsRequest extends $tea.Model {
  fileSystemId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  fileSystemList?: ListCpfsFileSystemsResponseBodyFileSystemList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      fileSystemList: 'FileSystemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      fileSystemList: ListCpfsFileSystemsResponseBodyFileSystemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCpfsFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCpfsFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusters?: ListClustersMetaResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusters: ListClustersMetaResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBody extends $tea.Model {
  originalAmount?: number;
  requestId?: string;
  discountPrice?: number;
  tradePrice?: number;
  originalPrice?: number;
  chargeAmount?: number;
  currency?: string;
  regionId?: string;
  servicePack?: QueryServicePackAndPriceResponseBodyServicePack;
  static names(): { [key: string]: string } {
    return {
      originalAmount: 'OriginalAmount',
      requestId: 'RequestId',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      originalPrice: 'OriginalPrice',
      chargeAmount: 'ChargeAmount',
      currency: 'Currency',
      regionId: 'RegionId',
      servicePack: 'ServicePack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalAmount: 'number',
      requestId: 'string',
      discountPrice: 'number',
      tradePrice: 'number',
      originalPrice: 'number',
      chargeAmount: 'number',
      currency: 'string',
      regionId: 'string',
      servicePack: QueryServicePackAndPriceResponseBodyServicePack,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServicePackAndPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServicePackAndPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsRequest extends $tea.Model {
  containerApp?: DeleteContainerAppsRequestContainerApp[];
  static names(): { [key: string]: string } {
    return {
      containerApp: 'ContainerApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerApp: { 'type': 'array', 'itemType': DeleteContainerAppsRequestContainerApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsResponseBody extends $tea.Model {
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

export class DeleteContainerAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteContainerAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteContainerAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  volumes?: ListVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      volumes: ListVolumesResponseBodyVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBody extends $tea.Model {
  requestId?: string;
  commandId?: string;
  invokeStatus?: string;
  invokeInstances?: ListInvocationStatusResponseBodyInvokeInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      commandId: 'CommandId',
      invokeStatus: 'InvokeStatus',
      invokeInstances: 'InvokeInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      commandId: 'string',
      invokeStatus: 'string',
      invokeInstances: ListInvocationStatusResponseBodyInvokeInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInvocationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInvocationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigRequest extends $tea.Model {
  clusterId?: string;
  DBType?: string;
  DBUsername?: string;
  DBPassword?: string;
  DBServerInfo?: string;
  defaultRepoLocation?: string;
  pullUpdateTimeout?: number;
  imageExpirationTimeout?: string;
  repo?: ModifyImageGatewayConfigRequestRepo[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      DBType: 'DBType',
      DBUsername: 'DBUsername',
      DBPassword: 'DBPassword',
      DBServerInfo: 'DBServerInfo',
      defaultRepoLocation: 'DefaultRepoLocation',
      pullUpdateTimeout: 'PullUpdateTimeout',
      imageExpirationTimeout: 'ImageExpirationTimeout',
      repo: 'Repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      DBType: 'string',
      DBUsername: 'string',
      DBPassword: 'string',
      DBServerInfo: 'string',
      defaultRepoLocation: 'string',
      pullUpdateTimeout: 'number',
      imageExpirationTimeout: 'string',
      repo: { 'type': 'array', 'itemType': ModifyImageGatewayConfigRequestRepo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigResponseBody extends $tea.Model {
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

export class ModifyImageGatewayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyImageGatewayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyImageGatewayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  containerApps?: ListContainerAppsResponseBodyContainerApps;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      containerApps: 'ContainerApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      containerApps: ListContainerAppsResponseBodyContainerApps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContainerAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContainerAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRequest extends $tea.Model {
  clusterId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupId: 'string',
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
  body: DeleteSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusRequest extends $tea.Model {
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

export class DescribeNFSClientStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  result?: DescribeNFSClientStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      result: DescribeNFSClientStatusResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNFSClientStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNFSClientStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcdDeleteDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcdDeleteDesktopsResponseBody extends $tea.Model {
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

export class EcdDeleteDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EcdDeleteDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EcdDeleteDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  clusters?: ListClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      clusters: ListClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobRequest extends $tea.Model {
  clusterId?: string;
  commandLine?: string;
  runasUser?: string;
  runasUserPassword?: string;
  name?: string;
  priority?: number;
  packagePath?: string;
  stdoutRedirectPath?: string;
  stderrRedirectPath?: string;
  reRunable?: boolean;
  arrayRequest?: string;
  variables?: string;
  inputFileUrl?: string;
  unzipCmd?: string;
  postCmdLine?: string;
  containerId?: string;
  jobQueue?: string;
  node?: number;
  task?: number;
  thread?: number;
  mem?: string;
  gpu?: number;
  clockTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandLine: 'CommandLine',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      name: 'Name',
      priority: 'Priority',
      packagePath: 'PackagePath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      stderrRedirectPath: 'StderrRedirectPath',
      reRunable: 'ReRunable',
      arrayRequest: 'ArrayRequest',
      variables: 'Variables',
      inputFileUrl: 'InputFileUrl',
      unzipCmd: 'UnzipCmd',
      postCmdLine: 'PostCmdLine',
      containerId: 'ContainerId',
      jobQueue: 'JobQueue',
      node: 'Node',
      task: 'Task',
      thread: 'Thread',
      mem: 'Mem',
      gpu: 'Gpu',
      clockTime: 'ClockTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandLine: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
      name: 'string',
      priority: 'number',
      packagePath: 'string',
      stdoutRedirectPath: 'string',
      stderrRedirectPath: 'string',
      reRunable: 'boolean',
      arrayRequest: 'string',
      variables: 'string',
      inputFileUrl: 'string',
      unzipCmd: 'string',
      postCmdLine: 'string',
      containerId: 'string',
      jobQueue: 'string',
      node: 'number',
      task: 'number',
      thread: 'number',
      mem: 'string',
      gpu: 'number',
      clockTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportRequest extends $tea.Model {
  clusterId?: string;
  startTime?: number;
  endTime?: number;
  reportType?: string;
  filterValue?: string;
  dim?: string;
  jobId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      reportType: 'ReportType',
      filterValue: 'FilterValue',
      dim: 'Dim',
      jobId: 'JobId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      startTime: 'number',
      endTime: 'number',
      reportType: 'string',
      filterValue: 'string',
      dim: 'string',
      jobId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBody extends $tea.Model {
  totalCoreTime?: number;
  metrics?: string;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  data?: GetAccountingReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      totalCoreTime: 'TotalCoreTime',
      metrics: 'Metrics',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCoreTime: 'number',
      metrics: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      data: GetAccountingReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountingReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigRequest extends $tea.Model {
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

export class DescribeAutoScaleConfigResponseBody extends $tea.Model {
  maxNodesInCluster?: number;
  growTimeoutInMinutes?: number;
  spotStrategy?: string;
  requestId?: string;
  enableAutoShrink?: boolean;
  clusterType?: string;
  enableAutoGrow?: boolean;
  excludeNodes?: string;
  growIntervalInMinutes?: number;
  shrinkIntervalInMinutes?: number;
  spotPriceLimit?: string;
  shrinkIdleTimes?: number;
  extraNodesGrowRatio?: number;
  growRatio?: number;
  uid?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      maxNodesInCluster: 'MaxNodesInCluster',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      spotStrategy: 'SpotStrategy',
      requestId: 'RequestId',
      enableAutoShrink: 'EnableAutoShrink',
      clusterType: 'ClusterType',
      enableAutoGrow: 'EnableAutoGrow',
      excludeNodes: 'ExcludeNodes',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growRatio: 'GrowRatio',
      uid: 'Uid',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNodesInCluster: 'number',
      growTimeoutInMinutes: 'number',
      spotStrategy: 'string',
      requestId: 'string',
      enableAutoShrink: 'boolean',
      clusterType: 'string',
      enableAutoGrow: 'boolean',
      excludeNodes: 'string',
      growIntervalInMinutes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'string',
      shrinkIdleTimes: 'number',
      extraNodesGrowRatio: 'number',
      growRatio: 'number',
      uid: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVisualServiceStatusRequest extends $tea.Model {
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

export class GetVisualServiceStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVisualServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVisualServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVisualServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceRequest extends $tea.Model {
  clusterId?: string;
  cidrIp?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cidrIp: 'CidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cidrIp: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartVisualServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartVisualServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigRequest extends $tea.Model {
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

export class GetIfEcsTypeSupportHtConfigResponseBody extends $tea.Model {
  requestId?: string;
  defaultHtEnabled?: boolean;
  instanceType?: string;
  supportHtConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defaultHtEnabled: 'DefaultHtEnabled',
      instanceType: 'InstanceType',
      supportHtConfig: 'SupportHtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defaultHtEnabled: 'boolean',
      instanceType: 'string',
      supportHtConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIfEcsTypeSupportHtConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIfEcsTypeSupportHtConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  scheduler?: GetSchedulerInfoRequestScheduler[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      scheduler: { 'type': 'array', 'itemType': GetSchedulerInfoRequestScheduler },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBody extends $tea.Model {
  requestId?: string;
  schedInfo?: GetSchedulerInfoResponseBodySchedInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedInfo: 'SchedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedInfo: { 'type': 'array', 'itemType': GetSchedulerInfoResponseBodySchedInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSchedulerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSchedulerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceUserRequest extends $tea.Model {
  instanceId?: string;
  userUid?: string;
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
      userUid: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceUserResponseBody extends $tea.Model {
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

export class SetGWSInstanceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSInstanceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSInstanceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkbenchTokenRequest extends $tea.Model {
  clusterId?: string;
  userName?: string;
  userPassword?: string;
  port?: number;
  accountSessionTicket?: string;
  accountUid?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userName: 'UserName',
      userPassword: 'UserPassword',
      port: 'Port',
      accountSessionTicket: 'AccountSessionTicket',
      accountUid: 'AccountUid',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userName: 'string',
      userPassword: 'string',
      port: 'number',
      accountSessionTicket: 'string',
      accountUid: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkbenchTokenResponseBody extends $tea.Model {
  requestId?: string;
  root?: GetWorkbenchTokenResponseBodyRoot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      root: 'root',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      root: GetWorkbenchTokenResponseBodyRoot,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkbenchTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWorkbenchTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWorkbenchTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwareRequest extends $tea.Model {
  clusterId?: string;
  application?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      application: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwareResponseBody extends $tea.Model {
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

export class InstallSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesRequest extends $tea.Model {
  zoneId?: string;
  spotStrategy?: string;
  instanceChargeType?: string;
  showSoldOut?: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      spotStrategy: 'SpotStrategy',
      instanceChargeType: 'InstanceChargeType',
      showSoldOut: 'ShowSoldOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      spotStrategy: 'string',
      instanceChargeType: 'string',
      showSoldOut: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBody extends $tea.Model {
  supportSpotInstance?: boolean;
  requestId?: string;
  instanceTypeFamilies?: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies;
  static names(): { [key: string]: string } {
    return {
      supportSpotInstance: 'SupportSpotInstance',
      requestId: 'RequestId',
      instanceTypeFamilies: 'InstanceTypeFamilies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportSpotInstance: 'boolean',
      requestId: 'string',
      instanceTypeFamilies: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableEcsTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableEcsTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSRequest extends $tea.Model {
  instanceId?: string;
  nfsDir?: string;
  mountDir?: string;
  protocolType?: string;
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nfsDir: 'NfsDir',
      mountDir: 'MountDir',
      protocolType: 'ProtocolType',
      remoteDir: 'RemoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nfsDir: 'string',
      mountDir: 'string',
      protocolType: 'string',
      remoteDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MountNFSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MountNFSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddQueueRequest extends $tea.Model {
  clusterId?: string;
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddQueueResponseBody extends $tea.Model {
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

export class AddQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceRequest extends $tea.Model {
  clusterId?: string;
  imageId?: string;
  systemDiskSize?: number;
  systemDiskCategory?: string;
  instanceType?: string;
  instanceChargeType?: string;
  workMode?: string;
  allocatePublicAddress?: boolean;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  name?: string;
  period?: string;
  periodUnit?: string;
  autoRenew?: boolean;
  appList?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      systemDiskSize: 'SystemDiskSize',
      systemDiskCategory: 'SystemDiskCategory',
      instanceType: 'InstanceType',
      instanceChargeType: 'InstanceChargeType',
      workMode: 'WorkMode',
      allocatePublicAddress: 'AllocatePublicAddress',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      appList: 'AppList',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageId: 'string',
      systemDiskSize: 'number',
      systemDiskCategory: 'string',
      instanceType: 'string',
      instanceChargeType: 'string',
      workMode: 'string',
      allocatePublicAddress: 'boolean',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      period: 'string',
      periodUnit: 'string',
      autoRenew: 'boolean',
      appList: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCurrentClientVersionResponseBody extends $tea.Model {
  clientVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCurrentClientVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCurrentClientVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCurrentClientVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequest extends $tea.Model {
  clusterId?: string;
  additionalVolumes?: UpdateClusterVolumesRequestAdditionalVolumes[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      additionalVolumes: 'AdditionalVolumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      additionalVolumes: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesResponseBody extends $tea.Model {
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

export class UpdateClusterVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateClusterVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateClusterVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGWSInstanceRequest extends $tea.Model {
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

export class StartGWSInstanceResponseBody extends $tea.Model {
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

export class StartGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  invokeRecordStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  instance?: ListInvocationResultsRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      invokeRecordStatus: 'InvokeRecordStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      invokeRecordStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instance: { 'type': 'array', 'itemType': ListInvocationResultsRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  invocationResults?: ListInvocationResultsResponseBodyInvocationResults;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      invocationResults: 'InvocationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      invocationResults: ListInvocationResultsResponseBodyInvocationResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInvocationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInvocationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequest extends $tea.Model {
  clusterId?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  growIntervalInMinutes?: number;
  shrinkIntervalInMinutes?: number;
  shrinkIdleTimes?: number;
  growTimeoutInMinutes?: number;
  extraNodesGrowRatio?: number;
  growRatio?: number;
  maxNodesInCluster?: number;
  excludeNodes?: string;
  spotStrategy?: string;
  spotPriceLimit?: number;
  imageId?: string;
  queues?: SetAutoScaleConfigRequestQueues[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growRatio: 'GrowRatio',
      maxNodesInCluster: 'MaxNodesInCluster',
      excludeNodes: 'ExcludeNodes',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      imageId: 'ImageId',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      growIntervalInMinutes: 'number',
      shrinkIntervalInMinutes: 'number',
      shrinkIdleTimes: 'number',
      growTimeoutInMinutes: 'number',
      extraNodesGrowRatio: 'number',
      growRatio: 'number',
      maxNodesInCluster: 'number',
      excludeNodes: 'string',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      imageId: 'string',
      queues: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigResponseBody extends $tea.Model {
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

export class SetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesRequest extends $tea.Model {
  clusterId?: string;
  imageOwnerAlias?: string;
  imageId?: string;
  count?: number;
  instanceType?: string;
  computeSpotStrategy?: string;
  computeSpotPriceLimit?: string;
  ecsChargeType?: string;
  period?: number;
  periodUnit?: string;
  autoRenew?: string;
  autoRenewPeriod?: number;
  jobQueue?: string;
  createMode?: string;
  systemDiskType?: string;
  systemDiskSize?: number;
  zoneId?: string;
  vSwitchId?: string;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  computeEnableHt?: boolean;
  allocatePublicAddress?: boolean;
  internetChargeType?: string;
  internetMaxBandWidthIn?: number;
  internetMaxBandWidthOut?: number;
  clientToken?: string;
  systemDiskLevel?: string;
  minCount?: number;
  sync?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageId: 'ImageId',
      count: 'Count',
      instanceType: 'InstanceType',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      ecsChargeType: 'EcsChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      jobQueue: 'JobQueue',
      createMode: 'CreateMode',
      systemDiskType: 'SystemDiskType',
      systemDiskSize: 'SystemDiskSize',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      computeEnableHt: 'ComputeEnableHt',
      allocatePublicAddress: 'AllocatePublicAddress',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      clientToken: 'ClientToken',
      systemDiskLevel: 'SystemDiskLevel',
      minCount: 'MinCount',
      sync: 'Sync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageOwnerAlias: 'string',
      imageId: 'string',
      count: 'number',
      instanceType: 'string',
      computeSpotStrategy: 'string',
      computeSpotPriceLimit: 'string',
      ecsChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      jobQueue: 'string',
      createMode: 'string',
      systemDiskType: 'string',
      systemDiskSize: 'number',
      zoneId: 'string',
      vSwitchId: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      computeEnableHt: 'boolean',
      allocatePublicAddress: 'boolean',
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      clientToken: 'string',
      systemDiskLevel: 'string',
      minCount: 'number',
      sync: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  instanceIds?: AddNodesResponseBodyInstanceIds;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      instanceIds: AddNodesResponseBodyInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequest extends $tea.Model {
  ehpcVersion?: string;
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ehpcVersion: 'string',
      osTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $tea.Model {
  requestId?: string;
  softwares?: ListSoftwaresResponseBodySoftwares;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwares: ListSoftwaresResponseBodySoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsRequest extends $tea.Model {
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

export class ListSecurityGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  securityGroups?: ListSecurityGroupsResponseBodySecurityGroups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      securityGroups: ListSecurityGroupsResponseBodySecurityGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  images?: DescribeGWSImagesResponseBodyImages;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      images: DescribeGWSImagesResponseBodyImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponseBody extends $tea.Model {
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

export class StopJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesRequest extends $tea.Model {
  clusterId?: string;
  role?: string;
  instance?: StartNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      role: 'Role',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      role: 'string',
      instance: { 'type': 'array', 'itemType': StartNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesResponseBody extends $tea.Model {
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

export class StartNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserGroupsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserGroupsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsResponseBody extends $tea.Model {
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

export class ModifyUserGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueRequest extends $tea.Model {
  clusterId?: string;
  queueName?: string;
  node?: SetQueueRequestNode[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
      node: { 'type': 'array', 'itemType': SetQueueRequestNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueResponseBody extends $tea.Model {
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

export class SetQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartClusterRequest extends $tea.Model {
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

export class StartClusterResponseBody extends $tea.Model {
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

export class StartClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequest extends $tea.Model {
  imageOwnerAlias?: string;
  baseOsTag?: string;
  instanceType?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      imageOwnerAlias: 'ImageOwnerAlias',
      baseOsTag: 'BaseOsTag',
      instanceType: 'InstanceType',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageOwnerAlias: 'string',
      baseOsTag: 'string',
      instanceType: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $tea.Model {
  requestId?: string;
  images?: ListCustomImagesResponseBodyImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      images: ListCustomImagesResponseBodyImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCustomImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequest extends $tea.Model {
  clusterId?: string;
  user?: AddUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': AddUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersResponseBody extends $tea.Model {
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

export class AddUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterRequest extends $tea.Model {
  vpcId?: string;
  clusterType?: string;
  name?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      clusterType: 'ClusterType',
      name: 'Name',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      clusterType: 'string',
      name: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  templates?: ListJobTemplatesResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      templates: ListJobTemplatesResponseBodyTemplates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigRequest extends $tea.Model {
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

export class DescribeImageGatewayConfigResponseBody extends $tea.Model {
  requestId?: string;
  imagegw?: DescribeImageGatewayConfigResponseBodyImagegw;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imagegw: 'Imagegw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imagegw: DescribeImageGatewayConfigResponseBodyImagegw,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageGatewayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageGatewayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketRequest extends $tea.Model {
  instanceId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketResponseBody extends $tea.Model {
  ticket?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGWSConnectTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGWSConnectTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  taskId?: string;
  archived?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      archived: 'Archived',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
      archived: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  tasks?: ListTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClusterRequest extends $tea.Model {
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

export class StopClusterResponseBody extends $tea.Model {
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

export class StopClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupRequest extends $tea.Model {
  clusterId?: string;
  securityGroupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupResponseBody extends $tea.Model {
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

export class AddSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingRequest extends $tea.Model {
  clusterId?: string;
  role?: string;
  hostName?: string;
  onlyDetached?: boolean;
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      role: 'Role',
      hostName: 'HostName',
      onlyDetached: 'OnlyDetached',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      role: 'string',
      hostName: 'string',
      onlyDetached: 'boolean',
      sequence: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBody extends $tea.Model {
  requestId?: string;
  nodes?: ListNodesNoPagingResponseBodyNodes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodes: ListNodesNoPagingResponseBodyNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesNoPagingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesNoPagingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceNameRequest extends $tea.Model {
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

export class SetGWSInstanceNameResponseBody extends $tea.Model {
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

export class SetGWSInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequest extends $tea.Model {
  ecsOrder?: CreateHybridClusterRequestEcsOrder;
  zoneId?: string;
  name?: string;
  description?: string;
  ehpcVersion?: string;
  clientVersion?: string;
  osTag?: string;
  domain?: string;
  location?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vpcId?: string;
  vSwitchId?: string;
  volumeType?: string;
  volumeId?: string;
  volumeProtocol?: string;
  volumeMountpoint?: string;
  remoteDirectory?: string;
  onPremiseVolumeProtocol?: string;
  onPremiseVolumeMountPoint?: string;
  onPremiseVolumeRemotePath?: string;
  onPremiseVolumeLocalPath?: string;
  password?: string;
  keyPairName?: string;
  jobQueue?: string;
  resourceGroupId?: string;
  schedulerPreInstall?: boolean;
  computeSpotStrategy?: string;
  computeSpotPriceLimit?: number;
  imageOwnerAlias?: string;
  imageId?: string;
  clientToken?: string;
  multiOs?: boolean;
  nodes?: CreateHybridClusterRequestNodes[];
  application?: CreateHybridClusterRequestApplication[];
  postInstallScript?: CreateHybridClusterRequestPostInstallScript[];
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      zoneId: 'ZoneId',
      name: 'Name',
      description: 'Description',
      ehpcVersion: 'EhpcVersion',
      clientVersion: 'ClientVersion',
      osTag: 'OsTag',
      domain: 'Domain',
      location: 'Location',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      volumeType: 'VolumeType',
      volumeId: 'VolumeId',
      volumeProtocol: 'VolumeProtocol',
      volumeMountpoint: 'VolumeMountpoint',
      remoteDirectory: 'RemoteDirectory',
      onPremiseVolumeProtocol: 'OnPremiseVolumeProtocol',
      onPremiseVolumeMountPoint: 'OnPremiseVolumeMountPoint',
      onPremiseVolumeRemotePath: 'OnPremiseVolumeRemotePath',
      onPremiseVolumeLocalPath: 'OnPremiseVolumeLocalPath',
      password: 'Password',
      keyPairName: 'KeyPairName',
      jobQueue: 'JobQueue',
      resourceGroupId: 'ResourceGroupId',
      schedulerPreInstall: 'SchedulerPreInstall',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageId: 'ImageId',
      clientToken: 'ClientToken',
      multiOs: 'MultiOs',
      nodes: 'Nodes',
      application: 'Application',
      postInstallScript: 'PostInstallScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateHybridClusterRequestEcsOrder,
      zoneId: 'string',
      name: 'string',
      description: 'string',
      ehpcVersion: 'string',
      clientVersion: 'string',
      osTag: 'string',
      domain: 'string',
      location: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      volumeType: 'string',
      volumeId: 'string',
      volumeProtocol: 'string',
      volumeMountpoint: 'string',
      remoteDirectory: 'string',
      onPremiseVolumeProtocol: 'string',
      onPremiseVolumeMountPoint: 'string',
      onPremiseVolumeRemotePath: 'string',
      onPremiseVolumeLocalPath: 'string',
      password: 'string',
      keyPairName: 'string',
      jobQueue: 'string',
      resourceGroupId: 'string',
      schedulerPreInstall: 'boolean',
      computeSpotStrategy: 'string',
      computeSpotPriceLimit: 'number',
      imageOwnerAlias: 'string',
      imageId: 'string',
      clientToken: 'string',
      multiOs: 'boolean',
      nodes: { 'type': 'array', 'itemType': CreateHybridClusterRequestNodes },
      application: { 'type': 'array', 'itemType': CreateHybridClusterRequestApplication },
      postInstallScript: { 'type': 'array', 'itemType': CreateHybridClusterRequestPostInstallScript },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHybridClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHybridClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueConfigRequest extends $tea.Model {
  clusterId?: string;
  queueName?: string;
  resourceGroupId?: string;
  computeInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
      computeInstanceType: 'ComputeInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
      computeInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueConfigResponseBody extends $tea.Model {
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

export class UpdateQueueConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQueueConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQueueConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceRequest extends $tea.Model {
  clusterId?: string;
  cidrIp?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cidrIp: 'CidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cidrIp: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopVisualServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopVisualServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  ecsOrder?: CreateClusterRequestEcsOrder;
  zoneId?: string;
  name?: string;
  description?: string;
  ehpcVersion?: string;
  clientVersion?: string;
  osTag?: string;
  accountType?: string;
  schedulerType?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vpcId?: string;
  vSwitchId?: string;
  volumeType?: string;
  volumeId?: string;
  volumeProtocol?: string;
  volumeMountpoint?: string;
  remoteDirectory?: string;
  deployMode?: string;
  haEnable?: boolean;
  ecsChargeType?: string;
  password?: string;
  keyPairName?: string;
  imageOwnerAlias?: string;
  imageId?: string;
  sccClusterId?: string;
  computeSpotStrategy?: string;
  computeSpotPriceLimit?: string;
  computeEnableHt?: boolean;
  period?: number;
  periodUnit?: string;
  autoRenew?: string;
  autoRenewPeriod?: number;
  inputFileUrl?: string;
  jobQueue?: string;
  systemDiskType?: string;
  systemDiskSize?: number;
  remoteVisEnable?: string;
  resourceGroupId?: string;
  clientToken?: string;
  withoutElasticIp?: boolean;
  systemDiskLevel?: string;
  isComputeEss?: boolean;
  clusterVersion?: string;
  application?: CreateClusterRequestApplication[];
  additionalVolumes?: CreateClusterRequestAdditionalVolumes[];
  postInstallScript?: CreateClusterRequestPostInstallScript[];
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      zoneId: 'ZoneId',
      name: 'Name',
      description: 'Description',
      ehpcVersion: 'EhpcVersion',
      clientVersion: 'ClientVersion',
      osTag: 'OsTag',
      accountType: 'AccountType',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      volumeType: 'VolumeType',
      volumeId: 'VolumeId',
      volumeProtocol: 'VolumeProtocol',
      volumeMountpoint: 'VolumeMountpoint',
      remoteDirectory: 'RemoteDirectory',
      deployMode: 'DeployMode',
      haEnable: 'HaEnable',
      ecsChargeType: 'EcsChargeType',
      password: 'Password',
      keyPairName: 'KeyPairName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageId: 'ImageId',
      sccClusterId: 'SccClusterId',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeEnableHt: 'ComputeEnableHt',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      inputFileUrl: 'InputFileUrl',
      jobQueue: 'JobQueue',
      systemDiskType: 'SystemDiskType',
      systemDiskSize: 'SystemDiskSize',
      remoteVisEnable: 'RemoteVisEnable',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
      withoutElasticIp: 'WithoutElasticIp',
      systemDiskLevel: 'SystemDiskLevel',
      isComputeEss: 'IsComputeEss',
      clusterVersion: 'ClusterVersion',
      application: 'Application',
      additionalVolumes: 'AdditionalVolumes',
      postInstallScript: 'PostInstallScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateClusterRequestEcsOrder,
      zoneId: 'string',
      name: 'string',
      description: 'string',
      ehpcVersion: 'string',
      clientVersion: 'string',
      osTag: 'string',
      accountType: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      volumeType: 'string',
      volumeId: 'string',
      volumeProtocol: 'string',
      volumeMountpoint: 'string',
      remoteDirectory: 'string',
      deployMode: 'string',
      haEnable: 'boolean',
      ecsChargeType: 'string',
      password: 'string',
      keyPairName: 'string',
      imageOwnerAlias: 'string',
      imageId: 'string',
      sccClusterId: 'string',
      computeSpotStrategy: 'string',
      computeSpotPriceLimit: 'string',
      computeEnableHt: 'boolean',
      period: 'number',
      periodUnit: 'string',
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      inputFileUrl: 'string',
      jobQueue: 'string',
      systemDiskType: 'string',
      systemDiskSize: 'number',
      remoteVisEnable: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
      withoutElasticIp: 'boolean',
      systemDiskLevel: 'string',
      isComputeEss: 'boolean',
      clusterVersion: 'string',
      application: { 'type': 'array', 'itemType': CreateClusterRequestApplication },
      additionalVolumes: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumes },
      postInstallScript: { 'type': 'array', 'itemType': CreateClusterRequestPostInstallScript },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
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

export class DescribeImageRequest extends $tea.Model {
  clusterId?: string;
  repository?: string;
  imageTag?: string;
  containerType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      repository: 'Repository',
      imageTag: 'ImageTag',
      containerType: 'ContainerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      repository: 'string',
      imageTag: 'string',
      containerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponseBody extends $tea.Model {
  requestId?: string;
  imageInfo?: DescribeImageResponseBodyImageInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageInfo: DescribeImageResponseBodyImageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserPasswordsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserPasswordsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsResponseBody extends $tea.Model {
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

export class ModifyUserPasswordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserPasswordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserPasswordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueRequest extends $tea.Model {
  clusterId?: string;
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBody extends $tea.Model {
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

export class DeleteQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareRequest extends $tea.Model {
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

export class ListInstalledSoftwareResponseBody extends $tea.Model {
  requestId?: string;
  softwareList?: ListInstalledSoftwareResponseBodySoftwareList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwareList: ListInstalledSoftwareResponseBodySoftwareList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstalledSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstalledSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsRequest extends $tea.Model {
  clusterId?: string;
  startTime?: number;
  endTime?: number;
  enableReverse?: boolean;
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      enableReverse: 'EnableReverse',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      startTime: 'number',
      endTime: 'number',
      enableReverse: 'boolean',
      filter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponseBody extends $tea.Model {
  requestId?: string;
  logInfo?: GetHealthMonitorLogsResponseBodyLogInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logInfo: GetHealthMonitorLogsResponseBodyLogInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHealthMonitorLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHealthMonitorLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientRequest extends $tea.Model {
  clusterId?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $tea.Model {
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

export class UpgradeClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  releaseInstance?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
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

export class ListImagesRequest extends $tea.Model {
  baseOsTag?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  requestId?: string;
  osTags?: ListImagesResponseBodyOsTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osTags: 'OsTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osTags: ListImagesResponseBodyOsTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSClusterPolicyRequest extends $tea.Model {
  clusterId?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  udpPort?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      udpPort: 'UdpPort',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      udpPort: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSClusterPolicyResponseBody extends $tea.Model {
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

export class SetGWSClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSClusterPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesRequest extends $tea.Model {
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

export class ListQueuesResponseBody extends $tea.Model {
  requestId?: string;
  queues?: ListQueuesResponseBodyQueues;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queues: ListQueuesResponseBodyQueues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobFileRequest extends $tea.Model {
  clusterId?: string;
  runasUser?: string;
  runasUserPassword?: string;
  content?: string;
  targetFile?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      content: 'Content',
      targetFile: 'TargetFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
      content: 'string',
      targetFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobFileResponseBody extends $tea.Model {
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

export class CreateJobFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  profilings?: ListCloudMetricProfilingsResponseBodyProfilings;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      profilings: 'Profilings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      profilings: ListCloudMetricProfilingsResponseBodyProfilings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCloudMetricProfilingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCloudMetricProfilingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesRequest extends $tea.Model {
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

export class GetClusterVolumesResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  volumes?: GetClusterVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      volumes: GetClusterVolumesResponseBodyVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClusterVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClusterVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGWSInstanceRequest extends $tea.Model {
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

export class DeleteGWSInstanceResponseBody extends $tea.Model {
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

export class DeleteGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: ListRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: ListRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeEHPCRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeEHPCResponseBody extends $tea.Model {
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

export class InitializeEHPCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeEHPCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeEHPCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudMetricProfilingRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  hostName?: string;
  processId?: number;
  duration?: number;
  freq?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      processId: 'ProcessId',
      duration: 'Duration',
      freq: 'Freq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      hostName: 'string',
      processId: 'number',
      duration: 'number',
      freq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudMetricProfilingResponseBody extends $tea.Model {
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

export class RunCloudMetricProfilingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunCloudMetricProfilingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunCloudMetricProfilingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesRequest extends $tea.Model {
  clusterId?: string;
  imageId?: string;
  jobQueue?: string;
  clientToken?: string;
  imageOwnerAlias?: string;
  instance?: AddExistedNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      jobQueue: 'JobQueue',
      clientToken: 'ClientToken',
      imageOwnerAlias: 'ImageOwnerAlias',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageId: 'string',
      jobQueue: 'string',
      clientToken: 'string',
      imageOwnerAlias: 'string',
      instance: { 'type': 'array', 'itemType': AddExistedNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesResponseBody extends $tea.Model {
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

export class AddExistedNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddExistedNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddExistedNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  priceUnit?: string;
  chargeType?: string;
  orderType?: string;
  commodities?: DescribePriceRequestCommodities[];
  static names(): { [key: string]: string } {
    return {
      priceUnit: 'PriceUnit',
      chargeType: 'ChargeType',
      orderType: 'OrderType',
      commodities: 'Commodities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceUnit: 'string',
      chargeType: 'string',
      orderType: 'string',
      commodities: { 'type': 'array', 'itemType': DescribePriceRequestCommodities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  totalTradePrice?: number;
  requestId?: string;
  prices?: DescribePriceResponseBodyPrices;
  static names(): { [key: string]: string } {
    return {
      totalTradePrice: 'TotalTradePrice',
      requestId: 'RequestId',
      prices: 'Prices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTradePrice: 'number',
      requestId: 'string',
      prices: DescribePriceResponseBodyPrices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsResponseBody extends $tea.Model {
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

export class RerunJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RerunJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RerunJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyRequest extends $tea.Model {
  clusterId?: string;
  taskId?: string;
  asyncMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      taskId: 'TaskId',
      asyncMode: 'AsyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      taskId: 'string',
      asyncMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyResponseBody extends $tea.Model {
  watermark?: string;
  clipboard?: string;
  requestId?: string;
  usbRedirect?: string;
  localDrive?: string;
  static names(): { [key: string]: string } {
    return {
      watermark: 'Watermark',
      clipboard: 'Clipboard',
      requestId: 'RequestId',
      usbRedirect: 'UsbRedirect',
      localDrive: 'LocalDrive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermark: 'string',
      clipboard: 'string',
      requestId: 'string',
      usbRedirect: 'string',
      localDrive: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSClusterPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesRequest extends $tea.Model {
  clusterId?: string;
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBody extends $tea.Model {
  requestId?: string;
  instanceIds?: AddLocalNodesResponseBodyInstanceIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceIds: AddLocalNodesResponseBodyInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLocalNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLocalNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateRequest extends $tea.Model {
  templateId?: string;
  commandLine?: string;
  name?: string;
  runasUser?: string;
  priority?: number;
  packagePath?: string;
  stdoutRedirectPath?: string;
  stderrRedirectPath?: string;
  reRunable?: boolean;
  arrayRequest?: string;
  variables?: string;
  queue?: string;
  clockTime?: string;
  node?: number;
  task?: number;
  thread?: number;
  mem?: string;
  gpu?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      commandLine: 'CommandLine',
      name: 'Name',
      runasUser: 'RunasUser',
      priority: 'Priority',
      packagePath: 'PackagePath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      stderrRedirectPath: 'StderrRedirectPath',
      reRunable: 'ReRunable',
      arrayRequest: 'ArrayRequest',
      variables: 'Variables',
      queue: 'Queue',
      clockTime: 'ClockTime',
      node: 'Node',
      task: 'Task',
      thread: 'Thread',
      mem: 'Mem',
      gpu: 'Gpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      commandLine: 'string',
      name: 'string',
      runasUser: 'string',
      priority: 'number',
      packagePath: 'string',
      stdoutRedirectPath: 'string',
      stderrRedirectPath: 'string',
      reRunable: 'boolean',
      arrayRequest: 'string',
      variables: 'string',
      queue: 'string',
      clockTime: 'string',
      node: 'number',
      task: 'number',
      thread: 'number',
      mem: 'string',
      gpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponseBody extends $tea.Model {
  templateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdRequest extends $tea.Model {
  clusterId?: string;
  runasUser?: string;
  runasUserPassword?: string;
  passwd?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      passwd: 'Passwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
      passwd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVisualServicePasswdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVisualServicePasswdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesRequest extends $tea.Model {
  zoneId?: string;
  spotStrategy?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      spotStrategy: 'SpotStrategy',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      spotStrategy: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBody extends $tea.Model {
  supportSpotInstance?: boolean;
  requestId?: string;
  series?: ListPreferredEcsTypesResponseBodySeries;
  static names(): { [key: string]: string } {
    return {
      supportSpotInstance: 'SupportSpotInstance',
      requestId: 'RequestId',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportSpotInstance: 'boolean',
      requestId: 'string',
      series: ListPreferredEcsTypesResponseBodySeries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPreferredEcsTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPreferredEcsTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppRequest extends $tea.Model {
  name?: string;
  repository?: string;
  description?: string;
  imageTag?: string;
  containerType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      repository: 'Repository',
      description: 'Description',
      imageTag: 'ImageTag',
      containerType: 'ContainerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      repository: 'string',
      description: 'string',
      imageTag: 'string',
      containerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponseBody extends $tea.Model {
  requestId?: string;
  containerId?: AddContainerAppResponseBodyContainerId;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      containerId: AddContainerAppResponseBodyContainerId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddContainerAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddContainerAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsRequest extends $tea.Model {
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

export class ListClusterLogsResponseBody extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  clusterId?: string;
  logs?: ListClusterLogsResponseBodyLogs;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      clusterId: 'ClusterId',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      clusterId: 'string',
      logs: ListClusterLogsResponseBodyLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterRequest extends $tea.Model {
  clusterId?: string;
  osTag?: string;
  accountType?: string;
  schedulerType?: string;
  imageOwnerAlias?: string;
  imageId?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      osTag: 'OsTag',
      accountType: 'AccountType',
      schedulerType: 'SchedulerType',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageId: 'ImageId',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      osTag: 'string',
      accountType: 'string',
      schedulerType: 'string',
      imageOwnerAlias: 'string',
      imageId: 'string',
      clientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterResponseBody extends $tea.Model {
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

export class RecoverClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecoverClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecoverClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyMessage extends $tea.Model {
  jobInfo?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequestUser extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo extends $tea.Model {
  tag?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplications extends $tea.Model {
  applicationInfo?: DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo extends $tea.Model {
  url?: string;
  args?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      args: 'Args',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      args: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScripts extends $tea.Model {
  postInstallScriptInfo?: DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo[];
  static names(): { [key: string]: string } {
    return {
      postInstallScriptInfo: 'PostInstallScriptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postInstallScriptInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoManager extends $tea.Model {
  instanceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoCompute extends $tea.Model {
  instanceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoLogin extends $tea.Model {
  instanceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfo extends $tea.Model {
  manager?: DescribeClusterResponseBodyClusterInfoEcsInfoManager;
  compute?: DescribeClusterResponseBodyClusterInfoEcsInfoCompute;
  login?: DescribeClusterResponseBodyClusterInfoEcsInfoLogin;
  static names(): { [key: string]: string } {
    return {
      manager: 'Manager',
      compute: 'Compute',
      login: 'Login',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manager: DescribeClusterResponseBodyClusterInfoEcsInfoManager,
      compute: DescribeClusterResponseBodyClusterInfoEcsInfoCompute,
      login: DescribeClusterResponseBodyClusterInfoEcsInfoLogin,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfo extends $tea.Model {
  status?: string;
  vpcId?: string;
  keyPairName?: string;
  ecsChargeType?: string;
  securityGroupId?: string;
  sccClusterId?: string;
  createTime?: string;
  accountType?: string;
  volumeProtocol?: string;
  description?: string;
  volumeId?: string;
  haEnable?: boolean;
  baseOsTag?: string;
  name?: string;
  imageId?: string;
  schedulerType?: string;
  deployMode?: string;
  imageOwnerAlias?: string;
  osTag?: string;
  volumeMountpoint?: string;
  remoteDirectory?: string;
  regionId?: string;
  vSwitchId?: string;
  imageName?: string;
  volumeType?: string;
  location?: string;
  id?: string;
  clientVersion?: string;
  applications?: DescribeClusterResponseBodyClusterInfoApplications;
  postInstallScripts?: DescribeClusterResponseBodyClusterInfoPostInstallScripts;
  ecsInfo?: DescribeClusterResponseBodyClusterInfoEcsInfo;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      keyPairName: 'KeyPairName',
      ecsChargeType: 'EcsChargeType',
      securityGroupId: 'SecurityGroupId',
      sccClusterId: 'SccClusterId',
      createTime: 'CreateTime',
      accountType: 'AccountType',
      volumeProtocol: 'VolumeProtocol',
      description: 'Description',
      volumeId: 'VolumeId',
      haEnable: 'HaEnable',
      baseOsTag: 'BaseOsTag',
      name: 'Name',
      imageId: 'ImageId',
      schedulerType: 'SchedulerType',
      deployMode: 'DeployMode',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      volumeMountpoint: 'VolumeMountpoint',
      remoteDirectory: 'RemoteDirectory',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      imageName: 'ImageName',
      volumeType: 'VolumeType',
      location: 'Location',
      id: 'Id',
      clientVersion: 'ClientVersion',
      applications: 'Applications',
      postInstallScripts: 'PostInstallScripts',
      ecsInfo: 'EcsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      keyPairName: 'string',
      ecsChargeType: 'string',
      securityGroupId: 'string',
      sccClusterId: 'string',
      createTime: 'string',
      accountType: 'string',
      volumeProtocol: 'string',
      description: 'string',
      volumeId: 'string',
      haEnable: 'boolean',
      baseOsTag: 'string',
      name: 'string',
      imageId: 'string',
      schedulerType: 'string',
      deployMode: 'string',
      imageOwnerAlias: 'string',
      osTag: 'string',
      volumeMountpoint: 'string',
      remoteDirectory: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      imageName: 'string',
      volumeType: 'string',
      location: 'string',
      id: 'string',
      clientVersion: 'string',
      applications: DescribeClusterResponseBodyClusterInfoApplications,
      postInstallScripts: DescribeClusterResponseBodyClusterInfoPostInstallScripts,
      ecsInfo: DescribeClusterResponseBodyClusterInfoEcsInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $tea.Model {
  name?: string;
  addTime?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      addTime: 'AddTime',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      addTime: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  userInfo?: ListUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponseBodyContainerAppInfo extends $tea.Model {
  type?: string;
  description?: string;
  createTime?: string;
  repository?: string;
  imageTag?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      createTime: 'CreateTime',
      repository: 'Repository',
      imageTag: 'ImageTag',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      createTime: 'string',
      repository: 'string',
      imageTag: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfo extends $tea.Model {
  vpcId?: string;
  status?: string;
  htEnabled?: boolean;
  expired?: boolean;
  imageOwnerAlias?: string;
  lockReason?: string;
  hostName?: string;
  publicIpAddress?: string;
  spotStrategy?: string;
  createdByEhpc?: boolean;
  regionId?: string;
  vSwitchId?: string;
  ipAddress?: string;
  expiredTime?: string;
  version?: string;
  zoneId?: string;
  addTime?: string;
  imageId?: string;
  location?: string;
  id?: string;
  createMode?: string;
  totalResources?: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      htEnabled: 'HtEnabled',
      expired: 'Expired',
      imageOwnerAlias: 'ImageOwnerAlias',
      lockReason: 'LockReason',
      hostName: 'HostName',
      publicIpAddress: 'PublicIpAddress',
      spotStrategy: 'SpotStrategy',
      createdByEhpc: 'CreatedByEhpc',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      expiredTime: 'ExpiredTime',
      version: 'Version',
      zoneId: 'ZoneId',
      addTime: 'AddTime',
      imageId: 'ImageId',
      location: 'Location',
      id: 'Id',
      createMode: 'CreateMode',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      htEnabled: 'boolean',
      expired: 'boolean',
      imageOwnerAlias: 'string',
      lockReason: 'string',
      hostName: 'string',
      publicIpAddress: 'string',
      spotStrategy: 'string',
      createdByEhpc: 'boolean',
      regionId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      expiredTime: 'string',
      version: 'string',
      zoneId: 'string',
      addTime: 'string',
      imageId: 'string',
      location: 'string',
      id: 'string',
      createMode: 'string',
      totalResources: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesByQueueResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesByQueueResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoAclLimit extends $tea.Model {
  queue?: string;
  aclUsers?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      aclUsers: 'AclUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: 'string',
      aclUsers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoResourceLimit extends $tea.Model {
  nodes?: number;
  cpus?: number;
  user?: string;
  queue?: string;
  mem?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cpus: 'Cpus',
      user: 'User',
      queue: 'Queue',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: 'number',
      cpus: 'number',
      user: 'string',
      queue: 'string',
      mem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfo extends $tea.Model {
  aclLimit?: SetSchedulerInfoRequestPbsInfoAclLimit[];
  resourceLimit?: SetSchedulerInfoRequestPbsInfoResourceLimit[];
  jobHistoryDuration?: number;
  schedInterval?: number;
  static names(): { [key: string]: string } {
    return {
      aclLimit: 'AclLimit',
      resourceLimit: 'ResourceLimit',
      jobHistoryDuration: 'JobHistoryDuration',
      schedInterval: 'SchedInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoAclLimit },
      resourceLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoResourceLimit },
      jobHistoryDuration: 'number',
      schedInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestSlurmInfo extends $tea.Model {
  backfillInterval?: number;
  schedInterval?: number;
  static names(): { [key: string]: string } {
    return {
      backfillInterval: 'BackfillInterval',
      schedInterval: 'SchedInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backfillInterval: 'number',
      schedInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestScheduler extends $tea.Model {
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo extends $tea.Model {
  type?: string;
  url?: string;
  name?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
      name: 'Name',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      url: 'string',
      name: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrls extends $tea.Model {
  svgInfo?: GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo[];
  static names(): { [key: string]: string } {
    return {
      svgInfo: 'SvgInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      svgInfo: { 'type': 'array', 'itemType': GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo extends $tea.Model {
  hostNamePrefix?: string;
  vSwitchId?: string;
  zoneId?: string;
  spotPriceLimit?: number;
  instanceType?: string;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      hostNamePrefix: 'HostNamePrefix',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      spotPriceLimit: 'SpotPriceLimit',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNamePrefix: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      spotPriceLimit: 'number',
      instanceType: 'string',
      spotStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes extends $tea.Model {
  instanceTypeInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeInfo: 'InstanceTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfo extends $tea.Model {
  queueImageId?: string;
  systemDiskCategory?: string;
  instanceType?: string;
  hostNameSuffix?: string;
  spotStrategy?: string;
  minNodesInQueue?: number;
  hostNamePrefix?: string;
  systemDiskSize?: number;
  maxNodesInQueue?: number;
  enableAutoShrink?: boolean;
  queueName?: string;
  enableAutoGrow?: boolean;
  systemDiskLevel?: string;
  resourceGroupId?: string;
  spotPriceLimit?: number;
  instanceTypes?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      queueImageId: 'QueueImageId',
      systemDiskCategory: 'SystemDiskCategory',
      instanceType: 'InstanceType',
      hostNameSuffix: 'HostNameSuffix',
      spotStrategy: 'SpotStrategy',
      minNodesInQueue: 'MinNodesInQueue',
      hostNamePrefix: 'HostNamePrefix',
      systemDiskSize: 'SystemDiskSize',
      maxNodesInQueue: 'MaxNodesInQueue',
      enableAutoShrink: 'EnableAutoShrink',
      queueName: 'QueueName',
      enableAutoGrow: 'EnableAutoGrow',
      systemDiskLevel: 'SystemDiskLevel',
      resourceGroupId: 'ResourceGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueImageId: 'string',
      systemDiskCategory: 'string',
      instanceType: 'string',
      hostNameSuffix: 'string',
      spotStrategy: 'string',
      minNodesInQueue: 'number',
      hostNamePrefix: 'string',
      systemDiskSize: 'number',
      maxNodesInQueue: 'number',
      enableAutoShrink: 'boolean',
      queueName: 'string',
      enableAutoGrow: 'boolean',
      systemDiskLevel: 'string',
      resourceGroupId: 'string',
      spotPriceLimit: 'number',
      instanceTypes: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueues extends $tea.Model {
  queueInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoRoles extends $tea.Model {
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfo extends $tea.Model {
  vpcId?: string;
  status?: string;
  htEnabled?: boolean;
  expired?: boolean;
  imageOwnerAlias?: string;
  lockReason?: string;
  hostName?: string;
  instanceType?: string;
  publicIpAddress?: string;
  spotStrategy?: string;
  createdByEhpc?: boolean;
  regionId?: string;
  vSwitchId?: string;
  ipAddress?: string;
  expiredTime?: string;
  version?: string;
  zoneId?: string;
  addTime?: string;
  imageId?: string;
  location?: string;
  id?: string;
  createMode?: string;
  roles?: ListNodesResponseBodyNodesNodeInfoRoles;
  totalResources?: ListNodesResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesResponseBodyNodesNodeInfoUsedResources;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      htEnabled: 'HtEnabled',
      expired: 'Expired',
      imageOwnerAlias: 'ImageOwnerAlias',
      lockReason: 'LockReason',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      publicIpAddress: 'PublicIpAddress',
      spotStrategy: 'SpotStrategy',
      createdByEhpc: 'CreatedByEhpc',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      expiredTime: 'ExpiredTime',
      version: 'Version',
      zoneId: 'ZoneId',
      addTime: 'AddTime',
      imageId: 'ImageId',
      location: 'Location',
      id: 'Id',
      createMode: 'CreateMode',
      roles: 'Roles',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      htEnabled: 'boolean',
      expired: 'boolean',
      imageOwnerAlias: 'string',
      lockReason: 'string',
      hostName: 'string',
      instanceType: 'string',
      publicIpAddress: 'string',
      spotStrategy: 'string',
      createdByEhpc: 'boolean',
      regionId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      expiredTime: 'string',
      version: 'string',
      zoneId: 'string',
      addTime: 'string',
      imageId: 'string',
      location: 'string',
      id: 'string',
      createMode: 'string',
      roles: ListNodesResponseBodyNodesNodeInfoRoles,
      totalResources: ListNodesResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesResponseBodyNodesNodeInfoUsedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommandsCommand extends $tea.Model {
  timeout?: string;
  commandId?: string;
  workingDir?: string;
  commandContent?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
      commandId: 'CommandId',
      workingDir: 'WorkingDir',
      commandContent: 'CommandContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'string',
      commandId: 'string',
      workingDir: 'string',
      commandContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommands extends $tea.Model {
  command?: ListCommandsResponseBodyCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': ListCommandsResponseBodyCommandsCommand },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBodyInstanceIds extends $tea.Model {
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

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages extends $tea.Model {
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList extends $tea.Model {
  packages?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages[];
  static names(): { [key: string]: string } {
    return {
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packages: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $tea.Model {
  status?: string;
  vpcId?: string;
  mountTargetDomain?: string;
  accessGroup?: string;
  vswId?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      mountTargetDomain: 'MountTargetDomain',
      accessGroup: 'AccessGroup',
      vswId: 'VswId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      mountTargetDomain: 'string',
      accessGroup: 'string',
      vswId: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList extends $tea.Model {
  mountTargets?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems extends $tea.Model {
  status?: string;
  capacity?: number;
  createTime?: string;
  storageType?: string;
  bandWidth?: number;
  regionId?: string;
  fileSystemId?: string;
  fileSystemType?: string;
  meteredSize?: number;
  encryptType?: number;
  protocolType?: string;
  destription?: string;
  packageList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList;
  mountTargetList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      storageType: 'StorageType',
      bandWidth: 'BandWidth',
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      encryptType: 'EncryptType',
      protocolType: 'ProtocolType',
      destription: 'Destription',
      packageList: 'PackageList',
      mountTargetList: 'MountTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      capacity: 'number',
      createTime: 'string',
      storageType: 'string',
      bandWidth: 'number',
      regionId: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      encryptType: 'number',
      protocolType: 'string',
      destription: 'string',
      packageList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList,
      mountTargetList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemList extends $tea.Model {
  fileSystems?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogsMetricLog extends $tea.Model {
  time?: number;
  diskDevice?: string;
  networkInterface?: string;
  metricData?: string;
  hostname?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      diskDevice: 'DiskDevice',
      networkInterface: 'NetworkInterface',
      metricData: 'MetricData',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      diskDevice: 'string',
      networkInterface: 'string',
      metricData: 'string',
      hostname: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogs extends $tea.Model {
  metricLog?: GetCloudMetricLogsResponseBodyMetricLogsMetricLog[];
  static names(): { [key: string]: string } {
    return {
      metricLog: 'MetricLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricLog: { 'type': 'array', 'itemType': GetCloudMetricLogsResponseBodyMetricLogsMetricLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo extends $tea.Model {
  appName?: string;
  appArgs?: string;
  appPath?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appArgs: 'AppArgs',
      appPath: 'AppPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appArgs: 'string',
      appPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList extends $tea.Model {
  appInfo?: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo[];
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: { 'type': 'array', 'itemType': DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfo extends $tea.Model {
  status?: string;
  workMode?: string;
  expireTime?: string;
  createTime?: string;
  instanceId?: string;
  name?: string;
  instanceType?: string;
  userName?: string;
  clusterId?: string;
  appList?: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      workMode: 'WorkMode',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      name: 'Name',
      instanceType: 'InstanceType',
      userName: 'UserName',
      clusterId: 'ClusterId',
      appList: 'AppList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      workMode: 'string',
      expireTime: 'string',
      createTime: 'string',
      instanceId: 'string',
      name: 'string',
      instanceType: 'string',
      userName: 'string',
      clusterId: 'string',
      appList: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstances extends $tea.Model {
  instanceInfo?: DescribeGWSInstancesResponseBodyInstancesInstanceInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': DescribeGWSInstancesResponseBodyInstancesInstanceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestZoneInfos extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestInstanceTypeModel extends $tea.Model {
  maxPrice?: number;
  targetImageId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxPrice: 'MaxPrice',
      targetImageId: 'TargetImageId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxPrice: 'number',
      targetImageId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBodyInstanceIds extends $tea.Model {
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

export class DescribeGWSClustersResponseBodyClustersClusterInfo extends $tea.Model {
  vpcId?: string;
  status?: string;
  instanceCount?: number;
  createTime?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      instanceCount: 'InstanceCount',
      createTime: 'CreateTime',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      instanceCount: 'number',
      createTime: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersResponseBodyClusters extends $tea.Model {
  clusterInfo?: DescribeGWSClustersResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': DescribeGWSClustersResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyImagesImages extends $tea.Model {
  type?: string;
  status?: string;
  updateDateTime?: string;
  repository?: string;
  tag?: string;
  system?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      updateDateTime: 'UpdateDateTime',
      repository: 'Repository',
      tag: 'Tag',
      system: 'System',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      updateDateTime: 'string',
      repository: 'string',
      tag: 'string',
      system: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyImages extends $tea.Model {
  images?: ListContainerImagesResponseBodyImagesImages[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListContainerImagesResponseBodyImagesImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfoResources extends $tea.Model {
  nodes?: number;
  cores?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      cores: 'Cores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: 'number',
      cores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfo extends $tea.Model {
  owner?: string;
  comment?: string;
  state?: string;
  stderr?: string;
  priority?: string;
  shellPath?: string;
  stdout?: string;
  arrayRequest?: string;
  startTime?: string;
  lastModifyTime?: string;
  nodeList?: string;
  name?: string;
  id?: string;
  submitTime?: string;
  resources?: ListJobsResponseBodyJobsJobInfoResources;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      comment: 'Comment',
      state: 'State',
      stderr: 'Stderr',
      priority: 'Priority',
      shellPath: 'ShellPath',
      stdout: 'Stdout',
      arrayRequest: 'ArrayRequest',
      startTime: 'StartTime',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      name: 'Name',
      id: 'Id',
      submitTime: 'SubmitTime',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      comment: 'string',
      state: 'string',
      stderr: 'string',
      priority: 'string',
      shellPath: 'string',
      stdout: 'string',
      arrayRequest: 'string',
      startTime: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      name: 'string',
      id: 'string',
      submitTime: 'string',
      resources: ListJobsResponseBodyJobsJobInfoResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  jobInfo?: ListJobsResponseBodyJobsJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $tea.Model {
  vpcId?: string;
  status?: string;
  vswId?: string;
  networkType?: string;
  mountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      vswId: 'VswId',
      networkType: 'NetworkType',
      mountTargetDomain: 'MountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      vswId: 'string',
      networkType: 'string',
      mountTargetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList extends $tea.Model {
  mountTargets?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystems extends $tea.Model {
  fileSystemId?: string;
  capacity?: string;
  createTime?: string;
  zoneId?: string;
  protocolType?: string;
  destription?: string;
  regionId?: string;
  mountTargetList?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      zoneId: 'ZoneId',
      protocolType: 'ProtocolType',
      destription: 'Destription',
      regionId: 'RegionId',
      mountTargetList: 'MountTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      capacity: 'string',
      createTime: 'string',
      zoneId: 'string',
      protocolType: 'string',
      destription: 'string',
      regionId: 'string',
      mountTargetList: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemList extends $tea.Model {
  fileSystems?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClustersClusterInfoSimple extends $tea.Model {
  status?: string;
  vpcId?: string;
  schedulerType?: string;
  deployMode?: string;
  isComputeEss?: boolean;
  osTag?: string;
  accountType?: string;
  description?: string;
  name?: string;
  id?: string;
  location?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      schedulerType: 'SchedulerType',
      deployMode: 'DeployMode',
      isComputeEss: 'IsComputeEss',
      osTag: 'OsTag',
      accountType: 'AccountType',
      description: 'Description',
      name: 'Name',
      id: 'Id',
      location: 'Location',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      schedulerType: 'string',
      deployMode: 'string',
      isComputeEss: 'boolean',
      osTag: 'string',
      accountType: 'string',
      description: 'string',
      name: 'string',
      id: 'string',
      location: 'string',
      clientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClusters extends $tea.Model {
  clusterInfoSimple?: ListClustersMetaResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersMetaResponseBodyClustersClusterInfoSimple },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePackServicePackInfo extends $tea.Model {
  endTime?: number;
  capacity?: number;
  startTime?: number;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      capacity: 'Capacity',
      startTime: 'StartTime',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      capacity: 'number',
      startTime: 'number',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePack extends $tea.Model {
  servicePackInfo?: QueryServicePackAndPriceResponseBodyServicePackServicePackInfo[];
  static names(): { [key: string]: string } {
    return {
      servicePackInfo: 'ServicePackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicePackInfo: { 'type': 'array', 'itemType': QueryServicePackAndPriceResponseBodyServicePackServicePackInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsRequestContainerApp extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo extends $tea.Model {
  jobQueue?: string;
  volumeId?: string;
  remoteDirectory?: string;
  volumeMountpoint?: string;
  role?: string;
  localDirectory?: string;
  volumeType?: string;
  location?: string;
  volumeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      volumeId: 'VolumeId',
      remoteDirectory: 'RemoteDirectory',
      volumeMountpoint: 'VolumeMountpoint',
      role: 'Role',
      localDirectory: 'LocalDirectory',
      volumeType: 'VolumeType',
      location: 'Location',
      volumeProtocol: 'VolumeProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      volumeId: 'string',
      remoteDirectory: 'string',
      volumeMountpoint: 'string',
      role: 'string',
      localDirectory: 'string',
      volumeType: 'string',
      location: 'string',
      volumeProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes extends $tea.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfo extends $tea.Model {
  volumeId?: string;
  clusterName?: string;
  remoteDirectory?: string;
  volumeMountpoint?: string;
  volumeType?: string;
  volumeProtocol?: string;
  regionId?: string;
  clusterId?: string;
  additionalVolumes?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes;
  static names(): { [key: string]: string } {
    return {
      volumeId: 'VolumeId',
      clusterName: 'ClusterName',
      remoteDirectory: 'RemoteDirectory',
      volumeMountpoint: 'VolumeMountpoint',
      volumeType: 'VolumeType',
      volumeProtocol: 'VolumeProtocol',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      additionalVolumes: 'AdditionalVolumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeId: 'string',
      clusterName: 'string',
      remoteDirectory: 'string',
      volumeMountpoint: 'string',
      volumeType: 'string',
      volumeProtocol: 'string',
      regionId: 'string',
      clusterId: 'string',
      additionalVolumes: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumes extends $tea.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance extends $tea.Model {
  instanceInvokeStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInvokeStatus: 'InstanceInvokeStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInvokeStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstances extends $tea.Model {
  invokeInstance?: ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigRequestRepo extends $tea.Model {
  auth?: string;
  URL?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      URL: 'URL',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      URL: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponseBodyContainerAppsContainerApps extends $tea.Model {
  type?: string;
  description?: string;
  createTime?: string;
  repository?: string;
  imageTag?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      createTime: 'CreateTime',
      repository: 'Repository',
      imageTag: 'ImageTag',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      createTime: 'string',
      repository: 'string',
      imageTag: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponseBodyContainerApps extends $tea.Model {
  containerApps?: ListContainerAppsResponseBodyContainerAppsContainerApps[];
  static names(): { [key: string]: string } {
    return {
      containerApps: 'ContainerApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerApps: { 'type': 'array', 'itemType': ListContainerAppsResponseBodyContainerAppsContainerApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusResponseBodyResult extends $tea.Model {
  output?: string;
  invokeRecordStatus?: string;
  exitCode?: number;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      invokeRecordStatus: 'InvokeRecordStatus',
      exitCode: 'ExitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      invokeRecordStatus: 'string',
      exitCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleManagers extends $tea.Model {
  operatingCount?: number;
  exceptionCount?: number;
  stoppedCount?: number;
  total?: number;
  normalCount?: number;
  static names(): { [key: string]: string } {
    return {
      operatingCount: 'OperatingCount',
      exceptionCount: 'ExceptionCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
      normalCount: 'NormalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingCount: 'number',
      exceptionCount: 'number',
      stoppedCount: 'number',
      total: 'number',
      normalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleComputes extends $tea.Model {
  operatingCount?: number;
  exceptionCount?: number;
  stoppedCount?: number;
  total?: number;
  normalCount?: number;
  static names(): { [key: string]: string } {
    return {
      operatingCount: 'OperatingCount',
      exceptionCount: 'ExceptionCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
      normalCount: 'NormalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingCount: 'number',
      exceptionCount: 'number',
      stoppedCount: 'number',
      total: 'number',
      normalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleTotalResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleUsedResources extends $tea.Model {
  gpu?: number;
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      gpu: 'Gpu',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpu: 'number',
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimple extends $tea.Model {
  vpcId?: string;
  status?: string;
  createTime?: string;
  isComputeEss?: boolean;
  computeSpotStrategy?: string;
  accountType?: string;
  count?: number;
  ehpcVersion?: string;
  description?: string;
  baseOsTag?: string;
  name?: string;
  imageId?: string;
  computeSpotPriceLimit?: number;
  schedulerType?: string;
  deployMode?: string;
  nodeSuffix?: string;
  imageOwnerAlias?: string;
  osTag?: string;
  nodePrefix?: string;
  instanceType?: string;
  regionId?: string;
  instanceChargeType?: string;
  vSwitchId?: string;
  zoneId?: string;
  loginNodes?: string;
  id?: string;
  location?: string;
  clientVersion?: string;
  managers?: ListClustersResponseBodyClustersClusterInfoSimpleManagers;
  computes?: ListClustersResponseBodyClustersClusterInfoSimpleComputes;
  totalResources?: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources;
  usedResources?: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      createTime: 'CreateTime',
      isComputeEss: 'IsComputeEss',
      computeSpotStrategy: 'ComputeSpotStrategy',
      accountType: 'AccountType',
      count: 'Count',
      ehpcVersion: 'EhpcVersion',
      description: 'Description',
      baseOsTag: 'BaseOsTag',
      name: 'Name',
      imageId: 'ImageId',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      schedulerType: 'SchedulerType',
      deployMode: 'DeployMode',
      nodeSuffix: 'NodeSuffix',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      nodePrefix: 'NodePrefix',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      loginNodes: 'LoginNodes',
      id: 'Id',
      location: 'Location',
      clientVersion: 'ClientVersion',
      managers: 'Managers',
      computes: 'Computes',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      createTime: 'string',
      isComputeEss: 'boolean',
      computeSpotStrategy: 'string',
      accountType: 'string',
      count: 'number',
      ehpcVersion: 'string',
      description: 'string',
      baseOsTag: 'string',
      name: 'string',
      imageId: 'string',
      computeSpotPriceLimit: 'number',
      schedulerType: 'string',
      deployMode: 'string',
      nodeSuffix: 'string',
      imageOwnerAlias: 'string',
      osTag: 'string',
      nodePrefix: 'string',
      instanceType: 'string',
      regionId: 'string',
      instanceChargeType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      loginNodes: 'string',
      id: 'string',
      location: 'string',
      clientVersion: 'string',
      managers: ListClustersResponseBodyClustersClusterInfoSimpleManagers,
      computes: ListClustersResponseBodyClustersClusterInfoSimpleComputes,
      totalResources: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources,
      usedResources: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfoSimple?: ListClustersResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoSimple },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBodyData extends $tea.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoRequestScheduler extends $tea.Model {
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBodySchedInfo extends $tea.Model {
  configuration?: string;
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkbenchTokenResponseBodyRootInstanceLoginView extends $tea.Model {
  defaultViewUrl?: string;
  rdpViewUrl?: string;
  baseViewUrl?: string;
  fileTreeViewUrl?: string;
  terminalViewUrl?: string;
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultViewUrl: 'defaultViewUrl',
      rdpViewUrl: 'rdpViewUrl',
      baseViewUrl: 'baseViewUrl',
      fileTreeViewUrl: 'fileTreeViewUrl',
      terminalViewUrl: 'terminalViewUrl',
      viewName: 'viewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultViewUrl: 'string',
      rdpViewUrl: 'string',
      baseViewUrl: 'string',
      fileTreeViewUrl: 'string',
      terminalViewUrl: 'string',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkbenchTokenResponseBodyRoot extends $tea.Model {
  instanceLoginView?: GetWorkbenchTokenResponseBodyRootInstanceLoginView;
  static names(): { [key: string]: string } {
    return {
      instanceLoginView: 'instanceLoginView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLoginView: GetWorkbenchTokenResponseBodyRootInstanceLoginView,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds extends $tea.Model {
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo extends $tea.Model {
  status?: string;
  instanceTypeId?: string;
  instanceBandwidthRx?: number;
  GPUSpec?: string;
  instanceBandwidthTx?: number;
  instancePpsRx?: number;
  instancePpsTx?: number;
  GPUAmount?: number;
  cpuCoreCount?: number;
  memorySize?: number;
  eniQuantity?: number;
  zoneIds?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceTypeId: 'InstanceTypeId',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      GPUSpec: 'GPUSpec',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      GPUAmount: 'GPUAmount',
      cpuCoreCount: 'CpuCoreCount',
      memorySize: 'MemorySize',
      eniQuantity: 'EniQuantity',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceTypeId: 'string',
      instanceBandwidthRx: 'number',
      GPUSpec: 'string',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      GPUAmount: 'number',
      cpuCoreCount: 'number',
      memorySize: 'number',
      eniQuantity: 'number',
      zoneIds: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes extends $tea.Model {
  typesInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo[];
  static names(): { [key: string]: string } {
    return {
      typesInfo: 'TypesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typesInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo extends $tea.Model {
  generation?: string;
  instanceTypeFamilyId?: string;
  types?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
      instanceTypeFamilyId: 'string',
      types: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamilies extends $tea.Model {
  instanceTypeFamilyInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilyInfo: 'InstanceTypeFamilyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilyInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequestAdditionalVolumesRoles extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequestAdditionalVolumes extends $tea.Model {
  jobQueue?: string;
  volumeId?: string;
  roles?: UpdateClusterVolumesRequestAdditionalVolumesRoles[];
  volumeMountpoint?: string;
  remoteDirectory?: string;
  volumeType?: string;
  localDirectory?: string;
  volumeProtocol?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      volumeId: 'VolumeId',
      roles: 'Roles',
      volumeMountpoint: 'VolumeMountpoint',
      remoteDirectory: 'RemoteDirectory',
      volumeType: 'VolumeType',
      localDirectory: 'LocalDirectory',
      volumeProtocol: 'VolumeProtocol',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      volumeId: 'string',
      roles: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumesRoles },
      volumeMountpoint: 'string',
      remoteDirectory: 'string',
      volumeType: 'string',
      localDirectory: 'string',
      volumeProtocol: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBodyInvocationResultsInvocationResult extends $tea.Model {
  success?: boolean;
  message?: string;
  finishedTime?: string;
  commandId?: string;
  instanceId?: string;
  invokeRecordStatus?: string;
  exitCode?: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      message: 'Message',
      finishedTime: 'FinishedTime',
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
      exitCode: 'ExitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      message: 'string',
      finishedTime: 'string',
      commandId: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
      exitCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBodyInvocationResults extends $tea.Model {
  invocationResult?: ListInvocationResultsResponseBodyInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': ListInvocationResultsResponseBodyInvocationResultsInvocationResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueuesInstanceTypes extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  spotPriceLimit?: number;
  instanceType?: string;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      spotPriceLimit: 'SpotPriceLimit',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
      spotPriceLimit: 'number',
      instanceType: 'string',
      spotStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueues extends $tea.Model {
  queueImageId?: string;
  systemDiskCategory?: string;
  instanceType?: string;
  hostNameSuffix?: string;
  spotStrategy?: string;
  hostNamePrefix?: string;
  minNodesInQueue?: number;
  systemDiskSize?: number;
  maxNodesInQueue?: number;
  enableAutoShrink?: boolean;
  queueName?: string;
  enableAutoGrow?: boolean;
  systemDiskLevel?: string;
  spotPriceLimit?: number;
  instanceTypes?: SetAutoScaleConfigRequestQueuesInstanceTypes[];
  static names(): { [key: string]: string } {
    return {
      queueImageId: 'QueueImageId',
      systemDiskCategory: 'SystemDiskCategory',
      instanceType: 'InstanceType',
      hostNameSuffix: 'HostNameSuffix',
      spotStrategy: 'SpotStrategy',
      hostNamePrefix: 'HostNamePrefix',
      minNodesInQueue: 'MinNodesInQueue',
      systemDiskSize: 'SystemDiskSize',
      maxNodesInQueue: 'MaxNodesInQueue',
      enableAutoShrink: 'EnableAutoShrink',
      queueName: 'QueueName',
      enableAutoGrow: 'EnableAutoGrow',
      systemDiskLevel: 'SystemDiskLevel',
      spotPriceLimit: 'SpotPriceLimit',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueImageId: 'string',
      systemDiskCategory: 'string',
      instanceType: 'string',
      hostNameSuffix: 'string',
      spotStrategy: 'string',
      hostNamePrefix: 'string',
      minNodesInQueue: 'number',
      systemDiskSize: 'number',
      maxNodesInQueue: 'number',
      enableAutoShrink: 'boolean',
      queueName: 'string',
      enableAutoGrow: 'boolean',
      systemDiskLevel: 'string',
      spotPriceLimit: 'number',
      instanceTypes: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueuesInstanceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBodyInstanceIds extends $tea.Model {
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

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo extends $tea.Model {
  required?: boolean;
  tag?: string;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      tag: 'Tag',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      tag: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications extends $tea.Model {
  applicationInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfo extends $tea.Model {
  schedulerType?: string;
  osTag?: string;
  schedulerVersion?: string;
  accountVersion?: string;
  accountType?: string;
  ehpcVersion?: string;
  applications?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      osTag: 'OsTag',
      schedulerVersion: 'SchedulerVersion',
      accountVersion: 'AccountVersion',
      accountType: 'AccountType',
      ehpcVersion: 'EhpcVersion',
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      osTag: 'string',
      schedulerVersion: 'string',
      accountVersion: 'string',
      accountType: 'string',
      ehpcVersion: 'string',
      applications: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwares extends $tea.Model {
  softwareInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfo[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  securityGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponseBodyImagesImageInfo extends $tea.Model {
  status?: string;
  imageType?: string;
  progress?: string;
  size?: number;
  createTime?: string;
  name?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      imageType: 'ImageType',
      progress: 'Progress',
      size: 'Size',
      createTime: 'CreateTime',
      name: 'Name',
      imageId: 'ImageId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponseBodyImages extends $tea.Model {
  imageInfo?: DescribeGWSImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': DescribeGWSImagesResponseBodyImagesImageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequestUser extends $tea.Model {
  name?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueRequestNode extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoBaseOsTag extends $tea.Model {
  platform?: string;
  osTag?: string;
  version?: string;
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      osTag: 'OsTag',
      version: 'Version',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      osTag: 'string',
      version: 'string',
      architecture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoOsTag extends $tea.Model {
  platform?: string;
  osTag?: string;
  version?: string;
  architecture?: string;
  baseOsTag?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      osTag: 'OsTag',
      version: 'Version',
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      osTag: 'string',
      version: 'string',
      architecture: 'string',
      baseOsTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfo extends $tea.Model {
  status?: string;
  postInstallScript?: string;
  description?: string;
  size?: number;
  imageOwnerAlias?: string;
  imageName?: string;
  skuCode?: string;
  pricingCycle?: string;
  imageId?: string;
  productCode?: string;
  uid?: string;
  baseOsTag?: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag;
  osTag?: ListCustomImagesResponseBodyImagesImageInfoOsTag;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      postInstallScript: 'PostInstallScript',
      description: 'Description',
      size: 'Size',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageName: 'ImageName',
      skuCode: 'SkuCode',
      pricingCycle: 'PricingCycle',
      imageId: 'ImageId',
      productCode: 'ProductCode',
      uid: 'Uid',
      baseOsTag: 'BaseOsTag',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      postInstallScript: 'string',
      description: 'string',
      size: 'number',
      imageOwnerAlias: 'string',
      imageName: 'string',
      skuCode: 'string',
      pricingCycle: 'string',
      imageId: 'string',
      productCode: 'string',
      uid: 'string',
      baseOsTag: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag,
      osTag: ListCustomImagesResponseBodyImagesImageInfoOsTag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImages extends $tea.Model {
  imageInfo?: ListCustomImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyImagesImageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequestUser extends $tea.Model {
  password?: string;
  name?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      name: 'Name',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      name: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplatesJobTemplates extends $tea.Model {
  task?: number;
  variables?: string;
  commandLine?: string;
  queue?: string;
  priority?: number;
  mem?: string;
  thread?: number;
  arrayRequest?: string;
  stderrRedirectPath?: string;
  node?: number;
  stdoutRedirectPath?: string;
  gpu?: number;
  packagePath?: string;
  clockTime?: string;
  reRunable?: boolean;
  name?: string;
  id?: string;
  runasUser?: string;
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
      variables: 'Variables',
      commandLine: 'CommandLine',
      queue: 'Queue',
      priority: 'Priority',
      mem: 'Mem',
      thread: 'Thread',
      arrayRequest: 'ArrayRequest',
      stderrRedirectPath: 'StderrRedirectPath',
      node: 'Node',
      stdoutRedirectPath: 'StdoutRedirectPath',
      gpu: 'Gpu',
      packagePath: 'PackagePath',
      clockTime: 'ClockTime',
      reRunable: 'ReRunable',
      name: 'Name',
      id: 'Id',
      runasUser: 'RunasUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: 'number',
      variables: 'string',
      commandLine: 'string',
      queue: 'string',
      priority: 'number',
      mem: 'string',
      thread: 'number',
      arrayRequest: 'string',
      stderrRedirectPath: 'string',
      node: 'number',
      stdoutRedirectPath: 'string',
      gpu: 'number',
      packagePath: 'string',
      clockTime: 'string',
      reRunable: 'boolean',
      name: 'string',
      id: 'string',
      runasUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplates extends $tea.Model {
  jobTemplates?: ListJobTemplatesResponseBodyTemplatesJobTemplates[];
  static names(): { [key: string]: string } {
    return {
      jobTemplates: 'JobTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplates: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyTemplatesJobTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo extends $tea.Model {
  URL?: string;
  remoteType?: string;
  location?: string;
  authentication?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
      remoteType: 'RemoteType',
      location: 'Location',
      authentication: 'Authentication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
      remoteType: 'string',
      location: 'string',
      authentication: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegwLocations extends $tea.Model {
  locationInfo?: DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo[];
  static names(): { [key: string]: string } {
    return {
      locationInfo: 'LocationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationInfo: { 'type': 'array', 'itemType': DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegw extends $tea.Model {
  updateDateTime?: string;
  imageExpirationTimeout?: string;
  mongoDBURI?: string;
  defaultImageLocation?: string;
  pullUpdateTimeout?: number;
  locations?: DescribeImageGatewayConfigResponseBodyImagegwLocations;
  static names(): { [key: string]: string } {
    return {
      updateDateTime: 'UpdateDateTime',
      imageExpirationTimeout: 'ImageExpirationTimeout',
      mongoDBURI: 'MongoDBURI',
      defaultImageLocation: 'DefaultImageLocation',
      pullUpdateTimeout: 'PullUpdateTimeout',
      locations: 'Locations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateDateTime: 'string',
      imageExpirationTimeout: 'string',
      mongoDBURI: 'string',
      defaultImageLocation: 'string',
      pullUpdateTimeout: 'number',
      locations: DescribeImageGatewayConfigResponseBodyImagegwLocations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $tea.Model {
  status?: string;
  taskType?: string;
  totalSteps?: number;
  currentStep?: number;
  result?: string;
  errors?: string;
  taskId?: string;
  request?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskType: 'TaskType',
      totalSteps: 'TotalSteps',
      currentStep: 'CurrentStep',
      result: 'Result',
      errors: 'Errors',
      taskId: 'TaskId',
      request: 'Request',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskType: 'string',
      totalSteps: 'number',
      currentStep: 'number',
      result: 'string',
      errors: 'string',
      taskId: 'string',
      request: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfo extends $tea.Model {
  status?: string;
  hostName?: string;
  instanceType?: string;
  imageId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      imageId: 'ImageId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostName: 'string',
      instanceType: 'string',
      imageId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesNoPagingResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesNoPagingResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestEcsOrderCompute extends $tea.Model {
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

export class CreateHybridClusterRequestEcsOrder extends $tea.Model {
  compute: CreateHybridClusterRequestEcsOrderCompute;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateHybridClusterRequestEcsOrderCompute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestNodes extends $tea.Model {
  schedulerType?: string;
  ipAddress?: string;
  hostName?: string;
  role?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      schedulerType: 'SchedulerType',
      ipAddress: 'IpAddress',
      hostName: 'HostName',
      role: 'Role',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerType: 'string',
      ipAddress: 'string',
      hostName: 'string',
      role: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestApplication extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestPostInstallScript extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderManager extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderCompute extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderLogin extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrder extends $tea.Model {
  manager: CreateClusterRequestEcsOrderManager;
  compute: CreateClusterRequestEcsOrderCompute;
  login: CreateClusterRequestEcsOrderLogin;
  static names(): { [key: string]: string } {
    return {
      manager: 'Manager',
      compute: 'Compute',
      login: 'Login',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manager: CreateClusterRequestEcsOrderManager,
      compute: CreateClusterRequestEcsOrderCompute,
      login: CreateClusterRequestEcsOrderLogin,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestApplication extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumesRoles extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumes extends $tea.Model {
  jobQueue?: string;
  volumeId?: string;
  roles?: CreateClusterRequestAdditionalVolumesRoles[];
  volumeMountpoint?: string;
  remoteDirectory?: string;
  volumeType?: string;
  localDirectory?: string;
  volumeProtocol?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      volumeId: 'VolumeId',
      roles: 'Roles',
      volumeMountpoint: 'VolumeMountpoint',
      remoteDirectory: 'RemoteDirectory',
      volumeType: 'VolumeType',
      localDirectory: 'LocalDirectory',
      volumeProtocol: 'VolumeProtocol',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      volumeId: 'string',
      roles: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumesRoles },
      volumeMountpoint: 'string',
      remoteDirectory: 'string',
      volumeType: 'string',
      localDirectory: 'string',
      volumeProtocol: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestPostInstallScript extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponseBodyImageInfo extends $tea.Model {
  type?: string;
  status?: string;
  updateDateTime?: string;
  repository?: string;
  tag?: string;
  system?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      updateDateTime: 'UpdateDateTime',
      repository: 'Repository',
      tag: 'Tag',
      system: 'System',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      updateDateTime: 'string',
      repository: 'string',
      tag: 'string',
      system: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequestUser extends $tea.Model {
  password?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareListSoftwareList extends $tea.Model {
  softwareId?: string;
  softwareStatus?: string;
  softwareVersion?: string;
  softwareName?: string;
  static names(): { [key: string]: string } {
    return {
      softwareId: 'SoftwareId',
      softwareStatus: 'SoftwareStatus',
      softwareVersion: 'SoftwareVersion',
      softwareName: 'SoftwareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareId: 'string',
      softwareStatus: 'string',
      softwareVersion: 'string',
      softwareName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareList extends $tea.Model {
  softwareList?: ListInstalledSoftwareResponseBodySoftwareListSoftwareList[];
  static names(): { [key: string]: string } {
    return {
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareList: { 'type': 'array', 'itemType': ListInstalledSoftwareResponseBodySoftwareListSoftwareList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponseBodyLogInfoLogsCheckListCheckList extends $tea.Model {
  checkInfo?: string;
  checkDescription?: string;
  checkSolution?: string;
  checkName?: string;
  static names(): { [key: string]: string } {
    return {
      checkInfo: 'CheckInfo',
      checkDescription: 'CheckDescription',
      checkSolution: 'CheckSolution',
      checkName: 'CheckName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInfo: 'string',
      checkDescription: 'string',
      checkSolution: 'string',
      checkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponseBodyLogInfoLogsCheckList extends $tea.Model {
  checkList?: GetHealthMonitorLogsResponseBodyLogInfoLogsCheckListCheckList[];
  static names(): { [key: string]: string } {
    return {
      checkList: 'CheckList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkList: { 'type': 'array', 'itemType': GetHealthMonitorLogsResponseBodyLogInfoLogsCheckListCheckList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponseBodyLogInfoLogs extends $tea.Model {
  time?: number;
  itemDescription?: string;
  itemName?: string;
  healthId?: string;
  sceneDescription?: string;
  hostName?: string;
  sceneName?: string;
  instanceId?: string;
  level?: string;
  checkList?: GetHealthMonitorLogsResponseBodyLogInfoLogsCheckList;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      itemDescription: 'ItemDescription',
      itemName: 'ItemName',
      healthId: 'HealthId',
      sceneDescription: 'SceneDescription',
      hostName: 'HostName',
      sceneName: 'SceneName',
      instanceId: 'InstanceId',
      level: 'Level',
      checkList: 'CheckList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      itemDescription: 'string',
      itemName: 'string',
      healthId: 'string',
      sceneDescription: 'string',
      hostName: 'string',
      sceneName: 'string',
      instanceId: 'string',
      level: 'string',
      checkList: GetHealthMonitorLogsResponseBodyLogInfoLogsCheckList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthMonitorLogsResponseBodyLogInfo extends $tea.Model {
  logs?: GetHealthMonitorLogsResponseBodyLogInfoLogs[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': GetHealthMonitorLogsResponseBodyLogInfoLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTagsOsInfo extends $tea.Model {
  version?: string;
  baseOsTag?: string;
  platform?: string;
  osTag?: string;
  imageId?: string;
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      baseOsTag: 'BaseOsTag',
      platform: 'Platform',
      osTag: 'OsTag',
      imageId: 'ImageId',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      baseOsTag: 'string',
      platform: 'string',
      osTag: 'string',
      imageId: 'string',
      architecture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTags extends $tea.Model {
  osInfo?: ListImagesResponseBodyOsTagsOsInfo[];
  static names(): { [key: string]: string } {
    return {
      osInfo: 'OsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osInfo: { 'type': 'array', 'itemType': ListImagesResponseBodyOsTagsOsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes extends $tea.Model {
  instance?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType extends $tea.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfo extends $tea.Model {
  type?: string;
  hostNamePrefix?: string;
  queueName?: string;
  enableAutoGrow?: boolean;
  resourceGroupId?: string;
  imageId?: string;
  hostNameSuffix?: string;
  spotStrategy?: string;
  spotInstanceTypes?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes;
  computeInstanceType?: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hostNamePrefix: 'HostNamePrefix',
      queueName: 'QueueName',
      enableAutoGrow: 'EnableAutoGrow',
      resourceGroupId: 'ResourceGroupId',
      imageId: 'ImageId',
      hostNameSuffix: 'HostNameSuffix',
      spotStrategy: 'SpotStrategy',
      spotInstanceTypes: 'SpotInstanceTypes',
      computeInstanceType: 'ComputeInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hostNamePrefix: 'string',
      queueName: 'string',
      enableAutoGrow: 'boolean',
      resourceGroupId: 'string',
      imageId: 'string',
      hostNameSuffix: 'string',
      spotStrategy: 'string',
      spotInstanceTypes: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes,
      computeInstanceType: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueues extends $tea.Model {
  queueInfo?: ListQueuesResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo extends $tea.Model {
  profilingId?: string;
  triggerTime?: string;
  pid?: number;
  hostName?: string;
  duration?: number;
  instanceId?: string;
  freq?: number;
  static names(): { [key: string]: string } {
    return {
      profilingId: 'ProfilingId',
      triggerTime: 'TriggerTime',
      pid: 'Pid',
      hostName: 'HostName',
      duration: 'Duration',
      instanceId: 'InstanceId',
      freq: 'Freq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profilingId: 'string',
      triggerTime: 'string',
      pid: 'number',
      hostName: 'string',
      duration: 'number',
      instanceId: 'string',
      freq: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilings extends $tea.Model {
  profilingInfo?: ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo[];
  static names(): { [key: string]: string } {
    return {
      profilingInfo: 'ProfilingInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profilingInfo: { 'type': 'array', 'itemType': ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRoles extends $tea.Model {
  roleInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'RoleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfo extends $tea.Model {
  jobQueue?: string;
  volumeId?: string;
  remoteDirectory?: string;
  volumeMountpoint?: string;
  localDirectory?: string;
  volumeType?: string;
  mustKeep?: boolean;
  location?: string;
  volumeProtocol?: string;
  roles?: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      volumeId: 'VolumeId',
      remoteDirectory: 'RemoteDirectory',
      volumeMountpoint: 'VolumeMountpoint',
      localDirectory: 'LocalDirectory',
      volumeType: 'VolumeType',
      mustKeep: 'MustKeep',
      location: 'Location',
      volumeProtocol: 'VolumeProtocol',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      volumeId: 'string',
      remoteDirectory: 'string',
      volumeMountpoint: 'string',
      localDirectory: 'string',
      volumeType: 'string',
      mustKeep: 'boolean',
      location: 'string',
      volumeProtocol: 'string',
      roles: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumes extends $tea.Model {
  volumeInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegionsRegionInfo extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  regionInfo?: ListRegionsResponseBodyRegionsRegionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionInfo: 'RegionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionInfo: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionsRegionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestCommodities extends $tea.Model {
  amount?: number;
  systemDiskSize?: number;
  systemDiskPerformanceLevel?: string;
  nodeType?: string;
  systemDiskCategory?: string;
  internetChargeType?: string;
  networkType?: string;
  instanceType?: string;
  period?: number;
  internetMaxBandWidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      systemDiskSize: 'SystemDiskSize',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      nodeType: 'NodeType',
      systemDiskCategory: 'SystemDiskCategory',
      internetChargeType: 'InternetChargeType',
      networkType: 'NetworkType',
      instanceType: 'InstanceType',
      period: 'Period',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      systemDiskSize: 'number',
      systemDiskPerformanceLevel: 'string',
      nodeType: 'string',
      systemDiskCategory: 'string',
      internetChargeType: 'string',
      networkType: 'string',
      instanceType: 'string',
      period: 'number',
      internetMaxBandWidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPricesPriceInfo extends $tea.Model {
  originalPrice?: number;
  nodeType?: string;
  currency?: string;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      nodeType: 'NodeType',
      currency: 'Currency',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      nodeType: 'string',
      currency: 'string',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPrices extends $tea.Model {
  priceInfo?: DescribePriceResponseBodyPricesPriceInfo[];
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: { 'type': 'array', 'itemType': DescribePriceResponseBodyPricesPriceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBodyInstanceIds extends $tea.Model {
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

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles extends $tea.Model {
  manager?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager;
  compute?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute;
  login?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin;
  static names(): { [key: string]: string } {
    return {
      manager: 'Manager',
      compute: 'Compute',
      login: 'Login',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manager: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager,
      compute: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute,
      login: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfo extends $tea.Model {
  seriesName?: string;
  seriesId?: string;
  roles?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles;
  static names(): { [key: string]: string } {
    return {
      seriesName: 'SeriesName',
      seriesId: 'SeriesId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesName: 'string',
      seriesId: 'string',
      roles: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeries extends $tea.Model {
  seriesInfo?: ListPreferredEcsTypesResponseBodySeriesSeriesInfo[];
  static names(): { [key: string]: string } {
    return {
      seriesInfo: 'SeriesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInfo: { 'type': 'array', 'itemType': ListPreferredEcsTypesResponseBodySeriesSeriesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponseBodyContainerId extends $tea.Model {
  containerId?: string[];
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogsLogInfo extends $tea.Model {
  operation?: string;
  message?: string;
  createTime?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      message: 'Message',
      createTime: 'CreateTime',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      message: 'string',
      createTime: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogs extends $tea.Model {
  logInfo?: ListClusterLogsResponseBodyLogsLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': ListClusterLogsResponseBodyLogsLogInfo },
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeJobWithOptions(request: DescribeJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeJobResponse>(await this.doRPCRequest("DescribeJob", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeJobResponse({}));
  }

  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteImageResponse>(await this.doRPCRequest("DeleteImage", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteGWSClusterWithOptions(request: DeleteGWSClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGWSClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteGWSClusterResponse>(await this.doRPCRequest("DeleteGWSCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteGWSClusterResponse({}));
  }

  async deleteGWSCluster(request: DeleteGWSClusterRequest): Promise<DeleteGWSClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGWSClusterWithOptions(request, runtime);
  }

  async deleteUsersWithOptions(request: DeleteUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteUsersResponse>(await this.doRPCRequest("DeleteUsers", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteUsersResponse({}));
  }

  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeClusterResponse>(await this.doRPCRequest("DescribeCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeClusterResponse({}));
  }

  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async describeContainerAppWithOptions(request: DescribeContainerAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeContainerAppResponse>(await this.doRPCRequest("DescribeContainerApp", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeContainerAppResponse({}));
  }

  async describeContainerApp(request: DescribeContainerAppRequest): Promise<DescribeContainerAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerAppWithOptions(request, runtime);
  }

  async pullImageWithOptions(request: PullImageRequest, runtime: $Util.RuntimeOptions): Promise<PullImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<PullImageResponse>(await this.doRPCRequest("PullImage", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new PullImageResponse({}));
  }

  async pullImage(request: PullImageRequest): Promise<PullImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pullImageWithOptions(request, runtime);
  }

  async stopNodesWithOptions(request: StopNodesRequest, runtime: $Util.RuntimeOptions): Promise<StopNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopNodesResponse>(await this.doRPCRequest("StopNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StopNodesResponse({}));
  }

  async stopNodes(request: StopNodesRequest): Promise<StopNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopNodesWithOptions(request, runtime);
  }

  async listNodesByQueueWithOptions(request: ListNodesByQueueRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListNodesByQueueResponse>(await this.doRPCRequest("ListNodesByQueue", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListNodesByQueueResponse({}));
  }

  async listNodesByQueue(request: ListNodesByQueueRequest): Promise<ListNodesByQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByQueueWithOptions(request, runtime);
  }

  async modifyContainerAppAttributesWithOptions(request: ModifyContainerAppAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyContainerAppAttributesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyContainerAppAttributesResponse>(await this.doRPCRequest("ModifyContainerAppAttributes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyContainerAppAttributesResponse({}));
  }

  async modifyContainerAppAttributes(request: ModifyContainerAppAttributesRequest): Promise<ModifyContainerAppAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyContainerAppAttributesWithOptions(request, runtime);
  }

  async setSchedulerInfoWithOptions(request: SetSchedulerInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetSchedulerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetSchedulerInfoResponse>(await this.doRPCRequest("SetSchedulerInfo", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SetSchedulerInfoResponse({}));
  }

  async setSchedulerInfo(request: SetSchedulerInfoRequest): Promise<SetSchedulerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSchedulerInfoWithOptions(request, runtime);
  }

  async getCloudMetricProfilingWithOptions(request: GetCloudMetricProfilingRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudMetricProfilingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCloudMetricProfilingResponse>(await this.doRPCRequest("GetCloudMetricProfiling", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetCloudMetricProfilingResponse({}));
  }

  async getCloudMetricProfiling(request: GetCloudMetricProfilingRequest): Promise<GetCloudMetricProfilingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudMetricProfilingWithOptions(request, runtime);
  }

  async describeImagePriceWithOptions(request: DescribeImagePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagePriceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeImagePriceResponse>(await this.doRPCRequest("DescribeImagePrice", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeImagePriceResponse({}));
  }

  async describeImagePrice(request: DescribeImagePriceRequest): Promise<DescribeImagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagePriceWithOptions(request, runtime);
  }

  async stopGWSInstanceWithOptions(request: StopGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopGWSInstanceResponse>(await this.doRPCRequest("StopGWSInstance", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StopGWSInstanceResponse({}));
  }

  async stopGWSInstance(request: StopGWSInstanceRequest): Promise<StopGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGWSInstanceWithOptions(request, runtime);
  }

  async getAutoScaleConfigWithOptions(request: GetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAutoScaleConfigResponse>(await this.doRPCRequest("GetAutoScaleConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetAutoScaleConfigResponse({}));
  }

  async getAutoScaleConfig(request: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoScaleConfigWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListNodesResponse>(await this.doRPCRequest("ListNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async listCommandsWithOptions(request: ListCommandsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCommandsResponse>(await this.doRPCRequest("ListCommands", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListCommandsResponse({}));
  }

  async listCommands(request: ListCommandsRequest): Promise<ListCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommandsWithOptions(request, runtime);
  }

  async createGWSImageWithOptions(request: CreateGWSImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateGWSImageResponse>(await this.doRPCRequest("CreateGWSImage", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateGWSImageResponse({}));
  }

  async createGWSImage(request: CreateGWSImageRequest): Promise<CreateGWSImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSImageWithOptions(request, runtime);
  }

  async invokeShellCommandWithOptions(request: InvokeShellCommandRequest, runtime: $Util.RuntimeOptions): Promise<InvokeShellCommandResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<InvokeShellCommandResponse>(await this.doRPCRequest("InvokeShellCommand", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new InvokeShellCommandResponse({}));
  }

  async invokeShellCommand(request: InvokeShellCommandRequest): Promise<InvokeShellCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeShellCommandWithOptions(request, runtime);
  }

  async listFileSystemWithMountTargetsWithOptions(request: ListFileSystemWithMountTargetsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileSystemWithMountTargetsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListFileSystemWithMountTargetsResponse>(await this.doRPCRequest("ListFileSystemWithMountTargets", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListFileSystemWithMountTargetsResponse({}));
  }

  async listFileSystemWithMountTargets(request: ListFileSystemWithMountTargetsRequest): Promise<ListFileSystemWithMountTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileSystemWithMountTargetsWithOptions(request, runtime);
  }

  async modifyClusterAttributesWithOptions(request: ModifyClusterAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterAttributesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyClusterAttributesResponse>(await this.doRPCRequest("ModifyClusterAttributes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyClusterAttributesResponse({}));
  }

  async modifyClusterAttributes(request: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterAttributesWithOptions(request, runtime);
  }

  async deleteJobTemplatesWithOptions(request: DeleteJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteJobTemplatesResponse>(await this.doRPCRequest("DeleteJobTemplates", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteJobTemplatesResponse({}));
  }

  async deleteJobTemplates(request: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobTemplatesWithOptions(request, runtime);
  }

  async getCloudMetricLogsWithOptions(request: GetCloudMetricLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudMetricLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCloudMetricLogsResponse>(await this.doRPCRequest("GetCloudMetricLogs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetCloudMetricLogsResponse({}));
  }

  async getCloudMetricLogs(request: GetCloudMetricLogsRequest): Promise<GetCloudMetricLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudMetricLogsWithOptions(request, runtime);
  }

  async createJobTemplateWithOptions(request: CreateJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateJobTemplateResponse>(await this.doRPCRequest("CreateJobTemplate", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateJobTemplateResponse({}));
  }

  async createJobTemplate(request: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobTemplateWithOptions(request, runtime);
  }

  async getHybridClusterConfigWithOptions(request: GetHybridClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetHybridClusterConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHybridClusterConfigResponse>(await this.doRPCRequest("GetHybridClusterConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetHybridClusterConfigResponse({}));
  }

  async getHybridClusterConfig(request: GetHybridClusterConfigRequest): Promise<GetHybridClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHybridClusterConfigWithOptions(request, runtime);
  }

  async describeGWSInstancesWithOptions(request: DescribeGWSInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeGWSInstancesResponse>(await this.doRPCRequest("DescribeGWSInstances", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeGWSInstancesResponse({}));
  }

  async describeGWSInstances(request: DescribeGWSInstancesRequest): Promise<DescribeGWSInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSInstancesWithOptions(request, runtime);
  }

  async resetNodesWithOptions(request: ResetNodesRequest, runtime: $Util.RuntimeOptions): Promise<ResetNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ResetNodesResponse>(await this.doRPCRequest("ResetNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ResetNodesResponse({}));
  }

  async resetNodes(request: ResetNodesRequest): Promise<ResetNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNodesWithOptions(request, runtime);
  }

  async uninstallSoftwareWithOptions(request: UninstallSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<UninstallSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UninstallSoftwareResponse>(await this.doRPCRequest("UninstallSoftware", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new UninstallSoftwareResponse({}));
  }

  async uninstallSoftware(request: UninstallSoftwareRequest): Promise<UninstallSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallSoftwareWithOptions(request, runtime);
  }

  async applyNodesWithOptions(request: ApplyNodesRequest, runtime: $Util.RuntimeOptions): Promise<ApplyNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ApplyNodesResponse>(await this.doRPCRequest("ApplyNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ApplyNodesResponse({}));
  }

  async applyNodes(request: ApplyNodesRequest): Promise<ApplyNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyNodesWithOptions(request, runtime);
  }

  async describeGWSClustersWithOptions(request: DescribeGWSClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeGWSClustersResponse>(await this.doRPCRequest("DescribeGWSClusters", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeGWSClustersResponse({}));
  }

  async describeGWSClusters(request: DescribeGWSClustersRequest): Promise<DescribeGWSClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSClustersWithOptions(request, runtime);
  }

  async deleteJobsWithOptions(request: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteJobsResponse>(await this.doRPCRequest("DeleteJobs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteJobsResponse({}));
  }

  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  async listContainerImagesWithOptions(request: ListContainerImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListContainerImagesResponse>(await this.doRPCRequest("ListContainerImages", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListContainerImagesResponse({}));
  }

  async listContainerImages(request: ListContainerImagesRequest): Promise<ListContainerImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerImagesWithOptions(request, runtime);
  }

  async deleteNodesWithOptions(request: DeleteNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteNodesResponse>(await this.doRPCRequest("DeleteNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteNodesResponse({}));
  }

  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListJobsResponse>(await this.doRPCRequest("ListJobs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListJobsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  async listCpfsFileSystemsWithOptions(request: ListCpfsFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<ListCpfsFileSystemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCpfsFileSystemsResponse>(await this.doRPCRequest("ListCpfsFileSystems", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListCpfsFileSystemsResponse({}));
  }

  async listCpfsFileSystems(request: ListCpfsFileSystemsRequest): Promise<ListCpfsFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCpfsFileSystemsWithOptions(request, runtime);
  }

  async listClustersMetaWithOptions(request: ListClustersMetaRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersMetaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListClustersMetaResponse>(await this.doRPCRequest("ListClustersMeta", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListClustersMetaResponse({}));
  }

  async listClustersMeta(request: ListClustersMetaRequest): Promise<ListClustersMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersMetaWithOptions(request, runtime);
  }

  async queryServicePackAndPriceWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryServicePackAndPriceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryServicePackAndPriceResponse>(await this.doRPCRequest("QueryServicePackAndPrice", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new QueryServicePackAndPriceResponse({}));
  }

  async queryServicePackAndPrice(): Promise<QueryServicePackAndPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServicePackAndPriceWithOptions(runtime);
  }

  async deleteContainerAppsWithOptions(request: DeleteContainerAppsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContainerAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteContainerAppsResponse>(await this.doRPCRequest("DeleteContainerApps", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteContainerAppsResponse({}));
  }

  async deleteContainerApps(request: DeleteContainerAppsRequest): Promise<DeleteContainerAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContainerAppsWithOptions(request, runtime);
  }

  async listVolumesWithOptions(request: ListVolumesRequest, runtime: $Util.RuntimeOptions): Promise<ListVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListVolumesResponse>(await this.doRPCRequest("ListVolumes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListVolumesResponse({}));
  }

  async listVolumes(request: ListVolumesRequest): Promise<ListVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVolumesWithOptions(request, runtime);
  }

  async listInvocationStatusWithOptions(request: ListInvocationStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListInvocationStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInvocationStatusResponse>(await this.doRPCRequest("ListInvocationStatus", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListInvocationStatusResponse({}));
  }

  async listInvocationStatus(request: ListInvocationStatusRequest): Promise<ListInvocationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInvocationStatusWithOptions(request, runtime);
  }

  async modifyImageGatewayConfigWithOptions(request: ModifyImageGatewayConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageGatewayConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyImageGatewayConfigResponse>(await this.doRPCRequest("ModifyImageGatewayConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyImageGatewayConfigResponse({}));
  }

  async modifyImageGatewayConfig(request: ModifyImageGatewayConfigRequest): Promise<ModifyImageGatewayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageGatewayConfigWithOptions(request, runtime);
  }

  async listContainerAppsWithOptions(request: ListContainerAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListContainerAppsResponse>(await this.doRPCRequest("ListContainerApps", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListContainerAppsResponse({}));
  }

  async listContainerApps(request: ListContainerAppsRequest): Promise<ListContainerAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerAppsWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteSecurityGroupResponse>(await this.doRPCRequest("DeleteSecurityGroup", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async describeNFSClientStatusWithOptions(request: DescribeNFSClientStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNFSClientStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeNFSClientStatusResponse>(await this.doRPCRequest("DescribeNFSClientStatus", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeNFSClientStatusResponse({}));
  }

  async describeNFSClientStatus(request: DescribeNFSClientStatusRequest): Promise<DescribeNFSClientStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNFSClientStatusWithOptions(request, runtime);
  }

  async ecdDeleteDesktopsWithOptions(request: EcdDeleteDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<EcdDeleteDesktopsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EcdDeleteDesktopsResponse>(await this.doRPCRequest("EcdDeleteDesktops", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new EcdDeleteDesktopsResponse({}));
  }

  async ecdDeleteDesktops(request: EcdDeleteDesktopsRequest): Promise<EcdDeleteDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ecdDeleteDesktopsWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListClustersResponse>(await this.doRPCRequest("ListClusters", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async submitJobWithOptions(request: SubmitJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SubmitJobResponse>(await this.doRPCRequest("SubmitJob", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SubmitJobResponse({}));
  }

  async submitJob(request: SubmitJobRequest): Promise<SubmitJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobWithOptions(request, runtime);
  }

  async getAccountingReportWithOptions(request: GetAccountingReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountingReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAccountingReportResponse>(await this.doRPCRequest("GetAccountingReport", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetAccountingReportResponse({}));
  }

  async getAccountingReport(request: GetAccountingReportRequest): Promise<GetAccountingReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountingReportWithOptions(request, runtime);
  }

  async describeAutoScaleConfigWithOptions(request: DescribeAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAutoScaleConfigResponse>(await this.doRPCRequest("DescribeAutoScaleConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAutoScaleConfigResponse({}));
  }

  async describeAutoScaleConfig(request: DescribeAutoScaleConfigRequest): Promise<DescribeAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoScaleConfigWithOptions(request, runtime);
  }

  async getVisualServiceStatusWithOptions(request: GetVisualServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetVisualServiceStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVisualServiceStatusResponse>(await this.doRPCRequest("GetVisualServiceStatus", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetVisualServiceStatusResponse({}));
  }

  async getVisualServiceStatus(request: GetVisualServiceStatusRequest): Promise<GetVisualServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVisualServiceStatusWithOptions(request, runtime);
  }

  async startVisualServiceWithOptions(request: StartVisualServiceRequest, runtime: $Util.RuntimeOptions): Promise<StartVisualServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartVisualServiceResponse>(await this.doRPCRequest("StartVisualService", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StartVisualServiceResponse({}));
  }

  async startVisualService(request: StartVisualServiceRequest): Promise<StartVisualServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVisualServiceWithOptions(request, runtime);
  }

  async getIfEcsTypeSupportHtConfigWithOptions(request: GetIfEcsTypeSupportHtConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIfEcsTypeSupportHtConfigResponse>(await this.doRPCRequest("GetIfEcsTypeSupportHtConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetIfEcsTypeSupportHtConfigResponse({}));
  }

  async getIfEcsTypeSupportHtConfig(request: GetIfEcsTypeSupportHtConfigRequest): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIfEcsTypeSupportHtConfigWithOptions(request, runtime);
  }

  async getSchedulerInfoWithOptions(request: GetSchedulerInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSchedulerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSchedulerInfoResponse>(await this.doRPCRequest("GetSchedulerInfo", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetSchedulerInfoResponse({}));
  }

  async getSchedulerInfo(request: GetSchedulerInfoRequest): Promise<GetSchedulerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSchedulerInfoWithOptions(request, runtime);
  }

  async setGWSInstanceUserWithOptions(request: SetGWSInstanceUserRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSInstanceUserResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetGWSInstanceUserResponse>(await this.doRPCRequest("SetGWSInstanceUser", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SetGWSInstanceUserResponse({}));
  }

  async setGWSInstanceUser(request: SetGWSInstanceUserRequest): Promise<SetGWSInstanceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSInstanceUserWithOptions(request, runtime);
  }

  async getWorkbenchTokenWithOptions(request: GetWorkbenchTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkbenchTokenResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetWorkbenchTokenResponse>(await this.doRPCRequest("GetWorkbenchToken", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetWorkbenchTokenResponse({}));
  }

  async getWorkbenchToken(request: GetWorkbenchTokenRequest): Promise<GetWorkbenchTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkbenchTokenWithOptions(request, runtime);
  }

  async installSoftwareWithOptions(request: InstallSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<InstallSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<InstallSoftwareResponse>(await this.doRPCRequest("InstallSoftware", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new InstallSoftwareResponse({}));
  }

  async installSoftware(request: InstallSoftwareRequest): Promise<InstallSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installSoftwareWithOptions(request, runtime);
  }

  async listAvailableEcsTypesWithOptions(request: ListAvailableEcsTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableEcsTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAvailableEcsTypesResponse>(await this.doRPCRequest("ListAvailableEcsTypes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListAvailableEcsTypesResponse({}));
  }

  async listAvailableEcsTypes(request: ListAvailableEcsTypesRequest): Promise<ListAvailableEcsTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableEcsTypesWithOptions(request, runtime);
  }

  async mountNFSWithOptions(request: MountNFSRequest, runtime: $Util.RuntimeOptions): Promise<MountNFSResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<MountNFSResponse>(await this.doRPCRequest("MountNFS", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new MountNFSResponse({}));
  }

  async mountNFS(request: MountNFSRequest): Promise<MountNFSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mountNFSWithOptions(request, runtime);
  }

  async addQueueWithOptions(request: AddQueueRequest, runtime: $Util.RuntimeOptions): Promise<AddQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddQueueResponse>(await this.doRPCRequest("AddQueue", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddQueueResponse({}));
  }

  async addQueue(request: AddQueueRequest): Promise<AddQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addQueueWithOptions(request, runtime);
  }

  async createGWSInstanceWithOptions(request: CreateGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateGWSInstanceResponse>(await this.doRPCRequest("CreateGWSInstance", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateGWSInstanceResponse({}));
  }

  async createGWSInstance(request: CreateGWSInstanceRequest): Promise<CreateGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSInstanceWithOptions(request, runtime);
  }

  async listCurrentClientVersionWithOptions(runtime: $Util.RuntimeOptions): Promise<ListCurrentClientVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListCurrentClientVersionResponse>(await this.doRPCRequest("ListCurrentClientVersion", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListCurrentClientVersionResponse({}));
  }

  async listCurrentClientVersion(): Promise<ListCurrentClientVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCurrentClientVersionWithOptions(runtime);
  }

  async updateClusterVolumesWithOptions(request: UpdateClusterVolumesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UpdateClusterVolumesResponse>(await this.doRPCRequest("UpdateClusterVolumes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new UpdateClusterVolumesResponse({}));
  }

  async updateClusterVolumes(request: UpdateClusterVolumesRequest): Promise<UpdateClusterVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterVolumesWithOptions(request, runtime);
  }

  async startGWSInstanceWithOptions(request: StartGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartGWSInstanceResponse>(await this.doRPCRequest("StartGWSInstance", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StartGWSInstanceResponse({}));
  }

  async startGWSInstance(request: StartGWSInstanceRequest): Promise<StartGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startGWSInstanceWithOptions(request, runtime);
  }

  async listInvocationResultsWithOptions(request: ListInvocationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListInvocationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInvocationResultsResponse>(await this.doRPCRequest("ListInvocationResults", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListInvocationResultsResponse({}));
  }

  async listInvocationResults(request: ListInvocationResultsRequest): Promise<ListInvocationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInvocationResultsWithOptions(request, runtime);
  }

  async setAutoScaleConfigWithOptions(request: SetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetAutoScaleConfigResponse>(await this.doRPCRequest("SetAutoScaleConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SetAutoScaleConfigResponse({}));
  }

  async setAutoScaleConfig(request: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAutoScaleConfigWithOptions(request, runtime);
  }

  async addNodesWithOptions(request: AddNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddNodesResponse>(await this.doRPCRequest("AddNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddNodesResponse({}));
  }

  async addNodes(request: AddNodesRequest): Promise<AddNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNodesWithOptions(request, runtime);
  }

  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<ListSoftwaresResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSoftwaresResponse>(await this.doRPCRequest("ListSoftwares", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListSoftwaresResponse({}));
  }

  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  async listSecurityGroupsWithOptions(request: ListSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSecurityGroupsResponse>(await this.doRPCRequest("ListSecurityGroups", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListSecurityGroupsResponse({}));
  }

  async listSecurityGroups(request: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityGroupsWithOptions(request, runtime);
  }

  async describeGWSImagesWithOptions(request: DescribeGWSImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeGWSImagesResponse>(await this.doRPCRequest("DescribeGWSImages", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeGWSImagesResponse({}));
  }

  async describeGWSImages(request: DescribeGWSImagesRequest): Promise<DescribeGWSImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSImagesWithOptions(request, runtime);
  }

  async stopJobsWithOptions(request: StopJobsRequest, runtime: $Util.RuntimeOptions): Promise<StopJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopJobsResponse>(await this.doRPCRequest("StopJobs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StopJobsResponse({}));
  }

  async stopJobs(request: StopJobsRequest): Promise<StopJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  async startNodesWithOptions(request: StartNodesRequest, runtime: $Util.RuntimeOptions): Promise<StartNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartNodesResponse>(await this.doRPCRequest("StartNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StartNodesResponse({}));
  }

  async startNodes(request: StartNodesRequest): Promise<StartNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startNodesWithOptions(request, runtime);
  }

  async modifyUserGroupsWithOptions(request: ModifyUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyUserGroupsResponse>(await this.doRPCRequest("ModifyUserGroups", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyUserGroupsResponse({}));
  }

  async modifyUserGroups(request: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserGroupsWithOptions(request, runtime);
  }

  async setQueueWithOptions(request: SetQueueRequest, runtime: $Util.RuntimeOptions): Promise<SetQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetQueueResponse>(await this.doRPCRequest("SetQueue", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SetQueueResponse({}));
  }

  async setQueue(request: SetQueueRequest): Promise<SetQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setQueueWithOptions(request, runtime);
  }

  async startClusterWithOptions(request: StartClusterRequest, runtime: $Util.RuntimeOptions): Promise<StartClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartClusterResponse>(await this.doRPCRequest("StartCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StartClusterResponse({}));
  }

  async startCluster(request: StartClusterRequest): Promise<StartClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startClusterWithOptions(request, runtime);
  }

  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCustomImagesResponse>(await this.doRPCRequest("ListCustomImages", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListCustomImagesResponse({}));
  }

  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  async addUsersWithOptions(request: AddUsersRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddUsersResponse>(await this.doRPCRequest("AddUsers", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddUsersResponse({}));
  }

  async addUsers(request: AddUsersRequest): Promise<AddUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersWithOptions(request, runtime);
  }

  async createGWSClusterWithOptions(request: CreateGWSClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateGWSClusterResponse>(await this.doRPCRequest("CreateGWSCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateGWSClusterResponse({}));
  }

  async createGWSCluster(request: CreateGWSClusterRequest): Promise<CreateGWSClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSClusterWithOptions(request, runtime);
  }

  async listJobTemplatesWithOptions(request: ListJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListJobTemplatesResponse>(await this.doRPCRequest("ListJobTemplates", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListJobTemplatesResponse({}));
  }

  async listJobTemplates(request: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobTemplatesWithOptions(request, runtime);
  }

  async describeImageGatewayConfigWithOptions(request: DescribeImageGatewayConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageGatewayConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeImageGatewayConfigResponse>(await this.doRPCRequest("DescribeImageGatewayConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeImageGatewayConfigResponse({}));
  }

  async describeImageGatewayConfig(request: DescribeImageGatewayConfigRequest): Promise<DescribeImageGatewayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageGatewayConfigWithOptions(request, runtime);
  }

  async getGWSConnectTicketWithOptions(request: GetGWSConnectTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetGWSConnectTicketResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetGWSConnectTicketResponse>(await this.doRPCRequest("GetGWSConnectTicket", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetGWSConnectTicketResponse({}));
  }

  async getGWSConnectTicket(request: GetGWSConnectTicketRequest): Promise<GetGWSConnectTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGWSConnectTicketWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTasksResponse>(await this.doRPCRequest("ListTasks", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async stopClusterWithOptions(request: StopClusterRequest, runtime: $Util.RuntimeOptions): Promise<StopClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopClusterResponse>(await this.doRPCRequest("StopCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StopClusterResponse({}));
  }

  async stopCluster(request: StopClusterRequest): Promise<StopClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopClusterWithOptions(request, runtime);
  }

  async addSecurityGroupWithOptions(request: AddSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddSecurityGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddSecurityGroupResponse>(await this.doRPCRequest("AddSecurityGroup", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddSecurityGroupResponse({}));
  }

  async addSecurityGroup(request: AddSecurityGroupRequest): Promise<AddSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecurityGroupWithOptions(request, runtime);
  }

  async listNodesNoPagingWithOptions(request: ListNodesNoPagingRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesNoPagingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListNodesNoPagingResponse>(await this.doRPCRequest("ListNodesNoPaging", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListNodesNoPagingResponse({}));
  }

  async listNodesNoPaging(request: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesNoPagingWithOptions(request, runtime);
  }

  async setGWSInstanceNameWithOptions(request: SetGWSInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSInstanceNameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetGWSInstanceNameResponse>(await this.doRPCRequest("SetGWSInstanceName", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new SetGWSInstanceNameResponse({}));
  }

  async setGWSInstanceName(request: SetGWSInstanceNameRequest): Promise<SetGWSInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSInstanceNameWithOptions(request, runtime);
  }

  async createHybridClusterWithOptions(request: CreateHybridClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateHybridClusterResponse>(await this.doRPCRequest("CreateHybridCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateHybridClusterResponse({}));
  }

  async createHybridCluster(request: CreateHybridClusterRequest): Promise<CreateHybridClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridClusterWithOptions(request, runtime);
  }

  async updateQueueConfigWithOptions(request: UpdateQueueConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQueueConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UpdateQueueConfigResponse>(await this.doRPCRequest("UpdateQueueConfig", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new UpdateQueueConfigResponse({}));
  }

  async updateQueueConfig(request: UpdateQueueConfigRequest): Promise<UpdateQueueConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQueueConfigWithOptions(request, runtime);
  }

  async stopVisualServiceWithOptions(request: StopVisualServiceRequest, runtime: $Util.RuntimeOptions): Promise<StopVisualServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopVisualServiceResponse>(await this.doRPCRequest("StopVisualService", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new StopVisualServiceResponse({}));
  }

  async stopVisualService(request: StopVisualServiceRequest): Promise<StopVisualServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopVisualServiceWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateClusterResponse>(await this.doRPCRequest("CreateCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async describeImageWithOptions(request: DescribeImageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeImageResponse>(await this.doRPCRequest("DescribeImage", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeImageResponse({}));
  }

  async describeImage(request: DescribeImageRequest): Promise<DescribeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageWithOptions(request, runtime);
  }

  async modifyUserPasswordsWithOptions(request: ModifyUserPasswordsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserPasswordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyUserPasswordsResponse>(await this.doRPCRequest("ModifyUserPasswords", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyUserPasswordsResponse({}));
  }

  async modifyUserPasswords(request: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserPasswordsWithOptions(request, runtime);
  }

  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteQueueResponse>(await this.doRPCRequest("DeleteQueue", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteQueueResponse({}));
  }

  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  async listInstalledSoftwareWithOptions(request: ListInstalledSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<ListInstalledSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInstalledSoftwareResponse>(await this.doRPCRequest("ListInstalledSoftware", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListInstalledSoftwareResponse({}));
  }

  async listInstalledSoftware(request: ListInstalledSoftwareRequest): Promise<ListInstalledSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstalledSoftwareWithOptions(request, runtime);
  }

  async getHealthMonitorLogsWithOptions(request: GetHealthMonitorLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetHealthMonitorLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHealthMonitorLogsResponse>(await this.doRPCRequest("GetHealthMonitorLogs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetHealthMonitorLogsResponse({}));
  }

  async getHealthMonitorLogs(request: GetHealthMonitorLogsRequest): Promise<GetHealthMonitorLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthMonitorLogsWithOptions(request, runtime);
  }

  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClientResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UpgradeClientResponse>(await this.doRPCRequest("UpgradeClient", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new UpgradeClientResponse({}));
  }

  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteClusterResponse>(await this.doRPCRequest("DeleteCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListImagesResponse>(await this.doRPCRequest("ListImages", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListImagesResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  async setGWSClusterPolicyWithOptions(request: SetGWSClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSClusterPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGWSClusterPolicyResponse>(await this.doRPCRequest("SetGWSClusterPolicy", "2018-04-12", "HTTPS", "POST", "AK", "json", req, runtime), new SetGWSClusterPolicyResponse({}));
  }

  async setGWSClusterPolicy(request: SetGWSClusterPolicyRequest): Promise<SetGWSClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSClusterPolicyWithOptions(request, runtime);
  }

  async listQueuesWithOptions(request: ListQueuesRequest, runtime: $Util.RuntimeOptions): Promise<ListQueuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListQueuesResponse>(await this.doRPCRequest("ListQueues", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListQueuesResponse({}));
  }

  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  async createJobFileWithOptions(request: CreateJobFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobFileResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateJobFileResponse>(await this.doRPCRequest("CreateJobFile", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new CreateJobFileResponse({}));
  }

  async createJobFile(request: CreateJobFileRequest): Promise<CreateJobFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobFileWithOptions(request, runtime);
  }

  async listCloudMetricProfilingsWithOptions(request: ListCloudMetricProfilingsRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudMetricProfilingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCloudMetricProfilingsResponse>(await this.doRPCRequest("ListCloudMetricProfilings", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListCloudMetricProfilingsResponse({}));
  }

  async listCloudMetricProfilings(request: ListCloudMetricProfilingsRequest): Promise<ListCloudMetricProfilingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudMetricProfilingsWithOptions(request, runtime);
  }

  async getClusterVolumesWithOptions(request: GetClusterVolumesRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetClusterVolumesResponse>(await this.doRPCRequest("GetClusterVolumes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetClusterVolumesResponse({}));
  }

  async getClusterVolumes(request: GetClusterVolumesRequest): Promise<GetClusterVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterVolumesWithOptions(request, runtime);
  }

  async deleteGWSInstanceWithOptions(request: DeleteGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteGWSInstanceResponse>(await this.doRPCRequest("DeleteGWSInstance", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteGWSInstanceResponse({}));
  }

  async deleteGWSInstance(request: DeleteGWSInstanceRequest): Promise<DeleteGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGWSInstanceWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListRegionsResponse>(await this.doRPCRequest("ListRegions", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async initializeEHPCWithOptions(request: InitializeEHPCRequest, runtime: $Util.RuntimeOptions): Promise<InitializeEHPCResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<InitializeEHPCResponse>(await this.doRPCRequest("InitializeEHPC", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new InitializeEHPCResponse({}));
  }

  async initializeEHPC(request: InitializeEHPCRequest): Promise<InitializeEHPCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeEHPCWithOptions(request, runtime);
  }

  async runCloudMetricProfilingWithOptions(request: RunCloudMetricProfilingRequest, runtime: $Util.RuntimeOptions): Promise<RunCloudMetricProfilingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RunCloudMetricProfilingResponse>(await this.doRPCRequest("RunCloudMetricProfiling", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new RunCloudMetricProfilingResponse({}));
  }

  async runCloudMetricProfiling(request: RunCloudMetricProfilingRequest): Promise<RunCloudMetricProfilingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCloudMetricProfilingWithOptions(request, runtime);
  }

  async addExistedNodesWithOptions(request: AddExistedNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddExistedNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddExistedNodesResponse>(await this.doRPCRequest("AddExistedNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddExistedNodesResponse({}));
  }

  async addExistedNodes(request: AddExistedNodesRequest): Promise<AddExistedNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addExistedNodesWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async rerunJobsWithOptions(request: RerunJobsRequest, runtime: $Util.RuntimeOptions): Promise<RerunJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RerunJobsResponse>(await this.doRPCRequest("RerunJobs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new RerunJobsResponse({}));
  }

  async rerunJobs(request: RerunJobsRequest): Promise<RerunJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunJobsWithOptions(request, runtime);
  }

  async describeGWSClusterPolicyWithOptions(request: DescribeGWSClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSClusterPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGWSClusterPolicyResponse>(await this.doRPCRequest("DescribeGWSClusterPolicy", "2018-04-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGWSClusterPolicyResponse({}));
  }

  async describeGWSClusterPolicy(request: DescribeGWSClusterPolicyRequest): Promise<DescribeGWSClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSClusterPolicyWithOptions(request, runtime);
  }

  async addLocalNodesWithOptions(request: AddLocalNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddLocalNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddLocalNodesResponse>(await this.doRPCRequest("AddLocalNodes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddLocalNodesResponse({}));
  }

  async addLocalNodes(request: AddLocalNodesRequest): Promise<AddLocalNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLocalNodesWithOptions(request, runtime);
  }

  async editJobTemplateWithOptions(request: EditJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<EditJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EditJobTemplateResponse>(await this.doRPCRequest("EditJobTemplate", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new EditJobTemplateResponse({}));
  }

  async editJobTemplate(request: EditJobTemplateRequest): Promise<EditJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editJobTemplateWithOptions(request, runtime);
  }

  async modifyVisualServicePasswdWithOptions(request: ModifyVisualServicePasswdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVisualServicePasswdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ModifyVisualServicePasswdResponse>(await this.doRPCRequest("ModifyVisualServicePasswd", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ModifyVisualServicePasswdResponse({}));
  }

  async modifyVisualServicePasswd(request: ModifyVisualServicePasswdRequest): Promise<ModifyVisualServicePasswdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVisualServicePasswdWithOptions(request, runtime);
  }

  async listPreferredEcsTypesWithOptions(request: ListPreferredEcsTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListPreferredEcsTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPreferredEcsTypesResponse>(await this.doRPCRequest("ListPreferredEcsTypes", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListPreferredEcsTypesResponse({}));
  }

  async listPreferredEcsTypes(request: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreferredEcsTypesWithOptions(request, runtime);
  }

  async addContainerAppWithOptions(request: AddContainerAppRequest, runtime: $Util.RuntimeOptions): Promise<AddContainerAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddContainerAppResponse>(await this.doRPCRequest("AddContainerApp", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new AddContainerAppResponse({}));
  }

  async addContainerApp(request: AddContainerAppRequest): Promise<AddContainerAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addContainerAppWithOptions(request, runtime);
  }

  async listClusterLogsWithOptions(request: ListClusterLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListClusterLogsResponse>(await this.doRPCRequest("ListClusterLogs", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListClusterLogsResponse({}));
  }

  async listClusterLogs(request: ListClusterLogsRequest): Promise<ListClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterLogsWithOptions(request, runtime);
  }

  async recoverClusterWithOptions(request: RecoverClusterRequest, runtime: $Util.RuntimeOptions): Promise<RecoverClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RecoverClusterResponse>(await this.doRPCRequest("RecoverCluster", "2018-04-12", "HTTPS", "GET", "AK", "json", req, runtime), new RecoverClusterResponse({}));
  }

  async recoverCluster(request: RecoverClusterRequest): Promise<RecoverClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverClusterWithOptions(request, runtime);
  }

}
