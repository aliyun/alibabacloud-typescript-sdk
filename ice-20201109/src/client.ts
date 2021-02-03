// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateEditingProjectRequest extends $tea.Model {
  title?: string;
  description?: string;
  timeline?: string;
  coverURL?: string;
  FEExtend?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
      FEExtend: 'FEExtend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
      FEExtend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponseBody extends $tea.Model {
  requestId?: string;
  project?: CreateEditingProjectResponseBodyProject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      project: CreateEditingProjectResponseBodyProject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectsRequest extends $tea.Model {
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectsResponseBody extends $tea.Model {
  requestId?: string;
  ignoredList?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ignoredList: 'IgnoredList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ignoredList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEditingProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEditingProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosRequest extends $tea.Model {
  mediaIds?: string;
  inputURLs?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      inputURLs: 'InputURLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      inputURLs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosResponseBody extends $tea.Model {
  requestId?: string;
  ignoredList?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ignoredList: 'IgnoredList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ignoredList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMediaInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMediaInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMediaInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceProductStatusResponseBody extends $tea.Model {
  requestId?: string;
  ICEServiceAvaliable?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ICEServiceAvaliable: 'ICEServiceAvaliable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ICEServiceAvaliable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceProductStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIceProductStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIceProductStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRelatedAuthorizationStatusResponseBody extends $tea.Model {
  requestId?: string;
  OSSAuthorized?: boolean;
  MTSAuthorized?: boolean;
  MNSAuthorized?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      OSSAuthorized: 'OSSAuthorized',
      MTSAuthorized: 'MTSAuthorized',
      MNSAuthorized: 'MNSAuthorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      OSSAuthorized: 'boolean',
      MTSAuthorized: 'boolean',
      MNSAuthorized: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRelatedAuthorizationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRelatedAuthorizationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRelatedAuthorizationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectRequest extends $tea.Model {
  projectId?: string;
  FEExtendFlag?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      FEExtendFlag: 'FEExtendFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      FEExtendFlag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBody extends $tea.Model {
  requestId?: string;
  project?: GetEditingProjectResponseBodyProject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      project: GetEditingProjectResponseBodyProject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoRequest extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      inputURL: 'InputURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      inputURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBody extends $tea.Model {
  requestId?: string;
  mediaInfo?: GetMediaInfoResponseBodyMediaInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaInfo: 'MediaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaInfo: GetMediaInfoResponseBodyMediaInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponseBody extends $tea.Model {
  requestId?: string;
  mediaProducingJob?: GetMediaProducingJobResponseBodyMediaProducingJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaProducingJob: 'MediaProducingJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaProducingJob: GetMediaProducingJobResponseBodyMediaProducingJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaProducingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsRequest extends $tea.Model {
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponseBody extends $tea.Model {
  requestId?: string;
  mediaTagList?: ListAllPublicMediaTagsResponseBodyMediaTagList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaTagList: 'MediaTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaTagList: { 'type': 'array', 'itemType': ListAllPublicMediaTagsResponseBodyMediaTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAllPublicMediaTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAllPublicMediaTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  mediaType?: string;
  businessType?: string;
  source?: string;
  category?: string;
  status?: string;
  nextToken?: string;
  maxResults?: number;
  sortBy?: string;
  pageNo?: number;
  pageSize?: number;
  includeFileBasicInfo?: boolean;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      mediaType: 'MediaType',
      businessType: 'BusinessType',
      source: 'Source',
      category: 'Category',
      status: 'Status',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      sortBy: 'SortBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      mediaType: 'string',
      businessType: 'string',
      source: 'string',
      category: 'string',
      status: 'string',
      nextToken: 'string',
      maxResults: 'number',
      sortBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      includeFileBasicInfo: 'boolean',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  mediaInfos?: ListMediaBasicInfosResponseBodyMediaInfos[];
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediaBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsRequest extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsResponseBody extends $tea.Model {
  requestId?: string;
  mediaProducingJobList?: ListMediaProducingJobsResponseBodyMediaProducingJobList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaProducingJobList: 'MediaProducingJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaProducingJobList: { 'type': 'array', 'itemType': ListMediaProducingJobsResponseBodyMediaProducingJobList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMediaProducingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMediaProducingJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosRequest extends $tea.Model {
  mediaTagId?: string;
  nextToken?: string;
  maxResults?: number;
  pageNo?: number;
  pageSize?: number;
  includeFileBasicInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      pageNo: 'number',
      pageSize: 'number',
      includeFileBasicInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  mediaInfos?: ListPublicMediaBasicInfosResponseBodyMediaInfos[];
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPublicMediaBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPublicMediaBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoRequest extends $tea.Model {
  inputURL?: string;
  mediaType?: string;
  businessType?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  dynamicMetaDataList?: string;
  userData?: string;
  overwrite?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      inputURL: 'InputURL',
      mediaType: 'MediaType',
      businessType: 'BusinessType',
      title: 'Title',
      description: 'Description',
      category: 'Category',
      mediaTags: 'MediaTags',
      coverURL: 'CoverURL',
      dynamicMetaDataList: 'DynamicMetaDataList',
      userData: 'UserData',
      overwrite: 'Overwrite',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputURL: 'string',
      mediaType: 'string',
      businessType: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      mediaTags: 'string',
      coverURL: 'string',
      dynamicMetaDataList: 'string',
      userData: 'string',
      overwrite: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoResponseBody extends $tea.Model {
  requestId?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  status?: string;
  sortBy?: string;
  nextToken?: string;
  maxResults?: number;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      sortBy: 'SortBy',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      status: 'string',
      sortBy: 'string',
      nextToken: 'string',
      maxResults: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBody extends $tea.Model {
  requestId?: string;
  projectList?: SearchEditingProjectResponseBodyProjectList[];
  maxResults?: number;
  totalCount?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectList: 'ProjectList',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectList: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectList },
      maxResults: 'number',
      totalCount: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobRequest extends $tea.Model {
  projectId?: string;
  timeline?: string;
  templateId?: string;
  clipsParam?: string;
  projectMetadata?: string;
  outputMediaTarget?: string;
  outputMediaConfig?: string;
  userData?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      timeline: 'Timeline',
      templateId: 'TemplateId',
      clipsParam: 'ClipsParam',
      projectMetadata: 'ProjectMetadata',
      outputMediaTarget: 'OutputMediaTarget',
      outputMediaConfig: 'OutputMediaConfig',
      userData: 'UserData',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      timeline: 'string',
      templateId: 'string',
      clipsParam: 'string',
      projectMetadata: 'string',
      outputMediaTarget: 'string',
      outputMediaConfig: 'string',
      userData: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobResponseBody extends $tea.Model {
  requestId?: string;
  projectId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectId: 'ProjectId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaProducingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitMediaProducingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitMediaProducingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectRequest extends $tea.Model {
  title?: string;
  description?: string;
  timeline?: string;
  coverURL?: string;
  projectId?: string;
  FEExtend?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
      projectId: 'ProjectId',
      FEExtend: 'FEExtend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
      projectId: 'string',
      FEExtend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEditingProjectResponseBody extends $tea.Model {
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

export class UpdateEditingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEditingProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEditingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoRequest extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  businessType?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  snapshots?: string;
  dynamicMetaDataList?: string;
  userData?: string;
  appendTags?: boolean;
  appendSnapshots?: boolean;
  appendDynamicMeta?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      inputURL: 'InputURL',
      businessType: 'BusinessType',
      title: 'Title',
      description: 'Description',
      category: 'Category',
      mediaTags: 'MediaTags',
      coverURL: 'CoverURL',
      snapshots: 'Snapshots',
      dynamicMetaDataList: 'DynamicMetaDataList',
      userData: 'UserData',
      appendTags: 'AppendTags',
      appendSnapshots: 'AppendSnapshots',
      appendDynamicMeta: 'AppendDynamicMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      inputURL: 'string',
      businessType: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      mediaTags: 'string',
      coverURL: 'string',
      snapshots: 'string',
      dynamicMetaDataList: 'string',
      userData: 'string',
      appendTags: 'boolean',
      appendSnapshots: 'boolean',
      appendDynamicMeta: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoResponseBody extends $tea.Model {
  requestId?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMediaInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMediaInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEditingProjectResponseBodyProject extends $tea.Model {
  projectId?: string;
  title?: string;
  description?: string;
  timeline?: string;
  coverURL?: string;
  status?: number;
  createTime?: string;
  modifiedTime?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
      status: 'Status',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
      status: 'number',
      createTime: 'string',
      modifiedTime: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectResponseBodyProject extends $tea.Model {
  projectId?: string;
  title?: string;
  timeline?: string;
  description?: string;
  coverURL?: string;
  createTime?: string;
  modifiedTime?: string;
  duration?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      title: 'Title',
      timeline: 'Timeline',
      description: 'Description',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      duration: 'Duration',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      title: 'string',
      timeline: 'string',
      description: 'string',
      coverURL: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      duration: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  mediaType?: string;
  businessType?: string;
  source?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  userData?: string;
  status?: string;
  createTime?: string;
  modifiedTime?: string;
  deletedTime?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      inputURL: 'InputURL',
      mediaType: 'MediaType',
      businessType: 'BusinessType',
      source: 'Source',
      title: 'Title',
      description: 'Description',
      category: 'Category',
      mediaTags: 'MediaTags',
      coverURL: 'CoverURL',
      userData: 'UserData',
      status: 'Status',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      deletedTime: 'DeletedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      inputURL: 'string',
      mediaType: 'string',
      businessType: 'string',
      source: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      mediaTags: 'string',
      coverURL: 'string',
      userData: 'string',
      status: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      deletedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList extends $tea.Model {
  in?: number;
  out?: number;
  type?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      in: 'In',
      out: 'Out',
      type: 'Type',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: 'number',
      out: 'number',
      type: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoAiRoughDataList extends $tea.Model {
  type?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $tea.Model {
  fileName?: string;
  fileStatus?: string;
  fileType?: string;
  fileSize?: string;
  fileUrl?: string;
  region?: string;
  formatName?: string;
  duration?: string;
  bitrate?: string;
  width?: string;
  height?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      region: 'Region',
      formatName: 'FormatName',
      duration: 'Duration',
      bitrate: 'Bitrate',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileSize: 'string',
      fileUrl: 'string',
      region: 'string',
      formatName: 'string',
      duration: 'string',
      bitrate: 'string',
      width: 'string',
      height: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $tea.Model {
  index?: string;
  codecName?: string;
  codecLongName?: string;
  codecTimeBase?: string;
  codecTagString?: string;
  codecTag?: string;
  profile?: string;
  sampleFmt?: string;
  sampleRate?: string;
  channels?: string;
  channelLayout?: string;
  timebase?: string;
  startTime?: string;
  duration?: string;
  bitrate?: string;
  fps?: string;
  numFrames?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      codecName: 'CodecName',
      codecLongName: 'CodecLongName',
      codecTimeBase: 'CodecTimeBase',
      codecTagString: 'CodecTagString',
      codecTag: 'CodecTag',
      profile: 'Profile',
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
      channels: 'Channels',
      channelLayout: 'ChannelLayout',
      timebase: 'Timebase',
      startTime: 'StartTime',
      duration: 'Duration',
      bitrate: 'Bitrate',
      fps: 'Fps',
      numFrames: 'NumFrames',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      codecName: 'string',
      codecLongName: 'string',
      codecTimeBase: 'string',
      codecTagString: 'string',
      codecTag: 'string',
      profile: 'string',
      sampleFmt: 'string',
      sampleRate: 'string',
      channels: 'string',
      channelLayout: 'string',
      timebase: 'string',
      startTime: 'string',
      duration: 'string',
      bitrate: 'string',
      fps: 'string',
      numFrames: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $tea.Model {
  index?: string;
  codecName?: string;
  codecLongName?: string;
  profile?: string;
  codecTimeBase?: string;
  codecTagString?: string;
  codecTag?: string;
  width?: string;
  height?: string;
  hasBFrames?: string;
  sar?: string;
  dar?: string;
  pixFmt?: string;
  level?: string;
  fps?: string;
  avgFPS?: string;
  timebase?: string;
  startTime?: string;
  duration?: string;
  bitrate?: string;
  numFrames?: string;
  lang?: string;
  rotate?: string;
  nbFrames?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      codecName: 'CodecName',
      codecLongName: 'CodecLongName',
      profile: 'Profile',
      codecTimeBase: 'CodecTimeBase',
      codecTagString: 'CodecTagString',
      codecTag: 'CodecTag',
      width: 'Width',
      height: 'Height',
      hasBFrames: 'HasBFrames',
      sar: 'Sar',
      dar: 'Dar',
      pixFmt: 'PixFmt',
      level: 'Level',
      fps: 'Fps',
      avgFPS: 'AvgFPS',
      timebase: 'Timebase',
      startTime: 'StartTime',
      duration: 'Duration',
      bitrate: 'Bitrate',
      numFrames: 'NumFrames',
      lang: 'Lang',
      rotate: 'Rotate',
      nbFrames: 'Nb_frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      codecName: 'string',
      codecLongName: 'string',
      profile: 'string',
      codecTimeBase: 'string',
      codecTagString: 'string',
      codecTag: 'string',
      width: 'string',
      height: 'string',
      hasBFrames: 'string',
      sar: 'string',
      dar: 'string',
      pixFmt: 'string',
      level: 'string',
      fps: 'string',
      avgFPS: 'string',
      timebase: 'string',
      startTime: 'string',
      duration: 'string',
      bitrate: 'string',
      numFrames: 'string',
      lang: 'string',
      rotate: 'string',
      nbFrames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $tea.Model {
  index?: string;
  codecName?: string;
  codecLongName?: string;
  codecTimeBase?: string;
  codecTagString?: string;
  codecTag?: string;
  timebase?: string;
  startTime?: string;
  duration?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      codecName: 'CodecName',
      codecLongName: 'CodecLongName',
      codecTimeBase: 'CodecTimeBase',
      codecTagString: 'CodecTagString',
      codecTag: 'CodecTag',
      timebase: 'Timebase',
      startTime: 'StartTime',
      duration: 'Duration',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      codecName: 'string',
      codecLongName: 'string',
      codecTimeBase: 'string',
      codecTagString: 'string',
      codecTag: 'string',
      timebase: 'string',
      startTime: 'string',
      duration: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoList extends $tea.Model {
  fileBasicInfo?: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  audioStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  videoStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
  subtitleStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
      audioStreamInfoList: 'AudioStreamInfoList',
      videoStreamInfoList: 'VideoStreamInfoList',
      subtitleStreamInfoList: 'SubtitleStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfo extends $tea.Model {
  mediaId?: string;
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  dynamicMetaDataList?: GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList[];
  aiRoughDataList?: GetMediaInfoResponseBodyMediaInfoAiRoughDataList[];
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaBasicInfo: 'MediaBasicInfo',
      dynamicMetaDataList: 'DynamicMetaDataList',
      aiRoughDataList: 'AiRoughDataList',
      fileInfoList: 'FileInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaBasicInfo: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      dynamicMetaDataList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoDynamicMetaDataList },
      aiRoughDataList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoAiRoughDataList },
      fileInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaProducingJobResponseBodyMediaProducingJob extends $tea.Model {
  jobId?: string;
  projectId?: string;
  mediaId?: string;
  mediaURL?: string;
  timeline?: string;
  templateId?: string;
  clipsParam?: string;
  duration?: number;
  createTime?: string;
  completeTime?: string;
  status?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      projectId: 'ProjectId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      timeline: 'Timeline',
      templateId: 'TemplateId',
      clipsParam: 'ClipsParam',
      duration: 'Duration',
      createTime: 'CreateTime',
      completeTime: 'CompleteTime',
      status: 'Status',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      projectId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      timeline: 'string',
      templateId: 'string',
      clipsParam: 'string',
      duration: 'number',
      createTime: 'string',
      completeTime: 'string',
      status: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponseBodyMediaTagList extends $tea.Model {
  mediaTagId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  mediaType?: string;
  businessType?: string;
  source?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  userData?: string;
  snapshots?: string;
  status?: string;
  transcodeStatus?: string;
  createTime?: string;
  modifiedTime?: string;
  deletedTime?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      inputURL: 'InputURL',
      mediaType: 'MediaType',
      businessType: 'BusinessType',
      source: 'Source',
      title: 'Title',
      description: 'Description',
      category: 'Category',
      mediaTags: 'MediaTags',
      coverURL: 'CoverURL',
      userData: 'UserData',
      snapshots: 'Snapshots',
      status: 'Status',
      transcodeStatus: 'TranscodeStatus',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      deletedTime: 'DeletedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      inputURL: 'string',
      mediaType: 'string',
      businessType: 'string',
      source: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      mediaTags: 'string',
      coverURL: 'string',
      userData: 'string',
      snapshots: 'string',
      status: 'string',
      transcodeStatus: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      deletedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  fileName?: string;
  fileStatus?: string;
  fileType?: string;
  fileSize?: string;
  fileUrl?: string;
  region?: string;
  formatName?: string;
  duration?: string;
  bitrate?: string;
  width?: string;
  height?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      region: 'Region',
      formatName: 'FormatName',
      duration: 'Duration',
      bitrate: 'Bitrate',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileSize: 'string',
      fileUrl: 'string',
      region: 'string',
      formatName: 'string',
      duration: 'string',
      bitrate: 'string',
      width: 'string',
      height: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaBasicInfosResponseBodyMediaInfos extends $tea.Model {
  mediaId?: string;
  mediaBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  fileInfoList?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaBasicInfo: 'MediaBasicInfo',
      fileInfoList: 'FileInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
      fileInfoList: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfosFileInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaProducingJobsResponseBodyMediaProducingJobList extends $tea.Model {
  jobId?: string;
  projectId?: string;
  mediaId?: string;
  mediaURL?: string;
  timeline?: string;
  templateId?: string;
  clipsParam?: string;
  duration?: number;
  createTime?: string;
  completeTime?: string;
  modifiedTime?: string;
  status?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      projectId: 'ProjectId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      timeline: 'Timeline',
      templateId: 'TemplateId',
      clipsParam: 'ClipsParam',
      duration: 'Duration',
      createTime: 'CreateTime',
      completeTime: 'CompleteTime',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      projectId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      timeline: 'string',
      templateId: 'string',
      clipsParam: 'string',
      duration: 'number',
      createTime: 'string',
      completeTime: 'string',
      modifiedTime: 'string',
      status: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  mediaType?: string;
  businessType?: string;
  source?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  userData?: string;
  snapshots?: string;
  status?: string;
  transcodeStatus?: string;
  createTime?: string;
  modifiedTime?: string;
  deletedTime?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      inputURL: 'InputURL',
      mediaType: 'MediaType',
      businessType: 'BusinessType',
      source: 'Source',
      title: 'Title',
      description: 'Description',
      category: 'Category',
      mediaTags: 'MediaTags',
      coverURL: 'CoverURL',
      userData: 'UserData',
      snapshots: 'Snapshots',
      status: 'Status',
      transcodeStatus: 'TranscodeStatus',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      deletedTime: 'DeletedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      inputURL: 'string',
      mediaType: 'string',
      businessType: 'string',
      source: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      mediaTags: 'string',
      coverURL: 'string',
      userData: 'string',
      snapshots: 'string',
      status: 'string',
      transcodeStatus: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      deletedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
  fileName?: string;
  fileStatus?: string;
  fileType?: string;
  fileSize?: string;
  fileUrl?: string;
  region?: string;
  formatName?: string;
  duration?: string;
  bitrate?: string;
  width?: string;
  height?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      region: 'Region',
      formatName: 'FormatName',
      duration: 'Duration',
      bitrate: 'Bitrate',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileSize: 'string',
      fileUrl: 'string',
      region: 'string',
      formatName: 'string',
      duration: 'string',
      bitrate: 'string',
      width: 'string',
      height: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicMediaBasicInfosResponseBodyMediaInfos extends $tea.Model {
  mediaId?: string;
  mediaBasicInfo?: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  fileInfoList?: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaBasicInfo: 'MediaBasicInfo',
      fileInfoList: 'FileInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaBasicInfo: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
      fileInfoList: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEditingProjectResponseBodyProjectList extends $tea.Model {
  projectId?: string;
  title?: string;
  timeline?: string;
  description?: string;
  coverURL?: string;
  createTime?: string;
  modifiedTime?: string;
  duration?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      title: 'Title',
      timeline: 'Timeline',
      description: 'Description',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      duration: 'Duration',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      title: 'string',
      timeline: 'string',
      description: 'string',
      coverURL: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      duration: 'number',
      status: 'string',
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
      'ap-northeast-1': "ice.aliyuncs.com",
      'ap-northeast-2-pop': "ice.aliyuncs.com",
      'ap-south-1': "ice.aliyuncs.com",
      'ap-southeast-1': "ice.aliyuncs.com",
      'ap-southeast-2': "ice.aliyuncs.com",
      'ap-southeast-3': "ice.aliyuncs.com",
      'ap-southeast-5': "ice.aliyuncs.com",
      'cn-beijing': "ice.aliyuncs.com",
      'cn-beijing-finance-1': "ice.aliyuncs.com",
      'cn-beijing-finance-pop': "ice.aliyuncs.com",
      'cn-beijing-gov-1': "ice.aliyuncs.com",
      'cn-beijing-nu16-b01': "ice.aliyuncs.com",
      'cn-chengdu': "ice.aliyuncs.com",
      'cn-edge-1': "ice.aliyuncs.com",
      'cn-fujian': "ice.aliyuncs.com",
      'cn-haidian-cm12-c01': "ice.aliyuncs.com",
      'cn-hangzhou': "ice.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ice.aliyuncs.com",
      'cn-hangzhou-finance': "ice.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ice.aliyuncs.com",
      'cn-hangzhou-test-306': "ice.aliyuncs.com",
      'cn-hongkong': "ice.aliyuncs.com",
      'cn-hongkong-finance-pop': "ice.aliyuncs.com",
      'cn-huhehaote': "ice.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ice.aliyuncs.com",
      'cn-north-2-gov-1': "ice.aliyuncs.com",
      'cn-qingdao': "ice.aliyuncs.com",
      'cn-qingdao-nebula': "ice.aliyuncs.com",
      'cn-shanghai-et15-b01': "ice.aliyuncs.com",
      'cn-shanghai-et2-b01': "ice.aliyuncs.com",
      'cn-shanghai-finance-1': "ice.aliyuncs.com",
      'cn-shanghai-inner': "ice.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ice.aliyuncs.com",
      'cn-shenzhen': "ice.aliyuncs.com",
      'cn-shenzhen-finance-1': "ice.aliyuncs.com",
      'cn-shenzhen-inner': "ice.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ice.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ice.aliyuncs.com",
      'cn-wuhan': "ice.aliyuncs.com",
      'cn-wulanchabu': "ice.aliyuncs.com",
      'cn-yushanfang': "ice.aliyuncs.com",
      'cn-zhangbei': "ice.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ice.aliyuncs.com",
      'cn-zhangjiakou': "ice.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ice.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ice.aliyuncs.com",
      'eu-central-1': "ice.aliyuncs.com",
      'eu-west-1': "ice.aliyuncs.com",
      'eu-west-1-oxs': "ice.aliyuncs.com",
      'me-east-1': "ice.aliyuncs.com",
      'rus-west-1-pop': "ice.aliyuncs.com",
      'us-east-1': "ice.aliyuncs.com",
      'us-west-1': "ice.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createEditingProjectWithOptions(request: CreateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEditingProjectResponse>(await this.doRPCRequest("CreateEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEditingProjectResponse({}));
  }

  async createEditingProject(request: CreateEditingProjectRequest): Promise<CreateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEditingProjectWithOptions(request, runtime);
  }

  async deleteEditingProjectsWithOptions(request: DeleteEditingProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEditingProjectsResponse>(await this.doRPCRequest("DeleteEditingProjects", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEditingProjectsResponse({}));
  }

  async deleteEditingProjects(request: DeleteEditingProjectsRequest): Promise<DeleteEditingProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectsWithOptions(request, runtime);
  }

  async deleteMediaInfosWithOptions(request: DeleteMediaInfosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMediaInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMediaInfosResponse>(await this.doRPCRequest("DeleteMediaInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMediaInfosResponse({}));
  }

  async deleteMediaInfos(request: DeleteMediaInfosRequest): Promise<DeleteMediaInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMediaInfosWithOptions(request, runtime);
  }

  async describeIceProductStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeIceProductStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeIceProductStatusResponse>(await this.doRPCRequest("DescribeIceProductStatus", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIceProductStatusResponse({}));
  }

  async describeIceProductStatus(): Promise<DescribeIceProductStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIceProductStatusWithOptions(runtime);
  }

  async describeRelatedAuthorizationStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRelatedAuthorizationStatusResponse>(await this.doRPCRequest("DescribeRelatedAuthorizationStatus", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeRelatedAuthorizationStatusResponse({}));
  }

  async describeRelatedAuthorizationStatus(): Promise<DescribeRelatedAuthorizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRelatedAuthorizationStatusWithOptions(runtime);
  }

  async getEditingProjectWithOptions(request: GetEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetEditingProjectResponse>(await this.doRPCRequest("GetEditingProject", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetEditingProjectResponse({}));
  }

  async getEditingProject(request: GetEditingProjectRequest): Promise<GetEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  async getMediaInfoWithOptions(request: GetMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaInfoResponse>(await this.doRPCRequest("GetMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaInfoResponse({}));
  }

  async getMediaInfo(request: GetMediaInfoRequest): Promise<GetMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaInfoWithOptions(request, runtime);
  }

  async getMediaProducingJobWithOptions(request: GetMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaProducingJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMediaProducingJobResponse>(await this.doRPCRequest("GetMediaProducingJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetMediaProducingJobResponse({}));
  }

  async getMediaProducingJob(request: GetMediaProducingJobRequest): Promise<GetMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaProducingJobWithOptions(request, runtime);
  }

  async listAllPublicMediaTagsWithOptions(request: ListAllPublicMediaTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListAllPublicMediaTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAllPublicMediaTagsResponse>(await this.doRPCRequest("ListAllPublicMediaTags", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListAllPublicMediaTagsResponse({}));
  }

  async listAllPublicMediaTags(request: ListAllPublicMediaTagsRequest): Promise<ListAllPublicMediaTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllPublicMediaTagsWithOptions(request, runtime);
  }

  async listMediaBasicInfosWithOptions(request: ListMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaBasicInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediaBasicInfosResponse>(await this.doRPCRequest("ListMediaBasicInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediaBasicInfosResponse({}));
  }

  async listMediaBasicInfos(request: ListMediaBasicInfosRequest): Promise<ListMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaBasicInfosWithOptions(request, runtime);
  }

  async listMediaProducingJobsWithOptions(request: ListMediaProducingJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListMediaProducingJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMediaProducingJobsResponse>(await this.doRPCRequest("ListMediaProducingJobs", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListMediaProducingJobsResponse({}));
  }

  async listMediaProducingJobs(request: ListMediaProducingJobsRequest): Promise<ListMediaProducingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMediaProducingJobsWithOptions(request, runtime);
  }

  async listPublicMediaBasicInfosWithOptions(request: ListPublicMediaBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicMediaBasicInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPublicMediaBasicInfosResponse>(await this.doRPCRequest("ListPublicMediaBasicInfos", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListPublicMediaBasicInfosResponse({}));
  }

  async listPublicMediaBasicInfos(request: ListPublicMediaBasicInfosRequest): Promise<ListPublicMediaBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicMediaBasicInfosWithOptions(request, runtime);
  }

  async registerMediaInfoWithOptions(request: RegisterMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterMediaInfoResponse>(await this.doRPCRequest("RegisterMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterMediaInfoResponse({}));
  }

  async registerMediaInfo(request: RegisterMediaInfoRequest): Promise<RegisterMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMediaInfoWithOptions(request, runtime);
  }

  async searchEditingProjectWithOptions(request: SearchEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchEditingProjectResponse>(await this.doRPCRequest("SearchEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SearchEditingProjectResponse({}));
  }

  async searchEditingProject(request: SearchEditingProjectRequest): Promise<SearchEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  async submitMediaProducingJobWithOptions(request: SubmitMediaProducingJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitMediaProducingJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitMediaProducingJobResponse>(await this.doRPCRequest("SubmitMediaProducingJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitMediaProducingJobResponse({}));
  }

  async submitMediaProducingJob(request: SubmitMediaProducingJobRequest): Promise<SubmitMediaProducingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitMediaProducingJobWithOptions(request, runtime);
  }

  async updateEditingProjectWithOptions(request: UpdateEditingProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEditingProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEditingProjectResponse>(await this.doRPCRequest("UpdateEditingProject", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEditingProjectResponse({}));
  }

  async updateEditingProject(request: UpdateEditingProjectRequest): Promise<UpdateEditingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  async updateMediaInfoWithOptions(request: UpdateMediaInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMediaInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMediaInfoResponse>(await this.doRPCRequest("UpdateMediaInfo", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMediaInfoResponse({}));
  }

  async updateMediaInfo(request: UpdateMediaInfoRequest): Promise<UpdateMediaInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMediaInfoWithOptions(request, runtime);
  }

}
