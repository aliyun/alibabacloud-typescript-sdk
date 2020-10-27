// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ReleaseCapacityReservationRequest extends $tea.Model {
  regionId: string;
  privatePoolOptions?: ReleaseCapacityReservationRequestPrivatePoolOptions;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      privatePoolOptions: 'PrivatePoolOptions',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      privatePoolOptions: ReleaseCapacityReservationRequestPrivatePoolOptions,
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityReservationResponse extends $tea.Model {
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

export class DescribeCapacityReservationsRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  privatePoolOptions?: DescribeCapacityReservationsRequestPrivatePoolOptions;
  platform?: string;
  instanceType?: string;
  zoneId?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      privatePoolOptions: 'PrivatePoolOptions',
      platform: 'Platform',
      instanceType: 'InstanceType',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      privatePoolOptions: DescribeCapacityReservationsRequestPrivatePoolOptions,
      platform: 'string',
      instanceType: 'string',
      zoneId: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  maxResults: number;
  totalCount: number;
  capacityReservationSet: DescribeCapacityReservationsResponseCapacityReservationSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      capacityReservationSet: 'CapacityReservationSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      capacityReservationSet: DescribeCapacityReservationsResponseCapacityReservationSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationInstancesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  privatePoolOptions?: DescribeCapacityReservationInstancesRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      privatePoolOptions: DescribeCapacityReservationInstancesRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationInstancesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  maxResults: number;
  totalCount: number;
  capacityReservationItem: DescribeCapacityReservationInstancesResponseCapacityReservationItem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      capacityReservationItem: 'CapacityReservationItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      capacityReservationItem: DescribeCapacityReservationInstancesResponseCapacityReservationItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationRequest extends $tea.Model {
  regionId: string;
  clientToken?: string;
  zoneId: string[];
  privatePoolOptions?: CreateCapacityReservationRequestPrivatePoolOptions;
  description?: string;
  instanceAmount: number;
  instanceType: string;
  startTime?: string;
  endTime?: string;
  endTimeType?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      zoneId: 'ZoneId',
      privatePoolOptions: 'PrivatePoolOptions',
      description: 'Description',
      instanceAmount: 'InstanceAmount',
      instanceType: 'InstanceType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      endTimeType: 'EndTimeType',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      zoneId: { 'type': 'array', 'itemType': 'string' },
      privatePoolOptions: CreateCapacityReservationRequestPrivatePoolOptions,
      description: 'string',
      instanceAmount: 'number',
      instanceType: 'string',
      startTime: 'string',
      endTime: 'string',
      endTimeType: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationResponse extends $tea.Model {
  requestId: string;
  privatePoolOptionsId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      privatePoolOptionsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartElasticityAssuranceRequest extends $tea.Model {
  regionId: string;
  privatePoolOptions?: StartElasticityAssuranceRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      privatePoolOptions: StartElasticityAssuranceRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartElasticityAssuranceResponse extends $tea.Model {
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

export class ModifyInstanceAttachmentAttributesRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  privatePoolOptions?: ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      privatePoolOptions: ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttachmentAttributesResponse extends $tea.Model {
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

export class DescribeInstanceAttachmentAttributesRequest extends $tea.Model {
  regionId: string;
  instanceIds: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttachmentAttributesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instances: DescribeInstanceAttachmentAttributesResponseInstances;
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
      instances: DescribeInstanceAttachmentAttributesResponseInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  privatePoolOptions?: DescribeElasticityAssurancesRequestPrivatePoolOptions;
  platform?: string;
  instanceType?: string;
  zoneId?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      privatePoolOptions: 'PrivatePoolOptions',
      platform: 'Platform',
      instanceType: 'InstanceType',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      privatePoolOptions: DescribeElasticityAssurancesRequestPrivatePoolOptions,
      platform: 'string',
      instanceType: 'string',
      zoneId: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  maxResults: number;
  totalCount: number;
  elasticityAssuranceSet: DescribeElasticityAssurancesResponseElasticityAssuranceSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      elasticityAssuranceSet: 'ElasticityAssuranceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      elasticityAssuranceSet: DescribeElasticityAssurancesResponseElasticityAssuranceSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssuranceInstancesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  privatePoolOptions?: DescribeElasticityAssuranceInstancesRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      privatePoolOptions: DescribeElasticityAssuranceInstancesRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssuranceInstancesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  maxResults: number;
  totalCount: number;
  elasticityAssuranceItem: DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      elasticityAssuranceItem: 'ElasticityAssuranceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      elasticityAssuranceItem: DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceRequest extends $tea.Model {
  regionId: string;
  period?: number;
  periodUnit?: string;
  clientToken?: string;
  privatePoolOptions?: CreateElasticityAssuranceRequestPrivatePoolOptions;
  description?: string;
  assuranceTimes?: string;
  zoneId: string[];
  instanceType: string[];
  instanceAmount?: number;
  instanceCpuCoreCount?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      clientToken: 'ClientToken',
      privatePoolOptions: 'PrivatePoolOptions',
      description: 'Description',
      assuranceTimes: 'AssuranceTimes',
      zoneId: 'ZoneId',
      instanceType: 'InstanceType',
      instanceAmount: 'InstanceAmount',
      instanceCpuCoreCount: 'InstanceCpuCoreCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      period: 'number',
      periodUnit: 'string',
      clientToken: 'string',
      privatePoolOptions: CreateElasticityAssuranceRequestPrivatePoolOptions,
      description: 'string',
      assuranceTimes: 'string',
      zoneId: { 'type': 'array', 'itemType': 'string' },
      instanceType: { 'type': 'array', 'itemType': 'string' },
      instanceAmount: 'number',
      instanceCpuCoreCount: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceResponse extends $tea.Model {
  requestId: string;
  privatePoolOptionsId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      privatePoolOptionsId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileRequest extends $tea.Model {
  regionId: string;
  name: string;
  description?: string;
  timeout?: number;
  targetDir: string;
  instanceId: string[];
  contentType?: string;
  content: string;
  fileOwner?: string;
  fileGroup?: string;
  fileMode?: string;
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      timeout: 'Timeout',
      targetDir: 'TargetDir',
      instanceId: 'InstanceId',
      contentType: 'ContentType',
      content: 'Content',
      fileOwner: 'FileOwner',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      overwrite: 'Overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      description: 'string',
      timeout: 'number',
      targetDir: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      contentType: 'string',
      content: 'string',
      fileOwner: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      overwrite: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFileResponse extends $tea.Model {
  requestId: string;
  invokeId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsRequest extends $tea.Model {
  regionId: string;
  invokeId?: string;
  name?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      name: 'Name',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      name: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  invocations: DescribeSendFileResultsResponseInvocations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      invocations: 'Invocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      invocations: DescribeSendFileResultsResponseInvocations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClusterAttributeRequest extends $tea.Model {
  regionId: string;
  dedicatedHostClusterId: string;
  dedicatedHostClusterName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostClusterId: 'string',
      dedicatedHostClusterName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostClusterAttributeResponse extends $tea.Model {
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

export class DescribeDedicatedHostClustersRequest extends $tea.Model {
  status?: string;
  lockReason?: string;
  tag?: DescribeDedicatedHostClustersRequestTag[];
  resourceGroupId?: string;
  regionId: string;
  zoneId?: string;
  dedicatedHostClusterIds?: string;
  dedicatedHostClusterName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lockReason: 'LockReason',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      dedicatedHostClusterIds: 'DedicatedHostClusterIds',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lockReason: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersRequestTag },
      resourceGroupId: 'string',
      regionId: 'string',
      zoneId: 'string',
      dedicatedHostClusterIds: 'string',
      dedicatedHostClusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  dedicatedHostClusters: DescribeDedicatedHostClustersResponseDedicatedHostClusters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dedicatedHostClusters: 'DedicatedHostClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      dedicatedHostClusters: DescribeDedicatedHostClustersResponseDedicatedHostClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostClusterRequest extends $tea.Model {
  regionId: string;
  dedicatedHostClusterId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostClusterResponse extends $tea.Model {
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

export class CreateDedicatedHostClusterRequest extends $tea.Model {
  regionId: string;
  dryRun?: boolean;
  tag?: CreateDedicatedHostClusterRequestTag[];
  resourceGroupId?: string;
  zoneId?: string;
  dedicatedHostClusterName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dryRun: 'DryRun',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dryRun: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateDedicatedHostClusterRequestTag },
      resourceGroupId: 'string',
      zoneId: 'string',
      dedicatedHostClusterName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostClusterResponse extends $tea.Model {
  requestId: string;
  dedicatedHostClusterId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetSupportedInstanceTypeFamilyRequest extends $tea.Model {
  regionId: string;
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

export class DescribeDeploymentSetSupportedInstanceTypeFamilyResponse extends $tea.Model {
  requestId: string;
  instanceTypeFamilies: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceTypeFamilies: 'InstanceTypeFamilies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceTypeFamilies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeRequest extends $tea.Model {
  regionId: string;
  tag?: DescribeNetworkInterfaceAttributeRequestTag[];
  networkInterfaceId: string;
  attribute?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      networkInterfaceId: 'NetworkInterfaceId',
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeRequestTag },
      networkInterfaceId: 'string',
      attribute: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponse extends $tea.Model {
  requestId: string;
  networkInterfaceId: string;
  status: string;
  type: string;
  vpcId: string;
  vSwitchId: string;
  zoneId: string;
  privateIpAddress: string;
  macAddress: string;
  networkInterfaceName: string;
  description: string;
  instanceId: string;
  creationTime: string;
  resourceGroupId: string;
  serviceID: number;
  serviceManaged: boolean;
  queueNumber: number;
  ownerId: string;
  privateIpSets: DescribeNetworkInterfaceAttributeResponsePrivateIpSets;
  ipv6Sets: DescribeNetworkInterfaceAttributeResponseIpv6Sets;
  tags: DescribeNetworkInterfaceAttributeResponseTags;
  associatedPublicIp: DescribeNetworkInterfaceAttributeResponseAssociatedPublicIp;
  attachment: DescribeNetworkInterfaceAttributeResponseAttachment;
  securityGroupIds: DescribeNetworkInterfaceAttributeResponseSecurityGroupIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      networkInterfaceId: 'NetworkInterfaceId',
      status: 'Status',
      type: 'Type',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      privateIpAddress: 'PrivateIpAddress',
      macAddress: 'MacAddress',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
      instanceId: 'InstanceId',
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      queueNumber: 'QueueNumber',
      ownerId: 'OwnerId',
      privateIpSets: 'PrivateIpSets',
      ipv6Sets: 'Ipv6Sets',
      tags: 'Tags',
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      networkInterfaceId: 'string',
      status: 'string',
      type: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      privateIpAddress: 'string',
      macAddress: 'string',
      networkInterfaceName: 'string',
      description: 'string',
      instanceId: 'string',
      creationTime: 'string',
      resourceGroupId: 'string',
      serviceID: 'number',
      serviceManaged: 'boolean',
      queueNumber: 'number',
      ownerId: 'string',
      privateIpSets: DescribeNetworkInterfaceAttributeResponsePrivateIpSets,
      ipv6Sets: DescribeNetworkInterfaceAttributeResponseIpv6Sets,
      tags: DescribeNetworkInterfaceAttributeResponseTags,
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponseAssociatedPublicIp,
      attachment: DescribeNetworkInterfaceAttributeResponseAttachment,
      securityGroupIds: DescribeNetworkInterfaceAttributeResponseSecurityGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySnapshotRequest extends $tea.Model {
  tag?: CopySnapshotRequestTag[];
  resourceGroupId?: string;
  regionId: string;
  destinationRegionId: string;
  snapshotId: string;
  destinationSnapshotName: string;
  destinationSnapshotDescription: string;
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      destinationRegionId: 'DestinationRegionId',
      snapshotId: 'SnapshotId',
      destinationSnapshotName: 'DestinationSnapshotName',
      destinationSnapshotDescription: 'DestinationSnapshotDescription',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': CopySnapshotRequestTag },
      resourceGroupId: 'string',
      regionId: 'string',
      destinationRegionId: 'string',
      snapshotId: 'string',
      destinationSnapshotName: 'string',
      destinationSnapshotDescription: 'string',
      retentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySnapshotResponse extends $tea.Model {
  requestId: string;
  snapshotId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostsChargeTypeRequest extends $tea.Model {
  dedicatedHostIds: string;
  regionId: string;
  period?: number;
  periodUnit?: string;
  dryRun?: boolean;
  autoPay?: boolean;
  dedicatedHostChargeType?: string;
  clientToken?: string;
  detailFee?: boolean;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostIds: 'DedicatedHostIds',
      regionId: 'RegionId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      dryRun: 'DryRun',
      autoPay: 'AutoPay',
      dedicatedHostChargeType: 'DedicatedHostChargeType',
      clientToken: 'ClientToken',
      detailFee: 'DetailFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostIds: 'string',
      regionId: 'string',
      period: 'number',
      periodUnit: 'string',
      dryRun: 'boolean',
      autoPay: 'boolean',
      dedicatedHostChargeType: 'string',
      clientToken: 'string',
      detailFee: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostsChargeTypeResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  feeOfInstances: ModifyDedicatedHostsChargeTypeResponseFeeOfInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      feeOfInstances: 'FeeOfInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      feeOfInstances: ModifyDedicatedHostsChargeTypeResponseFeeOfInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMetadataOptionsRequest extends $tea.Model {
  regionId: string;
  instanceId?: string;
  httpEndpoint: string;
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      httpEndpoint: 'string',
      httpTokens: 'string',
      httpPutResponseHopLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMetadataOptionsResponse extends $tea.Model {
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

export class DescribeImageFromFamilyRequest extends $tea.Model {
  regionId: string;
  imageFamily: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageFamily: 'ImageFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageFamily: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponse extends $tea.Model {
  requestId: string;
  image: DescribeImageFromFamilyResponseImage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      image: DescribeImageFromFamilyResponseImage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesRequest extends $tea.Model {
  dryRun?: boolean;
  instanceId: string[];
  regionId: string;
  forceStop?: boolean;
  stoppedMode?: string;
  batchOptimization?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      forceStop: 'ForceStop',
      stoppedMode: 'StoppedMode',
      batchOptimization: 'BatchOptimization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      forceStop: 'boolean',
      stoppedMode: 'string',
      batchOptimization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponse extends $tea.Model {
  requestId: string;
  instanceResponses: StopInstancesResponseInstanceResponses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceResponses: 'InstanceResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceResponses: StopInstancesResponseInstanceResponses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesRequest extends $tea.Model {
  dryRun?: boolean;
  instanceId: string[];
  regionId: string;
  batchOptimization?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      batchOptimization: 'BatchOptimization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      batchOptimization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponse extends $tea.Model {
  requestId: string;
  instanceResponses: StartInstancesResponseInstanceResponses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceResponses: 'InstanceResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceResponses: StartInstancesResponseInstanceResponses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesRequest extends $tea.Model {
  dryRun?: boolean;
  instanceId: string[];
  regionId: string;
  forceReboot?: boolean;
  batchOptimization?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      forceReboot: 'ForceReboot',
      batchOptimization: 'BatchOptimization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      forceReboot: 'boolean',
      batchOptimization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponse extends $tea.Model {
  requestId: string;
  instanceResponses: RebootInstancesResponseInstanceResponses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceResponses: 'InstanceResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceResponses: RebootInstancesResponseInstanceResponses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedeployDedicatedHostRequest extends $tea.Model {
  regionId: string;
  dedicatedHostId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedeployDedicatedHostResponse extends $tea.Model {
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

export class ModifyInstanceMaintenanceAttributesRequest extends $tea.Model {
  regionId: string;
  instanceId?: string[];
  maintenanceWindow?: ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow[];
  actionOnMaintenance?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maintenanceWindow: 'MaintenanceWindow',
      actionOnMaintenance: 'ActionOnMaintenance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      maintenanceWindow: { 'type': 'array', 'itemType': ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow },
      actionOnMaintenance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintenanceAttributesResponse extends $tea.Model {
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

export class DescribeInstanceMaintenanceAttributesRequest extends $tea.Model {
  regionId: string;
  instanceId?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  maintenanceAttributes: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      maintenanceAttributes: 'MaintenanceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      maintenanceAttributes: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDemandRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  zoneId?: string;
  demandId: string;
  demandName?: string;
  demandDescription?: string;
  instanceType?: string;
  amount?: number;
  instanceChargeType?: string;
  period?: number;
  periodUnit?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      demandId: 'DemandId',
      demandName: 'DemandName',
      demandDescription: 'DemandDescription',
      instanceType: 'InstanceType',
      amount: 'Amount',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      demandId: 'string',
      demandName: 'string',
      demandDescription: 'string',
      instanceType: 'string',
      amount: 'number',
      instanceChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDemandResponse extends $tea.Model {
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

export class DeleteDemandRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  demandId: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      demandId: 'DemandId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      demandId: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDemandResponse extends $tea.Model {
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

export class CreateDemandRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  zoneId: string;
  demandName?: string;
  demandDescription?: string;
  instanceType: string;
  amount: number;
  instanceChargeType?: string;
  period: number;
  periodUnit: string;
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      demandName: 'DemandName',
      demandDescription: 'DemandDescription',
      instanceType: 'InstanceType',
      amount: 'Amount',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      demandName: 'string',
      demandDescription: 'string',
      instanceType: 'string',
      amount: 'number',
      instanceChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDemandResponse extends $tea.Model {
  requestId: string;
  demandId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      demandId: 'DemandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      demandId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseStorageCapacityUnitRequest extends $tea.Model {
  regionId: string;
  name?: string;
  capacity: number;
  description?: string;
  startTime?: string;
  period?: number;
  periodUnit?: string;
  fromApp?: string;
  clientToken?: string;
  amount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      capacity: 'Capacity',
      description: 'Description',
      startTime: 'StartTime',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      fromApp: 'FromApp',
      clientToken: 'ClientToken',
      amount: 'Amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      capacity: 'number',
      description: 'string',
      startTime: 'string',
      period: 'number',
      periodUnit: 'string',
      fromApp: 'string',
      clientToken: 'string',
      amount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseStorageCapacityUnitResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  storageCapacityUnitIds: PurchaseStorageCapacityUnitResponseStorageCapacityUnitIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      storageCapacityUnitIds: 'StorageCapacityUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      storageCapacityUnitIds: PurchaseStorageCapacityUnitResponseStorageCapacityUnitIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageCapacityUnitAttributeRequest extends $tea.Model {
  regionId: string;
  storageCapacityUnitId: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      storageCapacityUnitId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageCapacityUnitAttributeResponse extends $tea.Model {
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

export class DescribeStorageCapacityUnitsRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  name?: string;
  capacity?: number;
  storageCapacityUnitId?: string[];
  status?: string[];
  allocationType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      name: 'Name',
      capacity: 'Capacity',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      status: 'Status',
      allocationType: 'AllocationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      name: 'string',
      capacity: 'number',
      storageCapacityUnitId: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      allocationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageCapacityUnitsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  storageCapacityUnits: DescribeStorageCapacityUnitsResponseStorageCapacityUnits;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storageCapacityUnits: 'StorageCapacityUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      storageCapacityUnits: DescribeStorageCapacityUnitsResponseStorageCapacityUnits,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  regionId: string;
  name?: string;
  description?: string;
  type: string;
  commandContent: string;
  workingDir?: string;
  timeout?: number;
  enableParameter?: boolean;
  timed?: boolean;
  frequency?: string;
  instanceId: string[];
  parameters?: { [key: string]: any };
  keepCommand?: boolean;
  contentEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      commandContent: 'CommandContent',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
      enableParameter: 'EnableParameter',
      timed: 'Timed',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      keepCommand: 'KeepCommand',
      contentEncoding: 'ContentEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      commandContent: 'string',
      workingDir: 'string',
      timeout: 'number',
      enableParameter: 'boolean',
      timed: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keepCommand: 'boolean',
      contentEncoding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $tea.Model {
  regionId: string;
  name?: string;
  description?: string;
  type: string;
  commandContent: string;
  workingDir?: string;
  timeout?: number;
  enableParameter?: boolean;
  timed?: boolean;
  frequency?: string;
  instanceId: string[];
  parametersShrink?: string;
  keepCommand?: boolean;
  contentEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      commandContent: 'CommandContent',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
      enableParameter: 'EnableParameter',
      timed: 'Timed',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
      keepCommand: 'KeepCommand',
      contentEncoding: 'ContentEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      commandContent: 'string',
      workingDir: 'string',
      timeout: 'number',
      enableParameter: 'boolean',
      timed: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      parametersShrink: 'string',
      keepCommand: 'boolean',
      contentEncoding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  requestId: string;
  commandId: string;
  invokeId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      commandId: 'CommandId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      commandId: 'string',
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesRequest extends $tea.Model {
  instanceId: string[];
  dryRun?: boolean;
  force?: boolean;
  terminateSubscription?: boolean;
  clientToken?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dryRun: 'DryRun',
      force: 'Force',
      terminateSubscription: 'TerminateSubscription',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      force: 'boolean',
      terminateSubscription: 'boolean',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesResponse extends $tea.Model {
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

export class ModifyStorageSetAttributeRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  storageSetId: string;
  storageSetName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      storageSetId: 'StorageSetId',
      storageSetName: 'StorageSetName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      storageSetId: 'string',
      storageSetName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStorageSetAttributeResponse extends $tea.Model {
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

export class DescribeStorageSetsRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  storageSetIds?: string;
  zoneId?: string;
  storageSetName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      storageSetIds: 'StorageSetIds',
      zoneId: 'ZoneId',
      storageSetName: 'StorageSetName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      storageSetIds: 'string',
      zoneId: 'string',
      storageSetName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  storageSets: DescribeStorageSetsResponseStorageSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storageSets: 'StorageSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      storageSets: DescribeStorageSetsResponseStorageSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetDetailsRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  storageSetId: string;
  storageSetPartitionNumber?: number;
  diskIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      diskIds: 'DiskIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      diskIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetDetailsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  disks: DescribeStorageSetDetailsResponseDisks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      disks: DescribeStorageSetDetailsResponseDisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStorageSetRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  storageSetId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      storageSetId: 'StorageSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      storageSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStorageSetResponse extends $tea.Model {
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

export class CreateStorageSetRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  zoneId: string;
  storageSetName?: string;
  description?: string;
  maxPartitionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      storageSetName: 'StorageSetName',
      description: 'Description',
      maxPartitionNumber: 'MaxPartitionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      storageSetName: 'string',
      description: 'string',
      maxPartitionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStorageSetResponse extends $tea.Model {
  requestId: string;
  storageSetId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageSetId: 'StorageSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecRequest extends $tea.Model {
  diskId: string;
  performanceLevel?: string;
  diskCategory?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
      diskCategory: 'DiskCategory',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      performanceLevel: 'string',
      diskCategory: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecResponse extends $tea.Model {
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

export class ModifyAutoProvisioningGroupRequest extends $tea.Model {
  regionId: string;
  autoProvisioningGroupId?: string;
  excessCapacityTerminationPolicy?: string;
  defaultTargetCapacityType?: string;
  terminateInstancesWithExpiration?: boolean;
  maxSpotPrice?: number;
  totalTargetCapacity?: string;
  payAsYouGoTargetCapacity?: string;
  spotTargetCapacity?: string;
  autoProvisioningGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      maxSpotPrice: 'MaxSpotPrice',
      totalTargetCapacity: 'TotalTargetCapacity',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      spotTargetCapacity: 'SpotTargetCapacity',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoProvisioningGroupId: 'string',
      excessCapacityTerminationPolicy: 'string',
      defaultTargetCapacityType: 'string',
      terminateInstancesWithExpiration: 'boolean',
      maxSpotPrice: 'number',
      totalTargetCapacity: 'string',
      payAsYouGoTargetCapacity: 'string',
      spotTargetCapacity: 'string',
      autoProvisioningGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoProvisioningGroupResponse extends $tea.Model {
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

export class DescribeAutoProvisioningGroupsRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  autoProvisioningGroupName?: string;
  autoProvisioningGroupId?: string[];
  autoProvisioningGroupStatus?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupStatus: 'AutoProvisioningGroupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupId: { 'type': 'array', 'itemType': 'string' },
      autoProvisioningGroupStatus: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  autoProvisioningGroups: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoProvisioningGroups: 'AutoProvisioningGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      autoProvisioningGroups: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupInstancesRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  autoProvisioningGroupId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      autoProvisioningGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instances: DescribeAutoProvisioningGroupInstancesResponseInstances;
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
      instances: DescribeAutoProvisioningGroupInstancesResponseInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoProvisioningGroupRequest extends $tea.Model {
  regionId: string;
  autoProvisioningGroupId: string;
  terminateInstances: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      terminateInstances: 'TerminateInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoProvisioningGroupId: 'string',
      terminateInstances: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoProvisioningGroupResponse extends $tea.Model {
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

export class CreateAutoProvisioningGroupRequest extends $tea.Model {
  regionId: string;
  resourceGroupId?: string;
  autoProvisioningGroupName?: string;
  autoProvisioningGroupType?: string;
  spotAllocationStrategy?: string;
  spotInstanceInterruptionBehavior?: string;
  spotInstancePoolsToUseCount?: number;
  payAsYouGoAllocationStrategy?: string;
  excessCapacityTerminationPolicy?: string;
  validFrom?: string;
  validUntil?: string;
  terminateInstancesWithExpiration?: boolean;
  terminateInstances?: boolean;
  maxSpotPrice?: number;
  totalTargetCapacity: string;
  payAsYouGoTargetCapacity?: string;
  spotTargetCapacity?: string;
  defaultTargetCapacityType?: string;
  launchTemplateId: string;
  launchTemplateVersion?: string;
  launchTemplateConfig?: CreateAutoProvisioningGroupRequestLaunchTemplateConfig[];
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstanceInterruptionBehavior: 'SpotInstanceInterruptionBehavior',
      spotInstancePoolsToUseCount: 'SpotInstancePoolsToUseCount',
      payAsYouGoAllocationStrategy: 'PayAsYouGoAllocationStrategy',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      terminateInstances: 'TerminateInstances',
      maxSpotPrice: 'MaxSpotPrice',
      totalTargetCapacity: 'TotalTargetCapacity',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      spotTargetCapacity: 'SpotTargetCapacity',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      launchTemplateConfig: 'LaunchTemplateConfig',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      spotAllocationStrategy: 'string',
      spotInstanceInterruptionBehavior: 'string',
      spotInstancePoolsToUseCount: 'number',
      payAsYouGoAllocationStrategy: 'string',
      excessCapacityTerminationPolicy: 'string',
      validFrom: 'string',
      validUntil: 'string',
      terminateInstancesWithExpiration: 'boolean',
      terminateInstances: 'boolean',
      maxSpotPrice: 'number',
      totalTargetCapacity: 'string',
      payAsYouGoTargetCapacity: 'string',
      spotTargetCapacity: 'string',
      defaultTargetCapacityType: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      launchTemplateConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchTemplateConfig },
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupResponse extends $tea.Model {
  requestId: string;
  autoProvisioningGroupId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      autoProvisioningGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  autoProvisioningGroupId: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      autoProvisioningGroupId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  autoProvisioningGroupHistories: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistories;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoProvisioningGroupHistories: 'AutoProvisioningGroupHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      autoProvisioningGroupHistories: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportInstancesStatusRequest extends $tea.Model {
  regionId: string;
  instanceId: string[];
  diskId?: string[];
  device?: string[];
  reason: string;
  description: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      diskId: 'DiskId',
      device: 'Device',
      reason: 'Reason',
      description: 'Description',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      diskId: { 'type': 'array', 'itemType': 'string' },
      device: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      description: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportInstancesStatusResponse extends $tea.Model {
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

export class ModifyReservedInstanceAttributeRequest extends $tea.Model {
  regionId: string;
  reservedInstanceId: string;
  reservedInstanceName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      reservedInstanceId: 'string',
      reservedInstanceName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReservedInstanceAttributeResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  httpStatusCode: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseReservedInstancesOfferingRequest extends $tea.Model {
  regionId: string;
  tag?: PurchaseReservedInstancesOfferingRequestTag[];
  resourceGroupId?: string;
  zoneId?: string;
  reservedInstanceName?: string;
  instanceType: string;
  scope?: string;
  instanceAmount?: number;
  offeringType?: string;
  description?: string;
  platform?: string;
  period?: number;
  periodUnit?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      reservedInstanceName: 'ReservedInstanceName',
      instanceType: 'InstanceType',
      scope: 'Scope',
      instanceAmount: 'InstanceAmount',
      offeringType: 'OfferingType',
      description: 'Description',
      platform: 'Platform',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': PurchaseReservedInstancesOfferingRequestTag },
      resourceGroupId: 'string',
      zoneId: 'string',
      reservedInstanceName: 'string',
      instanceType: 'string',
      scope: 'string',
      instanceAmount: 'number',
      offeringType: 'string',
      description: 'string',
      platform: 'string',
      period: 'number',
      periodUnit: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseReservedInstancesOfferingResponse extends $tea.Model {
  requestId: string;
  reservedInstanceIdSets: PurchaseReservedInstancesOfferingResponseReservedInstanceIdSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reservedInstanceIdSets: 'ReservedInstanceIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reservedInstanceIdSets: PurchaseReservedInstancesOfferingResponseReservedInstanceIdSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReservedInstancesRequest extends $tea.Model {
  regionId: string;
  reservedInstanceId: string[];
  configuration?: ModifyReservedInstancesRequestConfiguration[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      configuration: { 'type': 'array', 'itemType': ModifyReservedInstancesRequestConfiguration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReservedInstancesResponse extends $tea.Model {
  requestId: string;
  reservedInstanceIdSets: ModifyReservedInstancesResponseReservedInstanceIdSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reservedInstanceIdSets: 'ReservedInstanceIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reservedInstanceIdSets: ModifyReservedInstancesResponseReservedInstanceIdSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesRequest extends $tea.Model {
  regionId: string;
  tag?: DescribeReservedInstancesRequestTag[];
  pageNumber?: number;
  pageSize?: number;
  zoneId?: string;
  reservedInstanceId?: string[];
  reservedInstanceName?: string;
  status?: string[];
  lockReason?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  scope?: string;
  offeringType?: string;
  allocationType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      zoneId: 'ZoneId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      status: 'Status',
      lockReason: 'LockReason',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      scope: 'Scope',
      offeringType: 'OfferingType',
      allocationType: 'AllocationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeReservedInstancesRequestTag },
      pageNumber: 'number',
      pageSize: 'number',
      zoneId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      reservedInstanceName: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      lockReason: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      scope: 'string',
      offeringType: 'string',
      allocationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  reservedInstances: DescribeReservedInstancesResponseReservedInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reservedInstances: 'ReservedInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      reservedInstances: DescribeReservedInstancesResponseReservedInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsRequest extends $tea.Model {
  regionId: string;
  tag?: DescribeDemandsRequestTag[];
  pageNumber?: number;
  pageSize?: number;
  dryRun?: boolean;
  zoneId?: string;
  demandId?: string;
  instanceTypeFamily?: string;
  instanceType?: string;
  instanceChargeType?: string;
  demandType?: string;
  demandStatus?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dryRun: 'DryRun',
      zoneId: 'ZoneId',
      demandId: 'DemandId',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceType: 'InstanceType',
      instanceChargeType: 'InstanceChargeType',
      demandType: 'DemandType',
      demandStatus: 'DemandStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDemandsRequestTag },
      pageNumber: 'number',
      pageSize: 'number',
      dryRun: 'boolean',
      zoneId: 'string',
      demandId: 'string',
      instanceTypeFamily: 'string',
      instanceType: 'string',
      instanceChargeType: 'string',
      demandType: 'string',
      demandStatus: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  regionId: string;
  demands: DescribeDemandsResponseDemands;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      demands: 'Demands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      demands: DescribeDemandsResponseDemands,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSnapshotRequest extends $tea.Model {
  snapshotName: string;
  regionId: string;
  ossBucket: string;
  ossObject: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotName: 'SnapshotName',
      regionId: 'RegionId',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotName: 'string',
      regionId: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportSnapshotResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  snapshotId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportSnapshotRequest extends $tea.Model {
  snapshotId: string;
  regionId: string;
  ossBucket: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      regionId: 'RegionId',
      ossBucket: 'OssBucket',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      regionId: 'string',
      ossBucket: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportSnapshotResponse extends $tea.Model {
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

export class UntagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceId: string[];
  resourceType: string;
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
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

export class TagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tag: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
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

export class ListTagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  tagFilter?: ListTagResourcesRequestTagFilter[];
  nextToken?: string;
  resourceType: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tag: 'Tag',
      tagFilter: 'TagFilter',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      tagFilter: { 'type': 'array', 'itemType': ListTagResourcesRequestTagFilter },
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  tagResources: ListTagResourcesResponseTagResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      tagResources: ListTagResourcesResponseTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptInquiredSystemEventRequest extends $tea.Model {
  regionId: string;
  eventId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      eventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptInquiredSystemEventResponse extends $tea.Model {
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

export class RedeployInstanceRequest extends $tea.Model {
  instanceId: string;
  forceStop?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      forceStop: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RedeployInstanceResponse extends $tea.Model {
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

export class UnassignIpv6AddressesRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  ipv6Address: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignIpv6AddressesResponse extends $tea.Model {
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

export class AssignIpv6AddressesRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  ipv6Address?: string[];
  ipv6AddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignIpv6AddressesResponse extends $tea.Model {
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

export class DescribeInstanceTopologyRequest extends $tea.Model {
  regionId: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponse extends $tea.Model {
  requestId: string;
  topologys: DescribeInstanceTopologyResponseTopologys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topologys: 'Topologys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topologys: DescribeInstanceTopologyResponseTopologys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDedicatedHostsRequest extends $tea.Model {
  dedicatedHostIds: string;
  regionId: string;
  period: number;
  periodUnit?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostIds: 'DedicatedHostIds',
      regionId: 'RegionId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostIds: 'string',
      regionId: 'string',
      period: 'number',
      periodUnit: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDedicatedHostsResponse extends $tea.Model {
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

export class ReleaseDedicatedHostRequest extends $tea.Model {
  regionId: string;
  dedicatedHostId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDedicatedHostResponse extends $tea.Model {
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

export class ModifyInstanceDeploymentRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  dedicatedHostId?: string;
  deploymentSetId?: string;
  deploymentSetGroupNo?: number;
  force?: boolean;
  affinity?: string;
  tenancy?: string;
  migrationType?: string;
  instanceType?: string;
  dedicatedHostClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dedicatedHostId: 'DedicatedHostId',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      force: 'Force',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      migrationType: 'MigrationType',
      instanceType: 'InstanceType',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dedicatedHostId: 'string',
      deploymentSetId: 'string',
      deploymentSetGroupNo: 'number',
      force: 'boolean',
      affinity: 'string',
      tenancy: 'string',
      migrationType: 'string',
      instanceType: 'string',
      dedicatedHostClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceDeploymentResponse extends $tea.Model {
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

export class ModifyDedicatedHostAutoRenewAttributeRequest extends $tea.Model {
  dedicatedHostIds: string;
  regionId: string;
  duration?: number;
  periodUnit?: string;
  autoRenew?: boolean;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostIds: 'DedicatedHostIds',
      regionId: 'RegionId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostIds: 'string',
      regionId: 'string',
      duration: 'number',
      periodUnit: 'string',
      autoRenew: 'boolean',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAutoRenewAttributeResponse extends $tea.Model {
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

export class ModifyDedicatedHostAutoReleaseTimeRequest extends $tea.Model {
  regionId: string;
  dedicatedHostId: string;
  autoReleaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      autoReleaseTime: 'AutoReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostId: 'string',
      autoReleaseTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAutoReleaseTimeResponse extends $tea.Model {
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

export class ModifyDedicatedHostAttributeRequest extends $tea.Model {
  regionId: string;
  dedicatedHostId: string;
  dedicatedHostName?: string;
  description?: string;
  actionOnMaintenance?: string;
  networkAttributes?: ModifyDedicatedHostAttributeRequestNetworkAttributes;
  autoPlacement?: string;
  dedicatedHostClusterId?: string;
  cpuOverCommitRatio?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
      description: 'Description',
      actionOnMaintenance: 'ActionOnMaintenance',
      networkAttributes: 'NetworkAttributes',
      autoPlacement: 'AutoPlacement',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
      description: 'string',
      actionOnMaintenance: 'string',
      networkAttributes: ModifyDedicatedHostAttributeRequestNetworkAttributes,
      autoPlacement: 'string',
      dedicatedHostClusterId: 'string',
      cpuOverCommitRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeResponse extends $tea.Model {
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

export class DescribeDedicatedHostsRequest extends $tea.Model {
  regionId: string;
  zoneId?: string;
  dedicatedHostIds?: string;
  dedicatedHostName?: string;
  status?: string;
  dedicatedHostType?: string;
  lockReason?: string;
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribeDedicatedHostsRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      dedicatedHostIds: 'DedicatedHostIds',
      dedicatedHostName: 'DedicatedHostName',
      status: 'Status',
      dedicatedHostType: 'DedicatedHostType',
      lockReason: 'LockReason',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      dedicatedHostIds: 'string',
      dedicatedHostName: 'string',
      status: 'string',
      dedicatedHostType: 'string',
      lockReason: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostsRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  dedicatedHosts: DescribeDedicatedHostsResponseDedicatedHosts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      dedicatedHosts: DescribeDedicatedHostsResponseDedicatedHosts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesRequest extends $tea.Model {
  regionId: string;
  dedicatedHostType?: string;
  supportedInstanceTypeFamily?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dedicatedHostType: 'DedicatedHostType',
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dedicatedHostType: 'string',
      supportedInstanceTypeFamily: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponse extends $tea.Model {
  requestId: string;
  dedicatedHostTypes: DescribeDedicatedHostTypesResponseDedicatedHostTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostTypes: 'DedicatedHostTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostTypes: DescribeDedicatedHostTypesResponseDedicatedHostTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAutoRenewRequest extends $tea.Model {
  dedicatedHostIds: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostIds: 'DedicatedHostIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAutoRenewResponse extends $tea.Model {
  requestId: string;
  dedicatedHostRenewAttributes: DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostRenewAttributes: 'DedicatedHostRenewAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostRenewAttributes: DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsRequest extends $tea.Model {
  regionId: string;
  tag?: AllocateDedicatedHostsRequestTag[];
  resourceGroupId?: string;
  zoneId?: string;
  dedicatedHostName?: string;
  dedicatedHostClusterId?: string;
  dedicatedHostType: string;
  actionOnMaintenance?: string;
  networkAttributes?: AllocateDedicatedHostsRequestNetworkAttributes;
  description?: string;
  autoPlacement?: string;
  cpuOverCommitRatio?: number;
  chargeType?: string;
  quantity?: number;
  period?: number;
  periodUnit?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  autoReleaseTime?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostType: 'DedicatedHostType',
      actionOnMaintenance: 'ActionOnMaintenance',
      networkAttributes: 'NetworkAttributes',
      description: 'Description',
      autoPlacement: 'AutoPlacement',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      chargeType: 'ChargeType',
      quantity: 'Quantity',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoReleaseTime: 'AutoReleaseTime',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': AllocateDedicatedHostsRequestTag },
      resourceGroupId: 'string',
      zoneId: 'string',
      dedicatedHostName: 'string',
      dedicatedHostClusterId: 'string',
      dedicatedHostType: 'string',
      actionOnMaintenance: 'string',
      networkAttributes: AllocateDedicatedHostsRequestNetworkAttributes,
      description: 'string',
      autoPlacement: 'string',
      cpuOverCommitRatio: 'number',
      chargeType: 'string',
      quantity: 'number',
      period: 'number',
      periodUnit: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      autoReleaseTime: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsResponse extends $tea.Model {
  requestId: string;
  dedicatedHostIdSets: AllocateDedicatedHostsResponseDedicatedHostIdSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostIdSets: 'DedicatedHostIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostIdSets: AllocateDedicatedHostsResponseDedicatedHostIdSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimulatedSystemEventsRequest extends $tea.Model {
  regionId: string;
  instanceId: string[];
  eventType: string;
  notBefore: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      eventType: 'EventType',
      notBefore: 'NotBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      notBefore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimulatedSystemEventsResponse extends $tea.Model {
  requestId: string;
  eventIdSet: CreateSimulatedSystemEventsResponseEventIdSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventIdSet: 'EventIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventIdSet: CreateSimulatedSystemEventsResponseEventIdSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSimulatedSystemEventsRequest extends $tea.Model {
  regionId: string;
  eventId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      eventId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSimulatedSystemEventsResponse extends $tea.Model {
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

export class DescribeEniMonitorDataRequest extends $tea.Model {
  eniId?: string;
  regionId: string;
  instanceId: string;
  startTime: string;
  endTime: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      regionId: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEniMonitorDataResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  monitorData: DescribeEniMonitorDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      monitorData: DescribeEniMonitorDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesRequest extends $tea.Model {
  regionId: string;
  zoneId?: string;
  attributeName?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      attributeName: 'AttributeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      attributeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponse extends $tea.Model {
  requestId: string;
  accountAttributeItems: DescribeAccountAttributesResponseAccountAttributeItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountAttributeItems: 'AccountAttributeItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountAttributeItems: DescribeAccountAttributesResponseAccountAttributeItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLaunchTemplateDefaultVersionRequest extends $tea.Model {
  regionId: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  defaultVersionNumber: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      defaultVersionNumber: 'DefaultVersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      defaultVersionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLaunchTemplateDefaultVersionResponse extends $tea.Model {
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

export class DescribeLaunchTemplatesRequest extends $tea.Model {
  regionId: string;
  templateTag?: DescribeLaunchTemplatesRequestTemplateTag[];
  launchTemplateId?: string[];
  launchTemplateName?: string[];
  pageNumber?: number;
  pageSize?: number;
  templateResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateTag: 'TemplateTag',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateResourceGroupId: 'TemplateResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateTag: { 'type': 'array', 'itemType': DescribeLaunchTemplatesRequestTemplateTag },
      launchTemplateId: { 'type': 'array', 'itemType': 'string' },
      launchTemplateName: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      templateResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  launchTemplateSets: DescribeLaunchTemplatesResponseLaunchTemplateSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      launchTemplateSets: 'LaunchTemplateSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      launchTemplateSets: DescribeLaunchTemplatesResponseLaunchTemplateSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsRequest extends $tea.Model {
  regionId: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  launchTemplateVersion?: number[];
  minVersion?: number;
  maxVersion?: number;
  defaultVersion?: boolean;
  detailFlag?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      minVersion: 'MinVersion',
      maxVersion: 'MaxVersion',
      defaultVersion: 'DefaultVersion',
      detailFlag: 'DetailFlag',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: { 'type': 'array', 'itemType': 'number' },
      minVersion: 'number',
      maxVersion: 'number',
      defaultVersion: 'boolean',
      detailFlag: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  launchTemplateVersionSets: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      launchTemplateVersionSets: 'LaunchTemplateVersionSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      launchTemplateVersionSets: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaunchTemplateVersionRequest extends $tea.Model {
  regionId: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  deleteVersion: number[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      deleteVersion: 'DeleteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      deleteVersion: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaunchTemplateVersionResponse extends $tea.Model {
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

export class DeleteLaunchTemplateRequest extends $tea.Model {
  regionId: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaunchTemplateResponse extends $tea.Model {
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

export class CreateLaunchTemplateVersionRequest extends $tea.Model {
  regionId: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  versionDescription?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  passwordInherit?: boolean;
  instanceType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vSwitchId?: string;
  instanceName?: string;
  description?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  hostName?: string;
  zoneId?: string;
  systemDisk?: CreateLaunchTemplateVersionRequestSystemDisk;
  dataDisk?: CreateLaunchTemplateVersionRequestDataDisk[];
  ioOptimized?: string;
  networkInterface?: CreateLaunchTemplateVersionRequestNetworkInterface[];
  instanceChargeType?: string;
  period?: number;
  internetChargeType?: string;
  enableVmOsConfig?: boolean;
  networkType?: string;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  autoReleaseTime?: string;
  spotStrategy?: string;
  spotPriceLimit?: number;
  spotDuration?: number;
  resourceGroupId?: string;
  securityEnhancementStrategy?: string;
  tag?: CreateLaunchTemplateVersionRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      versionDescription: 'VersionDescription',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      passwordInherit: 'PasswordInherit',
      instanceType: 'InstanceType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      instanceName: 'InstanceName',
      description: 'Description',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      hostName: 'HostName',
      zoneId: 'ZoneId',
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      ioOptimized: 'IoOptimized',
      networkInterface: 'NetworkInterface',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      internetChargeType: 'InternetChargeType',
      enableVmOsConfig: 'EnableVmOsConfig',
      networkType: 'NetworkType',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      autoReleaseTime: 'AutoReleaseTime',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotDuration: 'SpotDuration',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      versionDescription: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      passwordInherit: 'boolean',
      instanceType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      instanceName: 'string',
      description: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      hostName: 'string',
      zoneId: 'string',
      systemDisk: CreateLaunchTemplateVersionRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestDataDisk },
      ioOptimized: 'string',
      networkInterface: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestNetworkInterface },
      instanceChargeType: 'string',
      period: 'number',
      internetChargeType: 'string',
      enableVmOsConfig: 'boolean',
      networkType: 'string',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      autoReleaseTime: 'string',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      spotDuration: 'number',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateLaunchTemplateVersionRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateVersionResponse extends $tea.Model {
  requestId: string;
  launchTemplateVersionNumber: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      launchTemplateVersionNumber: 'LaunchTemplateVersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      launchTemplateVersionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequest extends $tea.Model {
  regionId: string;
  templateTag?: CreateLaunchTemplateRequestTemplateTag[];
  launchTemplateName: string;
  versionDescription?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  passwordInherit?: boolean;
  instanceType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vSwitchId?: string;
  instanceName?: string;
  description?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  hostName?: string;
  zoneId?: string;
  systemDisk?: CreateLaunchTemplateRequestSystemDisk;
  dataDisk?: CreateLaunchTemplateRequestDataDisk[];
  ioOptimized?: string;
  networkInterface?: CreateLaunchTemplateRequestNetworkInterface[];
  instanceChargeType?: string;
  period?: number;
  internetChargeType?: string;
  enableVmOsConfig?: boolean;
  networkType?: string;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  autoReleaseTime?: string;
  spotStrategy?: string;
  spotPriceLimit?: number;
  spotDuration?: number;
  resourceGroupId?: string;
  templateResourceGroupId?: string;
  securityEnhancementStrategy?: string;
  tag?: CreateLaunchTemplateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateTag: 'TemplateTag',
      launchTemplateName: 'LaunchTemplateName',
      versionDescription: 'VersionDescription',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      passwordInherit: 'PasswordInherit',
      instanceType: 'InstanceType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      instanceName: 'InstanceName',
      description: 'Description',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      hostName: 'HostName',
      zoneId: 'ZoneId',
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      ioOptimized: 'IoOptimized',
      networkInterface: 'NetworkInterface',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      internetChargeType: 'InternetChargeType',
      enableVmOsConfig: 'EnableVmOsConfig',
      networkType: 'NetworkType',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      autoReleaseTime: 'AutoReleaseTime',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotDuration: 'SpotDuration',
      resourceGroupId: 'ResourceGroupId',
      templateResourceGroupId: 'TemplateResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateTag: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestTemplateTag },
      launchTemplateName: 'string',
      versionDescription: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      passwordInherit: 'boolean',
      instanceType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      instanceName: 'string',
      description: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      hostName: 'string',
      zoneId: 'string',
      systemDisk: CreateLaunchTemplateRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestDataDisk },
      ioOptimized: 'string',
      networkInterface: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestNetworkInterface },
      instanceChargeType: 'string',
      period: 'number',
      internetChargeType: 'string',
      enableVmOsConfig: 'boolean',
      networkType: 'string',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      autoReleaseTime: 'string',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      spotDuration: 'number',
      resourceGroupId: 'string',
      templateResourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateLaunchTemplateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateResponse extends $tea.Model {
  requestId: string;
  launchTemplateId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      launchTemplateId: 'LaunchTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      launchTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantRequest extends $tea.Model {
  regionId: string;
  instanceId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantResponse extends $tea.Model {
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

export class DescribeCloudAssistantStatusRequest extends $tea.Model {
  regionId: string;
  instanceId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponse extends $tea.Model {
  requestId: string;
  instanceCloudAssistantStatusSet: DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCloudAssistantStatusSet: 'InstanceCloudAssistantStatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCloudAssistantStatusSet: DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignPrivateIpAddressesRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  privateIpAddress: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignPrivateIpAddressesResponse extends $tea.Model {
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

export class AssignPrivateIpAddressesRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  privateIpAddress?: string[];
  secondaryPrivateIpAddressCount?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      secondaryPrivateIpAddressCount: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponse extends $tea.Model {
  requestId: string;
  assignedPrivateIpAddressesSet: AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assignedPrivateIpAddressesSet: 'AssignedPrivateIpAddressesSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assignedPrivateIpAddressesSet: AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacePermissionsRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId?: string;
  networkInterfacePermissionId?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      networkInterfacePermissionId: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacePermissionsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  networkInterfacePermissions: DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      networkInterfacePermissions: 'NetworkInterfacePermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      networkInterfacePermissions: DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkInterfacePermissionRequest extends $tea.Model {
  regionId: string;
  networkInterfacePermissionId: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfacePermissionId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkInterfacePermissionResponse extends $tea.Model {
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

export class CreateNetworkInterfacePermissionRequest extends $tea.Model {
  regionId: string;
  accountId: number;
  networkInterfaceId: string;
  permission: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accountId: 'AccountId',
      networkInterfaceId: 'NetworkInterfaceId',
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accountId: 'number',
      networkInterfaceId: 'string',
      permission: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfacePermissionResponse extends $tea.Model {
  requestId: string;
  networkInterfacePermission: CreateNetworkInterfacePermissionResponseNetworkInterfacePermission;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      networkInterfacePermission: 'NetworkInterfacePermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      networkInterfacePermission: CreateNetworkInterfacePermissionResponseNetworkInterfacePermission,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceScreenshotRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  wakeUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      wakeUp: 'WakeUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      wakeUp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceScreenshotResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  screenshot: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      screenshot: 'Screenshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      screenshot: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsoleOutputRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  removeSymbols?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      removeSymbols: 'RemoveSymbols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      removeSymbols: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsoleOutputResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  consoleOutput: string;
  lastUpdateTime: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      consoleOutput: 'ConsoleOutput',
      lastUpdateTime: 'LastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      consoleOutput: 'string',
      lastUpdateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationRequest extends $tea.Model {
  regionId: string;
  resourceId: string;
  migrateAcrossZone?: boolean;
  destinationResource: string;
  operationType?: string;
  instanceType?: string;
  cores?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      migrateAcrossZone: 'MigrateAcrossZone',
      destinationResource: 'DestinationResource',
      operationType: 'OperationType',
      instanceType: 'InstanceType',
      cores: 'Cores',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      migrateAcrossZone: 'boolean',
      destinationResource: 'string',
      operationType: 'string',
      instanceType: 'string',
      cores: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponse extends $tea.Model {
  requestId: string;
  availableZones: DescribeResourcesModificationResponseAvailableZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: DescribeResourcesModificationResponseAvailableZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationRequest extends $tea.Model {
  regionId: string;
  instanceChargeType?: string;
  spotStrategy?: string;
  instanceType?: string;
  resourceId?: string;
  operationType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      instanceType: 'InstanceType',
      resourceId: 'ResourceId',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      instanceType: 'string',
      resourceId: 'string',
      operationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationResponse extends $tea.Model {
  requestId: string;
  bandwidths: DescribeBandwidthLimitationResponseBandwidths;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bandwidths: 'Bandwidths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bandwidths: DescribeBandwidthLimitationResponseBandwidths,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  regionId: string;
  instanceChargeType?: string;
  spotStrategy?: string;
  spotDuration?: number;
  destinationResource: string;
  zoneId?: string;
  ioOptimized?: string;
  dedicatedHostId?: string;
  instanceType?: string;
  systemDiskCategory?: string;
  dataDiskCategory?: string;
  networkCategory?: string;
  cores?: number;
  memory?: number;
  resourceType?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      spotDuration: 'SpotDuration',
      destinationResource: 'DestinationResource',
      zoneId: 'ZoneId',
      ioOptimized: 'IoOptimized',
      dedicatedHostId: 'DedicatedHostId',
      instanceType: 'InstanceType',
      systemDiskCategory: 'SystemDiskCategory',
      dataDiskCategory: 'DataDiskCategory',
      networkCategory: 'NetworkCategory',
      cores: 'Cores',
      memory: 'Memory',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      spotDuration: 'number',
      destinationResource: 'string',
      zoneId: 'string',
      ioOptimized: 'string',
      dedicatedHostId: 'string',
      instanceType: 'string',
      systemDiskCategory: 'string',
      dataDiskCategory: 'string',
      networkCategory: 'string',
      cores: 'number',
      memory: 'number',
      resourceType: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  requestId: string;
  availableZones: DescribeAvailableResourceResponseAvailableZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: DescribeAvailableResourceResponseAvailableZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReActivateInstancesRequest extends $tea.Model {
  regionId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReActivateInstancesResponse extends $tea.Model {
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

export class DescribeInstancesFullStatusRequest extends $tea.Model {
  regionId: string;
  instanceId?: string[];
  eventId?: string[];
  status?: string;
  healthStatus?: string;
  instanceEventType?: string[];
  eventType?: string;
  notBefore?: DescribeInstancesFullStatusRequestNotBefore;
  eventPublishTime?: DescribeInstancesFullStatusRequestEventPublishTime;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      eventId: 'EventId',
      status: 'Status',
      healthStatus: 'HealthStatus',
      instanceEventType: 'InstanceEventType',
      eventType: 'EventType',
      notBefore: 'NotBefore',
      eventPublishTime: 'EventPublishTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      eventId: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      healthStatus: 'string',
      instanceEventType: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      notBefore: DescribeInstancesFullStatusRequestNotBefore,
      eventPublishTime: DescribeInstancesFullStatusRequestEventPublishTime,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instanceFullStatusSet: DescribeInstancesFullStatusResponseInstanceFullStatusSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceFullStatusSet: 'InstanceFullStatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      instanceFullStatusSet: DescribeInstancesFullStatusResponseInstanceFullStatusSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequest extends $tea.Model {
  regionId: string;
  instanceId?: string;
  eventId?: string[];
  instanceEventCycleStatus?: string[];
  eventCycleStatus?: string;
  instanceEventType?: string[];
  eventType?: string;
  notBefore?: DescribeInstanceHistoryEventsRequestNotBefore;
  eventPublishTime?: DescribeInstanceHistoryEventsRequestEventPublishTime;
  impactLevel?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      eventId: 'EventId',
      instanceEventCycleStatus: 'InstanceEventCycleStatus',
      eventCycleStatus: 'EventCycleStatus',
      instanceEventType: 'InstanceEventType',
      eventType: 'EventType',
      notBefore: 'NotBefore',
      eventPublishTime: 'EventPublishTime',
      impactLevel: 'ImpactLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      eventId: { 'type': 'array', 'itemType': 'string' },
      instanceEventCycleStatus: { 'type': 'array', 'itemType': 'string' },
      eventCycleStatus: 'string',
      instanceEventType: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      notBefore: DescribeInstanceHistoryEventsRequestNotBefore,
      eventPublishTime: DescribeInstanceHistoryEventsRequestEventPublishTime,
      impactLevel: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instanceSystemEventSet: DescribeInstanceHistoryEventsResponseInstanceSystemEventSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceSystemEventSet: 'InstanceSystemEventSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      instanceSystemEventSet: DescribeInstanceHistoryEventsResponseInstanceSystemEventSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusRequest extends $tea.Model {
  regionId: string;
  diskId?: string[];
  eventId?: string[];
  status?: string;
  healthStatus?: string;
  eventType?: string;
  eventTime?: DescribeDisksFullStatusRequestEventTime;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      diskId: 'DiskId',
      eventId: 'EventId',
      status: 'Status',
      healthStatus: 'HealthStatus',
      eventType: 'EventType',
      eventTime: 'EventTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      diskId: { 'type': 'array', 'itemType': 'string' },
      eventId: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      healthStatus: 'string',
      eventType: 'string',
      eventTime: DescribeDisksFullStatusRequestEventTime,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  diskFullStatusSet: DescribeDisksFullStatusResponseDiskFullStatusSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      diskFullStatusSet: 'DiskFullStatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      diskFullStatusSet: DescribeDisksFullStatusResponseDiskFullStatusSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserBusinessBehaviorRequest extends $tea.Model {
  regionId?: string;
  statusKey: string;
  statusValue: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      statusKey: 'statusKey',
      statusValue: 'statusValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      statusKey: 'string',
      statusValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserBusinessBehaviorResponse extends $tea.Model {
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

export class DescribeUserBusinessBehaviorRequest extends $tea.Model {
  regionId?: string;
  statusKey: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      statusKey: 'statusKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      statusKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBusinessBehaviorResponse extends $tea.Model {
  requestId: string;
  statusValue: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusValue: 'StatusValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequest extends $tea.Model {
  regionId: string;
  imageId?: string;
  imageFamily?: string;
  instanceType?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  vSwitchId?: string;
  instanceName?: string;
  description?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  hostName?: string;
  uniqueSuffix?: boolean;
  password?: string;
  passwordInherit?: boolean;
  zoneId?: string;
  internetChargeType?: string;
  systemDisk?: RunInstancesRequestSystemDisk;
  dataDisk?: RunInstancesRequestDataDisk[];
  arn?: RunInstancesRequestArn[];
  ioOptimized?: string;
  networkInterface?: RunInstancesRequestNetworkInterface[];
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  amount?: number;
  minAmount?: number;
  autoReleaseTime?: string;
  spotStrategy?: string;
  spotDuration?: number;
  spotPriceLimit?: number;
  spotInterruptionBehavior?: string;
  securityEnhancementStrategy?: string;
  clientToken?: string;
  tag?: RunInstancesRequestTag[];
  hpcClusterId?: string;
  dryRun?: boolean;
  dedicatedHostId?: string;
  launchTemplateId?: string;
  launchTemplateName?: string;
  launchTemplateVersion?: number;
  resourceGroupId?: string;
  period?: number;
  periodUnit?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  instanceChargeType?: string;
  deploymentSetId?: string;
  deploymentSetGroupNo?: number;
  privateIpAddress?: string;
  creditSpecification?: string;
  ipv6Address?: string[];
  ipv6AddressCount?: number;
  networkInterfaceQueueNumber?: number;
  deletionProtection?: boolean;
  affinity?: string;
  tenancy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  cpuOptions?: RunInstancesRequestCpuOptions;
  httpEndpoint?: string;
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
  privatePoolOptions?: RunInstancesRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      imageFamily: 'ImageFamily',
      instanceType: 'InstanceType',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
      instanceName: 'InstanceName',
      description: 'Description',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      hostName: 'HostName',
      uniqueSuffix: 'UniqueSuffix',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      zoneId: 'ZoneId',
      internetChargeType: 'InternetChargeType',
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      arn: 'Arn',
      ioOptimized: 'IoOptimized',
      networkInterface: 'NetworkInterface',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      amount: 'Amount',
      minAmount: 'MinAmount',
      autoReleaseTime: 'AutoReleaseTime',
      spotStrategy: 'SpotStrategy',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      clientToken: 'ClientToken',
      tag: 'Tag',
      hpcClusterId: 'HpcClusterId',
      dryRun: 'DryRun',
      dedicatedHostId: 'DedicatedHostId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      resourceGroupId: 'ResourceGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      instanceChargeType: 'InstanceChargeType',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      privateIpAddress: 'PrivateIpAddress',
      creditSpecification: 'CreditSpecification',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceQueueNumber: 'NetworkInterfaceQueueNumber',
      deletionProtection: 'DeletionProtection',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      cpuOptions: 'CpuOptions',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      imageFamily: 'string',
      instanceType: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
      instanceName: 'string',
      description: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      hostName: 'string',
      uniqueSuffix: 'boolean',
      password: 'string',
      passwordInherit: 'boolean',
      zoneId: 'string',
      internetChargeType: 'string',
      systemDisk: RunInstancesRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      arn: { 'type': 'array', 'itemType': RunInstancesRequestArn },
      ioOptimized: 'string',
      networkInterface: { 'type': 'array', 'itemType': RunInstancesRequestNetworkInterface },
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      amount: 'number',
      minAmount: 'number',
      autoReleaseTime: 'string',
      spotStrategy: 'string',
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotInterruptionBehavior: 'string',
      securityEnhancementStrategy: 'string',
      clientToken: 'string',
      tag: { 'type': 'array', 'itemType': RunInstancesRequestTag },
      hpcClusterId: 'string',
      dryRun: 'boolean',
      dedicatedHostId: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: 'number',
      resourceGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      instanceChargeType: 'string',
      deploymentSetId: 'string',
      deploymentSetGroupNo: 'number',
      privateIpAddress: 'string',
      creditSpecification: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      networkInterfaceQueueNumber: 'number',
      deletionProtection: 'boolean',
      affinity: 'string',
      tenancy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      cpuOptions: RunInstancesRequestCpuOptions,
      httpEndpoint: 'string',
      httpTokens: 'string',
      httpPutResponseHopLimit: 'number',
      privatePoolOptions: RunInstancesRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesResponse extends $tea.Model {
  requestId: string;
  tradePrice: number;
  instanceIdSets: RunInstancesResponseInstanceIdSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
      instanceIdSets: 'InstanceIdSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tradePrice: 'number',
      instanceIdSets: RunInstancesResponseInstanceIdSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertNatPublicIpToEipRequest extends $tea.Model {
  instanceId: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertNatPublicIpToEipResponse extends $tea.Model {
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

export class ModifyHpcClusterAttributeRequest extends $tea.Model {
  regionId: string;
  clientToken?: string;
  hpcClusterId: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      hpcClusterId: 'HpcClusterId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      hpcClusterId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHpcClusterAttributeResponse extends $tea.Model {
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

export class DescribeHpcClustersRequest extends $tea.Model {
  regionId: string;
  clientToken?: string;
  hpcClusterIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      hpcClusterIds: 'HpcClusterIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      hpcClusterIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHpcClustersResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  hpcClusters: DescribeHpcClustersResponseHpcClusters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hpcClusters: 'HpcClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      hpcClusters: DescribeHpcClustersResponseHpcClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHpcClusterRequest extends $tea.Model {
  regionId: string;
  clientToken?: string;
  hpcClusterId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      hpcClusterId: 'HpcClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      hpcClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHpcClusterResponse extends $tea.Model {
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

export class CreateHpcClusterRequest extends $tea.Model {
  regionId: string;
  clientToken?: string;
  description?: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHpcClusterResponse extends $tea.Model {
  requestId: string;
  hpcClusterId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hpcClusterId: 'HpcClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hpcClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsUsageRequest extends $tea.Model {
  regionId: string;
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

export class DescribeSnapshotsUsageResponse extends $tea.Model {
  requestId: string;
  snapshotCount: number;
  snapshotSize: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotCount: 'SnapshotCount',
      snapshotSize: 'SnapshotSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotCount: 'number',
      snapshotSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryRequest extends $tea.Model {
  regionId: string;
  zoneId?: string;
  networkType: string;
  instanceType: string;
  spotDuration?: number;
  ioOptimized?: string;
  startTime?: string;
  endTime?: string;
  OSType?: string;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      networkType: 'NetworkType',
      instanceType: 'InstanceType',
      spotDuration: 'SpotDuration',
      ioOptimized: 'IoOptimized',
      startTime: 'StartTime',
      endTime: 'EndTime',
      OSType: 'OSType',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      networkType: 'string',
      instanceType: 'string',
      spotDuration: 'number',
      ioOptimized: 'string',
      startTime: 'string',
      endTime: 'string',
      OSType: 'string',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryResponse extends $tea.Model {
  requestId: string;
  nextOffset: number;
  currency: string;
  spotPrices: DescribeSpotPriceHistoryResponseSpotPrices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextOffset: 'NextOffset',
      currency: 'Currency',
      spotPrices: 'SpotPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextOffset: 'number',
      currency: 'string',
      spotPrices: DescribeSpotPriceHistoryResponseSpotPrices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $tea.Model {
  regionId: string;
  invokeId: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponse extends $tea.Model {
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

export class ModifyCommandRequest extends $tea.Model {
  regionId: string;
  commandId: string;
  name?: string;
  description?: string;
  commandContent?: string;
  workingDir?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commandId: 'CommandId',
      name: 'Name',
      description: 'Description',
      commandContent: 'CommandContent',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commandId: 'string',
      name: 'string',
      description: 'string',
      commandContent: 'string',
      workingDir: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommandResponse extends $tea.Model {
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

export class InvokeCommandRequest extends $tea.Model {
  regionId: string;
  commandId: string;
  timed?: boolean;
  frequency?: string;
  instanceId: string[];
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commandId: 'CommandId',
      timed: 'Timed',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commandId: 'string',
      timed: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandShrinkRequest extends $tea.Model {
  regionId: string;
  commandId: string;
  timed?: boolean;
  frequency?: string;
  instanceId: string[];
  parametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commandId: 'CommandId',
      timed: 'Timed',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commandId: 'string',
      timed: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      parametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandResponse extends $tea.Model {
  requestId: string;
  invokeId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  regionId: string;
  invokeId?: string;
  commandId?: string;
  commandName?: string;
  commandType?: string;
  timed?: boolean;
  invokeStatus?: string;
  instanceId?: string;
  contentEncoding?: string;
  includeOutput?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      timed: 'Timed',
      invokeStatus: 'InvokeStatus',
      instanceId: 'InstanceId',
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      timed: 'boolean',
      invokeStatus: 'string',
      instanceId: 'string',
      contentEncoding: 'string',
      includeOutput: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  invocations: DescribeInvocationsResponseInvocations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      invocations: 'Invocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      invocations: DescribeInvocationsResponseInvocations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsRequest extends $tea.Model {
  regionId: string;
  invokeId?: string;
  instanceId?: string;
  commandId?: string;
  invokeRecordStatus?: string;
  includeHistory?: boolean;
  contentEncoding?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      instanceId: 'InstanceId',
      commandId: 'CommandId',
      invokeRecordStatus: 'InvokeRecordStatus',
      includeHistory: 'IncludeHistory',
      contentEncoding: 'ContentEncoding',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      instanceId: 'string',
      commandId: 'string',
      invokeRecordStatus: 'string',
      includeHistory: 'boolean',
      contentEncoding: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponse extends $tea.Model {
  requestId: string;
  invocation: DescribeInvocationResultsResponseInvocation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invocation: DescribeInvocationResultsResponseInvocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsRequest extends $tea.Model {
  regionId: string;
  commandId?: string;
  name?: string;
  description?: string;
  type?: string;
  contentEncoding?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commandId: 'CommandId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      contentEncoding: 'ContentEncoding',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commandId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      contentEncoding: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  commands: DescribeCommandsResponseCommands;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      commands: DescribeCommandsResponseCommands,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandRequest extends $tea.Model {
  regionId: string;
  commandId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commandId: 'CommandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commandId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandResponse extends $tea.Model {
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

export class CreateCommandRequest extends $tea.Model {
  regionId: string;
  name: string;
  description?: string;
  type: string;
  commandContent: string;
  workingDir?: string;
  timeout?: number;
  enableParameter?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      commandContent: 'CommandContent',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
      enableParameter: 'EnableParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      commandContent: 'string',
      workingDir: 'string',
      timeout: 'number',
      enableParameter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponse extends $tea.Model {
  requestId: string;
  commandId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      commandId: 'CommandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      commandId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupEgressRuleRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  ipProtocol: string;
  portRange: string;
  destGroupId?: string;
  destGroupOwnerId?: number;
  destGroupOwnerAccount?: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      destGroupId: 'DestGroupId',
      destGroupOwnerId: 'DestGroupOwnerId',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      destGroupId: 'string',
      destGroupOwnerId: 'number',
      destGroupOwnerAccount: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupEgressRuleResponse extends $tea.Model {
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

export class ModifyDiskChargeTypeRequest extends $tea.Model {
  instanceId: string;
  regionId: string;
  diskIds: string;
  autoPay?: boolean;
  clientToken?: string;
  diskChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      diskIds: 'DiskIds',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      diskChargeType: 'DiskChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      diskIds: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
      diskChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskChargeTypeResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkInterfaceAttributeRequest extends $tea.Model {
  regionId: string;
  securityGroupId?: string[];
  networkInterfaceName?: string;
  networkInterfaceId: string;
  queueNumber?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceId: 'NetworkInterfaceId',
      queueNumber: 'QueueNumber',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      networkInterfaceId: 'string',
      queueNumber: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkInterfaceAttributeResponse extends $tea.Model {
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

export class DetachNetworkInterfaceRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  instanceId: string;
  trunkNetworkInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      instanceId: 'InstanceId',
      trunkNetworkInstanceId: 'TrunkNetworkInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      instanceId: 'string',
      trunkNetworkInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachNetworkInterfaceResponse extends $tea.Model {
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

export class DescribeNetworkInterfacesRequest extends $tea.Model {
  regionId: string;
  tag?: DescribeNetworkInterfacesRequestTag[];
  resourceGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  primaryIpAddress?: string;
  privateIpAddress?: string[];
  securityGroupId?: string;
  networkInterfaceName?: string;
  type?: string;
  instanceId?: string;
  networkInterfaceId?: string[];
  serviceManaged?: boolean;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      securityGroupId: 'SecurityGroupId',
      networkInterfaceName: 'NetworkInterfaceName',
      type: 'Type',
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfacesRequestTag },
      resourceGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      primaryIpAddress: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      networkInterfaceName: 'string',
      type: 'string',
      instanceId: 'string',
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
      serviceManaged: 'boolean',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  nextToken: string;
  networkInterfaceSets: DescribeNetworkInterfacesResponseNetworkInterfaceSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nextToken: 'NextToken',
      networkInterfaceSets: 'NetworkInterfaceSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      nextToken: 'string',
      networkInterfaceSets: DescribeNetworkInterfacesResponseNetworkInterfaceSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkInterfaceRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkInterfaceResponse extends $tea.Model {
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

export class CreateNetworkInterfaceRequest extends $tea.Model {
  regionId: string;
  tag?: CreateNetworkInterfaceRequestTag[];
  resourceGroupId?: string;
  vSwitchId: string;
  primaryIpAddress?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  networkInterfaceName?: string;
  description?: string;
  visible?: boolean;
  instanceType?: string;
  businessType?: string;
  privateIpAddress?: string[];
  secondaryPrivateIpAddressCount?: number;
  queueNumber?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      vSwitchId: 'VSwitchId',
      primaryIpAddress: 'PrimaryIpAddress',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
      visible: 'Visible',
      instanceType: 'InstanceType',
      businessType: 'BusinessType',
      privateIpAddress: 'PrivateIpAddress',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
      queueNumber: 'QueueNumber',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkInterfaceRequestTag },
      resourceGroupId: 'string',
      vSwitchId: 'string',
      primaryIpAddress: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      description: 'string',
      visible: 'boolean',
      instanceType: 'string',
      businessType: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      secondaryPrivateIpAddressCount: 'number',
      queueNumber: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceResponse extends $tea.Model {
  requestId: string;
  networkInterfaceId: string;
  status: string;
  type: string;
  vpcId: string;
  vSwitchId: string;
  zoneId: string;
  privateIpAddress: string;
  macAddress: string;
  networkInterfaceName: string;
  description: string;
  resourceGroupId: string;
  serviceID: number;
  serviceManaged: boolean;
  ownerId: string;
  privateIpSets: CreateNetworkInterfaceResponsePrivateIpSets;
  tags: CreateNetworkInterfaceResponseTags;
  securityGroupIds: CreateNetworkInterfaceResponseSecurityGroupIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      networkInterfaceId: 'NetworkInterfaceId',
      status: 'Status',
      type: 'Type',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      privateIpAddress: 'PrivateIpAddress',
      macAddress: 'MacAddress',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      ownerId: 'OwnerId',
      privateIpSets: 'PrivateIpSets',
      tags: 'Tags',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      networkInterfaceId: 'string',
      status: 'string',
      type: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      privateIpAddress: 'string',
      macAddress: 'string',
      networkInterfaceName: 'string',
      description: 'string',
      resourceGroupId: 'string',
      serviceID: 'number',
      serviceManaged: 'boolean',
      ownerId: 'string',
      privateIpSets: CreateNetworkInterfaceResponsePrivateIpSets,
      tags: CreateNetworkInterfaceResponseTags,
      securityGroupIds: CreateNetworkInterfaceResponseSecurityGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNetworkInterfaceRequest extends $tea.Model {
  regionId: string;
  networkInterfaceId: string;
  instanceId: string;
  trunkNetworkInstanceId?: string;
  waitForNetworkConfigurationReady?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkInterfaceId: 'NetworkInterfaceId',
      instanceId: 'InstanceId',
      trunkNetworkInstanceId: 'TrunkNetworkInstanceId',
      waitForNetworkConfigurationReady: 'WaitForNetworkConfigurationReady',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkInterfaceId: 'string',
      instanceId: 'string',
      trunkNetworkInstanceId: 'string',
      waitForNetworkConfigurationReady: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNetworkInterfaceResponse extends $tea.Model {
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

export class DescribeRecommendInstanceTypeRequest extends $tea.Model {
  cores?: number;
  memory?: number;
  instanceFamilyLevel?: string;
  instanceType?: string;
  networkType: string;
  instanceChargeType?: string;
  spotStrategy?: string;
  ioOptimized?: string;
  instanceTypeFamily?: string[];
  priorityStrategy?: string;
  maxPrice?: number;
  regionId: string;
  zoneId?: string;
  systemDiskCategory?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      ioOptimized: 'IoOptimized',
      instanceTypeFamily: 'InstanceTypeFamily',
      priorityStrategy: 'PriorityStrategy',
      maxPrice: 'MaxPrice',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      systemDiskCategory: 'SystemDiskCategory',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      memory: 'number',
      instanceFamilyLevel: 'string',
      instanceType: 'string',
      networkType: 'string',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      ioOptimized: 'string',
      instanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
      priorityStrategy: 'string',
      maxPrice: 'number',
      regionId: 'string',
      zoneId: 'string',
      systemDiskCategory: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponse extends $tea.Model {
  requestId: string;
  data: DescribeRecommendInstanceTypeResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeRecommendInstanceTypeResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequest extends $tea.Model {
  instanceId: string;
  regionId: string;
  instanceType: string;
  operatorType?: string;
  clientToken?: string;
  autoPay?: boolean;
  migrateAcrossZone?: boolean;
  systemDisk?: ModifyPrepayInstanceSpecRequestSystemDisk;
  rebootTime?: string;
  endTime?: string;
  rebootWhenFinished?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      instanceType: 'InstanceType',
      operatorType: 'OperatorType',
      clientToken: 'ClientToken',
      autoPay: 'AutoPay',
      migrateAcrossZone: 'MigrateAcrossZone',
      systemDisk: 'SystemDisk',
      rebootTime: 'RebootTime',
      endTime: 'EndTime',
      rebootWhenFinished: 'RebootWhenFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      instanceType: 'string',
      operatorType: 'string',
      clientToken: 'string',
      autoPay: 'boolean',
      migrateAcrossZone: 'boolean',
      systemDisk: ModifyPrepayInstanceSpecRequestSystemDisk,
      rebootTime: 'string',
      endTime: 'string',
      rebootWhenFinished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeRequest extends $tea.Model {
  instanceIds: string;
  regionId: string;
  period?: number;
  periodUnit?: string;
  includeDataDisks?: boolean;
  dryRun?: boolean;
  autoPay?: boolean;
  instanceChargeType?: string;
  clientToken?: string;
  isDetailFee?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      includeDataDisks: 'IncludeDataDisks',
      dryRun: 'DryRun',
      autoPay: 'AutoPay',
      instanceChargeType: 'InstanceChargeType',
      clientToken: 'ClientToken',
      isDetailFee: 'IsDetailFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      regionId: 'string',
      period: 'number',
      periodUnit: 'string',
      includeDataDisks: 'boolean',
      dryRun: 'boolean',
      autoPay: 'boolean',
      instanceChargeType: 'string',
      clientToken: 'string',
      isDetailFee: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  feeOfInstances: ModifyInstanceChargeTypeResponseFeeOfInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      feeOfInstances: 'FeeOfInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      feeOfInstances: ModifyInstanceChargeTypeResponseFeeOfInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupResponse extends $tea.Model {
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

export class ModifySecurityGroupPolicyRequest extends $tea.Model {
  securityGroupId: string;
  regionId: string;
  innerAccessPolicy: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      regionId: 'RegionId',
      innerAccessPolicy: 'InnerAccessPolicy',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      regionId: 'string',
      innerAccessPolicy: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupPolicyResponse extends $tea.Model {
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

export class DescribeSecurityGroupReferencesRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponse extends $tea.Model {
  requestId: string;
  securityGroupReferences: DescribeSecurityGroupReferencesResponseSecurityGroupReferences;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupReferences: 'SecurityGroupReferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupReferences: DescribeSecurityGroupReferencesResponseSecurityGroupReferences,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClassicLinkVpcRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  vpcId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachClassicLinkVpcResponse extends $tea.Model {
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

export class DescribeClassicLinkInstancesRequest extends $tea.Model {
  regionId: string;
  vpcId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassicLinkInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  links: DescribeClassicLinkInstancesResponseLinks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      links: 'Links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      links: DescribeClassicLinkInstancesResponseLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachClassicLinkVpcRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  vpcId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachClassicLinkVpcResponse extends $tea.Model {
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

export class DetachInstanceRamRoleRequest extends $tea.Model {
  regionId: string;
  ramRoleName?: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ramRoleName: 'RamRoleName',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ramRoleName: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  failCount: number;
  ramRoleName: string;
  detachInstanceRamRoleResults: DetachInstanceRamRoleResponseDetachInstanceRamRoleResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      detachInstanceRamRoleResults: 'DetachInstanceRamRoleResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      failCount: 'number',
      ramRoleName: 'string',
      detachInstanceRamRoleResults: DetachInstanceRamRoleResponseDetachInstanceRamRoleResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRamRoleRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
  instanceIds?: string;
  ramRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      instanceIds: 'InstanceIds',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      instanceIds: 'string',
      ramRoleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRamRoleResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  instanceRamRoleSets: DescribeInstanceRamRoleResponseInstanceRamRoleSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      instanceRamRoleSets: 'InstanceRamRoleSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      instanceRamRoleSets: DescribeInstanceRamRoleResponseInstanceRamRoleSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleRequest extends $tea.Model {
  regionId: string;
  ramRoleName: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ramRoleName: 'RamRoleName',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ramRoleName: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  failCount: number;
  ramRoleName: string;
  attachInstanceRamRoleResults: AttachInstanceRamRoleResponseAttachInstanceRamRoleResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      attachInstanceRamRoleResults: 'AttachInstanceRamRoleResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      failCount: 'number',
      ramRoleName: 'string',
      attachInstanceRamRoleResults: AttachInstanceRamRoleResponseAttachInstanceRamRoleResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotPackageRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotPackageResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  snapshotPackages: DescribeSnapshotPackageResponseSnapshotPackages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotPackages: 'SnapshotPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotPackages: DescribeSnapshotPackageResponseSnapshotPackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupRuleRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  ipProtocol: string;
  portRange: string;
  sourceGroupId?: string;
  sourceGroupOwnerId?: number;
  sourceGroupOwnerAccount?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      sourceGroupId: 'SourceGroupId',
      sourceGroupOwnerId: 'SourceGroupOwnerId',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      sourceGroupId: 'string',
      sourceGroupOwnerId: 'number',
      sourceGroupOwnerAccount: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupRuleResponse extends $tea.Model {
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

export class DescribeSnapshotMonitorDataRequest extends $tea.Model {
  regionId: string;
  startTime: string;
  endTime: string;
  period?: number;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotMonitorDataResponse extends $tea.Model {
  requestId: string;
  monitorData: DescribeSnapshotMonitorDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorData: DescribeSnapshotMonitorDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceRequest extends $tea.Model {
  regionId: string;
  resourceType?: string;
  resourceId: string;
  period?: number;
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      period: 'Period',
      priceUnit: 'PriceUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      period: 'number',
      priceUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponse extends $tea.Model {
  requestId: string;
  priceInfo: DescribeRenewalPriceResponsePriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribeRenewalPriceResponsePriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  regionId: string;
  resourceType?: string;
  imageId?: string;
  instanceType?: string;
  ioOptimized?: string;
  instanceNetworkType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  systemDisk?: DescribePriceRequestSystemDisk;
  dataDisk?: DescribePriceRequestDataDisk[];
  period?: number;
  priceUnit?: string;
  amount?: number;
  offeringType?: string;
  instanceAmount?: number;
  scope?: string;
  platform?: string;
  capacity?: number;
  assuranceTimes?: string;
  instanceCpuCoreCount?: number;
  instanceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      instanceNetworkType: 'InstanceNetworkType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      period: 'Period',
      priceUnit: 'PriceUnit',
      amount: 'Amount',
      offeringType: 'OfferingType',
      instanceAmount: 'InstanceAmount',
      scope: 'Scope',
      platform: 'Platform',
      capacity: 'Capacity',
      assuranceTimes: 'AssuranceTimes',
      instanceCpuCoreCount: 'InstanceCpuCoreCount',
      instanceTypeList: 'InstanceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      imageId: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      instanceNetworkType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      systemDisk: DescribePriceRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      period: 'number',
      priceUnit: 'string',
      amount: 'number',
      offeringType: 'string',
      instanceAmount: 'number',
      scope: 'string',
      platform: 'string',
      capacity: 'number',
      assuranceTimes: 'string',
      instanceCpuCoreCount: 'number',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  requestId: string;
  priceInfo: DescribePriceResponsePriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribePriceResponsePriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeploymentSetAttributeRequest extends $tea.Model {
  deploymentSetId: string;
  description?: string;
  deploymentSetName?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      deploymentSetName: 'DeploymentSetName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
      description: 'string',
      deploymentSetName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeploymentSetAttributeResponse extends $tea.Model {
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

export class DescribeDeploymentSetsRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  deploymentSetIds?: string;
  networkType?: string;
  strategy?: string;
  deploymentSetName?: string;
  granularity?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deploymentSetIds: 'DeploymentSetIds',
      networkType: 'NetworkType',
      strategy: 'Strategy',
      deploymentSetName: 'DeploymentSetName',
      granularity: 'Granularity',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      deploymentSetIds: 'string',
      networkType: 'string',
      strategy: 'string',
      deploymentSetName: 'string',
      granularity: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  deploymentSets: DescribeDeploymentSetsResponseDeploymentSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deploymentSets: 'DeploymentSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      deploymentSets: DescribeDeploymentSetsResponseDeploymentSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentSetRequest extends $tea.Model {
  regionId: string;
  deploymentSetId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      deploymentSetId: 'DeploymentSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      deploymentSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentSetResponse extends $tea.Model {
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

export class CreateDeploymentSetRequest extends $tea.Model {
  regionId: string;
  onUnableToRedeployFailedInstance?: string;
  description?: string;
  clientToken?: string;
  deploymentSetName?: string;
  domain?: string;
  granularity?: string;
  strategy?: string;
  groupCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      onUnableToRedeployFailedInstance: 'OnUnableToRedeployFailedInstance',
      description: 'Description',
      clientToken: 'ClientToken',
      deploymentSetName: 'DeploymentSetName',
      domain: 'Domain',
      granularity: 'Granularity',
      strategy: 'Strategy',
      groupCount: 'GroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      onUnableToRedeployFailedInstance: 'string',
      description: 'string',
      clientToken: 'string',
      deploymentSetName: 'string',
      domain: 'string',
      granularity: 'string',
      strategy: 'string',
      groupCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentSetResponse extends $tea.Model {
  requestId: string;
  deploymentSetId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deploymentSetId: 'DeploymentSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deploymentSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $tea.Model {
  regionId: string;
  keyPairName: string;
  publicKeyBody: string;
  tag?: ImportKeyPairRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairName: 'string',
      publicKeyBody: 'string',
      tag: { 'type': 'array', 'itemType': ImportKeyPairRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $tea.Model {
  requestId: string;
  keyPairName: string;
  keyPairFingerPrint: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairRequest extends $tea.Model {
  regionId: string;
  keyPairName: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairName: 'KeyPairName',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairName: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponse extends $tea.Model {
  requestId: string;
  totalCount: string;
  failCount: string;
  keyPairName: string;
  results: DetachKeyPairResponseResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      failCount: 'FailCount',
      keyPairName: 'KeyPairName',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      failCount: 'string',
      keyPairName: 'string',
      results: DetachKeyPairResponseResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsRequest extends $tea.Model {
  regionId: string;
  keyPairName?: string;
  keyPairFingerPrint?: string;
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribeKeyPairsRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeKeyPairsRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  keyPairs: DescribeKeyPairsResponseKeyPairs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyPairs: 'KeyPairs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      keyPairs: DescribeKeyPairsResponseKeyPairs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $tea.Model {
  regionId: string;
  keyPairNames: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairNames: 'KeyPairNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponse extends $tea.Model {
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

export class CreateKeyPairRequest extends $tea.Model {
  regionId: string;
  keyPairName: string;
  tag?: CreateKeyPairRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairName: 'KeyPairName',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairName: 'string',
      tag: { 'type': 'array', 'itemType': CreateKeyPairRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $tea.Model {
  requestId: string;
  keyPairId: string;
  keyPairName: string;
  keyPairFingerPrint: string;
  privateKeyBody: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      privateKeyBody: 'PrivateKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
      privateKeyBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairRequest extends $tea.Model {
  regionId: string;
  keyPairName: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      keyPairName: 'KeyPairName',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      keyPairName: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponse extends $tea.Model {
  requestId: string;
  totalCount: string;
  failCount: string;
  keyPairName: string;
  results: AttachKeyPairResponseResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      failCount: 'FailCount',
      keyPairName: 'KeyPairName',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      failCount: 'string',
      keyPairName: 'string',
      results: AttachKeyPairResponseResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewAttributeRequest extends $tea.Model {
  instanceId: string;
  regionId: string;
  duration?: number;
  autoRenew?: boolean;
  renewalStatus?: string;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      duration: 'Duration',
      autoRenew: 'AutoRenew',
      renewalStatus: 'RenewalStatus',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      duration: 'number',
      autoRenew: 'boolean',
      renewalStatus: 'string',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewAttributeResponse extends $tea.Model {
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

export class DescribeInstanceAutoRenewAttributeRequest extends $tea.Model {
  instanceId?: string;
  regionId: string;
  renewalStatus?: string;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      pageSize: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instanceRenewAttributes: 'InstanceRenewAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotLinksRequest extends $tea.Model {
  regionId: string;
  instanceId?: string;
  diskIds?: string;
  snapshotLinkIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      diskIds: 'DiskIds',
      snapshotLinkIds: 'SnapshotLinkIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      diskIds: 'string',
      snapshotLinkIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotLinksResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  snapshotLinks: DescribeSnapshotLinksResponseSnapshotLinks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotLinks: 'SnapshotLinks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotLinks: DescribeSnapshotLinksResponseSnapshotLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoReleaseTimeRequest extends $tea.Model {
  regionId?: string;
  instanceId: string;
  autoReleaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      autoReleaseTime: 'AutoReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      autoReleaseTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoReleaseTimeResponse extends $tea.Model {
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

export class DescribeNewProjectEipMonitorDataRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  startTime: string;
  endTime: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponse extends $tea.Model {
  requestId: string;
  eipMonitorDatas: DescribeNewProjectEipMonitorDataResponseEipMonitorDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eipMonitorDatas: 'EipMonitorDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eipMonitorDatas: DescribeNewProjectEipMonitorDataResponseEipMonitorDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDataRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDataResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  instanceId: string;
  userData: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      instanceId: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBandwidthPackageIpsRequest extends $tea.Model {
  regionId: string;
  bandwidthPackageId: string;
  clientToken?: string;
  removedIpAddresses: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      removedIpAddresses: 'RemovedIpAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      clientToken: 'string',
      removedIpAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBandwidthPackageIpsResponse extends $tea.Model {
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

export class ModifyForwardEntryRequest extends $tea.Model {
  forwardTableId: string;
  forwardEntryId: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: 'string',
      forwardEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyForwardEntryResponse extends $tea.Model {
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

export class ModifyBandwidthPackageSpecRequest extends $tea.Model {
  regionId: string;
  bandwidthPackageId: string;
  bandwidth: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBandwidthPackageSpecResponse extends $tea.Model {
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

export class DescribeNatGatewaysRequest extends $tea.Model {
  regionId: string;
  natGatewayId?: string;
  vpcId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      vpcId: 'VpcId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      natGatewayId: 'string',
      vpcId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  natGateways: DescribeNatGatewaysResponseNatGateways;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      natGateways: 'NatGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      natGateways: DescribeNatGatewaysResponseNatGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesRequest extends $tea.Model {
  regionId: string;
  forwardTableId: string;
  forwardEntryId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      forwardTableId: 'string',
      forwardEntryId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  forwardTableEntries: DescribeForwardTableEntriesResponseForwardTableEntries;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      forwardTableEntries: 'ForwardTableEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      forwardTableEntries: DescribeForwardTableEntriesResponseForwardTableEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesRequest extends $tea.Model {
  regionId: string;
  bandwidthPackageId?: string;
  natGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      natGatewayId: 'NatGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      natGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  bandwidthPackages: DescribeBandwidthPackagesResponseBandwidthPackages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      bandwidthPackages: 'BandwidthPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      bandwidthPackages: DescribeBandwidthPackagesResponseBandwidthPackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayRequest extends $tea.Model {
  regionId: string;
  natGatewayId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayResponse extends $tea.Model {
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

export class DeleteForwardEntryRequest extends $tea.Model {
  regionId: string;
  forwardTableId: string;
  forwardEntryId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      forwardTableId: 'string',
      forwardEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryResponse extends $tea.Model {
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

export class DeleteBandwidthPackageRequest extends $tea.Model {
  regionId: string;
  bandwidthPackageId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageResponse extends $tea.Model {
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

export class CreateNatGatewayRequest extends $tea.Model {
  regionId: string;
  vpcId: string;
  name?: string;
  description?: string;
  clientToken?: string;
  bandwidthPackage: CreateNatGatewayRequestBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      name: 'Name',
      description: 'Description',
      clientToken: 'ClientToken',
      bandwidthPackage: 'BandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      name: 'string',
      description: 'string',
      clientToken: 'string',
      bandwidthPackage: { 'type': 'array', 'itemType': CreateNatGatewayRequestBandwidthPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponse extends $tea.Model {
  requestId: string;
  natGatewayId: string;
  forwardTableIds: CreateNatGatewayResponseForwardTableIds;
  bandwidthPackageIds: CreateNatGatewayResponseBandwidthPackageIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      natGatewayId: 'NatGatewayId',
      forwardTableIds: 'ForwardTableIds',
      bandwidthPackageIds: 'BandwidthPackageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      natGatewayId: 'string',
      forwardTableIds: CreateNatGatewayResponseForwardTableIds,
      bandwidthPackageIds: CreateNatGatewayResponseBandwidthPackageIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryRequest extends $tea.Model {
  regionId: string;
  forwardTableId: string;
  externalIp: string;
  externalPort: string;
  internalIp: string;
  internalPort: string;
  ipProtocol: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      forwardTableId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryResponse extends $tea.Model {
  requestId: string;
  forwardEntryId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      forwardEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBandwidthPackageIpsRequest extends $tea.Model {
  regionId: string;
  bandwidthPackageId: string;
  ipCount: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      ipCount: 'IpCount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      ipCount: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBandwidthPackageIpsResponse extends $tea.Model {
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

export class EipFillProductRequest extends $tea.Model {
  data: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EipFillProductResponse extends $tea.Model {
  requestId: string;
  data: string;
  code: string;
  success: boolean;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      data: 'data',
      code: 'code',
      success: 'success',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EipNotifyPaidRequest extends $tea.Model {
  data: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EipNotifyPaidResponse extends $tea.Model {
  requestId: string;
  data: string;
  code: string;
  message: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      data: 'data',
      code: 'code',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EipFillParamsRequest extends $tea.Model {
  data: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EipFillParamsResponse extends $tea.Model {
  requestId: string;
  data: string;
  code: string;
  success: boolean;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      data: 'data',
      code: 'code',
      success: 'success',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyExRequest extends $tea.Model {
  regionId: string;
  autoSnapshotPolicyId: string;
  autoSnapshotPolicyName?: string;
  timePoints?: string;
  repeatWeekdays?: string;
  retentionDays?: number;
  enableCrossRegionCopy?: boolean;
  targetCopyRegions?: string;
  copiedSnapshotsRetentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      autoSnapshotPolicyId: 'autoSnapshotPolicyId',
      autoSnapshotPolicyName: 'autoSnapshotPolicyName',
      timePoints: 'timePoints',
      repeatWeekdays: 'repeatWeekdays',
      retentionDays: 'retentionDays',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      targetCopyRegions: 'TargetCopyRegions',
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      timePoints: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      enableCrossRegionCopy: 'boolean',
      targetCopyRegions: 'string',
      copiedSnapshotsRetentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyExResponse extends $tea.Model {
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

export class DescribeAutoSnapshotPolicyExRequest extends $tea.Model {
  regionId: string;
  autoSnapshotPolicyId?: string;
  pageNumber?: number;
  pageSize?: number;
  tag?: DescribeAutoSnapshotPolicyExRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoSnapshotPolicyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  autoSnapshotPolicies: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPolicies;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      autoSnapshotPolicies: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPolicies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyRequest extends $tea.Model {
  regionId: string;
  autoSnapshotPolicyId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      autoSnapshotPolicyId: 'autoSnapshotPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoSnapshotPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponse extends $tea.Model {
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

export class CreateAutoSnapshotPolicyRequest extends $tea.Model {
  regionId: string;
  autoSnapshotPolicyName?: string;
  timePoints: string;
  repeatWeekdays: string;
  retentionDays: number;
  enableCrossRegionCopy?: boolean;
  targetCopyRegions?: string;
  copiedSnapshotsRetentionDays?: number;
  tag?: CreateAutoSnapshotPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      autoSnapshotPolicyName: 'autoSnapshotPolicyName',
      timePoints: 'timePoints',
      repeatWeekdays: 'repeatWeekdays',
      retentionDays: 'retentionDays',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      targetCopyRegions: 'TargetCopyRegions',
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoSnapshotPolicyName: 'string',
      timePoints: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      enableCrossRegionCopy: 'boolean',
      targetCopyRegions: 'string',
      copiedSnapshotsRetentionDays: 'number',
      tag: { 'type': 'array', 'itemType': CreateAutoSnapshotPolicyRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponse extends $tea.Model {
  requestId: string;
  autoSnapshotPolicyId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      autoSnapshotPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyRequest extends $tea.Model {
  regionId: string;
  diskIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      diskIds: 'diskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      diskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponse extends $tea.Model {
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

export class ApplyAutoSnapshotPolicyRequest extends $tea.Model {
  regionId: string;
  autoSnapshotPolicyId: string;
  diskIds: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      autoSnapshotPolicyId: 'autoSnapshotPolicyId',
      diskIds: 'diskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoSnapshotPolicyId: 'string',
      diskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponse extends $tea.Model {
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

export class DescribeImageSupportInstanceTypesRequest extends $tea.Model {
  regionId: string;
  imageId?: string;
  actionType?: string;
  filter?: DescribeImageSupportInstanceTypesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      actionType: 'ActionType',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      actionType: 'string',
      filter: { 'type': 'array', 'itemType': DescribeImageSupportInstanceTypesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSupportInstanceTypesResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  imageId: string;
  instanceTypes: DescribeImageSupportInstanceTypesResponseInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      imageId: 'ImageId',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      imageId: 'string',
      instanceTypes: DescribeImageSupportInstanceTypesResponseInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateVirtualBorderRouterRequest extends $tea.Model {
  regionId: string;
  vbrId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateVirtualBorderRouterResponse extends $tea.Model {
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

export class TerminatePhysicalConnectionRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminatePhysicalConnectionResponse extends $tea.Model {
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

export class RecoverVirtualBorderRouterRequest extends $tea.Model {
  regionId: string;
  vbrId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverVirtualBorderRouterResponse extends $tea.Model {
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

export class ModifyVirtualBorderRouterAttributeRequest extends $tea.Model {
  regionId: string;
  vbrId: string;
  vlanId?: number;
  circuitCode?: string;
  localGatewayIp?: string;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  description?: string;
  name?: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
      localGatewayIp: 'LocalGatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      description: 'Description',
      name: 'Name',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      vlanId: 'number',
      circuitCode: 'string',
      localGatewayIp: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      description: 'string',
      name: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualBorderRouterAttributeResponse extends $tea.Model {
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

export class ModifyPhysicalConnectionAttributeRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  lineOperator?: string;
  bandwidth?: number;
  peerLocation?: string;
  portType?: string;
  redundantPhysicalConnectionId?: string;
  description?: string;
  name?: string;
  clientToken?: string;
  userCidr?: string;
  circuitCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      lineOperator: 'LineOperator',
      bandwidth: 'bandwidth',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      description: 'Description',
      name: 'Name',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
      circuitCode: 'CircuitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      lineOperator: 'string',
      bandwidth: 'number',
      peerLocation: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      description: 'string',
      name: 'string',
      clientToken: 'string',
      userCidr: 'string',
      circuitCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPhysicalConnectionAttributeResponse extends $tea.Model {
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

export class EnablePhysicalConnectionRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  clientToken: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePhysicalConnectionResponse extends $tea.Model {
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

export class DescribeVirtualBorderRoutersForPhysicalConnectionRequest extends $tea.Model {
  filter?: DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter[];
  regionId: string;
  physicalConnectionId: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter },
      regionId: 'string',
      physicalConnectionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      virtualBorderRouterForPhysicalConnectionSet: 'VirtualBorderRouterForPhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeVirtualBorderRoutersRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  virtualBorderRouterSet: DescribeVirtualBorderRoutersResponseVirtualBorderRouterSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      virtualBorderRouterSet: 'VirtualBorderRouterSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      virtualBorderRouterSet: DescribeVirtualBorderRoutersResponseVirtualBorderRouterSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribePhysicalConnectionsRequestFilter[];
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribePhysicalConnectionsRequestFilter },
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  physicalConnectionSet: DescribePhysicalConnectionsResponsePhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      physicalConnectionSet: 'PhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      physicalConnectionSet: DescribePhysicalConnectionsResponsePhysicalConnectionSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequest extends $tea.Model {
  filter?: DescribeAccessPointsRequestFilter[];
  regionId: string;
  type?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      regionId: 'RegionId',
      type: 'Type',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeAccessPointsRequestFilter },
      regionId: 'string',
      type: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  accessPointSet: DescribeAccessPointsResponseAccessPointSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accessPointSet: 'AccessPointSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      accessPointSet: DescribeAccessPointsResponseAccessPointSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualBorderRouterRequest extends $tea.Model {
  regionId: string;
  vbrId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualBorderRouterResponse extends $tea.Model {
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

export class DeletePhysicalConnectionRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhysicalConnectionResponse extends $tea.Model {
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

export class CreateVirtualBorderRouterRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  vbrOwnerId?: number;
  vlanId: number;
  circuitCode?: string;
  localGatewayIp?: string;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  description?: string;
  name?: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      vbrOwnerId: 'VbrOwnerId',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
      localGatewayIp: 'LocalGatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      description: 'Description',
      name: 'Name',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      vbrOwnerId: 'number',
      vlanId: 'number',
      circuitCode: 'string',
      localGatewayIp: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      description: 'string',
      name: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualBorderRouterResponse extends $tea.Model {
  requestId: string;
  vbrId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vbrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalConnectionRequest extends $tea.Model {
  regionId: string;
  accessPointId: string;
  type?: string;
  lineOperator: string;
  bandwidth?: number;
  peerLocation: string;
  portType?: string;
  redundantPhysicalConnectionId?: string;
  description?: string;
  name?: string;
  circuitCode?: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accessPointId: 'AccessPointId',
      type: 'Type',
      lineOperator: 'LineOperator',
      bandwidth: 'bandwidth',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      description: 'Description',
      name: 'Name',
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accessPointId: 'string',
      type: 'string',
      lineOperator: 'string',
      bandwidth: 'number',
      peerLocation: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      description: 'string',
      name: 'string',
      circuitCode: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalConnectionResponse extends $tea.Model {
  requestId: string;
  physicalConnectionId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      physicalConnectionId: 'PhysicalConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      physicalConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPhysicalConnectionRequest extends $tea.Model {
  regionId: string;
  physicalConnectionId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPhysicalConnectionResponse extends $tea.Model {
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

export class ImportImageRequest extends $tea.Model {
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  regionId: string;
  imageName?: string;
  description?: string;
  architecture?: string;
  OSType?: string;
  platform?: string;
  bootMode?: string;
  roleName?: string;
  licenseType?: string;
  tag?: ImportImageRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
      regionId: 'RegionId',
      imageName: 'ImageName',
      description: 'Description',
      architecture: 'Architecture',
      OSType: 'OSType',
      platform: 'Platform',
      bootMode: 'BootMode',
      roleName: 'RoleName',
      licenseType: 'LicenseType',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': ImportImageRequestDiskDeviceMapping },
      regionId: 'string',
      imageName: 'string',
      description: 'string',
      architecture: 'string',
      OSType: 'string',
      platform: 'string',
      bootMode: 'string',
      roleName: 'string',
      licenseType: 'string',
      tag: { 'type': 'array', 'itemType': ImportImageRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportImageResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  regionId: string;
  imageId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      regionId: 'RegionId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      regionId: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  OSSBucket: string;
  OSSPrefix?: string;
  imageFormat?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSPrefix: 'OSSPrefix',
      imageFormat: 'ImageFormat',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      OSSBucket: 'string',
      OSSPrefix: 'string',
      imageFormat: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
  taskIds?: string;
  taskAction?: string;
  taskStatus?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskIds: 'TaskIds',
      taskAction: 'TaskAction',
      taskStatus: 'TaskStatus',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskIds: 'string',
      taskAction: 'string',
      taskStatus: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  taskSet: DescribeTasksResponseTaskSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskSet: 'TaskSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      taskSet: DescribeTasksResponseTaskSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeRequest extends $tea.Model {
  regionId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponse extends $tea.Model {
  requestId: string;
  taskId: string;
  regionId: string;
  taskAction: string;
  taskStatus: string;
  taskProcess: string;
  supportCancel: string;
  totalCount: number;
  successCount: number;
  failedCount: number;
  creationTime: string;
  finishedTime: string;
  operationProgressSet: DescribeTaskAttributeResponseOperationProgressSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      regionId: 'RegionId',
      taskAction: 'TaskAction',
      taskStatus: 'TaskStatus',
      taskProcess: 'TaskProcess',
      supportCancel: 'SupportCancel',
      totalCount: 'TotalCount',
      successCount: 'SuccessCount',
      failedCount: 'FailedCount',
      creationTime: 'CreationTime',
      finishedTime: 'FinishedTime',
      operationProgressSet: 'OperationProgressSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      regionId: 'string',
      taskAction: 'string',
      taskStatus: 'string',
      taskProcess: 'string',
      supportCancel: 'string',
      totalCount: 'number',
      successCount: 'number',
      failedCount: 'number',
      creationTime: 'string',
      finishedTime: 'string',
      operationProgressSet: DescribeTaskAttributeResponseOperationProgressSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $tea.Model {
  regionId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
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

export class DescribeInstanceTypeFamiliesRequest extends $tea.Model {
  regionId: string;
  generation?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      generation: 'Generation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      generation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeFamiliesResponse extends $tea.Model {
  requestId: string;
  instanceTypeFamilies: DescribeInstanceTypeFamiliesResponseInstanceTypeFamilies;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceTypeFamilies: 'InstanceTypeFamilies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceTypeFamilies: DescribeInstanceTypeFamiliesResponseInstanceTypeFamilies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceSpecRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  spec: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      spec: 'Spec',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      spec: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceSpecResponse extends $tea.Model {
  requestId: string;
  spec: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceAttributeRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  name?: string;
  description?: string;
  oppositeInterfaceId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  oppositeInterfaceOwnerId?: number;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      name: 'Name',
      description: 'Description',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      name: 'string',
      description: 'string',
      oppositeInterfaceId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      oppositeInterfaceOwnerId: 'number',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceAttributeResponse extends $tea.Model {
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

export class DescribeRouterInterfacesRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeRouterInterfacesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeRouterInterfacesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponse extends $tea.Model {
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  routerInterfaceSet: DescribeRouterInterfacesResponseRouterInterfaceSet;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      routerInterfaceSet: 'RouterInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      routerInterfaceSet: DescribeRouterInterfacesResponseRouterInterfaceSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouterInterfaceRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouterInterfaceResponse extends $tea.Model {
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

export class DeactivateRouterInterfaceRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateRouterInterfaceResponse extends $tea.Model {
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

export class CreateRouterInterfaceRequest extends $tea.Model {
  regionId: string;
  role: string;
  oppositeRegionId: string;
  spec: string;
  routerType: string;
  routerId: string;
  oppositeInterfaceId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  oppositeInterfaceOwnerId?: string;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  accessPointId?: string;
  oppositeAccessPointId?: string;
  description?: string;
  name?: string;
  period?: number;
  instanceChargeType?: string;
  autoPay?: boolean;
  pricingCycle?: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      role: 'Role',
      oppositeRegionId: 'OppositeRegionId',
      spec: 'Spec',
      routerType: 'RouterType',
      routerId: 'RouterId',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      accessPointId: 'AccessPointId',
      oppositeAccessPointId: 'OppositeAccessPointId',
      description: 'Description',
      name: 'Name',
      period: 'Period',
      instanceChargeType: 'InstanceChargeType',
      autoPay: 'AutoPay',
      pricingCycle: 'PricingCycle',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      role: 'string',
      oppositeRegionId: 'string',
      spec: 'string',
      routerType: 'string',
      routerId: 'string',
      oppositeInterfaceId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      oppositeInterfaceOwnerId: 'string',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      accessPointId: 'string',
      oppositeAccessPointId: 'string',
      description: 'string',
      name: 'string',
      period: 'number',
      instanceChargeType: 'string',
      autoPay: 'boolean',
      pricingCycle: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouterInterfaceResponse extends $tea.Model {
  requestId: string;
  routerInterfaceId: string;
  orderId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routerInterfaceId: 'RouterInterfaceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routerInterfaceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectRouterInterfaceRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectRouterInterfaceResponse extends $tea.Model {
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

export class ActivateRouterInterfaceRequest extends $tea.Model {
  regionId: string;
  routerInterfaceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateRouterInterfaceResponse extends $tea.Model {
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

export class UnassociateHaVipRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  haVipId: string;
  instanceId: string;
  force?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      instanceId: 'string',
      force: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateHaVipResponse extends $tea.Model {
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

export class ModifyHaVipAttributeRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  haVipId: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHaVipAttributeResponse extends $tea.Model {
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

export class DescribeHaVipsRequest extends $tea.Model {
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  filter: DescribeHaVipsRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeHaVipsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  haVips: DescribeHaVipsResponseHaVips;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      haVips: 'HaVips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      haVips: DescribeHaVipsResponseHaVips,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHaVipRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  haVipId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHaVipResponse extends $tea.Model {
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

export class CreateHaVipRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  vSwitchId: string;
  ipAddress?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHaVipResponse extends $tea.Model {
  requestId: string;
  haVipId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      haVipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateHaVipRequest extends $tea.Model {
  clientToken?: string;
  regionId: string;
  haVipId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateHaVipResponse extends $tea.Model {
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

export class RenewInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId: string;
  period: number;
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      period: 'number',
      periodUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
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

export class RemoveTagsRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId: string;
  tag?: RemoveTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponse extends $tea.Model {
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

export class DescribeTagsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  resourceType?: string;
  resourceId?: string;
  regionId: string;
  tag?: DescribeTagsRequestTag[];
  category?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      regionId: 'RegionId',
      tag: 'Tag',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      resourceType: 'string',
      resourceId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagsRequestTag },
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  requestId: string;
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  tags: DescribeTagsResponseTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      tags: DescribeTagsResponseTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByTagsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  resourceType?: string;
  regionId: string;
  tag?: DescribeResourceByTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      resourceType: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeResourceByTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByTagsResponse extends $tea.Model {
  requestId: string;
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  resources: DescribeResourceByTagsResponseResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      resources: DescribeResourceByTagsResponseResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId: string;
  tag: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponse extends $tea.Model {
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

export class UnassociateEipAddressRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  instanceId: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressResponse extends $tea.Model {
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
  confirmStop?: boolean;
  forceStop?: boolean;
  stoppedMode?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      confirmStop: 'ConfirmStop',
      forceStop: 'ForceStop',
      stoppedMode: 'StoppedMode',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      confirmStop: 'boolean',
      forceStop: 'boolean',
      stoppedMode: 'string',
      dryRun: 'boolean',
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
  sourceRegionId?: string;
  instanceId: string;
  initLocalDisk?: boolean;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceRegionId: 'SourceRegionId',
      instanceId: 'InstanceId',
      initLocalDisk: 'InitLocalDisk',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRegionId: 'string',
      instanceId: 'string',
      initLocalDisk: 'boolean',
      dryRun: 'boolean',
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

export class RevokeSecurityGroupEgressRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  ipProtocol: string;
  portRange: string;
  destGroupId?: string;
  destGroupOwnerId?: number;
  destGroupOwnerAccount?: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      destGroupId: 'DestGroupId',
      destGroupOwnerId: 'DestGroupOwnerId',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      destGroupId: 'string',
      destGroupOwnerId: 'number',
      destGroupOwnerAccount: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressResponse extends $tea.Model {
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

export class RevokeSecurityGroupRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  portRange: string;
  ipProtocol: string;
  sourceGroupId?: string;
  sourceGroupOwnerId?: number;
  sourceGroupOwnerAccount?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      portRange: 'PortRange',
      ipProtocol: 'IpProtocol',
      sourceGroupId: 'SourceGroupId',
      sourceGroupOwnerId: 'SourceGroupOwnerId',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      portRange: 'string',
      ipProtocol: 'string',
      sourceGroupId: 'string',
      sourceGroupOwnerId: 'number',
      sourceGroupOwnerAccount: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupResponse extends $tea.Model {
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

export class ResizeDiskRequest extends $tea.Model {
  diskId: string;
  type?: string;
  newSize: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      type: 'Type',
      newSize: 'NewSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      type: 'string',
      newSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDiskResponse extends $tea.Model {
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

export class ResetDiskRequest extends $tea.Model {
  diskId: string;
  snapshotId: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskResponse extends $tea.Model {
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

export class ReplaceSystemDiskRequest extends $tea.Model {
  instanceId: string;
  imageId?: string;
  systemDisk?: ReplaceSystemDiskRequestSystemDisk;
  clientToken?: string;
  useAdditionalService?: boolean;
  password?: string;
  passwordInherit?: boolean;
  keyPairName?: string;
  diskId?: string;
  platform?: string;
  architecture?: string;
  securityEnhancementStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      imageId: 'ImageId',
      systemDisk: 'SystemDisk',
      clientToken: 'ClientToken',
      useAdditionalService: 'UseAdditionalService',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      keyPairName: 'KeyPairName',
      diskId: 'DiskId',
      platform: 'Platform',
      architecture: 'Architecture',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      imageId: 'string',
      systemDisk: ReplaceSystemDiskRequestSystemDisk,
      clientToken: 'string',
      useAdditionalService: 'boolean',
      password: 'string',
      passwordInherit: 'boolean',
      keyPairName: 'string',
      diskId: 'string',
      platform: 'string',
      architecture: 'string',
      securityEnhancementStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceSystemDiskResponse extends $tea.Model {
  requestId: string;
  diskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      diskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicIpAddressRequest extends $tea.Model {
  instanceId?: string;
  publicIpAddress: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      publicIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicIpAddressResponse extends $tea.Model {
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

export class ReleaseEipAddressRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressResponse extends $tea.Model {
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

export class ReInitDiskRequest extends $tea.Model {
  diskId: string;
  password?: string;
  keyPairName?: string;
  autoStartInstance?: boolean;
  securityEnhancementStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      password: 'Password',
      keyPairName: 'KeyPairName',
      autoStartInstance: 'AutoStartInstance',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      password: 'string',
      keyPairName: 'string',
      autoStartInstance: 'boolean',
      securityEnhancementStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponse extends $tea.Model {
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

export class RebootInstanceRequest extends $tea.Model {
  instanceId: string;
  forceStop?: boolean;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      forceStop: 'boolean',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $tea.Model {
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

export class ModifyVSwitchAttributeRequest extends $tea.Model {
  vSwitchId: string;
  vSwitchName?: string;
  regionId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      regionId: 'RegionId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vSwitchName: 'string',
      regionId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeResponse extends $tea.Model {
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

export class ModifyVRouterAttributeRequest extends $tea.Model {
  regionId?: string;
  VRouterId: string;
  VRouterName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      VRouterId: 'VRouterId',
      VRouterName: 'VRouterName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      VRouterId: 'string',
      VRouterName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVRouterAttributeResponse extends $tea.Model {
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

export class ModifyVpcAttributeRequest extends $tea.Model {
  vpcId: string;
  description?: string;
  vpcName?: string;
  cidrBlock?: string;
  regionId?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      description: 'Description',
      vpcName: 'VpcName',
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      description: 'string',
      vpcName: 'string',
      cidrBlock: 'string',
      regionId: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcAttributeResponse extends $tea.Model {
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

export class ModifySnapshotAttributeRequest extends $tea.Model {
  snapshotId: string;
  snapshotName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      snapshotName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySnapshotAttributeResponse extends $tea.Model {
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

export class ModifySecurityGroupAttributeRequest extends $tea.Model {
  securityGroupId: string;
  description?: string;
  securityGroupName?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      description: 'Description',
      securityGroupName: 'SecurityGroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      description: 'string',
      securityGroupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeResponse extends $tea.Model {
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

export class ModifyInstanceVpcAttributeRequest extends $tea.Model {
  instanceId: string;
  vSwitchId: string;
  privateIpAddress?: string;
  vpcId?: string;
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      vpcId: 'VpcId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      vpcId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAttributeResponse extends $tea.Model {
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

export class ModifyInstanceVncPasswdRequest extends $tea.Model {
  instanceId: string;
  regionId: string;
  vncPassword: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vncPassword: 'VncPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      vncPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswdResponse extends $tea.Model {
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

export class ModifyInstanceSpecRequest extends $tea.Model {
  instanceId: string;
  instanceType?: string;
  internetMaxBandwidthOut?: number;
  internetMaxBandwidthIn?: number;
  temporary?: ModifyInstanceSpecRequestTemporary;
  async?: boolean;
  allowMigrateAcrossZone?: boolean;
  systemDisk?: ModifyInstanceSpecRequestSystemDisk;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      temporary: 'Temporary',
      async: 'Async',
      allowMigrateAcrossZone: 'AllowMigrateAcrossZone',
      systemDisk: 'SystemDisk',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      internetMaxBandwidthOut: 'number',
      internetMaxBandwidthIn: 'number',
      temporary: ModifyInstanceSpecRequestTemporary,
      async: 'boolean',
      allowMigrateAcrossZone: 'boolean',
      systemDisk: ModifyInstanceSpecRequestSystemDisk,
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponse extends $tea.Model {
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

export class ModifyInstanceNetworkSpecRequest extends $tea.Model {
  instanceId: string;
  internetMaxBandwidthOut?: number;
  internetMaxBandwidthIn?: number;
  networkChargeType?: string;
  allocatePublicIp?: boolean;
  startTime?: string;
  endTime?: string;
  autoPay?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      networkChargeType: 'NetworkChargeType',
      allocatePublicIp: 'AllocatePublicIp',
      startTime: 'StartTime',
      endTime: 'EndTime',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      internetMaxBandwidthOut: 'number',
      internetMaxBandwidthIn: 'number',
      networkChargeType: 'string',
      allocatePublicIp: 'boolean',
      startTime: 'string',
      endTime: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetworkSpecResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  instanceId: string;
  password?: string;
  hostName?: string;
  instanceName?: string;
  description?: string;
  userData?: string;
  recyclable?: boolean;
  creditSpecification?: string;
  deletionProtection?: boolean;
  securityGroupIds?: string[];
  networkInterfaceQueueNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      hostName: 'HostName',
      instanceName: 'InstanceName',
      description: 'Description',
      userData: 'UserData',
      recyclable: 'Recyclable',
      creditSpecification: 'CreditSpecification',
      deletionProtection: 'DeletionProtection',
      securityGroupIds: 'SecurityGroupIds',
      networkInterfaceQueueNumber: 'NetworkInterfaceQueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      hostName: 'string',
      instanceName: 'string',
      description: 'string',
      userData: 'string',
      recyclable: 'boolean',
      creditSpecification: 'string',
      deletionProtection: 'boolean',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceQueueNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
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

export class ModifyImageSharePermissionRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  addAccount?: string[];
  removeAccount?: string[];
  launchPermission?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      addAccount: 'AddAccount',
      removeAccount: 'RemoveAccount',
      launchPermission: 'LaunchPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      addAccount: { 'type': 'array', 'itemType': 'string' },
      removeAccount: { 'type': 'array', 'itemType': 'string' },
      launchPermission: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionResponse extends $tea.Model {
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

export class ModifyImageShareGroupPermissionRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  addGroup?: string[];
  removeGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      addGroup: 'AddGroup',
      removeGroup: 'RemoveGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      addGroup: { 'type': 'array', 'itemType': 'string' },
      removeGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareGroupPermissionResponse extends $tea.Model {
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

export class ModifyImageAttributeRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  imageName?: string;
  status?: string;
  imageFamily?: string;
  bootMode?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      status: 'Status',
      imageFamily: 'ImageFamily',
      bootMode: 'BootMode',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      imageName: 'string',
      status: 'string',
      imageFamily: 'string',
      bootMode: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponse extends $tea.Model {
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

export class ModifyEipAddressAttributeRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  bandwidth: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEipAddressAttributeResponse extends $tea.Model {
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

export class ModifyDiskAttributeRequest extends $tea.Model {
  diskId?: string;
  diskIds?: string[];
  diskName?: string;
  description?: string;
  deleteWithInstance?: boolean;
  deleteAutoSnapshot?: boolean;
  enableAutoSnapshot?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      description: 'Description',
      deleteWithInstance: 'DeleteWithInstance',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      enableAutoSnapshot: 'EnableAutoSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      diskName: 'string',
      description: 'string',
      deleteWithInstance: 'boolean',
      deleteAutoSnapshot: 'boolean',
      enableAutoSnapshot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskAttributeResponse extends $tea.Model {
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

export class ModifyAutoSnapshotPolicyRequest extends $tea.Model {
  systemDiskPolicyEnabled?: boolean;
  systemDiskPolicyTimePeriod?: number;
  systemDiskPolicyRetentionDays?: number;
  systemDiskPolicyRetentionLastWeek?: boolean;
  dataDiskPolicyEnabled?: boolean;
  dataDiskPolicyTimePeriod?: number;
  dataDiskPolicyRetentionDays?: number;
  dataDiskPolicyRetentionLastWeek?: boolean;
  static names(): { [key: string]: string } {
    return {
      systemDiskPolicyEnabled: 'SystemDiskPolicyEnabled',
      systemDiskPolicyTimePeriod: 'SystemDiskPolicyTimePeriod',
      systemDiskPolicyRetentionDays: 'SystemDiskPolicyRetentionDays',
      systemDiskPolicyRetentionLastWeek: 'SystemDiskPolicyRetentionLastWeek',
      dataDiskPolicyEnabled: 'DataDiskPolicyEnabled',
      dataDiskPolicyTimePeriod: 'DataDiskPolicyTimePeriod',
      dataDiskPolicyRetentionDays: 'DataDiskPolicyRetentionDays',
      dataDiskPolicyRetentionLastWeek: 'DataDiskPolicyRetentionLastWeek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskPolicyEnabled: 'boolean',
      systemDiskPolicyTimePeriod: 'number',
      systemDiskPolicyRetentionDays: 'number',
      systemDiskPolicyRetentionLastWeek: 'boolean',
      dataDiskPolicyEnabled: 'boolean',
      dataDiskPolicyTimePeriod: 'number',
      dataDiskPolicyRetentionDays: 'number',
      dataDiskPolicyRetentionLastWeek: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponse extends $tea.Model {
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

export class LeaveSecurityGroupRequest extends $tea.Model {
  securityGroupId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupResponse extends $tea.Model {
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

export class JoinSecurityGroupRequest extends $tea.Model {
  securityGroupId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupResponse extends $tea.Model {
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

export class DetachDiskRequest extends $tea.Model {
  instanceId: string;
  diskId: string;
  deleteWithInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      diskId: 'DiskId',
      deleteWithInstance: 'DeleteWithInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      diskId: 'string',
      deleteWithInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDiskResponse extends $tea.Model {
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

export class DescribeZonesRequest extends $tea.Model {
  regionId: string;
  verbose?: boolean;
  instanceChargeType?: string;
  spotStrategy?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      verbose: 'Verbose',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      verbose: 'boolean',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  requestId: string;
  zones: DescribeZonesResponseZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  vpcId?: string;
  vSwitchId?: string;
  zoneId?: string;
  regionId?: string;
  isDefault?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      isDefault: 'IsDefault',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      regionId: 'string',
      isDefault: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  vSwitches: DescribeVSwitchesResponseVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitches: DescribeVSwitchesResponseVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersRequest extends $tea.Model {
  VRouterId?: string;
  regionId: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      VRouterId: 'VRouterId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouterId: 'string',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  VRouters: DescribeVRoutersResponseVRouters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      VRouters: 'VRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      VRouters: DescribeVRoutersResponseVRouters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsRequest extends $tea.Model {
  vpcId?: string;
  regionId: string;
  isDefault?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      regionId: 'RegionId',
      isDefault: 'IsDefault',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      regionId: 'string',
      isDefault: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  vpcs: DescribeVpcsResponseVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      vpcs: DescribeVpcsResponseVpcs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  instanceId?: string;
  diskId?: string;
  snapshotLinkId?: string;
  regionId: string;
  snapshotIds?: string;
  pageNumber?: number;
  pageSize?: number;
  snapshotName?: string;
  status?: string;
  snapshotType?: string;
  filter?: DescribeSnapshotsRequestFilter[];
  usage?: string;
  sourceDiskType?: string;
  tag?: DescribeSnapshotsRequestTag[];
  encrypted?: boolean;
  resourceGroupId?: string;
  dryRun?: boolean;
  KMSKeyId?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      diskId: 'DiskId',
      snapshotLinkId: 'SnapshotLinkId',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotName: 'SnapshotName',
      status: 'Status',
      snapshotType: 'SnapshotType',
      filter: 'Filter',
      usage: 'Usage',
      sourceDiskType: 'SourceDiskType',
      tag: 'Tag',
      encrypted: 'Encrypted',
      resourceGroupId: 'ResourceGroupId',
      dryRun: 'DryRun',
      KMSKeyId: 'KMSKeyId',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      diskId: 'string',
      snapshotLinkId: 'string',
      regionId: 'string',
      snapshotIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotName: 'string',
      status: 'string',
      snapshotType: 'string',
      filter: { 'type': 'array', 'itemType': DescribeSnapshotsRequestFilter },
      usage: 'string',
      sourceDiskType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSnapshotsRequestTag },
      encrypted: 'boolean',
      resourceGroupId: 'string',
      dryRun: 'boolean',
      KMSKeyId: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  snapshots: DescribeSnapshotsResponseSnapshots;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      snapshots: DescribeSnapshotsResponseSnapshots,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  regionId: string;
  vpcId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityGroupIds?: string;
  tag?: DescribeSecurityGroupsRequestTag[];
  resourceGroupId?: string;
  networkType?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  isQueryEcsCount?: boolean;
  fuzzyQuery?: boolean;
  securityGroupType?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroupIds: 'SecurityGroupIds',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      isQueryEcsCount: 'IsQueryEcsCount',
      fuzzyQuery: 'FuzzyQuery',
      securityGroupType: 'SecurityGroupType',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityGroupIds: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSecurityGroupsRequestTag },
      resourceGroupId: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      isQueryEcsCount: 'boolean',
      fuzzyQuery: 'boolean',
      securityGroupType: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  securityGroups: DescribeSecurityGroupsResponseSecurityGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityGroups: DescribeSecurityGroupsResponseSecurityGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeRequest extends $tea.Model {
  securityGroupId: string;
  regionId: string;
  nicType?: string;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      regionId: 'RegionId',
      nicType: 'NicType',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      regionId: 'string',
      nicType: 'string',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  securityGroupId: string;
  description: string;
  securityGroupName: string;
  vpcId: string;
  innerAccessPolicy: string;
  permissions: DescribeSecurityGroupAttributeResponsePermissions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      description: 'Description',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
      innerAccessPolicy: 'InnerAccessPolicy',
      permissions: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      description: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
      innerAccessPolicy: 'string',
      permissions: DescribeSecurityGroupAttributeResponsePermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesRequest extends $tea.Model {
  regionId?: string;
  VRouterId?: string;
  routeTableId?: string;
  routerType?: string;
  routerId?: string;
  routeTableName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      VRouterId: 'VRouterId',
      routeTableId: 'RouteTableId',
      routerType: 'RouterType',
      routerId: 'RouterId',
      routeTableName: 'RouteTableName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      VRouterId: 'string',
      routeTableId: 'string',
      routerType: 'string',
      routerId: 'string',
      routeTableName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  routeTables: DescribeRouteTablesResponseRouteTables;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeTables: 'RouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      routeTables: DescribeRouteTablesResponseRouteTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  instanceChargeType?: string;
  resourceType?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      resourceType: 'ResourceType',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      resourceType: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  requestId: string;
  regions: DescribeRegionsResponseRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationRequest extends $tea.Model {
  limitation: string;
  static names(): { [key: string]: string } {
    return {
      limitation: 'Limitation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationResponse extends $tea.Model {
  requestId: string;
  limitation: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      limitation: 'Limitation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      limitation: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponse extends $tea.Model {
  requestId: string;
  vncUrl: string;
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

export class DescribeInstanceVncPasswdRequest extends $tea.Model {
  regionId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncPasswdResponse extends $tea.Model {
  requestId: string;
  vncPasswd: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncPasswd: 'VncPasswd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncPasswd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  instanceTypeFamily?: string;
  instanceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  requestId: string;
  instanceTypes: DescribeInstanceTypesResponseInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceTypes: DescribeInstanceTypesResponseInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusRequest extends $tea.Model {
  instanceId?: string[];
  regionId: string;
  zoneId?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  instanceStatuses: DescribeInstanceStatusResponseInstanceStatuses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceStatuses: 'InstanceStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      instanceStatuses: DescribeInstanceStatusResponseInstanceStatuses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  regionId: string;
  vpcId?: string;
  vSwitchId?: string;
  zoneId?: string;
  instanceNetworkType?: string;
  securityGroupId?: string;
  instanceIds?: string;
  pageNumber?: number;
  pageSize?: number;
  innerIpAddresses?: string;
  privateIpAddresses?: string;
  publicIpAddresses?: string;
  eipAddresses?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  instanceName?: string;
  imageId?: string;
  status?: string;
  lockReason?: string;
  filter?: DescribeInstancesRequestFilter[];
  deviceAvailable?: boolean;
  ioOptimized?: boolean;
  needSaleCycle?: boolean;
  tag?: DescribeInstancesRequestTag[];
  instanceType?: string;
  instanceTypeFamily?: string;
  keyPairName?: string;
  resourceGroupId?: string;
  hpcClusterId?: string;
  rdmaIpAddresses?: string;
  dryRun?: boolean;
  additionalAttributes?: string[];
  httpEndpoint?: string;
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      instanceNetworkType: 'InstanceNetworkType',
      securityGroupId: 'SecurityGroupId',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      innerIpAddresses: 'InnerIpAddresses',
      privateIpAddresses: 'PrivateIpAddresses',
      publicIpAddresses: 'PublicIpAddresses',
      eipAddresses: 'EipAddresses',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      instanceName: 'InstanceName',
      imageId: 'ImageId',
      status: 'Status',
      lockReason: 'LockReason',
      filter: 'Filter',
      deviceAvailable: 'DeviceAvailable',
      ioOptimized: 'IoOptimized',
      needSaleCycle: 'NeedSaleCycle',
      tag: 'Tag',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      keyPairName: 'KeyPairName',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      rdmaIpAddresses: 'RdmaIpAddresses',
      dryRun: 'DryRun',
      additionalAttributes: 'AdditionalAttributes',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      instanceNetworkType: 'string',
      securityGroupId: 'string',
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      innerIpAddresses: 'string',
      privateIpAddresses: 'string',
      publicIpAddresses: 'string',
      eipAddresses: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      instanceName: 'string',
      imageId: 'string',
      status: 'string',
      lockReason: 'string',
      filter: { 'type': 'array', 'itemType': DescribeInstancesRequestFilter },
      deviceAvailable: 'boolean',
      ioOptimized: 'boolean',
      needSaleCycle: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
      instanceType: 'string',
      instanceTypeFamily: 'string',
      keyPairName: 'string',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      rdmaIpAddresses: 'string',
      dryRun: 'boolean',
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      httpEndpoint: 'string',
      httpTokens: 'string',
      httpPutResponseHopLimit: 'number',
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
  instances: DescribeInstancesResponseInstances;
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
      instances: DescribeInstancesResponseInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataRequest extends $tea.Model {
  instanceId: string;
  startTime: string;
  endTime: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponse extends $tea.Model {
  requestId: string;
  monitorData: DescribeInstanceMonitorDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorData: DescribeInstanceMonitorDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeRequest extends $tea.Model {
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

export class DescribeInstanceAttributeResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  instanceName: string;
  imageId: string;
  regionId: string;
  zoneId: string;
  clusterId: string;
  instanceType: string;
  cpu: number;
  memory: number;
  hostName: string;
  status: string;
  internetChargeType: string;
  internetMaxBandwidthIn: number;
  internetMaxBandwidthOut: number;
  vlanId: string;
  serialNumber: string;
  creationTime: string;
  description: string;
  instanceNetworkType: string;
  ioOptimized: string;
  instanceChargeType: string;
  expiredTime: string;
  stoppedMode: string;
  creditSpecification: string;
  operationLocks: DescribeInstanceAttributeResponseOperationLocks;
  vpcAttributes: DescribeInstanceAttributeResponseVpcAttributes;
  eipAddress: DescribeInstanceAttributeResponseEipAddress;
  dedicatedHostAttribute: DescribeInstanceAttributeResponseDedicatedHostAttribute;
  securityGroupIds: DescribeInstanceAttributeResponseSecurityGroupIds;
  publicIpAddress: DescribeInstanceAttributeResponsePublicIpAddress;
  innerIpAddress: DescribeInstanceAttributeResponseInnerIpAddress;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      imageId: 'ImageId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      instanceType: 'InstanceType',
      cpu: 'Cpu',
      memory: 'Memory',
      hostName: 'HostName',
      status: 'Status',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      vlanId: 'VlanId',
      serialNumber: 'SerialNumber',
      creationTime: 'CreationTime',
      description: 'Description',
      instanceNetworkType: 'InstanceNetworkType',
      ioOptimized: 'IoOptimized',
      instanceChargeType: 'InstanceChargeType',
      expiredTime: 'ExpiredTime',
      stoppedMode: 'StoppedMode',
      creditSpecification: 'CreditSpecification',
      operationLocks: 'OperationLocks',
      vpcAttributes: 'VpcAttributes',
      eipAddress: 'EipAddress',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      securityGroupIds: 'SecurityGroupIds',
      publicIpAddress: 'PublicIpAddress',
      innerIpAddress: 'InnerIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      imageId: 'string',
      regionId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      instanceType: 'string',
      cpu: 'number',
      memory: 'number',
      hostName: 'string',
      status: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      vlanId: 'string',
      serialNumber: 'string',
      creationTime: 'string',
      description: 'string',
      instanceNetworkType: 'string',
      ioOptimized: 'string',
      instanceChargeType: 'string',
      expiredTime: 'string',
      stoppedMode: 'string',
      creditSpecification: 'string',
      operationLocks: DescribeInstanceAttributeResponseOperationLocks,
      vpcAttributes: DescribeInstanceAttributeResponseVpcAttributes,
      eipAddress: DescribeInstanceAttributeResponseEipAddress,
      dedicatedHostAttribute: DescribeInstanceAttributeResponseDedicatedHostAttribute,
      securityGroupIds: DescribeInstanceAttributeResponseSecurityGroupIds,
      publicIpAddress: DescribeInstanceAttributeResponsePublicIpAddress,
      innerIpAddress: DescribeInstanceAttributeResponseInnerIpAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  imageId: string;
  shareGroups: DescribeImageSharePermissionResponseShareGroups;
  accounts: DescribeImageSharePermissionResponseAccounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      imageId: 'ImageId',
      shareGroups: 'ShareGroups',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      imageId: 'string',
      shareGroups: DescribeImageSharePermissionResponseShareGroups,
      accounts: DescribeImageSharePermissionResponseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  regionId: string;
  status?: string;
  imageId?: string;
  showExpired?: boolean;
  snapshotId?: string;
  imageName?: string;
  imageFamily?: string;
  imageOwnerAlias?: string;
  instanceType?: string;
  isSupportIoOptimized?: boolean;
  isSupportCloudinit?: boolean;
  OSType?: string;
  architecture?: string;
  pageNumber?: number;
  pageSize?: number;
  usage?: string;
  tag?: DescribeImagesRequestTag[];
  dryRun?: boolean;
  actionType?: string;
  filter?: DescribeImagesRequestFilter[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      imageId: 'ImageId',
      showExpired: 'ShowExpired',
      snapshotId: 'SnapshotId',
      imageName: 'ImageName',
      imageFamily: 'ImageFamily',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      isSupportCloudinit: 'IsSupportCloudinit',
      OSType: 'OSType',
      architecture: 'Architecture',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      usage: 'Usage',
      tag: 'Tag',
      dryRun: 'DryRun',
      actionType: 'ActionType',
      filter: 'Filter',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      imageId: 'string',
      showExpired: 'boolean',
      snapshotId: 'string',
      imageName: 'string',
      imageFamily: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isSupportIoOptimized: 'boolean',
      isSupportCloudinit: 'boolean',
      OSType: 'string',
      architecture: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      usage: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImagesRequestTag },
      dryRun: 'boolean',
      actionType: 'string',
      filter: { 'type': 'array', 'itemType': DescribeImagesRequestFilter },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  images: DescribeImagesResponseImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      images: DescribeImagesResponseImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  startTime: string;
  endTime: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponse extends $tea.Model {
  requestId: string;
  eipMonitorDatas: DescribeEipMonitorDataResponseEipMonitorDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eipMonitorDatas: 'EipMonitorDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eipMonitorDatas: DescribeEipMonitorDataResponseEipMonitorDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $tea.Model {
  regionId: string;
  status?: string;
  eipAddress?: string;
  allocationId?: string;
  ISP?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeEipAddressesRequestFilter[];
  lockReason?: string;
  associatedInstanceType?: string;
  associatedInstanceId?: string;
  chargeType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      eipAddress: 'EipAddress',
      allocationId: 'AllocationId',
      ISP: 'ISP',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
      lockReason: 'LockReason',
      associatedInstanceType: 'AssociatedInstanceType',
      associatedInstanceId: 'AssociatedInstanceId',
      chargeType: 'ChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      eipAddress: 'string',
      allocationId: 'string',
      ISP: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      lockReason: 'string',
      associatedInstanceType: 'string',
      associatedInstanceId: 'string',
      chargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  eipAddresses: DescribeEipAddressesResponseEipAddresses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      eipAddresses: 'EipAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      eipAddresses: DescribeEipAddressesResponseEipAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksRequest extends $tea.Model {
  regionId: string;
  zoneId?: string;
  diskIds?: string;
  instanceId?: string;
  diskType?: string;
  category?: string;
  status?: string;
  snapshotId?: string;
  portable?: boolean;
  deleteWithInstance?: boolean;
  deleteAutoSnapshot?: boolean;
  pageNumber?: number;
  pageSize?: number;
  nextToken?: string;
  maxResults?: number;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  enableAutoSnapshot?: boolean;
  enableAutomatedSnapshotPolicy?: boolean;
  diskChargeType?: string;
  lockReason?: string;
  filter?: DescribeDisksRequestFilter[];
  tag?: DescribeDisksRequestTag[];
  resourceGroupId?: string;
  enableShared?: boolean;
  encrypted?: boolean;
  additionalAttributes?: string[];
  dryRun?: boolean;
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      diskIds: 'DiskIds',
      instanceId: 'InstanceId',
      diskType: 'DiskType',
      category: 'Category',
      status: 'Status',
      snapshotId: 'SnapshotId',
      portable: 'Portable',
      deleteWithInstance: 'DeleteWithInstance',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      enableAutomatedSnapshotPolicy: 'EnableAutomatedSnapshotPolicy',
      diskChargeType: 'DiskChargeType',
      lockReason: 'LockReason',
      filter: 'Filter',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
      enableShared: 'EnableShared',
      encrypted: 'Encrypted',
      additionalAttributes: 'AdditionalAttributes',
      dryRun: 'DryRun',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      diskIds: 'string',
      instanceId: 'string',
      diskType: 'string',
      category: 'string',
      status: 'string',
      snapshotId: 'string',
      portable: 'boolean',
      deleteWithInstance: 'boolean',
      deleteAutoSnapshot: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      nextToken: 'string',
      maxResults: 'number',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      enableAutoSnapshot: 'boolean',
      enableAutomatedSnapshotPolicy: 'boolean',
      diskChargeType: 'string',
      lockReason: 'string',
      filter: { 'type': 'array', 'itemType': DescribeDisksRequestFilter },
      tag: { 'type': 'array', 'itemType': DescribeDisksRequestTag },
      resourceGroupId: 'string',
      enableShared: 'boolean',
      encrypted: 'boolean',
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      KMSKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  nextToken: string;
  disks: DescribeDisksResponseDisks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nextToken: 'NextToken',
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      nextToken: 'string',
      disks: DescribeDisksResponseDisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataRequest extends $tea.Model {
  diskId: string;
  startTime: string;
  endTime: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  monitorData: DescribeDiskMonitorDataResponseMonitorData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      monitorData: DescribeDiskMonitorDataResponseMonitorData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  regionId: string;
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

export class DescribeClustersResponse extends $tea.Model {
  requestId: string;
  clusters: DescribeClustersResponseClusters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusters: DescribeClustersResponseClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchRequest extends $tea.Model {
  vSwitchId: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchResponse extends $tea.Model {
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

export class DeleteVpcRequest extends $tea.Model {
  vpcId: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcResponse extends $tea.Model {
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

export class DeleteSnapshotRequest extends $tea.Model {
  snapshotId: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $tea.Model {
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

export class DeleteSecurityGroupRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponse extends $tea.Model {
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

export class DeleteRouteEntryRequest extends $tea.Model {
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  regionId?: string;
  routeTableId: string;
  destinationCidrBlock: string;
  nextHopId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopList: 'NextHopList',
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopList: { 'type': 'array', 'itemType': DeleteRouteEntryRequestNextHopList },
      regionId: 'string',
      routeTableId: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryResponse extends $tea.Model {
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

export class DeleteInstanceRequest extends $tea.Model {
  instanceId: string;
  force?: boolean;
  terminateSubscription?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      force: 'Force',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      force: 'boolean',
      terminateSubscription: 'boolean',
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
  regionId: string;
  imageId: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      force: 'boolean',
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

export class DeleteDiskRequest extends $tea.Model {
  diskId: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskResponse extends $tea.Model {
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

export class CreateVSwitchRequest extends $tea.Model {
  zoneId: string;
  cidrBlock: string;
  vpcId: string;
  regionId?: string;
  vSwitchName?: string;
  description?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      cidrBlock: 'CidrBlock',
      vpcId: 'VpcId',
      regionId: 'RegionId',
      vSwitchName: 'VSwitchName',
      description: 'Description',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      cidrBlock: 'string',
      vpcId: 'string',
      regionId: 'string',
      vSwitchName: 'string',
      description: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponse extends $tea.Model {
  requestId: string;
  vSwitchId: string;
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

export class CreateVpcRequest extends $tea.Model {
  regionId: string;
  cidrBlock?: string;
  vpcName?: string;
  description?: string;
  clientToken?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      vpcName: 'VpcName',
      description: 'Description',
      clientToken: 'ClientToken',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      cidrBlock: 'string',
      vpcName: 'string',
      description: 'string',
      clientToken: 'string',
      userCidr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcResponse extends $tea.Model {
  requestId: string;
  vpcId: string;
  VRouterId: string;
  routeTableId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcId: 'VpcId',
      VRouterId: 'VRouterId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcId: 'string',
      VRouterId: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  diskId: string;
  snapshotName?: string;
  description?: string;
  retentionDays?: number;
  category?: string;
  clientToken?: string;
  tag?: CreateSnapshotRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      snapshotName: 'SnapshotName',
      description: 'Description',
      retentionDays: 'RetentionDays',
      category: 'Category',
      clientToken: 'ClientToken',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      snapshotName: 'string',
      description: 'string',
      retentionDays: 'number',
      category: 'string',
      clientToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateSnapshotRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  requestId: string;
  snapshotId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupRequest extends $tea.Model {
  regionId: string;
  description?: string;
  clientToken?: string;
  securityGroupName?: string;
  vpcId?: string;
  securityGroupType?: string;
  serviceManaged?: boolean;
  tag?: CreateSecurityGroupRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      description: 'Description',
      clientToken: 'ClientToken',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
      securityGroupType: 'SecurityGroupType',
      serviceManaged: 'ServiceManaged',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      description: 'string',
      clientToken: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
      securityGroupType: 'string',
      serviceManaged: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateSecurityGroupRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponse extends $tea.Model {
  requestId: string;
  securityGroupId: string;
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

export class CreateRouteEntryRequest extends $tea.Model {
  regionId?: string;
  routeTableId: string;
  destinationCidrBlock: string;
  nextHopId?: string;
  clientToken?: string;
  nextHopType?: string;
  nextHopList?: CreateRouteEntryRequestNextHopList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      clientToken: 'ClientToken',
      nextHopType: 'NextHopType',
      nextHopList: 'NextHopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      clientToken: 'string',
      nextHopType: 'string',
      nextHopList: { 'type': 'array', 'itemType': CreateRouteEntryRequestNextHopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryResponse extends $tea.Model {
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
  regionId: string;
  imageId?: string;
  imageFamily?: string;
  instanceType: string;
  securityGroupId?: string;
  instanceName?: string;
  internetChargeType?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  hostName?: string;
  password?: string;
  passwordInherit?: boolean;
  deploymentSetId?: string;
  deploymentSetGroupNo?: number;
  zoneId?: string;
  clusterId?: string;
  clientToken?: string;
  vlanId?: string;
  innerIpAddress?: string;
  systemDisk?: CreateInstanceRequestSystemDisk;
  dataDisk?: CreateInstanceRequestDataDisk[];
  arn?: CreateInstanceRequestArn[];
  nodeControllerId?: string;
  description?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  ioOptimized?: string;
  useAdditionalService?: boolean;
  instanceChargeType?: string;
  period?: number;
  periodUnit?: string;
  tag?: CreateInstanceRequestTag[];
  userData?: string;
  spotStrategy?: string;
  keyPairName?: string;
  spotPriceLimit?: number;
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  ramRoleName?: string;
  securityEnhancementStrategy?: string;
  resourceGroupId?: string;
  hpcClusterId?: string;
  dryRun?: boolean;
  dedicatedHostId?: string;
  creditSpecification?: string;
  deletionProtection?: boolean;
  affinity?: string;
  tenancy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  httpEndpoint?: string;
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
  privatePoolOptions?: CreateInstanceRequestPrivatePoolOptions;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      imageFamily: 'ImageFamily',
      instanceType: 'InstanceType',
      securityGroupId: 'SecurityGroupId',
      instanceName: 'InstanceName',
      internetChargeType: 'InternetChargeType',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      hostName: 'HostName',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      clientToken: 'ClientToken',
      vlanId: 'VlanId',
      innerIpAddress: 'InnerIpAddress',
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      arn: 'Arn',
      nodeControllerId: 'NodeControllerId',
      description: 'Description',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      ioOptimized: 'IoOptimized',
      useAdditionalService: 'UseAdditionalService',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      tag: 'Tag',
      userData: 'UserData',
      spotStrategy: 'SpotStrategy',
      keyPairName: 'KeyPairName',
      spotPriceLimit: 'SpotPriceLimit',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      ramRoleName: 'RamRoleName',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      dryRun: 'DryRun',
      dedicatedHostId: 'DedicatedHostId',
      creditSpecification: 'CreditSpecification',
      deletionProtection: 'DeletionProtection',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      privatePoolOptions: 'PrivatePoolOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      imageFamily: 'string',
      instanceType: 'string',
      securityGroupId: 'string',
      instanceName: 'string',
      internetChargeType: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      hostName: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      deploymentSetId: 'string',
      deploymentSetGroupNo: 'number',
      zoneId: 'string',
      clusterId: 'string',
      clientToken: 'string',
      vlanId: 'string',
      innerIpAddress: 'string',
      systemDisk: CreateInstanceRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': CreateInstanceRequestDataDisk },
      arn: { 'type': 'array', 'itemType': CreateInstanceRequestArn },
      nodeControllerId: 'string',
      description: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      ioOptimized: 'string',
      useAdditionalService: 'boolean',
      instanceChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      tag: { 'type': 'array', 'itemType': CreateInstanceRequestTag },
      userData: 'string',
      spotStrategy: 'string',
      keyPairName: 'string',
      spotPriceLimit: 'number',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      ramRoleName: 'string',
      securityEnhancementStrategy: 'string',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      dryRun: 'boolean',
      dedicatedHostId: 'string',
      creditSpecification: 'string',
      deletionProtection: 'boolean',
      affinity: 'string',
      tenancy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      httpEndpoint: 'string',
      httpTokens: 'string',
      httpPutResponseHopLimit: 'number',
      privatePoolOptions: CreateInstanceRequestPrivatePoolOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  requestId: string;
  instanceId: string;
  tradePrice: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  diskDeviceMapping?: CreateImageRequestDiskDeviceMapping[];
  regionId: string;
  snapshotId?: string;
  instanceId?: string;
  imageName?: string;
  imageFamily?: string;
  imageVersion?: string;
  description?: string;
  platform?: string;
  architecture?: string;
  clientToken?: string;
  tag?: CreateImageRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      instanceId: 'InstanceId',
      imageName: 'ImageName',
      imageFamily: 'ImageFamily',
      imageVersion: 'ImageVersion',
      description: 'Description',
      platform: 'Platform',
      architecture: 'Architecture',
      clientToken: 'ClientToken',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': CreateImageRequestDiskDeviceMapping },
      regionId: 'string',
      snapshotId: 'string',
      instanceId: 'string',
      imageName: 'string',
      imageFamily: 'string',
      imageVersion: 'string',
      description: 'string',
      platform: 'string',
      architecture: 'string',
      clientToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateImageRequestTag },
      resourceGroupId: 'string',
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

export class CreateDiskRequest extends $tea.Model {
  regionId: string;
  zoneId?: string;
  snapshotId?: string;
  diskName?: string;
  size?: number;
  diskCategory?: string;
  description?: string;
  encrypted?: boolean;
  clientToken?: string;
  instanceId?: string;
  tag?: CreateDiskRequestTag[];
  arn?: CreateDiskRequestArn[];
  resourceGroupId?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  advancedFeatures?: string;
  storageSetId?: string;
  encryptAlgorithm?: string;
  storageSetPartitionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      snapshotId: 'SnapshotId',
      diskName: 'DiskName',
      size: 'Size',
      diskCategory: 'DiskCategory',
      description: 'Description',
      encrypted: 'Encrypted',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      tag: 'Tag',
      arn: 'Arn',
      resourceGroupId: 'ResourceGroupId',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      advancedFeatures: 'AdvancedFeatures',
      storageSetId: 'StorageSetId',
      encryptAlgorithm: 'EncryptAlgorithm',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      snapshotId: 'string',
      diskName: 'string',
      size: 'number',
      diskCategory: 'string',
      description: 'string',
      encrypted: 'boolean',
      clientToken: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskRequestTag },
      arn: { 'type': 'array', 'itemType': CreateDiskRequestArn },
      resourceGroupId: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      advancedFeatures: 'string',
      storageSetId: 'string',
      encryptAlgorithm: 'string',
      storageSetPartitionNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskResponse extends $tea.Model {
  requestId: string;
  diskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      diskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageRequest extends $tea.Model {
  destinationImageName?: string;
  destinationDescription?: string;
  imageId: string;
  regionId: string;
  destinationRegionId?: string;
  tag?: CopyImageRequestTag[];
  encrypted?: boolean;
  KMSKeyId?: string;
  encryptAlgorithm?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationImageName: 'DestinationImageName',
      destinationDescription: 'DestinationDescription',
      imageId: 'ImageId',
      regionId: 'RegionId',
      destinationRegionId: 'DestinationRegionId',
      tag: 'Tag',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      encryptAlgorithm: 'EncryptAlgorithm',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationImageName: 'string',
      destinationDescription: 'string',
      imageId: 'string',
      regionId: 'string',
      destinationRegionId: 'string',
      tag: { 'type': 'array', 'itemType': CopyImageRequestTag },
      encrypted: 'boolean',
      KMSKeyId: 'string',
      encryptAlgorithm: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponse extends $tea.Model {
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

export class CancelCopyImageRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageResponse extends $tea.Model {
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

export class AuthorizeSecurityGroupEgressRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  ipProtocol: string;
  portRange: string;
  destGroupId?: string;
  destGroupOwnerId?: number;
  destGroupOwnerAccount?: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      destGroupId: 'DestGroupId',
      destGroupOwnerId: 'DestGroupOwnerId',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      destGroupId: 'string',
      destGroupOwnerId: 'number',
      destGroupOwnerAccount: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressResponse extends $tea.Model {
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

export class AuthorizeSecurityGroupRequest extends $tea.Model {
  regionId: string;
  securityGroupId: string;
  ipProtocol: string;
  portRange: string;
  sourceGroupId?: string;
  sourceGroupOwnerId?: number;
  sourceGroupOwnerAccount?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  sourcePortRange?: string;
  destCidrIp?: string;
  ipv6DestCidrIp?: string;
  policy?: string;
  priority?: string;
  nicType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      sourceGroupId: 'SourceGroupId',
      sourceGroupOwnerId: 'SourceGroupOwnerId',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      policy: 'Policy',
      priority: 'Priority',
      nicType: 'NicType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityGroupId: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      sourceGroupId: 'string',
      sourceGroupOwnerId: 'number',
      sourceGroupOwnerAccount: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      sourcePortRange: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      policy: 'string',
      priority: 'string',
      nicType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponse extends $tea.Model {
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

export class AttachDiskRequest extends $tea.Model {
  instanceId: string;
  diskId: string;
  device?: string;
  deleteWithInstance?: boolean;
  bootable?: boolean;
  password?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      diskId: 'DiskId',
      device: 'Device',
      deleteWithInstance: 'DeleteWithInstance',
      bootable: 'Bootable',
      password: 'Password',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      diskId: 'string',
      device: 'string',
      deleteWithInstance: 'boolean',
      bootable: 'boolean',
      password: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDiskResponse extends $tea.Model {
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

export class AssociateEipAddressRequest extends $tea.Model {
  regionId?: string;
  allocationId: string;
  instanceId: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allocationId: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressResponse extends $tea.Model {
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

export class AllocatePublicIpAddressRequest extends $tea.Model {
  instanceId: string;
  ipAddress?: string;
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipAddress: 'string',
      vlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicIpAddressResponse extends $tea.Model {
  requestId: string;
  ipAddress: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressRequest extends $tea.Model {
  regionId: string;
  bandwidth?: string;
  ISP?: string;
  internetChargeType?: string;
  activityId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidth: 'Bandwidth',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      activityId: 'ActivityId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidth: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      activityId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponse extends $tea.Model {
  requestId: string;
  allocationId: string;
  eipAddress: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      allocationId: 'string',
      eipAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityReservationRequestPrivatePoolOptions extends $tea.Model {
  id: string;
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

export class DescribeCapacityReservationsRequestPrivatePoolOptions extends $tea.Model {
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource extends $tea.Model {
  zoneId: string;
  instanceType: string;
  totalAmount: number;
  usedAmount: number;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResources extends $tea.Model {
  allocatedResource: DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource[];
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'AllocatedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItem extends $tea.Model {
  privatePoolOptionsId: string;
  privatePoolOptionsName: string;
  description: string;
  regionId: string;
  privatePoolOptionsMatchCriteria: string;
  status: string;
  startTime: string;
  endTime: string;
  endTimeType: string;
  instanceChargeType: string;
  platform: string;
  allocatedResources: DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResources;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsName: 'PrivatePoolOptionsName',
      description: 'Description',
      regionId: 'RegionId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
      endTimeType: 'EndTimeType',
      instanceChargeType: 'InstanceChargeType',
      platform: 'Platform',
      allocatedResources: 'AllocatedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptionsId: 'string',
      privatePoolOptionsName: 'string',
      description: 'string',
      regionId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
      status: 'string',
      startTime: 'string',
      endTime: 'string',
      endTimeType: 'string',
      instanceChargeType: 'string',
      platform: 'string',
      allocatedResources: DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItemAllocatedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationsResponseCapacityReservationSet extends $tea.Model {
  capacityReservationItem: DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItem[];
  static names(): { [key: string]: string } {
    return {
      capacityReservationItem: 'CapacityReservationItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationItem: { 'type': 'array', 'itemType': DescribeCapacityReservationsResponseCapacityReservationSetCapacityReservationItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityReservationInstancesRequestPrivatePoolOptions extends $tea.Model {
  id: string;
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

export class DescribeCapacityReservationInstancesResponseCapacityReservationItemInstanceIdSet extends $tea.Model {
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

export class DescribeCapacityReservationInstancesResponseCapacityReservationItem extends $tea.Model {
  instanceIdSet: DescribeCapacityReservationInstancesResponseCapacityReservationItemInstanceIdSet[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': DescribeCapacityReservationInstancesResponseCapacityReservationItemInstanceIdSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapacityReservationRequestPrivatePoolOptions extends $tea.Model {
  name?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartElasticityAssuranceRequestPrivatePoolOptions extends $tea.Model {
  id: string;
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

export class ModifyInstanceAttachmentAttributesRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttachmentAttributesResponseInstancesInstance extends $tea.Model {
  instanceId: string;
  privatePoolOptionsId: string;
  privatePoolOptionsMatchCriteria: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      privatePoolOptionsId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttachmentAttributesResponseInstances extends $tea.Model {
  instance: DescribeInstanceAttachmentAttributesResponseInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceAttachmentAttributesResponseInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesRequestPrivatePoolOptions extends $tea.Model {
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource extends $tea.Model {
  zoneId: string;
  instanceType: string;
  totalAmount: number;
  usedAmount: number;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResources extends $tea.Model {
  allocatedResource: DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource[];
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'AllocatedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItem extends $tea.Model {
  privatePoolOptionsId: string;
  privatePoolOptionsName: string;
  description: string;
  regionId: string;
  privatePoolOptionsMatchCriteria: string;
  usedAssuranceTimes: number;
  totalAssuranceTimes: string;
  status: string;
  startTime: string;
  endTime: string;
  latestStartTime: string;
  allocatedResources: DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResources;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsName: 'PrivatePoolOptionsName',
      description: 'Description',
      regionId: 'RegionId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
      usedAssuranceTimes: 'UsedAssuranceTimes',
      totalAssuranceTimes: 'TotalAssuranceTimes',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
      latestStartTime: 'LatestStartTime',
      allocatedResources: 'AllocatedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptionsId: 'string',
      privatePoolOptionsName: 'string',
      description: 'string',
      regionId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
      usedAssuranceTimes: 'number',
      totalAssuranceTimes: 'string',
      status: 'string',
      startTime: 'string',
      endTime: 'string',
      latestStartTime: 'string',
      allocatedResources: DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItemAllocatedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesResponseElasticityAssuranceSet extends $tea.Model {
  elasticityAssuranceItem: DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItem[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceItem: 'ElasticityAssuranceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceItem: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseElasticityAssuranceSetElasticityAssuranceItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssuranceInstancesRequestPrivatePoolOptions extends $tea.Model {
  id: string;
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

export class DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItemInstanceIdSet extends $tea.Model {
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

export class DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItem extends $tea.Model {
  instanceIdSet: DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItemInstanceIdSet[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': DescribeElasticityAssuranceInstancesResponseElasticityAssuranceItemInstanceIdSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceRequestPrivatePoolOptions extends $tea.Model {
  name?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseInvocationsInvocationInvokeInstancesInvokeInstance extends $tea.Model {
  instanceId: string;
  invocationStatus: string;
  creationTime: string;
  startTime: string;
  finishTime: string;
  updateTime: string;
  errorCode: string;
  errorInfo: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      creationTime: 'CreationTime',
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invocationStatus: 'string',
      creationTime: 'string',
      startTime: 'string',
      finishTime: 'string',
      updateTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseInvocationsInvocationInvokeInstances extends $tea.Model {
  invokeInstance: DescribeSendFileResultsResponseInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseInvocationsInvocationInvokeInstancesInvokeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseInvocationsInvocation extends $tea.Model {
  invokeId: string;
  name: string;
  description: string;
  targetDir: string;
  contentType: string;
  content: string;
  fileOwner: string;
  fileGroup: string;
  fileMode: string;
  overwrite: string;
  vmCount: number;
  creationTime: string;
  invocationStatus: string;
  invokeInstances: DescribeSendFileResultsResponseInvocationsInvocationInvokeInstances;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      name: 'Name',
      description: 'Description',
      targetDir: 'TargetDir',
      contentType: 'ContentType',
      content: 'Content',
      fileOwner: 'FileOwner',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      overwrite: 'Overwrite',
      vmCount: 'VmCount',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeInstances: 'InvokeInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      name: 'string',
      description: 'string',
      targetDir: 'string',
      contentType: 'string',
      content: 'string',
      fileOwner: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      overwrite: 'string',
      vmCount: 'number',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeInstances: DescribeSendFileResultsResponseInvocationsInvocationInvokeInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSendFileResultsResponseInvocations extends $tea.Model {
  invocation: DescribeSendFileResultsResponseInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseInvocationsInvocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersRequestTag extends $tea.Model {
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

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTags extends $tea.Model {
  tag: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity extends $tea.Model {
  totalDisk: number;
  availableDisk: number;
  dataDiskCategory: string;
  static names(): { [key: string]: string } {
    return {
      totalDisk: 'TotalDisk',
      availableDisk: 'AvailableDisk',
      dataDiskCategory: 'DataDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDisk: 'number',
      availableDisk: 'number',
      dataDiskCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities extends $tea.Model {
  localStorageCapacity: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity[];
  static names(): { [key: string]: string } {
    return {
      localStorageCapacity: 'LocalStorageCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localStorageCapacity: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity extends $tea.Model {
  totalVcpus: number;
  availableVcpus: number;
  totalMemory: number;
  availableMemory: number;
  localStorageCapacities: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities;
  static names(): { [key: string]: string } {
    return {
      totalVcpus: 'TotalVcpus',
      availableVcpus: 'AvailableVcpus',
      totalMemory: 'TotalMemory',
      availableMemory: 'AvailableMemory',
      localStorageCapacities: 'LocalStorageCapacities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalVcpus: 'number',
      availableVcpus: 'number',
      totalMemory: 'number',
      availableMemory: 'number',
      localStorageCapacities: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostIds extends $tea.Model {
  dedicatedHostId: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostCluster extends $tea.Model {
  dedicatedHostClusterId: string;
  regionId: string;
  zoneId: string;
  dedicatedHostClusterName: string;
  description: string;
  resourceGroupId: string;
  tags: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTags;
  dedicatedHostClusterCapacity: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity;
  dedicatedHostIds: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostIds;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      dedicatedHostClusterCapacity: 'DedicatedHostClusterCapacity',
      dedicatedHostIds: 'DedicatedHostIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      regionId: 'string',
      zoneId: 'string',
      dedicatedHostClusterName: 'string',
      description: 'string',
      resourceGroupId: 'string',
      tags: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterTags,
      dedicatedHostClusterCapacity: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity,
      dedicatedHostIds: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostClusterDedicatedHostIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostClustersResponseDedicatedHostClusters extends $tea.Model {
  dedicatedHostCluster: DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostCluster[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostCluster: 'DedicatedHostCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostCluster: { 'type': 'array', 'itemType': DescribeDedicatedHostClustersResponseDedicatedHostClustersDedicatedHostCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostClusterRequestTag extends $tea.Model {
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

export class DescribeNetworkInterfaceAttributeRequestTag extends $tea.Model {
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

export class DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSetAssociatedPublicIp extends $tea.Model {
  publicIpAddress: string;
  allocationId: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSet extends $tea.Model {
  privateIpAddress: string;
  primary: boolean;
  associatedPublicIp: DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSetAssociatedPublicIp;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      primary: 'Primary',
      associatedPublicIp: 'AssociatedPublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'string',
      primary: 'boolean',
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSetAssociatedPublicIp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponsePrivateIpSets extends $tea.Model {
  privateIpSet: DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponsePrivateIpSetsPrivateIpSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseIpv6SetsIpv6Set extends $tea.Model {
  ipv6Address: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseIpv6Sets extends $tea.Model {
  ipv6Set: DescribeNetworkInterfaceAttributeResponseIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseIpv6SetsIpv6Set },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseTags extends $tea.Model {
  tag: DescribeNetworkInterfaceAttributeResponseTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseAssociatedPublicIp extends $tea.Model {
  publicIpAddress: string;
  allocationId: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseAttachmentMemberNetworkInterfaceIds extends $tea.Model {
  memberNetworkInterfaceId: string[];
  static names(): { [key: string]: string } {
    return {
      memberNetworkInterfaceId: 'MemberNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberNetworkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseAttachment extends $tea.Model {
  instanceId: string;
  trunkNetworkInterfaceId: string;
  deviceIndex: number;
  memberNetworkInterfaceIds: DescribeNetworkInterfaceAttributeResponseAttachmentMemberNetworkInterfaceIds;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
      deviceIndex: 'DeviceIndex',
      memberNetworkInterfaceIds: 'MemberNetworkInterfaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trunkNetworkInterfaceId: 'string',
      deviceIndex: 'number',
      memberNetworkInterfaceIds: DescribeNetworkInterfaceAttributeResponseAttachmentMemberNetworkInterfaceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfaceAttributeResponseSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
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

export class CopySnapshotRequestTag extends $tea.Model {
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

export class ModifyDedicatedHostsChargeTypeResponseFeeOfInstancesFeeOfInstance extends $tea.Model {
  instanceId: string;
  fee: string;
  currency: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fee: 'Fee',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fee: 'string',
      currency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostsChargeTypeResponseFeeOfInstances extends $tea.Model {
  feeOfInstance: ModifyDedicatedHostsChargeTypeResponseFeeOfInstancesFeeOfInstance[];
  static names(): { [key: string]: string } {
    return {
      feeOfInstance: 'FeeOfInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstance: { 'type': 'array', 'itemType': ModifyDedicatedHostsChargeTypeResponseFeeOfInstancesFeeOfInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponseImageDiskDeviceMappingsDiskDeviceMapping extends $tea.Model {
  snapshotId: string;
  size: string;
  device: string;
  type: string;
  format: string;
  importOSSBucket: string;
  importOSSObject: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      type: 'Type',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      size: 'string',
      device: 'string',
      type: 'string',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponseImageDiskDeviceMappings extends $tea.Model {
  diskDeviceMapping: DescribeImageFromFamilyResponseImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImageFromFamilyResponseImageDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponseImageTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponseImageTags extends $tea.Model {
  tag: DescribeImageFromFamilyResponseImageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImageFromFamilyResponseImageTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFromFamilyResponseImage extends $tea.Model {
  progress: string;
  imageId: string;
  imageName: string;
  imageFamily: string;
  imageVersion: string;
  description: string;
  size: number;
  imageOwnerAlias: string;
  isSupportIoOptimized: boolean;
  isSupportCloudinit: boolean;
  OSName: string;
  architecture: string;
  status: string;
  productCode: string;
  isSubscribed: boolean;
  creationTime: string;
  isSelfShared: string;
  OSType: string;
  platform: string;
  usage: string;
  isCopied: boolean;
  diskDeviceMappings: DescribeImageFromFamilyResponseImageDiskDeviceMappings;
  tags: DescribeImageFromFamilyResponseImageTags;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageFamily: 'ImageFamily',
      imageVersion: 'ImageVersion',
      description: 'Description',
      size: 'Size',
      imageOwnerAlias: 'ImageOwnerAlias',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      isSupportCloudinit: 'IsSupportCloudinit',
      OSName: 'OSName',
      architecture: 'Architecture',
      status: 'Status',
      productCode: 'ProductCode',
      isSubscribed: 'IsSubscribed',
      creationTime: 'CreationTime',
      isSelfShared: 'IsSelfShared',
      OSType: 'OSType',
      platform: 'Platform',
      usage: 'Usage',
      isCopied: 'IsCopied',
      diskDeviceMappings: 'DiskDeviceMappings',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      imageId: 'string',
      imageName: 'string',
      imageFamily: 'string',
      imageVersion: 'string',
      description: 'string',
      size: 'number',
      imageOwnerAlias: 'string',
      isSupportIoOptimized: 'boolean',
      isSupportCloudinit: 'boolean',
      OSName: 'string',
      architecture: 'string',
      status: 'string',
      productCode: 'string',
      isSubscribed: 'boolean',
      creationTime: 'string',
      isSelfShared: 'string',
      OSType: 'string',
      platform: 'string',
      usage: 'string',
      isCopied: 'boolean',
      diskDeviceMappings: DescribeImageFromFamilyResponseImageDiskDeviceMappings,
      tags: DescribeImageFromFamilyResponseImageTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponseInstanceResponsesInstanceResponse extends $tea.Model {
  instanceId: string;
  previousStatus: string;
  currentStatus: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      previousStatus: 'PreviousStatus',
      currentStatus: 'CurrentStatus',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      previousStatus: 'string',
      currentStatus: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponseInstanceResponses extends $tea.Model {
  instanceResponse: StopInstancesResponseInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': StopInstancesResponseInstanceResponsesInstanceResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponseInstanceResponsesInstanceResponse extends $tea.Model {
  instanceId: string;
  previousStatus: string;
  currentStatus: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      previousStatus: 'PreviousStatus',
      currentStatus: 'CurrentStatus',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      previousStatus: 'string',
      currentStatus: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponseInstanceResponses extends $tea.Model {
  instanceResponse: StartInstancesResponseInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': StartInstancesResponseInstanceResponsesInstanceResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponseInstanceResponsesInstanceResponse extends $tea.Model {
  instanceId: string;
  previousStatus: string;
  currentStatus: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      previousStatus: 'PreviousStatus',
      currentStatus: 'CurrentStatus',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      previousStatus: 'string',
      currentStatus: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponseInstanceResponses extends $tea.Model {
  instanceResponse: RebootInstancesResponseInstanceResponsesInstanceResponse[];
  static names(): { [key: string]: string } {
    return {
      instanceResponse: 'InstanceResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResponse: { 'type': 'array', 'itemType': RebootInstancesResponseInstanceResponsesInstanceResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintenanceAttributesRequestMaintenanceWindow extends $tea.Model {
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow extends $tea.Model {
  startTime: string;
  endTime: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindows extends $tea.Model {
  maintenanceWindow: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow[];
  static names(): { [key: string]: string } {
    return {
      maintenanceWindow: 'MaintenanceWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceWindow: { 'type': 'array', 'itemType': DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues extends $tea.Model {
  supportedValue: string[];
  static names(): { [key: string]: string } {
    return {
      supportedValue: 'SupportedValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenance extends $tea.Model {
  value: string;
  defaultValue: string;
  supportedValues: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      defaultValue: 'DefaultValue',
      supportedValues: 'SupportedValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      defaultValue: 'string',
      supportedValues: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenanceSupportedValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttribute extends $tea.Model {
  instanceId: string;
  maintenanceWindows: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindows;
  actionOnMaintenance: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenance;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maintenanceWindows: 'MaintenanceWindows',
      actionOnMaintenance: 'ActionOnMaintenance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maintenanceWindows: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeMaintenanceWindows,
      actionOnMaintenance: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttributeActionOnMaintenance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributes extends $tea.Model {
  maintenanceAttribute: DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      maintenanceAttribute: 'MaintenanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceAttribute: { 'type': 'array', 'itemType': DescribeInstanceMaintenanceAttributesResponseMaintenanceAttributesMaintenanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseStorageCapacityUnitResponseStorageCapacityUnitIds extends $tea.Model {
  storageCapacityUnitId: string[];
  static names(): { [key: string]: string } {
    return {
      storageCapacityUnitId: 'StorageCapacityUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacityUnitId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageCapacityUnitsResponseStorageCapacityUnitsStorageCapacityUnit extends $tea.Model {
  regionId: string;
  storageCapacityUnitId: string;
  name: string;
  capacity: number;
  status: string;
  creationTime: string;
  expiredTime: string;
  startTime: string;
  description: string;
  allocationStatus: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      name: 'Name',
      capacity: 'Capacity',
      status: 'Status',
      creationTime: 'CreationTime',
      expiredTime: 'ExpiredTime',
      startTime: 'StartTime',
      description: 'Description',
      allocationStatus: 'AllocationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      storageCapacityUnitId: 'string',
      name: 'string',
      capacity: 'number',
      status: 'string',
      creationTime: 'string',
      expiredTime: 'string',
      startTime: 'string',
      description: 'string',
      allocationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageCapacityUnitsResponseStorageCapacityUnits extends $tea.Model {
  storageCapacityUnit: DescribeStorageCapacityUnitsResponseStorageCapacityUnitsStorageCapacityUnit[];
  static names(): { [key: string]: string } {
    return {
      storageCapacityUnit: 'StorageCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacityUnit: { 'type': 'array', 'itemType': DescribeStorageCapacityUnitsResponseStorageCapacityUnitsStorageCapacityUnit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseStorageSetsStorageSet extends $tea.Model {
  storageSetId: string;
  creationTime: string;
  storageSetName: string;
  description: string;
  storageSetPartitionNumber: number;
  regionId: string;
  zoneId: string;
  static names(): { [key: string]: string } {
    return {
      storageSetId: 'StorageSetId',
      creationTime: 'CreationTime',
      storageSetName: 'StorageSetName',
      description: 'Description',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSetId: 'string',
      creationTime: 'string',
      storageSetName: 'string',
      description: 'string',
      storageSetPartitionNumber: 'number',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetsResponseStorageSets extends $tea.Model {
  storageSet: DescribeStorageSetsResponseStorageSetsStorageSet[];
  static names(): { [key: string]: string } {
    return {
      storageSet: 'StorageSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSet: { 'type': 'array', 'itemType': DescribeStorageSetsResponseStorageSetsStorageSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetDetailsResponseDisksDisk extends $tea.Model {
  diskId: string;
  diskName: string;
  category: string;
  storageSetId: string;
  creationTime: string;
  storageSetPartitionNumber: number;
  regionId: string;
  zoneId: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskName: 'DiskName',
      category: 'Category',
      storageSetId: 'StorageSetId',
      creationTime: 'CreationTime',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskName: 'string',
      category: 'string',
      storageSetId: 'string',
      creationTime: 'string',
      storageSetPartitionNumber: 'number',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageSetDetailsResponseDisks extends $tea.Model {
  disk: DescribeStorageSetDetailsResponseDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeStorageSetDetailsResponseDisksDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig extends $tea.Model {
  instanceType: string;
  maxPrice: number;
  vSwitchId: string;
  weightedCapacity: number;
  priority: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      vSwitchId: 'string',
      weightedCapacity: 'number',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs extends $tea.Model {
  launchTemplateConfig: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateConfig: 'LaunchTemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateConfig: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupSpotOptions extends $tea.Model {
  allocationStrategy: string;
  instanceInterruptionBehavior: string;
  instancePoolsToUseCount: number;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      instanceInterruptionBehavior: 'InstanceInterruptionBehavior',
      instancePoolsToUseCount: 'InstancePoolsToUseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      instanceInterruptionBehavior: 'string',
      instancePoolsToUseCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions extends $tea.Model {
  allocationStrategy: string;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification extends $tea.Model {
  totalTargetCapacity: number;
  payAsYouGoTargetCapacity: number;
  spotTargetCapacity: number;
  defaultTargetCapacityType: string;
  static names(): { [key: string]: string } {
    return {
      totalTargetCapacity: 'TotalTargetCapacity',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      spotTargetCapacity: 'SpotTargetCapacity',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTargetCapacity: 'number',
      payAsYouGoTargetCapacity: 'number',
      spotTargetCapacity: 'number',
      defaultTargetCapacityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroup extends $tea.Model {
  autoProvisioningGroupId: string;
  autoProvisioningGroupName: string;
  autoProvisioningGroupType: string;
  status: string;
  state: string;
  regionId: string;
  validFrom: string;
  validUntil: string;
  excessCapacityTerminationPolicy: string;
  maxSpotPrice: number;
  launchTemplateId: string;
  launchTemplateVersion: string;
  terminateInstances: boolean;
  terminateInstancesWithExpiration: boolean;
  creationTime: string;
  launchTemplateConfigs: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs;
  spotOptions: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupSpotOptions;
  payAsYouGoOptions: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions;
  targetCapacitySpecification: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      status: 'Status',
      state: 'State',
      regionId: 'RegionId',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      maxSpotPrice: 'MaxSpotPrice',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      terminateInstances: 'TerminateInstances',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      creationTime: 'CreationTime',
      launchTemplateConfigs: 'LaunchTemplateConfigs',
      spotOptions: 'SpotOptions',
      payAsYouGoOptions: 'PayAsYouGoOptions',
      targetCapacitySpecification: 'TargetCapacitySpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      status: 'string',
      state: 'string',
      regionId: 'string',
      validFrom: 'string',
      validUntil: 'string',
      excessCapacityTerminationPolicy: 'string',
      maxSpotPrice: 'number',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      terminateInstances: 'boolean',
      terminateInstancesWithExpiration: 'boolean',
      creationTime: 'string',
      launchTemplateConfigs: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs,
      spotOptions: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupSpotOptions,
      payAsYouGoOptions: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions,
      targetCapacitySpecification: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseAutoProvisioningGroups extends $tea.Model {
  autoProvisioningGroup: DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroup[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroup: 'AutoProvisioningGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroup: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseAutoProvisioningGroupsAutoProvisioningGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupInstancesResponseInstancesInstance extends $tea.Model {
  instanceId: string;
  status: string;
  regionId: string;
  zoneId: string;
  CPU: number;
  memory: number;
  instanceType: string;
  isSpot: boolean;
  ioOptimized: boolean;
  networkType: string;
  osType: string;
  creationTime: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      CPU: 'CPU',
      memory: 'Memory',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      ioOptimized: 'IoOptimized',
      networkType: 'NetworkType',
      osType: 'OsType',
      creationTime: 'CreationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
      regionId: 'string',
      zoneId: 'string',
      CPU: 'number',
      memory: 'number',
      instanceType: 'string',
      isSpot: 'boolean',
      ioOptimized: 'boolean',
      networkType: 'string',
      osType: 'string',
      creationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupInstancesResponseInstances extends $tea.Model {
  instance: DescribeAutoProvisioningGroupInstancesResponseInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupInstancesResponseInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoProvisioningGroupRequestLaunchTemplateConfig extends $tea.Model {
  instanceType?: string;
  maxPrice?: number;
  vSwitchId?: string;
  weightedCapacity?: number;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      vSwitchId: 'string',
      weightedCapacity: 'number',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail extends $tea.Model {
  detail: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails extends $tea.Model {
  activityDetail: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail[];
  static names(): { [key: string]: string } {
    return {
      activityDetail: 'ActivityDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDetail: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory extends $tea.Model {
  taskId: string;
  status: string;
  lastEventTime: string;
  startTime: string;
  activityDetails: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      status: 'Status',
      lastEventTime: 'LastEventTime',
      startTime: 'StartTime',
      activityDetails: 'ActivityDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      status: 'string',
      lastEventTime: 'string',
      startTime: 'string',
      activityDetails: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistories extends $tea.Model {
  autoProvisioningGroupHistory: DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistory: 'AutoProvisioningGroupHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistory: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseReservedInstancesOfferingRequestTag extends $tea.Model {
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

export class PurchaseReservedInstancesOfferingResponseReservedInstanceIdSets extends $tea.Model {
  reservedInstanceId: string[];
  static names(): { [key: string]: string } {
    return {
      reservedInstanceId: 'ReservedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReservedInstancesRequestConfiguration extends $tea.Model {
  zoneId?: string;
  reservedInstanceName?: string;
  instanceType?: string;
  scope?: string;
  instanceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      reservedInstanceName: 'ReservedInstanceName',
      instanceType: 'InstanceType',
      scope: 'Scope',
      instanceAmount: 'InstanceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      reservedInstanceName: 'string',
      instanceType: 'string',
      scope: 'string',
      instanceAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReservedInstancesResponseReservedInstanceIdSets extends $tea.Model {
  reservedInstanceId: string[];
  static names(): { [key: string]: string } {
    return {
      reservedInstanceId: 'ReservedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesRequestTag extends $tea.Model {
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

export class DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocksOperationLock extends $tea.Model {
  lockReason: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocks extends $tea.Model {
  operationLock: DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocksOperationLock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseReservedInstancesReservedInstanceTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseReservedInstancesReservedInstanceTags extends $tea.Model {
  tag: DescribeReservedInstancesResponseReservedInstancesReservedInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseReservedInstancesReservedInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseReservedInstancesReservedInstance extends $tea.Model {
  reservedInstanceId: string;
  regionId: string;
  zoneId: string;
  reservedInstanceName: string;
  description: string;
  instanceType: string;
  scope: string;
  offeringType: string;
  platform: string;
  instanceAmount: number;
  status: string;
  creationTime: string;
  expiredTime: string;
  startTime: string;
  resourceGroupId: string;
  allocationStatus: string;
  operationLocks: DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocks;
  tags: DescribeReservedInstancesResponseReservedInstancesReservedInstanceTags;
  static names(): { [key: string]: string } {
    return {
      reservedInstanceId: 'ReservedInstanceId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      reservedInstanceName: 'ReservedInstanceName',
      description: 'Description',
      instanceType: 'InstanceType',
      scope: 'Scope',
      offeringType: 'OfferingType',
      platform: 'Platform',
      instanceAmount: 'InstanceAmount',
      status: 'Status',
      creationTime: 'CreationTime',
      expiredTime: 'ExpiredTime',
      startTime: 'StartTime',
      resourceGroupId: 'ResourceGroupId',
      allocationStatus: 'AllocationStatus',
      operationLocks: 'OperationLocks',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceId: 'string',
      regionId: 'string',
      zoneId: 'string',
      reservedInstanceName: 'string',
      description: 'string',
      instanceType: 'string',
      scope: 'string',
      offeringType: 'string',
      platform: 'string',
      instanceAmount: 'number',
      status: 'string',
      creationTime: 'string',
      expiredTime: 'string',
      startTime: 'string',
      resourceGroupId: 'string',
      allocationStatus: 'string',
      operationLocks: DescribeReservedInstancesResponseReservedInstancesReservedInstanceOperationLocks,
      tags: DescribeReservedInstancesResponseReservedInstancesReservedInstanceTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReservedInstancesResponseReservedInstances extends $tea.Model {
  reservedInstance: DescribeReservedInstancesResponseReservedInstancesReservedInstance[];
  static names(): { [key: string]: string } {
    return {
      reservedInstance: 'ReservedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstance: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseReservedInstancesReservedInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsRequestTag extends $tea.Model {
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

export class DescribeDemandsResponseDemandsDemandSupplyInfosSupplyInfo extends $tea.Model {
  amount: number;
  supplyStatus: string;
  supplyStartTime: string;
  supplyEndTime: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      supplyStatus: 'SupplyStatus',
      supplyStartTime: 'SupplyStartTime',
      supplyEndTime: 'SupplyEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      supplyStatus: 'string',
      supplyStartTime: 'string',
      supplyEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsResponseDemandsDemandSupplyInfos extends $tea.Model {
  supplyInfo: DescribeDemandsResponseDemandsDemandSupplyInfosSupplyInfo[];
  static names(): { [key: string]: string } {
    return {
      supplyInfo: 'SupplyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplyInfo: { 'type': 'array', 'itemType': DescribeDemandsResponseDemandsDemandSupplyInfosSupplyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsResponseDemandsDemand extends $tea.Model {
  zoneId: string;
  demandTime: string;
  instanceTypeFamily: string;
  demandId: string;
  demandName: string;
  comment: string;
  demandDescription: string;
  instanceType: string;
  instanceChargeType: string;
  period: number;
  periodUnit: string;
  startTime: string;
  endTime: string;
  demandStatus: string;
  totalAmount: number;
  availableAmount: number;
  usedAmount: number;
  deliveringAmount: number;
  supplyInfos: DescribeDemandsResponseDemandsDemandSupplyInfos;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      demandTime: 'DemandTime',
      instanceTypeFamily: 'InstanceTypeFamily',
      demandId: 'DemandId',
      demandName: 'DemandName',
      comment: 'Comment',
      demandDescription: 'DemandDescription',
      instanceType: 'InstanceType',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      startTime: 'StartTime',
      endTime: 'EndTime',
      demandStatus: 'DemandStatus',
      totalAmount: 'TotalAmount',
      availableAmount: 'AvailableAmount',
      usedAmount: 'UsedAmount',
      deliveringAmount: 'DeliveringAmount',
      supplyInfos: 'SupplyInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      demandTime: 'string',
      instanceTypeFamily: 'string',
      demandId: 'string',
      demandName: 'string',
      comment: 'string',
      demandDescription: 'string',
      instanceType: 'string',
      instanceChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      startTime: 'string',
      endTime: 'string',
      demandStatus: 'string',
      totalAmount: 'number',
      availableAmount: 'number',
      usedAmount: 'number',
      deliveringAmount: 'number',
      supplyInfos: DescribeDemandsResponseDemandsDemandSupplyInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDemandsResponseDemands extends $tea.Model {
  demand: DescribeDemandsResponseDemandsDemand[];
  static names(): { [key: string]: string } {
    return {
      demand: 'Demand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demand: { 'type': 'array', 'itemType': DescribeDemandsResponseDemandsDemand },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesRequestTagFilter extends $tea.Model {
  tagKey: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseTagResourcesTagResource extends $tea.Model {
  resourceType: string;
  resourceId: string;
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseTagResources extends $tea.Model {
  tagResource: ListTagResourcesResponseTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseTopologysTopology extends $tea.Model {
  instanceId: string;
  hostId: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseTopologys extends $tea.Model {
  topology: DescribeInstanceTopologyResponseTopologysTopology[];
  static names(): { [key: string]: string } {
    return {
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topology: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseTopologysTopology },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeRequestNetworkAttributes extends $tea.Model {
  slbUdpTimeout?: number;
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsRequestTag extends $tea.Model {
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

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstancesInstance extends $tea.Model {
  instanceId: string;
  instanceType: string;
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

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstances extends $tea.Model {
  instance: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocksOperationLock extends $tea.Model {
  lockReason: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocks extends $tea.Model {
  operationLock: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocksOperationLock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTags extends $tea.Model {
  tag: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostCapacity extends $tea.Model {
  totalVcpus: number;
  availableVcpus: number;
  totalVgpus: number;
  availableVgpus: number;
  totalMemory: number;
  availableMemory: number;
  totalLocalStorage: number;
  availableLocalStorage: number;
  localStorageCategory: string;
  static names(): { [key: string]: string } {
    return {
      totalVcpus: 'TotalVcpus',
      availableVcpus: 'AvailableVcpus',
      totalVgpus: 'TotalVgpus',
      availableVgpus: 'AvailableVgpus',
      totalMemory: 'TotalMemory',
      availableMemory: 'AvailableMemory',
      totalLocalStorage: 'TotalLocalStorage',
      availableLocalStorage: 'AvailableLocalStorage',
      localStorageCategory: 'LocalStorageCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalVcpus: 'number',
      availableVcpus: 'number',
      totalVgpus: 'number',
      availableVgpus: 'number',
      totalMemory: 'number',
      availableMemory: 'number',
      totalLocalStorage: 'number',
      availableLocalStorage: 'number',
      localStorageCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostNetworkAttributes extends $tea.Model {
  slbUdpTimeout: number;
  udpTimeout: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies extends $tea.Model {
  supportedInstanceTypeFamily: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies extends $tea.Model {
  supportedCustomInstanceTypeFamily: string[];
  static names(): { [key: string]: string } {
    return {
      supportedCustomInstanceTypeFamily: 'SupportedCustomInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCustomInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypesList extends $tea.Model {
  supportedInstanceTypesList: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypesList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHostsDedicatedHost extends $tea.Model {
  dedicatedHostId: string;
  autoPlacement: string;
  regionId: string;
  zoneId: string;
  dedicatedHostName: string;
  machineId: string;
  description: string;
  dedicatedHostType: string;
  sockets: number;
  cores: number;
  physicalGpus: number;
  GPUSpec: string;
  actionOnMaintenance: string;
  status: string;
  creationTime: string;
  chargeType: string;
  saleCycle: string;
  expiredTime: string;
  autoReleaseTime: string;
  resourceGroupId: string;
  dedicatedHostClusterId: string;
  cpuOverCommitRatio: number;
  instances: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstances;
  operationLocks: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocks;
  tags: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTags;
  capacity: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostCapacity;
  networkAttributes: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostNetworkAttributes;
  supportedInstanceTypeFamilies: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies;
  supportedCustomInstanceTypeFamilies: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies;
  supportedInstanceTypesList: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypesList;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      autoPlacement: 'AutoPlacement',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      dedicatedHostName: 'DedicatedHostName',
      machineId: 'MachineId',
      description: 'Description',
      dedicatedHostType: 'DedicatedHostType',
      sockets: 'Sockets',
      cores: 'Cores',
      physicalGpus: 'PhysicalGpus',
      GPUSpec: 'GPUSpec',
      actionOnMaintenance: 'ActionOnMaintenance',
      status: 'Status',
      creationTime: 'CreationTime',
      chargeType: 'ChargeType',
      saleCycle: 'SaleCycle',
      expiredTime: 'ExpiredTime',
      autoReleaseTime: 'AutoReleaseTime',
      resourceGroupId: 'ResourceGroupId',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      instances: 'Instances',
      operationLocks: 'OperationLocks',
      tags: 'Tags',
      capacity: 'Capacity',
      networkAttributes: 'NetworkAttributes',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedCustomInstanceTypeFamilies: 'SupportedCustomInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      autoPlacement: 'string',
      regionId: 'string',
      zoneId: 'string',
      dedicatedHostName: 'string',
      machineId: 'string',
      description: 'string',
      dedicatedHostType: 'string',
      sockets: 'number',
      cores: 'number',
      physicalGpus: 'number',
      GPUSpec: 'string',
      actionOnMaintenance: 'string',
      status: 'string',
      creationTime: 'string',
      chargeType: 'string',
      saleCycle: 'string',
      expiredTime: 'string',
      autoReleaseTime: 'string',
      resourceGroupId: 'string',
      dedicatedHostClusterId: 'string',
      cpuOverCommitRatio: 'number',
      instances: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostInstances,
      operationLocks: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostOperationLocks,
      tags: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostTags,
      capacity: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostCapacity,
      networkAttributes: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostNetworkAttributes,
      supportedInstanceTypeFamilies: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies,
      supportedCustomInstanceTypeFamilies: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHostSupportedInstanceTypesList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseDedicatedHosts extends $tea.Model {
  dedicatedHost: DescribeDedicatedHostsResponseDedicatedHostsDedicatedHost[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHost: 'DedicatedHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHost: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseDedicatedHostsDedicatedHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies extends $tea.Model {
  supportedInstanceTypeFamily: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'SupportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList extends $tea.Model {
  supportedInstanceTypesList: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypesList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostType extends $tea.Model {
  dedicatedHostType: string;
  sockets: number;
  totalVcpus: number;
  totalVgpus: number;
  cores: number;
  physicalGpus: number;
  memorySize: number;
  localStorageCapacity: number;
  localStorageAmount: number;
  localStorageCategory: string;
  GPUSpec: string;
  supportCpuOverCommitRatio: boolean;
  cpuOverCommitRatioRange: string;
  supportedInstanceTypeFamilies: DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies;
  supportedInstanceTypesList: DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
      sockets: 'Sockets',
      totalVcpus: 'TotalVcpus',
      totalVgpus: 'TotalVgpus',
      cores: 'Cores',
      physicalGpus: 'PhysicalGpus',
      memorySize: 'MemorySize',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCategory: 'LocalStorageCategory',
      GPUSpec: 'GPUSpec',
      supportCpuOverCommitRatio: 'SupportCpuOverCommitRatio',
      cpuOverCommitRatioRange: 'CpuOverCommitRatioRange',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: 'string',
      sockets: 'number',
      totalVcpus: 'number',
      totalVgpus: 'number',
      cores: 'number',
      physicalGpus: 'number',
      memorySize: 'number',
      localStorageCapacity: 'number',
      localStorageAmount: 'number',
      localStorageCategory: 'string',
      GPUSpec: 'string',
      supportCpuOverCommitRatio: 'boolean',
      cpuOverCommitRatioRange: 'string',
      supportedInstanceTypeFamilies: DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostTypesResponseDedicatedHostTypes extends $tea.Model {
  dedicatedHostType: DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostType[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': DescribeDedicatedHostTypesResponseDedicatedHostTypesDedicatedHostType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributesDedicatedHostRenewAttribute extends $tea.Model {
  dedicatedHostId: string;
  autoRenewEnabled: boolean;
  duration: number;
  periodUnit: string;
  renewalStatus: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      autoRenewEnabled: 'AutoRenewEnabled',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      autoRenewEnabled: 'boolean',
      duration: 'number',
      periodUnit: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributes extends $tea.Model {
  dedicatedHostRenewAttribute: DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributesDedicatedHostRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostRenewAttribute: 'DedicatedHostRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostRenewAttribute: { 'type': 'array', 'itemType': DescribeDedicatedHostAutoRenewResponseDedicatedHostRenewAttributesDedicatedHostRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsRequestTag extends $tea.Model {
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

export class AllocateDedicatedHostsRequestNetworkAttributes extends $tea.Model {
  slbUdpTimeout?: number;
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsResponseDedicatedHostIdSets extends $tea.Model {
  dedicatedHostId: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimulatedSystemEventsResponseEventIdSet extends $tea.Model {
  eventId: string[];
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEniMonitorDataResponseMonitorDataEniMonitorData extends $tea.Model {
  eniId: string;
  timeStamp: string;
  packetTx: string;
  packetRx: string;
  intranetTx: string;
  intranetRx: string;
  dropPacketTx: string;
  dropPacketRx: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      timeStamp: 'TimeStamp',
      packetTx: 'PacketTx',
      packetRx: 'PacketRx',
      intranetTx: 'IntranetTx',
      intranetRx: 'IntranetRx',
      dropPacketTx: 'DropPacketTx',
      dropPacketRx: 'DropPacketRx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      timeStamp: 'string',
      packetTx: 'string',
      packetRx: 'string',
      intranetTx: 'string',
      intranetRx: 'string',
      dropPacketTx: 'string',
      dropPacketRx: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEniMonitorDataResponseMonitorData extends $tea.Model {
  eniMonitorData: DescribeEniMonitorDataResponseMonitorDataEniMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eniMonitorData: 'EniMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniMonitorData: { 'type': 'array', 'itemType': DescribeEniMonitorDataResponseMonitorDataEniMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem extends $tea.Model {
  value: string;
  expiredTime: string;
  zoneId: string;
  instanceChargeType: string;
  instanceType: string;
  count: number;
  diskCategory: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      count: 'Count',
      diskCategory: 'DiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      expiredTime: 'string',
      zoneId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      count: 'number',
      diskCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValues extends $tea.Model {
  valueItem: DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem[];
  static names(): { [key: string]: string } {
    return {
      valueItem: 'ValueItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItem extends $tea.Model {
  attributeName: string;
  attributeValues: DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValues;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValues: 'AttributeValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValues: DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItemAttributeValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseAccountAttributeItems extends $tea.Model {
  accountAttributeItem: DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItem[];
  static names(): { [key: string]: string } {
    return {
      accountAttributeItem: 'AccountAttributeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseAccountAttributeItemsAccountAttributeItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesRequestTemplateTag extends $tea.Model {
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

export class DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTags extends $tea.Model {
  tag: DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSet extends $tea.Model {
  createTime: string;
  modifiedTime: string;
  launchTemplateId: string;
  launchTemplateName: string;
  defaultVersionNumber: number;
  latestVersionNumber: number;
  createdBy: string;
  resourceGroupId: string;
  tags: DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTags;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      defaultVersionNumber: 'DefaultVersionNumber',
      latestVersionNumber: 'LatestVersionNumber',
      createdBy: 'CreatedBy',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      defaultVersionNumber: 'number',
      latestVersionNumber: 'number',
      createdBy: 'string',
      resourceGroupId: 'string',
      tags: DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSetTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponseLaunchTemplateSets extends $tea.Model {
  launchTemplateSet: DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateSet: 'LaunchTemplateSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateSet: { 'type': 'array', 'itemType': DescribeLaunchTemplatesResponseLaunchTemplateSetsLaunchTemplateSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk extends $tea.Model {
  size: number;
  category: string;
  diskName: string;
  description: string;
  iops: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      category: 'Category',
      diskName: 'DiskName',
      description: 'Description',
      iops: 'Iops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      category: 'string',
      diskName: 'string',
      description: 'string',
      iops: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk extends $tea.Model {
  size: number;
  snapshotId: string;
  category: string;
  encrypted: string;
  diskName: string;
  description: string;
  deleteWithInstance: boolean;
  device: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      category: 'Category',
      encrypted: 'Encrypted',
      diskName: 'DiskName',
      description: 'Description',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      category: 'string',
      encrypted: 'string',
      diskName: 'string',
      description: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks extends $tea.Model {
  dataDisk: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface extends $tea.Model {
  primaryIpAddress: string;
  vSwitchId: string;
  securityGroupId: string;
  networkInterfaceName: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      primaryIpAddress: 'PrimaryIpAddress',
      vSwitchId: 'VSwitchId',
      securityGroupId: 'SecurityGroupId',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryIpAddress: 'string',
      vSwitchId: 'string',
      securityGroupId: 'string',
      networkInterfaceName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces extends $tea.Model {
  networkInterface: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags extends $tea.Model {
  instanceTag: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag[];
  static names(): { [key: string]: string } {
    return {
      instanceTag: 'InstanceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTag: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData extends $tea.Model {
  imageId: string;
  imageOwnerAlias: string;
  passwordInherit: boolean;
  instanceType: string;
  securityGroupId: string;
  vpcId: string;
  vSwitchId: string;
  instanceName: string;
  description: string;
  internetMaxBandwidthIn: number;
  internetMaxBandwidthOut: number;
  hostName: string;
  zoneId: string;
  ioOptimized: string;
  instanceChargeType: string;
  period: number;
  internetChargeType: string;
  enableVmOsConfig: boolean;
  networkType: string;
  userData: string;
  keyPairName: string;
  ramRoleName: string;
  autoReleaseTime: string;
  spotStrategy: string;
  spotPriceLimit: number;
  spotDuration: number;
  resourceGroupId: string;
  securityEnhancementStrategy: string;
  systemDisk: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk;
  dataDisks: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks;
  networkInterfaces: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces;
  tags: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      passwordInherit: 'PasswordInherit',
      instanceType: 'InstanceType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      instanceName: 'InstanceName',
      description: 'Description',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      hostName: 'HostName',
      zoneId: 'ZoneId',
      ioOptimized: 'IoOptimized',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      internetChargeType: 'InternetChargeType',
      enableVmOsConfig: 'EnableVmOsConfig',
      networkType: 'NetworkType',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      autoReleaseTime: 'AutoReleaseTime',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotDuration: 'SpotDuration',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      systemDisk: 'SystemDisk',
      dataDisks: 'DataDisks',
      networkInterfaces: 'NetworkInterfaces',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageOwnerAlias: 'string',
      passwordInherit: 'boolean',
      instanceType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      instanceName: 'string',
      description: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      hostName: 'string',
      zoneId: 'string',
      ioOptimized: 'string',
      instanceChargeType: 'string',
      period: 'number',
      internetChargeType: 'string',
      enableVmOsConfig: 'boolean',
      networkType: 'string',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      autoReleaseTime: 'string',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      spotDuration: 'number',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      systemDisk: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk,
      dataDisks: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks,
      networkInterfaces: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces,
      tags: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSet extends $tea.Model {
  createTime: string;
  modifiedTime: string;
  launchTemplateId: string;
  launchTemplateName: string;
  defaultVersion: boolean;
  versionNumber: number;
  versionDescription: string;
  createdBy: string;
  launchTemplateData: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      defaultVersion: 'DefaultVersion',
      versionNumber: 'VersionNumber',
      versionDescription: 'VersionDescription',
      createdBy: 'CreatedBy',
      launchTemplateData: 'LaunchTemplateData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      defaultVersion: 'boolean',
      versionNumber: 'number',
      versionDescription: 'string',
      createdBy: 'string',
      launchTemplateData: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSets extends $tea.Model {
  launchTemplateVersionSet: DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersionSet: 'LaunchTemplateVersionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersionSet: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseLaunchTemplateVersionSetsLaunchTemplateVersionSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateVersionRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  iops?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      iops: 'Iops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      iops: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateVersionRequestDataDisk extends $tea.Model {
  size?: number;
  snapshotId?: string;
  category?: string;
  encrypted?: string;
  diskName?: string;
  description?: string;
  deleteWithInstance?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      category: 'Category',
      encrypted: 'Encrypted',
      diskName: 'DiskName',
      description: 'Description',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      category: 'string',
      encrypted: 'string',
      diskName: 'string',
      description: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateVersionRequestNetworkInterface extends $tea.Model {
  primaryIpAddress?: string;
  vSwitchId?: string;
  securityGroupId?: string;
  networkInterfaceName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      primaryIpAddress: 'PrimaryIpAddress',
      vSwitchId: 'VSwitchId',
      securityGroupId: 'SecurityGroupId',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryIpAddress: 'string',
      vSwitchId: 'string',
      securityGroupId: 'string',
      networkInterfaceName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateVersionRequestTag extends $tea.Model {
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

export class CreateLaunchTemplateRequestTemplateTag extends $tea.Model {
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

export class CreateLaunchTemplateRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  iops?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      iops: 'Iops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      iops: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequestDataDisk extends $tea.Model {
  size?: number;
  snapshotId?: string;
  category?: string;
  encrypted?: string;
  diskName?: string;
  description?: string;
  deleteWithInstance?: boolean;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      category: 'Category',
      encrypted: 'Encrypted',
      diskName: 'DiskName',
      description: 'Description',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      category: 'string',
      encrypted: 'string',
      diskName: 'string',
      description: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequestNetworkInterface extends $tea.Model {
  primaryIpAddress?: string;
  vSwitchId?: string;
  securityGroupId?: string;
  networkInterfaceName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      primaryIpAddress: 'PrimaryIpAddress',
      vSwitchId: 'VSwitchId',
      securityGroupId: 'SecurityGroupId',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryIpAddress: 'string',
      vSwitchId: 'string',
      securityGroupId: 'string',
      networkInterfaceName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLaunchTemplateRequestTag extends $tea.Model {
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

export class DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus extends $tea.Model {
  instanceId: string;
  cloudAssistantStatus: string;
  cloudAssistantVersion: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      cloudAssistantStatus: 'CloudAssistantStatus',
      cloudAssistantVersion: 'CloudAssistantVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      cloudAssistantStatus: 'string',
      cloudAssistantVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSet extends $tea.Model {
  instanceCloudAssistantStatus: DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceCloudAssistantStatus: 'InstanceCloudAssistantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCloudAssistantStatus: { 'type': 'array', 'itemType': DescribeCloudAssistantStatusResponseInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSetPrivateIpSet extends $tea.Model {
  privateIpAddress: string[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSet extends $tea.Model {
  networkInterfaceId: string;
  privateIpSet: AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSetPrivateIpSet;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      privateIpSet: AssignPrivateIpAddressesResponseAssignedPrivateIpAddressesSetPrivateIpSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissionsNetworkInterfacePermission extends $tea.Model {
  accountId: number;
  serviceName: string;
  networkInterfaceId: string;
  networkInterfacePermissionId: string;
  permission: string;
  permissionState: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      serviceName: 'ServiceName',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      permission: 'Permission',
      permissionState: 'PermissionState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      serviceName: 'string',
      networkInterfaceId: 'string',
      networkInterfacePermissionId: 'string',
      permission: 'string',
      permissionState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissions extends $tea.Model {
  networkInterfacePermission: DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissionsNetworkInterfacePermission[];
  static names(): { [key: string]: string } {
    return {
      networkInterfacePermission: 'NetworkInterfacePermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfacePermission: { 'type': 'array', 'itemType': DescribeNetworkInterfacePermissionsResponseNetworkInterfacePermissionsNetworkInterfacePermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfacePermissionResponseNetworkInterfacePermission extends $tea.Model {
  accountId: number;
  serviceName: string;
  networkInterfaceId: string;
  networkInterfacePermissionId: string;
  permission: string;
  permissionState: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      serviceName: 'ServiceName',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      permission: 'Permission',
      permissionState: 'PermissionState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      serviceName: 'string',
      networkInterfaceId: 'string',
      networkInterfacePermissionId: 'string',
      permission: 'string',
      permissionState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $tea.Model {
  value: string;
  status: string;
  statusCategory: string;
  min: number;
  max: number;
  unit: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      status: 'Status',
      statusCategory: 'StatusCategory',
      min: 'Min',
      max: 'Max',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      status: 'string',
      statusCategory: 'string',
      min: 'number',
      max: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $tea.Model {
  supportedResource: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $tea.Model {
  type: string;
  supportedResources: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      supportedResources: 'SupportedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      supportedResources: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResources extends $tea.Model {
  availableResource: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZonesAvailableZone extends $tea.Model {
  regionId: string;
  zoneId: string;
  status: string;
  statusCategory: string;
  availableResources: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResources;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      status: 'Status',
      statusCategory: 'StatusCategory',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      status: 'string',
      statusCategory: 'string',
      availableResources: DescribeResourcesModificationResponseAvailableZonesAvailableZoneAvailableResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseAvailableZones extends $tea.Model {
  availableZone: DescribeResourcesModificationResponseAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationResponseBandwidthsBandwidth extends $tea.Model {
  internetChargeType: string;
  min: number;
  max: number;
  unit: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      min: 'Min',
      max: 'Max',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      min: 'number',
      max: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationResponseBandwidths extends $tea.Model {
  bandwidth: DescribeBandwidthLimitationResponseBandwidthsBandwidth[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': DescribeBandwidthLimitationResponseBandwidthsBandwidth },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $tea.Model {
  value: string;
  status: string;
  statusCategory: string;
  min: number;
  max: number;
  unit: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      status: 'Status',
      statusCategory: 'StatusCategory',
      min: 'Min',
      max: 'Max',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      status: 'string',
      statusCategory: 'string',
      min: 'number',
      max: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $tea.Model {
  supportedResource: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $tea.Model {
  type: string;
  supportedResources: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      supportedResources: 'SupportedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      supportedResources: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResources extends $tea.Model {
  availableResource: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZonesAvailableZone extends $tea.Model {
  regionId: string;
  zoneId: string;
  status: string;
  statusCategory: string;
  availableResources: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResources;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      status: 'Status',
      statusCategory: 'StatusCategory',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      status: 'string',
      statusCategory: 'string',
      availableResources: DescribeAvailableResourceResponseAvailableZonesAvailableZoneAvailableResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseAvailableZones extends $tea.Model {
  availableZone: DescribeAvailableResourceResponseAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusRequestNotBefore extends $tea.Model {
  start?: string;
  end?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusRequestEventPublishTime extends $tea.Model {
  start?: string;
  end?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $tea.Model {
  creationTime: string;
  releaseTime: string;
  deviceType: string;
  deviceCategory: string;
  deviceSize: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      releaseTime: 'ReleaseTime',
      deviceType: 'DeviceType',
      deviceCategory: 'DeviceCategory',
      deviceSize: 'DeviceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      releaseTime: 'string',
      deviceType: 'string',
      deviceCategory: 'string',
      deviceSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks extends $tea.Model {
  inactiveDisk: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk[];
  static names(): { [key: string]: string } {
    return {
      inactiveDisk: 'InactiveDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inactiveDisk: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute extends $tea.Model {
  diskId: string;
  device: string;
  inactiveDisks: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      device: 'Device',
      inactiveDisks: 'InactiveDisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      device: 'string',
      inactiveDisks: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType extends $tea.Model {
  eventId: string;
  eventPublishTime: string;
  notBefore: string;
  reason: string;
  impactLevel: string;
  eventCycleStatus: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus;
  eventType: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType;
  extendedAttribute: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      notBefore: 'NotBefore',
      reason: 'Reason',
      impactLevel: 'ImpactLevel',
      eventCycleStatus: 'EventCycleStatus',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventPublishTime: 'string',
      notBefore: 'string',
      reason: 'string',
      impactLevel: 'string',
      eventCycleStatus: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus,
      eventType: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType,
      extendedAttribute: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet extends $tea.Model {
  scheduledSystemEventType: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      scheduledSystemEventType: 'ScheduledSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledSystemEventType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeHealthStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusType extends $tea.Model {
  instanceId: string;
  scheduledSystemEventSet: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet;
  status: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeStatus;
  healthStatus: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeHealthStatus;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduledSystemEventSet: 'ScheduledSystemEventSet',
      status: 'Status',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduledSystemEventSet: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet,
      status: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeStatus,
      healthStatus: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusTypeHealthStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseInstanceFullStatusSet extends $tea.Model {
  instanceFullStatusType: DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      instanceFullStatusType: 'InstanceFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFullStatusType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseInstanceFullStatusSetInstanceFullStatusType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequestNotBefore extends $tea.Model {
  start?: string;
  end?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequestEventPublishTime extends $tea.Model {
  start?: string;
  end?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventType extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $tea.Model {
  creationTime: string;
  releaseTime: string;
  deviceType: string;
  deviceCategory: string;
  deviceSize: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      releaseTime: 'ReleaseTime',
      deviceType: 'DeviceType',
      deviceCategory: 'DeviceCategory',
      deviceSize: 'DeviceSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      releaseTime: 'string',
      deviceType: 'string',
      deviceCategory: 'string',
      deviceSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks extends $tea.Model {
  inactiveDisk: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk[];
  static names(): { [key: string]: string } {
    return {
      inactiveDisk: 'InactiveDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inactiveDisk: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute extends $tea.Model {
  diskId: string;
  device: string;
  inactiveDisks: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      device: 'Device',
      inactiveDisks: 'InactiveDisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      device: 'string',
      inactiveDisks: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventType extends $tea.Model {
  instanceId: string;
  eventId: string;
  eventPublishTime: string;
  notBefore: string;
  eventFinishTime: string;
  reason: string;
  impactLevel: string;
  eventType: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventType;
  eventCycleStatus: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus;
  extendedAttribute: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      notBefore: 'NotBefore',
      eventFinishTime: 'EventFinishTime',
      reason: 'Reason',
      impactLevel: 'ImpactLevel',
      eventType: 'EventType',
      eventCycleStatus: 'EventCycleStatus',
      extendedAttribute: 'ExtendedAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      eventId: 'string',
      eventPublishTime: 'string',
      notBefore: 'string',
      eventFinishTime: 'string',
      reason: 'string',
      impactLevel: 'string',
      eventType: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventType,
      eventCycleStatus: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus,
      extendedAttribute: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseInstanceSystemEventSet extends $tea.Model {
  instanceSystemEventType: DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventType: 'InstanceSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventType: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseInstanceSystemEventSetInstanceSystemEventType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusRequestEventTime extends $tea.Model {
  start?: string;
  end?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType extends $tea.Model {
  eventId: string;
  eventTime: string;
  eventEndTime: string;
  impactLevel: string;
  eventType: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventEndTime: 'EventEndTime',
      impactLevel: 'ImpactLevel',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventTime: 'string',
      eventEndTime: 'string',
      impactLevel: 'string',
      eventType: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSet extends $tea.Model {
  diskEventType: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType[];
  static names(): { [key: string]: string } {
    return {
      diskEventType: 'DiskEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEventType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeHealthStatus extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusType extends $tea.Model {
  diskId: string;
  instanceId: string;
  device: string;
  diskEventSet: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSet;
  status: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeStatus;
  healthStatus: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeHealthStatus;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      device: 'Device',
      diskEventSet: 'DiskEventSet',
      status: 'Status',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
      device: 'string',
      diskEventSet: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeDiskEventSet,
      status: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeStatus,
      healthStatus: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusTypeHealthStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseDiskFullStatusSet extends $tea.Model {
  diskFullStatusType: DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      diskFullStatusType: 'DiskFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskFullStatusType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseDiskFullStatusSetDiskFullStatusType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestSystemDisk extends $tea.Model {
  size?: string;
  category?: string;
  diskName?: string;
  description?: string;
  performanceLevel?: string;
  autoSnapshotPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      category: 'Category',
      diskName: 'DiskName',
      description: 'Description',
      performanceLevel: 'PerformanceLevel',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
      category: 'string',
      diskName: 'string',
      description: 'string',
      performanceLevel: 'string',
      autoSnapshotPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestDataDisk extends $tea.Model {
  size?: number;
  snapshotId?: string;
  category?: string;
  encrypted?: string;
  KMSKeyId?: string;
  diskName?: string;
  description?: string;
  device?: string;
  deleteWithInstance?: boolean;
  performanceLevel?: string;
  autoSnapshotPolicyId?: string;
  encryptAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      category: 'Category',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      diskName: 'DiskName',
      description: 'Description',
      device: 'Device',
      deleteWithInstance: 'DeleteWithInstance',
      performanceLevel: 'PerformanceLevel',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      encryptAlgorithm: 'EncryptAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      category: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      diskName: 'string',
      description: 'string',
      device: 'string',
      deleteWithInstance: 'boolean',
      performanceLevel: 'string',
      autoSnapshotPolicyId: 'string',
      encryptAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestArn extends $tea.Model {
  assumeRoleFor?: number;
  rolearn?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      rolearn: 'Rolearn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      rolearn: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestNetworkInterface extends $tea.Model {
  primaryIpAddress?: string;
  vSwitchId?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  networkInterfaceName?: string;
  description?: string;
  queueNumber?: number;
  static names(): { [key: string]: string } {
    return {
      primaryIpAddress: 'PrimaryIpAddress',
      vSwitchId: 'VSwitchId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
      queueNumber: 'QueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryIpAddress: 'string',
      vSwitchId: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      description: 'string',
      queueNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestTag extends $tea.Model {
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

export class RunInstancesRequestCpuOptions extends $tea.Model {
  core?: number;
  threadsPerCore?: number;
  numa?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      threadsPerCore: 'ThreadsPerCore',
      numa: 'Numa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      threadsPerCore: 'number',
      numa: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstancesResponseInstanceIdSets extends $tea.Model {
  instanceIdSet: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHpcClustersResponseHpcClustersHpcCluster extends $tea.Model {
  hpcClusterId: string;
  name: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      hpcClusterId: 'HpcClusterId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcClusterId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHpcClustersResponseHpcClusters extends $tea.Model {
  hpcCluster: DescribeHpcClustersResponseHpcClustersHpcCluster[];
  static names(): { [key: string]: string } {
    return {
      hpcCluster: 'HpcCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcCluster: { 'type': 'array', 'itemType': DescribeHpcClustersResponseHpcClustersHpcCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryResponseSpotPricesSpotPriceType extends $tea.Model {
  zoneId: string;
  instanceType: string;
  ioOptimized: string;
  timestamp: string;
  networkType: string;
  spotPrice: number;
  originPrice: number;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      timestamp: 'Timestamp',
      networkType: 'NetworkType',
      spotPrice: 'SpotPrice',
      originPrice: 'OriginPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      timestamp: 'string',
      networkType: 'string',
      spotPrice: 'number',
      originPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryResponseSpotPrices extends $tea.Model {
  spotPriceType: DescribeSpotPriceHistoryResponseSpotPricesSpotPriceType[];
  static names(): { [key: string]: string } {
    return {
      spotPriceType: 'SpotPriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceType: { 'type': 'array', 'itemType': DescribeSpotPriceHistoryResponseSpotPricesSpotPriceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseInvocationsInvocationInvokeInstancesInvokeInstance extends $tea.Model {
  instanceId: string;
  repeats: number;
  instanceInvokeStatus: string;
  invocationStatus: string;
  output: string;
  exitCode: number;
  dropped: number;
  errorCode: string;
  errorInfo: string;
  creationTime: string;
  startTime: string;
  stopTime: string;
  finishTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repeats: 'Repeats',
      instanceInvokeStatus: 'InstanceInvokeStatus',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      exitCode: 'ExitCode',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      creationTime: 'CreationTime',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repeats: 'number',
      instanceInvokeStatus: 'string',
      invocationStatus: 'string',
      output: 'string',
      exitCode: 'number',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      creationTime: 'string',
      startTime: 'string',
      stopTime: 'string',
      finishTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseInvocationsInvocationInvokeInstances extends $tea.Model {
  invokeInstance: DescribeInvocationsResponseInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeInvocationsResponseInvocationsInvocationInvokeInstancesInvokeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseInvocationsInvocation extends $tea.Model {
  invokeId: string;
  creationTime: string;
  commandId: string;
  commandType: string;
  commandName: string;
  commandContent: string;
  frequency: string;
  timed: boolean;
  invokeStatus: string;
  invocationStatus: string;
  parameters: string;
  invokeInstances: DescribeInvocationsResponseInvocationsInvocationInvokeInstances;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      creationTime: 'CreationTime',
      commandId: 'CommandId',
      commandType: 'CommandType',
      commandName: 'CommandName',
      commandContent: 'CommandContent',
      frequency: 'Frequency',
      timed: 'Timed',
      invokeStatus: 'InvokeStatus',
      invocationStatus: 'InvocationStatus',
      parameters: 'Parameters',
      invokeInstances: 'InvokeInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      creationTime: 'string',
      commandId: 'string',
      commandType: 'string',
      commandName: 'string',
      commandContent: 'string',
      frequency: 'string',
      timed: 'boolean',
      invokeStatus: 'string',
      invocationStatus: 'string',
      parameters: 'string',
      invokeInstances: DescribeInvocationsResponseInvocationsInvocationInvokeInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseInvocations extends $tea.Model {
  invocation: DescribeInvocationsResponseInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeInvocationsResponseInvocationsInvocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseInvocationInvocationResultsInvocationResult extends $tea.Model {
  commandId: string;
  invokeId: string;
  instanceId: string;
  startTime: string;
  stopTime: string;
  finishedTime: string;
  repeats: number;
  output: string;
  dropped: number;
  invokeRecordStatus: string;
  invocationStatus: string;
  exitCode: number;
  errorCode: string;
  errorInfo: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      invokeId: 'InvokeId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      finishedTime: 'FinishedTime',
      repeats: 'Repeats',
      output: 'Output',
      dropped: 'Dropped',
      invokeRecordStatus: 'InvokeRecordStatus',
      invocationStatus: 'InvocationStatus',
      exitCode: 'ExitCode',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      invokeId: 'string',
      instanceId: 'string',
      startTime: 'string',
      stopTime: 'string',
      finishedTime: 'string',
      repeats: 'number',
      output: 'string',
      dropped: 'number',
      invokeRecordStatus: 'string',
      invocationStatus: 'string',
      exitCode: 'number',
      errorCode: 'string',
      errorInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseInvocationInvocationResults extends $tea.Model {
  invocationResult: DescribeInvocationResultsResponseInvocationInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseInvocationInvocationResultsInvocationResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseInvocation extends $tea.Model {
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  invocationResults: DescribeInvocationResultsResponseInvocationInvocationResults;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      invocationResults: 'InvocationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      invocationResults: DescribeInvocationResultsResponseInvocationInvocationResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseCommandsCommandParameterNames extends $tea.Model {
  parameterName: string[];
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseCommandsCommand extends $tea.Model {
  commandId: string;
  name: string;
  type: string;
  description: string;
  commandContent: string;
  workingDir: string;
  timeout: number;
  invokeTimes: number;
  creationTime: string;
  enableParameter: boolean;
  parameterNames: DescribeCommandsResponseCommandsCommandParameterNames;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      name: 'Name',
      type: 'Type',
      description: 'Description',
      commandContent: 'CommandContent',
      workingDir: 'WorkingDir',
      timeout: 'Timeout',
      invokeTimes: 'InvokeTimes',
      creationTime: 'CreationTime',
      enableParameter: 'EnableParameter',
      parameterNames: 'ParameterNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      name: 'string',
      type: 'string',
      description: 'string',
      commandContent: 'string',
      workingDir: 'string',
      timeout: 'number',
      invokeTimes: 'number',
      creationTime: 'string',
      enableParameter: 'boolean',
      parameterNames: DescribeCommandsResponseCommandsCommandParameterNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseCommands extends $tea.Model {
  command: DescribeCommandsResponseCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': DescribeCommandsResponseCommandsCommand },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesRequestTag extends $tea.Model {
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

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp extends $tea.Model {
  publicIpAddress: string;
  allocationId: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet extends $tea.Model {
  privateIpAddress: string;
  primary: boolean;
  associatedPublicIp: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      primary: 'Primary',
      associatedPublicIp: 'AssociatedPublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'string',
      primary: 'boolean',
      associatedPublicIp: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSetAssociatedPublicIp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets extends $tea.Model {
  privateIpSet: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSetsPrivateIpSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set extends $tea.Model {
  ipv6Address: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets extends $tea.Model {
  ipv6Set: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6SetsIpv6Set },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTags extends $tea.Model {
  tag: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp extends $tea.Model {
  publicIpAddress: string;
  allocationId: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAttachment extends $tea.Model {
  instanceId: string;
  trunkNetworkInterfaceId: string;
  deviceIndex: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
      deviceIndex: 'DeviceIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trunkNetworkInterfaceId: 'string',
      deviceIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
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

export class DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet extends $tea.Model {
  networkInterfaceId: string;
  status: string;
  type: string;
  vpcId: string;
  vSwitchId: string;
  zoneId: string;
  privateIpAddress: string;
  macAddress: string;
  networkInterfaceName: string;
  description: string;
  instanceId: string;
  creationTime: string;
  resourceGroupId: string;
  serviceID: number;
  serviceManaged: boolean;
  queueNumber: number;
  ownerId: string;
  privateIpSets: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets;
  ipv6Sets: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets;
  tags: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTags;
  associatedPublicIp: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp;
  attachment: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAttachment;
  securityGroupIds: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      status: 'Status',
      type: 'Type',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      privateIpAddress: 'PrivateIpAddress',
      macAddress: 'MacAddress',
      networkInterfaceName: 'NetworkInterfaceName',
      description: 'Description',
      instanceId: 'InstanceId',
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      queueNumber: 'QueueNumber',
      ownerId: 'OwnerId',
      privateIpSets: 'PrivateIpSets',
      ipv6Sets: 'Ipv6Sets',
      tags: 'Tags',
      associatedPublicIp: 'AssociatedPublicIp',
      attachment: 'Attachment',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      status: 'string',
      type: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      privateIpAddress: 'string',
      macAddress: 'string',
      networkInterfaceName: 'string',
      description: 'string',
      instanceId: 'string',
      creationTime: 'string',
      resourceGroupId: 'string',
      serviceID: 'number',
      serviceManaged: 'boolean',
      queueNumber: 'number',
      ownerId: 'string',
      privateIpSets: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetPrivateIpSets,
      ipv6Sets: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetIpv6Sets,
      tags: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetTags,
      associatedPublicIp: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAssociatedPublicIp,
      attachment: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetAttachment,
      securityGroupIds: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSetSecurityGroupIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseNetworkInterfaceSets extends $tea.Model {
  networkInterfaceSet: DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceRequestTag extends $tea.Model {
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

export class CreateNetworkInterfaceResponsePrivateIpSetsPrivateIpSet extends $tea.Model {
  privateIpAddress: string;
  primary: boolean;
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: 'string',
      primary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceResponsePrivateIpSets extends $tea.Model {
  privateIpSet: CreateNetworkInterfaceResponsePrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': CreateNetworkInterfaceResponsePrivateIpSetsPrivateIpSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceResponseTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceResponseTags extends $tea.Model {
  tag: CreateNetworkInterfaceResponseTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': CreateNetworkInterfaceResponseTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkInterfaceResponseSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
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

export class DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZoneNetworkTypes extends $tea.Model {
  networkType: string[];
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZone extends $tea.Model {
  zoneNo: string;
  networkTypes: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZoneNetworkTypes;
  static names(): { [key: string]: string } {
    return {
      zoneNo: 'ZoneNo',
      networkTypes: 'NetworkTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneNo: 'string',
      networkTypes: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZoneNetworkTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZones extends $tea.Model {
  zone: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeInstanceType extends $tea.Model {
  generation: string;
  instanceTypeFamily: string;
  instanceType: string;
  supportIoOptimized: string;
  cores: number;
  memory: number;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceType: 'InstanceType',
      supportIoOptimized: 'SupportIoOptimized',
      cores: 'Cores',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
      instanceTypeFamily: 'string',
      instanceType: 'string',
      supportIoOptimized: 'string',
      cores: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseDataRecommendInstanceType extends $tea.Model {
  regionId: string;
  commodityCode: string;
  scene: string;
  instanceChargeType: string;
  spotStrategy: string;
  priority: number;
  zones: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZones;
  instanceType: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeInstanceType;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      commodityCode: 'CommodityCode',
      scene: 'Scene',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      priority: 'Priority',
      zones: 'Zones',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      commodityCode: 'string',
      scene: 'string',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      priority: 'number',
      zones: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeZones,
      instanceType: DescribeRecommendInstanceTypeResponseDataRecommendInstanceTypeInstanceType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseData extends $tea.Model {
  recommendInstanceType: DescribeRecommendInstanceTypeResponseDataRecommendInstanceType[];
  static names(): { [key: string]: string } {
    return {
      recommendInstanceType: 'RecommendInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendInstanceType: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseDataRecommendInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestSystemDisk extends $tea.Model {
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponseFeeOfInstancesFeeOfInstance extends $tea.Model {
  instanceId: string;
  fee: string;
  currency: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      fee: 'Fee',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      fee: 'string',
      currency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceChargeTypeResponseFeeOfInstances extends $tea.Model {
  feeOfInstance: ModifyInstanceChargeTypeResponseFeeOfInstancesFeeOfInstance[];
  static names(): { [key: string]: string } {
    return {
      feeOfInstance: 'FeeOfInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstance: { 'type': 'array', 'itemType': ModifyInstanceChargeTypeResponseFeeOfInstancesFeeOfInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup extends $tea.Model {
  aliUid: string;
  securityGroupId: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups extends $tea.Model {
  referencingSecurityGroup: DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      referencingSecurityGroup: 'ReferencingSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencingSecurityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroupsReferencingSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReference extends $tea.Model {
  securityGroupId: string;
  referencingSecurityGroups: DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      referencingSecurityGroups: 'ReferencingSecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      referencingSecurityGroups: DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReferenceReferencingSecurityGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupReferencesResponseSecurityGroupReferences extends $tea.Model {
  securityGroupReference: DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReference[];
  static names(): { [key: string]: string } {
    return {
      securityGroupReference: 'SecurityGroupReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupReference: { 'type': 'array', 'itemType': DescribeSecurityGroupReferencesResponseSecurityGroupReferencesSecurityGroupReference },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassicLinkInstancesResponseLinksLink extends $tea.Model {
  instanceId: string;
  vpcId: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassicLinkInstancesResponseLinks extends $tea.Model {
  link: DescribeClassicLinkInstancesResponseLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeClassicLinkInstancesResponseLinksLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet extends $tea.Model {
  instanceId: string;
  ramRoleName: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramRoleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets extends $tea.Model {
  instanceRamRoleSet: DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet[];
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSet: 'InstanceRamRoleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSet: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResult extends $tea.Model {
  instanceId: string;
  success: boolean;
  code: string;
  message: string;
  instanceRamRoleSets: DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      instanceRamRoleSets: 'InstanceRamRoleSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      instanceRamRoleSets: DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstanceRamRoleResponseDetachInstanceRamRoleResults extends $tea.Model {
  detachInstanceRamRoleResult: DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      detachInstanceRamRoleResult: 'DetachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInstanceRamRoleResult: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseDetachInstanceRamRoleResultsDetachInstanceRamRoleResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRamRoleResponseInstanceRamRoleSetsInstanceRamRoleSet extends $tea.Model {
  instanceId: string;
  ramRoleName: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramRoleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRamRoleResponseInstanceRamRoleSets extends $tea.Model {
  instanceRamRoleSet: DescribeInstanceRamRoleResponseInstanceRamRoleSetsInstanceRamRoleSet[];
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSet: 'InstanceRamRoleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSet: { 'type': 'array', 'itemType': DescribeInstanceRamRoleResponseInstanceRamRoleSetsInstanceRamRoleSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleResponseAttachInstanceRamRoleResultsAttachInstanceRamRoleResult extends $tea.Model {
  instanceId: string;
  success: boolean;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleResponseAttachInstanceRamRoleResults extends $tea.Model {
  attachInstanceRamRoleResult: AttachInstanceRamRoleResponseAttachInstanceRamRoleResultsAttachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      attachInstanceRamRoleResult: 'AttachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceRamRoleResult: { 'type': 'array', 'itemType': AttachInstanceRamRoleResponseAttachInstanceRamRoleResultsAttachInstanceRamRoleResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotPackageResponseSnapshotPackagesSnapshotPackage extends $tea.Model {
  startTime: string;
  endTime: string;
  initCapacity: number;
  displayName: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      initCapacity: 'number',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotPackageResponseSnapshotPackages extends $tea.Model {
  snapshotPackage: DescribeSnapshotPackageResponseSnapshotPackagesSnapshotPackage[];
  static names(): { [key: string]: string } {
    return {
      snapshotPackage: 'SnapshotPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotPackage: { 'type': 'array', 'itemType': DescribeSnapshotPackageResponseSnapshotPackagesSnapshotPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotMonitorDataResponseMonitorDataDataPoint extends $tea.Model {
  timeStamp: string;
  size: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotMonitorDataResponseMonitorData extends $tea.Model {
  dataPoint: DescribeSnapshotMonitorDataResponseMonitorDataDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': DescribeSnapshotMonitorDataResponseMonitorDataDataPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoRulesRule extends $tea.Model {
  ruleId: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoRules extends $tea.Model {
  rule: DescribeRenewalPriceResponsePriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponsePriceInfoRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule extends $tea.Model {
  ruleId: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules extends $tea.Model {
  rule: DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModel extends $tea.Model {
  resource: string;
  originalPrice: number;
  discountPrice: number;
  tradePrice: number;
  subRules: DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      subRules: 'SubRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      originalPrice: 'number',
      discountPrice: 'number',
      tradePrice: 'number',
      subRules: DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoPriceDetailInfos extends $tea.Model {
  resourcePriceModel: DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModel[];
  static names(): { [key: string]: string } {
    return {
      resourcePriceModel: 'ResourcePriceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePriceModel: { 'type': 'array', 'itemType': DescribeRenewalPriceResponsePriceInfoPriceDetailInfosResourcePriceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfoPrice extends $tea.Model {
  originalPrice: number;
  discountPrice: number;
  tradePrice: number;
  currency: string;
  detailInfos: DescribeRenewalPriceResponsePriceInfoPriceDetailInfos;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      currency: 'Currency',
      detailInfos: 'DetailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      tradePrice: 'number',
      currency: 'string',
      detailInfos: DescribeRenewalPriceResponsePriceInfoPriceDetailInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponsePriceInfo extends $tea.Model {
  rules: DescribeRenewalPriceResponsePriceInfoRules;
  price: DescribeRenewalPriceResponsePriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: DescribeRenewalPriceResponsePriceInfoRules,
      price: DescribeRenewalPriceResponsePriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestDataDisk extends $tea.Model {
  size?: number;
  category?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      category: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoRulesRule extends $tea.Model {
  ruleId: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoRules extends $tea.Model {
  rule: DescribePriceResponsePriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribePriceResponsePriceInfoRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule extends $tea.Model {
  ruleId: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules extends $tea.Model {
  rule: DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModel extends $tea.Model {
  resource: string;
  originalPrice: number;
  discountPrice: number;
  tradePrice: number;
  subRules: DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      subRules: 'SubRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      originalPrice: 'number',
      discountPrice: 'number',
      tradePrice: 'number',
      subRules: DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModelSubRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPriceDetailInfos extends $tea.Model {
  resourcePriceModel: DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModel[];
  static names(): { [key: string]: string } {
    return {
      resourcePriceModel: 'ResourcePriceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePriceModel: { 'type': 'array', 'itemType': DescribePriceResponsePriceInfoPriceDetailInfosResourcePriceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfoPrice extends $tea.Model {
  originalPrice: number;
  discountPrice: number;
  tradePrice: number;
  reservedInstanceHourPrice: number;
  currency: string;
  detailInfos: DescribePriceResponsePriceInfoPriceDetailInfos;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      reservedInstanceHourPrice: 'ReservedInstanceHourPrice',
      currency: 'Currency',
      detailInfos: 'DetailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      tradePrice: 'number',
      reservedInstanceHourPrice: 'number',
      currency: 'string',
      detailInfos: DescribePriceResponsePriceInfoPriceDetailInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponsePriceInfo extends $tea.Model {
  rules: DescribePriceResponsePriceInfoRules;
  price: DescribePriceResponsePriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: DescribePriceResponsePriceInfoRules,
      price: DescribePriceResponsePriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseDeploymentSetsDeploymentSetInstanceIds extends $tea.Model {
  instanceId: string[];
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

export class DescribeDeploymentSetsResponseDeploymentSetsDeploymentSet extends $tea.Model {
  deploymentSetId: string;
  deploymentSetDescription: string;
  deploymentSetName: string;
  strategy: string;
  deploymentStrategy: string;
  domain: string;
  granularity: string;
  groupCount: number;
  instanceAmount: number;
  creationTime: string;
  instanceIds: DescribeDeploymentSetsResponseDeploymentSetsDeploymentSetInstanceIds;
  static names(): { [key: string]: string } {
    return {
      deploymentSetId: 'DeploymentSetId',
      deploymentSetDescription: 'DeploymentSetDescription',
      deploymentSetName: 'DeploymentSetName',
      strategy: 'Strategy',
      deploymentStrategy: 'DeploymentStrategy',
      domain: 'Domain',
      granularity: 'Granularity',
      groupCount: 'GroupCount',
      instanceAmount: 'InstanceAmount',
      creationTime: 'CreationTime',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
      deploymentSetDescription: 'string',
      deploymentSetName: 'string',
      strategy: 'string',
      deploymentStrategy: 'string',
      domain: 'string',
      granularity: 'string',
      groupCount: 'number',
      instanceAmount: 'number',
      creationTime: 'string',
      instanceIds: DescribeDeploymentSetsResponseDeploymentSetsDeploymentSetInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentSetsResponseDeploymentSets extends $tea.Model {
  deploymentSet: DescribeDeploymentSetsResponseDeploymentSetsDeploymentSet[];
  static names(): { [key: string]: string } {
    return {
      deploymentSet: 'DeploymentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSet: { 'type': 'array', 'itemType': DescribeDeploymentSetsResponseDeploymentSetsDeploymentSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequestTag extends $tea.Model {
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

export class DetachKeyPairResponseResultsResult extends $tea.Model {
  instanceId: string;
  success: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseResults extends $tea.Model {
  result: DetachKeyPairResponseResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DetachKeyPairResponseResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsRequestTag extends $tea.Model {
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

export class DescribeKeyPairsResponseKeyPairsKeyPairTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseKeyPairsKeyPairTags extends $tea.Model {
  tag: DescribeKeyPairsResponseKeyPairsKeyPairTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeKeyPairsResponseKeyPairsKeyPairTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseKeyPairsKeyPair extends $tea.Model {
  keyPairName: string;
  keyPairFingerPrint: string;
  creationTime: string;
  resourceGroupId: string;
  tags: DescribeKeyPairsResponseKeyPairsKeyPairTags;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      keyPairFingerPrint: 'string',
      creationTime: 'string',
      resourceGroupId: 'string',
      tags: DescribeKeyPairsResponseKeyPairsKeyPairTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseKeyPairs extends $tea.Model {
  keyPair: DescribeKeyPairsResponseKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseKeyPairsKeyPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequestTag extends $tea.Model {
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

export class AttachKeyPairResponseResultsResult extends $tea.Model {
  instanceId: string;
  success: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseResults extends $tea.Model {
  result: AttachKeyPairResponseResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': AttachKeyPairResponseResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute extends $tea.Model {
  instanceId: string;
  autoRenewEnabled: boolean;
  duration: number;
  periodUnit: string;
  renewalStatus: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      autoRenewEnabled: 'AutoRenewEnabled',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      autoRenewEnabled: 'boolean',
      duration: 'number',
      periodUnit: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributes extends $tea.Model {
  instanceRenewAttribute: DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotLinksResponseSnapshotLinksSnapshotLink extends $tea.Model {
  snapshotLinkId: string;
  regionId: string;
  instanceId: string;
  instanceName: string;
  sourceDiskId: string;
  sourceDiskName: string;
  sourceDiskSize: number;
  sourceDiskType: string;
  category: string;
  totalSize: number;
  totalCount: number;
  static names(): { [key: string]: string } {
    return {
      snapshotLinkId: 'SnapshotLinkId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      sourceDiskId: 'SourceDiskId',
      sourceDiskName: 'SourceDiskName',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      category: 'Category',
      totalSize: 'TotalSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotLinkId: 'string',
      regionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      sourceDiskId: 'string',
      sourceDiskName: 'string',
      sourceDiskSize: 'number',
      sourceDiskType: 'string',
      category: 'string',
      totalSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotLinksResponseSnapshotLinks extends $tea.Model {
  snapshotLink: DescribeSnapshotLinksResponseSnapshotLinksSnapshotLink[];
  static names(): { [key: string]: string } {
    return {
      snapshotLink: 'SnapshotLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotLink: { 'type': 'array', 'itemType': DescribeSnapshotLinksResponseSnapshotLinksSnapshotLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponseEipMonitorDatasEipMonitorData extends $tea.Model {
  eipRX: number;
  eipTX: number;
  eipFlow: number;
  eipBandwidth: number;
  eipPackets: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      eipRX: 'EipRX',
      eipTX: 'EipTX',
      eipFlow: 'EipFlow',
      eipBandwidth: 'EipBandwidth',
      eipPackets: 'EipPackets',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipRX: 'number',
      eipTX: 'number',
      eipFlow: 'number',
      eipBandwidth: 'number',
      eipPackets: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponseEipMonitorDatas extends $tea.Model {
  eipMonitorData: DescribeNewProjectEipMonitorDataResponseEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeNewProjectEipMonitorDataResponseEipMonitorDatasEipMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseNatGatewaysNatGatewayForwardTableIds extends $tea.Model {
  forwardTableId: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseNatGatewaysNatGatewayBandwidthPackageIds extends $tea.Model {
  bandwidthPackageId: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseNatGatewaysNatGateway extends $tea.Model {
  natGatewayId: string;
  regionId: string;
  name: string;
  description: string;
  vpcId: string;
  spec: string;
  instanceChargeType: string;
  businessStatus: string;
  creationTime: string;
  status: string;
  forwardTableIds: DescribeNatGatewaysResponseNatGatewaysNatGatewayForwardTableIds;
  bandwidthPackageIds: DescribeNatGatewaysResponseNatGatewaysNatGatewayBandwidthPackageIds;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      vpcId: 'VpcId',
      spec: 'Spec',
      instanceChargeType: 'InstanceChargeType',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      status: 'Status',
      forwardTableIds: 'ForwardTableIds',
      bandwidthPackageIds: 'BandwidthPackageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      vpcId: 'string',
      spec: 'string',
      instanceChargeType: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      status: 'string',
      forwardTableIds: DescribeNatGatewaysResponseNatGatewaysNatGatewayForwardTableIds,
      bandwidthPackageIds: DescribeNatGatewaysResponseNatGatewaysNatGatewayBandwidthPackageIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseNatGateways extends $tea.Model {
  natGateway: DescribeNatGatewaysResponseNatGatewaysNatGateway[];
  static names(): { [key: string]: string } {
    return {
      natGateway: 'NatGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateway: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseNatGatewaysNatGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseForwardTableEntriesForwardTableEntry extends $tea.Model {
  forwardTableId: string;
  forwardEntryId: string;
  externalIp: string;
  externalPort: string;
  ipProtocol: string;
  internalIp: string;
  internalPort: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      ipProtocol: 'IpProtocol',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: 'string',
      forwardEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      ipProtocol: 'string',
      internalIp: 'string',
      internalPort: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseForwardTableEntries extends $tea.Model {
  forwardTableEntry: DescribeForwardTableEntriesResponseForwardTableEntriesForwardTableEntry[];
  static names(): { [key: string]: string } {
    return {
      forwardTableEntry: 'ForwardTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntry: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseForwardTableEntriesForwardTableEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse extends $tea.Model {
  allocationId: string;
  ipAddress: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddresses extends $tea.Model {
  publicIpAddresse: DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddresse: 'PublicIpAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresse: { 'type': 'array', 'itemType': DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddressesPublicIpAddresse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackage extends $tea.Model {
  bandwidthPackageId: string;
  regionId: string;
  name: string;
  description: string;
  zoneId: string;
  natGatewayId: string;
  bandwidth: string;
  instanceChargeType: string;
  internetChargeType: string;
  businessStatus: string;
  ipCount: string;
  ISP: string;
  creationTime: string;
  status: string;
  publicIpAddresses: DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddresses;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      zoneId: 'ZoneId',
      natGatewayId: 'NatGatewayId',
      bandwidth: 'Bandwidth',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      businessStatus: 'BusinessStatus',
      ipCount: 'IpCount',
      ISP: 'ISP',
      creationTime: 'CreationTime',
      status: 'Status',
      publicIpAddresses: 'PublicIpAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      zoneId: 'string',
      natGatewayId: 'string',
      bandwidth: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      businessStatus: 'string',
      ipCount: 'string',
      ISP: 'string',
      creationTime: 'string',
      status: 'string',
      publicIpAddresses: DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackagePublicIpAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagesResponseBandwidthPackages extends $tea.Model {
  bandwidthPackage: DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: { 'type': 'array', 'itemType': DescribeBandwidthPackagesResponseBandwidthPackagesBandwidthPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequestBandwidthPackage extends $tea.Model {
  ipCount?: number;
  bandwidth?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      ipCount: 'IpCount',
      bandwidth: 'Bandwidth',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipCount: 'number',
      bandwidth: 'number',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseForwardTableIds extends $tea.Model {
  forwardTableId: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBandwidthPackageIds extends $tea.Model {
  bandwidthPackageId: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExRequestTag extends $tea.Model {
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

export class DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTags extends $tea.Model {
  tag: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicy extends $tea.Model {
  autoSnapshotPolicyId: string;
  regionId: string;
  autoSnapshotPolicyName: string;
  timePoints: string;
  repeatWeekdays: string;
  retentionDays: number;
  diskNums: number;
  volumeNums: number;
  creationTime: string;
  status: string;
  enableCrossRegionCopy: boolean;
  targetCopyRegions: string;
  copiedSnapshotsRetentionDays: number;
  tags: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTags;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      regionId: 'RegionId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      timePoints: 'TimePoints',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      diskNums: 'DiskNums',
      volumeNums: 'VolumeNums',
      creationTime: 'CreationTime',
      status: 'Status',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      targetCopyRegions: 'TargetCopyRegions',
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      regionId: 'string',
      autoSnapshotPolicyName: 'string',
      timePoints: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      diskNums: 'number',
      volumeNums: 'number',
      creationTime: 'string',
      status: 'string',
      enableCrossRegionCopy: 'boolean',
      targetCopyRegions: 'string',
      copiedSnapshotsRetentionDays: 'number',
      tags: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseAutoSnapshotPolicies extends $tea.Model {
  autoSnapshotPolicy: DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyRequestTag extends $tea.Model {
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

export class DescribeImageSupportInstanceTypesRequestFilter extends $tea.Model {
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

export class DescribeImageSupportInstanceTypesResponseInstanceTypesInstanceType extends $tea.Model {
  instanceTypeId: string;
  cpuCoreCount: number;
  memorySize: number;
  instanceTypeFamily: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
      cpuCoreCount: 'CpuCoreCount',
      memorySize: 'MemorySize',
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: 'string',
      cpuCoreCount: 'number',
      memorySize: 'number',
      instanceTypeFamily: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSupportInstanceTypesResponseInstanceTypes extends $tea.Model {
  instanceType: DescribeImageSupportInstanceTypesResponseInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeImageSupportInstanceTypesResponseInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType extends $tea.Model {
  vbrId: string;
  vbrOwnerUid: number;
  creationTime: string;
  activationTime: string;
  terminationTime: string;
  recoveryTime: string;
  vlanId: number;
  circuitCode: string;
  static names(): { [key: string]: string } {
    return {
      vbrId: 'VbrId',
      vbrOwnerUid: 'VbrOwnerUid',
      creationTime: 'CreationTime',
      activationTime: 'ActivationTime',
      terminationTime: 'TerminationTime',
      recoveryTime: 'RecoveryTime',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrId: 'string',
      vbrOwnerUid: 'number',
      creationTime: 'string',
      activationTime: 'string',
      terminationTime: 'string',
      recoveryTime: 'string',
      vlanId: 'number',
      circuitCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSet extends $tea.Model {
  virtualBorderRouterForPhysicalConnectionType: DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterForPhysicalConnectionType: 'VirtualBorderRouterForPhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterForPhysicalConnectionType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionResponseVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseVirtualBorderRouterSetVirtualBorderRouterType extends $tea.Model {
  vbrId: string;
  creationTime: string;
  activationTime: string;
  terminationTime: string;
  recoveryTime: string;
  status: string;
  vlanId: number;
  circuitCode: string;
  routeTableId: string;
  vlanInterfaceId: string;
  localGatewayIp: string;
  peerGatewayIp: string;
  peeringSubnetMask: string;
  physicalConnectionId: string;
  physicalConnectionStatus: string;
  physicalConnectionBusinessStatus: string;
  physicalConnectionOwnerUid: string;
  accessPointId: string;
  name: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      vbrId: 'VbrId',
      creationTime: 'CreationTime',
      activationTime: 'ActivationTime',
      terminationTime: 'TerminationTime',
      recoveryTime: 'RecoveryTime',
      status: 'Status',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
      routeTableId: 'RouteTableId',
      vlanInterfaceId: 'VlanInterfaceId',
      localGatewayIp: 'LocalGatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionId: 'PhysicalConnectionId',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      accessPointId: 'AccessPointId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrId: 'string',
      creationTime: 'string',
      activationTime: 'string',
      terminationTime: 'string',
      recoveryTime: 'string',
      status: 'string',
      vlanId: 'number',
      circuitCode: 'string',
      routeTableId: 'string',
      vlanInterfaceId: 'string',
      localGatewayIp: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionId: 'string',
      physicalConnectionStatus: 'string',
      physicalConnectionBusinessStatus: 'string',
      physicalConnectionOwnerUid: 'string',
      accessPointId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseVirtualBorderRouterSet extends $tea.Model {
  virtualBorderRouterType: DescribeVirtualBorderRoutersResponseVirtualBorderRouterSetVirtualBorderRouterType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterType: 'VirtualBorderRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseVirtualBorderRouterSetVirtualBorderRouterType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponsePhysicalConnectionSetPhysicalConnectionType extends $tea.Model {
  physicalConnectionId: string;
  accessPointId: string;
  type: string;
  status: string;
  businessStatus: string;
  creationTime: string;
  enabledTime: string;
  lineOperator: string;
  spec: string;
  peerLocation: string;
  portType: string;
  redundantPhysicalConnectionId: string;
  name: string;
  description: string;
  adLocation: string;
  portNumber: string;
  circuitCode: string;
  bandwidth: number;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionId: 'PhysicalConnectionId',
      accessPointId: 'AccessPointId',
      type: 'Type',
      status: 'Status',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      enabledTime: 'EnabledTime',
      lineOperator: 'LineOperator',
      spec: 'Spec',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      name: 'Name',
      description: 'Description',
      adLocation: 'AdLocation',
      portNumber: 'PortNumber',
      circuitCode: 'CircuitCode',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionId: 'string',
      accessPointId: 'string',
      type: 'string',
      status: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      enabledTime: 'string',
      lineOperator: 'string',
      spec: 'string',
      peerLocation: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      name: 'string',
      description: 'string',
      adLocation: 'string',
      portNumber: 'string',
      circuitCode: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponsePhysicalConnectionSet extends $tea.Model {
  physicalConnectionType: DescribePhysicalConnectionsResponsePhysicalConnectionSetPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionType: 'PhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionType: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponsePhysicalConnectionSetPhysicalConnectionType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseAccessPointSetAccessPointType extends $tea.Model {
  accessPointId: string;
  status: string;
  type: string;
  attachedRegionNo: string;
  location: string;
  hostOperator: string;
  name: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      status: 'Status',
      type: 'Type',
      attachedRegionNo: 'AttachedRegionNo',
      location: 'Location',
      hostOperator: 'HostOperator',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      status: 'string',
      type: 'string',
      attachedRegionNo: 'string',
      location: 'string',
      hostOperator: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseAccessPointSet extends $tea.Model {
  accessPointType: DescribeAccessPointsResponseAccessPointSetAccessPointType[];
  static names(): { [key: string]: string } {
    return {
      accessPointType: 'AccessPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointType: { 'type': 'array', 'itemType': DescribeAccessPointsResponseAccessPointSetAccessPointType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportImageRequestDiskDeviceMapping extends $tea.Model {
  format?: string;
  OSSBucket?: string;
  OSSObject?: string;
  diskImSize?: number;
  diskImageSize?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
      diskImSize: 'DiskImSize',
      diskImageSize: 'DiskImageSize',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
      diskImSize: 'number',
      diskImageSize: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportImageRequestTag extends $tea.Model {
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

export class DescribeTasksResponseTaskSetTask extends $tea.Model {
  taskId: string;
  taskAction: string;
  taskStatus: string;
  supportCancel: string;
  creationTime: string;
  finishedTime: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskAction: 'TaskAction',
      taskStatus: 'TaskStatus',
      supportCancel: 'SupportCancel',
      creationTime: 'CreationTime',
      finishedTime: 'FinishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskAction: 'string',
      taskStatus: 'string',
      supportCancel: 'string',
      creationTime: 'string',
      finishedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseTaskSet extends $tea.Model {
  task: DescribeTasksResponseTaskSetTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseTaskSetTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $tea.Model {
  name: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSet extends $tea.Model {
  relatedItem: DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseOperationProgressSetOperationProgress extends $tea.Model {
  operationStatus: string;
  errorCode: string;
  errorMsg: string;
  relatedItemSet: DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSet;
  static names(): { [key: string]: string } {
    return {
      operationStatus: 'OperationStatus',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      relatedItemSet: 'RelatedItemSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationStatus: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      relatedItemSet: DescribeTaskAttributeResponseOperationProgressSetOperationProgressRelatedItemSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseOperationProgressSet extends $tea.Model {
  operationProgress: DescribeTaskAttributeResponseOperationProgressSetOperationProgress[];
  static names(): { [key: string]: string } {
    return {
      operationProgress: 'OperationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgress: { 'type': 'array', 'itemType': DescribeTaskAttributeResponseOperationProgressSetOperationProgress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeFamiliesResponseInstanceTypeFamiliesInstanceTypeFamily extends $tea.Model {
  instanceTypeFamilyId: string;
  generation: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
      generation: 'Generation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilyId: 'string',
      generation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypeFamiliesResponseInstanceTypeFamilies extends $tea.Model {
  instanceTypeFamily: DescribeInstanceTypeFamiliesResponseInstanceTypeFamiliesInstanceTypeFamily[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: { 'type': 'array', 'itemType': DescribeInstanceTypeFamiliesResponseInstanceTypeFamiliesInstanceTypeFamily },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseRouterInterfaceSetRouterInterfaceType extends $tea.Model {
  routerInterfaceId: string;
  oppositeRegionId: string;
  role: string;
  spec: string;
  name: string;
  description: string;
  routerId: string;
  routerType: string;
  creationTime: string;
  endTime: string;
  chargeType: string;
  status: string;
  businessStatus: string;
  connectedTime: string;
  oppositeInterfaceId: string;
  oppositeInterfaceSpec: string;
  oppositeInterfaceStatus: string;
  oppositeInterfaceBusinessStatus: string;
  oppositeRouterId: string;
  oppositeRouterType: string;
  oppositeInterfaceOwnerId: string;
  accessPointId: string;
  oppositeAccessPointId: string;
  healthCheckSourceIp: string;
  healthCheckTargetIp: string;
  static names(): { [key: string]: string } {
    return {
      routerInterfaceId: 'RouterInterfaceId',
      oppositeRegionId: 'OppositeRegionId',
      role: 'Role',
      spec: 'Spec',
      name: 'Name',
      description: 'Description',
      routerId: 'RouterId',
      routerType: 'RouterType',
      creationTime: 'CreationTime',
      endTime: 'EndTime',
      chargeType: 'ChargeType',
      status: 'Status',
      businessStatus: 'BusinessStatus',
      connectedTime: 'ConnectedTime',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceSpec: 'OppositeInterfaceSpec',
      oppositeInterfaceStatus: 'OppositeInterfaceStatus',
      oppositeInterfaceBusinessStatus: 'OppositeInterfaceBusinessStatus',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      accessPointId: 'AccessPointId',
      oppositeAccessPointId: 'OppositeAccessPointId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerInterfaceId: 'string',
      oppositeRegionId: 'string',
      role: 'string',
      spec: 'string',
      name: 'string',
      description: 'string',
      routerId: 'string',
      routerType: 'string',
      creationTime: 'string',
      endTime: 'string',
      chargeType: 'string',
      status: 'string',
      businessStatus: 'string',
      connectedTime: 'string',
      oppositeInterfaceId: 'string',
      oppositeInterfaceSpec: 'string',
      oppositeInterfaceStatus: 'string',
      oppositeInterfaceBusinessStatus: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      oppositeInterfaceOwnerId: 'string',
      accessPointId: 'string',
      oppositeAccessPointId: 'string',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseRouterInterfaceSet extends $tea.Model {
  routerInterfaceType: DescribeRouterInterfacesResponseRouterInterfaceSetRouterInterfaceType[];
  static names(): { [key: string]: string } {
    return {
      routerInterfaceType: 'RouterInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerInterfaceType: { 'type': 'array', 'itemType': DescribeRouterInterfacesResponseRouterInterfaceSetRouterInterfaceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseHaVipsHaVipAssociatedInstances extends $tea.Model {
  associatedInstance: string[];
  static names(): { [key: string]: string } {
    return {
      associatedInstance: 'associatedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseHaVipsHaVipAssociatedEipAddresses extends $tea.Model {
  associatedEipAddresse: string[];
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresse: 'associatedEipAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresse: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseHaVipsHaVip extends $tea.Model {
  haVipId: string;
  regionId: string;
  vpcId: string;
  vSwitchId: string;
  ipAddress: string;
  status: string;
  masterInstanceId: string;
  description: string;
  createTime: string;
  associatedInstances: DescribeHaVipsResponseHaVipsHaVipAssociatedInstances;
  associatedEipAddresses: DescribeHaVipsResponseHaVipsHaVipAssociatedEipAddresses;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      status: 'Status',
      masterInstanceId: 'MasterInstanceId',
      description: 'Description',
      createTime: 'CreateTime',
      associatedInstances: 'AssociatedInstances',
      associatedEipAddresses: 'AssociatedEipAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
      regionId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      status: 'string',
      masterInstanceId: 'string',
      description: 'string',
      createTime: 'string',
      associatedInstances: DescribeHaVipsResponseHaVipsHaVipAssociatedInstances,
      associatedEipAddresses: DescribeHaVipsResponseHaVipsHaVipAssociatedEipAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseHaVips extends $tea.Model {
  haVip: DescribeHaVipsResponseHaVipsHaVip[];
  static names(): { [key: string]: string } {
    return {
      haVip: 'HaVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVip: { 'type': 'array', 'itemType': DescribeHaVipsResponseHaVipsHaVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseTagsTagResourceTypeCount extends $tea.Model {
  instance: number;
  disk: number;
  volume: number;
  image: number;
  snapshot: number;
  securitygroup: number;
  launchTemplate: number;
  eni: number;
  ddh: number;
  keyPair: number;
  snapshotPolicy: number;
  reservedInstance: number;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      disk: 'Disk',
      volume: 'Volume',
      image: 'Image',
      snapshot: 'Snapshot',
      securitygroup: 'Securitygroup',
      launchTemplate: 'LaunchTemplate',
      eni: 'Eni',
      ddh: 'Ddh',
      keyPair: 'KeyPair',
      snapshotPolicy: 'SnapshotPolicy',
      reservedInstance: 'ReservedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'number',
      disk: 'number',
      volume: 'number',
      image: 'number',
      snapshot: 'number',
      securitygroup: 'number',
      launchTemplate: 'number',
      eni: 'number',
      ddh: 'number',
      keyPair: 'number',
      snapshotPolicy: 'number',
      reservedInstance: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  resourceTypeCount: DescribeTagsResponseTagsTagResourceTypeCount;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      resourceTypeCount: 'ResourceTypeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      resourceTypeCount: DescribeTagsResponseTagsTagResourceTypeCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseTags extends $tea.Model {
  tag: DescribeTagsResponseTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTagsResponseTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByTagsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByTagsResponseResourcesResource extends $tea.Model {
  resourceId: string;
  resourceType: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceByTagsResponseResources extends $tea.Model {
  resource: DescribeResourceByTagsResponseResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeResourceByTagsResponseResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceSystemDiskRequestSystemDisk extends $tea.Model {
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

export class ModifyInstanceSpecRequestTemporary extends $tea.Model {
  startTime?: string;
  endTime?: string;
  internetMaxBandwidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequestSystemDisk extends $tea.Model {
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories extends $tea.Model {
  supportedSystemDiskCategory: string[];
  static names(): { [key: string]: string } {
    return {
      supportedSystemDiskCategory: 'supportedSystemDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSystemDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoDataDiskCategories extends $tea.Model {
  supportedDataDiskCategory: string[];
  static names(): { [key: string]: string } {
    return {
      supportedDataDiskCategory: 'supportedDataDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedDataDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoNetworkTypes extends $tea.Model {
  supportedNetworkCategory: string[];
  static names(): { [key: string]: string } {
    return {
      supportedNetworkCategory: 'supportedNetworkCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNetworkCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypes extends $tea.Model {
  supportedInstanceType: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceType: 'supportedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies extends $tea.Model {
  supportedInstanceTypeFamily: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'supportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceGenerations extends $tea.Model {
  supportedInstanceGeneration: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceGeneration: 'supportedInstanceGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfo extends $tea.Model {
  ioOptimized: boolean;
  systemDiskCategories: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories;
  dataDiskCategories: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoDataDiskCategories;
  networkTypes: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoNetworkTypes;
  instanceTypes: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypes;
  instanceTypeFamilies: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies;
  instanceGenerations: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceGenerations;
  static names(): { [key: string]: string } {
    return {
      ioOptimized: 'IoOptimized',
      systemDiskCategories: 'SystemDiskCategories',
      dataDiskCategories: 'DataDiskCategories',
      networkTypes: 'NetworkTypes',
      instanceTypes: 'InstanceTypes',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      instanceGenerations: 'InstanceGenerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioOptimized: 'boolean',
      systemDiskCategories: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories,
      dataDiskCategories: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoDataDiskCategories,
      networkTypes: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoNetworkTypes,
      instanceTypes: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypes,
      instanceTypeFamilies: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies,
      instanceGenerations: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfoInstanceGenerations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResources extends $tea.Model {
  resourcesInfo: DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcesInfo: 'ResourcesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcesInfo: { 'type': 'array', 'itemType': DescribeZonesResponseZonesZoneAvailableResourcesResourcesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableResourceCreation extends $tea.Model {
  resourceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableDiskCategories extends $tea.Model {
  diskCategories: string[];
  static names(): { [key: string]: string } {
    return {
      diskCategories: 'DiskCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableInstanceTypes extends $tea.Model {
  instanceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableVolumeCategories extends $tea.Model {
  volumeCategories: string[];
  static names(): { [key: string]: string } {
    return {
      volumeCategories: 'VolumeCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneAvailableDedicatedHostTypes extends $tea.Model {
  dedicatedHostType: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZoneDedicatedHostGenerations extends $tea.Model {
  dedicatedHostGeneration: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGeneration: 'DedicatedHostGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZonesZone extends $tea.Model {
  zoneId: string;
  localName: string;
  availableResources: DescribeZonesResponseZonesZoneAvailableResources;
  availableResourceCreation: DescribeZonesResponseZonesZoneAvailableResourceCreation;
  availableDiskCategories: DescribeZonesResponseZonesZoneAvailableDiskCategories;
  availableInstanceTypes: DescribeZonesResponseZonesZoneAvailableInstanceTypes;
  availableVolumeCategories: DescribeZonesResponseZonesZoneAvailableVolumeCategories;
  availableDedicatedHostTypes: DescribeZonesResponseZonesZoneAvailableDedicatedHostTypes;
  dedicatedHostGenerations: DescribeZonesResponseZonesZoneDedicatedHostGenerations;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
      availableResources: 'AvailableResources',
      availableResourceCreation: 'AvailableResourceCreation',
      availableDiskCategories: 'AvailableDiskCategories',
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableVolumeCategories: 'AvailableVolumeCategories',
      availableDedicatedHostTypes: 'AvailableDedicatedHostTypes',
      dedicatedHostGenerations: 'DedicatedHostGenerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
      availableResources: DescribeZonesResponseZonesZoneAvailableResources,
      availableResourceCreation: DescribeZonesResponseZonesZoneAvailableResourceCreation,
      availableDiskCategories: DescribeZonesResponseZonesZoneAvailableDiskCategories,
      availableInstanceTypes: DescribeZonesResponseZonesZoneAvailableInstanceTypes,
      availableVolumeCategories: DescribeZonesResponseZonesZoneAvailableVolumeCategories,
      availableDedicatedHostTypes: DescribeZonesResponseZonesZoneAvailableDedicatedHostTypes,
      dedicatedHostGenerations: DescribeZonesResponseZonesZoneDedicatedHostGenerations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZones extends $tea.Model {
  zone: DescribeZonesResponseZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseVSwitchesVSwitch extends $tea.Model {
  vSwitchId: string;
  vpcId: string;
  status: string;
  cidrBlock: string;
  zoneId: string;
  availableIpAddressCount: number;
  description: string;
  vSwitchName: string;
  creationTime: string;
  isDefault: boolean;
  resourceGroupId: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      status: 'Status',
      cidrBlock: 'CidrBlock',
      zoneId: 'ZoneId',
      availableIpAddressCount: 'AvailableIpAddressCount',
      description: 'Description',
      vSwitchName: 'VSwitchName',
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vpcId: 'string',
      status: 'string',
      cidrBlock: 'string',
      zoneId: 'string',
      availableIpAddressCount: 'number',
      description: 'string',
      vSwitchName: 'string',
      creationTime: 'string',
      isDefault: 'boolean',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseVSwitches extends $tea.Model {
  vSwitch: DescribeVSwitchesResponseVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseVRoutersVRouterRouteTableIds extends $tea.Model {
  routeTableId: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseVRoutersVRouter extends $tea.Model {
  regionId: string;
  vpcId: string;
  VRouterName: string;
  description: string;
  VRouterId: string;
  creationTime: string;
  routeTableIds: DescribeVRoutersResponseVRoutersVRouterRouteTableIds;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      VRouterName: 'VRouterName',
      description: 'Description',
      VRouterId: 'VRouterId',
      creationTime: 'CreationTime',
      routeTableIds: 'RouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      VRouterName: 'string',
      description: 'string',
      VRouterId: 'string',
      creationTime: 'string',
      routeTableIds: DescribeVRoutersResponseVRoutersVRouterRouteTableIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseVRouters extends $tea.Model {
  VRouter: DescribeVRoutersResponseVRoutersVRouter[];
  static names(): { [key: string]: string } {
    return {
      VRouter: 'VRouter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouter: { 'type': 'array', 'itemType': DescribeVRoutersResponseVRoutersVRouter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseVpcsVpcVSwitchIds extends $tea.Model {
  vSwitchId: string[];
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

export class DescribeVpcsResponseVpcsVpcUserCidrs extends $tea.Model {
  userCidr: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseVpcsVpc extends $tea.Model {
  vpcId: string;
  regionId: string;
  status: string;
  vpcName: string;
  creationTime: string;
  cidrBlock: string;
  VRouterId: string;
  description: string;
  isDefault: boolean;
  vSwitchIds: DescribeVpcsResponseVpcsVpcVSwitchIds;
  userCidrs: DescribeVpcsResponseVpcsVpcUserCidrs;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      regionId: 'RegionId',
      status: 'Status',
      vpcName: 'VpcName',
      creationTime: 'CreationTime',
      cidrBlock: 'CidrBlock',
      VRouterId: 'VRouterId',
      description: 'Description',
      isDefault: 'IsDefault',
      vSwitchIds: 'VSwitchIds',
      userCidrs: 'UserCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      regionId: 'string',
      status: 'string',
      vpcName: 'string',
      creationTime: 'string',
      cidrBlock: 'string',
      VRouterId: 'string',
      description: 'string',
      isDefault: 'boolean',
      vSwitchIds: DescribeVpcsResponseVpcsVpcVSwitchIds,
      userCidrs: DescribeVpcsResponseVpcsVpcUserCidrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseVpcs extends $tea.Model {
  vpc: DescribeVpcsResponseVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequestFilter extends $tea.Model {
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

export class DescribeSnapshotsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseSnapshotsSnapshotTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseSnapshotsSnapshotTags extends $tea.Model {
  tag: DescribeSnapshotsResponseSnapshotsSnapshotTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSnapshotsResponseSnapshotsSnapshotTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseSnapshotsSnapshot extends $tea.Model {
  snapshotId: string;
  snapshotSN: string;
  snapshotName: string;
  progress: string;
  productCode: string;
  sourceDiskId: string;
  sourceDiskType: string;
  retentionDays: number;
  encrypted: boolean;
  sourceDiskSize: string;
  description: string;
  creationTime: string;
  lastModifiedTime: string;
  status: string;
  usage: string;
  sourceStorageType: string;
  remainTime: number;
  resourceGroupId: string;
  KMSKeyId: string;
  category: string;
  snapshotType: string;
  tags: DescribeSnapshotsResponseSnapshotsSnapshotTags;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      snapshotSN: 'SnapshotSN',
      snapshotName: 'SnapshotName',
      progress: 'Progress',
      productCode: 'ProductCode',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      retentionDays: 'RetentionDays',
      encrypted: 'Encrypted',
      sourceDiskSize: 'SourceDiskSize',
      description: 'Description',
      creationTime: 'CreationTime',
      lastModifiedTime: 'LastModifiedTime',
      status: 'Status',
      usage: 'Usage',
      sourceStorageType: 'SourceStorageType',
      remainTime: 'RemainTime',
      resourceGroupId: 'ResourceGroupId',
      KMSKeyId: 'KMSKeyId',
      category: 'Category',
      snapshotType: 'SnapshotType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      snapshotSN: 'string',
      snapshotName: 'string',
      progress: 'string',
      productCode: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      retentionDays: 'number',
      encrypted: 'boolean',
      sourceDiskSize: 'string',
      description: 'string',
      creationTime: 'string',
      lastModifiedTime: 'string',
      status: 'string',
      usage: 'string',
      sourceStorageType: 'string',
      remainTime: 'number',
      resourceGroupId: 'string',
      KMSKeyId: 'string',
      category: 'string',
      snapshotType: 'string',
      tags: DescribeSnapshotsResponseSnapshotsSnapshotTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseSnapshots extends $tea.Model {
  snapshot: DescribeSnapshotsResponseSnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': DescribeSnapshotsResponseSnapshotsSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTags extends $tea.Model {
  tag: DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup extends $tea.Model {
  securityGroupId: string;
  description: string;
  securityGroupName: string;
  vpcId: string;
  creationTime: string;
  securityGroupType: string;
  availableInstanceAmount: number;
  ecsCount: number;
  resourceGroupId: string;
  serviceID: number;
  serviceManaged: boolean;
  tags: DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTags;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      description: 'Description',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      securityGroupType: 'SecurityGroupType',
      availableInstanceAmount: 'AvailableInstanceAmount',
      ecsCount: 'EcsCount',
      resourceGroupId: 'ResourceGroupId',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      description: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
      creationTime: 'string',
      securityGroupType: 'string',
      availableInstanceAmount: 'number',
      ecsCount: 'number',
      resourceGroupId: 'string',
      serviceID: 'number',
      serviceManaged: 'boolean',
      tags: DescribeSecurityGroupsResponseSecurityGroupsSecurityGroupTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseSecurityGroups extends $tea.Model {
  securityGroup: DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseSecurityGroupsSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponsePermissionsPermission extends $tea.Model {
  ipProtocol: string;
  portRange: string;
  sourcePortRange: string;
  sourceGroupId: string;
  sourceGroupName: string;
  sourceCidrIp: string;
  ipv6SourceCidrIp: string;
  policy: string;
  nicType: string;
  sourceGroupOwnerAccount: string;
  destGroupId: string;
  destGroupName: string;
  destCidrIp: string;
  ipv6DestCidrIp: string;
  destGroupOwnerAccount: string;
  priority: string;
  direction: string;
  description: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      sourcePortRange: 'SourcePortRange',
      sourceGroupId: 'SourceGroupId',
      sourceGroupName: 'SourceGroupName',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      policy: 'Policy',
      nicType: 'NicType',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      destGroupId: 'DestGroupId',
      destGroupName: 'DestGroupName',
      destCidrIp: 'DestCidrIp',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      priority: 'Priority',
      direction: 'Direction',
      description: 'Description',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      portRange: 'string',
      sourcePortRange: 'string',
      sourceGroupId: 'string',
      sourceGroupName: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      policy: 'string',
      nicType: 'string',
      sourceGroupOwnerAccount: 'string',
      destGroupId: 'string',
      destGroupName: 'string',
      destCidrIp: 'string',
      ipv6DestCidrIp: 'string',
      destGroupOwnerAccount: 'string',
      priority: 'string',
      direction: 'string',
      description: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponsePermissions extends $tea.Model {
  permission: DescribeSecurityGroupAttributeResponsePermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponsePermissionsPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $tea.Model {
  nextHopType: string;
  nextHopId: string;
  enabled: number;
  weight: number;
  static names(): { [key: string]: string } {
    return {
      nextHopType: 'NextHopType',
      nextHopId: 'NextHopId',
      enabled: 'Enabled',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopType: 'string',
      nextHopId: 'string',
      enabled: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHops extends $tea.Model {
  nextHop: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntry extends $tea.Model {
  routeTableId: string;
  destinationCidrBlock: string;
  type: string;
  status: string;
  instanceId: string;
  nextHopType: string;
  nextHops: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      type: 'Type',
      status: 'Status',
      instanceId: 'InstanceId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: 'string',
      destinationCidrBlock: 'string',
      type: 'string',
      status: 'string',
      instanceId: 'string',
      nextHopType: 'string',
      nextHops: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntryNextHops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrys extends $tea.Model {
  routeEntry: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrysRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTablesRouteTable extends $tea.Model {
  VRouterId: string;
  routeTableId: string;
  routeTableType: string;
  creationTime: string;
  resourceGroupId: string;
  routeEntrys: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrys;
  static names(): { [key: string]: string } {
    return {
      VRouterId: 'VRouterId',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      routeEntrys: 'RouteEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouterId: 'string',
      routeTableId: 'string',
      routeTableType: 'string',
      creationTime: 'string',
      resourceGroupId: 'string',
      routeEntrys: DescribeRouteTablesResponseRouteTablesRouteTableRouteEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseRouteTables extends $tea.Model {
  routeTable: DescribeRouteTablesResponseRouteTablesRouteTable[];
  static names(): { [key: string]: string } {
    return {
      routeTable: 'RouteTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTable: { 'type': 'array', 'itemType': DescribeRouteTablesResponseRouteTablesRouteTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegionsRegion extends $tea.Model {
  regionId: string;
  localName: string;
  regionEndpoint: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      localName: 'string',
      regionEndpoint: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegions extends $tea.Model {
  region: DescribeRegionsResponseRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseInstanceTypesInstanceType extends $tea.Model {
  instanceTypeId: string;
  cpuCoreCount: number;
  memorySize: number;
  instanceTypeFamily: string;
  localStorageCapacity: number;
  localStorageAmount: number;
  localStorageCategory: string;
  GPUAmount: number;
  GPUSpec: string;
  initialCredit: number;
  baselineCredit: number;
  eniQuantity: number;
  eniPrivateIpAddressQuantity: number;
  eniIpv6AddressQuantity: number;
  instanceBandwidthRx: number;
  instanceBandwidthTx: number;
  instancePpsRx: number;
  instancePpsTx: number;
  instanceFamilyLevel: string;
  totalEniQueueQuantity: number;
  eniTrunkSupported: boolean;
  eniTotalQuantity: number;
  maximumQueueNumberPerEni: number;
  primaryEniQueueNumber: number;
  secondaryEniQueueNumber: number;
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
      cpuCoreCount: 'CpuCoreCount',
      memorySize: 'MemorySize',
      instanceTypeFamily: 'InstanceTypeFamily',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCategory: 'LocalStorageCategory',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      initialCredit: 'InitialCredit',
      baselineCredit: 'BaselineCredit',
      eniQuantity: 'EniQuantity',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      eniIpv6AddressQuantity: 'EniIpv6AddressQuantity',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      totalEniQueueQuantity: 'TotalEniQueueQuantity',
      eniTrunkSupported: 'EniTrunkSupported',
      eniTotalQuantity: 'EniTotalQuantity',
      maximumQueueNumberPerEni: 'MaximumQueueNumberPerEni',
      primaryEniQueueNumber: 'PrimaryEniQueueNumber',
      secondaryEniQueueNumber: 'SecondaryEniQueueNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: 'string',
      cpuCoreCount: 'number',
      memorySize: 'number',
      instanceTypeFamily: 'string',
      localStorageCapacity: 'number',
      localStorageAmount: 'number',
      localStorageCategory: 'string',
      GPUAmount: 'number',
      GPUSpec: 'string',
      initialCredit: 'number',
      baselineCredit: 'number',
      eniQuantity: 'number',
      eniPrivateIpAddressQuantity: 'number',
      eniIpv6AddressQuantity: 'number',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceFamilyLevel: 'string',
      totalEniQueueQuantity: 'number',
      eniTrunkSupported: 'boolean',
      eniTotalQuantity: 'number',
      maximumQueueNumberPerEni: 'number',
      primaryEniQueueNumber: 'number',
      secondaryEniQueueNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseInstanceTypes extends $tea.Model {
  instanceType: DescribeInstanceTypesResponseInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponseInstanceStatusesInstanceStatus extends $tea.Model {
  instanceId: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatusResponseInstanceStatuses extends $tea.Model {
  instanceStatus: DescribeInstanceStatusResponseInstanceStatusesInstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: { 'type': 'array', 'itemType': DescribeInstanceStatusResponseInstanceStatusesInstanceStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestFilter extends $tea.Model {
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

export class DescribeInstancesRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceNetworkInterfacesNetworkInterface extends $tea.Model {
  networkInterfaceId: string;
  macAddress: string;
  primaryIpAddress: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      macAddress: 'MacAddress',
      primaryIpAddress: 'PrimaryIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      macAddress: 'string',
      primaryIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceNetworkInterfaces extends $tea.Model {
  networkInterface: DescribeInstancesResponseInstancesInstanceNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstanceNetworkInterfacesNetworkInterface },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceOperationLocksLockReason extends $tea.Model {
  lockReason: string;
  lockMsg: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockMsg: 'LockMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceOperationLocks extends $tea.Model {
  lockReason: DescribeInstancesResponseInstancesInstanceOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstanceOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceTags extends $tea.Model {
  tag: DescribeInstancesResponseInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceVpcAttributesPrivateIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstancesResponseInstancesInstanceVpcAttributes extends $tea.Model {
  vpcId: string;
  vSwitchId: string;
  natIpAddress: string;
  privateIpAddress: DescribeInstancesResponseInstancesInstanceVpcAttributesPrivateIpAddress;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vSwitchId: 'string',
      natIpAddress: 'string',
      privateIpAddress: DescribeInstancesResponseInstancesInstanceVpcAttributesPrivateIpAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceEipAddress extends $tea.Model {
  allocationId: string;
  ipAddress: string;
  bandwidth: number;
  internetChargeType: string;
  isSupportUnassociate: boolean;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      isSupportUnassociate: 'IsSupportUnassociate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
      isSupportUnassociate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceDedicatedHostAttribute extends $tea.Model {
  dedicatedHostId: string;
  dedicatedHostName: string;
  dedicatedHostClusterId: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
      dedicatedHostClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceEcsCapacityReservationAttr extends $tea.Model {
  capacityReservationId: string;
  capacityReservationPreference: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationId: 'CapacityReservationId',
      capacityReservationPreference: 'CapacityReservationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationId: 'string',
      capacityReservationPreference: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceDedicatedInstanceAttribute extends $tea.Model {
  tenancy: string;
  affinity: string;
  static names(): { [key: string]: string } {
    return {
      tenancy: 'Tenancy',
      affinity: 'Affinity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenancy: 'string',
      affinity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceCpuOptions extends $tea.Model {
  coreCount: number;
  threadsPerCore: number;
  numa: string;
  static names(): { [key: string]: string } {
    return {
      coreCount: 'CoreCount',
      threadsPerCore: 'ThreadsPerCore',
      numa: 'Numa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreCount: 'number',
      threadsPerCore: 'number',
      numa: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceMetadataOptions extends $tea.Model {
  httpEndpoint: string;
  httpTokens: string;
  httpPutResponseHopLimit: number;
  static names(): { [key: string]: string } {
    return {
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpEndpoint: 'string',
      httpTokens: 'string',
      httpPutResponseHopLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstancesInstanceSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
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

export class DescribeInstancesResponseInstancesInstancePublicIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstancesResponseInstancesInstanceInnerIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstancesResponseInstancesInstanceRdmaIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstancesResponseInstancesInstance extends $tea.Model {
  instanceId: string;
  instanceName: string;
  description: string;
  imageId: string;
  OSName: string;
  OSNameEn: string;
  OSType: string;
  regionId: string;
  zoneId: string;
  clusterId: string;
  instanceType: string;
  cpu: number;
  memory: number;
  hostName: string;
  deploymentSetId: string;
  deploymentSetGroupNo: number;
  status: string;
  serialNumber: string;
  internetChargeType: string;
  internetMaxBandwidthIn: number;
  internetMaxBandwidthOut: number;
  vlanId: string;
  creationTime: string;
  startTime: string;
  instanceNetworkType: string;
  instanceChargeType: string;
  saleCycle: string;
  expiredTime: string;
  autoReleaseTime: string;
  ioOptimized: boolean;
  deviceAvailable: boolean;
  instanceTypeFamily: string;
  localStorageCapacity: number;
  localStorageAmount: number;
  GPUAmount: number;
  GPUSpec: string;
  spotStrategy: string;
  spotPriceLimit: number;
  spotDuration: number;
  resourceGroupId: string;
  keyPairName: string;
  recyclable: boolean;
  hpcClusterId: string;
  stoppedMode: string;
  creditSpecification: string;
  deletionProtection: boolean;
  networkInterfaces: DescribeInstancesResponseInstancesInstanceNetworkInterfaces;
  operationLocks: DescribeInstancesResponseInstancesInstanceOperationLocks;
  tags: DescribeInstancesResponseInstancesInstanceTags;
  vpcAttributes: DescribeInstancesResponseInstancesInstanceVpcAttributes;
  eipAddress: DescribeInstancesResponseInstancesInstanceEipAddress;
  dedicatedHostAttribute: DescribeInstancesResponseInstancesInstanceDedicatedHostAttribute;
  ecsCapacityReservationAttr: DescribeInstancesResponseInstancesInstanceEcsCapacityReservationAttr;
  dedicatedInstanceAttribute: DescribeInstancesResponseInstancesInstanceDedicatedInstanceAttribute;
  cpuOptions: DescribeInstancesResponseInstancesInstanceCpuOptions;
  metadataOptions: DescribeInstancesResponseInstancesInstanceMetadataOptions;
  securityGroupIds: DescribeInstancesResponseInstancesInstanceSecurityGroupIds;
  publicIpAddress: DescribeInstancesResponseInstancesInstancePublicIpAddress;
  innerIpAddress: DescribeInstancesResponseInstancesInstanceInnerIpAddress;
  rdmaIpAddress: DescribeInstancesResponseInstancesInstanceRdmaIpAddress;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      description: 'Description',
      imageId: 'ImageId',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
      instanceType: 'InstanceType',
      cpu: 'Cpu',
      memory: 'Memory',
      hostName: 'HostName',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      status: 'Status',
      serialNumber: 'SerialNumber',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      vlanId: 'VlanId',
      creationTime: 'CreationTime',
      startTime: 'StartTime',
      instanceNetworkType: 'InstanceNetworkType',
      instanceChargeType: 'InstanceChargeType',
      saleCycle: 'SaleCycle',
      expiredTime: 'ExpiredTime',
      autoReleaseTime: 'AutoReleaseTime',
      ioOptimized: 'IoOptimized',
      deviceAvailable: 'DeviceAvailable',
      instanceTypeFamily: 'InstanceTypeFamily',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageAmount: 'LocalStorageAmount',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      spotDuration: 'SpotDuration',
      resourceGroupId: 'ResourceGroupId',
      keyPairName: 'KeyPairName',
      recyclable: 'Recyclable',
      hpcClusterId: 'HpcClusterId',
      stoppedMode: 'StoppedMode',
      creditSpecification: 'CreditSpecification',
      deletionProtection: 'DeletionProtection',
      networkInterfaces: 'NetworkInterfaces',
      operationLocks: 'OperationLocks',
      tags: 'Tags',
      vpcAttributes: 'VpcAttributes',
      eipAddress: 'EipAddress',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      ecsCapacityReservationAttr: 'EcsCapacityReservationAttr',
      dedicatedInstanceAttribute: 'DedicatedInstanceAttribute',
      cpuOptions: 'CpuOptions',
      metadataOptions: 'MetadataOptions',
      securityGroupIds: 'SecurityGroupIds',
      publicIpAddress: 'PublicIpAddress',
      innerIpAddress: 'InnerIpAddress',
      rdmaIpAddress: 'RdmaIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      description: 'string',
      imageId: 'string',
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      regionId: 'string',
      zoneId: 'string',
      clusterId: 'string',
      instanceType: 'string',
      cpu: 'number',
      memory: 'number',
      hostName: 'string',
      deploymentSetId: 'string',
      deploymentSetGroupNo: 'number',
      status: 'string',
      serialNumber: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      vlanId: 'string',
      creationTime: 'string',
      startTime: 'string',
      instanceNetworkType: 'string',
      instanceChargeType: 'string',
      saleCycle: 'string',
      expiredTime: 'string',
      autoReleaseTime: 'string',
      ioOptimized: 'boolean',
      deviceAvailable: 'boolean',
      instanceTypeFamily: 'string',
      localStorageCapacity: 'number',
      localStorageAmount: 'number',
      GPUAmount: 'number',
      GPUSpec: 'string',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      spotDuration: 'number',
      resourceGroupId: 'string',
      keyPairName: 'string',
      recyclable: 'boolean',
      hpcClusterId: 'string',
      stoppedMode: 'string',
      creditSpecification: 'string',
      deletionProtection: 'boolean',
      networkInterfaces: DescribeInstancesResponseInstancesInstanceNetworkInterfaces,
      operationLocks: DescribeInstancesResponseInstancesInstanceOperationLocks,
      tags: DescribeInstancesResponseInstancesInstanceTags,
      vpcAttributes: DescribeInstancesResponseInstancesInstanceVpcAttributes,
      eipAddress: DescribeInstancesResponseInstancesInstanceEipAddress,
      dedicatedHostAttribute: DescribeInstancesResponseInstancesInstanceDedicatedHostAttribute,
      ecsCapacityReservationAttr: DescribeInstancesResponseInstancesInstanceEcsCapacityReservationAttr,
      dedicatedInstanceAttribute: DescribeInstancesResponseInstancesInstanceDedicatedInstanceAttribute,
      cpuOptions: DescribeInstancesResponseInstancesInstanceCpuOptions,
      metadataOptions: DescribeInstancesResponseInstancesInstanceMetadataOptions,
      securityGroupIds: DescribeInstancesResponseInstancesInstanceSecurityGroupIds,
      publicIpAddress: DescribeInstancesResponseInstancesInstancePublicIpAddress,
      innerIpAddress: DescribeInstancesResponseInstancesInstanceInnerIpAddress,
      rdmaIpAddress: DescribeInstancesResponseInstancesInstanceRdmaIpAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstances extends $tea.Model {
  instance: DescribeInstancesResponseInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData extends $tea.Model {
  instanceId: string;
  CPU: number;
  intranetRX: number;
  intranetTX: number;
  intranetBandwidth: number;
  internetRX: number;
  internetTX: number;
  internetBandwidth: number;
  IOPSRead: number;
  IOPSWrite: number;
  BPSRead: number;
  BPSWrite: number;
  CPUCreditUsage: number;
  CPUCreditBalance: number;
  CPUAdvanceCreditBalance: number;
  CPUNotpaidSurplusCreditUsage: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      CPU: 'CPU',
      intranetRX: 'IntranetRX',
      intranetTX: 'IntranetTX',
      intranetBandwidth: 'IntranetBandwidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      internetBandwidth: 'InternetBandwidth',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      BPSRead: 'BPSRead',
      BPSWrite: 'BPSWrite',
      CPUCreditUsage: 'CPUCreditUsage',
      CPUCreditBalance: 'CPUCreditBalance',
      CPUAdvanceCreditBalance: 'CPUAdvanceCreditBalance',
      CPUNotpaidSurplusCreditUsage: 'CPUNotpaidSurplusCreditUsage',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      CPU: 'number',
      intranetRX: 'number',
      intranetTX: 'number',
      intranetBandwidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      internetBandwidth: 'number',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      BPSRead: 'number',
      BPSWrite: 'number',
      CPUCreditUsage: 'number',
      CPUCreditBalance: 'number',
      CPUAdvanceCreditBalance: 'number',
      CPUNotpaidSurplusCreditUsage: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseMonitorData extends $tea.Model {
  instanceMonitorData: DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseMonitorDataInstanceMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseOperationLocksLockReason extends $tea.Model {
  lockReason: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseOperationLocks extends $tea.Model {
  lockReason: DescribeInstanceAttributeResponseOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseVpcAttributesPrivateIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstanceAttributeResponseVpcAttributes extends $tea.Model {
  vpcId: string;
  vSwitchId: string;
  natIpAddress: string;
  privateIpAddress: DescribeInstanceAttributeResponseVpcAttributesPrivateIpAddress;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vSwitchId: 'string',
      natIpAddress: 'string',
      privateIpAddress: DescribeInstanceAttributeResponseVpcAttributesPrivateIpAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseEipAddress extends $tea.Model {
  allocationId: string;
  ipAddress: string;
  bandwidth: number;
  internetChargeType: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseDedicatedHostAttribute extends $tea.Model {
  dedicatedHostId: string;
  dedicatedHostName: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseSecurityGroupIds extends $tea.Model {
  securityGroupId: string[];
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

export class DescribeInstanceAttributeResponsePublicIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeInstanceAttributeResponseInnerIpAddress extends $tea.Model {
  ipAddress: string[];
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

export class DescribeImageSharePermissionResponseShareGroupsShareGroup extends $tea.Model {
  group: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseShareGroups extends $tea.Model {
  shareGroup: DescribeImageSharePermissionResponseShareGroupsShareGroup[];
  static names(): { [key: string]: string } {
    return {
      shareGroup: 'ShareGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareGroup: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseShareGroupsShareGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseAccountsAccount extends $tea.Model {
  aliyunId: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseAccounts extends $tea.Model {
  account: DescribeImageSharePermissionResponseAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequestFilter extends $tea.Model {
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

export class DescribeImagesResponseImagesImageDiskDeviceMappingsDiskDeviceMapping extends $tea.Model {
  snapshotId: string;
  size: string;
  device: string;
  type: string;
  format: string;
  importOSSBucket: string;
  importOSSObject: string;
  progress: string;
  remainTime: number;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      type: 'Type',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
      progress: 'Progress',
      remainTime: 'RemainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      size: 'string',
      device: 'string',
      type: 'string',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
      progress: 'string',
      remainTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImagesImageDiskDeviceMappings extends $tea.Model {
  diskDeviceMapping: DescribeImagesResponseImagesImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImagesResponseImagesImageDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImagesImageTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImagesImageTags extends $tea.Model {
  tag: DescribeImagesResponseImagesImageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImagesResponseImagesImageTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImagesImage extends $tea.Model {
  progress: string;
  imageId: string;
  imageName: string;
  imageFamily: string;
  imageVersion: string;
  description: string;
  size: number;
  imageOwnerAlias: string;
  isSupportIoOptimized: boolean;
  isSupportCloudinit: boolean;
  OSName: string;
  OSNameEn: string;
  architecture: string;
  status: string;
  productCode: string;
  isSubscribed: boolean;
  creationTime: string;
  isSelfShared: string;
  OSType: string;
  platform: string;
  usage: string;
  isCopied: boolean;
  resourceGroupId: string;
  diskDeviceMappings: DescribeImagesResponseImagesImageDiskDeviceMappings;
  tags: DescribeImagesResponseImagesImageTags;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageFamily: 'ImageFamily',
      imageVersion: 'ImageVersion',
      description: 'Description',
      size: 'Size',
      imageOwnerAlias: 'ImageOwnerAlias',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      isSupportCloudinit: 'IsSupportCloudinit',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      architecture: 'Architecture',
      status: 'Status',
      productCode: 'ProductCode',
      isSubscribed: 'IsSubscribed',
      creationTime: 'CreationTime',
      isSelfShared: 'IsSelfShared',
      OSType: 'OSType',
      platform: 'Platform',
      usage: 'Usage',
      isCopied: 'IsCopied',
      resourceGroupId: 'ResourceGroupId',
      diskDeviceMappings: 'DiskDeviceMappings',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      imageId: 'string',
      imageName: 'string',
      imageFamily: 'string',
      imageVersion: 'string',
      description: 'string',
      size: 'number',
      imageOwnerAlias: 'string',
      isSupportIoOptimized: 'boolean',
      isSupportCloudinit: 'boolean',
      OSName: 'string',
      OSNameEn: 'string',
      architecture: 'string',
      status: 'string',
      productCode: 'string',
      isSubscribed: 'boolean',
      creationTime: 'string',
      isSelfShared: 'string',
      OSType: 'string',
      platform: 'string',
      usage: 'string',
      isCopied: 'boolean',
      resourceGroupId: 'string',
      diskDeviceMappings: DescribeImagesResponseImagesImageDiskDeviceMappings,
      tags: DescribeImagesResponseImagesImageTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImages extends $tea.Model {
  image: DescribeImagesResponseImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImagesResponseImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponseEipMonitorDatasEipMonitorData extends $tea.Model {
  eipRX: number;
  eipTX: number;
  eipFlow: number;
  eipBandwidth: number;
  eipPackets: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      eipRX: 'EipRX',
      eipTX: 'EipTX',
      eipFlow: 'EipFlow',
      eipBandwidth: 'EipBandwidth',
      eipPackets: 'EipPackets',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipRX: 'number',
      eipTX: 'number',
      eipFlow: 'number',
      eipBandwidth: 'number',
      eipPackets: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponseEipMonitorDatas extends $tea.Model {
  eipMonitorData: DescribeEipMonitorDataResponseEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeEipMonitorDataResponseEipMonitorDatasEipMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequestFilter extends $tea.Model {
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

export class DescribeEipAddressesResponseEipAddressesEipAddressOperationLocksLockReason extends $tea.Model {
  lockReason: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseEipAddressesEipAddressOperationLocks extends $tea.Model {
  lockReason: DescribeEipAddressesResponseEipAddressesEipAddressOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeEipAddressesResponseEipAddressesEipAddressOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseEipAddressesEipAddress extends $tea.Model {
  regionId: string;
  ipAddress: string;
  allocationId: string;
  status: string;
  instanceId: string;
  bandwidth: string;
  eipBandwidth: string;
  internetChargeType: string;
  allocationTime: string;
  instanceType: string;
  chargeType: string;
  expiredTime: string;
  operationLocks: DescribeEipAddressesResponseEipAddressesEipAddressOperationLocks;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipAddress: 'IpAddress',
      allocationId: 'AllocationId',
      status: 'Status',
      instanceId: 'InstanceId',
      bandwidth: 'Bandwidth',
      eipBandwidth: 'EipBandwidth',
      internetChargeType: 'InternetChargeType',
      allocationTime: 'AllocationTime',
      instanceType: 'InstanceType',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      operationLocks: 'OperationLocks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipAddress: 'string',
      allocationId: 'string',
      status: 'string',
      instanceId: 'string',
      bandwidth: 'string',
      eipBandwidth: 'string',
      internetChargeType: 'string',
      allocationTime: 'string',
      instanceType: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      operationLocks: DescribeEipAddressesResponseEipAddressesEipAddressOperationLocks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseEipAddresses extends $tea.Model {
  eipAddress: DescribeEipAddressesResponseEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksRequestFilter extends $tea.Model {
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

export class DescribeDisksRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskOperationLocksOperationLock extends $tea.Model {
  lockReason: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskOperationLocks extends $tea.Model {
  operationLock: DescribeDisksResponseDisksDiskOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDisksResponseDisksDiskOperationLocksOperationLock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskMountInstancesMountInstance extends $tea.Model {
  instanceId: string;
  device: string;
  attachedTime: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      device: 'Device',
      attachedTime: 'AttachedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      device: 'string',
      attachedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskMountInstances extends $tea.Model {
  mountInstance: DescribeDisksResponseDisksDiskMountInstancesMountInstance[];
  static names(): { [key: string]: string } {
    return {
      mountInstance: 'MountInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountInstance: { 'type': 'array', 'itemType': DescribeDisksResponseDisksDiskMountInstancesMountInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskTagsTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDiskTags extends $tea.Model {
  tag: DescribeDisksResponseDisksDiskTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDisksResponseDisksDiskTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisksDisk extends $tea.Model {
  diskId: string;
  regionId: string;
  zoneId: string;
  diskName: string;
  description: string;
  type: string;
  category: string;
  size: number;
  imageId: string;
  sourceSnapshotId: string;
  autoSnapshotPolicyId: string;
  productCode: string;
  portable: boolean;
  status: string;
  instanceId: string;
  device: string;
  deleteWithInstance: boolean;
  deleteAutoSnapshot: boolean;
  enableAutoSnapshot: boolean;
  enableAutomatedSnapshotPolicy: boolean;
  creationTime: string;
  attachedTime: string;
  detachedTime: string;
  diskChargeType: string;
  expiredTime: string;
  resourceGroupId: string;
  encrypted: boolean;
  storageSetId: string;
  storageSetPartitionNumber: number;
  mountInstanceNum: number;
  IOPS: number;
  IOPSRead: number;
  IOPSWrite: number;
  KMSKeyId: string;
  performanceLevel: string;
  bdfId: string;
  serialNumber: string;
  operationLocks: DescribeDisksResponseDisksDiskOperationLocks;
  mountInstances: DescribeDisksResponseDisksDiskMountInstances;
  tags: DescribeDisksResponseDisksDiskTags;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      diskName: 'DiskName',
      description: 'Description',
      type: 'Type',
      category: 'Category',
      size: 'Size',
      imageId: 'ImageId',
      sourceSnapshotId: 'SourceSnapshotId',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      productCode: 'ProductCode',
      portable: 'Portable',
      status: 'Status',
      instanceId: 'InstanceId',
      device: 'Device',
      deleteWithInstance: 'DeleteWithInstance',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      enableAutomatedSnapshotPolicy: 'EnableAutomatedSnapshotPolicy',
      creationTime: 'CreationTime',
      attachedTime: 'AttachedTime',
      detachedTime: 'DetachedTime',
      diskChargeType: 'DiskChargeType',
      expiredTime: 'ExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      encrypted: 'Encrypted',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      mountInstanceNum: 'MountInstanceNum',
      IOPS: 'IOPS',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      bdfId: 'BdfId',
      serialNumber: 'SerialNumber',
      operationLocks: 'OperationLocks',
      mountInstances: 'MountInstances',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      regionId: 'string',
      zoneId: 'string',
      diskName: 'string',
      description: 'string',
      type: 'string',
      category: 'string',
      size: 'number',
      imageId: 'string',
      sourceSnapshotId: 'string',
      autoSnapshotPolicyId: 'string',
      productCode: 'string',
      portable: 'boolean',
      status: 'string',
      instanceId: 'string',
      device: 'string',
      deleteWithInstance: 'boolean',
      deleteAutoSnapshot: 'boolean',
      enableAutoSnapshot: 'boolean',
      enableAutomatedSnapshotPolicy: 'boolean',
      creationTime: 'string',
      attachedTime: 'string',
      detachedTime: 'string',
      diskChargeType: 'string',
      expiredTime: 'string',
      resourceGroupId: 'string',
      encrypted: 'boolean',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      mountInstanceNum: 'number',
      IOPS: 'number',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      bdfId: 'string',
      serialNumber: 'string',
      operationLocks: DescribeDisksResponseDisksDiskOperationLocks,
      mountInstances: DescribeDisksResponseDisksDiskMountInstances,
      tags: DescribeDisksResponseDisksDiskTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseDisks extends $tea.Model {
  disk: DescribeDisksResponseDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDisksResponseDisksDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseMonitorDataDiskMonitorData extends $tea.Model {
  diskId: string;
  IOPSRead: number;
  IOPSWrite: number;
  IOPSTotal: number;
  BPSRead: number;
  BPSWrite: number;
  BPSTotal: number;
  latencyRead: number;
  latencyWrite: number;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      IOPSTotal: 'IOPSTotal',
      BPSRead: 'BPSRead',
      BPSWrite: 'BPSWrite',
      BPSTotal: 'BPSTotal',
      latencyRead: 'LatencyRead',
      latencyWrite: 'LatencyWrite',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      IOPSTotal: 'number',
      BPSRead: 'number',
      BPSWrite: 'number',
      BPSTotal: 'number',
      latencyRead: 'number',
      latencyWrite: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseMonitorData extends $tea.Model {
  diskMonitorData: DescribeDiskMonitorDataResponseMonitorDataDiskMonitorData[];
  static names(): { [key: string]: string } {
    return {
      diskMonitorData: 'DiskMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskMonitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseMonitorDataDiskMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseClustersCluster extends $tea.Model {
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

export class DescribeClustersResponseClusters extends $tea.Model {
  cluster: DescribeClustersResponseClustersCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': DescribeClustersResponseClustersCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryRequestNextHopList extends $tea.Model {
  nextHopType?: string;
  nextHopId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopType: 'NextHopType',
      nextHopId: 'NextHopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopType: 'string',
      nextHopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryRequestNextHopList extends $tea.Model {
  nextHopType?: string;
  nextHopId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopType: 'NextHopType',
      nextHopId: 'NextHopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopType: 'string',
      nextHopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestSystemDisk extends $tea.Model {
  size?: number;
  category?: string;
  diskName?: string;
  description?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      category: 'Category',
      diskName: 'DiskName',
      description: 'Description',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      category: 'string',
      diskName: 'string',
      description: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestDataDisk extends $tea.Model {
  size?: number;
  snapshotId?: string;
  category?: string;
  diskName?: string;
  description?: string;
  device?: string;
  deleteWithInstance?: boolean;
  encrypted?: boolean;
  KMSKeyId?: string;
  performanceLevel?: string;
  encryptAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      category: 'Category',
      diskName: 'DiskName',
      description: 'Description',
      device: 'Device',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      encryptAlgorithm: 'EncryptAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      category: 'string',
      diskName: 'string',
      description: 'string',
      device: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      encryptAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestArn extends $tea.Model {
  assumeRoleFor?: number;
  rolearn?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      rolearn: 'Rolearn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      rolearn: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequestDiskDeviceMapping extends $tea.Model {
  size?: number;
  snapshotId?: string;
  device?: string;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      snapshotId: 'SnapshotId',
      device: 'Device',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      snapshotId: 'string',
      device: 'string',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequestTag extends $tea.Model {
  value?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequestArn extends $tea.Model {
  assumeRoleFor?: number;
  rolearn?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      rolearn: 'Rolearn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      rolearn: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageRequestTag extends $tea.Model {
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


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-beijing': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "ecs-cn-hangzhou.aliyuncs.com",
      'ap-southeast-1': "ecs-cn-hangzhou.aliyuncs.com",
      'us-west-1': "ecs-cn-hangzhou.aliyuncs.com",
      'us-east-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shanghai-finance-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "ecs.aliyuncs.com",
      'ap-northeast-2-pop': "ecs.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "ecs.aliyuncs.com",
      'cn-beijing-finance-pop': "ecs.aliyuncs.com",
      'cn-beijing-gov-1': "ecs.aliyuncs.com",
      'cn-beijing-nu16-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-edge-1': "ecs.cn-qingdao-nebula.aliyuncs.com",
      'cn-fujian': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-haidian-cm12-c01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-finance': "ecs.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-test-306': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-hongkong-finance-pop': "ecs.aliyuncs.com",
      'cn-shanghai-et15-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shanghai-et2-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shanghai-inner': "ecs.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-inner': "ecs.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-wuhan': "ecs.aliyuncs.com",
      'cn-yushanfang': "ecs.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ecs-cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ecs.cn-zhangjiakou.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ecs.cn-qingdao-nebula.aliyuncs.com",
      'eu-west-1-oxs': "ecs.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "ecs.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async releaseCapacityReservationWithOptions(request: ReleaseCapacityReservationRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseCapacityReservationResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseCapacityReservationResponse>(await this.doRequest("ReleaseCapacityReservation", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReleaseCapacityReservationResponse({}));
  }

  async releaseCapacityReservation(request: ReleaseCapacityReservationRequest): Promise<ReleaseCapacityReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseCapacityReservationWithOptions(request, runtime);
  }

  async describeCapacityReservationsWithOptions(request: DescribeCapacityReservationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapacityReservationsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCapacityReservationsResponse>(await this.doRequest("DescribeCapacityReservations", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeCapacityReservationsResponse({}));
  }

  async describeCapacityReservations(request: DescribeCapacityReservationsRequest): Promise<DescribeCapacityReservationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapacityReservationsWithOptions(request, runtime);
  }

  async describeCapacityReservationInstancesWithOptions(request: DescribeCapacityReservationInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapacityReservationInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCapacityReservationInstancesResponse>(await this.doRequest("DescribeCapacityReservationInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeCapacityReservationInstancesResponse({}));
  }

  async describeCapacityReservationInstances(request: DescribeCapacityReservationInstancesRequest): Promise<DescribeCapacityReservationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapacityReservationInstancesWithOptions(request, runtime);
  }

  async createCapacityReservationWithOptions(request: CreateCapacityReservationRequest, runtime: $Util.RuntimeOptions): Promise<CreateCapacityReservationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCapacityReservationResponse>(await this.doRequest("CreateCapacityReservation", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateCapacityReservationResponse({}));
  }

  async createCapacityReservation(request: CreateCapacityReservationRequest): Promise<CreateCapacityReservationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCapacityReservationWithOptions(request, runtime);
  }

  async startElasticityAssuranceWithOptions(request: StartElasticityAssuranceRequest, runtime: $Util.RuntimeOptions): Promise<StartElasticityAssuranceResponse> {
    Util.validateModel(request);
    return $tea.cast<StartElasticityAssuranceResponse>(await this.doRequest("StartElasticityAssurance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StartElasticityAssuranceResponse({}));
  }

  async startElasticityAssurance(request: StartElasticityAssuranceRequest): Promise<StartElasticityAssuranceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startElasticityAssuranceWithOptions(request, runtime);
  }

  async modifyInstanceAttachmentAttributesWithOptions(request: ModifyInstanceAttachmentAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttachmentAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceAttachmentAttributesResponse>(await this.doRequest("ModifyInstanceAttachmentAttributes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceAttachmentAttributesResponse({}));
  }

  async modifyInstanceAttachmentAttributes(request: ModifyInstanceAttachmentAttributesRequest): Promise<ModifyInstanceAttachmentAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttachmentAttributesWithOptions(request, runtime);
  }

  async describeInstanceAttachmentAttributesWithOptions(request: DescribeInstanceAttachmentAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttachmentAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceAttachmentAttributesResponse>(await this.doRequest("DescribeInstanceAttachmentAttributes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceAttachmentAttributesResponse({}));
  }

  async describeInstanceAttachmentAttributes(request: DescribeInstanceAttachmentAttributesRequest): Promise<DescribeInstanceAttachmentAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttachmentAttributesWithOptions(request, runtime);
  }

  async describeElasticityAssurancesWithOptions(request: DescribeElasticityAssurancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticityAssurancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeElasticityAssurancesResponse>(await this.doRequest("DescribeElasticityAssurances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeElasticityAssurancesResponse({}));
  }

  async describeElasticityAssurances(request: DescribeElasticityAssurancesRequest): Promise<DescribeElasticityAssurancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticityAssurancesWithOptions(request, runtime);
  }

  async describeElasticityAssuranceInstancesWithOptions(request: DescribeElasticityAssuranceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticityAssuranceInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeElasticityAssuranceInstancesResponse>(await this.doRequest("DescribeElasticityAssuranceInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeElasticityAssuranceInstancesResponse({}));
  }

  async describeElasticityAssuranceInstances(request: DescribeElasticityAssuranceInstancesRequest): Promise<DescribeElasticityAssuranceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticityAssuranceInstancesWithOptions(request, runtime);
  }

  async createElasticityAssuranceWithOptions(request: CreateElasticityAssuranceRequest, runtime: $Util.RuntimeOptions): Promise<CreateElasticityAssuranceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateElasticityAssuranceResponse>(await this.doRequest("CreateElasticityAssurance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateElasticityAssuranceResponse({}));
  }

  async createElasticityAssurance(request: CreateElasticityAssuranceRequest): Promise<CreateElasticityAssuranceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticityAssuranceWithOptions(request, runtime);
  }

  async sendFileWithOptions(request: SendFileRequest, runtime: $Util.RuntimeOptions): Promise<SendFileResponse> {
    Util.validateModel(request);
    return $tea.cast<SendFileResponse>(await this.doRequest("SendFile", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new SendFileResponse({}));
  }

  async sendFile(request: SendFileRequest): Promise<SendFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  async describeSendFileResultsWithOptions(request: DescribeSendFileResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSendFileResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSendFileResultsResponse>(await this.doRequest("DescribeSendFileResults", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSendFileResultsResponse({}));
  }

  async describeSendFileResults(request: DescribeSendFileResultsRequest): Promise<DescribeSendFileResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSendFileResultsWithOptions(request, runtime);
  }

  async modifyDedicatedHostClusterAttributeWithOptions(request: ModifyDedicatedHostClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostClusterAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDedicatedHostClusterAttributeResponse>(await this.doRequest("ModifyDedicatedHostClusterAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDedicatedHostClusterAttributeResponse({}));
  }

  async modifyDedicatedHostClusterAttribute(request: ModifyDedicatedHostClusterAttributeRequest): Promise<ModifyDedicatedHostClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostClusterAttributeWithOptions(request, runtime);
  }

  async describeDedicatedHostClustersWithOptions(request: DescribeDedicatedHostClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostClustersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDedicatedHostClustersResponse>(await this.doRequest("DescribeDedicatedHostClusters", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDedicatedHostClustersResponse({}));
  }

  async describeDedicatedHostClusters(request: DescribeDedicatedHostClustersRequest): Promise<DescribeDedicatedHostClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostClustersWithOptions(request, runtime);
  }

  async deleteDedicatedHostClusterWithOptions(request: DeleteDedicatedHostClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDedicatedHostClusterResponse>(await this.doRequest("DeleteDedicatedHostCluster", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteDedicatedHostClusterResponse({}));
  }

  async deleteDedicatedHostCluster(request: DeleteDedicatedHostClusterRequest): Promise<DeleteDedicatedHostClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostClusterWithOptions(request, runtime);
  }

  async createDedicatedHostClusterWithOptions(request: CreateDedicatedHostClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDedicatedHostClusterResponse>(await this.doRequest("CreateDedicatedHostCluster", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateDedicatedHostClusterResponse({}));
  }

  async createDedicatedHostCluster(request: CreateDedicatedHostClusterRequest): Promise<CreateDedicatedHostClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostClusterWithOptions(request, runtime);
  }

  async describeDeploymentSetSupportedInstanceTypeFamilyWithOptions(request: DescribeDeploymentSetSupportedInstanceTypeFamilyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeploymentSetSupportedInstanceTypeFamilyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDeploymentSetSupportedInstanceTypeFamilyResponse>(await this.doRequest("DescribeDeploymentSetSupportedInstanceTypeFamily", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDeploymentSetSupportedInstanceTypeFamilyResponse({}));
  }

  async describeDeploymentSetSupportedInstanceTypeFamily(request: DescribeDeploymentSetSupportedInstanceTypeFamilyRequest): Promise<DescribeDeploymentSetSupportedInstanceTypeFamilyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeploymentSetSupportedInstanceTypeFamilyWithOptions(request, runtime);
  }

  async describeNetworkInterfaceAttributeWithOptions(request: DescribeNetworkInterfaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfaceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNetworkInterfaceAttributeResponse>(await this.doRequest("DescribeNetworkInterfaceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeNetworkInterfaceAttributeResponse({}));
  }

  async describeNetworkInterfaceAttribute(request: DescribeNetworkInterfaceAttributeRequest): Promise<DescribeNetworkInterfaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfaceAttributeWithOptions(request, runtime);
  }

  async copySnapshotWithOptions(request: CopySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CopySnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<CopySnapshotResponse>(await this.doRequest("CopySnapshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CopySnapshotResponse({}));
  }

  async copySnapshot(request: CopySnapshotRequest): Promise<CopySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copySnapshotWithOptions(request, runtime);
  }

  async modifyDedicatedHostsChargeTypeWithOptions(request: ModifyDedicatedHostsChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostsChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDedicatedHostsChargeTypeResponse>(await this.doRequest("ModifyDedicatedHostsChargeType", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDedicatedHostsChargeTypeResponse({}));
  }

  async modifyDedicatedHostsChargeType(request: ModifyDedicatedHostsChargeTypeRequest): Promise<ModifyDedicatedHostsChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostsChargeTypeWithOptions(request, runtime);
  }

  async modifyInstanceMetadataOptionsWithOptions(request: ModifyInstanceMetadataOptionsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMetadataOptionsResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceMetadataOptionsResponse>(await this.doRequest("ModifyInstanceMetadataOptions", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceMetadataOptionsResponse({}));
  }

  async modifyInstanceMetadataOptions(request: ModifyInstanceMetadataOptionsRequest): Promise<ModifyInstanceMetadataOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMetadataOptionsWithOptions(request, runtime);
  }

  async describeImageFromFamilyWithOptions(request: DescribeImageFromFamilyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageFromFamilyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImageFromFamilyResponse>(await this.doRequest("DescribeImageFromFamily", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeImageFromFamilyResponse({}));
  }

  async describeImageFromFamily(request: DescribeImageFromFamilyRequest): Promise<DescribeImageFromFamilyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageFromFamilyWithOptions(request, runtime);
  }

  async stopInstancesWithOptions(request: StopInstancesRequest, runtime: $Util.RuntimeOptions): Promise<StopInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInstancesResponse>(await this.doRequest("StopInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StopInstancesResponse({}));
  }

  async stopInstances(request: StopInstancesRequest): Promise<StopInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstancesWithOptions(request, runtime);
  }

  async startInstancesWithOptions(request: StartInstancesRequest, runtime: $Util.RuntimeOptions): Promise<StartInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<StartInstancesResponse>(await this.doRequest("StartInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StartInstancesResponse({}));
  }

  async startInstances(request: StartInstancesRequest): Promise<StartInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstancesWithOptions(request, runtime);
  }

  async rebootInstancesWithOptions(request: RebootInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootInstancesResponse>(await this.doRequest("RebootInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RebootInstancesResponse({}));
  }

  async rebootInstances(request: RebootInstancesRequest): Promise<RebootInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstancesWithOptions(request, runtime);
  }

  async redeployDedicatedHostWithOptions(request: RedeployDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<RedeployDedicatedHostResponse> {
    Util.validateModel(request);
    return $tea.cast<RedeployDedicatedHostResponse>(await this.doRequest("RedeployDedicatedHost", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RedeployDedicatedHostResponse({}));
  }

  async redeployDedicatedHost(request: RedeployDedicatedHostRequest): Promise<RedeployDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.redeployDedicatedHostWithOptions(request, runtime);
  }

  async modifyInstanceMaintenanceAttributesWithOptions(request: ModifyInstanceMaintenanceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMaintenanceAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceMaintenanceAttributesResponse>(await this.doRequest("ModifyInstanceMaintenanceAttributes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceMaintenanceAttributesResponse({}));
  }

  async modifyInstanceMaintenanceAttributes(request: ModifyInstanceMaintenanceAttributesRequest): Promise<ModifyInstanceMaintenanceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMaintenanceAttributesWithOptions(request, runtime);
  }

  async describeInstanceMaintenanceAttributesWithOptions(request: DescribeInstanceMaintenanceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMaintenanceAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceMaintenanceAttributesResponse>(await this.doRequest("DescribeInstanceMaintenanceAttributes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceMaintenanceAttributesResponse({}));
  }

  async describeInstanceMaintenanceAttributes(request: DescribeInstanceMaintenanceAttributesRequest): Promise<DescribeInstanceMaintenanceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMaintenanceAttributesWithOptions(request, runtime);
  }

  async modifyDemandWithOptions(request: ModifyDemandRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDemandResponse>(await this.doRequest("ModifyDemand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDemandResponse({}));
  }

  async modifyDemand(request: ModifyDemandRequest): Promise<ModifyDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDemandWithOptions(request, runtime);
  }

  async deleteDemandWithOptions(request: DeleteDemandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDemandResponse>(await this.doRequest("DeleteDemand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteDemandResponse({}));
  }

  async deleteDemand(request: DeleteDemandRequest): Promise<DeleteDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDemandWithOptions(request, runtime);
  }

  async createDemandWithOptions(request: CreateDemandRequest, runtime: $Util.RuntimeOptions): Promise<CreateDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDemandResponse>(await this.doRequest("CreateDemand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateDemandResponse({}));
  }

  async createDemand(request: CreateDemandRequest): Promise<CreateDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDemandWithOptions(request, runtime);
  }

  async purchaseStorageCapacityUnitWithOptions(request: PurchaseStorageCapacityUnitRequest, runtime: $Util.RuntimeOptions): Promise<PurchaseStorageCapacityUnitResponse> {
    Util.validateModel(request);
    return $tea.cast<PurchaseStorageCapacityUnitResponse>(await this.doRequest("PurchaseStorageCapacityUnit", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new PurchaseStorageCapacityUnitResponse({}));
  }

  async purchaseStorageCapacityUnit(request: PurchaseStorageCapacityUnitRequest): Promise<PurchaseStorageCapacityUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purchaseStorageCapacityUnitWithOptions(request, runtime);
  }

  async modifyStorageCapacityUnitAttributeWithOptions(request: ModifyStorageCapacityUnitAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStorageCapacityUnitAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyStorageCapacityUnitAttributeResponse>(await this.doRequest("ModifyStorageCapacityUnitAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyStorageCapacityUnitAttributeResponse({}));
  }

  async modifyStorageCapacityUnitAttribute(request: ModifyStorageCapacityUnitAttributeRequest): Promise<ModifyStorageCapacityUnitAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStorageCapacityUnitAttributeWithOptions(request, runtime);
  }

  async describeStorageCapacityUnitsWithOptions(request: DescribeStorageCapacityUnitsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageCapacityUnitsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeStorageCapacityUnitsResponse>(await this.doRequest("DescribeStorageCapacityUnits", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeStorageCapacityUnitsResponse({}));
  }

  async describeStorageCapacityUnits(request: DescribeStorageCapacityUnitsRequest): Promise<DescribeStorageCapacityUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageCapacityUnitsWithOptions(request, runtime);
  }

  async runCommandWithOptions(tmp: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(tmp);
    let request = new RunCommandShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.parameters)) {
      request.parametersShrink = Util.toJSONString(tmp.parameters);
    }

    return $tea.cast<RunCommandResponse>(await this.doRequest("RunCommand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RunCommandResponse({}));
  }

  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  async deleteInstancesWithOptions(request: DeleteInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteInstancesResponse>(await this.doRequest("DeleteInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteInstancesResponse({}));
  }

  async deleteInstances(request: DeleteInstancesRequest): Promise<DeleteInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstancesWithOptions(request, runtime);
  }

  async modifyStorageSetAttributeWithOptions(request: ModifyStorageSetAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStorageSetAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyStorageSetAttributeResponse>(await this.doRequest("ModifyStorageSetAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyStorageSetAttributeResponse({}));
  }

  async modifyStorageSetAttribute(request: ModifyStorageSetAttributeRequest): Promise<ModifyStorageSetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStorageSetAttributeWithOptions(request, runtime);
  }

  async describeStorageSetsWithOptions(request: DescribeStorageSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageSetsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeStorageSetsResponse>(await this.doRequest("DescribeStorageSets", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeStorageSetsResponse({}));
  }

  async describeStorageSets(request: DescribeStorageSetsRequest): Promise<DescribeStorageSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageSetsWithOptions(request, runtime);
  }

  async describeStorageSetDetailsWithOptions(request: DescribeStorageSetDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageSetDetailsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeStorageSetDetailsResponse>(await this.doRequest("DescribeStorageSetDetails", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeStorageSetDetailsResponse({}));
  }

  async describeStorageSetDetails(request: DescribeStorageSetDetailsRequest): Promise<DescribeStorageSetDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageSetDetailsWithOptions(request, runtime);
  }

  async deleteStorageSetWithOptions(request: DeleteStorageSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStorageSetResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteStorageSetResponse>(await this.doRequest("DeleteStorageSet", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteStorageSetResponse({}));
  }

  async deleteStorageSet(request: DeleteStorageSetRequest): Promise<DeleteStorageSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStorageSetWithOptions(request, runtime);
  }

  async createStorageSetWithOptions(request: CreateStorageSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateStorageSetResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateStorageSetResponse>(await this.doRequest("CreateStorageSet", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateStorageSetResponse({}));
  }

  async createStorageSet(request: CreateStorageSetRequest): Promise<CreateStorageSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStorageSetWithOptions(request, runtime);
  }

  async modifyDiskSpecWithOptions(request: ModifyDiskSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDiskSpecResponse>(await this.doRequest("ModifyDiskSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDiskSpecResponse({}));
  }

  async modifyDiskSpec(request: ModifyDiskSpecRequest): Promise<ModifyDiskSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskSpecWithOptions(request, runtime);
  }

  async modifyAutoProvisioningGroupWithOptions(request: ModifyAutoProvisioningGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoProvisioningGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyAutoProvisioningGroupResponse>(await this.doRequest("ModifyAutoProvisioningGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyAutoProvisioningGroupResponse({}));
  }

  async modifyAutoProvisioningGroup(request: ModifyAutoProvisioningGroupRequest): Promise<ModifyAutoProvisioningGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoProvisioningGroupWithOptions(request, runtime);
  }

  async describeAutoProvisioningGroupsWithOptions(request: DescribeAutoProvisioningGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoProvisioningGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAutoProvisioningGroupsResponse>(await this.doRequest("DescribeAutoProvisioningGroups", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAutoProvisioningGroupsResponse({}));
  }

  async describeAutoProvisioningGroups(request: DescribeAutoProvisioningGroupsRequest): Promise<DescribeAutoProvisioningGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoProvisioningGroupsWithOptions(request, runtime);
  }

  async describeAutoProvisioningGroupInstancesWithOptions(request: DescribeAutoProvisioningGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoProvisioningGroupInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAutoProvisioningGroupInstancesResponse>(await this.doRequest("DescribeAutoProvisioningGroupInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAutoProvisioningGroupInstancesResponse({}));
  }

  async describeAutoProvisioningGroupInstances(request: DescribeAutoProvisioningGroupInstancesRequest): Promise<DescribeAutoProvisioningGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoProvisioningGroupInstancesWithOptions(request, runtime);
  }

  async deleteAutoProvisioningGroupWithOptions(request: DeleteAutoProvisioningGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoProvisioningGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAutoProvisioningGroupResponse>(await this.doRequest("DeleteAutoProvisioningGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteAutoProvisioningGroupResponse({}));
  }

  async deleteAutoProvisioningGroup(request: DeleteAutoProvisioningGroupRequest): Promise<DeleteAutoProvisioningGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoProvisioningGroupWithOptions(request, runtime);
  }

  async createAutoProvisioningGroupWithOptions(request: CreateAutoProvisioningGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoProvisioningGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAutoProvisioningGroupResponse>(await this.doRequest("CreateAutoProvisioningGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateAutoProvisioningGroupResponse({}));
  }

  async createAutoProvisioningGroup(request: CreateAutoProvisioningGroupRequest): Promise<CreateAutoProvisioningGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoProvisioningGroupWithOptions(request, runtime);
  }

  async describeAutoProvisioningGroupHistoryWithOptions(request: DescribeAutoProvisioningGroupHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoProvisioningGroupHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAutoProvisioningGroupHistoryResponse>(await this.doRequest("DescribeAutoProvisioningGroupHistory", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAutoProvisioningGroupHistoryResponse({}));
  }

  async describeAutoProvisioningGroupHistory(request: DescribeAutoProvisioningGroupHistoryRequest): Promise<DescribeAutoProvisioningGroupHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoProvisioningGroupHistoryWithOptions(request, runtime);
  }

  async reportInstancesStatusWithOptions(request: ReportInstancesStatusRequest, runtime: $Util.RuntimeOptions): Promise<ReportInstancesStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<ReportInstancesStatusResponse>(await this.doRequest("ReportInstancesStatus", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReportInstancesStatusResponse({}));
  }

  async reportInstancesStatus(request: ReportInstancesStatusRequest): Promise<ReportInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportInstancesStatusWithOptions(request, runtime);
  }

  async modifyReservedInstanceAttributeWithOptions(request: ModifyReservedInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReservedInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyReservedInstanceAttributeResponse>(await this.doRequest("ModifyReservedInstanceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyReservedInstanceAttributeResponse({}));
  }

  async modifyReservedInstanceAttribute(request: ModifyReservedInstanceAttributeRequest): Promise<ModifyReservedInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReservedInstanceAttributeWithOptions(request, runtime);
  }

  async purchaseReservedInstancesOfferingWithOptions(request: PurchaseReservedInstancesOfferingRequest, runtime: $Util.RuntimeOptions): Promise<PurchaseReservedInstancesOfferingResponse> {
    Util.validateModel(request);
    return $tea.cast<PurchaseReservedInstancesOfferingResponse>(await this.doRequest("PurchaseReservedInstancesOffering", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new PurchaseReservedInstancesOfferingResponse({}));
  }

  async purchaseReservedInstancesOffering(request: PurchaseReservedInstancesOfferingRequest): Promise<PurchaseReservedInstancesOfferingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purchaseReservedInstancesOfferingWithOptions(request, runtime);
  }

  async modifyReservedInstancesWithOptions(request: ModifyReservedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReservedInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyReservedInstancesResponse>(await this.doRequest("ModifyReservedInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyReservedInstancesResponse({}));
  }

  async modifyReservedInstances(request: ModifyReservedInstancesRequest): Promise<ModifyReservedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReservedInstancesWithOptions(request, runtime);
  }

  async describeReservedInstancesWithOptions(request: DescribeReservedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReservedInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeReservedInstancesResponse>(await this.doRequest("DescribeReservedInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeReservedInstancesResponse({}));
  }

  async describeReservedInstances(request: DescribeReservedInstancesRequest): Promise<DescribeReservedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReservedInstancesWithOptions(request, runtime);
  }

  async describeDemandsWithOptions(request: DescribeDemandsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDemandsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDemandsResponse>(await this.doRequest("DescribeDemands", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDemandsResponse({}));
  }

  async describeDemands(request: DescribeDemandsRequest): Promise<DescribeDemandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDemandsWithOptions(request, runtime);
  }

  async importSnapshotWithOptions(request: ImportSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ImportSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportSnapshotResponse>(await this.doRequest("ImportSnapshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ImportSnapshotResponse({}));
  }

  async importSnapshot(request: ImportSnapshotRequest): Promise<ImportSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importSnapshotWithOptions(request, runtime);
  }

  async exportSnapshotWithOptions(request: ExportSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ExportSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportSnapshotResponse>(await this.doRequest("ExportSnapshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ExportSnapshotResponse({}));
  }

  async exportSnapshot(request: ExportSnapshotRequest): Promise<ExportSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportSnapshotWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async acceptInquiredSystemEventWithOptions(request: AcceptInquiredSystemEventRequest, runtime: $Util.RuntimeOptions): Promise<AcceptInquiredSystemEventResponse> {
    Util.validateModel(request);
    return $tea.cast<AcceptInquiredSystemEventResponse>(await this.doRequest("AcceptInquiredSystemEvent", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AcceptInquiredSystemEventResponse({}));
  }

  async acceptInquiredSystemEvent(request: AcceptInquiredSystemEventRequest): Promise<AcceptInquiredSystemEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptInquiredSystemEventWithOptions(request, runtime);
  }

  async redeployInstanceWithOptions(request: RedeployInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RedeployInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RedeployInstanceResponse>(await this.doRequest("RedeployInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RedeployInstanceResponse({}));
  }

  async redeployInstance(request: RedeployInstanceRequest): Promise<RedeployInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.redeployInstanceWithOptions(request, runtime);
  }

  async unassignIpv6AddressesWithOptions(request: UnassignIpv6AddressesRequest, runtime: $Util.RuntimeOptions): Promise<UnassignIpv6AddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<UnassignIpv6AddressesResponse>(await this.doRequest("UnassignIpv6Addresses", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new UnassignIpv6AddressesResponse({}));
  }

  async unassignIpv6Addresses(request: UnassignIpv6AddressesRequest): Promise<UnassignIpv6AddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassignIpv6AddressesWithOptions(request, runtime);
  }

  async assignIpv6AddressesWithOptions(request: AssignIpv6AddressesRequest, runtime: $Util.RuntimeOptions): Promise<AssignIpv6AddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<AssignIpv6AddressesResponse>(await this.doRequest("AssignIpv6Addresses", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AssignIpv6AddressesResponse({}));
  }

  async assignIpv6Addresses(request: AssignIpv6AddressesRequest): Promise<AssignIpv6AddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignIpv6AddressesWithOptions(request, runtime);
  }

  async describeInstanceTopologyWithOptions(request: DescribeInstanceTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTopologyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceTopologyResponse>(await this.doRequest("DescribeInstanceTopology", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceTopologyResponse({}));
  }

  async describeInstanceTopology(request: DescribeInstanceTopologyRequest): Promise<DescribeInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTopologyWithOptions(request, runtime);
  }

  async renewDedicatedHostsWithOptions(request: RenewDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<RenewDedicatedHostsResponse> {
    Util.validateModel(request);
    return $tea.cast<RenewDedicatedHostsResponse>(await this.doRequest("RenewDedicatedHosts", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RenewDedicatedHostsResponse({}));
  }

  async renewDedicatedHosts(request: RenewDedicatedHostsRequest): Promise<RenewDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDedicatedHostsWithOptions(request, runtime);
  }

  async releaseDedicatedHostWithOptions(request: ReleaseDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseDedicatedHostResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseDedicatedHostResponse>(await this.doRequest("ReleaseDedicatedHost", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReleaseDedicatedHostResponse({}));
  }

  async releaseDedicatedHost(request: ReleaseDedicatedHostRequest): Promise<ReleaseDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseDedicatedHostWithOptions(request, runtime);
  }

  async modifyInstanceDeploymentWithOptions(request: ModifyInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceDeploymentResponse>(await this.doRequest("ModifyInstanceDeployment", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceDeploymentResponse({}));
  }

  async modifyInstanceDeployment(request: ModifyInstanceDeploymentRequest): Promise<ModifyInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceDeploymentWithOptions(request, runtime);
  }

  async modifyDedicatedHostAutoRenewAttributeWithOptions(request: ModifyDedicatedHostAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAutoRenewAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDedicatedHostAutoRenewAttributeResponse>(await this.doRequest("ModifyDedicatedHostAutoRenewAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDedicatedHostAutoRenewAttributeResponse({}));
  }

  async modifyDedicatedHostAutoRenewAttribute(request: ModifyDedicatedHostAutoRenewAttributeRequest): Promise<ModifyDedicatedHostAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAutoRenewAttributeWithOptions(request, runtime);
  }

  async modifyDedicatedHostAutoReleaseTimeWithOptions(request: ModifyDedicatedHostAutoReleaseTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAutoReleaseTimeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDedicatedHostAutoReleaseTimeResponse>(await this.doRequest("ModifyDedicatedHostAutoReleaseTime", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDedicatedHostAutoReleaseTimeResponse({}));
  }

  async modifyDedicatedHostAutoReleaseTime(request: ModifyDedicatedHostAutoReleaseTimeRequest): Promise<ModifyDedicatedHostAutoReleaseTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAutoReleaseTimeWithOptions(request, runtime);
  }

  async modifyDedicatedHostAttributeWithOptions(request: ModifyDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDedicatedHostAttributeResponse>(await this.doRequest("ModifyDedicatedHostAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDedicatedHostAttributeResponse({}));
  }

  async modifyDedicatedHostAttribute(request: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAttributeWithOptions(request, runtime);
  }

  async describeDedicatedHostsWithOptions(request: DescribeDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDedicatedHostsResponse>(await this.doRequest("DescribeDedicatedHosts", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDedicatedHostsResponse({}));
  }

  async describeDedicatedHosts(request: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsWithOptions(request, runtime);
  }

  async describeDedicatedHostTypesWithOptions(request: DescribeDedicatedHostTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDedicatedHostTypesResponse>(await this.doRequest("DescribeDedicatedHostTypes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDedicatedHostTypesResponse({}));
  }

  async describeDedicatedHostTypes(request: DescribeDedicatedHostTypesRequest): Promise<DescribeDedicatedHostTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostTypesWithOptions(request, runtime);
  }

  async describeDedicatedHostAutoRenewWithOptions(request: DescribeDedicatedHostAutoRenewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostAutoRenewResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDedicatedHostAutoRenewResponse>(await this.doRequest("DescribeDedicatedHostAutoRenew", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDedicatedHostAutoRenewResponse({}));
  }

  async describeDedicatedHostAutoRenew(request: DescribeDedicatedHostAutoRenewRequest): Promise<DescribeDedicatedHostAutoRenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostAutoRenewWithOptions(request, runtime);
  }

  async allocateDedicatedHostsWithOptions(request: AllocateDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<AllocateDedicatedHostsResponse> {
    Util.validateModel(request);
    return $tea.cast<AllocateDedicatedHostsResponse>(await this.doRequest("AllocateDedicatedHosts", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AllocateDedicatedHostsResponse({}));
  }

  async allocateDedicatedHosts(request: AllocateDedicatedHostsRequest): Promise<AllocateDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateDedicatedHostsWithOptions(request, runtime);
  }

  async createSimulatedSystemEventsWithOptions(request: CreateSimulatedSystemEventsRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimulatedSystemEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSimulatedSystemEventsResponse>(await this.doRequest("CreateSimulatedSystemEvents", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateSimulatedSystemEventsResponse({}));
  }

  async createSimulatedSystemEvents(request: CreateSimulatedSystemEventsRequest): Promise<CreateSimulatedSystemEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimulatedSystemEventsWithOptions(request, runtime);
  }

  async cancelSimulatedSystemEventsWithOptions(request: CancelSimulatedSystemEventsRequest, runtime: $Util.RuntimeOptions): Promise<CancelSimulatedSystemEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelSimulatedSystemEventsResponse>(await this.doRequest("CancelSimulatedSystemEvents", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CancelSimulatedSystemEventsResponse({}));
  }

  async cancelSimulatedSystemEvents(request: CancelSimulatedSystemEventsRequest): Promise<CancelSimulatedSystemEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelSimulatedSystemEventsWithOptions(request, runtime);
  }

  async describeEniMonitorDataWithOptions(request: DescribeEniMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEniMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEniMonitorDataResponse>(await this.doRequest("DescribeEniMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeEniMonitorDataResponse({}));
  }

  async describeEniMonitorData(request: DescribeEniMonitorDataRequest): Promise<DescribeEniMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEniMonitorDataWithOptions(request, runtime);
  }

  async describeAccountAttributesWithOptions(request: DescribeAccountAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAccountAttributesResponse>(await this.doRequest("DescribeAccountAttributes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAccountAttributesResponse({}));
  }

  async describeAccountAttributes(request: DescribeAccountAttributesRequest): Promise<DescribeAccountAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAttributesWithOptions(request, runtime);
  }

  async modifyLaunchTemplateDefaultVersionWithOptions(request: ModifyLaunchTemplateDefaultVersionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLaunchTemplateDefaultVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyLaunchTemplateDefaultVersionResponse>(await this.doRequest("ModifyLaunchTemplateDefaultVersion", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyLaunchTemplateDefaultVersionResponse({}));
  }

  async modifyLaunchTemplateDefaultVersion(request: ModifyLaunchTemplateDefaultVersionRequest): Promise<ModifyLaunchTemplateDefaultVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLaunchTemplateDefaultVersionWithOptions(request, runtime);
  }

  async describeLaunchTemplatesWithOptions(request: DescribeLaunchTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLaunchTemplatesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLaunchTemplatesResponse>(await this.doRequest("DescribeLaunchTemplates", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeLaunchTemplatesResponse({}));
  }

  async describeLaunchTemplates(request: DescribeLaunchTemplatesRequest): Promise<DescribeLaunchTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLaunchTemplatesWithOptions(request, runtime);
  }

  async describeLaunchTemplateVersionsWithOptions(request: DescribeLaunchTemplateVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLaunchTemplateVersionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLaunchTemplateVersionsResponse>(await this.doRequest("DescribeLaunchTemplateVersions", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeLaunchTemplateVersionsResponse({}));
  }

  async describeLaunchTemplateVersions(request: DescribeLaunchTemplateVersionsRequest): Promise<DescribeLaunchTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLaunchTemplateVersionsWithOptions(request, runtime);
  }

  async deleteLaunchTemplateVersionWithOptions(request: DeleteLaunchTemplateVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLaunchTemplateVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLaunchTemplateVersionResponse>(await this.doRequest("DeleteLaunchTemplateVersion", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteLaunchTemplateVersionResponse({}));
  }

  async deleteLaunchTemplateVersion(request: DeleteLaunchTemplateVersionRequest): Promise<DeleteLaunchTemplateVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLaunchTemplateVersionWithOptions(request, runtime);
  }

  async deleteLaunchTemplateWithOptions(request: DeleteLaunchTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLaunchTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLaunchTemplateResponse>(await this.doRequest("DeleteLaunchTemplate", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteLaunchTemplateResponse({}));
  }

  async deleteLaunchTemplate(request: DeleteLaunchTemplateRequest): Promise<DeleteLaunchTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLaunchTemplateWithOptions(request, runtime);
  }

  async createLaunchTemplateVersionWithOptions(request: CreateLaunchTemplateVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateLaunchTemplateVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLaunchTemplateVersionResponse>(await this.doRequest("CreateLaunchTemplateVersion", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateLaunchTemplateVersionResponse({}));
  }

  async createLaunchTemplateVersion(request: CreateLaunchTemplateVersionRequest): Promise<CreateLaunchTemplateVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLaunchTemplateVersionWithOptions(request, runtime);
  }

  async createLaunchTemplateWithOptions(request: CreateLaunchTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateLaunchTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLaunchTemplateResponse>(await this.doRequest("CreateLaunchTemplate", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateLaunchTemplateResponse({}));
  }

  async createLaunchTemplate(request: CreateLaunchTemplateRequest): Promise<CreateLaunchTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLaunchTemplateWithOptions(request, runtime);
  }

  async installCloudAssistantWithOptions(request: InstallCloudAssistantRequest, runtime: $Util.RuntimeOptions): Promise<InstallCloudAssistantResponse> {
    Util.validateModel(request);
    return $tea.cast<InstallCloudAssistantResponse>(await this.doRequest("InstallCloudAssistant", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new InstallCloudAssistantResponse({}));
  }

  async installCloudAssistant(request: InstallCloudAssistantRequest): Promise<InstallCloudAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCloudAssistantWithOptions(request, runtime);
  }

  async describeCloudAssistantStatusWithOptions(request: DescribeCloudAssistantStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudAssistantStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCloudAssistantStatusResponse>(await this.doRequest("DescribeCloudAssistantStatus", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeCloudAssistantStatusResponse({}));
  }

  async describeCloudAssistantStatus(request: DescribeCloudAssistantStatusRequest): Promise<DescribeCloudAssistantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudAssistantStatusWithOptions(request, runtime);
  }

  async unassignPrivateIpAddressesWithOptions(request: UnassignPrivateIpAddressesRequest, runtime: $Util.RuntimeOptions): Promise<UnassignPrivateIpAddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<UnassignPrivateIpAddressesResponse>(await this.doRequest("UnassignPrivateIpAddresses", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new UnassignPrivateIpAddressesResponse({}));
  }

  async unassignPrivateIpAddresses(request: UnassignPrivateIpAddressesRequest): Promise<UnassignPrivateIpAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassignPrivateIpAddressesWithOptions(request, runtime);
  }

  async assignPrivateIpAddressesWithOptions(request: AssignPrivateIpAddressesRequest, runtime: $Util.RuntimeOptions): Promise<AssignPrivateIpAddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<AssignPrivateIpAddressesResponse>(await this.doRequest("AssignPrivateIpAddresses", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AssignPrivateIpAddressesResponse({}));
  }

  async assignPrivateIpAddresses(request: AssignPrivateIpAddressesRequest): Promise<AssignPrivateIpAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignPrivateIpAddressesWithOptions(request, runtime);
  }

  async describeNetworkInterfacePermissionsWithOptions(request: DescribeNetworkInterfacePermissionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfacePermissionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNetworkInterfacePermissionsResponse>(await this.doRequest("DescribeNetworkInterfacePermissions", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeNetworkInterfacePermissionsResponse({}));
  }

  async describeNetworkInterfacePermissions(request: DescribeNetworkInterfacePermissionsRequest): Promise<DescribeNetworkInterfacePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfacePermissionsWithOptions(request, runtime);
  }

  async deleteNetworkInterfacePermissionWithOptions(request: DeleteNetworkInterfacePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkInterfacePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteNetworkInterfacePermissionResponse>(await this.doRequest("DeleteNetworkInterfacePermission", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteNetworkInterfacePermissionResponse({}));
  }

  async deleteNetworkInterfacePermission(request: DeleteNetworkInterfacePermissionRequest): Promise<DeleteNetworkInterfacePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkInterfacePermissionWithOptions(request, runtime);
  }

  async createNetworkInterfacePermissionWithOptions(request: CreateNetworkInterfacePermissionRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkInterfacePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateNetworkInterfacePermissionResponse>(await this.doRequest("CreateNetworkInterfacePermission", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateNetworkInterfacePermissionResponse({}));
  }

  async createNetworkInterfacePermission(request: CreateNetworkInterfacePermissionRequest): Promise<CreateNetworkInterfacePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkInterfacePermissionWithOptions(request, runtime);
  }

  async getInstanceScreenshotWithOptions(request: GetInstanceScreenshotRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceScreenshotResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceScreenshotResponse>(await this.doRequest("GetInstanceScreenshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new GetInstanceScreenshotResponse({}));
  }

  async getInstanceScreenshot(request: GetInstanceScreenshotRequest): Promise<GetInstanceScreenshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceScreenshotWithOptions(request, runtime);
  }

  async getInstanceConsoleOutputWithOptions(request: GetInstanceConsoleOutputRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceConsoleOutputResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceConsoleOutputResponse>(await this.doRequest("GetInstanceConsoleOutput", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new GetInstanceConsoleOutputResponse({}));
  }

  async getInstanceConsoleOutput(request: GetInstanceConsoleOutputRequest): Promise<GetInstanceConsoleOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceConsoleOutputWithOptions(request, runtime);
  }

  async describeResourcesModificationWithOptions(request: DescribeResourcesModificationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcesModificationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcesModificationResponse>(await this.doRequest("DescribeResourcesModification", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeResourcesModificationResponse({}));
  }

  async describeResourcesModification(request: DescribeResourcesModificationRequest): Promise<DescribeResourcesModificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcesModificationWithOptions(request, runtime);
  }

  async describeBandwidthLimitationWithOptions(request: DescribeBandwidthLimitationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwidthLimitationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBandwidthLimitationResponse>(await this.doRequest("DescribeBandwidthLimitation", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeBandwidthLimitationResponse({}));
  }

  async describeBandwidthLimitation(request: DescribeBandwidthLimitationRequest): Promise<DescribeBandwidthLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthLimitationWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRequest("DescribeAvailableResource", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async reActivateInstancesWithOptions(request: ReActivateInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ReActivateInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ReActivateInstancesResponse>(await this.doRequest("ReActivateInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReActivateInstancesResponse({}));
  }

  async reActivateInstances(request: ReActivateInstancesRequest): Promise<ReActivateInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reActivateInstancesWithOptions(request, runtime);
  }

  async describeInstancesFullStatusWithOptions(request: DescribeInstancesFullStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesFullStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancesFullStatusResponse>(await this.doRequest("DescribeInstancesFullStatus", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstancesFullStatusResponse({}));
  }

  async describeInstancesFullStatus(request: DescribeInstancesFullStatusRequest): Promise<DescribeInstancesFullStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesFullStatusWithOptions(request, runtime);
  }

  async describeInstanceHistoryEventsWithOptions(request: DescribeInstanceHistoryEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceHistoryEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceHistoryEventsResponse>(await this.doRequest("DescribeInstanceHistoryEvents", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceHistoryEventsResponse({}));
  }

  async describeInstanceHistoryEvents(request: DescribeInstanceHistoryEventsRequest): Promise<DescribeInstanceHistoryEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceHistoryEventsWithOptions(request, runtime);
  }

  async describeDisksFullStatusWithOptions(request: DescribeDisksFullStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisksFullStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDisksFullStatusResponse>(await this.doRequest("DescribeDisksFullStatus", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDisksFullStatusResponse({}));
  }

  async describeDisksFullStatus(request: DescribeDisksFullStatusRequest): Promise<DescribeDisksFullStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisksFullStatusWithOptions(request, runtime);
  }

  async modifyUserBusinessBehaviorWithOptions(request: ModifyUserBusinessBehaviorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserBusinessBehaviorResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyUserBusinessBehaviorResponse>(await this.doRequest("ModifyUserBusinessBehavior", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyUserBusinessBehaviorResponse({}));
  }

  async modifyUserBusinessBehavior(request: ModifyUserBusinessBehaviorRequest): Promise<ModifyUserBusinessBehaviorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserBusinessBehaviorWithOptions(request, runtime);
  }

  async describeUserBusinessBehaviorWithOptions(request: DescribeUserBusinessBehaviorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBusinessBehaviorResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserBusinessBehaviorResponse>(await this.doRequest("DescribeUserBusinessBehavior", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeUserBusinessBehaviorResponse({}));
  }

  async describeUserBusinessBehavior(request: DescribeUserBusinessBehaviorRequest): Promise<DescribeUserBusinessBehaviorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBusinessBehaviorWithOptions(request, runtime);
  }

  async runInstancesWithOptions(request: RunInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RunInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<RunInstancesResponse>(await this.doRequest("RunInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RunInstancesResponse({}));
  }

  async runInstances(request: RunInstancesRequest): Promise<RunInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runInstancesWithOptions(request, runtime);
  }

  async convertNatPublicIpToEipWithOptions(request: ConvertNatPublicIpToEipRequest, runtime: $Util.RuntimeOptions): Promise<ConvertNatPublicIpToEipResponse> {
    Util.validateModel(request);
    return $tea.cast<ConvertNatPublicIpToEipResponse>(await this.doRequest("ConvertNatPublicIpToEip", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ConvertNatPublicIpToEipResponse({}));
  }

  async convertNatPublicIpToEip(request: ConvertNatPublicIpToEipRequest): Promise<ConvertNatPublicIpToEipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertNatPublicIpToEipWithOptions(request, runtime);
  }

  async modifyHpcClusterAttributeWithOptions(request: ModifyHpcClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHpcClusterAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyHpcClusterAttributeResponse>(await this.doRequest("ModifyHpcClusterAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyHpcClusterAttributeResponse({}));
  }

  async modifyHpcClusterAttribute(request: ModifyHpcClusterAttributeRequest): Promise<ModifyHpcClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHpcClusterAttributeWithOptions(request, runtime);
  }

  async describeHpcClustersWithOptions(request: DescribeHpcClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHpcClustersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHpcClustersResponse>(await this.doRequest("DescribeHpcClusters", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeHpcClustersResponse({}));
  }

  async describeHpcClusters(request: DescribeHpcClustersRequest): Promise<DescribeHpcClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHpcClustersWithOptions(request, runtime);
  }

  async deleteHpcClusterWithOptions(request: DeleteHpcClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHpcClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteHpcClusterResponse>(await this.doRequest("DeleteHpcCluster", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteHpcClusterResponse({}));
  }

  async deleteHpcCluster(request: DeleteHpcClusterRequest): Promise<DeleteHpcClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHpcClusterWithOptions(request, runtime);
  }

  async createHpcClusterWithOptions(request: CreateHpcClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateHpcClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateHpcClusterResponse>(await this.doRequest("CreateHpcCluster", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateHpcClusterResponse({}));
  }

  async createHpcCluster(request: CreateHpcClusterRequest): Promise<CreateHpcClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHpcClusterWithOptions(request, runtime);
  }

  async describeSnapshotsUsageWithOptions(request: DescribeSnapshotsUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotsUsageResponse>(await this.doRequest("DescribeSnapshotsUsage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotsUsageResponse({}));
  }

  async describeSnapshotsUsage(request: DescribeSnapshotsUsageRequest): Promise<DescribeSnapshotsUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsUsageWithOptions(request, runtime);
  }

  async describeSpotPriceHistoryWithOptions(request: DescribeSpotPriceHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpotPriceHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSpotPriceHistoryResponse>(await this.doRequest("DescribeSpotPriceHistory", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSpotPriceHistoryResponse({}));
  }

  async describeSpotPriceHistory(request: DescribeSpotPriceHistoryRequest): Promise<DescribeSpotPriceHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpotPriceHistoryWithOptions(request, runtime);
  }

  async stopInvocationWithOptions(request: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInvocationResponse>(await this.doRequest("StopInvocation", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StopInvocationResponse({}));
  }

  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  async modifyCommandWithOptions(request: ModifyCommandRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyCommandResponse>(await this.doRequest("ModifyCommand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyCommandResponse({}));
  }

  async modifyCommand(request: ModifyCommandRequest): Promise<ModifyCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommandWithOptions(request, runtime);
  }

  async invokeCommandWithOptions(tmp: InvokeCommandRequest, runtime: $Util.RuntimeOptions): Promise<InvokeCommandResponse> {
    Util.validateModel(tmp);
    let request = new InvokeCommandShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.parameters)) {
      request.parametersShrink = Util.toJSONString(tmp.parameters);
    }

    return $tea.cast<InvokeCommandResponse>(await this.doRequest("InvokeCommand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new InvokeCommandResponse({}));
  }

  async invokeCommand(request: InvokeCommandRequest): Promise<InvokeCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeCommandWithOptions(request, runtime);
  }

  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInvocationsResponse>(await this.doRequest("DescribeInvocations", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInvocationsResponse({}));
  }

  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeInvocationResultsWithOptions(request: DescribeInvocationResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInvocationResultsResponse>(await this.doRequest("DescribeInvocationResults", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInvocationResultsResponse({}));
  }

  async describeInvocationResults(request: DescribeInvocationResultsRequest): Promise<DescribeInvocationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationResultsWithOptions(request, runtime);
  }

  async describeCommandsWithOptions(request: DescribeCommandsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommandsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeCommandsResponse>(await this.doRequest("DescribeCommands", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeCommandsResponse({}));
  }

  async describeCommands(request: DescribeCommandsRequest): Promise<DescribeCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommandsWithOptions(request, runtime);
  }

  async deleteCommandWithOptions(request: DeleteCommandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCommandResponse>(await this.doRequest("DeleteCommand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteCommandResponse({}));
  }

  async deleteCommand(request: DeleteCommandRequest): Promise<DeleteCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommandWithOptions(request, runtime);
  }

  async createCommandWithOptions(request: CreateCommandRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCommandResponse>(await this.doRequest("CreateCommand", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateCommandResponse({}));
  }

  async createCommand(request: CreateCommandRequest): Promise<CreateCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  async modifySecurityGroupEgressRuleWithOptions(request: ModifySecurityGroupEgressRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupEgressRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySecurityGroupEgressRuleResponse>(await this.doRequest("ModifySecurityGroupEgressRule", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifySecurityGroupEgressRuleResponse({}));
  }

  async modifySecurityGroupEgressRule(request: ModifySecurityGroupEgressRuleRequest): Promise<ModifySecurityGroupEgressRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupEgressRuleWithOptions(request, runtime);
  }

  async modifyDiskChargeTypeWithOptions(request: ModifyDiskChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDiskChargeTypeResponse>(await this.doRequest("ModifyDiskChargeType", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDiskChargeTypeResponse({}));
  }

  async modifyDiskChargeType(request: ModifyDiskChargeTypeRequest): Promise<ModifyDiskChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskChargeTypeWithOptions(request, runtime);
  }

  async modifyNetworkInterfaceAttributeWithOptions(request: ModifyNetworkInterfaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkInterfaceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyNetworkInterfaceAttributeResponse>(await this.doRequest("ModifyNetworkInterfaceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyNetworkInterfaceAttributeResponse({}));
  }

  async modifyNetworkInterfaceAttribute(request: ModifyNetworkInterfaceAttributeRequest): Promise<ModifyNetworkInterfaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkInterfaceAttributeWithOptions(request, runtime);
  }

  async detachNetworkInterfaceWithOptions(request: DetachNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DetachNetworkInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachNetworkInterfaceResponse>(await this.doRequest("DetachNetworkInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DetachNetworkInterfaceResponse({}));
  }

  async detachNetworkInterface(request: DetachNetworkInterfaceRequest): Promise<DetachNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachNetworkInterfaceWithOptions(request, runtime);
  }

  async describeNetworkInterfacesWithOptions(request: DescribeNetworkInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfacesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNetworkInterfacesResponse>(await this.doRequest("DescribeNetworkInterfaces", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeNetworkInterfacesResponse({}));
  }

  async describeNetworkInterfaces(request: DescribeNetworkInterfacesRequest): Promise<DescribeNetworkInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfacesWithOptions(request, runtime);
  }

  async deleteNetworkInterfaceWithOptions(request: DeleteNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteNetworkInterfaceResponse>(await this.doRequest("DeleteNetworkInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteNetworkInterfaceResponse({}));
  }

  async deleteNetworkInterface(request: DeleteNetworkInterfaceRequest): Promise<DeleteNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkInterfaceWithOptions(request, runtime);
  }

  async createNetworkInterfaceWithOptions(request: CreateNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateNetworkInterfaceResponse>(await this.doRequest("CreateNetworkInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateNetworkInterfaceResponse({}));
  }

  async createNetworkInterface(request: CreateNetworkInterfaceRequest): Promise<CreateNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkInterfaceWithOptions(request, runtime);
  }

  async attachNetworkInterfaceWithOptions(request: AttachNetworkInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<AttachNetworkInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachNetworkInterfaceResponse>(await this.doRequest("AttachNetworkInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AttachNetworkInterfaceResponse({}));
  }

  async attachNetworkInterface(request: AttachNetworkInterfaceRequest): Promise<AttachNetworkInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachNetworkInterfaceWithOptions(request, runtime);
  }

  async describeRecommendInstanceTypeWithOptions(request: DescribeRecommendInstanceTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecommendInstanceTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRecommendInstanceTypeResponse>(await this.doRequest("DescribeRecommendInstanceType", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeRecommendInstanceTypeResponse({}));
  }

  async describeRecommendInstanceType(request: DescribeRecommendInstanceTypeRequest): Promise<DescribeRecommendInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecommendInstanceTypeWithOptions(request, runtime);
  }

  async modifyPrepayInstanceSpecWithOptions(request: ModifyPrepayInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPrepayInstanceSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyPrepayInstanceSpecResponse>(await this.doRequest("ModifyPrepayInstanceSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyPrepayInstanceSpecResponse({}));
  }

  async modifyPrepayInstanceSpec(request: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPrepayInstanceSpecWithOptions(request, runtime);
  }

  async modifyInstanceChargeTypeWithOptions(request: ModifyInstanceChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceChargeTypeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceChargeTypeResponse>(await this.doRequest("ModifyInstanceChargeType", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceChargeTypeResponse({}));
  }

  async modifyInstanceChargeType(request: ModifyInstanceChargeTypeRequest): Promise<ModifyInstanceChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceChargeTypeWithOptions(request, runtime);
  }

  async joinResourceGroupWithOptions(request: JoinResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinResourceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinResourceGroupResponse>(await this.doRequest("JoinResourceGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new JoinResourceGroupResponse({}));
  }

  async joinResourceGroup(request: JoinResourceGroupRequest): Promise<JoinResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinResourceGroupWithOptions(request, runtime);
  }

  async modifySecurityGroupPolicyWithOptions(request: ModifySecurityGroupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySecurityGroupPolicyResponse>(await this.doRequest("ModifySecurityGroupPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifySecurityGroupPolicyResponse({}));
  }

  async modifySecurityGroupPolicy(request: ModifySecurityGroupPolicyRequest): Promise<ModifySecurityGroupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupPolicyWithOptions(request, runtime);
  }

  async describeSecurityGroupReferencesWithOptions(request: DescribeSecurityGroupReferencesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupReferencesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSecurityGroupReferencesResponse>(await this.doRequest("DescribeSecurityGroupReferences", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSecurityGroupReferencesResponse({}));
  }

  async describeSecurityGroupReferences(request: DescribeSecurityGroupReferencesRequest): Promise<DescribeSecurityGroupReferencesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupReferencesWithOptions(request, runtime);
  }

  async detachClassicLinkVpcWithOptions(request: DetachClassicLinkVpcRequest, runtime: $Util.RuntimeOptions): Promise<DetachClassicLinkVpcResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachClassicLinkVpcResponse>(await this.doRequest("DetachClassicLinkVpc", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DetachClassicLinkVpcResponse({}));
  }

  async detachClassicLinkVpc(request: DetachClassicLinkVpcRequest): Promise<DetachClassicLinkVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachClassicLinkVpcWithOptions(request, runtime);
  }

  async describeClassicLinkInstancesWithOptions(request: DescribeClassicLinkInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClassicLinkInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClassicLinkInstancesResponse>(await this.doRequest("DescribeClassicLinkInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeClassicLinkInstancesResponse({}));
  }

  async describeClassicLinkInstances(request: DescribeClassicLinkInstancesRequest): Promise<DescribeClassicLinkInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClassicLinkInstancesWithOptions(request, runtime);
  }

  async attachClassicLinkVpcWithOptions(request: AttachClassicLinkVpcRequest, runtime: $Util.RuntimeOptions): Promise<AttachClassicLinkVpcResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachClassicLinkVpcResponse>(await this.doRequest("AttachClassicLinkVpc", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AttachClassicLinkVpcResponse({}));
  }

  async attachClassicLinkVpc(request: AttachClassicLinkVpcRequest): Promise<AttachClassicLinkVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachClassicLinkVpcWithOptions(request, runtime);
  }

  async detachInstanceRamRoleWithOptions(request: DetachInstanceRamRoleRequest, runtime: $Util.RuntimeOptions): Promise<DetachInstanceRamRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachInstanceRamRoleResponse>(await this.doRequest("DetachInstanceRamRole", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DetachInstanceRamRoleResponse({}));
  }

  async detachInstanceRamRole(request: DetachInstanceRamRoleRequest): Promise<DetachInstanceRamRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachInstanceRamRoleWithOptions(request, runtime);
  }

  async describeInstanceRamRoleWithOptions(request: DescribeInstanceRamRoleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceRamRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceRamRoleResponse>(await this.doRequest("DescribeInstanceRamRole", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceRamRoleResponse({}));
  }

  async describeInstanceRamRole(request: DescribeInstanceRamRoleRequest): Promise<DescribeInstanceRamRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceRamRoleWithOptions(request, runtime);
  }

  async attachInstanceRamRoleWithOptions(request: AttachInstanceRamRoleRequest, runtime: $Util.RuntimeOptions): Promise<AttachInstanceRamRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachInstanceRamRoleResponse>(await this.doRequest("AttachInstanceRamRole", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AttachInstanceRamRoleResponse({}));
  }

  async attachInstanceRamRole(request: AttachInstanceRamRoleRequest): Promise<AttachInstanceRamRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachInstanceRamRoleWithOptions(request, runtime);
  }

  async describeSnapshotPackageWithOptions(request: DescribeSnapshotPackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotPackageResponse>(await this.doRequest("DescribeSnapshotPackage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotPackageResponse({}));
  }

  async describeSnapshotPackage(request: DescribeSnapshotPackageRequest): Promise<DescribeSnapshotPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotPackageWithOptions(request, runtime);
  }

  async modifySecurityGroupRuleWithOptions(request: ModifySecurityGroupRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySecurityGroupRuleResponse>(await this.doRequest("ModifySecurityGroupRule", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifySecurityGroupRuleResponse({}));
  }

  async modifySecurityGroupRule(request: ModifySecurityGroupRuleRequest): Promise<ModifySecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupRuleWithOptions(request, runtime);
  }

  async describeSnapshotMonitorDataWithOptions(request: DescribeSnapshotMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotMonitorDataResponse>(await this.doRequest("DescribeSnapshotMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotMonitorDataResponse({}));
  }

  async describeSnapshotMonitorData(request: DescribeSnapshotMonitorDataRequest): Promise<DescribeSnapshotMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotMonitorDataWithOptions(request, runtime);
  }

  async describeRenewalPriceWithOptions(request: DescribeRenewalPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenewalPriceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRenewalPriceResponse>(await this.doRequest("DescribeRenewalPrice", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeRenewalPriceResponse({}));
  }

  async describeRenewalPrice(request: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePriceResponse>(await this.doRequest("DescribePrice", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async modifyDeploymentSetAttributeWithOptions(request: ModifyDeploymentSetAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeploymentSetAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDeploymentSetAttributeResponse>(await this.doRequest("ModifyDeploymentSetAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDeploymentSetAttributeResponse({}));
  }

  async modifyDeploymentSetAttribute(request: ModifyDeploymentSetAttributeRequest): Promise<ModifyDeploymentSetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeploymentSetAttributeWithOptions(request, runtime);
  }

  async describeDeploymentSetsWithOptions(request: DescribeDeploymentSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeploymentSetsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDeploymentSetsResponse>(await this.doRequest("DescribeDeploymentSets", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDeploymentSetsResponse({}));
  }

  async describeDeploymentSets(request: DescribeDeploymentSetsRequest): Promise<DescribeDeploymentSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeploymentSetsWithOptions(request, runtime);
  }

  async deleteDeploymentSetWithOptions(request: DeleteDeploymentSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeploymentSetResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeploymentSetResponse>(await this.doRequest("DeleteDeploymentSet", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteDeploymentSetResponse({}));
  }

  async deleteDeploymentSet(request: DeleteDeploymentSetRequest): Promise<DeleteDeploymentSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeploymentSetWithOptions(request, runtime);
  }

  async createDeploymentSetWithOptions(request: CreateDeploymentSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentSetResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDeploymentSetResponse>(await this.doRequest("CreateDeploymentSet", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateDeploymentSetResponse({}));
  }

  async createDeploymentSet(request: CreateDeploymentSetRequest): Promise<CreateDeploymentSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeploymentSetWithOptions(request, runtime);
  }

  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportKeyPairResponse>(await this.doRequest("ImportKeyPair", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ImportKeyPairResponse({}));
  }

  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  async detachKeyPairWithOptions(request: DetachKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<DetachKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachKeyPairResponse>(await this.doRequest("DetachKeyPair", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DetachKeyPairResponse({}));
  }

  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeKeyPairsResponse>(await this.doRequest("DescribeKeyPairs", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeKeyPairsResponse({}));
  }

  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteKeyPairsResponse>(await this.doRequest("DeleteKeyPairs", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteKeyPairsResponse({}));
  }

  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateKeyPairResponse>(await this.doRequest("CreateKeyPair", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateKeyPairResponse({}));
  }

  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  async attachKeyPairWithOptions(request: AttachKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<AttachKeyPairResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachKeyPairResponse>(await this.doRequest("AttachKeyPair", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AttachKeyPairResponse({}));
  }

  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewAttributeWithOptions(request: ModifyInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceAutoRenewAttributeResponse>(await this.doRequest("ModifyInstanceAutoRenewAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceAutoRenewAttributeResponse({}));
  }

  async modifyInstanceAutoRenewAttribute(request: ModifyInstanceAutoRenewAttributeRequest): Promise<ModifyInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewAttributeWithOptions(request: DescribeInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceAutoRenewAttributeResponse>(await this.doRequest("DescribeInstanceAutoRenewAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceAutoRenewAttributeResponse({}));
  }

  async describeInstanceAutoRenewAttribute(request: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeSnapshotLinksWithOptions(request: DescribeSnapshotLinksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotLinksResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotLinksResponse>(await this.doRequest("DescribeSnapshotLinks", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotLinksResponse({}));
  }

  async describeSnapshotLinks(request: DescribeSnapshotLinksRequest): Promise<DescribeSnapshotLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotLinksWithOptions(request, runtime);
  }

  async modifyInstanceAutoReleaseTimeWithOptions(request: ModifyInstanceAutoReleaseTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoReleaseTimeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceAutoReleaseTimeResponse>(await this.doRequest("ModifyInstanceAutoReleaseTime", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceAutoReleaseTimeResponse({}));
  }

  async modifyInstanceAutoReleaseTime(request: ModifyInstanceAutoReleaseTimeRequest): Promise<ModifyInstanceAutoReleaseTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoReleaseTimeWithOptions(request, runtime);
  }

  async describeNewProjectEipMonitorDataWithOptions(request: DescribeNewProjectEipMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNewProjectEipMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNewProjectEipMonitorDataResponse>(await this.doRequest("DescribeNewProjectEipMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeNewProjectEipMonitorDataResponse({}));
  }

  async describeNewProjectEipMonitorData(request: DescribeNewProjectEipMonitorDataRequest): Promise<DescribeNewProjectEipMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNewProjectEipMonitorDataWithOptions(request, runtime);
  }

  async describeUserDataWithOptions(request: DescribeUserDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserDataResponse>(await this.doRequest("DescribeUserData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeUserDataResponse({}));
  }

  async describeUserData(request: DescribeUserDataRequest): Promise<DescribeUserDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDataWithOptions(request, runtime);
  }

  async removeBandwidthPackageIpsWithOptions(request: RemoveBandwidthPackageIpsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBandwidthPackageIpsResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveBandwidthPackageIpsResponse>(await this.doRequest("RemoveBandwidthPackageIps", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RemoveBandwidthPackageIpsResponse({}));
  }

  async removeBandwidthPackageIps(request: RemoveBandwidthPackageIpsRequest): Promise<RemoveBandwidthPackageIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBandwidthPackageIpsWithOptions(request, runtime);
  }

  async modifyForwardEntryWithOptions(request: ModifyForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyForwardEntryResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyForwardEntryResponse>(await this.doRequest("ModifyForwardEntry", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyForwardEntryResponse({}));
  }

  async modifyForwardEntry(request: ModifyForwardEntryRequest): Promise<ModifyForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyForwardEntryWithOptions(request, runtime);
  }

  async modifyBandwidthPackageSpecWithOptions(request: ModifyBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyBandwidthPackageSpecResponse>(await this.doRequest("ModifyBandwidthPackageSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyBandwidthPackageSpecResponse({}));
  }

  async modifyBandwidthPackageSpec(request: ModifyBandwidthPackageSpecRequest): Promise<ModifyBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBandwidthPackageSpecWithOptions(request, runtime);
  }

  async describeNatGatewaysWithOptions(request: DescribeNatGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatGatewaysResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeNatGatewaysResponse>(await this.doRequest("DescribeNatGateways", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeNatGatewaysResponse({}));
  }

  async describeNatGateways(request: DescribeNatGatewaysRequest): Promise<DescribeNatGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatGatewaysWithOptions(request, runtime);
  }

  async describeForwardTableEntriesWithOptions(request: DescribeForwardTableEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeForwardTableEntriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeForwardTableEntriesResponse>(await this.doRequest("DescribeForwardTableEntries", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeForwardTableEntriesResponse({}));
  }

  async describeForwardTableEntries(request: DescribeForwardTableEntriesRequest): Promise<DescribeForwardTableEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeForwardTableEntriesWithOptions(request, runtime);
  }

  async describeBandwidthPackagesWithOptions(request: DescribeBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwidthPackagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBandwidthPackagesResponse>(await this.doRequest("DescribeBandwidthPackages", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeBandwidthPackagesResponse({}));
  }

  async describeBandwidthPackages(request: DescribeBandwidthPackagesRequest): Promise<DescribeBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackagesWithOptions(request, runtime);
  }

  async deleteNatGatewayWithOptions(request: DeleteNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNatGatewayResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteNatGatewayResponse>(await this.doRequest("DeleteNatGateway", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteNatGatewayResponse({}));
  }

  async deleteNatGateway(request: DeleteNatGatewayRequest): Promise<DeleteNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNatGatewayWithOptions(request, runtime);
  }

  async deleteForwardEntryWithOptions(request: DeleteForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteForwardEntryResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteForwardEntryResponse>(await this.doRequest("DeleteForwardEntry", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteForwardEntryResponse({}));
  }

  async deleteForwardEntry(request: DeleteForwardEntryRequest): Promise<DeleteForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardEntryWithOptions(request, runtime);
  }

  async deleteBandwidthPackageWithOptions(request: DeleteBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBandwidthPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBandwidthPackageResponse>(await this.doRequest("DeleteBandwidthPackage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteBandwidthPackageResponse({}));
  }

  async deleteBandwidthPackage(request: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBandwidthPackageWithOptions(request, runtime);
  }

  async createNatGatewayWithOptions(request: CreateNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateNatGatewayResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateNatGatewayResponse>(await this.doRequest("CreateNatGateway", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateNatGatewayResponse({}));
  }

  async createNatGateway(request: CreateNatGatewayRequest): Promise<CreateNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNatGatewayWithOptions(request, runtime);
  }

  async createForwardEntryWithOptions(request: CreateForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardEntryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateForwardEntryResponse>(await this.doRequest("CreateForwardEntry", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateForwardEntryResponse({}));
  }

  async createForwardEntry(request: CreateForwardEntryRequest): Promise<CreateForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardEntryWithOptions(request, runtime);
  }

  async addBandwidthPackageIpsWithOptions(request: AddBandwidthPackageIpsRequest, runtime: $Util.RuntimeOptions): Promise<AddBandwidthPackageIpsResponse> {
    Util.validateModel(request);
    return $tea.cast<AddBandwidthPackageIpsResponse>(await this.doRequest("AddBandwidthPackageIps", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AddBandwidthPackageIpsResponse({}));
  }

  async addBandwidthPackageIps(request: AddBandwidthPackageIpsRequest): Promise<AddBandwidthPackageIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBandwidthPackageIpsWithOptions(request, runtime);
  }

  async eipFillProductWithOptions(request: EipFillProductRequest, runtime: $Util.RuntimeOptions): Promise<EipFillProductResponse> {
    Util.validateModel(request);
    return $tea.cast<EipFillProductResponse>(await this.doRequest("EipFillProduct", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new EipFillProductResponse({}));
  }

  async eipFillProduct(request: EipFillProductRequest): Promise<EipFillProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eipFillProductWithOptions(request, runtime);
  }

  async eipNotifyPaidWithOptions(request: EipNotifyPaidRequest, runtime: $Util.RuntimeOptions): Promise<EipNotifyPaidResponse> {
    Util.validateModel(request);
    return $tea.cast<EipNotifyPaidResponse>(await this.doRequest("EipNotifyPaid", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new EipNotifyPaidResponse({}));
  }

  async eipNotifyPaid(request: EipNotifyPaidRequest): Promise<EipNotifyPaidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eipNotifyPaidWithOptions(request, runtime);
  }

  async eipFillParamsWithOptions(request: EipFillParamsRequest, runtime: $Util.RuntimeOptions): Promise<EipFillParamsResponse> {
    Util.validateModel(request);
    return $tea.cast<EipFillParamsResponse>(await this.doRequest("EipFillParams", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new EipFillParamsResponse({}));
  }

  async eipFillParams(request: EipFillParamsRequest): Promise<EipFillParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eipFillParamsWithOptions(request, runtime);
  }

  async modifyAutoSnapshotPolicyExWithOptions(request: ModifyAutoSnapshotPolicyExRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyExResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyAutoSnapshotPolicyExResponse>(await this.doRequest("ModifyAutoSnapshotPolicyEx", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyAutoSnapshotPolicyExResponse({}));
  }

  async modifyAutoSnapshotPolicyEx(request: ModifyAutoSnapshotPolicyExRequest): Promise<ModifyAutoSnapshotPolicyExResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyExWithOptions(request, runtime);
  }

  async describeAutoSnapshotPolicyExWithOptions(request: DescribeAutoSnapshotPolicyExRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoSnapshotPolicyExResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAutoSnapshotPolicyExResponse>(await this.doRequest("DescribeAutoSnapshotPolicyEx", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAutoSnapshotPolicyExResponse({}));
  }

  async describeAutoSnapshotPolicyEx(request: DescribeAutoSnapshotPolicyExRequest): Promise<DescribeAutoSnapshotPolicyExResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoSnapshotPolicyExWithOptions(request, runtime);
  }

  async deleteAutoSnapshotPolicyWithOptions(request: DeleteAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAutoSnapshotPolicyResponse>(await this.doRequest("DeleteAutoSnapshotPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteAutoSnapshotPolicyResponse({}));
  }

  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async createAutoSnapshotPolicyWithOptions(request: CreateAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAutoSnapshotPolicyResponse>(await this.doRequest("CreateAutoSnapshotPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateAutoSnapshotPolicyResponse({}));
  }

  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async cancelAutoSnapshotPolicyWithOptions(request: CancelAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CancelAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelAutoSnapshotPolicyResponse>(await this.doRequest("CancelAutoSnapshotPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CancelAutoSnapshotPolicyResponse({}));
  }

  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async applyAutoSnapshotPolicyWithOptions(request: ApplyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<ApplyAutoSnapshotPolicyResponse>(await this.doRequest("ApplyAutoSnapshotPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ApplyAutoSnapshotPolicyResponse({}));
  }

  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async describeImageSupportInstanceTypesWithOptions(request: DescribeImageSupportInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageSupportInstanceTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImageSupportInstanceTypesResponse>(await this.doRequest("DescribeImageSupportInstanceTypes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeImageSupportInstanceTypesResponse({}));
  }

  async describeImageSupportInstanceTypes(request: DescribeImageSupportInstanceTypesRequest): Promise<DescribeImageSupportInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageSupportInstanceTypesWithOptions(request, runtime);
  }

  async terminateVirtualBorderRouterWithOptions(request: TerminateVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<TerminateVirtualBorderRouterResponse> {
    Util.validateModel(request);
    return $tea.cast<TerminateVirtualBorderRouterResponse>(await this.doRequest("TerminateVirtualBorderRouter", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new TerminateVirtualBorderRouterResponse({}));
  }

  async terminateVirtualBorderRouter(request: TerminateVirtualBorderRouterRequest): Promise<TerminateVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateVirtualBorderRouterWithOptions(request, runtime);
  }

  async terminatePhysicalConnectionWithOptions(request: TerminatePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<TerminatePhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<TerminatePhysicalConnectionResponse>(await this.doRequest("TerminatePhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new TerminatePhysicalConnectionResponse({}));
  }

  async terminatePhysicalConnection(request: TerminatePhysicalConnectionRequest): Promise<TerminatePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminatePhysicalConnectionWithOptions(request, runtime);
  }

  async recoverVirtualBorderRouterWithOptions(request: RecoverVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<RecoverVirtualBorderRouterResponse> {
    Util.validateModel(request);
    return $tea.cast<RecoverVirtualBorderRouterResponse>(await this.doRequest("RecoverVirtualBorderRouter", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RecoverVirtualBorderRouterResponse({}));
  }

  async recoverVirtualBorderRouter(request: RecoverVirtualBorderRouterRequest): Promise<RecoverVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverVirtualBorderRouterWithOptions(request, runtime);
  }

  async modifyVirtualBorderRouterAttributeWithOptions(request: ModifyVirtualBorderRouterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVirtualBorderRouterAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyVirtualBorderRouterAttributeResponse>(await this.doRequest("ModifyVirtualBorderRouterAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyVirtualBorderRouterAttributeResponse({}));
  }

  async modifyVirtualBorderRouterAttribute(request: ModifyVirtualBorderRouterAttributeRequest): Promise<ModifyVirtualBorderRouterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVirtualBorderRouterAttributeWithOptions(request, runtime);
  }

  async modifyPhysicalConnectionAttributeWithOptions(request: ModifyPhysicalConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPhysicalConnectionAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyPhysicalConnectionAttributeResponse>(await this.doRequest("ModifyPhysicalConnectionAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyPhysicalConnectionAttributeResponse({}));
  }

  async modifyPhysicalConnectionAttribute(request: ModifyPhysicalConnectionAttributeRequest): Promise<ModifyPhysicalConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPhysicalConnectionAttributeWithOptions(request, runtime);
  }

  async enablePhysicalConnectionWithOptions(request: EnablePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<EnablePhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<EnablePhysicalConnectionResponse>(await this.doRequest("EnablePhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new EnablePhysicalConnectionResponse({}));
  }

  async enablePhysicalConnection(request: EnablePhysicalConnectionRequest): Promise<EnablePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enablePhysicalConnectionWithOptions(request, runtime);
  }

  async describeVirtualBorderRoutersForPhysicalConnectionWithOptions(request: DescribeVirtualBorderRoutersForPhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualBorderRoutersForPhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVirtualBorderRoutersForPhysicalConnectionResponse>(await this.doRequest("DescribeVirtualBorderRoutersForPhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeVirtualBorderRoutersForPhysicalConnectionResponse({}));
  }

  async describeVirtualBorderRoutersForPhysicalConnection(request: DescribeVirtualBorderRoutersForPhysicalConnectionRequest): Promise<DescribeVirtualBorderRoutersForPhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualBorderRoutersForPhysicalConnectionWithOptions(request, runtime);
  }

  async describeVirtualBorderRoutersWithOptions(request: DescribeVirtualBorderRoutersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualBorderRoutersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVirtualBorderRoutersResponse>(await this.doRequest("DescribeVirtualBorderRouters", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeVirtualBorderRoutersResponse({}));
  }

  async describeVirtualBorderRouters(request: DescribeVirtualBorderRoutersRequest): Promise<DescribeVirtualBorderRoutersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualBorderRoutersWithOptions(request, runtime);
  }

  async describePhysicalConnectionsWithOptions(request: DescribePhysicalConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePhysicalConnectionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePhysicalConnectionsResponse>(await this.doRequest("DescribePhysicalConnections", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribePhysicalConnectionsResponse({}));
  }

  async describePhysicalConnections(request: DescribePhysicalConnectionsRequest): Promise<DescribePhysicalConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhysicalConnectionsWithOptions(request, runtime);
  }

  async describeAccessPointsWithOptions(request: DescribeAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessPointsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAccessPointsResponse>(await this.doRequest("DescribeAccessPoints", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeAccessPointsResponse({}));
  }

  async describeAccessPoints(request: DescribeAccessPointsRequest): Promise<DescribeAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessPointsWithOptions(request, runtime);
  }

  async deleteVirtualBorderRouterWithOptions(request: DeleteVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualBorderRouterResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVirtualBorderRouterResponse>(await this.doRequest("DeleteVirtualBorderRouter", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteVirtualBorderRouterResponse({}));
  }

  async deleteVirtualBorderRouter(request: DeleteVirtualBorderRouterRequest): Promise<DeleteVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualBorderRouterWithOptions(request, runtime);
  }

  async deletePhysicalConnectionWithOptions(request: DeletePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePhysicalConnectionResponse>(await this.doRequest("DeletePhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeletePhysicalConnectionResponse({}));
  }

  async deletePhysicalConnection(request: DeletePhysicalConnectionRequest): Promise<DeletePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhysicalConnectionWithOptions(request, runtime);
  }

  async createVirtualBorderRouterWithOptions(request: CreateVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualBorderRouterResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVirtualBorderRouterResponse>(await this.doRequest("CreateVirtualBorderRouter", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateVirtualBorderRouterResponse({}));
  }

  async createVirtualBorderRouter(request: CreateVirtualBorderRouterRequest): Promise<CreateVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualBorderRouterWithOptions(request, runtime);
  }

  async createPhysicalConnectionWithOptions(request: CreatePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePhysicalConnectionResponse>(await this.doRequest("CreatePhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreatePhysicalConnectionResponse({}));
  }

  async createPhysicalConnection(request: CreatePhysicalConnectionRequest): Promise<CreatePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhysicalConnectionWithOptions(request, runtime);
  }

  async cancelPhysicalConnectionWithOptions(request: CancelPhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CancelPhysicalConnectionResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelPhysicalConnectionResponse>(await this.doRequest("CancelPhysicalConnection", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CancelPhysicalConnectionResponse({}));
  }

  async cancelPhysicalConnection(request: CancelPhysicalConnectionRequest): Promise<CancelPhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPhysicalConnectionWithOptions(request, runtime);
  }

  async importImageWithOptions(request: ImportImageRequest, runtime: $Util.RuntimeOptions): Promise<ImportImageResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportImageResponse>(await this.doRequest("ImportImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ImportImageResponse({}));
  }

  async importImage(request: ImportImageRequest): Promise<ImportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importImageWithOptions(request, runtime);
  }

  async exportImageWithOptions(request: ExportImageRequest, runtime: $Util.RuntimeOptions): Promise<ExportImageResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportImageResponse>(await this.doRequest("ExportImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ExportImageResponse({}));
  }

  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTasksResponse>(await this.doRequest("DescribeTasks", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeTaskAttributeWithOptions(request: DescribeTaskAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTaskAttributeResponse>(await this.doRequest("DescribeTaskAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeTaskAttributeResponse({}));
  }

  async describeTaskAttribute(request: DescribeTaskAttributeRequest): Promise<DescribeTaskAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskAttributeWithOptions(request, runtime);
  }

  async cancelTaskWithOptions(request: CancelTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelTaskResponse>(await this.doRequest("CancelTask", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CancelTaskResponse({}));
  }

  async cancelTask(request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  async describeInstanceTypeFamiliesWithOptions(request: DescribeInstanceTypeFamiliesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypeFamiliesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceTypeFamiliesResponse>(await this.doRequest("DescribeInstanceTypeFamilies", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceTypeFamiliesResponse({}));
  }

  async describeInstanceTypeFamilies(request: DescribeInstanceTypeFamiliesRequest): Promise<DescribeInstanceTypeFamiliesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypeFamiliesWithOptions(request, runtime);
  }

  async modifyRouterInterfaceSpecWithOptions(request: ModifyRouterInterfaceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouterInterfaceSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyRouterInterfaceSpecResponse>(await this.doRequest("ModifyRouterInterfaceSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyRouterInterfaceSpecResponse({}));
  }

  async modifyRouterInterfaceSpec(request: ModifyRouterInterfaceSpecRequest): Promise<ModifyRouterInterfaceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouterInterfaceSpecWithOptions(request, runtime);
  }

  async modifyRouterInterfaceAttributeWithOptions(request: ModifyRouterInterfaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouterInterfaceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyRouterInterfaceAttributeResponse>(await this.doRequest("ModifyRouterInterfaceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyRouterInterfaceAttributeResponse({}));
  }

  async modifyRouterInterfaceAttribute(request: ModifyRouterInterfaceAttributeRequest): Promise<ModifyRouterInterfaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouterInterfaceAttributeWithOptions(request, runtime);
  }

  async describeRouterInterfacesWithOptions(request: DescribeRouterInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouterInterfacesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRouterInterfacesResponse>(await this.doRequest("DescribeRouterInterfaces", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeRouterInterfacesResponse({}));
  }

  async describeRouterInterfaces(request: DescribeRouterInterfacesRequest): Promise<DescribeRouterInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouterInterfacesWithOptions(request, runtime);
  }

  async deleteRouterInterfaceWithOptions(request: DeleteRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouterInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRouterInterfaceResponse>(await this.doRequest("DeleteRouterInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteRouterInterfaceResponse({}));
  }

  async deleteRouterInterface(request: DeleteRouterInterfaceRequest): Promise<DeleteRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouterInterfaceWithOptions(request, runtime);
  }

  async deactivateRouterInterfaceWithOptions(request: DeactivateRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeactivateRouterInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeactivateRouterInterfaceResponse>(await this.doRequest("DeactivateRouterInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeactivateRouterInterfaceResponse({}));
  }

  async deactivateRouterInterface(request: DeactivateRouterInterfaceRequest): Promise<DeactivateRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateRouterInterfaceWithOptions(request, runtime);
  }

  async createRouterInterfaceWithOptions(request: CreateRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouterInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRouterInterfaceResponse>(await this.doRequest("CreateRouterInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateRouterInterfaceResponse({}));
  }

  async createRouterInterface(request: CreateRouterInterfaceRequest): Promise<CreateRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouterInterfaceWithOptions(request, runtime);
  }

  async connectRouterInterfaceWithOptions(request: ConnectRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectRouterInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<ConnectRouterInterfaceResponse>(await this.doRequest("ConnectRouterInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ConnectRouterInterfaceResponse({}));
  }

  async connectRouterInterface(request: ConnectRouterInterfaceRequest): Promise<ConnectRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectRouterInterfaceWithOptions(request, runtime);
  }

  async activateRouterInterfaceWithOptions(request: ActivateRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ActivateRouterInterfaceResponse> {
    Util.validateModel(request);
    return $tea.cast<ActivateRouterInterfaceResponse>(await this.doRequest("ActivateRouterInterface", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ActivateRouterInterfaceResponse({}));
  }

  async activateRouterInterface(request: ActivateRouterInterfaceRequest): Promise<ActivateRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateRouterInterfaceWithOptions(request, runtime);
  }

  async unassociateHaVipWithOptions(request: UnassociateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateHaVipResponse> {
    Util.validateModel(request);
    return $tea.cast<UnassociateHaVipResponse>(await this.doRequest("UnassociateHaVip", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new UnassociateHaVipResponse({}));
  }

  async unassociateHaVip(request: UnassociateHaVipRequest): Promise<UnassociateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateHaVipWithOptions(request, runtime);
  }

  async modifyHaVipAttributeWithOptions(request: ModifyHaVipAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHaVipAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyHaVipAttributeResponse>(await this.doRequest("ModifyHaVipAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyHaVipAttributeResponse({}));
  }

  async modifyHaVipAttribute(request: ModifyHaVipAttributeRequest): Promise<ModifyHaVipAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHaVipAttributeWithOptions(request, runtime);
  }

  async describeHaVipsWithOptions(request: DescribeHaVipsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHaVipsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHaVipsResponse>(await this.doRequest("DescribeHaVips", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeHaVipsResponse({}));
  }

  async describeHaVips(request: DescribeHaVipsRequest): Promise<DescribeHaVipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHaVipsWithOptions(request, runtime);
  }

  async deleteHaVipWithOptions(request: DeleteHaVipRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHaVipResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteHaVipResponse>(await this.doRequest("DeleteHaVip", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteHaVipResponse({}));
  }

  async deleteHaVip(request: DeleteHaVipRequest): Promise<DeleteHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHaVipWithOptions(request, runtime);
  }

  async createHaVipWithOptions(request: CreateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<CreateHaVipResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateHaVipResponse>(await this.doRequest("CreateHaVip", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateHaVipResponse({}));
  }

  async createHaVip(request: CreateHaVipRequest): Promise<CreateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHaVipWithOptions(request, runtime);
  }

  async associateHaVipWithOptions(request: AssociateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<AssociateHaVipResponse> {
    Util.validateModel(request);
    return $tea.cast<AssociateHaVipResponse>(await this.doRequest("AssociateHaVip", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AssociateHaVipResponse({}));
  }

  async associateHaVip(request: AssociateHaVipRequest): Promise<AssociateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateHaVipWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RenewInstanceResponse>(await this.doRequest("RenewInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveTagsResponse>(await this.doRequest("RemoveTags", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTagsResponse>(await this.doRequest("DescribeTags", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeResourceByTagsWithOptions(request: DescribeResourceByTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceByTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourceByTagsResponse>(await this.doRequest("DescribeResourceByTags", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeResourceByTagsResponse({}));
  }

  async describeResourceByTags(request: DescribeResourceByTagsRequest): Promise<DescribeResourceByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceByTagsWithOptions(request, runtime);
  }

  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<AddTagsResponse>(await this.doRequest("AddTags", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async unassociateEipAddressWithOptions(request: UnassociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<UnassociateEipAddressResponse>(await this.doRequest("UnassociateEipAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new UnassociateEipAddressResponse({}));
  }

  async unassociateEipAddress(request: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateEipAddressWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInstanceResponse>(await this.doRequest("StopInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<StartInstanceResponse>(await this.doRequest("StartInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async revokeSecurityGroupEgressWithOptions(request: RevokeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    return $tea.cast<RevokeSecurityGroupEgressResponse>(await this.doRequest("RevokeSecurityGroupEgress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RevokeSecurityGroupEgressResponse({}));
  }

  async revokeSecurityGroupEgress(request: RevokeSecurityGroupEgressRequest): Promise<RevokeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupEgressWithOptions(request, runtime);
  }

  async revokeSecurityGroupWithOptions(request: RevokeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<RevokeSecurityGroupResponse>(await this.doRequest("RevokeSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RevokeSecurityGroupResponse({}));
  }

  async revokeSecurityGroup(request: RevokeSecurityGroupRequest): Promise<RevokeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupWithOptions(request, runtime);
  }

  async resizeDiskWithOptions(request: ResizeDiskRequest, runtime: $Util.RuntimeOptions): Promise<ResizeDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<ResizeDiskResponse>(await this.doRequest("ResizeDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ResizeDiskResponse({}));
  }

  async resizeDisk(request: ResizeDiskRequest): Promise<ResizeDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDiskWithOptions(request, runtime);
  }

  async resetDiskWithOptions(request: ResetDiskRequest, runtime: $Util.RuntimeOptions): Promise<ResetDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetDiskResponse>(await this.doRequest("ResetDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ResetDiskResponse({}));
  }

  async resetDisk(request: ResetDiskRequest): Promise<ResetDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDiskWithOptions(request, runtime);
  }

  async replaceSystemDiskWithOptions(request: ReplaceSystemDiskRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceSystemDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<ReplaceSystemDiskResponse>(await this.doRequest("ReplaceSystemDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReplaceSystemDiskResponse({}));
  }

  async replaceSystemDisk(request: ReplaceSystemDiskRequest): Promise<ReplaceSystemDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceSystemDiskWithOptions(request, runtime);
  }

  async releasePublicIpAddressWithOptions(request: ReleasePublicIpAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicIpAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleasePublicIpAddressResponse>(await this.doRequest("ReleasePublicIpAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReleasePublicIpAddressResponse({}));
  }

  async releasePublicIpAddress(request: ReleasePublicIpAddressRequest): Promise<ReleasePublicIpAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicIpAddressWithOptions(request, runtime);
  }

  async releaseEipAddressWithOptions(request: ReleaseEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseEipAddressResponse>(await this.doRequest("ReleaseEipAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReleaseEipAddressResponse({}));
  }

  async releaseEipAddress(request: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEipAddressWithOptions(request, runtime);
  }

  async reInitDiskWithOptions(request: ReInitDiskRequest, runtime: $Util.RuntimeOptions): Promise<ReInitDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<ReInitDiskResponse>(await this.doRequest("ReInitDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ReInitDiskResponse({}));
  }

  async reInitDisk(request: ReInitDiskRequest): Promise<ReInitDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reInitDiskWithOptions(request, runtime);
  }

  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootInstanceResponse>(await this.doRequest("RebootInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new RebootInstanceResponse({}));
  }

  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  async modifyVSwitchAttributeWithOptions(request: ModifyVSwitchAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVSwitchAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyVSwitchAttributeResponse>(await this.doRequest("ModifyVSwitchAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyVSwitchAttributeResponse({}));
  }

  async modifyVSwitchAttribute(request: ModifyVSwitchAttributeRequest): Promise<ModifyVSwitchAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVSwitchAttributeWithOptions(request, runtime);
  }

  async modifyVRouterAttributeWithOptions(request: ModifyVRouterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVRouterAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyVRouterAttributeResponse>(await this.doRequest("ModifyVRouterAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyVRouterAttributeResponse({}));
  }

  async modifyVRouterAttribute(request: ModifyVRouterAttributeRequest): Promise<ModifyVRouterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVRouterAttributeWithOptions(request, runtime);
  }

  async modifyVpcAttributeWithOptions(request: ModifyVpcAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyVpcAttributeResponse>(await this.doRequest("ModifyVpcAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyVpcAttributeResponse({}));
  }

  async modifyVpcAttribute(request: ModifyVpcAttributeRequest): Promise<ModifyVpcAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcAttributeWithOptions(request, runtime);
  }

  async modifySnapshotAttributeWithOptions(request: ModifySnapshotAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySnapshotAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySnapshotAttributeResponse>(await this.doRequest("ModifySnapshotAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifySnapshotAttributeResponse({}));
  }

  async modifySnapshotAttribute(request: ModifySnapshotAttributeRequest): Promise<ModifySnapshotAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySnapshotAttributeWithOptions(request, runtime);
  }

  async modifySecurityGroupAttributeWithOptions(request: ModifySecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifySecurityGroupAttributeResponse>(await this.doRequest("ModifySecurityGroupAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifySecurityGroupAttributeResponse({}));
  }

  async modifySecurityGroupAttribute(request: ModifySecurityGroupAttributeRequest): Promise<ModifySecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupAttributeWithOptions(request, runtime);
  }

  async modifyInstanceVpcAttributeWithOptions(request: ModifyInstanceVpcAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVpcAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceVpcAttributeResponse>(await this.doRequest("ModifyInstanceVpcAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceVpcAttributeResponse({}));
  }

  async modifyInstanceVpcAttribute(request: ModifyInstanceVpcAttributeRequest): Promise<ModifyInstanceVpcAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVpcAttributeWithOptions(request, runtime);
  }

  async modifyInstanceVncPasswdWithOptions(request: ModifyInstanceVncPasswdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVncPasswdResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceVncPasswdResponse>(await this.doRequest("ModifyInstanceVncPasswd", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceVncPasswdResponse({}));
  }

  async modifyInstanceVncPasswd(request: ModifyInstanceVncPasswdRequest): Promise<ModifyInstanceVncPasswdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVncPasswdWithOptions(request, runtime);
  }

  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceSpecResponse>(await this.doRequest("ModifyInstanceSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceSpecResponse({}));
  }

  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  async modifyInstanceNetworkSpecWithOptions(request: ModifyInstanceNetworkSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNetworkSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceNetworkSpecResponse>(await this.doRequest("ModifyInstanceNetworkSpec", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceNetworkSpecResponse({}));
  }

  async modifyInstanceNetworkSpec(request: ModifyInstanceNetworkSpecRequest): Promise<ModifyInstanceNetworkSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNetworkSpecWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRequest("ModifyInstanceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyImageSharePermissionWithOptions(request: ModifyImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageSharePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageSharePermissionResponse>(await this.doRequest("ModifyImageSharePermission", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyImageSharePermissionResponse({}));
  }

  async modifyImageSharePermission(request: ModifyImageSharePermissionRequest): Promise<ModifyImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageSharePermissionWithOptions(request, runtime);
  }

  async modifyImageShareGroupPermissionWithOptions(request: ModifyImageShareGroupPermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageShareGroupPermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageShareGroupPermissionResponse>(await this.doRequest("ModifyImageShareGroupPermission", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyImageShareGroupPermissionResponse({}));
  }

  async modifyImageShareGroupPermission(request: ModifyImageShareGroupPermissionRequest): Promise<ModifyImageShareGroupPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageShareGroupPermissionWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageAttributeResponse>(await this.doRequest("ModifyImageAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async modifyEipAddressAttributeWithOptions(request: ModifyEipAddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEipAddressAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyEipAddressAttributeResponse>(await this.doRequest("ModifyEipAddressAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyEipAddressAttributeResponse({}));
  }

  async modifyEipAddressAttribute(request: ModifyEipAddressAttributeRequest): Promise<ModifyEipAddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEipAddressAttributeWithOptions(request, runtime);
  }

  async modifyDiskAttributeWithOptions(request: ModifyDiskAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDiskAttributeResponse>(await this.doRequest("ModifyDiskAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyDiskAttributeResponse({}));
  }

  async modifyDiskAttribute(request: ModifyDiskAttributeRequest): Promise<ModifyDiskAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskAttributeWithOptions(request, runtime);
  }

  async modifyAutoSnapshotPolicyWithOptions(request: ModifyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyAutoSnapshotPolicyResponse>(await this.doRequest("ModifyAutoSnapshotPolicy", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new ModifyAutoSnapshotPolicyResponse({}));
  }

  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async leaveSecurityGroupWithOptions(request: LeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LeaveSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<LeaveSecurityGroupResponse>(await this.doRequest("LeaveSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new LeaveSecurityGroupResponse({}));
  }

  async leaveSecurityGroup(request: LeaveSecurityGroupRequest): Promise<LeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveSecurityGroupWithOptions(request, runtime);
  }

  async joinSecurityGroupWithOptions(request: JoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<JoinSecurityGroupResponse>(await this.doRequest("JoinSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new JoinSecurityGroupResponse({}));
  }

  async joinSecurityGroup(request: JoinSecurityGroupRequest): Promise<JoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinSecurityGroupWithOptions(request, runtime);
  }

  async detachDiskWithOptions(request: DetachDiskRequest, runtime: $Util.RuntimeOptions): Promise<DetachDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachDiskResponse>(await this.doRequest("DetachDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DetachDiskResponse({}));
  }

  async detachDisk(request: DetachDiskRequest): Promise<DetachDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDiskWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeZonesResponse>(await this.doRequest("DescribeZones", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVSwitchesResponse>(await this.doRequest("DescribeVSwitches", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async describeVRoutersWithOptions(request: DescribeVRoutersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVRoutersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVRoutersResponse>(await this.doRequest("DescribeVRouters", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeVRoutersResponse({}));
  }

  async describeVRouters(request: DescribeVRoutersRequest): Promise<DescribeVRoutersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVRoutersWithOptions(request, runtime);
  }

  async describeVpcsWithOptions(request: DescribeVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVpcsResponse>(await this.doRequest("DescribeVpcs", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeVpcsResponse({}));
  }

  async describeVpcs(request: DescribeVpcsRequest): Promise<DescribeVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotsResponse>(await this.doRequest("DescribeSnapshots", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.doRequest("DescribeSecurityGroups", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSecurityGroupsResponse({}));
  }

  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  async describeSecurityGroupAttributeWithOptions(request: DescribeSecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSecurityGroupAttributeResponse>(await this.doRequest("DescribeSecurityGroupAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeSecurityGroupAttributeResponse({}));
  }

  async describeSecurityGroupAttribute(request: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  async describeRouteTablesWithOptions(request: DescribeRouteTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteTablesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRouteTablesResponse>(await this.doRequest("DescribeRouteTables", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeRouteTablesResponse({}));
  }

  async describeRouteTables(request: DescribeRouteTablesRequest): Promise<DescribeRouteTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteTablesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRegionsResponse>(await this.doRequest("DescribeRegions", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeLimitationWithOptions(request: DescribeLimitationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLimitationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLimitationResponse>(await this.doRequest("DescribeLimitation", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeLimitationResponse({}));
  }

  async describeLimitation(request: DescribeLimitationRequest): Promise<DescribeLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  async describeInstanceVncUrlWithOptions(request: DescribeInstanceVncUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceVncUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceVncUrlResponse>(await this.doRequest("DescribeInstanceVncUrl", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceVncUrlResponse({}));
  }

  async describeInstanceVncUrl(request: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  async describeInstanceVncPasswdWithOptions(request: DescribeInstanceVncPasswdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceVncPasswdResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceVncPasswdResponse>(await this.doRequest("DescribeInstanceVncPasswd", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceVncPasswdResponse({}));
  }

  async describeInstanceVncPasswd(request: DescribeInstanceVncPasswdRequest): Promise<DescribeInstanceVncPasswdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceVncPasswdWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceTypesResponse>(await this.doRequest("DescribeInstanceTypes", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async describeInstanceStatusWithOptions(request: DescribeInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceStatusResponse>(await this.doRequest("DescribeInstanceStatus", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceStatusResponse({}));
  }

  async describeInstanceStatus(request: DescribeInstanceStatusRequest): Promise<DescribeInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatusWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancesResponse>(await this.doRequest("DescribeInstances", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceMonitorDataWithOptions(request: DescribeInstanceMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceMonitorDataResponse>(await this.doRequest("DescribeInstanceMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceMonitorDataResponse({}));
  }

  async describeInstanceMonitorData(request: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMonitorDataWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.doRequest("DescribeInstanceAttribute", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeImageSharePermissionWithOptions(request: DescribeImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageSharePermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImageSharePermissionResponse>(await this.doRequest("DescribeImageSharePermission", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeImageSharePermissionResponse({}));
  }

  async describeImageSharePermission(request: DescribeImageSharePermissionRequest): Promise<DescribeImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageSharePermissionWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImagesResponse>(await this.doRequest("DescribeImages", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeEipMonitorDataWithOptions(request: DescribeEipMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEipMonitorDataResponse>(await this.doRequest("DescribeEipMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeEipMonitorDataResponse({}));
  }

  async describeEipMonitorData(request: DescribeEipMonitorDataRequest): Promise<DescribeEipMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipMonitorDataWithOptions(request, runtime);
  }

  async describeEipAddressesWithOptions(request: DescribeEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipAddressesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEipAddressesResponse>(await this.doRequest("DescribeEipAddresses", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeEipAddressesResponse({}));
  }

  async describeEipAddresses(request: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipAddressesWithOptions(request, runtime);
  }

  async describeDisksWithOptions(request: DescribeDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisksResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDisksResponse>(await this.doRequest("DescribeDisks", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDisksResponse({}));
  }

  async describeDisks(request: DescribeDisksRequest): Promise<DescribeDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisksWithOptions(request, runtime);
  }

  async describeDiskMonitorDataWithOptions(request: DescribeDiskMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskMonitorDataResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDiskMonitorDataResponse>(await this.doRequest("DescribeDiskMonitorData", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeDiskMonitorDataResponse({}));
  }

  async describeDiskMonitorData(request: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskMonitorDataWithOptions(request, runtime);
  }

  async describeClustersWithOptions(request: DescribeClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClustersResponse>(await this.doRequest("DescribeClusters", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DescribeClustersResponse({}));
  }

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

  async deleteVSwitchWithOptions(request: DeleteVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVSwitchResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVSwitchResponse>(await this.doRequest("DeleteVSwitch", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteVSwitchResponse({}));
  }

  async deleteVSwitch(request: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  async deleteVpcWithOptions(request: DeleteVpcRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVpcResponse>(await this.doRequest("DeleteVpc", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteVpcResponse({}));
  }

  async deleteVpc(request: DeleteVpcRequest): Promise<DeleteVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSnapshotResponse>(await this.doRequest("DeleteSnapshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSecurityGroupResponse>(await this.doRequest("DeleteSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async deleteRouteEntryWithOptions(request: DeleteRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteEntryResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRouteEntryResponse>(await this.doRequest("DeleteRouteEntry", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteRouteEntryResponse({}));
  }

  async deleteRouteEntry(request: DeleteRouteEntryRequest): Promise<DeleteRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteEntryWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteInstanceResponse>(await this.doRequest("DeleteInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteImageResponse>(await this.doRequest("DeleteImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteDiskWithOptions(request: DeleteDiskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDiskResponse>(await this.doRequest("DeleteDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new DeleteDiskResponse({}));
  }

  async deleteDisk(request: DeleteDiskRequest): Promise<DeleteDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskWithOptions(request, runtime);
  }

  async createVSwitchWithOptions(request: CreateVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<CreateVSwitchResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVSwitchResponse>(await this.doRequest("CreateVSwitch", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateVSwitchResponse({}));
  }

  async createVSwitch(request: CreateVSwitchRequest): Promise<CreateVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  async createVpcWithOptions(request: CreateVpcRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVpcResponse>(await this.doRequest("CreateVpc", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateVpcResponse({}));
  }

  async createVpc(request: CreateVpcRequest): Promise<CreateVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSnapshotResponse>(await this.doRequest("CreateSnapshot", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async createSecurityGroupWithOptions(request: CreateSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSecurityGroupResponse>(await this.doRequest("CreateSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateSecurityGroupResponse({}));
  }

  async createSecurityGroup(request: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityGroupWithOptions(request, runtime);
  }

  async createRouteEntryWithOptions(request: CreateRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteEntryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRouteEntryResponse>(await this.doRequest("CreateRouteEntry", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateRouteEntryResponse({}));
  }

  async createRouteEntry(request: CreateRouteEntryRequest): Promise<CreateRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteEntryWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateInstanceResponse>(await this.doRequest("CreateInstance", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateImageResponse>(await this.doRequest("CreateImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createDiskWithOptions(request: CreateDiskRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDiskResponse>(await this.doRequest("CreateDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CreateDiskResponse({}));
  }

  async createDisk(request: CreateDiskRequest): Promise<CreateDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskWithOptions(request, runtime);
  }

  async copyImageWithOptions(request: CopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CopyImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CopyImageResponse>(await this.doRequest("CopyImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CopyImageResponse({}));
  }

  async copyImage(request: CopyImageRequest): Promise<CopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  async cancelCopyImageWithOptions(request: CancelCopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CancelCopyImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelCopyImageResponse>(await this.doRequest("CancelCopyImage", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new CancelCopyImageResponse({}));
  }

  async cancelCopyImage(request: CancelCopyImageRequest): Promise<CancelCopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCopyImageWithOptions(request, runtime);
  }

  async authorizeSecurityGroupEgressWithOptions(request: AuthorizeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    return $tea.cast<AuthorizeSecurityGroupEgressResponse>(await this.doRequest("AuthorizeSecurityGroupEgress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AuthorizeSecurityGroupEgressResponse({}));
  }

  async authorizeSecurityGroupEgress(request: AuthorizeSecurityGroupEgressRequest): Promise<AuthorizeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupEgressWithOptions(request, runtime);
  }

  async authorizeSecurityGroupWithOptions(request: AuthorizeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<AuthorizeSecurityGroupResponse>(await this.doRequest("AuthorizeSecurityGroup", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AuthorizeSecurityGroupResponse({}));
  }

  async authorizeSecurityGroup(request: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  async attachDiskWithOptions(request: AttachDiskRequest, runtime: $Util.RuntimeOptions): Promise<AttachDiskResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachDiskResponse>(await this.doRequest("AttachDisk", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AttachDiskResponse({}));
  }

  async attachDisk(request: AttachDiskRequest): Promise<AttachDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDiskWithOptions(request, runtime);
  }

  async associateEipAddressWithOptions(request: AssociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<AssociateEipAddressResponse>(await this.doRequest("AssociateEipAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AssociateEipAddressResponse({}));
  }

  async associateEipAddress(request: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateEipAddressWithOptions(request, runtime);
  }

  async allocatePublicIpAddressWithOptions(request: AllocatePublicIpAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicIpAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<AllocatePublicIpAddressResponse>(await this.doRequest("AllocatePublicIpAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AllocatePublicIpAddressResponse({}));
  }

  async allocatePublicIpAddress(request: AllocatePublicIpAddressRequest): Promise<AllocatePublicIpAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicIpAddressWithOptions(request, runtime);
  }

  async allocateEipAddressWithOptions(request: AllocateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<AllocateEipAddressResponse>(await this.doRequest("AllocateEipAddress", "HTTPS", "POST", "2014-05-26", "AK", null, $tea.toMap(request), runtime), new AllocateEipAddressResponse({}));
  }

  async allocateEipAddress(request: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipAddressWithOptions(request, runtime);
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
