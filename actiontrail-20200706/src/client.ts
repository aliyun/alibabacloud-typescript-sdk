// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDeliveryHistoryJobRequest extends $tea.Model {
  clientToken?: string;
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      trailName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryHistoryJobResponseBody extends $tea.Model {
  jobId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryHistoryJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeliveryHistoryJobResponseBody;
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
      body: CreateDeliveryHistoryJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrailRequest extends $tea.Model {
  eventRW?: string;
  isOrganizationTrail?: boolean;
  maxComputeProjectArn?: string;
  maxComputeWriteRoleArn?: string;
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  ossWriteRoleArn?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      isOrganizationTrail: 'IsOrganizationTrail',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      isOrganizationTrail: 'boolean',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrailResponseBody extends $tea.Model {
  eventRW?: string;
  homeRegion?: string;
  maxComputeProjectArn?: string;
  maxComputeWriteRoleArn?: string;
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  ossWriteRoleArn?: string;
  requestId?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      homeRegion: 'HomeRegion',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      requestId: 'RequestId',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      homeRegion: 'string',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      requestId: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTrailResponseBody;
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
      body: CreateTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeliveryHistoryJobRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeliveryHistoryJobResponseBody extends $tea.Model {
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

export class DeleteDeliveryHistoryJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDeliveryHistoryJobResponseBody;
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
      body: DeleteDeliveryHistoryJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrailRequest extends $tea.Model {
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

export class DeleteTrailResponseBody extends $tea.Model {
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

export class DeleteTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTrailResponseBody;
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
      body: DeleteTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsRequest extends $tea.Model {
  includeOrganizationTrail?: boolean;
  includeShadowTrails?: boolean;
  nameList?: string;
  static names(): { [key: string]: string } {
    return {
      includeOrganizationTrail: 'IncludeOrganizationTrail',
      includeShadowTrails: 'IncludeShadowTrails',
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeOrganizationTrail: 'boolean',
      includeShadowTrails: 'boolean',
      nameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponseBody extends $tea.Model {
  requestId?: string;
  trailList?: DescribeTrailsResponseBodyTrailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trailList: 'TrailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trailList: { 'type': 'array', 'itemType': DescribeTrailsResponseBodyTrailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTrailsResponseBody;
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
      body: DescribeTrailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedEventsRequest extends $tea.Model {
  accessKey?: string;
  nextToken?: string;
  pageSize?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      nextToken: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedEventsResponseBody extends $tea.Model {
  events?: GetAccessKeyLastUsedEventsResponseBodyEvents[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': GetAccessKeyLastUsedEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessKeyLastUsedEventsResponseBody;
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
      body: GetAccessKeyLastUsedEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedInfoRequest extends $tea.Model {
  accessKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedInfoResponseBody extends $tea.Model {
  accessKeyId?: string;
  accountId?: string;
  accountType?: string;
  detail?: string;
  ownerId?: string;
  requestId?: string;
  serviceName?: string;
  serviceNameCn?: string;
  serviceNameEn?: string;
  source?: string;
  usedTimestamp?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accountId: 'AccountId',
      accountType: 'AccountType',
      detail: 'Detail',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      serviceNameCn: 'ServiceNameCn',
      serviceNameEn: 'ServiceNameEn',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accountId: 'string',
      accountType: 'string',
      detail: 'string',
      ownerId: 'string',
      requestId: 'string',
      serviceName: 'string',
      serviceNameCn: 'string',
      serviceNameEn: 'string',
      source: 'string',
      usedTimestamp: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessKeyLastUsedInfoResponseBody;
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
      body: GetAccessKeyLastUsedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedIpsRequest extends $tea.Model {
  accessKey?: string;
  nextToken?: string;
  pageSize?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      nextToken: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedIpsResponseBody extends $tea.Model {
  ips?: GetAccessKeyLastUsedIpsResponseBodyIps[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': GetAccessKeyLastUsedIpsResponseBodyIps },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessKeyLastUsedIpsResponseBody;
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
      body: GetAccessKeyLastUsedIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedProductsRequest extends $tea.Model {
  accessKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedProductsResponseBody extends $tea.Model {
  products?: GetAccessKeyLastUsedProductsResponseBodyProducts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': GetAccessKeyLastUsedProductsResponseBodyProducts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessKeyLastUsedProductsResponseBody;
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
      body: GetAccessKeyLastUsedProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResourcesRequest extends $tea.Model {
  accessKey?: string;
  nextToken?: string;
  pageSize?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      nextToken: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resources?: GetAccessKeyLastUsedResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': GetAccessKeyLastUsedResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessKeyLastUsedResourcesResponseBody;
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
      body: GetAccessKeyLastUsedResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryHistoryJobRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryHistoryJobResponseBody extends $tea.Model {
  createdTime?: string;
  endTime?: string;
  homeRegion?: string;
  jobId?: number;
  jobStatus?: number;
  requestId?: string;
  startTime?: string;
  status?: GetDeliveryHistoryJobResponseBodyStatus[];
  trailName?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      homeRegion: 'HomeRegion',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      trailName: 'TrailName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'string',
      homeRegion: 'string',
      jobId: 'number',
      jobStatus: 'number',
      requestId: 'string',
      startTime: 'string',
      status: { 'type': 'array', 'itemType': GetDeliveryHistoryJobResponseBodyStatus },
      trailName: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryHistoryJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeliveryHistoryJobResponseBody;
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
      body: GetDeliveryHistoryJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalEventsStorageRegionResponseBody extends $tea.Model {
  requestId?: string;
  storageRegion?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageRegion: 'StorageRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalEventsStorageRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGlobalEventsStorageRegionResponseBody;
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
      body: GetGlobalEventsStorageRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusRequest extends $tea.Model {
  isOrganizationTrail?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isOrganizationTrail: 'IsOrganizationTrail',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOrganizationTrail: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusResponseBody extends $tea.Model {
  isLogging?: boolean;
  latestDeliveryError?: string;
  latestDeliveryLogServiceError?: string;
  latestDeliveryLogServiceTime?: string;
  latestDeliveryTime?: string;
  ossBucketStatus?: boolean;
  requestId?: string;
  slsLogStoreStatus?: boolean;
  startLoggingTime?: string;
  stopLoggingTime?: string;
  static names(): { [key: string]: string } {
    return {
      isLogging: 'IsLogging',
      latestDeliveryError: 'LatestDeliveryError',
      latestDeliveryLogServiceError: 'LatestDeliveryLogServiceError',
      latestDeliveryLogServiceTime: 'LatestDeliveryLogServiceTime',
      latestDeliveryTime: 'LatestDeliveryTime',
      ossBucketStatus: 'OssBucketStatus',
      requestId: 'RequestId',
      slsLogStoreStatus: 'SlsLogStoreStatus',
      startLoggingTime: 'StartLoggingTime',
      stopLoggingTime: 'StopLoggingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLogging: 'boolean',
      latestDeliveryError: 'string',
      latestDeliveryLogServiceError: 'string',
      latestDeliveryLogServiceTime: 'string',
      latestDeliveryTime: 'string',
      ossBucketStatus: 'boolean',
      requestId: 'string',
      slsLogStoreStatus: 'boolean',
      startLoggingTime: 'string',
      stopLoggingTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrailStatusResponseBody;
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
      body: GetTrailStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryHistoryJobsRequest extends $tea.Model {
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

export class ListDeliveryHistoryJobsResponseBody extends $tea.Model {
  deliveryHistoryJobs?: ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryHistoryJobs: 'DeliveryHistoryJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryHistoryJobs: { 'type': 'array', 'itemType': ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs },
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

export class ListDeliveryHistoryJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeliveryHistoryJobsResponseBody;
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
      body: ListDeliveryHistoryJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsRequest extends $tea.Model {
  direction?: string;
  endTime?: string;
  lookupAttribute?: LookupEventsRequestLookupAttribute[];
  maxResults?: string;
  nextToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupEventsRequestLookupAttribute },
      maxResults: 'string',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsResponseBody extends $tea.Model {
  endTime?: string;
  events?: { [key: string]: any }[];
  nextToken?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextToken: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LookupEventsResponseBody;
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
      body: LookupEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoggingRequest extends $tea.Model {
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

export class StartLoggingResponseBody extends $tea.Model {
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

export class StartLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartLoggingResponseBody;
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
      body: StartLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoggingRequest extends $tea.Model {
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

export class StopLoggingResponseBody extends $tea.Model {
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

export class StopLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopLoggingResponseBody;
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
      body: StopLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGlobalEventsStorageRegionRequest extends $tea.Model {
  storageRegion?: string;
  static names(): { [key: string]: string } {
    return {
      storageRegion: 'StorageRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGlobalEventsStorageRegionResponseBody extends $tea.Model {
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

export class UpdateGlobalEventsStorageRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGlobalEventsStorageRegionResponseBody;
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
      body: UpdateGlobalEventsStorageRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailRequest extends $tea.Model {
  eventRW?: string;
  maxComputeProjectArn?: string;
  maxComputeWriteRoleArn?: string;
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  ossWriteRoleArn?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailResponseBody extends $tea.Model {
  eventRW?: string;
  homeRegion?: string;
  maxComputeProjectArn?: string;
  maxComputeWriteRoleArn?: string;
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  ossWriteRoleArn?: string;
  requestId?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      homeRegion: 'HomeRegion',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      requestId: 'RequestId',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      homeRegion: 'string',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      requestId: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTrailResponseBody;
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
      body: UpdateTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponseBodyTrailList extends $tea.Model {
  createTime?: string;
  eventRW?: string;
  homeRegion?: string;
  isOrganizationTrail?: boolean;
  maxComputeProjectArn?: string;
  maxComputeWriteRoleArn?: string;
  name?: string;
  organizationId?: string;
  ossBucketLocation?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  ossWriteRoleArn?: string;
  region?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  startLoggingTime?: string;
  status?: string;
  stopLoggingTime?: string;
  trailArn?: string;
  trailRegion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventRW: 'EventRW',
      homeRegion: 'HomeRegion',
      isOrganizationTrail: 'IsOrganizationTrail',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      organizationId: 'OrganizationId',
      ossBucketLocation: 'OssBucketLocation',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      region: 'Region',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      startLoggingTime: 'StartLoggingTime',
      status: 'Status',
      stopLoggingTime: 'StopLoggingTime',
      trailArn: 'TrailArn',
      trailRegion: 'TrailRegion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventRW: 'string',
      homeRegion: 'string',
      isOrganizationTrail: 'boolean',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      organizationId: 'string',
      ossBucketLocation: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      region: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      startLoggingTime: 'string',
      status: 'string',
      stopLoggingTime: 'string',
      trailArn: 'string',
      trailRegion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedEventsResponseBodyEvents extends $tea.Model {
  detail?: string;
  eventName?: string;
  source?: string;
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      eventName: 'EventName',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      eventName: 'string',
      source: 'string',
      usedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedIpsResponseBodyIps extends $tea.Model {
  detail?: string;
  ip?: string;
  source?: string;
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      ip: 'Ip',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      ip: 'string',
      source: 'string',
      usedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedProductsResponseBodyProducts extends $tea.Model {
  detail?: string;
  serviceName?: string;
  serviceNameCn?: string;
  serviceNameEn?: string;
  source?: string;
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      serviceName: 'ServiceName',
      serviceNameCn: 'ServiceNameCn',
      serviceNameEn: 'ServiceNameEn',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      serviceName: 'string',
      serviceNameCn: 'string',
      serviceNameEn: 'string',
      source: 'string',
      usedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResourcesResponseBodyResources extends $tea.Model {
  detail?: string;
  resourceName?: string;
  resourceType?: string;
  source?: string;
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      resourceName: 'string',
      resourceType: 'string',
      source: 'string',
      usedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryHistoryJobResponseBodyStatus extends $tea.Model {
  region?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs extends $tea.Model {
  createdTime?: string;
  endTime?: string;
  homeRegion?: string;
  jobId?: number;
  jobStatus?: number;
  startTime?: string;
  trailName?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      homeRegion: 'HomeRegion',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      startTime: 'StartTime',
      trailName: 'TrailName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'string',
      homeRegion: 'string',
      jobId: 'number',
      jobStatus: 'number',
      startTime: 'string',
      trailName: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsRequestLookupAttribute extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "actiontrail.aliyuncs.com",
      'cn-beijing-finance-pop': "actiontrail.aliyuncs.com",
      'cn-beijing-gov-1': "actiontrail.aliyuncs.com",
      'cn-beijing-nu16-b01': "actiontrail.aliyuncs.com",
      'cn-edge-1': "actiontrail.aliyuncs.com",
      'cn-fujian': "actiontrail.aliyuncs.com",
      'cn-haidian-cm12-c01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-bj-b01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-finance': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "actiontrail.aliyuncs.com",
      'cn-hangzhou-test-306': "actiontrail.aliyuncs.com",
      'cn-hongkong-finance-pop': "actiontrail.aliyuncs.com",
      'cn-qingdao-nebula': "actiontrail.aliyuncs.com",
      'cn-shanghai-et15-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-et2-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-inner': "actiontrail.aliyuncs.com",
      'cn-shanghai-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-finance-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-inner': "actiontrail.aliyuncs.com",
      'cn-shenzhen-st4-d01': "actiontrail.aliyuncs.com",
      'cn-shenzhen-su18-b01': "actiontrail.aliyuncs.com",
      'cn-wuhan': "actiontrail.aliyuncs.com",
      'cn-yushanfang': "actiontrail.aliyuncs.com",
      'cn-zhangbei-na61-b01': "actiontrail.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "actiontrail.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "actiontrail.aliyuncs.com",
      'eu-west-1-oxs': "actiontrail.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("actiontrail", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
    * Take note of the following limits:
    * - You must have created and configured a single-account trail to deliver events to Log Service by calling the [CreateTrail](~~212313~~) operation.
    * - Only one historical event delivery task can be running at a time within an Alibaba Cloud account.
    * This topic shows you how to create a historical event delivery task for a sample trail named `trail-name`.
    *
    * @param request CreateDeliveryHistoryJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDeliveryHistoryJobResponse
   */
  async createDeliveryHistoryJobWithOptions(request: CreateDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.trailName)) {
      query["TrailName"] = request.trailName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new CreateDeliveryHistoryJobResponse({}));
  }

  /**
    * Take note of the following limits:
    * - You must have created and configured a single-account trail to deliver events to Log Service by calling the [CreateTrail](~~212313~~) operation.
    * - Only one historical event delivery task can be running at a time within an Alibaba Cloud account.
    * This topic shows you how to create a historical event delivery task for a sample trail named `trail-name`.
    *
    * @param request CreateDeliveryHistoryJobRequest
    * @return CreateDeliveryHistoryJobResponse
   */
  async createDeliveryHistoryJob(request: CreateDeliveryHistoryJobRequest): Promise<CreateDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
    * You can create a trail to deliver events to Log Service, Object Storage Service (OSS), or both. Before you call this operation to create a trail, make sure that the following requirements are met:
    * *   Deliver events to Log Service: A project is created in Log Service.
    * **
    * **Description** After you create a trail to deliver events to Log Service, a Logstore whose name is in the `actiontrail_<Trail name>` format is automatically created and optimally configured for subsequent auditing. Indexes and a dashboard are created for the Logstore to facilitate event queries. You cannot manually write data to the Logstore. This ensures data accuracy. You do not need to create a Logstore in advance.
    * *   Deliver events to OSS: A bucket is created in OSS. This topic provides an example on how to call the API operation to create a single-account trail named `trail-test` to deliver events to an OSS bucket named `audit-log`.
    *
    * @param request CreateTrailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTrailResponse
   */
  async createTrailWithOptions(request: CreateTrailRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventRW)) {
      query["EventRW"] = request.eventRW;
    }

    if (!Util.isUnset(request.isOrganizationTrail)) {
      query["IsOrganizationTrail"] = request.isOrganizationTrail;
    }

    if (!Util.isUnset(request.maxComputeProjectArn)) {
      query["MaxComputeProjectArn"] = request.maxComputeProjectArn;
    }

    if (!Util.isUnset(request.maxComputeWriteRoleArn)) {
      query["MaxComputeWriteRoleArn"] = request.maxComputeWriteRoleArn;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossKeyPrefix)) {
      query["OssKeyPrefix"] = request.ossKeyPrefix;
    }

    if (!Util.isUnset(request.ossWriteRoleArn)) {
      query["OssWriteRoleArn"] = request.ossWriteRoleArn;
    }

    if (!Util.isUnset(request.slsProjectArn)) {
      query["SlsProjectArn"] = request.slsProjectArn;
    }

    if (!Util.isUnset(request.slsWriteRoleArn)) {
      query["SlsWriteRoleArn"] = request.slsWriteRoleArn;
    }

    if (!Util.isUnset(request.trailRegion)) {
      query["TrailRegion"] = request.trailRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrailResponse>(await this.callApi(params, req, runtime), new CreateTrailResponse({}));
  }

  /**
    * You can create a trail to deliver events to Log Service, Object Storage Service (OSS), or both. Before you call this operation to create a trail, make sure that the following requirements are met:
    * *   Deliver events to Log Service: A project is created in Log Service.
    * **
    * **Description** After you create a trail to deliver events to Log Service, a Logstore whose name is in the `actiontrail_<Trail name>` format is automatically created and optimally configured for subsequent auditing. Indexes and a dashboard are created for the Logstore to facilitate event queries. You cannot manually write data to the Logstore. This ensures data accuracy. You do not need to create a Logstore in advance.
    * *   Deliver events to OSS: A bucket is created in OSS. This topic provides an example on how to call the API operation to create a single-account trail named `trail-test` to deliver events to an OSS bucket named `audit-log`.
    *
    * @param request CreateTrailRequest
    * @return CreateTrailResponse
   */
  async createTrail(request: CreateTrailRequest): Promise<CreateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrailWithOptions(request, runtime);
  }

  /**
    * This topic describes how to delete a sample historical event delivery task whose ID is `16602`.
    *
    * @param request DeleteDeliveryHistoryJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDeliveryHistoryJobResponse
   */
  async deleteDeliveryHistoryJobWithOptions(request: DeleteDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new DeleteDeliveryHistoryJobResponse({}));
  }

  /**
    * This topic describes how to delete a sample historical event delivery task whose ID is `16602`.
    *
    * @param request DeleteDeliveryHistoryJobRequest
    * @return DeleteDeliveryHistoryJobResponse
   */
  async deleteDeliveryHistoryJob(request: DeleteDeliveryHistoryJobRequest): Promise<DeleteDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
    * This topic describes how to delete a sample trail named `trail-test`.
    *
    * @param request DeleteTrailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTrailResponse
   */
  async deleteTrailWithOptions(request: DeleteTrailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrailResponse>(await this.callApi(params, req, runtime), new DeleteTrailResponse({}));
  }

  /**
    * This topic describes how to delete a sample trail named `trail-test`.
    *
    * @param request DeleteTrailRequest
    * @return DeleteTrailResponse
   */
  async deleteTrail(request: DeleteTrailRequest): Promise<DeleteTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrailWithOptions(request, runtime);
  }

  /**
    * For more information, see [Regions and zones](~~40654~~).
    *
    * @param request DescribeRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
    * For more information, see [Regions and zones](~~40654~~).
    *
    * @param request DescribeRegionsRequest
    * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * This topic shows you how to query the information about the single-account trails within an Alibaba Cloud account. In this example, the information about a trail named `test-4` is returned.
    *
    * @param request DescribeTrailsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTrailsResponse
   */
  async describeTrailsWithOptions(request: DescribeTrailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeOrganizationTrail)) {
      query["IncludeOrganizationTrail"] = request.includeOrganizationTrail;
    }

    if (!Util.isUnset(request.includeShadowTrails)) {
      query["IncludeShadowTrails"] = request.includeShadowTrails;
    }

    if (!Util.isUnset(request.nameList)) {
      query["NameList"] = request.nameList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTrails",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrailsResponse>(await this.callApi(params, req, runtime), new DescribeTrailsResponse({}));
  }

  /**
    * This topic shows you how to query the information about the single-account trails within an Alibaba Cloud account. In this example, the information about a trail named `test-4` is returned.
    *
    * @param request DescribeTrailsRequest
    * @return DescribeTrailsResponse
   */
  async describeTrails(request: DescribeTrailsRequest): Promise<DescribeTrailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrailsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only the information about the most recent events that are generated within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. For more information about supported events, see [Alibaba Cloud services and events that are supported by the AccessKey pair audit feature](~~419214~~). Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedEventsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessKeyLastUsedEventsResponse
   */
  async getAccessKeyLastUsedEventsWithOptions(request: GetAccessKeyLastUsedEventsRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsedEvents",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedEventsResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedEventsResponse({}));
  }

  /**
    * You can call this operation to query only the information about the most recent events that are generated within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. For more information about supported events, see [Alibaba Cloud services and events that are supported by the AccessKey pair audit feature](~~419214~~). Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedEventsRequest
    * @return GetAccessKeyLastUsedEventsResponse
   */
  async getAccessKeyLastUsedEvents(request: GetAccessKeyLastUsedEventsRequest): Promise<GetAccessKeyLastUsedEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedEventsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only the information about the most recent call of a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessKeyLastUsedInfoResponse
   */
  async getAccessKeyLastUsedInfoWithOptions(request: GetAccessKeyLastUsedInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsedInfo",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedInfoResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedInfoResponse({}));
  }

  /**
    * You can call this operation to query only the information about the most recent call of a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedInfoRequest
    * @return GetAccessKeyLastUsedInfoResponse
   */
  async getAccessKeyLastUsedInfo(request: GetAccessKeyLastUsedInfoRequest): Promise<GetAccessKeyLastUsedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedInfoWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only the information about the IP addresses that are most recently used within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedIpsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessKeyLastUsedIpsResponse
   */
  async getAccessKeyLastUsedIpsWithOptions(request: GetAccessKeyLastUsedIpsRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsedIps",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedIpsResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedIpsResponse({}));
  }

  /**
    * You can call this operation to query only the information about the IP addresses that are most recently used within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedIpsRequest
    * @return GetAccessKeyLastUsedIpsResponse
   */
  async getAccessKeyLastUsedIps(request: GetAccessKeyLastUsedIpsRequest): Promise<GetAccessKeyLastUsedIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedIpsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only the information about Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedProductsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessKeyLastUsedProductsResponse
   */
  async getAccessKeyLastUsedProductsWithOptions(request: GetAccessKeyLastUsedProductsRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsedProducts",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedProductsResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedProductsResponse({}));
  }

  /**
    * You can call this operation to query only the information about Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedProductsRequest
    * @return GetAccessKeyLastUsedProductsResponse
   */
  async getAccessKeyLastUsedProducts(request: GetAccessKeyLastUsedProductsRequest): Promise<GetAccessKeyLastUsedProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedProductsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query only the information about resources that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessKeyLastUsedResourcesResponse
   */
  async getAccessKeyLastUsedResourcesWithOptions(request: GetAccessKeyLastUsedResourcesRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsedResources",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedResourcesResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedResourcesResponse({}));
  }

  /**
    * You can call this operation to query only the information about resources that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
    *
    * @param request GetAccessKeyLastUsedResourcesRequest
    * @return GetAccessKeyLastUsedResourcesResponse
   */
  async getAccessKeyLastUsedResources(request: GetAccessKeyLastUsedResourcesRequest): Promise<GetAccessKeyLastUsedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedResourcesWithOptions(request, runtime);
  }

  /**
    * This topic describes how to query the details of a historical event delivery tasks created within your Alibaba Cloud account. In this example, the details of a historical event delivery task whose ID is `16602` are returned. The sample response shows that this task is used to deliver the historical events recorded by the trail named `trail-name` to Log Service and the task is complete.
    *
    * @param request GetDeliveryHistoryJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDeliveryHistoryJobResponse
   */
  async getDeliveryHistoryJobWithOptions(request: GetDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new GetDeliveryHistoryJobResponse({}));
  }

  /**
    * This topic describes how to query the details of a historical event delivery tasks created within your Alibaba Cloud account. In this example, the details of a historical event delivery task whose ID is `16602` are returned. The sample response shows that this task is used to deliver the historical events recorded by the trail named `trail-name` to Log Service and the task is complete.
    *
    * @param request GetDeliveryHistoryJobRequest
    * @return GetDeliveryHistoryJobResponse
   */
  async getDeliveryHistoryJob(request: GetDeliveryHistoryJobRequest): Promise<GetDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
    * By default, global events are stored in the Singapore region.
    * To obtain the permissions to call the API operation, you must submit a ticket.
    *
    * @param request GetGlobalEventsStorageRegionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetGlobalEventsStorageRegionResponse
   */
  async getGlobalEventsStorageRegionWithOptions(runtime: $Util.RuntimeOptions): Promise<GetGlobalEventsStorageRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetGlobalEventsStorageRegion",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGlobalEventsStorageRegionResponse>(await this.callApi(params, req, runtime), new GetGlobalEventsStorageRegionResponse({}));
  }

  /**
    * By default, global events are stored in the Singapore region.
    * To obtain the permissions to call the API operation, you must submit a ticket.
    *
    * @return GetGlobalEventsStorageRegionResponse
   */
  async getGlobalEventsStorageRegion(): Promise<GetGlobalEventsStorageRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGlobalEventsStorageRegionWithOptions(runtime);
  }

  /**
    * This topic describes how to query the status of a sample single-account trail named `trail-test`.
    *
    * @param request GetTrailStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTrailStatusResponse
   */
  async getTrailStatusWithOptions(request: GetTrailStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTrailStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isOrganizationTrail)) {
      query["IsOrganizationTrail"] = request.isOrganizationTrail;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrailStatus",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrailStatusResponse>(await this.callApi(params, req, runtime), new GetTrailStatusResponse({}));
  }

  /**
    * This topic describes how to query the status of a sample single-account trail named `trail-test`.
    *
    * @param request GetTrailStatusRequest
    * @return GetTrailStatusResponse
   */
  async getTrailStatus(request: GetTrailStatusRequest): Promise<GetTrailStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrailStatusWithOptions(request, runtime);
  }

  /**
    * This topic describes how to query the historical event delivery tasks created within your Alibaba Cloud account. In this example, a historical event delivery task whose ID is `16602` is returned. This task is used to deliver historical events for the trail named `trail-name` to Log Service.
    *
    * @param request ListDeliveryHistoryJobsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDeliveryHistoryJobsResponse
   */
  async listDeliveryHistoryJobsWithOptions(request: ListDeliveryHistoryJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeliveryHistoryJobsResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "ListDeliveryHistoryJobs",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeliveryHistoryJobsResponse>(await this.callApi(params, req, runtime), new ListDeliveryHistoryJobsResponse({}));
  }

  /**
    * This topic describes how to query the historical event delivery tasks created within your Alibaba Cloud account. In this example, a historical event delivery task whose ID is `16602` is returned. This task is used to deliver historical events for the trail named `trail-name` to Log Service.
    *
    * @param request ListDeliveryHistoryJobsRequest
    * @return ListDeliveryHistoryJobsResponse
   */
  async listDeliveryHistoryJobs(request: ListDeliveryHistoryJobsRequest): Promise<ListDeliveryHistoryJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeliveryHistoryJobsWithOptions(request, runtime);
  }

  /**
    * When you call this operation to query event details, you can query the event details at most twice per second.
    * > Do not frequently call this operation. You can create a trail to deliver events to Log Service. Then, you can query event details in near real time by using the real-time log consumption feature of Log Service. For more information, see [Create a single-account trail](~~28810~~), [Create a multi-account trail](~~160661~~), and [Overview](~~28997~~).
    *
    * @param request LookupEventsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LookupEventsResponse
   */
  async lookupEventsWithOptions(request: LookupEventsRequest, runtime: $Util.RuntimeOptions): Promise<LookupEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lookupAttribute)) {
      query["LookupAttribute"] = request.lookupAttribute;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LookupEvents",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LookupEventsResponse>(await this.callApi(params, req, runtime), new LookupEventsResponse({}));
  }

  /**
    * When you call this operation to query event details, you can query the event details at most twice per second.
    * > Do not frequently call this operation. You can create a trail to deliver events to Log Service. Then, you can query event details in near real time by using the real-time log consumption feature of Log Service. For more information, see [Create a single-account trail](~~28810~~), [Create a multi-account trail](~~160661~~), and [Overview](~~28997~~).
    *
    * @param request LookupEventsRequest
    * @return LookupEventsResponse
   */
  async lookupEvents(request: LookupEventsRequest): Promise<LookupEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupEventsWithOptions(request, runtime);
  }

  /**
    * This topic describes how to enable logging for a sample trail named `trail-test`.
    *
    * @param request StartLoggingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartLoggingResponse
   */
  async startLoggingWithOptions(request: StartLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StartLoggingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartLogging",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartLoggingResponse>(await this.callApi(params, req, runtime), new StartLoggingResponse({}));
  }

  /**
    * This topic describes how to enable logging for a sample trail named `trail-test`.
    *
    * @param request StartLoggingRequest
    * @return StartLoggingResponse
   */
  async startLogging(request: StartLoggingRequest): Promise<StartLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoggingWithOptions(request, runtime);
  }

  /**
    * This topic describes how to disable logging for a sample trail named `trail-test`.
    *
    * @param request StopLoggingRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopLoggingResponse
   */
  async stopLoggingWithOptions(request: StopLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StopLoggingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopLogging",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLoggingResponse>(await this.callApi(params, req, runtime), new StopLoggingResponse({}));
  }

  /**
    * This topic describes how to disable logging for a sample trail named `trail-test`.
    *
    * @param request StopLoggingRequest
    * @return StopLoggingResponse
   */
  async stopLogging(request: StopLoggingRequest): Promise<StopLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoggingWithOptions(request, runtime);
  }

  /**
    * By default, global events are stored in the Singapore region.
    * *   To obtain the permissions to call the API operation, you must submit a ticket.
    * *   Only the China (Hangzhou) region (cn-hangzhou) and the Singapore region (ap-southeast-1) are supported.
    *
    * @param request UpdateGlobalEventsStorageRegionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateGlobalEventsStorageRegionResponse
   */
  async updateGlobalEventsStorageRegionWithOptions(request: UpdateGlobalEventsStorageRegionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGlobalEventsStorageRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGlobalEventsStorageRegion",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGlobalEventsStorageRegionResponse>(await this.callApi(params, req, runtime), new UpdateGlobalEventsStorageRegionResponse({}));
  }

  /**
    * By default, global events are stored in the Singapore region.
    * *   To obtain the permissions to call the API operation, you must submit a ticket.
    * *   Only the China (Hangzhou) region (cn-hangzhou) and the Singapore region (ap-southeast-1) are supported.
    *
    * @param request UpdateGlobalEventsStorageRegionRequest
    * @return UpdateGlobalEventsStorageRegionResponse
   */
  async updateGlobalEventsStorageRegion(request: UpdateGlobalEventsStorageRegionRequest): Promise<UpdateGlobalEventsStorageRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGlobalEventsStorageRegionWithOptions(request, runtime);
  }

  /**
    * This topic shows you how to change the destination Object Storage Service (OSS) bucket of a sample trail named `trail-test` to `audit-log`.
    *
    * @param request UpdateTrailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateTrailResponse
   */
  async updateTrailWithOptions(request: UpdateTrailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventRW)) {
      query["EventRW"] = request.eventRW;
    }

    if (!Util.isUnset(request.maxComputeProjectArn)) {
      query["MaxComputeProjectArn"] = request.maxComputeProjectArn;
    }

    if (!Util.isUnset(request.maxComputeWriteRoleArn)) {
      query["MaxComputeWriteRoleArn"] = request.maxComputeWriteRoleArn;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!Util.isUnset(request.ossKeyPrefix)) {
      query["OssKeyPrefix"] = request.ossKeyPrefix;
    }

    if (!Util.isUnset(request.ossWriteRoleArn)) {
      query["OssWriteRoleArn"] = request.ossWriteRoleArn;
    }

    if (!Util.isUnset(request.slsProjectArn)) {
      query["SlsProjectArn"] = request.slsProjectArn;
    }

    if (!Util.isUnset(request.slsWriteRoleArn)) {
      query["SlsWriteRoleArn"] = request.slsWriteRoleArn;
    }

    if (!Util.isUnset(request.trailRegion)) {
      query["TrailRegion"] = request.trailRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrailResponse>(await this.callApi(params, req, runtime), new UpdateTrailResponse({}));
  }

  /**
    * This topic shows you how to change the destination Object Storage Service (OSS) bucket of a sample trail named `trail-test` to `audit-log`.
    *
    * @param request UpdateTrailRequest
    * @return UpdateTrailResponse
   */
  async updateTrail(request: UpdateTrailRequest): Promise<UpdateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrailWithOptions(request, runtime);
  }

}
