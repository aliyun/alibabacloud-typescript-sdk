// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFaceGroupRequest extends $tea.Model {
  ownerId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceGroupResponseBody extends $tea.Model {
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFaceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFaceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilePredictRequest extends $tea.Model {
  algorithmCode?: string;
  resourceUrl?: string;
  pushConfig?: string;
  decryptConfig?: string;
  clientToken?: string;
  outputOss?: string;
  outputRegion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmCode: 'AlgorithmCode',
      resourceUrl: 'ResourceUrl',
      pushConfig: 'PushConfig',
      decryptConfig: 'DecryptConfig',
      clientToken: 'ClientToken',
      outputOss: 'OutputOss',
      outputRegion: 'OutputRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmCode: 'string',
      resourceUrl: 'string',
      pushConfig: 'string',
      decryptConfig: 'string',
      clientToken: 'string',
      outputOss: 'string',
      outputRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilePredictResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateFilePredictResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateFilePredictResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilePredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFilePredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFilePredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamPredictRequest extends $tea.Model {
  ownerId?: number;
  clientToken?: string;
  streamType?: string;
  streamId?: string;
  predictTemplateId?: string;
  modelIds?: string;
  probabilityThresholds?: string;
  detectIntervals?: string;
  output?: string;
  notify?: string;
  autoStart?: string;
  faceGroupId?: string;
  modelUserData?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      streamType: 'StreamType',
      streamId: 'StreamId',
      predictTemplateId: 'PredictTemplateId',
      modelIds: 'ModelIds',
      probabilityThresholds: 'ProbabilityThresholds',
      detectIntervals: 'DetectIntervals',
      output: 'Output',
      notify: 'Notify',
      autoStart: 'AutoStart',
      faceGroupId: 'FaceGroupId',
      modelUserData: 'ModelUserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      streamType: 'string',
      streamId: 'string',
      predictTemplateId: 'string',
      modelIds: 'string',
      probabilityThresholds: 'string',
      detectIntervals: 'string',
      output: 'string',
      notify: 'string',
      autoStart: 'string',
      faceGroupId: 'string',
      modelUserData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamPredictResponseBody extends $tea.Model {
  requestId?: string;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStreamPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStreamPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceGroupRequest extends $tea.Model {
  ownerId?: number;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceGroupResponseBody extends $tea.Model {
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilePredictRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilePredictResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteFilePredictResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteFilePredictResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilePredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFilePredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFilePredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStreamPredictRequest extends $tea.Model {
  ownerId?: number;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStreamPredictResponseBody extends $tea.Model {
  requestId?: string;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStreamPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteStreamPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteStreamPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGroupsRequest extends $tea.Model {
  ownerId?: number;
  nextPageToken?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      nextPageToken: 'NextPageToken',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      nextPageToken: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGroupsResponseBody extends $tea.Model {
  totalNum?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  nextPageToken?: string;
  groups?: DescribeFaceGroupsResponseBodyGroups[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      nextPageToken: 'NextPageToken',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      nextPageToken: 'string',
      groups: { 'type': 'array', 'itemType': DescribeFaceGroupsResponseBodyGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictResultRequest extends $tea.Model {
  ownerId?: number;
  predictId?: string;
  modelId?: string;
  startTime?: string;
  endTime?: string;
  probabilityThreshold?: string;
  nextPageToken?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      predictId: 'PredictId',
      modelId: 'ModelId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      probabilityThreshold: 'ProbabilityThreshold',
      nextPageToken: 'NextPageToken',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      predictId: 'string',
      modelId: 'string',
      startTime: 'string',
      endTime: 'string',
      probabilityThreshold: 'string',
      nextPageToken: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictResultResponseBody extends $tea.Model {
  streamPredictDatas?: DescribeStreamPredictResultResponseBodyStreamPredictDatas[];
  totalNum?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      streamPredictDatas: 'StreamPredictDatas',
      totalNum: 'TotalNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      nextPageToken: 'NextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamPredictDatas: { 'type': 'array', 'itemType': DescribeStreamPredictResultResponseBodyStreamPredictDatas },
      totalNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      nextPageToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamPredictResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamPredictResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictsRequest extends $tea.Model {
  ownerId?: number;
  predictIds?: string;
  modelId?: string;
  nextPageToken?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      predictIds: 'PredictIds',
      modelId: 'ModelId',
      nextPageToken: 'NextPageToken',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      predictIds: 'string',
      modelId: 'string',
      nextPageToken: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictsResponseBody extends $tea.Model {
  totalNum?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  nextPageToken?: string;
  streamPredicts?: DescribeStreamPredictsResponseBodyStreamPredicts[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      nextPageToken: 'NextPageToken',
      streamPredicts: 'StreamPredicts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      nextPageToken: 'string',
      streamPredicts: { 'type': 'array', 'itemType': DescribeStreamPredictsResponseBodyStreamPredicts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamPredictsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamPredictsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailRequest extends $tea.Model {
  algorithmCode?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmCode: 'AlgorithmCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAlgorithmDetailResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAlgorithmDetailResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmHistogramsRequest extends $tea.Model {
  algorithmCode?: string;
  startDate?: string;
  endDate?: string;
  aggregateType?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmCode: 'AlgorithmCode',
      startDate: 'StartDate',
      endDate: 'EndDate',
      aggregateType: 'AggregateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmCode: 'string',
      startDate: 'string',
      endDate: 'string',
      aggregateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmHistogramsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAlgorithmHistogramsResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAlgorithmHistogramsResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmHistogramsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmHistogramsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmHistogramsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePredictRequest extends $tea.Model {
  ownerId?: number;
  modelId?: string;
  dataUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      modelId: 'ModelId',
      dataUrl: 'DataUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      modelId: 'string',
      dataUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePredictResponseBody extends $tea.Model {
  requestId?: string;
  imagePredict?: ImagePredictResponseBodyImagePredict;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imagePredict: 'ImagePredict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imagePredict: ImagePredictResponseBodyImagePredict,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImagePredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImagePredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAlgorithmRequest extends $tea.Model {
  algorithmName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListMyAlgorithmResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListMyAlgorithmResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMyAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMyAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPictureRequest extends $tea.Model {
  algorithmCode?: string;
  ossPath?: string;
  resourceUrl?: string;
  customerData?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmCode: 'AlgorithmCode',
      ossPath: 'OssPath',
      resourceUrl: 'ResourceUrl',
      customerData: 'CustomerData',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmCode: 'string',
      ossPath: 'string',
      resourceUrl: 'string',
      customerData: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPictureResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: PredictPictureResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: PredictPictureResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PredictPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PredictPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceRequest extends $tea.Model {
  ownerId?: number;
  groupId?: string;
  dataType?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      groupId: 'GroupId',
      dataType: 'DataType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      groupId: 'string',
      dataType: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceResponseBody extends $tea.Model {
  requestId?: string;
  faces?: RegisterFaceResponseBodyFaces[];
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      faces: 'Faces',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      faces: { 'type': 'array', 'itemType': RegisterFaceResponseBodyFaces },
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceRequest extends $tea.Model {
  ownerId?: number;
  groupId?: string;
  probabilityThreshold?: number;
  count?: number;
  dataType?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      groupId: 'GroupId',
      probabilityThreshold: 'ProbabilityThreshold',
      count: 'Count',
      dataType: 'DataType',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      groupId: 'string',
      probabilityThreshold: 'number',
      count: 'number',
      dataType: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBody extends $tea.Model {
  rect?: SearchFaceResponseBodyRect;
  requestId?: string;
  faceResults?: SearchFaceResponseBodyFaceResults[];
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      rect: 'Rect',
      requestId: 'RequestId',
      faceResults: 'FaceResults',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rect: SearchFaceResponseBodyRect,
      requestId: 'string',
      faceResults: { 'type': 'array', 'itemType': SearchFaceResponseBodyFaceResults },
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamPredictRequest extends $tea.Model {
  ownerId?: number;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamPredictResponseBody extends $tea.Model {
  requestId?: string;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartStreamPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartStreamPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamPredictRequest extends $tea.Model {
  ownerId?: number;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamPredictResponseBody extends $tea.Model {
  requestId?: string;
  predictId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      predictId: 'PredictId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      predictId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamPredictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopStreamPredictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopStreamPredictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterFaceRequest extends $tea.Model {
  ownerId?: number;
  groupId?: string;
  faceToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      groupId: 'GroupId',
      faceToken: 'FaceToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      groupId: 'string',
      faceToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterFaceResponseBody extends $tea.Model {
  faceToken?: string;
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      faceToken: 'FaceToken',
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceToken: 'string',
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnregisterFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnregisterFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilePredictResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilePredictResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGroupsResponseBodyGroups extends $tea.Model {
  creationTime?: string;
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictResultResponseBodyStreamPredictDatas extends $tea.Model {
  status?: string;
  predictResult?: string;
  predictId?: string;
  predictTime?: string;
  dataUrl?: string;
  timestamp?: number;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      predictResult: 'PredictResult',
      predictId: 'PredictId',
      predictTime: 'PredictTime',
      dataUrl: 'DataUrl',
      timestamp: 'Timestamp',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      predictResult: 'string',
      predictId: 'string',
      predictTime: 'string',
      dataUrl: 'string',
      timestamp: 'number',
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamPredictsResponseBodyStreamPredicts extends $tea.Model {
  creationTime?: string;
  status?: string;
  notify?: string;
  predictId?: string;
  modelUserData?: string;
  output?: string;
  predictTemplateId?: string;
  streamId?: string;
  autoStart?: string;
  probabilityThresholds?: string;
  detectIntervals?: string;
  streamType?: string;
  userData?: string;
  modelIds?: string;
  faceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      notify: 'Notify',
      predictId: 'PredictId',
      modelUserData: 'ModelUserData',
      output: 'Output',
      predictTemplateId: 'PredictTemplateId',
      streamId: 'StreamId',
      autoStart: 'AutoStart',
      probabilityThresholds: 'ProbabilityThresholds',
      detectIntervals: 'DetectIntervals',
      streamType: 'StreamType',
      userData: 'UserData',
      modelIds: 'ModelIds',
      faceGroupId: 'FaceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      notify: 'string',
      predictId: 'string',
      modelUserData: 'string',
      output: 'string',
      predictTemplateId: 'string',
      streamId: 'string',
      autoStart: 'string',
      probabilityThresholds: 'string',
      detectIntervals: 'string',
      streamType: 'string',
      userData: 'string',
      modelIds: 'string',
      faceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailResponseBodyData extends $tea.Model {
  algorithmName?: string;
  deployRegion?: string;
  currentMonthCount?: number;
  algorithmCode?: string;
  apiDocUrl?: string;
  currentMonthSuccessCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      deployRegion: 'DeployRegion',
      currentMonthCount: 'CurrentMonthCount',
      algorithmCode: 'AlgorithmCode',
      apiDocUrl: 'ApiDocUrl',
      currentMonthSuccessCount: 'CurrentMonthSuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      deployRegion: 'string',
      currentMonthCount: 'number',
      algorithmCode: 'string',
      apiDocUrl: 'string',
      currentMonthSuccessCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmHistogramsResponseBodyDataHistograms extends $tea.Model {
  time?: string;
  failureCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      failureCount: 'FailureCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      failureCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmHistogramsResponseBodyData extends $tea.Model {
  failureCount?: number;
  successCount?: number;
  histograms?: GetAlgorithmHistogramsResponseBodyDataHistograms[];
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      successCount: 'SuccessCount',
      histograms: 'Histograms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      successCount: 'number',
      histograms: { 'type': 'array', 'itemType': GetAlgorithmHistogramsResponseBodyDataHistograms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImagePredictResponseBodyImagePredict extends $tea.Model {
  status?: string;
  predictResult?: string;
  predictId?: string;
  predictTime?: string;
  dataUrl?: string;
  code?: string;
  message?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      predictResult: 'PredictResult',
      predictId: 'PredictId',
      predictTime: 'PredictTime',
      dataUrl: 'DataUrl',
      code: 'Code',
      message: 'Message',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      predictResult: 'string',
      predictId: 'string',
      predictTime: 'string',
      dataUrl: 'string',
      code: 'string',
      message: 'string',
      modelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAlgorithmResponseBodyDataAlgorithmList extends $tea.Model {
  algorithmName?: string;
  deployRegion?: string;
  currentMonthCount?: number;
  algorithmCode?: string;
  apiDocUrl?: string;
  yesterdayCount?: number;
  algorithmOrder?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      deployRegion: 'DeployRegion',
      currentMonthCount: 'CurrentMonthCount',
      algorithmCode: 'AlgorithmCode',
      apiDocUrl: 'ApiDocUrl',
      yesterdayCount: 'YesterdayCount',
      algorithmOrder: 'AlgorithmOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      deployRegion: 'string',
      currentMonthCount: 'number',
      algorithmCode: 'string',
      apiDocUrl: 'string',
      yesterdayCount: 'number',
      algorithmOrder: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyAlgorithmResponseBodyData extends $tea.Model {
  algorithmList?: ListMyAlgorithmResponseBodyDataAlgorithmList[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmList: 'AlgorithmList',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmList: { 'type': 'array', 'itemType': ListMyAlgorithmResponseBodyDataAlgorithmList },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictPictureResponseBodyData extends $tea.Model {
  predictResult?: string;
  static names(): { [key: string]: string } {
    return {
      predictResult: 'PredictResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceResponseBodyFacesRect extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceResponseBodyFaces extends $tea.Model {
  faceToken?: string;
  rect?: RegisterFaceResponseBodyFacesRect;
  static names(): { [key: string]: string } {
    return {
      faceToken: 'FaceToken',
      rect: 'Rect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceToken: 'string',
      rect: RegisterFaceResponseBodyFacesRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyRect extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyFaceResults extends $tea.Model {
  faceToken?: string;
  probability?: number;
  static names(): { [key: string]: string } {
    return {
      faceToken: 'FaceToken',
      probability: 'Probability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceToken: 'string',
      probability: 'number',
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
    this._endpoint = this.getEndpoint("ivision", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createFaceGroupWithOptions(request: CreateFaceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateFaceGroupResponse>(await this.doRPCRequest("CreateFaceGroup", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new CreateFaceGroupResponse({}));
  }

  async createFaceGroup(request: CreateFaceGroupRequest): Promise<CreateFaceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceGroupWithOptions(request, runtime);
  }

  async createFilePredictWithOptions(request: CreateFilePredictRequest, runtime: $Util.RuntimeOptions): Promise<CreateFilePredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFilePredictResponse>(await this.doRPCRequest("CreateFilePredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFilePredictResponse({}));
  }

  async createFilePredict(request: CreateFilePredictRequest): Promise<CreateFilePredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFilePredictWithOptions(request, runtime);
  }

  async createStreamPredictWithOptions(request: CreateStreamPredictRequest, runtime: $Util.RuntimeOptions): Promise<CreateStreamPredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStreamPredictResponse>(await this.doRPCRequest("CreateStreamPredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStreamPredictResponse({}));
  }

  async createStreamPredict(request: CreateStreamPredictRequest): Promise<CreateStreamPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamPredictWithOptions(request, runtime);
  }

  async deleteFaceGroupWithOptions(request: DeleteFaceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteFaceGroupResponse>(await this.doRPCRequest("DeleteFaceGroup", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteFaceGroupResponse({}));
  }

  async deleteFaceGroup(request: DeleteFaceGroupRequest): Promise<DeleteFaceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceGroupWithOptions(request, runtime);
  }

  async deleteFilePredictWithOptions(request: DeleteFilePredictRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFilePredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFilePredictResponse>(await this.doRPCRequest("DeleteFilePredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFilePredictResponse({}));
  }

  async deleteFilePredict(request: DeleteFilePredictRequest): Promise<DeleteFilePredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFilePredictWithOptions(request, runtime);
  }

  async deleteStreamPredictWithOptions(request: DeleteStreamPredictRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStreamPredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStreamPredictResponse>(await this.doRPCRequest("DeleteStreamPredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStreamPredictResponse({}));
  }

  async deleteStreamPredict(request: DeleteStreamPredictRequest): Promise<DeleteStreamPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStreamPredictWithOptions(request, runtime);
  }

  async describeFaceGroupsWithOptions(request: DescribeFaceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeFaceGroupsResponse>(await this.doRPCRequest("DescribeFaceGroups", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeFaceGroupsResponse({}));
  }

  async describeFaceGroups(request: DescribeFaceGroupsRequest): Promise<DescribeFaceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceGroupsWithOptions(request, runtime);
  }

  async describeStreamPredictResultWithOptions(request: DescribeStreamPredictResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamPredictResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamPredictResultResponse>(await this.doRPCRequest("DescribeStreamPredictResult", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamPredictResultResponse({}));
  }

  async describeStreamPredictResult(request: DescribeStreamPredictResultRequest): Promise<DescribeStreamPredictResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamPredictResultWithOptions(request, runtime);
  }

  async describeStreamPredictsWithOptions(request: DescribeStreamPredictsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamPredictsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamPredictsResponse>(await this.doRPCRequest("DescribeStreamPredicts", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamPredictsResponse({}));
  }

  async describeStreamPredicts(request: DescribeStreamPredictsRequest): Promise<DescribeStreamPredictsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamPredictsWithOptions(request, runtime);
  }

  async getAlgorithmDetailWithOptions(request: GetAlgorithmDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAlgorithmDetailResponse>(await this.doRPCRequest("GetAlgorithmDetail", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetAlgorithmDetailResponse({}));
  }

  async getAlgorithmDetail(request: GetAlgorithmDetailRequest): Promise<GetAlgorithmDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmDetailWithOptions(request, runtime);
  }

  async getAlgorithmHistogramsWithOptions(request: GetAlgorithmHistogramsRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmHistogramsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAlgorithmHistogramsResponse>(await this.doRPCRequest("GetAlgorithmHistograms", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetAlgorithmHistogramsResponse({}));
  }

  async getAlgorithmHistograms(request: GetAlgorithmHistogramsRequest): Promise<GetAlgorithmHistogramsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmHistogramsWithOptions(request, runtime);
  }

  async imagePredictWithOptions(request: ImagePredictRequest, runtime: $Util.RuntimeOptions): Promise<ImagePredictResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ImagePredictResponse>(await this.doRPCRequest("ImagePredict", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new ImagePredictResponse({}));
  }

  async imagePredict(request: ImagePredictRequest): Promise<ImagePredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imagePredictWithOptions(request, runtime);
  }

  async listMyAlgorithmWithOptions(request: ListMyAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ListMyAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMyAlgorithmResponse>(await this.doRPCRequest("ListMyAlgorithm", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListMyAlgorithmResponse({}));
  }

  async listMyAlgorithm(request: ListMyAlgorithmRequest): Promise<ListMyAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMyAlgorithmWithOptions(request, runtime);
  }

  async predictPictureWithOptions(request: PredictPictureRequest, runtime: $Util.RuntimeOptions): Promise<PredictPictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PredictPictureResponse>(await this.doRPCRequest("PredictPicture", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new PredictPictureResponse({}));
  }

  async predictPicture(request: PredictPictureRequest): Promise<PredictPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictPictureWithOptions(request, runtime);
  }

  async registerFaceWithOptions(request: RegisterFaceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterFaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RegisterFaceResponse>(await this.doRPCRequest("RegisterFace", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new RegisterFaceResponse({}));
  }

  async registerFace(request: RegisterFaceRequest): Promise<RegisterFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerFaceWithOptions(request, runtime);
  }

  async searchFaceWithOptions(request: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SearchFaceResponse>(await this.doRPCRequest("SearchFace", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new SearchFaceResponse({}));
  }

  async searchFace(request: SearchFaceRequest): Promise<SearchFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFaceWithOptions(request, runtime);
  }

  async startStreamPredictWithOptions(request: StartStreamPredictRequest, runtime: $Util.RuntimeOptions): Promise<StartStreamPredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartStreamPredictResponse>(await this.doRPCRequest("StartStreamPredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new StartStreamPredictResponse({}));
  }

  async startStreamPredict(request: StartStreamPredictRequest): Promise<StartStreamPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startStreamPredictWithOptions(request, runtime);
  }

  async stopStreamPredictWithOptions(request: StopStreamPredictRequest, runtime: $Util.RuntimeOptions): Promise<StopStreamPredictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopStreamPredictResponse>(await this.doRPCRequest("StopStreamPredict", "2019-03-08", "HTTPS", "POST", "AK", "json", req, runtime), new StopStreamPredictResponse({}));
  }

  async stopStreamPredict(request: StopStreamPredictRequest): Promise<StopStreamPredictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStreamPredictWithOptions(request, runtime);
  }

  async unregisterFaceWithOptions(request: UnregisterFaceRequest, runtime: $Util.RuntimeOptions): Promise<UnregisterFaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UnregisterFaceResponse>(await this.doRPCRequest("UnregisterFace", "2019-03-08", "HTTPS", "GET", "AK", "json", req, runtime), new UnregisterFaceResponse({}));
  }

  async unregisterFace(request: UnregisterFaceRequest): Promise<UnregisterFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterFaceWithOptions(request, runtime);
  }

}
