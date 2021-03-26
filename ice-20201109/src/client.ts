// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListSmartJobsRequest extends $tea.Model {
  status?: number;
  nextToken?: string;
  maxResults?: number;
  pageNo?: number;
  pageSize?: number;
  title?: string;
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      title: 'Title',
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      nextToken: 'string',
      maxResults: 'number',
      pageNo: 'number',
      pageSize: 'number',
      title: 'string',
      jobType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBody extends $tea.Model {
  requestId?: string;
  smartJobList?: ListSmartJobsResponseBodySmartJobList[];
  nextToken?: string;
  maxResults?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartJobList: 'SmartJobList',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartJobList: { 'type': 'array', 'itemType': ListSmartJobsResponseBodySmartJobList },
      nextToken: 'string',
      maxResults: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSmartJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSmartJobsResponseBody,
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
  includeFileBasicInfo?: boolean;
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
      includeFileBasicInfo: 'IncludeFileBasicInfo',
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
      includeFileBasicInfo: 'boolean',
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

export class SubmitSubtitleProduceJobRequest extends $tea.Model {
  editingConfig?: string;
  type?: string;
  outputConfig?: string;
  inputConfig?: string;
  isAsync?: number;
  title?: string;
  description?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      type: 'Type',
      outputConfig: 'OutputConfig',
      inputConfig: 'InputConfig',
      isAsync: 'IsAsync',
      title: 'Title',
      description: 'Description',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: 'string',
      type: 'string',
      outputConfig: 'string',
      inputConfig: 'string',
      isAsync: 'number',
      title: 'string',
      description: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSubtitleProduceJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSubtitleProduceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSubtitleProduceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSubtitleProduceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobRequest extends $tea.Model {
  keyword?: string;
  inputFile?: string;
  userData?: string;
  title?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      inputFile: 'InputFile',
      userData: 'UserData',
      title: 'Title',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      inputFile: 'string',
      userData: 'string',
      title: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  output?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      output: 'Output',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      output: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitKeyWordCutJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitKeyWordCutJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitKeyWordCutJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsRequest extends $tea.Model {
  projectId?: string;
  materialMaps?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      materialMaps: 'MaterialMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      materialMaps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBody extends $tea.Model {
  requestId?: string;
  projectId?: string;
  mediaInfos?: AddEditingProjectMaterialsResponseBodyMediaInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectId: 'ProjectId',
      mediaInfos: 'MediaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectId: 'string',
      mediaInfos: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEditingProjectMaterialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobRequest extends $tea.Model {
  inputFile?: string;
  userData?: string;
  title?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
      title: 'Title',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      userData: 'string',
      title: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  output?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      output: 'Output',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      output: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitASRJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitASRJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitASRJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
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

export class DeleteSmartJobRequest extends $tea.Model {
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

export class DeleteSmartJobResponseBody extends $tea.Model {
  requestId?: string;
  state?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSmartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIRJobRequest extends $tea.Model {
  inputFile?: string;
  userData?: string;
  title?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
      title: 'Title',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      userData: 'string',
      title: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIRJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  output?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      output: 'Output',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      output: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIRJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitIRJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitIRJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectMaterialsRequest extends $tea.Model {
  projectId?: string;
  materialIds?: string;
  materialType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      materialIds: 'MaterialIds',
      materialType: 'MaterialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      materialIds: 'string',
      materialType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEditingProjectMaterialsResponseBody extends $tea.Model {
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

export class DeleteEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEditingProjectMaterialsResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
      projectId: 'string',
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

export class SearchEditingProjectRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  status?: string;
  sortBy?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      sortBy: 'SortBy',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
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

export class SubmitSmartJobRequest extends $tea.Model {
  editingConfig?: string;
  outputConfig?: string;
  inputConfig?: string;
  title?: string;
  description?: string;
  userData?: string;
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      outputConfig: 'OutputConfig',
      inputConfig: 'InputConfig',
      title: 'Title',
      description: 'Description',
      userData: 'UserData',
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: 'string',
      outputConfig: 'string',
      inputConfig: 'string',
      title: 'string',
      description: 'string',
      userData: 'string',
      jobType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSmartJobResponseBody,
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

export class GetEditingProjectMaterialsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $tea.Model {
  requestId?: string;
  projectId?: string;
  mediaInfos?: GetEditingProjectMaterialsResponseBodyMediaInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectId: 'ProjectId',
      mediaInfos: 'MediaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectId: 'string',
      mediaInfos: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEditingProjectMaterialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEditingProjectMaterialsResponseBody,
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

export class UpdateSmartJobRequest extends $tea.Model {
  jobId?: string;
  FEExtend?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      FEExtend: 'FEExtend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      FEExtend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  FEExtend?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      FEExtend: 'FEExtend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      FEExtend: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSmartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSmartJobResponseBody,
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

export class CreateEditingProjectRequest extends $tea.Model {
  title?: string;
  description?: string;
  timeline?: string;
  coverURL?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      timeline: 'Timeline',
      coverURL: 'CoverURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      timeline: 'string',
      coverURL: 'string',
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

export class ListPublicMediaBasicInfosRequest extends $tea.Model {
  mediaTagId?: string;
  nextToken?: string;
  maxResults?: number;
  includeFileBasicInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      includeFileBasicInfo: 'IncludeFileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      nextToken: 'string',
      maxResults: 'number',
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

export class UpdateMediaInfoRequest extends $tea.Model {
  mediaId?: string;
  inputURL?: string;
  businessType?: string;
  title?: string;
  description?: string;
  category?: string;
  mediaTags?: string;
  coverURL?: string;
  dynamicMetaDataList?: string;
  userData?: string;
  appendTags?: boolean;
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
      dynamicMetaDataList: 'DynamicMetaDataList',
      userData: 'UserData',
      appendTags: 'AppendTags',
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
      dynamicMetaDataList: 'string',
      userData: 'string',
      appendTags: 'boolean',
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

export class GetSmartHandleJobRequest extends $tea.Model {
  jobId?: string;
  withAiResult?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      withAiResult: 'WithAiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      withAiResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  output?: string;
  state?: string;
  userData?: string;
  FEExtend?: string;
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      output: 'Output',
      state: 'State',
      userData: 'UserData',
      FEExtend: 'FEExtend',
      smartJobInfo: 'SmartJobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      output: 'string',
      state: 'string',
      userData: 'string',
      FEExtend: 'string',
      smartJobInfo: GetSmartHandleJobResponseBodySmartJobInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSmartHandleJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSmartHandleJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobRequest extends $tea.Model {
  inputFile?: string;
  userData?: string;
  title?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      userData: 'UserData',
      title: 'Title',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      userData: 'string',
      title: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  output?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
      output: 'Output',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
      output: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPPTCutJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitPPTCutJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitPPTCutJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobListInputConfig extends $tea.Model {
  inputFile?: string;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobListOutputConfig extends $tea.Model {
  bucket?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartJobsResponseBodySmartJobList extends $tea.Model {
  jobId?: string;
  title?: string;
  description?: string;
  userId?: number;
  jobType?: string;
  editingConfig?: string;
  userData?: string;
  jobState?: string;
  createTime?: string;
  modifiedTime?: string;
  inputConfig?: ListSmartJobsResponseBodySmartJobListInputConfig;
  outputConfig?: ListSmartJobsResponseBodySmartJobListOutputConfig;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      title: 'Title',
      description: 'Description',
      userId: 'UserId',
      jobType: 'JobType',
      editingConfig: 'EditingConfig',
      userData: 'UserData',
      jobState: 'JobState',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      title: 'string',
      description: 'string',
      userId: 'number',
      jobType: 'string',
      editingConfig: 'string',
      userData: 'string',
      jobState: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      inputConfig: ListSmartJobsResponseBodySmartJobListInputConfig,
      outputConfig: ListSmartJobsResponseBodySmartJobListOutputConfig,
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBodyMediaInfos extends $tea.Model {
  mediaId?: string;
  mediaBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  fileInfoList?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
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
      mediaBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
      fileInfoList: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
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

export class ListMediaProducingJobsResponseBodyMediaProducingJobList extends $tea.Model {
  jobId?: string;
  projectId?: string;
  mediaId?: string;
  mediaURL?: string;
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

export class GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $tea.Model {
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

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $tea.Model {
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

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $tea.Model {
  fileBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfos extends $tea.Model {
  mediaId?: string;
  mediaBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  fileInfoList?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
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
      mediaBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
      fileInfoList: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllPublicMediaTagsResponseBodyMediaTagList extends $tea.Model {
  mediaTagId?: string;
  mediaTagNameChinese?: string;
  mediaTagNameEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      mediaTagNameChinese: 'MediaTagNameChinese',
      mediaTagNameEnglish: 'MediaTagNameEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      mediaTagNameChinese: 'string',
      mediaTagNameEnglish: 'string',
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

export class GetSmartHandleJobResponseBodySmartJobInfoInputConfig extends $tea.Model {
  inputFile?: string;
  jobParameters?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      jobParameters: 'JobParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      jobParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartHandleJobResponseBodySmartJobInfo extends $tea.Model {
  title?: string;
  description?: string;
  userId?: string;
  editingConfig?: string;
  inputConfig?: GetSmartHandleJobResponseBodySmartJobInfoInputConfig;
  outputConfig?: string;
  createTime?: string;
  modifiedTime?: string;
  jobType?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      userId: 'UserId',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'outputConfig',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      jobType: 'JobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      userId: 'string',
      editingConfig: 'string',
      inputConfig: GetSmartHandleJobResponseBodySmartJobInfoInputConfig,
      outputConfig: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      jobType: 'string',
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

  async listSmartJobsWithOptions(request: ListSmartJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSmartJobsResponse>(await this.doRPCRequest("ListSmartJobs", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new ListSmartJobsResponse({}));
  }

  async listSmartJobs(request: ListSmartJobsRequest): Promise<ListSmartJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartJobsWithOptions(request, runtime);
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

  async submitSubtitleProduceJobWithOptions(request: SubmitSubtitleProduceJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSubtitleProduceJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSubtitleProduceJobResponse>(await this.doRPCRequest("SubmitSubtitleProduceJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSubtitleProduceJobResponse({}));
  }

  async submitSubtitleProduceJob(request: SubmitSubtitleProduceJobRequest): Promise<SubmitSubtitleProduceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSubtitleProduceJobWithOptions(request, runtime);
  }

  async submitKeyWordCutJobWithOptions(request: SubmitKeyWordCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitKeyWordCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SubmitKeyWordCutJobResponse>(await this.doRPCRequest("SubmitKeyWordCutJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new SubmitKeyWordCutJobResponse({}));
  }

  async submitKeyWordCutJob(request: SubmitKeyWordCutJobRequest): Promise<SubmitKeyWordCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitKeyWordCutJobWithOptions(request, runtime);
  }

  async addEditingProjectMaterialsWithOptions(request: AddEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<AddEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEditingProjectMaterialsResponse>(await this.doRPCRequest("AddEditingProjectMaterials", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddEditingProjectMaterialsResponse({}));
  }

  async addEditingProjectMaterials(request: AddEditingProjectMaterialsRequest): Promise<AddEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEditingProjectMaterialsWithOptions(request, runtime);
  }

  async submitASRJobWithOptions(request: SubmitASRJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitASRJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitASRJobResponse>(await this.doRPCRequest("SubmitASRJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitASRJobResponse({}));
  }

  async submitASRJob(request: SubmitASRJobRequest): Promise<SubmitASRJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitASRJobWithOptions(request, runtime);
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

  async deleteSmartJobWithOptions(request: DeleteSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSmartJobResponse>(await this.doRPCRequest("DeleteSmartJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSmartJobResponse({}));
  }

  async deleteSmartJob(request: DeleteSmartJobRequest): Promise<DeleteSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartJobWithOptions(request, runtime);
  }

  async submitIRJobWithOptions(request: SubmitIRJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIRJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitIRJobResponse>(await this.doRPCRequest("SubmitIRJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitIRJobResponse({}));
  }

  async submitIRJob(request: SubmitIRJobRequest): Promise<SubmitIRJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIRJobWithOptions(request, runtime);
  }

  async deleteEditingProjectMaterialsWithOptions(request: DeleteEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteEditingProjectMaterialsResponse>(await this.doRPCRequest("DeleteEditingProjectMaterials", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteEditingProjectMaterialsResponse({}));
  }

  async deleteEditingProjectMaterials(request: DeleteEditingProjectMaterialsRequest): Promise<DeleteEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
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

  async submitSmartJobWithOptions(request: SubmitSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSmartJobResponse>(await this.doRPCRequest("SubmitSmartJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSmartJobResponse({}));
  }

  async submitSmartJob(request: SubmitSmartJobRequest): Promise<SubmitSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmartJobWithOptions(request, runtime);
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

  async getEditingProjectMaterialsWithOptions(request: GetEditingProjectMaterialsRequest, runtime: $Util.RuntimeOptions): Promise<GetEditingProjectMaterialsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetEditingProjectMaterialsResponse>(await this.doRPCRequest("GetEditingProjectMaterials", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetEditingProjectMaterialsResponse({}));
  }

  async getEditingProjectMaterials(request: GetEditingProjectMaterialsRequest): Promise<GetEditingProjectMaterialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
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

  async updateSmartJobWithOptions(request: UpdateSmartJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSmartJobResponse>(await this.doRPCRequest("UpdateSmartJob", "2020-11-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSmartJobResponse({}));
  }

  async updateSmartJob(request: UpdateSmartJobRequest): Promise<UpdateSmartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartJobWithOptions(request, runtime);
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

  async getSmartHandleJobWithOptions(request: GetSmartHandleJobRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartHandleJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSmartHandleJobResponse>(await this.doRPCRequest("GetSmartHandleJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new GetSmartHandleJobResponse({}));
  }

  async getSmartHandleJob(request: GetSmartHandleJobRequest): Promise<GetSmartHandleJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartHandleJobWithOptions(request, runtime);
  }

  async submitPPTCutJobWithOptions(request: SubmitPPTCutJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPPTCutJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SubmitPPTCutJobResponse>(await this.doRPCRequest("SubmitPPTCutJob", "2020-11-09", "HTTPS", "GET", "AK", "json", req, runtime), new SubmitPPTCutJobResponse({}));
  }

  async submitPPTCutJob(request: SubmitPPTCutJobRequest): Promise<SubmitPPTCutJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPPTCutJobWithOptions(request, runtime);
  }

}
