// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAIJobRequest extends $tea.Model {
  app?: string;
  areaThreshold?: number;
  confidence?: number;
  inputs?: CreateAIJobRequestInputs[];
  jobName?: string;
  modelProjectId?: number;
  modelVersion?: string;
  projectId?: number;
  shapeDataId?: string;
  shapeWkt?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      areaThreshold: 'AreaThreshold',
      confidence: 'Confidence',
      inputs: 'Inputs',
      jobName: 'JobName',
      modelProjectId: 'ModelProjectId',
      modelVersion: 'ModelVersion',
      projectId: 'ProjectId',
      shapeDataId: 'ShapeDataId',
      shapeWkt: 'ShapeWkt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      areaThreshold: 'number',
      confidence: 'number',
      inputs: { 'type': 'array', 'itemType': CreateAIJobRequestInputs },
      jobName: 'string',
      modelProjectId: 'number',
      modelVersion: 'string',
      projectId: 'number',
      shapeDataId: 'string',
      shapeWkt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobShrinkRequest extends $tea.Model {
  app?: string;
  areaThreshold?: number;
  confidence?: number;
  inputsShrink?: string;
  jobName?: string;
  modelProjectId?: number;
  modelVersion?: string;
  projectId?: number;
  shapeDataId?: string;
  shapeWkt?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      areaThreshold: 'AreaThreshold',
      confidence: 'Confidence',
      inputsShrink: 'Inputs',
      jobName: 'JobName',
      modelProjectId: 'ModelProjectId',
      modelVersion: 'ModelVersion',
      projectId: 'ProjectId',
      shapeDataId: 'ShapeDataId',
      shapeWkt: 'ShapeWkt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      areaThreshold: 'number',
      confidence: 'number',
      inputsShrink: 'string',
      jobName: 'string',
      modelProjectId: 'number',
      modelVersion: 'string',
      projectId: 'number',
      shapeDataId: 'string',
      shapeWkt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobResponseBody extends $tea.Model {
  app?: string;
  jobs?: CreateAIJobResponseBodyJobs[];
  projectId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      jobs: 'Jobs',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      jobs: { 'type': 'array', 'itemType': CreateAIJobResponseBodyJobs },
      projectId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAIJobResponseBody;
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
      body: CreateAIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  jobIds?: number[];
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsShrinkRequest extends $tea.Model {
  jobIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobIdsShrink: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
  num?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteJobsResponseBody;
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
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserMapserviceDatasRequest extends $tea.Model {
  dataIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataIds: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserMapserviceDatasShrinkRequest extends $tea.Model {
  dataIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataIdsShrink: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserMapserviceDatasResponseBody extends $tea.Model {
  num?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserMapserviceDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserMapserviceDatasResponseBody;
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
      body: DeleteUserMapserviceDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRasterDatasRequest extends $tea.Model {
  dataIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataIds: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRasterDatasShrinkRequest extends $tea.Model {
  dataIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataIdsShrink: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRasterDatasResponseBody extends $tea.Model {
  num?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRasterDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserRasterDatasResponseBody;
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
      body: DeleteUserRasterDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVectorDatasRequest extends $tea.Model {
  dataIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataIds: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVectorDatasShrinkRequest extends $tea.Model {
  dataIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataIdsShrink: 'DataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVectorDatasResponseBody extends $tea.Model {
  num?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVectorDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserVectorDatasResponseBody;
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
      body: DeleteUserVectorDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDataRequest extends $tea.Model {
  bandNo?: string;
  compress?: boolean;
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      bandNo: 'BandNo',
      compress: 'Compress',
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandNo: 'string',
      compress: 'boolean',
      dataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDataResponseBody extends $tea.Model {
  dataId?: string;
  downloadUrl?: string;
  finished?: boolean;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      downloadUrl: 'DownloadUrl',
      finished: 'Finished',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      downloadUrl: 'string',
      finished: 'boolean',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadDataResponseBody;
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
      body: DownloadDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsRequest extends $tea.Model {
  appName?: string;
  jobIds?: number[];
  jobType?: string;
  nameLike?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      jobIds: 'JobIds',
      jobType: 'JobType',
      nameLike: 'NameLike',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      jobIds: { 'type': 'array', 'itemType': 'number' },
      jobType: 'string',
      nameLike: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsShrinkRequest extends $tea.Model {
  appName?: string;
  jobIdsShrink?: string;
  jobType?: string;
  nameLike?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      jobIdsShrink: 'JobIds',
      jobType: 'JobType',
      nameLike: 'NameLike',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      jobIdsShrink: 'string',
      jobType: 'string',
      nameLike: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsResponseBody extends $tea.Model {
  list?: GetJobsResponseBodyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetJobsResponseBodyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetJobsResponseBody;
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
      body: GetJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenRequest extends $tea.Model {
  forceCreate?: boolean;
  static names(): { [key: string]: string } {
    return {
      forceCreate: 'ForceCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceCreate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenResponseBody extends $tea.Model {
  expiredAt?: number;
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredAt: 'ExpiredAt',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredAt: 'number',
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserTokenResponseBody;
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
      body: GetUserTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasRequest extends $tea.Model {
  cloudageMax?: number;
  cloudageMin?: number;
  dateEnd?: string;
  dateStart?: string;
  pageNumber?: number;
  pageSize?: number;
  regionWkt?: string;
  sourceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      cloudageMax: 'CloudageMax',
      cloudageMin: 'CloudageMin',
      dateEnd: 'DateEnd',
      dateStart: 'DateStart',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionWkt: 'RegionWkt',
      sourceTypeList: 'SourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudageMax: 'number',
      cloudageMin: 'number',
      dateEnd: 'string',
      dateStart: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionWkt: 'string',
      sourceTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasShrinkRequest extends $tea.Model {
  cloudageMax?: number;
  cloudageMin?: number;
  dateEnd?: string;
  dateStart?: string;
  pageNumber?: number;
  pageSize?: number;
  regionWkt?: string;
  sourceTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cloudageMax: 'CloudageMax',
      cloudageMin: 'CloudageMin',
      dateEnd: 'DateEnd',
      dateStart: 'DateStart',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionWkt: 'RegionWkt',
      sourceTypeListShrink: 'SourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudageMax: 'number',
      cloudageMin: 'number',
      dateEnd: 'string',
      dateStart: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionWkt: 'string',
      sourceTypeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasResponseBody extends $tea.Model {
  list?: ListDatasResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDatasResponseBodyList },
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

export class ListDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDatasResponseBody;
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
      body: ListDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMapServiceDatasRequest extends $tea.Model {
  createDay?: string;
  dataId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      createDay: 'CreateDay',
      dataId: 'DataId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDay: 'string',
      dataId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMapServiceDatasResponseBody extends $tea.Model {
  list?: ListUserMapServiceDatasResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUserMapServiceDatasResponseBodyList },
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

export class ListUserMapServiceDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserMapServiceDatasResponseBody;
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
      body: ListUserMapServiceDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRasterDatasRequest extends $tea.Model {
  acquisitionDate?: string;
  dataId?: string;
  fromType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resolution?: number;
  uploadDate?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionDate: 'AcquisitionDate',
      dataId: 'DataId',
      fromType: 'FromType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resolution: 'Resolution',
      uploadDate: 'UploadDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionDate: 'string',
      dataId: 'string',
      fromType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resolution: 'number',
      uploadDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRasterDatasResponseBody extends $tea.Model {
  list?: ListUserRasterDatasResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUserRasterDatasResponseBodyList },
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

export class ListUserRasterDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserRasterDatasResponseBody;
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
      body: ListUserRasterDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVectorDatasRequest extends $tea.Model {
  dataId?: string;
  fromType?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  uploadDate?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      fromType: 'FromType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      uploadDate: 'UploadDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      fromType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      uploadDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVectorDatasResponseBody extends $tea.Model {
  list?: ListUserVectorDatasResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListUserVectorDatasResponseBodyList },
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

export class ListUserVectorDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserVectorDatasResponseBody;
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
      body: ListUserVectorDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMapserviceRequest extends $tea.Model {
  address?: string;
  name?: string;
  projectionType?: string;
  zoomLevelMax?: number;
  zoomLevelMin?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      projectionType: 'ProjectionType',
      zoomLevelMax: 'ZoomLevelMax',
      zoomLevelMin: 'ZoomLevelMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      projectionType: 'string',
      zoomLevelMax: 'number',
      zoomLevelMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMapserviceResponseBody extends $tea.Model {
  dataId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMapserviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishMapserviceResponseBody;
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
      body: PublishMapserviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRasterRequest extends $tea.Model {
  acquisitionDate?: string;
  attachDownloadUrl?: string;
  attachFileType?: string;
  downloadUrl?: string;
  fileType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionDate: 'AcquisitionDate',
      attachDownloadUrl: 'AttachDownloadUrl',
      attachFileType: 'AttachFileType',
      downloadUrl: 'DownloadUrl',
      fileType: 'FileType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionDate: 'string',
      attachDownloadUrl: 'string',
      attachFileType: 'string',
      downloadUrl: 'string',
      fileType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRasterResponseBody extends $tea.Model {
  dataId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishRasterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishRasterResponseBody;
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
      body: PublishRasterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVectorRequest extends $tea.Model {
  downloadUrl?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVectorResponseBody extends $tea.Model {
  dataId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishVectorResponseBody;
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
      body: PublishVectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobRequestInputsDes extends $tea.Model {
  bandNo?: string;
  dataId?: string;
  type?: string;
  zoomLevel?: number;
  static names(): { [key: string]: string } {
    return {
      bandNo: 'BandNo',
      dataId: 'DataId',
      type: 'Type',
      zoomLevel: 'ZoomLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandNo: 'string',
      dataId: 'string',
      type: 'string',
      zoomLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobRequestInputsSrc extends $tea.Model {
  bandNo?: string;
  dataId?: string;
  type?: string;
  zoomLevel?: number;
  static names(): { [key: string]: string } {
    return {
      bandNo: 'BandNo',
      dataId: 'DataId',
      type: 'Type',
      zoomLevel: 'ZoomLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandNo: 'string',
      dataId: 'string',
      type: 'string',
      zoomLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobRequestInputs extends $tea.Model {
  des?: CreateAIJobRequestInputsDes;
  idx?: number;
  src?: CreateAIJobRequestInputsSrc;
  static names(): { [key: string]: string } {
    return {
      des: 'Des',
      idx: 'Idx',
      src: 'Src',
    };
  }

  static types(): { [key: string]: any } {
    return {
      des: CreateAIJobRequestInputsDes,
      idx: 'number',
      src: CreateAIJobRequestInputsSrc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIJobResponseBodyJobs extends $tea.Model {
  jobId?: number;
  name?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      name: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsResponseBodyList extends $tea.Model {
  app?: string;
  jobId?: number;
  jobName?: string;
  jobOutDataId?: string;
  jobType?: number;
  outDataId?: number;
  outDataType?: number;
  outDateType?: number;
  progress?: string;
  requestId?: string;
  status?: number;
  submitDate?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      jobId: 'JobId',
      jobName: 'JobName',
      jobOutDataId: 'JobOutDataId',
      jobType: 'JobType',
      outDataId: 'OutDataId',
      outDataType: 'OutDataType',
      outDateType: 'OutDateType',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      submitDate: 'SubmitDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      jobId: 'number',
      jobName: 'string',
      jobOutDataId: 'string',
      jobType: 'number',
      outDataId: 'number',
      outDataType: 'number',
      outDateType: 'number',
      progress: 'string',
      requestId: 'string',
      status: 'number',
      submitDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasResponseBodyListRasterBands extends $tea.Model {
  bandNo?: string;
  height?: number;
  resolution?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bandNo: 'BandNo',
      height: 'Height',
      resolution: 'Resolution',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandNo: 'string',
      height: 'number',
      resolution: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasResponseBodyListRaster extends $tea.Model {
  acquisitionDateEnd?: string;
  acquisitionDateStart?: string;
  bands?: ListDatasResponseBodyListRasterBands[];
  bbox?: number[];
  cloudCoverage?: number;
  name?: string;
  publishMsg?: string;
  publishStatus?: string;
  sourceType?: string;
  stacId?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionDateEnd: 'AcquisitionDateEnd',
      acquisitionDateStart: 'AcquisitionDateStart',
      bands: 'Bands',
      bbox: 'Bbox',
      cloudCoverage: 'CloudCoverage',
      name: 'Name',
      publishMsg: 'PublishMsg',
      publishStatus: 'PublishStatus',
      sourceType: 'SourceType',
      stacId: 'StacId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionDateEnd: 'string',
      acquisitionDateStart: 'string',
      bands: { 'type': 'array', 'itemType': ListDatasResponseBodyListRasterBands },
      bbox: { 'type': 'array', 'itemType': 'number' },
      cloudCoverage: 'number',
      name: 'string',
      publishMsg: 'string',
      publishStatus: 'string',
      sourceType: 'string',
      stacId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasResponseBodyList extends $tea.Model {
  dataId?: string;
  raster?: ListDatasResponseBodyListRaster;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      raster: 'Raster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      raster: ListDatasResponseBodyListRaster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMapServiceDatasResponseBodyList extends $tea.Model {
  address?: string;
  dataId?: string;
  mapType?: string;
  name?: string;
  projectionType?: string;
  publishMsg?: string;
  publishStatus?: string;
  zoomLevelMax?: number;
  zoomLevelMin?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      dataId: 'DataId',
      mapType: 'MapType',
      name: 'Name',
      projectionType: 'ProjectionType',
      publishMsg: 'PublishMsg',
      publishStatus: 'PublishStatus',
      zoomLevelMax: 'ZoomLevelMax',
      zoomLevelMin: 'ZoomLevelMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      dataId: 'string',
      mapType: 'string',
      name: 'string',
      projectionType: 'string',
      publishMsg: 'string',
      publishStatus: 'string',
      zoomLevelMax: 'number',
      zoomLevelMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRasterDatasResponseBodyListRasterBands extends $tea.Model {
  bandNo?: string;
  height?: number;
  resolution?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bandNo: 'BandNo',
      height: 'Height',
      resolution: 'Resolution',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandNo: 'string',
      height: 'number',
      resolution: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRasterDatasResponseBodyListRaster extends $tea.Model {
  acquisitionDateEnd?: string;
  acquisitionDateStart?: string;
  bands?: ListUserRasterDatasResponseBodyListRasterBands[];
  bbox?: number[];
  cloudCoverage?: number;
  name?: string;
  publishMsg?: string;
  publishStatus?: string;
  sourceType?: string;
  stacId?: string;
  static names(): { [key: string]: string } {
    return {
      acquisitionDateEnd: 'AcquisitionDateEnd',
      acquisitionDateStart: 'AcquisitionDateStart',
      bands: 'Bands',
      bbox: 'Bbox',
      cloudCoverage: 'CloudCoverage',
      name: 'Name',
      publishMsg: 'PublishMsg',
      publishStatus: 'PublishStatus',
      sourceType: 'SourceType',
      stacId: 'StacId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acquisitionDateEnd: 'string',
      acquisitionDateStart: 'string',
      bands: { 'type': 'array', 'itemType': ListUserRasterDatasResponseBodyListRasterBands },
      bbox: { 'type': 'array', 'itemType': 'number' },
      cloudCoverage: 'number',
      name: 'string',
      publishMsg: 'string',
      publishStatus: 'string',
      sourceType: 'string',
      stacId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRasterDatasResponseBodyList extends $tea.Model {
  dataId?: string;
  raster?: ListUserRasterDatasResponseBodyListRaster;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      raster: 'Raster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      raster: ListUserRasterDatasResponseBodyListRaster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVectorDatasResponseBodyListVector extends $tea.Model {
  bbox?: number[];
  name?: string;
  publishMsg?: string;
  publishStatus?: string;
  stacId?: string;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      name: 'Name',
      publishMsg: 'PublishMsg',
      publishStatus: 'PublishStatus',
      stacId: 'StacId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      publishMsg: 'string',
      publishStatus: 'string',
      stacId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserVectorDatasResponseBodyList extends $tea.Model {
  dataId?: string;
  vector?: ListUserVectorDatasResponseBodyListVector;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      vector: ListUserVectorDatasResponseBodyListVector,
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
    this._endpoint = this.getEndpoint("aiearth-engine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAIJobWithOptions(tmpReq: CreateAIJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateAIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.app)) {
      body["App"] = request.app;
    }

    if (!Util.isUnset(request.areaThreshold)) {
      body["AreaThreshold"] = request.areaThreshold;
    }

    if (!Util.isUnset(request.confidence)) {
      body["Confidence"] = request.confidence;
    }

    if (!Util.isUnset(request.inputsShrink)) {
      body["Inputs"] = request.inputsShrink;
    }

    if (!Util.isUnset(request.jobName)) {
      body["JobName"] = request.jobName;
    }

    if (!Util.isUnset(request.modelProjectId)) {
      body["ModelProjectId"] = request.modelProjectId;
    }

    if (!Util.isUnset(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.shapeDataId)) {
      body["ShapeDataId"] = request.shapeDataId;
    }

    if (!Util.isUnset(request.shapeWkt)) {
      body["ShapeWkt"] = request.shapeWkt;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAIJob",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAIJobResponse>(await this.callApi(params, req, runtime), new CreateAIJobResponse({}));
  }

  async createAIJob(request: CreateAIJobRequest): Promise<CreateAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAIJobWithOptions(request, runtime);
  }

  async deleteJobsWithOptions(tmpReq: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  async deleteUserMapserviceDatasWithOptions(tmpReq: DeleteUserMapserviceDatasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserMapserviceDatasResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteUserMapserviceDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIds)) {
      request.dataIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIds, "DataIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataIdsShrink)) {
      body["DataIds"] = request.dataIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserMapserviceDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserMapserviceDatasResponse>(await this.callApi(params, req, runtime), new DeleteUserMapserviceDatasResponse({}));
  }

  async deleteUserMapserviceDatas(request: DeleteUserMapserviceDatasRequest): Promise<DeleteUserMapserviceDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserMapserviceDatasWithOptions(request, runtime);
  }

  async deleteUserRasterDatasWithOptions(tmpReq: DeleteUserRasterDatasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserRasterDatasResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteUserRasterDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIds)) {
      request.dataIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIds, "DataIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataIdsShrink)) {
      body["DataIds"] = request.dataIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserRasterDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserRasterDatasResponse>(await this.callApi(params, req, runtime), new DeleteUserRasterDatasResponse({}));
  }

  async deleteUserRasterDatas(request: DeleteUserRasterDatasRequest): Promise<DeleteUserRasterDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserRasterDatasWithOptions(request, runtime);
  }

  async deleteUserVectorDatasWithOptions(tmpReq: DeleteUserVectorDatasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserVectorDatasResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteUserVectorDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataIds)) {
      request.dataIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIds, "DataIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataIdsShrink)) {
      body["DataIds"] = request.dataIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserVectorDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserVectorDatasResponse>(await this.callApi(params, req, runtime), new DeleteUserVectorDatasResponse({}));
  }

  async deleteUserVectorDatas(request: DeleteUserVectorDatasRequest): Promise<DeleteUserVectorDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserVectorDatasWithOptions(request, runtime);
  }

  async downloadDataWithOptions(request: DownloadDataRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandNo)) {
      body["BandNo"] = request.bandNo;
    }

    if (!Util.isUnset(request.compress)) {
      body["Compress"] = request.compress;
    }

    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadData",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadDataResponse>(await this.callApi(params, req, runtime), new DownloadDataResponse({}));
  }

  async downloadData(request: DownloadDataRequest): Promise<DownloadDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDataWithOptions(request, runtime);
  }

  async getJobsWithOptions(tmpReq: GetJobsRequest, runtime: $Util.RuntimeOptions): Promise<GetJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.jobIdsShrink)) {
      body["JobIds"] = request.jobIdsShrink;
    }

    if (!Util.isUnset(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.nameLike)) {
      body["NameLike"] = request.nameLike;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetJobs",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobsResponse>(await this.callApi(params, req, runtime), new GetJobsResponse({}));
  }

  async getJobs(request: GetJobsRequest): Promise<GetJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobsWithOptions(request, runtime);
  }

  async getUserTokenWithOptions(request: GetUserTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetUserTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forceCreate)) {
      body["ForceCreate"] = request.forceCreate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserToken",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserTokenResponse>(await this.callApi(params, req, runtime), new GetUserTokenResponse({}));
  }

  async getUserToken(request: GetUserTokenRequest): Promise<GetUserTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserTokenWithOptions(request, runtime);
  }

  async listDatasWithOptions(tmpReq: ListDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sourceTypeList)) {
      request.sourceTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTypeList, "SourceTypeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cloudageMax)) {
      body["CloudageMax"] = request.cloudageMax;
    }

    if (!Util.isUnset(request.cloudageMin)) {
      body["CloudageMin"] = request.cloudageMin;
    }

    if (!Util.isUnset(request.dateEnd)) {
      body["DateEnd"] = request.dateEnd;
    }

    if (!Util.isUnset(request.dateStart)) {
      body["DateStart"] = request.dateStart;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionWkt)) {
      body["RegionWkt"] = request.regionWkt;
    }

    if (!Util.isUnset(request.sourceTypeListShrink)) {
      body["SourceTypeList"] = request.sourceTypeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasResponse>(await this.callApi(params, req, runtime), new ListDatasResponse({}));
  }

  async listDatas(request: ListDatasRequest): Promise<ListDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasWithOptions(request, runtime);
  }

  async listUserMapServiceDatasWithOptions(request: ListUserMapServiceDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListUserMapServiceDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createDay)) {
      body["CreateDay"] = request.createDay;
    }

    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserMapServiceDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserMapServiceDatasResponse>(await this.callApi(params, req, runtime), new ListUserMapServiceDatasResponse({}));
  }

  async listUserMapServiceDatas(request: ListUserMapServiceDatasRequest): Promise<ListUserMapServiceDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserMapServiceDatasWithOptions(request, runtime);
  }

  async listUserRasterDatasWithOptions(request: ListUserRasterDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListUserRasterDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acquisitionDate)) {
      body["AcquisitionDate"] = request.acquisitionDate;
    }

    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.fromType)) {
      body["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resolution)) {
      body["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.uploadDate)) {
      body["UploadDate"] = request.uploadDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserRasterDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserRasterDatasResponse>(await this.callApi(params, req, runtime), new ListUserRasterDatasResponse({}));
  }

  async listUserRasterDatas(request: ListUserRasterDatasRequest): Promise<ListUserRasterDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserRasterDatasWithOptions(request, runtime);
  }

  async listUserVectorDatasWithOptions(request: ListUserVectorDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListUserVectorDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataId)) {
      body["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.fromType)) {
      body["FromType"] = request.fromType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.uploadDate)) {
      body["UploadDate"] = request.uploadDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserVectorDatas",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserVectorDatasResponse>(await this.callApi(params, req, runtime), new ListUserVectorDatasResponse({}));
  }

  async listUserVectorDatas(request: ListUserVectorDatasRequest): Promise<ListUserVectorDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserVectorDatasWithOptions(request, runtime);
  }

  async publishMapserviceWithOptions(request: PublishMapserviceRequest, runtime: $Util.RuntimeOptions): Promise<PublishMapserviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["Address"] = request.address;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectionType)) {
      body["ProjectionType"] = request.projectionType;
    }

    if (!Util.isUnset(request.zoomLevelMax)) {
      body["ZoomLevelMax"] = request.zoomLevelMax;
    }

    if (!Util.isUnset(request.zoomLevelMin)) {
      body["ZoomLevelMin"] = request.zoomLevelMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishMapservice",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishMapserviceResponse>(await this.callApi(params, req, runtime), new PublishMapserviceResponse({}));
  }

  async publishMapservice(request: PublishMapserviceRequest): Promise<PublishMapserviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishMapserviceWithOptions(request, runtime);
  }

  async publishRasterWithOptions(request: PublishRasterRequest, runtime: $Util.RuntimeOptions): Promise<PublishRasterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acquisitionDate)) {
      body["AcquisitionDate"] = request.acquisitionDate;
    }

    if (!Util.isUnset(request.attachDownloadUrl)) {
      body["AttachDownloadUrl"] = request.attachDownloadUrl;
    }

    if (!Util.isUnset(request.attachFileType)) {
      body["AttachFileType"] = request.attachFileType;
    }

    if (!Util.isUnset(request.downloadUrl)) {
      body["DownloadUrl"] = request.downloadUrl;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishRaster",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishRasterResponse>(await this.callApi(params, req, runtime), new PublishRasterResponse({}));
  }

  async publishRaster(request: PublishRasterRequest): Promise<PublishRasterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishRasterWithOptions(request, runtime);
  }

  async publishVectorWithOptions(request: PublishVectorRequest, runtime: $Util.RuntimeOptions): Promise<PublishVectorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.downloadUrl)) {
      body["DownloadUrl"] = request.downloadUrl;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishVector",
      version: "2022-06-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishVectorResponse>(await this.callApi(params, req, runtime), new PublishVectorResponse({}));
  }

  async publishVector(request: PublishVectorRequest): Promise<PublishVectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishVectorWithOptions(request, runtime);
  }

}
