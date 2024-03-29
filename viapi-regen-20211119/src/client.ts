// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CheckDatasetOssBucketCORSRequest extends $tea.Model {
  labelsetId?: number;
  static names(): { [key: string]: string } {
    return {
      labelsetId: 'LabelsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDatasetOssBucketCORSResponseBody extends $tea.Model {
  data?: CheckDatasetOssBucketCORSResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckDatasetOssBucketCORSResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDatasetOssBucketCORSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDatasetOssBucketCORSResponseBody;
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
      body: CheckDatasetOssBucketCORSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  description?: string;
  name?: string;
  type?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  data?: CreateDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatasetResponseBody;
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
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelsetRequest extends $tea.Model {
  datasetId?: number;
  description?: string;
  name?: string;
  objectKey?: string;
  preLabelId?: number;
  tagSettings?: string;
  tagUserList?: string;
  type?: string;
  userOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      description: 'Description',
      name: 'Name',
      objectKey: 'ObjectKey',
      preLabelId: 'PreLabelId',
      tagSettings: 'TagSettings',
      tagUserList: 'TagUserList',
      type: 'Type',
      userOssUrl: 'UserOssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      description: 'string',
      name: 'string',
      objectKey: 'string',
      preLabelId: 'number',
      tagSettings: 'string',
      tagUserList: 'string',
      type: 'string',
      userOssUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelsetResponseBody extends $tea.Model {
  data?: CreateLabelsetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateLabelsetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelsetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLabelsetResponseBody;
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
      body: CreateLabelsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  authorizationType?: string;
  authorizedAccount?: string;
  description?: string;
  name?: string;
  trainTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      authorizedAccount: 'AuthorizedAccount',
      description: 'Description',
      name: 'Name',
      trainTaskId: 'TrainTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: 'string',
      authorizedAccount: 'string',
      description: 'string',
      name: 'string',
      trainTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  data?: CreateServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceResponseBody;
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
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagTaskRequest extends $tea.Model {
  labelsetId?: number;
  static names(): { [key: string]: string } {
    return {
      labelsetId: 'LabelsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagTaskResponseBody extends $tea.Model {
  data?: CreateTagTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTagTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTagTaskResponseBody;
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
      body: CreateTagTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainTaskRequest extends $tea.Model {
  advancedParameters?: string;
  datasetIds?: string;
  description?: string;
  labelIds?: string;
  name?: string;
  preTrainTaskId?: number;
  trainMode?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      advancedParameters: 'AdvancedParameters',
      datasetIds: 'DatasetIds',
      description: 'Description',
      labelIds: 'LabelIds',
      name: 'Name',
      preTrainTaskId: 'PreTrainTaskId',
      trainMode: 'TrainMode',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParameters: 'string',
      datasetIds: 'string',
      description: 'string',
      labelIds: 'string',
      name: 'string',
      preTrainTaskId: 'number',
      trainMode: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainTaskResponseBody extends $tea.Model {
  data?: CreateTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTrainTaskResponseBody;
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
      body: CreateTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $tea.Model {
  description?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $tea.Model {
  data?: CreateWorkspaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWorkspaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWorkspaceResponseBody;
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
      body: CreateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeClassifyImageRequest extends $tea.Model {
  imageUrl?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeClassifyImageAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeClassifyImageResponseBody extends $tea.Model {
  data?: CustomizeClassifyImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CustomizeClassifyImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeClassifyImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CustomizeClassifyImageResponseBody;
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
      body: CustomizeClassifyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageRequest extends $tea.Model {
  imageUrl?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageResponseBody extends $tea.Model {
  data?: CustomizeDetectImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CustomizeDetectImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CustomizeDetectImageResponseBody;
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
      body: CustomizeDetectImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageRequest extends $tea.Model {
  imageUrl?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageAdvanceRequest extends $tea.Model {
  imageUrlObject?: Readable;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlObject: 'ImageUrl',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlObject: 'Readable',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBody extends $tea.Model {
  data?: CustomizeInstanceSegmentImageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CustomizeInstanceSegmentImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CustomizeInstanceSegmentImageResponseBody;
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
      body: CustomizeInstanceSegmentImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugServiceRequest extends $tea.Model {
  id?: number;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugServiceResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DebugServiceResponseBody;
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
      body: DebugServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataReflowDataRequest extends $tea.Model {
  id?: number;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataReflowDataResponseBody extends $tea.Model {
  data?: DeleteDataReflowDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDataReflowDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataReflowDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDataReflowDataResponseBody;
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
      body: DeleteDataReflowDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $tea.Model {
  data?: DeleteDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatasetResponseBody;
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
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetResponseBody extends $tea.Model {
  data?: DeleteLabelsetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteLabelsetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLabelsetResponseBody;
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
      body: DeleteLabelsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetDataRequest extends $tea.Model {
  id?: number;
  labelId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      labelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetDataResponseBody extends $tea.Model {
  data?: DeleteLabelsetDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteLabelsetDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLabelsetDataResponseBody;
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
      body: DeleteLabelsetDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
  data?: DeleteServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceResponseBody;
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
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainTaskRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainTaskResponseBody extends $tea.Model {
  data?: DeleteTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTrainTaskResponseBody;
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
      body: DeleteTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBody extends $tea.Model {
  data?: DeleteWorkspaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteWorkspaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteWorkspaceResponseBody;
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
      body: DeleteWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDataReflowRequest extends $tea.Model {
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDataReflowResponseBody extends $tea.Model {
  data?: DisableDataReflowResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DisableDataReflowResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDataReflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableDataReflowResponseBody;
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
      body: DisableDataReflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDatasetRequest extends $tea.Model {
  datasetId?: number;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDatasetResponseBody extends $tea.Model {
  data?: DownloadDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DownloadDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadDatasetResponseBody;
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
      body: DownloadDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileNameListRequest extends $tea.Model {
  datasetId?: number;
  identity?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      identity: 'Identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      identity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileNameListResponseBody extends $tea.Model {
  data?: DownloadFileNameListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DownloadFileNameListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileNameListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadFileNameListResponseBody;
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
      body: DownloadFileNameListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLabelFileRequest extends $tea.Model {
  labelId?: number;
  static names(): { [key: string]: string } {
    return {
      labelId: 'LabelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLabelFileResponseBody extends $tea.Model {
  data?: DownloadLabelFileResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DownloadLabelFileResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLabelFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadLabelFileResponseBody;
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
      body: DownloadLabelFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDataReflowRequest extends $tea.Model {
  dataReflowOssPath?: string;
  dataReflowRate?: number;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataReflowOssPath: 'DataReflowOssPath',
      dataReflowRate: 'DataReflowRate',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReflowOssPath: 'string',
      dataReflowRate: 'number',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDataReflowResponseBody extends $tea.Model {
  data?: EnableDataReflowResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EnableDataReflowResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDataReflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableDataReflowResponseBody;
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
      body: EnableDataReflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataReflowDataListRequest extends $tea.Model {
  category?: string;
  endTime?: number;
  fileType?: string;
  imageName?: string;
  serviceId?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      endTime: 'EndTime',
      fileType: 'FileType',
      imageName: 'ImageName',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      endTime: 'number',
      fileType: 'string',
      imageName: 'string',
      serviceId: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataReflowDataListResponseBody extends $tea.Model {
  data?: ExportDataReflowDataListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExportDataReflowDataListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataReflowDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportDataReflowDataListResponseBody;
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
      body: ExportDataReflowDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  data?: GetDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDatasetResponseBody;
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
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiffCountLabelsetAndDatasetRequest extends $tea.Model {
  labelsetId?: number;
  static names(): { [key: string]: string } {
    return {
      labelsetId: 'LabelsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiffCountLabelsetAndDatasetResponseBody extends $tea.Model {
  data?: GetDiffCountLabelsetAndDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDiffCountLabelsetAndDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiffCountLabelsetAndDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDiffCountLabelsetAndDatasetResponseBody;
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
      body: GetDiffCountLabelsetAndDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelDetailRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelDetailResponseBody extends $tea.Model {
  data?: GetLabelDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetLabelDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLabelDetailResponseBody;
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
      body: GetLabelDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelsetRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelsetResponseBody extends $tea.Model {
  data?: GetLabelsetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetLabelsetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelsetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLabelsetResponseBody;
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
      body: GetLabelsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  data?: GetServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceResponseBody;
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
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInvokeRequest extends $tea.Model {
  callerParentIdList?: string[];
  endTime?: number;
  id?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      callerParentIdList: 'CallerParentIdList',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentIdList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      id: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInvokeShrinkRequest extends $tea.Model {
  callerParentIdListShrink?: string;
  endTime?: number;
  id?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      callerParentIdListShrink: 'CallerParentIdList',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentIdListShrink: 'string',
      endTime: 'number',
      id: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInvokeResponseBody extends $tea.Model {
  data?: GetServiceInvokeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceInvokeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInvokeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceInvokeResponseBody;
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
      body: GetServiceInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQpsRequest extends $tea.Model {
  callerParentIdList?: string[];
  endTime?: number;
  id?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      callerParentIdList: 'CallerParentIdList',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentIdList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      id: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQpsShrinkRequest extends $tea.Model {
  callerParentIdListShrink?: string;
  endTime?: number;
  id?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      callerParentIdListShrink: 'CallerParentIdList',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerParentIdListShrink: 'string',
      endTime: 'number',
      id: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQpsResponseBody extends $tea.Model {
  data?: GetServiceQpsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetServiceQpsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceQpsResponseBody;
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
      body: GetServiceQpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainModelRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainModelResponseBody extends $tea.Model {
  data?: GetTrainModelResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTrainModelResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrainModelResponseBody;
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
      body: GetTrainModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskResponseBody extends $tea.Model {
  data?: GetTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrainTaskResponseBody;
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
      body: GetTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskEstimatedTimeRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskEstimatedTimeResponseBody extends $tea.Model {
  data?: GetTrainTaskEstimatedTimeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTrainTaskEstimatedTimeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskEstimatedTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrainTaskEstimatedTimeResponseBody;
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
      body: GetTrainTaskEstimatedTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyRequest extends $tea.Model {
  fileName?: string;
  id?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyResponseBody extends $tea.Model {
  data?: GetUploadPolicyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetUploadPolicyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUploadPolicyResponseBody;
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
      body: GetUploadPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  data?: GetUserInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetUserInfoResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserInfoResponseBody;
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
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $tea.Model {
  data?: GetWorkspaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWorkspaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWorkspaceResponseBody;
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
      body: GetWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReflowDatasRequest extends $tea.Model {
  category?: string;
  currentPage?: number;
  endTime?: number;
  imageName?: string;
  pageSize?: number;
  serviceId?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      imageName: 'ImageName',
      pageSize: 'PageSize',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      currentPage: 'number',
      endTime: 'number',
      imageName: 'string',
      pageSize: 'number',
      serviceId: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReflowDatasResponseBody extends $tea.Model {
  data?: ListDataReflowDatasResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataReflowDatasResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReflowDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataReflowDatasResponseBody;
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
      body: ListDataReflowDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDatasRequest extends $tea.Model {
  currentPage?: number;
  datasetId?: number;
  identity?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      datasetId: 'DatasetId',
      identity: 'Identity',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      datasetId: 'number',
      identity: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDatasResponseBody extends $tea.Model {
  data?: ListDatasetDatasResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDatasetDatasResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDatasetDatasResponseBody;
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
      body: ListDatasetDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  data?: ListDatasetsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDatasetsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDatasetsResponseBody;
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
      body: ListDatasetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetDatasRequest extends $tea.Model {
  currentPage?: number;
  isAbandon?: boolean;
  labelId?: number;
  name?: string;
  operation?: string;
  pageSize?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      isAbandon: 'IsAbandon',
      labelId: 'LabelId',
      name: 'Name',
      operation: 'Operation',
      pageSize: 'PageSize',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      isAbandon: 'boolean',
      labelId: 'number',
      name: 'string',
      operation: 'string',
      pageSize: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetDatasResponseBody extends $tea.Model {
  data?: ListLabelsetDatasResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListLabelsetDatasResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetDatasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLabelsetDatasResponseBody;
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
      body: ListLabelsetDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetsRequest extends $tea.Model {
  currentPage?: number;
  datasetId?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      datasetId: 'DatasetId',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      datasetId: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetsResponseBody extends $tea.Model {
  data?: ListLabelsetsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListLabelsetsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListLabelsetsResponseBody;
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
      body: ListLabelsetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  currentPage?: number;
  id?: number;
  name?: number;
  pageSize?: number;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      name: 'Name',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      id: 'number',
      name: 'number',
      pageSize: 'number',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  data?: ListServicesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListServicesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServicesResponseBody;
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
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainTasksRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  status?: string;
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      status: 'string',
      workspaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainTasksResponseBody extends $tea.Model {
  data?: ListTrainTasksResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTrainTasksResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrainTasksResponseBody;
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
      body: ListTrainTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  currentPage?: number;
  name?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $tea.Model {
  data?: ListWorkspacesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWorkspacesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListWorkspacesResponseBody;
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
      body: ListWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDatasetUserOssPathRequest extends $tea.Model {
  datasetId?: number;
  userOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      userOssUrl: 'UserOssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      userOssUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDatasetUserOssPathResponseBody extends $tea.Model {
  data?: SetDatasetUserOssPathResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetDatasetUserOssPathResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDatasetUserOssPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDatasetUserOssPathResponseBody;
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
      body: SetDatasetUserOssPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponseBody extends $tea.Model {
  data?: StartServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartServiceResponseBody;
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
      body: StartServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrainTaskRequest extends $tea.Model {
  forceStartFlag?: boolean;
  id?: number;
  relyOnTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      forceStartFlag: 'ForceStartFlag',
      id: 'Id',
      relyOnTaskId: 'RelyOnTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStartFlag: 'boolean',
      id: 'number',
      relyOnTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrainTaskResponseBody extends $tea.Model {
  data?: StartTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartTrainTaskResponseBody;
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
      body: StartTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponseBody extends $tea.Model {
  data?: StopServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StopServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopServiceResponseBody;
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
      body: StopServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainTaskRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainTaskResponseBody extends $tea.Model {
  data?: StopTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StopTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopTrainTaskResponseBody;
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
      body: StopTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $tea.Model {
  data?: UpdateDatasetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDatasetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDatasetResponseBody;
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
      body: UpdateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelsetRequest extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  objectKey?: string;
  tagUserList?: string;
  userOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      objectKey: 'ObjectKey',
      tagUserList: 'TagUserList',
      userOssUrl: 'UserOssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      objectKey: 'string',
      tagUserList: 'string',
      userOssUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelsetResponseBody extends $tea.Model {
  data?: UpdateLabelsetResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateLabelsetResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelsetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLabelsetResponseBody;
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
      body: UpdateLabelsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  authorizationType?: string;
  authorizedAccount?: string;
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      authorizedAccount: 'AuthorizedAccount',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: 'string',
      authorizedAccount: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
  data?: UpdateServiceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateServiceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceResponseBody;
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
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainTaskRequest extends $tea.Model {
  advancedParameters?: string;
  datasetIds?: string;
  description?: string;
  id?: number;
  labelIds?: string;
  name?: string;
  preTrainTaskFlag?: boolean;
  preTrainTaskId?: number;
  trainMode?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParameters: 'AdvancedParameters',
      datasetIds: 'DatasetIds',
      description: 'Description',
      id: 'Id',
      labelIds: 'LabelIds',
      name: 'Name',
      preTrainTaskFlag: 'PreTrainTaskFlag',
      preTrainTaskId: 'PreTrainTaskId',
      trainMode: 'TrainMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParameters: 'string',
      datasetIds: 'string',
      description: 'string',
      id: 'number',
      labelIds: 'string',
      name: 'string',
      preTrainTaskFlag: 'boolean',
      preTrainTaskId: 'number',
      trainMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainTaskResponseBody extends $tea.Model {
  data?: UpdateTrainTaskResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateTrainTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTrainTaskResponseBody;
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
      body: UpdateTrainTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $tea.Model {
  description?: string;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBody extends $tea.Model {
  data?: UpdateWorkspaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateWorkspaceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWorkspaceResponseBody;
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
      body: UpdateWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDatasetOssBucketCORSResponseBodyData extends $tea.Model {
  bucket?: string;
  ossBucketCORSConfigUrl?: string;
  setOssBucketCORSFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ossBucketCORSConfigUrl: 'OssBucketCORSConfigUrl',
      setOssBucketCORSFlag: 'SetOssBucketCORSFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ossBucketCORSConfigUrl: 'string',
      setOssBucketCORSFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelsetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelType?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelType: 'LabelType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelType: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyData extends $tea.Model {
  authorizationType?: string;
  authorizedAccount?: string;
  gmtCreate?: number;
  id?: number;
  serviceDescription?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      authorizedAccount: 'AuthorizedAccount',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: 'string',
      authorizedAccount: 'string',
      gmtCreate: 'number',
      id: 'number',
      serviceDescription: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagTaskResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelType?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelType: 'LabelType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelType: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainTaskResponseBodyData extends $tea.Model {
  advancedParameters?: string;
  datasetId?: number;
  datasetName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  relyOnTaskId?: number;
  relyOnTaskName?: string;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParameters: 'AdvancedParameters',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      relyOnTaskId: 'RelyOnTaskId',
      relyOnTaskName: 'RelyOnTaskName',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParameters: 'string',
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      relyOnTaskId: 'number',
      relyOnTaskName: 'string',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeClassifyImageResponseBodyData extends $tea.Model {
  category?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageResponseBodyDataElementsBoxes extends $tea.Model {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageResponseBodyDataElements extends $tea.Model {
  boxes?: CustomizeDetectImageResponseBodyDataElementsBoxes;
  category?: string;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      category: 'Category',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: CustomizeDetectImageResponseBodyDataElementsBoxes,
      category: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeDetectImageResponseBodyData extends $tea.Model {
  elements?: CustomizeDetectImageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': CustomizeDetectImageResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBodyDataElementsBoxes extends $tea.Model {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBodyDataElementsContours extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBodyDataElementsMask extends $tea.Model {
  counts?: string;
  sizes?: number[];
  static names(): { [key: string]: string } {
    return {
      counts: 'Counts',
      sizes: 'Sizes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counts: 'string',
      sizes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBodyDataElements extends $tea.Model {
  boxes?: CustomizeInstanceSegmentImageResponseBodyDataElementsBoxes;
  category?: string;
  contours?: CustomizeInstanceSegmentImageResponseBodyDataElementsContours[];
  mask?: CustomizeInstanceSegmentImageResponseBodyDataElementsMask;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      category: 'Category',
      contours: 'Contours',
      mask: 'Mask',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: CustomizeInstanceSegmentImageResponseBodyDataElementsBoxes,
      category: 'string',
      contours: { 'type': 'array', 'itemType': CustomizeInstanceSegmentImageResponseBodyDataElementsContours },
      mask: CustomizeInstanceSegmentImageResponseBodyDataElementsMask,
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomizeInstanceSegmentImageResponseBodyData extends $tea.Model {
  elements?: CustomizeInstanceSegmentImageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': CustomizeInstanceSegmentImageResponseBodyDataElements },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataReflowDataResponseBodyData extends $tea.Model {
  gmtModified?: number;
  id?: number;
  serviceId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      id: 'Id',
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      id: 'number',
      serviceId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelType?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelType: 'LabelType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelType: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLabelsetDataResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelType?: string;
  name?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelType: 'LabelType',
      name: 'Name',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelType: 'string',
      name: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBodyData extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainTaskResponseBodyData extends $tea.Model {
  datasetId?: number;
  datasetName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDataReflowResponseBodyData extends $tea.Model {
  enableDataReflowFlag?: boolean;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      enableDataReflowFlag: 'EnableDataReflowFlag',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDataReflowFlag: 'boolean',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDatasetResponseBodyData extends $tea.Model {
  ossHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossHttpUrl: 'OssHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileNameListResponseBodyData extends $tea.Model {
  ossHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossHttpUrl: 'OssHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadLabelFileResponseBodyData extends $tea.Model {
  ossHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossHttpUrl: 'OssHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDataReflowResponseBodyData extends $tea.Model {
  dataReflowOssPath?: string;
  dataReflowRate?: number;
  enableDataReflowFlag?: boolean;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataReflowOssPath: 'DataReflowOssPath',
      dataReflowRate: 'DataReflowRate',
      enableDataReflowFlag: 'EnableDataReflowFlag',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReflowOssPath: 'string',
      dataReflowRate: 'number',
      enableDataReflowFlag: 'boolean',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataReflowDataListResponseBodyData extends $tea.Model {
  ossHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossHttpUrl: 'OssHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  ossUrl?: string;
  ownerType?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      ossUrl: 'OssUrl',
      ownerType: 'OwnerType',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      ossUrl: 'string',
      ownerType: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiffCountLabelsetAndDatasetResponseBodyData extends $tea.Model {
  diffCount?: number;
  static names(): { [key: string]: string } {
    return {
      diffCount: 'DiffCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diffCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelDetailResponseBodyData extends $tea.Model {
  labelInfo?: string;
  static names(): { [key: string]: string } {
    return {
      labelInfo: 'LabelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelsetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelType?: string;
  name?: string;
  status?: string;
  subTaskPackageSize?: string;
  tagUserList?: string;
  tags?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelType: 'LabelType',
      name: 'Name',
      status: 'Status',
      subTaskPackageSize: 'SubTaskPackageSize',
      tagUserList: 'TagUserList',
      tags: 'Tags',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelType: 'string',
      name: 'string',
      status: 'string',
      subTaskPackageSize: 'string',
      tagUserList: 'string',
      tags: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyDataDataReflowInfo extends $tea.Model {
  dataReflowCount?: number;
  dataReflowOssPath?: string;
  dataReflowRate?: number;
  enableDataReflowFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataReflowCount: 'DataReflowCount',
      dataReflowOssPath: 'DataReflowOssPath',
      dataReflowRate: 'DataReflowRate',
      enableDataReflowFlag: 'EnableDataReflowFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReflowCount: 'number',
      dataReflowOssPath: 'string',
      dataReflowRate: 'number',
      enableDataReflowFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyData extends $tea.Model {
  dataReflowInfo?: GetServiceResponseBodyDataDataReflowInfo;
  errorcodes?: string;
  gmtCreate?: number;
  id?: number;
  inputExample?: string;
  inputParams?: string;
  outputExample?: string;
  outputParams?: string;
  serviceDescription?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataReflowInfo: 'DataReflowInfo',
      errorcodes: 'Errorcodes',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      inputExample: 'InputExample',
      inputParams: 'InputParams',
      outputExample: 'OutputExample',
      outputParams: 'OutputParams',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataReflowInfo: GetServiceResponseBodyDataDataReflowInfo,
      errorcodes: 'string',
      gmtCreate: 'number',
      id: 'number',
      inputExample: 'string',
      inputParams: 'string',
      outputExample: 'string',
      outputParams: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInvokeResponseBodyData extends $tea.Model {
  userInvoke?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      userInvoke: 'UserInvoke',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInvoke: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceQpsResponseBodyData extends $tea.Model {
  userQps?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      userQps: 'UserQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userQps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainModelResponseBodyData extends $tea.Model {
  simpleEvaluate?: number;
  static names(): { [key: string]: string } {
    return {
      simpleEvaluate: 'SimpleEvaluate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleEvaluate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskResponseBodyData extends $tea.Model {
  datasetId?: number;
  datasetName?: string;
  description?: string;
  failureReason?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  trainUseTime?: number;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      failureReason: 'FailureReason',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
      trainUseTime: 'TrainUseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      failureReason: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
      trainUseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainTaskEstimatedTimeResponseBodyData extends $tea.Model {
  estimatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedTime: 'EstimatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadPolicyResponseBodyData extends $tea.Model {
  accessId?: string;
  bucketName?: string;
  endpoint?: string;
  fileName?: string;
  objectKey?: string;
  originalFilename?: string;
  policy?: string;
  signature?: string;
  signedHttpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      fileName: 'FileName',
      objectKey: 'ObjectKey',
      originalFilename: 'OriginalFilename',
      policy: 'Policy',
      signature: 'Signature',
      signedHttpUrl: 'SignedHttpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      bucketName: 'string',
      endpoint: 'string',
      fileName: 'string',
      objectKey: 'string',
      originalFilename: 'string',
      policy: 'string',
      signature: 'string',
      signedHttpUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBodyData extends $tea.Model {
  parentUid?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      parentUid: 'ParentUid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUid: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataReflowDatasResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDatasResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetDatasResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLabelsetsResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainTasksResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: { [key: string]: any }[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyDataElements extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyData extends $tea.Model {
  currentPage?: number;
  elements?: ListWorkspacesResponseBodyDataElements[];
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      elements: 'Elements',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      elements: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyDataElements },
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDatasetUserOssPathResponseBodyData extends $tea.Model {
  id?: number;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  id?: number;
  serviceDescription?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      id: 'number',
      serviceDescription: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTrainTaskResponseBodyData extends $tea.Model {
  checkResult?: { [key: string]: any };
  datasetId?: number;
  datasetName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  id?: number;
  serviceDescription?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      id: 'number',
      serviceDescription: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainTaskResponseBodyData extends $tea.Model {
  datasetId?: number;
  datasetName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLabelsetResponseBodyData extends $tea.Model {
  description?: number;
  gmtCreate?: number;
  id?: number;
  name?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'number',
      gmtCreate: 'number',
      id: 'number',
      name: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyData extends $tea.Model {
  authorizationType?: string;
  authorizedAccount?: string;
  gmtCreate?: number;
  id?: number;
  serviceDescription?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      authorizedAccount: 'AuthorizedAccount',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: 'string',
      authorizedAccount: 'string',
      gmtCreate: 'number',
      id: 'number',
      serviceDescription: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainTaskResponseBodyData extends $tea.Model {
  advancedParameters?: string;
  datasetId?: number;
  datasetName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  labelId?: number;
  labelName?: string;
  modelEffect?: string;
  modelId?: number;
  taskName?: string;
  trainMode?: string;
  trainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParameters: 'AdvancedParameters',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      labelId: 'LabelId',
      labelName: 'LabelName',
      modelEffect: 'ModelEffect',
      modelId: 'ModelId',
      taskName: 'TaskName',
      trainMode: 'TrainMode',
      trainStatus: 'TrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParameters: 'string',
      datasetId: 'number',
      datasetName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      labelId: 'number',
      labelName: 'string',
      modelEffect: 'string',
      modelId: 'number',
      taskName: 'string',
      trainMode: 'string',
      trainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
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
      'ap-northeast-1': "viapi-regen-daily.aliyuncs.com",
      'ap-northeast-2-pop': "viapi-regen-daily.aliyuncs.com",
      'ap-south-1': "viapi-regen-daily.aliyuncs.com",
      'ap-southeast-1': "viapi-regen-daily.aliyuncs.com",
      'ap-southeast-2': "viapi-regen-daily.aliyuncs.com",
      'ap-southeast-3': "viapi-regen-daily.aliyuncs.com",
      'ap-southeast-5': "viapi-regen-daily.aliyuncs.com",
      'cn-beijing': "viapi-regen-daily.aliyuncs.com",
      'cn-beijing-finance-1': "viapi-regen-daily.aliyuncs.com",
      'cn-beijing-finance-pop': "viapi-regen-daily.aliyuncs.com",
      'cn-beijing-gov-1': "viapi-regen-daily.aliyuncs.com",
      'cn-beijing-nu16-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-chengdu': "viapi-regen-daily.aliyuncs.com",
      'cn-edge-1': "viapi-regen-daily.aliyuncs.com",
      'cn-fujian': "viapi-regen-daily.aliyuncs.com",
      'cn-haidian-cm12-c01': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-bj-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-finance': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "viapi-regen-daily.aliyuncs.com",
      'cn-hangzhou-test-306': "viapi-regen-daily.aliyuncs.com",
      'cn-hongkong': "viapi-regen-daily.aliyuncs.com",
      'cn-hongkong-finance-pop': "viapi-regen-daily.aliyuncs.com",
      'cn-huhehaote': "viapi-regen-daily.aliyuncs.com",
      'cn-huhehaote-nebula-1': "viapi-regen-daily.aliyuncs.com",
      'cn-north-2-gov-1': "viapi-regen-daily.aliyuncs.com",
      'cn-qingdao': "viapi-regen-daily.aliyuncs.com",
      'cn-qingdao-nebula': "viapi-regen-daily.aliyuncs.com",
      'cn-shanghai-et15-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-shanghai-et2-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-shanghai-finance-1': "viapi-regen-daily.aliyuncs.com",
      'cn-shanghai-inner': "viapi-regen-daily.aliyuncs.com",
      'cn-shanghai-internal-test-1': "viapi-regen-daily.aliyuncs.com",
      'cn-shenzhen': "viapi-regen-daily.aliyuncs.com",
      'cn-shenzhen-finance-1': "viapi-regen-daily.aliyuncs.com",
      'cn-shenzhen-inner': "viapi-regen-daily.aliyuncs.com",
      'cn-shenzhen-st4-d01': "viapi-regen-daily.aliyuncs.com",
      'cn-shenzhen-su18-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-wuhan': "viapi-regen-daily.aliyuncs.com",
      'cn-wulanchabu': "viapi-regen-daily.aliyuncs.com",
      'cn-yushanfang': "viapi-regen-daily.aliyuncs.com",
      'cn-zhangbei': "viapi-regen-daily.aliyuncs.com",
      'cn-zhangbei-na61-b01': "viapi-regen-daily.aliyuncs.com",
      'cn-zhangjiakou': "viapi-regen-daily.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "viapi-regen-daily.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "viapi-regen-daily.aliyuncs.com",
      'eu-central-1': "viapi-regen-daily.aliyuncs.com",
      'eu-west-1': "viapi-regen-daily.aliyuncs.com",
      'eu-west-1-oxs': "viapi-regen-daily.aliyuncs.com",
      'me-east-1': "viapi-regen-daily.aliyuncs.com",
      'rus-west-1-pop': "viapi-regen-daily.aliyuncs.com",
      'us-east-1': "viapi-regen-daily.aliyuncs.com",
      'us-west-1': "viapi-regen-daily.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("viapi-regen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkDatasetOssBucketCORSWithOptions(request: CheckDatasetOssBucketCORSRequest, runtime: $Util.RuntimeOptions): Promise<CheckDatasetOssBucketCORSResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelsetId)) {
      body["LabelsetId"] = request.labelsetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckDatasetOssBucketCORS",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDatasetOssBucketCORSResponse>(await this.callApi(params, req, runtime), new CheckDatasetOssBucketCORSResponse({}));
  }

  async checkDatasetOssBucketCORS(request: CheckDatasetOssBucketCORSRequest): Promise<CheckDatasetOssBucketCORSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDatasetOssBucketCORSWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createLabelsetWithOptions(request: CreateLabelsetRequest, runtime: $Util.RuntimeOptions): Promise<CreateLabelsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.objectKey)) {
      body["ObjectKey"] = request.objectKey;
    }

    if (!Util.isUnset(request.preLabelId)) {
      body["PreLabelId"] = request.preLabelId;
    }

    if (!Util.isUnset(request.tagSettings)) {
      body["TagSettings"] = request.tagSettings;
    }

    if (!Util.isUnset(request.tagUserList)) {
      body["TagUserList"] = request.tagUserList;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.userOssUrl)) {
      body["UserOssUrl"] = request.userOssUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLabelset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLabelsetResponse>(await this.callApi(params, req, runtime), new CreateLabelsetResponse({}));
  }

  async createLabelset(request: CreateLabelsetRequest): Promise<CreateLabelsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabelsetWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizationType)) {
      body["AuthorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.authorizedAccount)) {
      body["AuthorizedAccount"] = request.authorizedAccount;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.trainTaskId)) {
      body["TrainTaskId"] = request.trainTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async createTagTaskWithOptions(request: CreateTagTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelsetId)) {
      body["LabelsetId"] = request.labelsetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTagTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagTaskResponse>(await this.callApi(params, req, runtime), new CreateTagTaskResponse({}));
  }

  async createTagTask(request: CreateTagTaskRequest): Promise<CreateTagTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagTaskWithOptions(request, runtime);
  }

  async createTrainTaskWithOptions(request: CreateTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.advancedParameters)) {
      body["AdvancedParameters"] = request.advancedParameters;
    }

    if (!Util.isUnset(request.datasetIds)) {
      body["DatasetIds"] = request.datasetIds;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.preTrainTaskId)) {
      body["PreTrainTaskId"] = request.preTrainTaskId;
    }

    if (!Util.isUnset(request.trainMode)) {
      body["TrainMode"] = request.trainMode;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTrainTaskResponse>(await this.callApi(params, req, runtime), new CreateTrainTaskResponse({}));
  }

  async createTrainTask(request: CreateTrainTaskRequest): Promise<CreateTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrainTaskWithOptions(request, runtime);
  }

  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkspace",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  async customizeClassifyImageWithOptions(request: CustomizeClassifyImageRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeClassifyImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CustomizeClassifyImage",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomizeClassifyImageResponse>(await this.callApi(params, req, runtime), new CustomizeClassifyImageResponse({}));
  }

  async customizeClassifyImage(request: CustomizeClassifyImageRequest): Promise<CustomizeClassifyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customizeClassifyImageWithOptions(request, runtime);
  }

  async customizeClassifyImageAdvance(request: CustomizeClassifyImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeClassifyImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "viapi-regen",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let customizeClassifyImageReq = new CustomizeClassifyImageRequest({ });
    OpenApiUtil.convert(request, customizeClassifyImageReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      customizeClassifyImageReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let customizeClassifyImageResp = await this.customizeClassifyImageWithOptions(customizeClassifyImageReq, runtime);
    return customizeClassifyImageResp;
  }

  async customizeDetectImageWithOptions(request: CustomizeDetectImageRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeDetectImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CustomizeDetectImage",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomizeDetectImageResponse>(await this.callApi(params, req, runtime), new CustomizeDetectImageResponse({}));
  }

  async customizeDetectImage(request: CustomizeDetectImageRequest): Promise<CustomizeDetectImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customizeDetectImageWithOptions(request, runtime);
  }

  async customizeDetectImageAdvance(request: CustomizeDetectImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeDetectImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "viapi-regen",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let customizeDetectImageReq = new CustomizeDetectImageRequest({ });
    OpenApiUtil.convert(request, customizeDetectImageReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      customizeDetectImageReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let customizeDetectImageResp = await this.customizeDetectImageWithOptions(customizeDetectImageReq, runtime);
    return customizeDetectImageResp;
  }

  async customizeInstanceSegmentImageWithOptions(request: CustomizeInstanceSegmentImageRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeInstanceSegmentImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CustomizeInstanceSegmentImage",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CustomizeInstanceSegmentImageResponse>(await this.callApi(params, req, runtime), new CustomizeInstanceSegmentImageResponse({}));
  }

  async customizeInstanceSegmentImage(request: CustomizeInstanceSegmentImageRequest): Promise<CustomizeInstanceSegmentImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.customizeInstanceSegmentImageWithOptions(request, runtime);
  }

  async customizeInstanceSegmentImageAdvance(request: CustomizeInstanceSegmentImageAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CustomizeInstanceSegmentImageResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "viapi-regen",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let customizeInstanceSegmentImageReq = new CustomizeInstanceSegmentImageRequest({ });
    OpenApiUtil.convert(request, customizeInstanceSegmentImageReq);
    if (!Util.isUnset(request.imageUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.imageUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      customizeInstanceSegmentImageReq.imageUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let customizeInstanceSegmentImageResp = await this.customizeInstanceSegmentImageWithOptions(customizeInstanceSegmentImageReq, runtime);
    return customizeInstanceSegmentImageResp;
  }

  async debugServiceWithOptions(request: DebugServiceRequest, runtime: $Util.RuntimeOptions): Promise<DebugServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.param)) {
      body["Param"] = request.param;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DebugService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DebugServiceResponse>(await this.callApi(params, req, runtime), new DebugServiceResponse({}));
  }

  async debugService(request: DebugServiceRequest): Promise<DebugServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.debugServiceWithOptions(request, runtime);
  }

  async deleteDataReflowDataWithOptions(request: DeleteDataReflowDataRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataReflowDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataReflowData",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataReflowDataResponse>(await this.callApi(params, req, runtime), new DeleteDataReflowDataResponse({}));
  }

  async deleteDataReflowData(request: DeleteDataReflowDataRequest): Promise<DeleteDataReflowDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataReflowDataWithOptions(request, runtime);
  }

  async deleteDatasetWithOptions(request: DeleteDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  async deleteDataset(request: DeleteDatasetRequest): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  async deleteLabelsetWithOptions(request: DeleteLabelsetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLabelsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLabelset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLabelsetResponse>(await this.callApi(params, req, runtime), new DeleteLabelsetResponse({}));
  }

  async deleteLabelset(request: DeleteLabelsetRequest): Promise<DeleteLabelsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLabelsetWithOptions(request, runtime);
  }

  async deleteLabelsetDataWithOptions(request: DeleteLabelsetDataRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLabelsetDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLabelsetData",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLabelsetDataResponse>(await this.callApi(params, req, runtime), new DeleteLabelsetDataResponse({}));
  }

  async deleteLabelsetData(request: DeleteLabelsetDataRequest): Promise<DeleteLabelsetDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLabelsetDataWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async deleteTrainTaskWithOptions(request: DeleteTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrainTaskResponse>(await this.callApi(params, req, runtime), new DeleteTrainTaskResponse({}));
  }

  async deleteTrainTask(request: DeleteTrainTaskRequest): Promise<DeleteTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrainTaskWithOptions(request, runtime);
  }

  async deleteWorkspaceWithOptions(request: DeleteWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkspace",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResponse({}));
  }

  async deleteWorkspace(request: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkspaceWithOptions(request, runtime);
  }

  async disableDataReflowWithOptions(request: DisableDataReflowRequest, runtime: $Util.RuntimeOptions): Promise<DisableDataReflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableDataReflow",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDataReflowResponse>(await this.callApi(params, req, runtime), new DisableDataReflowResponse({}));
  }

  async disableDataReflow(request: DisableDataReflowRequest): Promise<DisableDataReflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDataReflowWithOptions(request, runtime);
  }

  async downloadDatasetWithOptions(request: DownloadDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadDatasetResponse>(await this.callApi(params, req, runtime), new DownloadDatasetResponse({}));
  }

  async downloadDataset(request: DownloadDatasetRequest): Promise<DownloadDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDatasetWithOptions(request, runtime);
  }

  async downloadFileNameListWithOptions(request: DownloadFileNameListRequest, runtime: $Util.RuntimeOptions): Promise<DownloadFileNameListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.identity)) {
      body["Identity"] = request.identity;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadFileNameList",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadFileNameListResponse>(await this.callApi(params, req, runtime), new DownloadFileNameListResponse({}));
  }

  async downloadFileNameList(request: DownloadFileNameListRequest): Promise<DownloadFileNameListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadFileNameListWithOptions(request, runtime);
  }

  async downloadLabelFileWithOptions(request: DownloadLabelFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadLabelFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadLabelFile",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadLabelFileResponse>(await this.callApi(params, req, runtime), new DownloadLabelFileResponse({}));
  }

  async downloadLabelFile(request: DownloadLabelFileRequest): Promise<DownloadLabelFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadLabelFileWithOptions(request, runtime);
  }

  async enableDataReflowWithOptions(request: EnableDataReflowRequest, runtime: $Util.RuntimeOptions): Promise<EnableDataReflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataReflowOssPath)) {
      body["DataReflowOssPath"] = request.dataReflowOssPath;
    }

    if (!Util.isUnset(request.dataReflowRate)) {
      body["DataReflowRate"] = request.dataReflowRate;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableDataReflow",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDataReflowResponse>(await this.callApi(params, req, runtime), new EnableDataReflowResponse({}));
  }

  async enableDataReflow(request: EnableDataReflowRequest): Promise<EnableDataReflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDataReflowWithOptions(request, runtime);
  }

  async exportDataReflowDataListWithOptions(request: ExportDataReflowDataListRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataReflowDataListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportDataReflowDataList",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportDataReflowDataListResponse>(await this.callApi(params, req, runtime), new ExportDataReflowDataListResponse({}));
  }

  async exportDataReflowDataList(request: ExportDataReflowDataListRequest): Promise<ExportDataReflowDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataReflowDataListWithOptions(request, runtime);
  }

  async getDatasetWithOptions(request: GetDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  async getDiffCountLabelsetAndDatasetWithOptions(request: GetDiffCountLabelsetAndDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDiffCountLabelsetAndDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelsetId)) {
      body["LabelsetId"] = request.labelsetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDiffCountLabelsetAndDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiffCountLabelsetAndDatasetResponse>(await this.callApi(params, req, runtime), new GetDiffCountLabelsetAndDatasetResponse({}));
  }

  async getDiffCountLabelsetAndDataset(request: GetDiffCountLabelsetAndDatasetRequest): Promise<GetDiffCountLabelsetAndDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiffCountLabelsetAndDatasetWithOptions(request, runtime);
  }

  async getLabelDetailWithOptions(request: GetLabelDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetLabelDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLabelDetail",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLabelDetailResponse>(await this.callApi(params, req, runtime), new GetLabelDetailResponse({}));
  }

  async getLabelDetail(request: GetLabelDetailRequest): Promise<GetLabelDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLabelDetailWithOptions(request, runtime);
  }

  async getLabelsetWithOptions(request: GetLabelsetRequest, runtime: $Util.RuntimeOptions): Promise<GetLabelsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLabelset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLabelsetResponse>(await this.callApi(params, req, runtime), new GetLabelsetResponse({}));
  }

  async getLabelset(request: GetLabelsetRequest): Promise<GetLabelsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLabelsetWithOptions(request, runtime);
  }

  async getServiceWithOptions(request: GetServiceRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  async getServiceInvokeWithOptions(tmpReq: GetServiceInvokeRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceInvokeResponse> {
    Util.validateModel(tmpReq);
    let request = new GetServiceInvokeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callerParentIdList)) {
      request.callerParentIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callerParentIdList, "CallerParentIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callerParentIdListShrink)) {
      body["CallerParentIdList"] = request.callerParentIdListShrink;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceInvoke",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceInvokeResponse>(await this.callApi(params, req, runtime), new GetServiceInvokeResponse({}));
  }

  async getServiceInvoke(request: GetServiceInvokeRequest): Promise<GetServiceInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceInvokeWithOptions(request, runtime);
  }

  async getServiceQpsWithOptions(tmpReq: GetServiceQpsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceQpsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetServiceQpsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callerParentIdList)) {
      request.callerParentIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callerParentIdList, "CallerParentIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callerParentIdListShrink)) {
      body["CallerParentIdList"] = request.callerParentIdListShrink;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceQps",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceQpsResponse>(await this.callApi(params, req, runtime), new GetServiceQpsResponse({}));
  }

  async getServiceQps(request: GetServiceQpsRequest): Promise<GetServiceQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceQpsWithOptions(request, runtime);
  }

  async getTrainModelWithOptions(request: GetTrainModelRequest, runtime: $Util.RuntimeOptions): Promise<GetTrainModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrainModel",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrainModelResponse>(await this.callApi(params, req, runtime), new GetTrainModelResponse({}));
  }

  async getTrainModel(request: GetTrainModelRequest): Promise<GetTrainModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrainModelWithOptions(request, runtime);
  }

  async getTrainTaskWithOptions(request: GetTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrainTaskResponse>(await this.callApi(params, req, runtime), new GetTrainTaskResponse({}));
  }

  async getTrainTask(request: GetTrainTaskRequest): Promise<GetTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrainTaskWithOptions(request, runtime);
  }

  async getTrainTaskEstimatedTimeWithOptions(request: GetTrainTaskEstimatedTimeRequest, runtime: $Util.RuntimeOptions): Promise<GetTrainTaskEstimatedTimeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTrainTaskEstimatedTime",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrainTaskEstimatedTimeResponse>(await this.callApi(params, req, runtime), new GetTrainTaskEstimatedTimeResponse({}));
  }

  async getTrainTaskEstimatedTime(request: GetTrainTaskEstimatedTimeRequest): Promise<GetTrainTaskEstimatedTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrainTaskEstimatedTimeWithOptions(request, runtime);
  }

  async getUploadPolicyWithOptions(request: GetUploadPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadPolicy",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadPolicyResponse>(await this.callApi(params, req, runtime), new GetUploadPolicyResponse({}));
  }

  async getUploadPolicy(request: GetUploadPolicyRequest): Promise<GetUploadPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadPolicyWithOptions(request, runtime);
  }

  async getUserInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async getUserInfo(): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(runtime);
  }

  async getWorkspaceWithOptions(request: GetWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkspace",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
  }

  async getWorkspace(request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkspaceWithOptions(request, runtime);
  }

  async listDataReflowDatasWithOptions(request: ListDataReflowDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListDataReflowDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceId)) {
      body["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataReflowDatas",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataReflowDatasResponse>(await this.callApi(params, req, runtime), new ListDataReflowDatasResponse({}));
  }

  async listDataReflowDatas(request: ListDataReflowDatasRequest): Promise<ListDataReflowDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataReflowDatasWithOptions(request, runtime);
  }

  async listDatasetDatasWithOptions(request: ListDatasetDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasetDatas",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetDatasResponse>(await this.callApi(params, req, runtime), new ListDatasetDatasResponse({}));
  }

  async listDatasetDatas(request: ListDatasetDatasRequest): Promise<ListDatasetDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetDatasWithOptions(request, runtime);
  }

  async listDatasetsWithOptions(request: ListDatasetsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasets",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  async listLabelsetDatasWithOptions(request: ListLabelsetDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListLabelsetDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.isAbandon)) {
      body["IsAbandon"] = request.isAbandon;
    }

    if (!Util.isUnset(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLabelsetDatas",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLabelsetDatasResponse>(await this.callApi(params, req, runtime), new ListLabelsetDatasResponse({}));
  }

  async listLabelsetDatas(request: ListLabelsetDatasRequest): Promise<ListLabelsetDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLabelsetDatasWithOptions(request, runtime);
  }

  async listLabelsetsWithOptions(request: ListLabelsetsRequest, runtime: $Util.RuntimeOptions): Promise<ListLabelsetsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLabelsets",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLabelsetsResponse>(await this.callApi(params, req, runtime), new ListLabelsetsResponse({}));
  }

  async listLabelsets(request: ListLabelsetsRequest): Promise<ListLabelsetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLabelsetsWithOptions(request, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  async listTrainTasksWithOptions(request: ListTrainTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTrainTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTrainTasks",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrainTasksResponse>(await this.callApi(params, req, runtime), new ListTrainTasksResponse({}));
  }

  async listTrainTasks(request: ListTrainTasksRequest): Promise<ListTrainTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrainTasksWithOptions(request, runtime);
  }

  async listWorkspacesWithOptions(request: ListWorkspacesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkspaces",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
  }

  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  async setDatasetUserOssPathWithOptions(request: SetDatasetUserOssPathRequest, runtime: $Util.RuntimeOptions): Promise<SetDatasetUserOssPathResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.userOssUrl)) {
      body["UserOssUrl"] = request.userOssUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDatasetUserOssPath",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDatasetUserOssPathResponse>(await this.callApi(params, req, runtime), new SetDatasetUserOssPathResponse({}));
  }

  async setDatasetUserOssPath(request: SetDatasetUserOssPathRequest): Promise<SetDatasetUserOssPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDatasetUserOssPathWithOptions(request, runtime);
  }

  async startServiceWithOptions(request: StartServiceRequest, runtime: $Util.RuntimeOptions): Promise<StartServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartServiceResponse>(await this.callApi(params, req, runtime), new StartServiceResponse({}));
  }

  async startService(request: StartServiceRequest): Promise<StartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startServiceWithOptions(request, runtime);
  }

  async startTrainTaskWithOptions(request: StartTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forceStartFlag)) {
      body["ForceStartFlag"] = request.forceStartFlag;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.relyOnTaskId)) {
      body["RelyOnTaskId"] = request.relyOnTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartTrainTaskResponse>(await this.callApi(params, req, runtime), new StartTrainTaskResponse({}));
  }

  async startTrainTask(request: StartTrainTaskRequest): Promise<StartTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTrainTaskWithOptions(request, runtime);
  }

  async stopServiceWithOptions(request: StopServiceRequest, runtime: $Util.RuntimeOptions): Promise<StopServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopServiceResponse>(await this.callApi(params, req, runtime), new StopServiceResponse({}));
  }

  async stopService(request: StopServiceRequest): Promise<StopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopServiceWithOptions(request, runtime);
  }

  async stopTrainTaskWithOptions(request: StopTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopTrainTaskResponse>(await this.callApi(params, req, runtime), new StopTrainTaskResponse({}));
  }

  async stopTrainTask(request: StopTrainTaskRequest): Promise<StopTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTrainTaskWithOptions(request, runtime);
  }

  async updateDatasetWithOptions(request: UpdateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  async updateDataset(request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  async updateLabelsetWithOptions(request: UpdateLabelsetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLabelsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.objectKey)) {
      body["ObjectKey"] = request.objectKey;
    }

    if (!Util.isUnset(request.tagUserList)) {
      body["TagUserList"] = request.tagUserList;
    }

    if (!Util.isUnset(request.userOssUrl)) {
      body["UserOssUrl"] = request.userOssUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLabelset",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLabelsetResponse>(await this.callApi(params, req, runtime), new UpdateLabelsetResponse({}));
  }

  async updateLabelset(request: UpdateLabelsetRequest): Promise<UpdateLabelsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLabelsetWithOptions(request, runtime);
  }

  async updateServiceWithOptions(request: UpdateServiceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizationType)) {
      body["AuthorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.authorizedAccount)) {
      body["AuthorizedAccount"] = request.authorizedAccount;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  async updateService(request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceWithOptions(request, runtime);
  }

  async updateTrainTaskWithOptions(request: UpdateTrainTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrainTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.advancedParameters)) {
      body["AdvancedParameters"] = request.advancedParameters;
    }

    if (!Util.isUnset(request.datasetIds)) {
      body["DatasetIds"] = request.datasetIds;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.preTrainTaskFlag)) {
      body["PreTrainTaskFlag"] = request.preTrainTaskFlag;
    }

    if (!Util.isUnset(request.preTrainTaskId)) {
      body["PreTrainTaskId"] = request.preTrainTaskId;
    }

    if (!Util.isUnset(request.trainMode)) {
      body["TrainMode"] = request.trainMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrainTask",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrainTaskResponse>(await this.callApi(params, req, runtime), new UpdateTrainTaskResponse({}));
  }

  async updateTrainTask(request: UpdateTrainTaskRequest): Promise<UpdateTrainTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrainTaskWithOptions(request, runtime);
  }

  async updateWorkspaceWithOptions(request: UpdateWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkspace",
      version: "2021-11-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResponse({}));
  }

  async updateWorkspace(request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceWithOptions(request, runtime);
  }

}
