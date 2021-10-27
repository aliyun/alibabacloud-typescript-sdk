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
  body: CreateDeliveryHistoryJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteDeliveryHistoryJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeTrailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrailsResponseBody,
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
  body: GetDeliveryHistoryJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeliveryHistoryJobResponseBody,
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
  body: GetTrailStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListDeliveryHistoryJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: LookupEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: StartLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: StopLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailRequest extends $tea.Model {
  eventRW?: string;
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
  body: UpdateTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

  async createDeliveryHistoryJobWithOptions(request: CreateDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeliveryHistoryJobResponse>(await this.doRPCRequest("CreateDeliveryHistoryJob", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeliveryHistoryJobResponse({}));
  }

  async createDeliveryHistoryJob(request: CreateDeliveryHistoryJobRequest): Promise<CreateDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeliveryHistoryJobWithOptions(request, runtime);
  }

  async createTrailWithOptions(request: CreateTrailRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTrailResponse>(await this.doRPCRequest("CreateTrail", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTrailResponse({}));
  }

  async createTrail(request: CreateTrailRequest): Promise<CreateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrailWithOptions(request, runtime);
  }

  async deleteDeliveryHistoryJobWithOptions(request: DeleteDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeliveryHistoryJobResponse>(await this.doRPCRequest("DeleteDeliveryHistoryJob", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeliveryHistoryJobResponse({}));
  }

  async deleteDeliveryHistoryJob(request: DeleteDeliveryHistoryJobRequest): Promise<DeleteDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeliveryHistoryJobWithOptions(request, runtime);
  }

  async deleteTrailWithOptions(request: DeleteTrailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTrailResponse>(await this.doRPCRequest("DeleteTrail", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTrailResponse({}));
  }

  async deleteTrail(request: DeleteTrailRequest): Promise<DeleteTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrailWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeTrailsWithOptions(request: DescribeTrailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrailsResponse>(await this.doRPCRequest("DescribeTrails", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrailsResponse({}));
  }

  async describeTrails(request: DescribeTrailsRequest): Promise<DescribeTrailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrailsWithOptions(request, runtime);
  }

  async getDeliveryHistoryJobWithOptions(request: GetDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeliveryHistoryJobResponse>(await this.doRPCRequest("GetDeliveryHistoryJob", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeliveryHistoryJobResponse({}));
  }

  async getDeliveryHistoryJob(request: GetDeliveryHistoryJobRequest): Promise<GetDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeliveryHistoryJobWithOptions(request, runtime);
  }

  async getTrailStatusWithOptions(request: GetTrailStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTrailStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTrailStatusResponse>(await this.doRPCRequest("GetTrailStatus", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetTrailStatusResponse({}));
  }

  async getTrailStatus(request: GetTrailStatusRequest): Promise<GetTrailStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrailStatusWithOptions(request, runtime);
  }

  async listDeliveryHistoryJobsWithOptions(request: ListDeliveryHistoryJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeliveryHistoryJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeliveryHistoryJobsResponse>(await this.doRPCRequest("ListDeliveryHistoryJobs", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeliveryHistoryJobsResponse({}));
  }

  async listDeliveryHistoryJobs(request: ListDeliveryHistoryJobsRequest): Promise<ListDeliveryHistoryJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeliveryHistoryJobsWithOptions(request, runtime);
  }

  async lookupEventsWithOptions(request: LookupEventsRequest, runtime: $Util.RuntimeOptions): Promise<LookupEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LookupEventsResponse>(await this.doRPCRequest("LookupEvents", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new LookupEventsResponse({}));
  }

  async lookupEvents(request: LookupEventsRequest): Promise<LookupEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupEventsWithOptions(request, runtime);
  }

  async startLoggingWithOptions(request: StartLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StartLoggingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartLoggingResponse>(await this.doRPCRequest("StartLogging", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new StartLoggingResponse({}));
  }

  async startLogging(request: StartLoggingRequest): Promise<StartLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoggingWithOptions(request, runtime);
  }

  async stopLoggingWithOptions(request: StopLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StopLoggingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopLoggingResponse>(await this.doRPCRequest("StopLogging", "2020-07-06", "HTTPS", "GET", "AK", "json", req, runtime), new StopLoggingResponse({}));
  }

  async stopLogging(request: StopLoggingRequest): Promise<StopLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoggingWithOptions(request, runtime);
  }

  async updateTrailWithOptions(request: UpdateTrailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTrailResponse>(await this.doRPCRequest("UpdateTrail", "2020-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTrailResponse({}));
  }

  async updateTrail(request: UpdateTrailRequest): Promise<UpdateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrailWithOptions(request, runtime);
  }

}
