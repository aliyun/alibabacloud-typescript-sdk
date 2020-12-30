// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCoverTaskRequest extends $tea.Model {
  applicationId?: string;
  videoName?: string;
  videoUrl?: string;
  templateId?: number;
  callbackUrl?: string;
  scales?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
      templateId: 'TemplateId',
      callbackUrl: 'CallbackUrl',
      scales: 'Scales',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      videoName: 'string',
      videoUrl: 'string',
      templateId: 'number',
      callbackUrl: 'string',
      scales: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCoverTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCoverTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCoverTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCoverTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceGroupRequest extends $tea.Model {
  faceGroupName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupName: 'FaceGroupName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceGroupResponseBody extends $tea.Model {
  requestId?: string;
  faceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      faceGroupId: 'FaceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      faceGroupId: 'number',
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

export class CreateFacePersonRequest extends $tea.Model {
  faceGroupId?: number;
  facePersonName?: string;
  imageUrls?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
      facePersonName: 'FacePersonName',
      imageUrls: 'ImageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
      facePersonName: 'string',
      imageUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacePersonResponseBody extends $tea.Model {
  requestId?: string;
  facePersonId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      facePersonId: 'FacePersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      facePersonId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFacePersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFacePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGifTaskRequest extends $tea.Model {
  applicationId?: string;
  videoName?: string;
  videoUrl?: string;
  templateId?: number;
  callbackUrl?: string;
  scales?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
      templateId: 'TemplateId',
      callbackUrl: 'CallbackUrl',
      scales: 'Scales',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      videoName: 'string',
      videoUrl: 'string',
      templateId: 'number',
      callbackUrl: 'string',
      scales: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGifTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGifTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGifTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGifTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskRequest extends $tea.Model {
  applicationId?: string;
  videoName?: string;
  videoUrl?: string;
  templateId?: number;
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
      templateId: 'TemplateId',
      callbackUrl: 'CallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      videoName: 'string',
      videoUrl: 'string',
      templateId: 'number',
      callbackUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLabelTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLabelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  templateName?: string;
  content?: string;
  isDefault?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      templateName: 'TemplateName',
      content: 'Content',
      isDefault: 'IsDefault',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateName: 'string',
      content: 'string',
      isDefault: 'boolean',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceGroupRequest extends $tea.Model {
  faceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceGroupResponseBody extends $tea.Model {
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

export class DeleteFaceImageRequest extends $tea.Model {
  faceGroupId?: number;
  facePersonId?: number;
  faceImageId?: number;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
      facePersonId: 'FacePersonId',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
      facePersonId: 'number',
      faceImageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceImageResponseBody extends $tea.Model {
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

export class DeleteFaceImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacePersonRequest extends $tea.Model {
  faceGroupId?: number;
  facePersonId?: number;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
      facePersonId: 'FacePersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
      facePersonId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacePersonResponseBody extends $tea.Model {
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

export class DeleteFacePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFacePersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFacePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  result?: GetTaskResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
      result: GetTaskResultResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  isDefault?: boolean;
  category?: number;
  requestId?: string;
  content?: { [key: string]: any };
  createTime?: string;
  updateTime?: string;
  templateName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      category: 'Category',
      requestId: 'RequestId',
      content: 'Content',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      category: 'number',
      requestId: 'string',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      updateTime: 'string',
      templateName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsRequest extends $tea.Model {
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

export class ListFaceGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  faceGroups?: ListFaceGroupsResponseBodyFaceGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      faceGroups: 'FaceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      faceGroups: { 'type': 'array', 'itemType': ListFaceGroupsResponseBodyFaceGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceImagesRequest extends $tea.Model {
  faceGroupId?: number;
  facePersonId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
      facePersonId: 'FacePersonId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
      facePersonId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceImagesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  faceImages?: ListFaceImagesResponseBodyFaceImages[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      faceImages: 'FaceImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      faceImages: { 'type': 'array', 'itemType': ListFaceImagesResponseBodyFaceImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePersonsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  faceGroupId?: number;
  facePersonName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      faceGroupId: 'FaceGroupId',
      facePersonName: 'FacePersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      faceGroupId: 'number',
      facePersonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePersonsResponseBody extends $tea.Model {
  totalCount?: number;
  facePersons?: ListFacePersonsResponseBodyFacePersons[];
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      facePersons: 'FacePersons',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      facePersons: { 'type': 'array', 'itemType': ListFacePersonsResponseBodyFacePersons },
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePersonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFacePersonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFacePersonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  templateId?: number;
  templateName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templateId: 'number',
      templateName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  templates?: ListTemplatesResponseBodyTemplates[];
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      templates: 'Templates',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessFaceAlgorithmRequest extends $tea.Model {
  data?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessFaceAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessFaceAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessFaceAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessFaceAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessImageTagAlgorithmRequest extends $tea.Model {
  data?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessImageTagAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessImageTagAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessImageTagAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessImageTagAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLandmarkAlgorithmRequest extends $tea.Model {
  data?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLandmarkAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLandmarkAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessLandmarkAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessLandmarkAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLogoAlgorithmRequest extends $tea.Model {
  data?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLogoAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessLogoAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessLogoAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessLogoAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNewsAlgorithmRequest extends $tea.Model {
  data?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNewsAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNewsAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessNewsAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessNewsAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNlpAlgorithmRequest extends $tea.Model {
  appKey?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNlpAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessNlpAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessNlpAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessNlpAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessOcrAlgorithmRequest extends $tea.Model {
  appKey?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessOcrAlgorithmResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
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
      data: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProcessOcrAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ProcessOcrAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ProcessOcrAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceImageRequest extends $tea.Model {
  faceGroupId?: number;
  facePersonId?: number;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'FaceGroupId',
      facePersonId: 'FacePersonId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'number',
      facePersonId: 'number',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceImageResponseBody extends $tea.Model {
  requestId?: string;
  faceImages?: RegisterFaceImageResponseBodyFaceImages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      faceImages: 'FaceImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      faceImages: { 'type': 'array', 'itemType': RegisterFaceImageResponseBodyFaceImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterFaceImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterFaceImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  templateId?: string;
  templateName?: string;
  content?: string;
  isDefault?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      content: 'Content',
      isDefault: 'IsDefault',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      templateName: 'string',
      content: 'string',
      isDefault: 'boolean',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
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

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyResult extends $tea.Model {
  errorName?: string;
  errorMessage?: string;
  errorCode?: string;
  videoName?: string;
  analysisUseTime?: number;
  processResultUrl?: string;
  applicationId?: string;
  errorReason?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorName: 'ErrorName',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      videoName: 'VideoName',
      analysisUseTime: 'AnalysisUseTime',
      processResultUrl: 'ProcessResultUrl',
      applicationId: 'ApplicationId',
      errorReason: 'ErrorReason',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorName: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      videoName: 'string',
      analysisUseTime: 'number',
      processResultUrl: 'string',
      applicationId: 'string',
      errorReason: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponseBodyFaceGroupsTemplates extends $tea.Model {
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponseBodyFaceGroups extends $tea.Model {
  description?: string;
  faceGroupName?: string;
  personCount?: number;
  imageCount?: number;
  faceGroupId?: number;
  templates?: ListFaceGroupsResponseBodyFaceGroupsTemplates[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      faceGroupName: 'FaceGroupName',
      personCount: 'PersonCount',
      imageCount: 'ImageCount',
      faceGroupId: 'FaceGroupId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      faceGroupName: 'string',
      personCount: 'number',
      imageCount: 'number',
      faceGroupId: 'number',
      templates: { 'type': 'array', 'itemType': ListFaceGroupsResponseBodyFaceGroupsTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceImagesResponseBodyFaceImages extends $tea.Model {
  faceRectangle?: number[];
  imageUrl?: string;
  faceImageId?: number;
  static names(): { [key: string]: string } {
    return {
      faceRectangle: 'FaceRectangle',
      imageUrl: 'ImageUrl',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRectangle: { 'type': 'array', 'itemType': 'number' },
      imageUrl: 'string',
      faceImageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePersonsResponseBodyFacePersons extends $tea.Model {
  imageUrl?: string;
  imageCount?: number;
  facePersonId?: number;
  facePersonName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      imageCount: 'ImageCount',
      facePersonId: 'FacePersonId',
      facePersonName: 'FacePersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      imageCount: 'number',
      facePersonId: 'number',
      facePersonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  type?: number;
  isDefault?: boolean;
  updateTime?: string;
  createTime?: string;
  templateName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      isDefault: 'IsDefault',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      isDefault: 'boolean',
      updateTime: 'string',
      createTime: 'string',
      templateName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterFaceImageResponseBodyFaceImages extends $tea.Model {
  faceImageId?: number;
  static names(): { [key: string]: string } {
    return {
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageId: 'number',
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
    this._endpoint = this.getEndpoint("multimediaai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createCoverTaskWithOptions(request: CreateCoverTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCoverTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCoverTaskResponse>(await this.doRPCRequest("CreateCoverTask", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCoverTaskResponse({}));
  }

  async createCoverTask(request: CreateCoverTaskRequest): Promise<CreateCoverTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCoverTaskWithOptions(request, runtime);
  }

  async createFaceGroupWithOptions(request: CreateFaceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFaceGroupResponse>(await this.doRPCRequest("CreateFaceGroup", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFaceGroupResponse({}));
  }

  async createFaceGroup(request: CreateFaceGroupRequest): Promise<CreateFaceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceGroupWithOptions(request, runtime);
  }

  async createFacePersonWithOptions(request: CreateFacePersonRequest, runtime: $Util.RuntimeOptions): Promise<CreateFacePersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFacePersonResponse>(await this.doRPCRequest("CreateFacePerson", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFacePersonResponse({}));
  }

  async createFacePerson(request: CreateFacePersonRequest): Promise<CreateFacePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFacePersonWithOptions(request, runtime);
  }

  async createGifTaskWithOptions(request: CreateGifTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateGifTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGifTaskResponse>(await this.doRPCRequest("CreateGifTask", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGifTaskResponse({}));
  }

  async createGifTask(request: CreateGifTaskRequest): Promise<CreateGifTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGifTaskWithOptions(request, runtime);
  }

  async createLabelTaskWithOptions(request: CreateLabelTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateLabelTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLabelTaskResponse>(await this.doRPCRequest("CreateLabelTask", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLabelTaskResponse({}));
  }

  async createLabelTask(request: CreateLabelTaskRequest): Promise<CreateLabelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabelTaskWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteFaceGroupWithOptions(request: DeleteFaceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceGroupResponse>(await this.doRPCRequest("DeleteFaceGroup", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceGroupResponse({}));
  }

  async deleteFaceGroup(request: DeleteFaceGroupRequest): Promise<DeleteFaceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceGroupWithOptions(request, runtime);
  }

  async deleteFaceImageWithOptions(request: DeleteFaceImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceImageResponse>(await this.doRPCRequest("DeleteFaceImage", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceImageResponse({}));
  }

  async deleteFaceImage(request: DeleteFaceImageRequest): Promise<DeleteFaceImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceImageWithOptions(request, runtime);
  }

  async deleteFacePersonWithOptions(request: DeleteFacePersonRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFacePersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFacePersonResponse>(await this.doRPCRequest("DeleteFacePerson", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFacePersonResponse({}));
  }

  async deleteFacePerson(request: DeleteFacePersonRequest): Promise<DeleteFacePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFacePersonWithOptions(request, runtime);
  }

  async getTaskResultWithOptions(request: GetTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskResultResponse>(await this.doRPCRequest("GetTaskResult", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskResultResponse({}));
  }

  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskResultWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskStatusResponse>(await this.doRPCRequest("GetTaskStatus", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async listFaceGroupsWithOptions(request: ListFaceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceGroupsResponse>(await this.doRPCRequest("ListFaceGroups", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceGroupsResponse({}));
  }

  async listFaceGroups(request: ListFaceGroupsRequest): Promise<ListFaceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceGroupsWithOptions(request, runtime);
  }

  async listFaceImagesWithOptions(request: ListFaceImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceImagesResponse>(await this.doRPCRequest("ListFaceImages", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceImagesResponse({}));
  }

  async listFaceImages(request: ListFaceImagesRequest): Promise<ListFaceImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceImagesWithOptions(request, runtime);
  }

  async listFacePersonsWithOptions(request: ListFacePersonsRequest, runtime: $Util.RuntimeOptions): Promise<ListFacePersonsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFacePersonsResponse>(await this.doRPCRequest("ListFacePersons", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListFacePersonsResponse({}));
  }

  async listFacePersons(request: ListFacePersonsRequest): Promise<ListFacePersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFacePersonsWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async processFaceAlgorithmWithOptions(request: ProcessFaceAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessFaceAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessFaceAlgorithmResponse>(await this.doRPCRequest("ProcessFaceAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessFaceAlgorithmResponse({}));
  }

  async processFaceAlgorithm(request: ProcessFaceAlgorithmRequest): Promise<ProcessFaceAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processFaceAlgorithmWithOptions(request, runtime);
  }

  async processImageTagAlgorithmWithOptions(request: ProcessImageTagAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessImageTagAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessImageTagAlgorithmResponse>(await this.doRPCRequest("ProcessImageTagAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessImageTagAlgorithmResponse({}));
  }

  async processImageTagAlgorithm(request: ProcessImageTagAlgorithmRequest): Promise<ProcessImageTagAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processImageTagAlgorithmWithOptions(request, runtime);
  }

  async processLandmarkAlgorithmWithOptions(request: ProcessLandmarkAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessLandmarkAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessLandmarkAlgorithmResponse>(await this.doRPCRequest("ProcessLandmarkAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessLandmarkAlgorithmResponse({}));
  }

  async processLandmarkAlgorithm(request: ProcessLandmarkAlgorithmRequest): Promise<ProcessLandmarkAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processLandmarkAlgorithmWithOptions(request, runtime);
  }

  async processLogoAlgorithmWithOptions(request: ProcessLogoAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessLogoAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessLogoAlgorithmResponse>(await this.doRPCRequest("ProcessLogoAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessLogoAlgorithmResponse({}));
  }

  async processLogoAlgorithm(request: ProcessLogoAlgorithmRequest): Promise<ProcessLogoAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processLogoAlgorithmWithOptions(request, runtime);
  }

  async processNewsAlgorithmWithOptions(request: ProcessNewsAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessNewsAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessNewsAlgorithmResponse>(await this.doRPCRequest("ProcessNewsAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessNewsAlgorithmResponse({}));
  }

  async processNewsAlgorithm(request: ProcessNewsAlgorithmRequest): Promise<ProcessNewsAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processNewsAlgorithmWithOptions(request, runtime);
  }

  async processNlpAlgorithmWithOptions(request: ProcessNlpAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessNlpAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessNlpAlgorithmResponse>(await this.doRPCRequest("ProcessNlpAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessNlpAlgorithmResponse({}));
  }

  async processNlpAlgorithm(request: ProcessNlpAlgorithmRequest): Promise<ProcessNlpAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processNlpAlgorithmWithOptions(request, runtime);
  }

  async processOcrAlgorithmWithOptions(request: ProcessOcrAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<ProcessOcrAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ProcessOcrAlgorithmResponse>(await this.doRPCRequest("ProcessOcrAlgorithm", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new ProcessOcrAlgorithmResponse({}));
  }

  async processOcrAlgorithm(request: ProcessOcrAlgorithmRequest): Promise<ProcessOcrAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.processOcrAlgorithmWithOptions(request, runtime);
  }

  async registerFaceImageWithOptions(request: RegisterFaceImageRequest, runtime: $Util.RuntimeOptions): Promise<RegisterFaceImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterFaceImageResponse>(await this.doRPCRequest("RegisterFaceImage", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterFaceImageResponse({}));
  }

  async registerFaceImage(request: RegisterFaceImageRequest): Promise<RegisterFaceImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerFaceImageWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doRPCRequest("UpdateTemplate", "2019-08-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

}
