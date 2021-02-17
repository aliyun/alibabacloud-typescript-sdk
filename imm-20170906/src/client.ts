// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CompareImageFacesRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUriA?: string;
  imageUriB?: string;
  faceIdA?: string;
  faceIdB?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUriA: 'ImageUriA',
      imageUriB: 'ImageUriB',
      faceIdA: 'FaceIdA',
      faceIdB: 'FaceIdB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUriA: 'string',
      imageUriB: 'string',
      faceIdA: 'string',
      faceIdB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBody extends $tea.Model {
  requestId?: string;
  similarity?: number;
  setId?: string;
  faceA?: CompareImageFacesResponseBodyFaceA;
  faceB?: CompareImageFacesResponseBodyFaceB;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      similarity: 'Similarity',
      setId: 'SetId',
      faceA: 'FaceA',
      faceB: 'FaceB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      similarity: 'number',
      setId: 'string',
      faceA: CompareImageFacesResponseBodyFaceA,
      faceB: CompareImageFacesResponseBodyFaceB,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompareImageFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompareImageFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertOfficeFormatRequest extends $tea.Model {
  project?: string;
  srcUri?: string;
  tgtType?: string;
  tgtUri?: string;
  srcType?: string;
  startPage?: number;
  endPage?: number;
  maxSheetRow?: number;
  maxSheetCol?: number;
  maxSheetCount?: number;
  sheetOnePage?: boolean;
  modelId?: string;
  password?: string;
  tgtFilePrefix?: string;
  tgtFileSuffix?: string;
  tgtFilePages?: string;
  fitToPagesTall?: boolean;
  fitToPagesWide?: boolean;
  pdfVector?: boolean;
  hidecomments?: boolean;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcUri: 'SrcUri',
      tgtType: 'TgtType',
      tgtUri: 'TgtUri',
      srcType: 'SrcType',
      startPage: 'StartPage',
      endPage: 'EndPage',
      maxSheetRow: 'MaxSheetRow',
      maxSheetCol: 'MaxSheetCol',
      maxSheetCount: 'MaxSheetCount',
      sheetOnePage: 'SheetOnePage',
      modelId: 'ModelId',
      password: 'Password',
      tgtFilePrefix: 'TgtFilePrefix',
      tgtFileSuffix: 'TgtFileSuffix',
      tgtFilePages: 'TgtFilePages',
      fitToPagesTall: 'FitToPagesTall',
      fitToPagesWide: 'FitToPagesWide',
      pdfVector: 'PdfVector',
      hidecomments: 'Hidecomments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcUri: 'string',
      tgtType: 'string',
      tgtUri: 'string',
      srcType: 'string',
      startPage: 'number',
      endPage: 'number',
      maxSheetRow: 'number',
      maxSheetCol: 'number',
      maxSheetCount: 'number',
      sheetOnePage: 'boolean',
      modelId: 'string',
      password: 'string',
      tgtFilePrefix: 'string',
      tgtFileSuffix: 'string',
      tgtFilePages: 'string',
      fitToPagesTall: 'boolean',
      fitToPagesWide: 'boolean',
      pdfVector: 'boolean',
      hidecomments: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertOfficeFormatResponseBody extends $tea.Model {
  pageCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertOfficeFormatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertOfficeFormatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertOfficeFormatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGrabFrameTaskRequest extends $tea.Model {
  project?: string;
  videoUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  targetList?: string;
  customMessage?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      videoUri: 'VideoUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      targetList: 'TargetList',
      customMessage: 'CustomMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      videoUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      targetList: 'string',
      customMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGrabFrameTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGrabFrameTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGrabFrameTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGrabFrameTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupFacesJobRequest extends $tea.Model {
  project?: string;
  setId?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupFacesJobResponseBody extends $tea.Model {
  jobType?: string;
  requestId?: string;
  setId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      requestId: 'RequestId',
      setId: 'SetId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      requestId: 'string',
      setId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupFacesJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupFacesJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupFacesJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageProcessTaskRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  targetList?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      targetList: 'TargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      targetList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageProcessTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageProcessTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageProcessTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageProcessTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaComplexTaskRequest extends $tea.Model {
  project?: string;
  parameters?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      parameters: 'Parameters',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      parameters: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaComplexTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaComplexTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMediaComplexTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMediaComplexTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeFaceGroupsJobRequest extends $tea.Model {
  project?: string;
  setId?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  groupIdFrom?: string;
  groupIdTo?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      groupIdFrom: 'GroupIdFrom',
      groupIdTo: 'GroupIdTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      groupIdFrom: 'string',
      groupIdTo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeFaceGroupsJobResponseBody extends $tea.Model {
  groupIdFrom?: string;
  jobType?: string;
  requestId?: string;
  setId?: string;
  groupIdTo?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdFrom: 'GroupIdFrom',
      jobType: 'JobType',
      requestId: 'RequestId',
      setId: 'SetId',
      groupIdTo: 'GroupIdTo',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdFrom: 'string',
      jobType: 'string',
      requestId: 'string',
      setId: 'string',
      groupIdTo: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMergeFaceGroupsJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMergeFaceGroupsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMergeFaceGroupsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskRequest extends $tea.Model {
  project?: string;
  srcUri?: string;
  tgtType?: string;
  tgtUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  srcType?: string;
  startPage?: number;
  endPage?: number;
  maxSheetRow?: number;
  maxSheetCol?: number;
  maxSheetCount?: number;
  sheetOnePage?: boolean;
  modelId?: string;
  password?: string;
  tgtFilePrefix?: string;
  tgtFileSuffix?: string;
  tgtFilePages?: string;
  fitToPagesTall?: boolean;
  fitToPagesWide?: boolean;
  idempotentToken?: string;
  pdfVector?: boolean;
  hidecomments?: boolean;
  displayDpi?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcUri: 'SrcUri',
      tgtType: 'TgtType',
      tgtUri: 'TgtUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      srcType: 'SrcType',
      startPage: 'StartPage',
      endPage: 'EndPage',
      maxSheetRow: 'MaxSheetRow',
      maxSheetCol: 'MaxSheetCol',
      maxSheetCount: 'MaxSheetCount',
      sheetOnePage: 'SheetOnePage',
      modelId: 'ModelId',
      password: 'Password',
      tgtFilePrefix: 'TgtFilePrefix',
      tgtFileSuffix: 'TgtFileSuffix',
      tgtFilePages: 'TgtFilePages',
      fitToPagesTall: 'FitToPagesTall',
      fitToPagesWide: 'FitToPagesWide',
      idempotentToken: 'IdempotentToken',
      pdfVector: 'PdfVector',
      hidecomments: 'Hidecomments',
      displayDpi: 'DisplayDpi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcUri: 'string',
      tgtType: 'string',
      tgtUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      srcType: 'string',
      startPage: 'number',
      endPage: 'number',
      maxSheetRow: 'number',
      maxSheetCol: 'number',
      maxSheetCount: 'number',
      sheetOnePage: 'boolean',
      modelId: 'string',
      password: 'string',
      tgtFilePrefix: 'string',
      tgtFileSuffix: 'string',
      tgtFilePages: 'string',
      fitToPagesTall: 'boolean',
      fitToPagesWide: 'boolean',
      idempotentToken: 'string',
      pdfVector: 'boolean',
      hidecomments: 'boolean',
      displayDpi: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskResponseBody extends $tea.Model {
  status?: string;
  taskId?: string;
  requestId?: string;
  percent?: number;
  createTime?: string;
  tgtLoc?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
      requestId: 'RequestId',
      percent: 'Percent',
      createTime: 'CreateTime',
      tgtLoc: 'TgtLoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      requestId: 'string',
      percent: 'number',
      createTime: 'string',
      tgtLoc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetRequest extends $tea.Model {
  project?: string;
  setId?: string;
  setName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      setName: 'SetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      setName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetResponseBody extends $tea.Model {
  modifyTime?: string;
  videoCount?: number;
  imageCount?: number;
  requestId?: string;
  createTime?: string;
  setName?: string;
  setId?: string;
  videoLength?: number;
  faceCount?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      videoCount: 'VideoCount',
      imageCount: 'ImageCount',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      setName: 'SetName',
      setId: 'SetId',
      videoLength: 'VideoLength',
      faceCount: 'FaceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      videoCount: 'number',
      imageCount: 'number',
      requestId: 'string',
      createTime: 'string',
      setName: 'string',
      setId: 'string',
      videoLength: 'number',
      faceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamAnalyseTaskRequest extends $tea.Model {
  project?: string;
  streamUri?: string;
  grabType?: string;
  startTime?: string;
  endTime?: string;
  saveType?: boolean;
  interval?: string;
  tgtUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      streamUri: 'StreamUri',
      grabType: 'GrabType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      saveType: 'SaveType',
      interval: 'Interval',
      tgtUri: 'TgtUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      streamUri: 'string',
      grabType: 'string',
      startTime: 'string',
      endTime: 'string',
      saveType: 'boolean',
      interval: 'string',
      tgtUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamAnalyseTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamAnalyseTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStreamAnalyseTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStreamAnalyseTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAbstractTaskRequest extends $tea.Model {
  project?: string;
  videoUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  targetVideoUri?: string;
  targetClipsUri?: string;
  abstractLength?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      videoUri: 'VideoUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      targetVideoUri: 'TargetVideoUri',
      targetClipsUri: 'TargetClipsUri',
      abstractLength: 'AbstractLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      videoUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      targetVideoUri: 'string',
      targetClipsUri: 'string',
      abstractLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAbstractTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAbstractTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoAbstractTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoAbstractTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAnalyseTaskRequest extends $tea.Model {
  project?: string;
  videoUri?: string;
  grabType?: string;
  startTime?: string;
  endTime?: string;
  saveType?: boolean;
  interval?: string;
  tgtUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      videoUri: 'VideoUri',
      grabType: 'GrabType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      saveType: 'SaveType',
      interval: 'Interval',
      tgtUri: 'TgtUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      videoUri: 'string',
      grabType: 'string',
      startTime: 'string',
      endTime: 'string',
      saveType: 'boolean',
      interval: 'string',
      tgtUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAnalyseTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoAnalyseTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoAnalyseTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoAnalyseTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoCompressTaskRequest extends $tea.Model {
  project?: string;
  videoUri?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  targetList?: string;
  customMessage?: string;
  targetContainer?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      videoUri: 'VideoUri',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      targetList: 'TargetList',
      customMessage: 'CustomMessage',
      targetContainer: 'TargetContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      videoUri: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      targetList: 'string',
      customMessage: 'string',
      targetContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoCompressTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoCompressTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoCompressTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoCompressTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoProduceTaskRequest extends $tea.Model {
  project?: string;
  images?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  targetUri?: string;
  customMessage?: string;
  music?: string;
  width?: number;
  height?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      images: 'Images',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      targetUri: 'TargetUri',
      customMessage: 'CustomMessage',
      music: 'Music',
      width: 'Width',
      height: 'Height',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      images: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      targetUri: 'string',
      customMessage: 'string',
      music: 'string',
      width: 'number',
      height: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoProduceTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoProduceTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoProduceTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoProduceTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeBlindWatermarkRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  originalImageUri?: string;
  targetUri?: string;
  imageQuality?: number;
  model?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      originalImageUri: 'OriginalImageUri',
      targetUri: 'TargetUri',
      imageQuality: 'ImageQuality',
      model: 'Model',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      originalImageUri: 'string',
      targetUri: 'string',
      imageQuality: 'number',
      model: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeBlindWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  targetUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
      targetUri: 'TargetUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
      targetUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeBlindWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DecodeBlindWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DecodeBlindWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
  requestId?: string;
  setId?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setId: 'SetId',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setId: 'string',
      imageUri: 'string',
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

export class DeleteImageJobRequest extends $tea.Model {
  project?: string;
  jobType?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      jobType: 'JobType',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      jobType: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageJobResponseBody extends $tea.Model {
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

export class DeleteImageJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteImageJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeConversionTaskRequest extends $tea.Model {
  project?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeConversionTaskResponseBody extends $tea.Model {
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

export class DeleteOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  project?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSetRequest extends $tea.Model {
  project?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSetResponseBody extends $tea.Model {
  requestId?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoRequest extends $tea.Model {
  project?: string;
  setId?: string;
  videoUri?: string;
  resources?: boolean;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      videoUri: 'VideoUri',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      videoUri: 'string',
      resources: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoResponseBody extends $tea.Model {
  requestId?: string;
  videoUri?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoUri: 'VideoUri',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoUri: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoTaskRequest extends $tea.Model {
  project?: string;
  taskType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      taskType: 'TaskType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      taskType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoTaskResponseBody extends $tea.Model {
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

export class DeleteVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVideoTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DetectImageBodiesRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesResponseBody extends $tea.Model {
  requestId?: string;
  bodies?: DetectImageBodiesResponseBodyBodies[];
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bodies: 'Bodies',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bodies: { 'type': 'array', 'itemType': DetectImageBodiesResponseBodyBodies },
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageBodiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageBodiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  realUid?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      realUid: 'RealUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      realUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBody extends $tea.Model {
  requestId?: string;
  imageUri?: string;
  faces?: DetectImageFacesResponseBodyFaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageUri: 'ImageUri',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageUri: 'string',
      faces: { 'type': 'array', 'itemType': DetectImageFacesResponseBodyFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLogosRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLogosResponseBody extends $tea.Model {
  requestId?: string;
  logos?: DetectImageLogosResponseBodyLogos[];
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logos: 'Logos',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logos: { 'type': 'array', 'itemType': DetectImageLogosResponseBodyLogos },
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLogosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageLogosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageLogosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageQRCodesRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageQRCodesResponseBody extends $tea.Model {
  requestId?: string;
  imageUri?: string;
  QRCodes?: DetectImageQRCodesResponseBodyQRCodes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageUri: 'ImageUri',
      QRCodes: 'QRCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageUri: 'string',
      QRCodes: { 'type': 'array', 'itemType': DetectImageQRCodesResponseBodyQRCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageQRCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageQRCodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageQRCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageTagsRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  realUid?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      realUid: 'RealUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      realUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageTagsResponseBody extends $tea.Model {
  requestId?: string;
  imageUri?: string;
  tags?: DetectImageTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageUri: 'ImageUri',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageUri: 'string',
      tags: { 'type': 'array', 'itemType': DetectImageTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesRequest extends $tea.Model {
  project?: string;
  srcUris?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcUris: 'SrcUris',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcUris: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponseBody extends $tea.Model {
  successDetails?: DetectQRCodesResponseBodySuccessDetails[];
  requestId?: string;
  failDetails?: DetectQRCodesResponseBodyFailDetails[];
  static names(): { [key: string]: string } {
    return {
      successDetails: 'SuccessDetails',
      requestId: 'RequestId',
      failDetails: 'FailDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDetails: { 'type': 'array', 'itemType': DetectQRCodesResponseBodySuccessDetails },
      requestId: 'string',
      failDetails: { 'type': 'array', 'itemType': DetectQRCodesResponseBodyFailDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectQRCodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectQRCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncodeBlindWatermarkRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  watermarkUri?: string;
  targetUri?: string;
  imageQuality?: string;
  content?: string;
  targetImageType?: string;
  model?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      watermarkUri: 'WatermarkUri',
      targetUri: 'TargetUri',
      imageQuality: 'ImageQuality',
      content: 'Content',
      targetImageType: 'TargetImageType',
      model: 'Model',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      watermarkUri: 'string',
      targetUri: 'string',
      imageQuality: 'string',
      content: 'string',
      targetImageType: 'string',
      model: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncodeBlindWatermarkResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  targetUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
      targetUri: 'TargetUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
      targetUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncodeBlindWatermarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EncodeBlindWatermarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EncodeBlindWatermarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageSizeRange?: string;
  imageTimeRange?: string;
  createTimeRange?: string;
  modifyTimeRange?: string;
  sourceType?: string;
  sourceUriPrefix?: string;
  remarksAPrefix?: string;
  remarksBPrefix?: string;
  tagNames?: string;
  OCRContentsMatch?: string;
  ageRange?: string;
  gender?: string;
  emotion?: string;
  orderBy?: string;
  order?: string;
  marker?: string;
  locationBoundary?: string;
  remarksCPrefix?: string;
  remarksDPrefix?: string;
  externalId?: string;
  groupId?: string;
  limit?: number;
  facesModifyTimeRange?: string;
  tagsModifyTimeRange?: string;
  addressLineContentsMatch?: string;
  remarksArrayAIn?: string;
  remarksArrayBIn?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageSizeRange: 'ImageSizeRange',
      imageTimeRange: 'ImageTimeRange',
      createTimeRange: 'CreateTimeRange',
      modifyTimeRange: 'ModifyTimeRange',
      sourceType: 'SourceType',
      sourceUriPrefix: 'SourceUriPrefix',
      remarksAPrefix: 'RemarksAPrefix',
      remarksBPrefix: 'RemarksBPrefix',
      tagNames: 'TagNames',
      OCRContentsMatch: 'OCRContentsMatch',
      ageRange: 'AgeRange',
      gender: 'Gender',
      emotion: 'Emotion',
      orderBy: 'OrderBy',
      order: 'Order',
      marker: 'Marker',
      locationBoundary: 'LocationBoundary',
      remarksCPrefix: 'RemarksCPrefix',
      remarksDPrefix: 'RemarksDPrefix',
      externalId: 'ExternalId',
      groupId: 'GroupId',
      limit: 'Limit',
      facesModifyTimeRange: 'FacesModifyTimeRange',
      tagsModifyTimeRange: 'TagsModifyTimeRange',
      addressLineContentsMatch: 'AddressLineContentsMatch',
      remarksArrayAIn: 'RemarksArrayAIn',
      remarksArrayBIn: 'RemarksArrayBIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageSizeRange: 'string',
      imageTimeRange: 'string',
      createTimeRange: 'string',
      modifyTimeRange: 'string',
      sourceType: 'string',
      sourceUriPrefix: 'string',
      remarksAPrefix: 'string',
      remarksBPrefix: 'string',
      tagNames: 'string',
      OCRContentsMatch: 'string',
      ageRange: 'string',
      gender: 'string',
      emotion: 'string',
      orderBy: 'string',
      order: 'string',
      marker: 'string',
      locationBoundary: 'string',
      remarksCPrefix: 'string',
      remarksDPrefix: 'string',
      externalId: 'string',
      groupId: 'string',
      limit: 'number',
      facesModifyTimeRange: 'string',
      tagsModifyTimeRange: 'string',
      addressLineContentsMatch: 'string',
      remarksArrayAIn: 'string',
      remarksArrayBIn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBody extends $tea.Model {
  requestId?: string;
  images?: FindImagesResponseBodyImages[];
  nextMarker?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      images: 'Images',
      nextMarker: 'NextMarker',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      images: { 'type': 'array', 'itemType': FindImagesResponseBodyImages },
      nextMarker: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUri?: string;
  faceId?: string;
  limit?: number;
  minSimilarity?: number;
  responseFormat?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUri: 'ImageUri',
      faceId: 'FaceId',
      limit: 'Limit',
      minSimilarity: 'MinSimilarity',
      responseFormat: 'ResponseFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUri: 'string',
      faceId: 'string',
      limit: 'number',
      minSimilarity: 'number',
      responseFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponseBody extends $tea.Model {
  requestId?: string;
  faces?: FindSimilarFacesResponseBodyFaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      faces: { 'type': 'array', 'itemType': FindSimilarFacesResponseBodyFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindSimilarFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindSimilarFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentKeyRequest extends $tea.Model {
  project?: string;
  versionId?: string;
  DRMServerId?: string;
  keyIds?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      versionId: 'VersionId',
      DRMServerId: 'DRMServerId',
      keyIds: 'KeyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      versionId: 'string',
      DRMServerId: 'string',
      keyIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentKeyResponseBody extends $tea.Model {
  versionId?: string;
  requestId?: string;
  keyInfos?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      requestId: 'RequestId',
      keyInfos: 'KeyInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      requestId: 'string',
      keyInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetContentKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetContentKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDRMLicenseRequest extends $tea.Model {
  project?: string;
  DRMType?: string;
  DRMLicense?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      DRMType: 'DRMType',
      DRMLicense: 'DRMLicense',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      DRMType: 'string',
      DRMLicense: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDRMLicenseResponseBody extends $tea.Model {
  requestId?: string;
  deviceInfo?: string;
  DRMData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
      DRMData: 'DRMData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: 'string',
      DRMData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDRMLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDRMLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDRMLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  imageQuality?: GetImageResponseBodyImageQuality;
  modifyTime?: string;
  address?: GetImageResponseBodyAddress;
  sourceType?: string;
  sourceUri?: string;
  facesFailReason?: string;
  croppingSuggestionStatus?: string;
  croppingSuggestionFailReason?: string;
  addressFailReason?: string;
  remarksA?: string;
  addressModifyTime?: string;
  remarksB?: string;
  imageFormat?: string;
  tagsFailReason?: string;
  remarksArrayB?: string;
  facesModifyTime?: string;
  exif?: string;
  remarksC?: string;
  remarksD?: string;
  imageWidth?: number;
  remarksArrayA?: string;
  sourcePosition?: string;
  tags?: GetImageResponseBodyTags[];
  faces?: GetImageResponseBodyFaces[];
  addressStatus?: string;
  facesStatus?: string;
  imageQualityModifyTime?: string;
  croppingSuggestion?: GetImageResponseBodyCroppingSuggestion[];
  requestId?: string;
  createTime?: string;
  externalId?: string;
  tagsModifyTime?: string;
  imageQualityFailReason?: string;
  orientation?: string;
  imageUri?: string;
  OCRStatus?: string;
  OCRModifyTime?: string;
  imageTime?: string;
  croppingSuggestionModifyTime?: string;
  imageHeight?: number;
  imageQualityStatus?: string;
  tagsStatus?: string;
  OCRFailReason?: string;
  setId?: string;
  fileSize?: number;
  location?: string;
  OCR?: GetImageResponseBodyOCR[];
  static names(): { [key: string]: string } {
    return {
      imageQuality: 'ImageQuality',
      modifyTime: 'ModifyTime',
      address: 'Address',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      facesFailReason: 'FacesFailReason',
      croppingSuggestionStatus: 'CroppingSuggestionStatus',
      croppingSuggestionFailReason: 'CroppingSuggestionFailReason',
      addressFailReason: 'AddressFailReason',
      remarksA: 'RemarksA',
      addressModifyTime: 'AddressModifyTime',
      remarksB: 'RemarksB',
      imageFormat: 'ImageFormat',
      tagsFailReason: 'TagsFailReason',
      remarksArrayB: 'RemarksArrayB',
      facesModifyTime: 'FacesModifyTime',
      exif: 'Exif',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      imageWidth: 'ImageWidth',
      remarksArrayA: 'RemarksArrayA',
      sourcePosition: 'SourcePosition',
      tags: 'Tags',
      faces: 'Faces',
      addressStatus: 'AddressStatus',
      facesStatus: 'FacesStatus',
      imageQualityModifyTime: 'ImageQualityModifyTime',
      croppingSuggestion: 'CroppingSuggestion',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      externalId: 'ExternalId',
      tagsModifyTime: 'TagsModifyTime',
      imageQualityFailReason: 'ImageQualityFailReason',
      orientation: 'Orientation',
      imageUri: 'ImageUri',
      OCRStatus: 'OCRStatus',
      OCRModifyTime: 'OCRModifyTime',
      imageTime: 'ImageTime',
      croppingSuggestionModifyTime: 'CroppingSuggestionModifyTime',
      imageHeight: 'ImageHeight',
      imageQualityStatus: 'ImageQualityStatus',
      tagsStatus: 'TagsStatus',
      OCRFailReason: 'OCRFailReason',
      setId: 'SetId',
      fileSize: 'FileSize',
      location: 'Location',
      OCR: 'OCR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuality: GetImageResponseBodyImageQuality,
      modifyTime: 'string',
      address: GetImageResponseBodyAddress,
      sourceType: 'string',
      sourceUri: 'string',
      facesFailReason: 'string',
      croppingSuggestionStatus: 'string',
      croppingSuggestionFailReason: 'string',
      addressFailReason: 'string',
      remarksA: 'string',
      addressModifyTime: 'string',
      remarksB: 'string',
      imageFormat: 'string',
      tagsFailReason: 'string',
      remarksArrayB: 'string',
      facesModifyTime: 'string',
      exif: 'string',
      remarksC: 'string',
      remarksD: 'string',
      imageWidth: 'number',
      remarksArrayA: 'string',
      sourcePosition: 'string',
      tags: { 'type': 'array', 'itemType': GetImageResponseBodyTags },
      faces: { 'type': 'array', 'itemType': GetImageResponseBodyFaces },
      addressStatus: 'string',
      facesStatus: 'string',
      imageQualityModifyTime: 'string',
      croppingSuggestion: { 'type': 'array', 'itemType': GetImageResponseBodyCroppingSuggestion },
      requestId: 'string',
      createTime: 'string',
      externalId: 'string',
      tagsModifyTime: 'string',
      imageQualityFailReason: 'string',
      orientation: 'string',
      imageUri: 'string',
      OCRStatus: 'string',
      OCRModifyTime: 'string',
      imageTime: 'string',
      croppingSuggestionModifyTime: 'string',
      imageHeight: 'number',
      imageQualityStatus: 'string',
      tagsStatus: 'string',
      OCRFailReason: 'string',
      setId: 'string',
      fileSize: 'number',
      location: 'string',
      OCR: { 'type': 'array', 'itemType': GetImageResponseBodyOCR },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCroppingSuggestionsRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  aspectRatios?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
      aspectRatios: 'AspectRatios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
      aspectRatios: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCroppingSuggestionsResponseBody extends $tea.Model {
  requestId?: string;
  imageUri?: string;
  croppingSuggestions?: GetImageCroppingSuggestionsResponseBodyCroppingSuggestions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageUri: 'ImageUri',
      croppingSuggestions: 'CroppingSuggestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageUri: 'string',
      croppingSuggestions: { 'type': 'array', 'itemType': GetImageCroppingSuggestionsResponseBodyCroppingSuggestions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCroppingSuggestionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageCroppingSuggestionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageCroppingSuggestionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageQualityRequest extends $tea.Model {
  project?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageQualityResponseBody extends $tea.Model {
  imageQuality?: GetImageQualityResponseBodyImageQuality;
  requestId?: string;
  imageUri?: string;
  static names(): { [key: string]: string } {
    return {
      imageQuality: 'ImageQuality',
      requestId: 'RequestId',
      imageUri: 'ImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuality: GetImageQualityResponseBodyImageQuality,
      requestId: 'string',
      imageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaRequest extends $tea.Model {
  project?: string;
  mediaUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      mediaUri: 'MediaUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      mediaUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBody extends $tea.Model {
  mediaUri?: string;
  requestId?: string;
  mediaMeta?: GetMediaMetaResponseBodyMediaMeta;
  static names(): { [key: string]: string } {
    return {
      mediaUri: 'MediaUri',
      requestId: 'RequestId',
      mediaMeta: 'MediaMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaUri: 'string',
      requestId: 'string',
      mediaMeta: GetMediaMetaResponseBodyMediaMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMediaMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMediaMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskRequest extends $tea.Model {
  project?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskResponseBody extends $tea.Model {
  status?: string;
  failDetail?: GetOfficeConversionTaskResponseBodyFailDetail;
  tgtType?: string;
  taskId?: string;
  requestId?: string;
  percent?: number;
  createTime?: string;
  externalID?: string;
  imageSpec?: string;
  notifyEndpoint?: string;
  tgtUri?: string;
  finishTime?: string;
  pageCount?: number;
  notifyTopicName?: string;
  srcUri?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      failDetail: 'FailDetail',
      tgtType: 'TgtType',
      taskId: 'TaskId',
      requestId: 'RequestId',
      percent: 'Percent',
      createTime: 'CreateTime',
      externalID: 'ExternalID',
      imageSpec: 'ImageSpec',
      notifyEndpoint: 'NotifyEndpoint',
      tgtUri: 'TgtUri',
      finishTime: 'FinishTime',
      pageCount: 'PageCount',
      notifyTopicName: 'NotifyTopicName',
      srcUri: 'SrcUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      failDetail: GetOfficeConversionTaskResponseBodyFailDetail,
      tgtType: 'string',
      taskId: 'string',
      requestId: 'string',
      percent: 'number',
      createTime: 'string',
      externalID: 'string',
      imageSpec: 'string',
      notifyEndpoint: 'string',
      tgtUri: 'string',
      finishTime: 'string',
      pageCount: 'number',
      notifyTopicName: 'string',
      srcUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditURLRequest extends $tea.Model {
  project?: string;
  srcUri?: string;
  srcType?: string;
  fileID?: string;
  tgtUri?: string;
  userID?: string;
  userName?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcUri: 'SrcUri',
      srcType: 'SrcType',
      fileID: 'FileID',
      tgtUri: 'TgtUri',
      userID: 'UserID',
      userName: 'UserName',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcUri: 'string',
      srcType: 'string',
      fileID: 'string',
      tgtUri: 'string',
      userID: 'string',
      userName: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditURLResponseBody extends $tea.Model {
  refreshToken?: string;
  requestId?: string;
  editURL?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      editURL: 'EditURL',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshToken: 'string',
      requestId: 'string',
      editURL: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOfficeEditURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOfficeEditURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficePreviewURLRequest extends $tea.Model {
  project?: string;
  srcUri?: string;
  srcType?: string;
  watermarkType?: number;
  watermarkValue?: string;
  watermarkFillStyle?: string;
  watermarkFont?: string;
  watermarkRotate?: number;
  watermarkHorizontal?: number;
  watermarkVertical?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcUri: 'SrcUri',
      srcType: 'SrcType',
      watermarkType: 'WatermarkType',
      watermarkValue: 'WatermarkValue',
      watermarkFillStyle: 'WatermarkFillStyle',
      watermarkFont: 'WatermarkFont',
      watermarkRotate: 'WatermarkRotate',
      watermarkHorizontal: 'WatermarkHorizontal',
      watermarkVertical: 'WatermarkVertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcUri: 'string',
      srcType: 'string',
      watermarkType: 'number',
      watermarkValue: 'string',
      watermarkFillStyle: 'string',
      watermarkFont: 'string',
      watermarkRotate: 'number',
      watermarkHorizontal: 'number',
      watermarkVertical: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficePreviewURLResponseBody extends $tea.Model {
  previewURL?: string;
  refreshToken?: string;
  requestId?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      previewURL: 'PreviewURL',
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewURL: 'string',
      refreshToken: 'string',
      requestId: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficePreviewURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOfficePreviewURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOfficePreviewURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  project?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  project?: string;
  modifyTime?: string;
  type?: string;
  CU?: number;
  serviceRole?: string;
  requestId?: string;
  endpoint?: string;
  createTime?: string;
  regionId?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      modifyTime: 'ModifyTime',
      type: 'Type',
      CU: 'CU',
      serviceRole: 'ServiceRole',
      requestId: 'RequestId',
      endpoint: 'Endpoint',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      modifyTime: 'string',
      type: 'string',
      CU: 'number',
      serviceRole: 'string',
      requestId: 'string',
      endpoint: 'string',
      createTime: 'string',
      regionId: 'string',
      billingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetRequest extends $tea.Model {
  project?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetResponseBody extends $tea.Model {
  modifyTime?: string;
  videoCount?: number;
  imageCount?: number;
  requestId?: string;
  createTime?: string;
  setName?: string;
  setId?: string;
  videoLength?: number;
  faceCount?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      videoCount: 'VideoCount',
      imageCount: 'ImageCount',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      setName: 'SetName',
      setId: 'SetId',
      videoLength: 'VideoLength',
      faceCount: 'FaceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      videoCount: 'number',
      imageCount: 'number',
      requestId: 'string',
      createTime: 'string',
      setName: 'string',
      setId: 'string',
      videoLength: 'number',
      faceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoRequest extends $tea.Model {
  project?: string;
  setId?: string;
  videoUri?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      videoUri: 'VideoUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      videoUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoResponseBody extends $tea.Model {
  modifyTime?: string;
  processStatus?: string;
  videoWidth?: number;
  sourceType?: string;
  sourceUri?: string;
  videoInfo?: string;
  videoFrameTagsModifyTime?: string;
  remarksA?: string;
  videoFacesFailReason?: string;
  remarksB?: string;
  videoFacesStatus?: string;
  remarksC?: string;
  videoOCRModifyTime?: string;
  remarksD?: string;
  videoHeight?: number;
  sourcePosition?: string;
  videoOCRFailReason?: string;
  videoFrameTagsStatus?: string;
  videoTagsFailReason?: string;
  videoTagsModifyTime?: string;
  videoOCRStatus?: string;
  videoFrames?: number;
  requestId?: string;
  processModifyTime?: string;
  videoSTTModifyTime?: string;
  processFailReason?: string;
  createTime?: string;
  externalId?: string;
  videoSTTFailReason?: string;
  videoUri?: string;
  videoFrameTagsFailReason?: string;
  videoFormat?: string;
  videoSTTStatus?: string;
  videoFacesModifyTime?: string;
  videoTags?: GetVideoResponseBodyVideoTags[];
  videoDuration?: number;
  setId?: string;
  videoTagsStatus?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      processStatus: 'ProcessStatus',
      videoWidth: 'VideoWidth',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      videoInfo: 'VideoInfo',
      videoFrameTagsModifyTime: 'VideoFrameTagsModifyTime',
      remarksA: 'RemarksA',
      videoFacesFailReason: 'VideoFacesFailReason',
      remarksB: 'RemarksB',
      videoFacesStatus: 'VideoFacesStatus',
      remarksC: 'RemarksC',
      videoOCRModifyTime: 'VideoOCRModifyTime',
      remarksD: 'RemarksD',
      videoHeight: 'VideoHeight',
      sourcePosition: 'SourcePosition',
      videoOCRFailReason: 'VideoOCRFailReason',
      videoFrameTagsStatus: 'VideoFrameTagsStatus',
      videoTagsFailReason: 'VideoTagsFailReason',
      videoTagsModifyTime: 'VideoTagsModifyTime',
      videoOCRStatus: 'VideoOCRStatus',
      videoFrames: 'VideoFrames',
      requestId: 'RequestId',
      processModifyTime: 'ProcessModifyTime',
      videoSTTModifyTime: 'VideoSTTModifyTime',
      processFailReason: 'ProcessFailReason',
      createTime: 'CreateTime',
      externalId: 'ExternalId',
      videoSTTFailReason: 'VideoSTTFailReason',
      videoUri: 'VideoUri',
      videoFrameTagsFailReason: 'VideoFrameTagsFailReason',
      videoFormat: 'VideoFormat',
      videoSTTStatus: 'VideoSTTStatus',
      videoFacesModifyTime: 'VideoFacesModifyTime',
      videoTags: 'VideoTags',
      videoDuration: 'VideoDuration',
      setId: 'SetId',
      videoTagsStatus: 'VideoTagsStatus',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      processStatus: 'string',
      videoWidth: 'number',
      sourceType: 'string',
      sourceUri: 'string',
      videoInfo: 'string',
      videoFrameTagsModifyTime: 'string',
      remarksA: 'string',
      videoFacesFailReason: 'string',
      remarksB: 'string',
      videoFacesStatus: 'string',
      remarksC: 'string',
      videoOCRModifyTime: 'string',
      remarksD: 'string',
      videoHeight: 'number',
      sourcePosition: 'string',
      videoOCRFailReason: 'string',
      videoFrameTagsStatus: 'string',
      videoTagsFailReason: 'string',
      videoTagsModifyTime: 'string',
      videoOCRStatus: 'string',
      videoFrames: 'number',
      requestId: 'string',
      processModifyTime: 'string',
      videoSTTModifyTime: 'string',
      processFailReason: 'string',
      createTime: 'string',
      externalId: 'string',
      videoSTTFailReason: 'string',
      videoUri: 'string',
      videoFrameTagsFailReason: 'string',
      videoFormat: 'string',
      videoSTTStatus: 'string',
      videoFacesModifyTime: 'string',
      videoTags: { 'type': 'array', 'itemType': GetVideoResponseBodyVideoTags },
      videoDuration: 'number',
      setId: 'string',
      videoTagsStatus: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskRequest extends $tea.Model {
  project?: string;
  taskType?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      taskType: 'TaskType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      taskType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskResponseBody extends $tea.Model {
  status?: string;
  progress?: number;
  notifyEndpoint?: string;
  parameters?: string;
  taskId?: string;
  endTime?: string;
  requestId?: string;
  taskType?: string;
  startTime?: string;
  notifyTopicName?: string;
  errorMessage?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      progress: 'Progress',
      notifyEndpoint: 'NotifyEndpoint',
      parameters: 'Parameters',
      taskId: 'TaskId',
      endTime: 'EndTime',
      requestId: 'RequestId',
      taskType: 'TaskType',
      startTime: 'StartTime',
      notifyTopicName: 'NotifyTopicName',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      progress: 'number',
      notifyEndpoint: 'string',
      parameters: 'string',
      taskId: 'string',
      endTime: 'string',
      requestId: 'string',
      taskType: 'string',
      startTime: 'string',
      notifyTopicName: 'string',
      errorMessage: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLRequest extends $tea.Model {
  project?: string;
  srcType?: string;
  fileID?: string;
  user?: string;
  permission?: string;
  file?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      srcType: 'SrcType',
      fileID: 'FileID',
      user: 'User',
      permission: 'Permission',
      file: 'File',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      srcType: 'string',
      fileID: 'string',
      user: 'string',
      permission: 'string',
      file: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLResponseBody extends $tea.Model {
  refreshToken?: string;
  requestId?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  webofficeURL?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      webofficeURL: 'WebofficeURL',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshToken: 'string',
      requestId: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      webofficeURL: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebofficeURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebofficeURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexImageRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUri?: string;
  remarksA?: string;
  remarksB?: string;
  sourceType?: string;
  sourceUri?: string;
  sourcePosition?: string;
  remarksC?: string;
  remarksD?: string;
  externalId?: string;
  realUid?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  remarksArrayA?: string;
  remarksArrayB?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUri: 'ImageUri',
      remarksA: 'RemarksA',
      remarksB: 'RemarksB',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      sourcePosition: 'SourcePosition',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      externalId: 'ExternalId',
      realUid: 'RealUid',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      remarksArrayA: 'RemarksArrayA',
      remarksArrayB: 'RemarksArrayB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUri: 'string',
      remarksA: 'string',
      remarksB: 'string',
      sourceType: 'string',
      sourceUri: 'string',
      sourcePosition: 'string',
      remarksC: 'string',
      remarksD: 'string',
      externalId: 'string',
      realUid: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      remarksArrayA: 'string',
      remarksArrayB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexImageResponseBody extends $tea.Model {
  remarksArrayB?: string;
  modifyTime?: string;
  remarksC?: string;
  remarksD?: string;
  requestId?: string;
  createTime?: string;
  externalId?: string;
  remarksArrayA?: string;
  remarksA?: string;
  imageUri?: string;
  setId?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      remarksArrayB: 'RemarksArrayB',
      modifyTime: 'ModifyTime',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      externalId: 'ExternalId',
      remarksArrayA: 'RemarksArrayA',
      remarksA: 'RemarksA',
      imageUri: 'ImageUri',
      setId: 'SetId',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remarksArrayB: 'string',
      modifyTime: 'string',
      remarksC: 'string',
      remarksD: 'string',
      requestId: 'string',
      createTime: 'string',
      externalId: 'string',
      remarksArrayA: 'string',
      remarksA: 'string',
      imageUri: 'string',
      setId: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IndexImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IndexImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexVideoRequest extends $tea.Model {
  project?: string;
  setId?: string;
  videoUri?: string;
  remarksA?: string;
  remarksB?: string;
  grabType?: string;
  startTime?: string;
  endTime?: string;
  saveType?: boolean;
  interval?: string;
  tgtUri?: string;
  remarksC?: string;
  remarksD?: string;
  externalId?: string;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      videoUri: 'VideoUri',
      remarksA: 'RemarksA',
      remarksB: 'RemarksB',
      grabType: 'GrabType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      saveType: 'SaveType',
      interval: 'Interval',
      tgtUri: 'TgtUri',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      externalId: 'ExternalId',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      videoUri: 'string',
      remarksA: 'string',
      remarksB: 'string',
      grabType: 'string',
      startTime: 'string',
      endTime: 'string',
      saveType: 'boolean',
      interval: 'string',
      tgtUri: 'string',
      remarksC: 'string',
      remarksD: 'string',
      externalId: 'string',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexVideoResponseBody extends $tea.Model {
  modifyTime?: string;
  requestId?: string;
  createTime?: string;
  externalId?: string;
  videoUri?: string;
  remarksA?: string;
  remarksB?: string;
  remarksC?: string;
  remarksD?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      externalId: 'ExternalId',
      videoUri: 'VideoUri',
      remarksA: 'RemarksA',
      remarksB: 'RemarksB',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      requestId: 'string',
      createTime: 'string',
      externalId: 'string',
      videoUri: 'string',
      remarksA: 'string',
      remarksB: 'string',
      remarksC: 'string',
      remarksD: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IndexVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IndexVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsRequest extends $tea.Model {
  project?: string;
  setId?: string;
  marker?: string;
  limit?: number;
  order?: string;
  orderBy?: string;
  remarksAQuery?: string;
  remarksBQuery?: string;
  remarksCQuery?: string;
  remarksDQuery?: string;
  remarksArrayAQuery?: string;
  remarksArrayBQuery?: string;
  externalId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      marker: 'Marker',
      limit: 'Limit',
      order: 'Order',
      orderBy: 'OrderBy',
      remarksAQuery: 'RemarksAQuery',
      remarksBQuery: 'RemarksBQuery',
      remarksCQuery: 'RemarksCQuery',
      remarksDQuery: 'RemarksDQuery',
      remarksArrayAQuery: 'RemarksArrayAQuery',
      remarksArrayBQuery: 'RemarksArrayBQuery',
      externalId: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      marker: 'string',
      limit: 'number',
      order: 'string',
      orderBy: 'string',
      remarksAQuery: 'string',
      remarksBQuery: 'string',
      remarksCQuery: 'string',
      remarksDQuery: 'string',
      remarksArrayAQuery: 'string',
      remarksArrayBQuery: 'string',
      externalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  nextMarker?: string;
  faceGroups?: ListFaceGroupsResponseBodyFaceGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextMarker: 'NextMarker',
      faceGroups: 'FaceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextMarker: 'string',
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

export class ListImagesRequest extends $tea.Model {
  project?: string;
  setId?: string;
  createTimeStart?: string;
  marker?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      createTimeStart: 'CreateTimeStart',
      marker: 'Marker',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      createTimeStart: 'string',
      marker: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  requestId?: string;
  images?: ListImagesResponseBodyImages[];
  nextMarker?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      images: 'Images',
      nextMarker: 'NextMarker',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      nextMarker: 'string',
      setId: 'string',
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

export class ListOfficeConversionTaskRequest extends $tea.Model {
  project?: string;
  marker?: string;
  maxKeys?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      marker: 'string',
      maxKeys: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskResponseBody extends $tea.Model {
  tasks?: ListOfficeConversionTaskResponseBodyTasks[];
  requestId?: string;
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      requestId: 'RequestId',
      nextMarker: 'NextMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': ListOfficeConversionTaskResponseBodyTasks },
      requestId: 'string',
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAPIsRequest extends $tea.Model {
  project?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAPIsResponseBody extends $tea.Model {
  project?: string;
  requestId?: string;
  APIs?: string[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
      APIs: 'APIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      requestId: 'string',
      APIs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAPIsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectAPIsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectAPIsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  marker?: string;
  maxKeys?: number;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxKeys: 'MaxKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxKeys: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  requestId?: string;
  projects?: ListProjectsResponseBodyProjects[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projects: 'Projects',
      nextMarker: 'NextMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetsRequest extends $tea.Model {
  project?: string;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetsResponseBody extends $tea.Model {
  requestId?: string;
  sets?: ListSetsResponseBodySets[];
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sets: 'Sets',
      nextMarker: 'NextMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sets: { 'type': 'array', 'itemType': ListSetsResponseBodySets },
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetTagsRequest extends $tea.Model {
  project?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetTagsResponseBody extends $tea.Model {
  requestId?: string;
  setId?: string;
  tags?: ListSetTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setId: 'SetId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setId: 'string',
      tags: { 'type': 'array', 'itemType': ListSetTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSetTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSetTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoAudiosRequest extends $tea.Model {
  project?: string;
  setId?: string;
  videoUri?: string;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      videoUri: 'VideoUri',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      videoUri: 'string',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoAudiosResponseBody extends $tea.Model {
  requestId?: string;
  audios?: ListVideoAudiosResponseBodyAudios[];
  videoUri?: string;
  nextMarker?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      audios: 'Audios',
      videoUri: 'VideoUri',
      nextMarker: 'NextMarker',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      audios: { 'type': 'array', 'itemType': ListVideoAudiosResponseBodyAudios },
      videoUri: 'string',
      nextMarker: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoAudiosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVideoAudiosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVideoAudiosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesRequest extends $tea.Model {
  project?: string;
  setId?: string;
  videoUri?: string;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      videoUri: 'VideoUri',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      videoUri: 'string',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBody extends $tea.Model {
  frames?: ListVideoFramesResponseBodyFrames[];
  requestId?: string;
  videoUri?: string;
  nextMarker?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      requestId: 'RequestId',
      videoUri: 'VideoUri',
      nextMarker: 'NextMarker',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': ListVideoFramesResponseBodyFrames },
      requestId: 'string',
      videoUri: 'string',
      nextMarker: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVideoFramesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVideoFramesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideosRequest extends $tea.Model {
  project?: string;
  setId?: string;
  createTimeStart?: string;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      createTimeStart: 'CreateTimeStart',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      createTimeStart: 'string',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideosResponseBody extends $tea.Model {
  requestId?: string;
  nextMarker?: string;
  setId?: string;
  videos?: ListVideosResponseBodyVideos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextMarker: 'NextMarker',
      setId: 'SetId',
      videos: 'Videos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextMarker: 'string',
      setId: 'string',
      videos: { 'type': 'array', 'itemType': ListVideosResponseBodyVideos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVideosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVideosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoTasksRequest extends $tea.Model {
  project?: string;
  marker?: string;
  maxKeys?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      marker: 'string',
      maxKeys: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoTasksResponseBody extends $tea.Model {
  tasks?: ListVideoTasksResponseBodyTasks[];
  requestId?: string;
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      requestId: 'RequestId',
      nextMarker: 'NextMarker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': ListVideoTasksResponseBodyTasks },
      requestId: 'string',
      nextMarker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVideoTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVideoTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenImmServiceRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenImmServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
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

export class OpenImmServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenImmServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenImmServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectRequest extends $tea.Model {
  project?: string;
  serviceRole?: string;
  CU?: number;
  type?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      serviceRole: 'ServiceRole',
      CU: 'CU',
      type: 'Type',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      serviceRole: 'string',
      CU: 'number',
      type: 'string',
      billingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectResponseBody extends $tea.Model {
  project?: string;
  modifyTime?: string;
  type?: string;
  CU?: number;
  serviceRole?: string;
  requestId?: string;
  endpoint?: string;
  createTime?: string;
  regionId?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      modifyTime: 'ModifyTime',
      type: 'Type',
      CU: 'CU',
      serviceRole: 'ServiceRole',
      requestId: 'RequestId',
      endpoint: 'Endpoint',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      modifyTime: 'string',
      type: 'string',
      CU: 'number',
      serviceRole: 'string',
      requestId: 'string',
      endpoint: 'string',
      createTime: 'string',
      regionId: 'string',
      billingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficeEditTokenRequest extends $tea.Model {
  project?: string;
  accessToken?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      accessToken: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficeEditTokenResponseBody extends $tea.Model {
  refreshToken?: string;
  requestId?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshToken: 'string',
      requestId: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficeEditTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshOfficeEditTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshOfficeEditTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficePreviewTokenRequest extends $tea.Model {
  project?: string;
  accessToken?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      accessToken: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficePreviewTokenResponseBody extends $tea.Model {
  refreshToken?: string;
  requestId?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshToken: 'string',
      requestId: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshOfficePreviewTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshOfficePreviewTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshOfficePreviewTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenRequest extends $tea.Model {
  project?: string;
  accessToken?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      accessToken: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenResponseBody extends $tea.Model {
  refreshToken?: string;
  requestId?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshToken: 'string',
      requestId: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshWebofficeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshWebofficeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceGroupRequest extends $tea.Model {
  project?: string;
  setId?: string;
  groupId?: string;
  groupName?: string;
  groupCoverFaceId?: string;
  remarksA?: string;
  remarksB?: string;
  remarksC?: string;
  remarksD?: string;
  remarksArrayA?: string;
  remarksArrayB?: string;
  externalId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupCoverFaceId: 'GroupCoverFaceId',
      remarksA: 'RemarksA',
      remarksB: 'RemarksB',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      remarksArrayA: 'RemarksArrayA',
      remarksArrayB: 'RemarksArrayB',
      externalId: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupCoverFaceId: 'string',
      remarksA: 'string',
      remarksB: 'string',
      remarksC: 'string',
      remarksD: 'string',
      remarksArrayA: 'string',
      remarksArrayB: 'string',
      externalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceGroupResponseBody extends $tea.Model {
  requestId?: string;
  setId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setId: 'SetId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFaceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFaceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageRequest extends $tea.Model {
  project?: string;
  setId?: string;
  imageUri?: string;
  remarksA?: string;
  remarksB?: string;
  sourceType?: string;
  sourceUri?: string;
  sourcePosition?: string;
  remarksC?: string;
  remarksD?: string;
  externalId?: string;
  remarksArrayA?: string;
  remarksArrayB?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      imageUri: 'ImageUri',
      remarksA: 'RemarksA',
      remarksB: 'RemarksB',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      sourcePosition: 'SourcePosition',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      externalId: 'ExternalId',
      remarksArrayA: 'RemarksArrayA',
      remarksArrayB: 'RemarksArrayB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      imageUri: 'string',
      remarksA: 'string',
      remarksB: 'string',
      sourceType: 'string',
      sourceUri: 'string',
      sourcePosition: 'string',
      remarksC: 'string',
      remarksD: 'string',
      externalId: 'string',
      remarksArrayA: 'string',
      remarksArrayB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponseBody extends $tea.Model {
  remarksArrayB?: string;
  modifyTime?: string;
  remarksC?: string;
  remarksD?: string;
  requestId?: string;
  createTime?: string;
  externalId?: string;
  remarksArrayA?: string;
  remarksA?: string;
  imageUri?: string;
  setId?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      remarksArrayB: 'RemarksArrayB',
      modifyTime: 'ModifyTime',
      remarksC: 'RemarksC',
      remarksD: 'RemarksD',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      externalId: 'ExternalId',
      remarksArrayA: 'RemarksArrayA',
      remarksA: 'RemarksA',
      imageUri: 'ImageUri',
      setId: 'SetId',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remarksArrayB: 'string',
      modifyTime: 'string',
      remarksC: 'string',
      remarksD: 'string',
      requestId: 'string',
      createTime: 'string',
      externalId: 'string',
      remarksArrayA: 'string',
      remarksA: 'string',
      imageUri: 'string',
      setId: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  project?: string;
  newCU?: number;
  newServiceRole?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      newCU: 'NewCU',
      newServiceRole: 'NewServiceRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      newCU: 'number',
      newServiceRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  project?: string;
  modifyTime?: string;
  type?: string;
  CU?: number;
  serviceRole?: string;
  requestId?: string;
  createTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      modifyTime: 'ModifyTime',
      type: 'Type',
      CU: 'CU',
      serviceRole: 'ServiceRole',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      modifyTime: 'string',
      type: 'string',
      CU: 'number',
      serviceRole: 'string',
      requestId: 'string',
      createTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetRequest extends $tea.Model {
  project?: string;
  setId?: string;
  setName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      setId: 'SetId',
      setName: 'SetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      setId: 'string',
      setName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetResponseBody extends $tea.Model {
  modifyTime?: string;
  requestId?: string;
  createTime?: string;
  setName?: string;
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      setName: 'SetName',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      requestId: 'string',
      createTime: 'string',
      setName: 'string',
      setId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBodyFaceAFaceAttributesFaceBoundary extends $tea.Model {
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

export class CompareImageFacesResponseBodyFaceAFaceAttributes extends $tea.Model {
  faceBoundary?: CompareImageFacesResponseBodyFaceAFaceAttributesFaceBoundary;
  static names(): { [key: string]: string } {
    return {
      faceBoundary: 'FaceBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoundary: CompareImageFacesResponseBodyFaceAFaceAttributesFaceBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBodyFaceA extends $tea.Model {
  faceId?: string;
  faceAttributes?: CompareImageFacesResponseBodyFaceAFaceAttributes;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      faceAttributes: 'FaceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      faceAttributes: CompareImageFacesResponseBodyFaceAFaceAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBodyFaceBFaceAttributesFaceBoundary extends $tea.Model {
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

export class CompareImageFacesResponseBodyFaceBFaceAttributes extends $tea.Model {
  faceBoundary?: CompareImageFacesResponseBodyFaceBFaceAttributesFaceBoundary;
  static names(): { [key: string]: string } {
    return {
      faceBoundary: 'FaceBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoundary: CompareImageFacesResponseBodyFaceBFaceAttributesFaceBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBodyFaceB extends $tea.Model {
  faceId?: string;
  faceAttributes?: CompareImageFacesResponseBodyFaceBFaceAttributes;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      faceAttributes: 'FaceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      faceAttributes: CompareImageFacesResponseBodyFaceBFaceAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  projectTypes?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectTypes: 'ProjectTypes',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectTypes: { 'type': 'array', 'itemType': 'string' },
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

export class DetectImageBodiesResponseBodyBodiesBodyBoundary extends $tea.Model {
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

export class DetectImageBodiesResponseBodyBodies extends $tea.Model {
  bodyConfidence?: number;
  bodyBoundary?: DetectImageBodiesResponseBodyBodiesBodyBoundary;
  static names(): { [key: string]: string } {
    return {
      bodyConfidence: 'BodyConfidence',
      bodyBoundary: 'BodyBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyConfidence: 'number',
      bodyBoundary: DetectImageBodiesResponseBodyBodiesBodyBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBodyFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class DetectImageFacesResponseBodyFacesFaceAttributesHeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBodyFacesFaceAttributes extends $tea.Model {
  glassesConfidence?: number;
  glasses?: string;
  mask?: string;
  beardConfidence?: number;
  maskConfidence?: number;
  faceBoundary?: DetectImageFacesResponseBodyFacesFaceAttributesFaceBoundary;
  headPose?: DetectImageFacesResponseBodyFacesFaceAttributesHeadPose;
  beard?: string;
  static names(): { [key: string]: string } {
    return {
      glassesConfidence: 'GlassesConfidence',
      glasses: 'Glasses',
      mask: 'Mask',
      beardConfidence: 'BeardConfidence',
      maskConfidence: 'MaskConfidence',
      faceBoundary: 'FaceBoundary',
      headPose: 'HeadPose',
      beard: 'Beard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glassesConfidence: 'number',
      glasses: 'string',
      mask: 'string',
      beardConfidence: 'number',
      maskConfidence: 'number',
      faceBoundary: DetectImageFacesResponseBodyFacesFaceAttributesFaceBoundary,
      headPose: DetectImageFacesResponseBodyFacesFaceAttributesHeadPose,
      beard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBodyFacesEmotionDetails extends $tea.Model {
  HAPPY?: number;
  CALM?: number;
  SURPRISED?: number;
  DISGUSTED?: number;
  ANGRY?: number;
  SAD?: number;
  SCARED?: number;
  static names(): { [key: string]: string } {
    return {
      HAPPY: 'HAPPY',
      CALM: 'CALM',
      SURPRISED: 'SURPRISED',
      DISGUSTED: 'DISGUSTED',
      ANGRY: 'ANGRY',
      SAD: 'SAD',
      SCARED: 'SCARED',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAPPY: 'number',
      CALM: 'number',
      SURPRISED: 'number',
      DISGUSTED: 'number',
      ANGRY: 'number',
      SAD: 'number',
      SCARED: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBodyFaces extends $tea.Model {
  attractiveConfidence?: number;
  gender?: string;
  genderConfidence?: number;
  faceId?: string;
  faceAttributes?: DetectImageFacesResponseBodyFacesFaceAttributes;
  faceQuality?: number;
  emotion?: string;
  age?: number;
  faceConfidence?: number;
  emotionConfidence?: number;
  attractive?: number;
  ageConfidence?: number;
  emotionDetails?: DetectImageFacesResponseBodyFacesEmotionDetails;
  static names(): { [key: string]: string } {
    return {
      attractiveConfidence: 'AttractiveConfidence',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      faceId: 'FaceId',
      faceAttributes: 'FaceAttributes',
      faceQuality: 'FaceQuality',
      emotion: 'Emotion',
      age: 'Age',
      faceConfidence: 'FaceConfidence',
      emotionConfidence: 'EmotionConfidence',
      attractive: 'Attractive',
      ageConfidence: 'AgeConfidence',
      emotionDetails: 'EmotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attractiveConfidence: 'number',
      gender: 'string',
      genderConfidence: 'number',
      faceId: 'string',
      faceAttributes: DetectImageFacesResponseBodyFacesFaceAttributes,
      faceQuality: 'number',
      emotion: 'string',
      age: 'number',
      faceConfidence: 'number',
      emotionConfidence: 'number',
      attractive: 'number',
      ageConfidence: 'number',
      emotionDetails: DetectImageFacesResponseBodyFacesEmotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLogosResponseBodyLogosLogoBoundary extends $tea.Model {
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

export class DetectImageLogosResponseBodyLogos extends $tea.Model {
  logoConfidence?: number;
  logoBoundary?: DetectImageLogosResponseBodyLogosLogoBoundary;
  logoName?: string;
  static names(): { [key: string]: string } {
    return {
      logoConfidence: 'LogoConfidence',
      logoBoundary: 'LogoBoundary',
      logoName: 'LogoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoConfidence: 'number',
      logoBoundary: DetectImageLogosResponseBodyLogosLogoBoundary,
      logoName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageQRCodesResponseBodyQRCodesQRCodeBoundary extends $tea.Model {
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

export class DetectImageQRCodesResponseBodyQRCodes extends $tea.Model {
  content?: string;
  QRCodeBoundary?: DetectImageQRCodesResponseBodyQRCodesQRCodeBoundary;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      QRCodeBoundary: 'QRCodeBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      QRCodeBoundary: DetectImageQRCodesResponseBodyQRCodesQRCodeBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageTagsResponseBodyTags extends $tea.Model {
  parentTagEnName?: string;
  tagName?: string;
  tagConfidence?: number;
  tagEnName?: string;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      parentTagEnName: 'ParentTagEnName',
      tagName: 'TagName',
      tagConfidence: 'TagConfidence',
      tagEnName: 'TagEnName',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentTagEnName: 'string',
      tagName: 'string',
      tagConfidence: 'number',
      tagEnName: 'string',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponseBodySuccessDetailsQRCodesQRCodesRectangle extends $tea.Model {
  top?: string;
  width?: string;
  height?: string;
  left?: string;
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
      top: 'string',
      width: 'string',
      height: 'string',
      left: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponseBodySuccessDetailsQRCodes extends $tea.Model {
  QRCodesRectangle?: DetectQRCodesResponseBodySuccessDetailsQRCodesQRCodesRectangle;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      QRCodesRectangle: 'QRCodesRectangle',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QRCodesRectangle: DetectQRCodesResponseBodySuccessDetailsQRCodesQRCodesRectangle,
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponseBodySuccessDetails extends $tea.Model {
  srcUri?: string;
  QRCodes?: DetectQRCodesResponseBodySuccessDetailsQRCodes[];
  static names(): { [key: string]: string } {
    return {
      srcUri: 'SrcUri',
      QRCodes: 'QRCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcUri: 'string',
      QRCodes: { 'type': 'array', 'itemType': DetectQRCodesResponseBodySuccessDetailsQRCodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectQRCodesResponseBodyFailDetails extends $tea.Model {
  errorMessage?: string;
  srcUri?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      srcUri: 'SrcUri',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      srcUri: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesTags extends $tea.Model {
  tagConfidence?: number;
  tagName?: string;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagConfidence: 'TagConfidence',
      tagName: 'TagName',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagConfidence: 'number',
      tagName: 'string',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesOCROCRBoundary extends $tea.Model {
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

export class FindImagesResponseBodyImagesOCR extends $tea.Model {
  OCRConfidence?: number;
  OCRContents?: string;
  OCRBoundary?: FindImagesResponseBodyImagesOCROCRBoundary;
  static names(): { [key: string]: string } {
    return {
      OCRConfidence: 'OCRConfidence',
      OCRContents: 'OCRContents',
      OCRBoundary: 'OCRBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OCRConfidence: 'number',
      OCRContents: 'string',
      OCRBoundary: FindImagesResponseBodyImagesOCROCRBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesAddress extends $tea.Model {
  township?: string;
  district?: string;
  addressLine?: string;
  country?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      township: 'Township',
      district: 'District',
      addressLine: 'AddressLine',
      country: 'Country',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      township: 'string',
      district: 'string',
      addressLine: 'string',
      country: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class FindImagesResponseBodyImagesFacesFaceAttributesHeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesFacesFaceAttributes extends $tea.Model {
  glassesConfidence?: number;
  glasses?: string;
  mask?: string;
  beardConfidence?: number;
  maskConfidence?: number;
  faceBoundary?: FindImagesResponseBodyImagesFacesFaceAttributesFaceBoundary;
  headPose?: FindImagesResponseBodyImagesFacesFaceAttributesHeadPose;
  beard?: string;
  static names(): { [key: string]: string } {
    return {
      glassesConfidence: 'GlassesConfidence',
      glasses: 'Glasses',
      mask: 'Mask',
      beardConfidence: 'BeardConfidence',
      maskConfidence: 'MaskConfidence',
      faceBoundary: 'FaceBoundary',
      headPose: 'HeadPose',
      beard: 'Beard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glassesConfidence: 'number',
      glasses: 'string',
      mask: 'string',
      beardConfidence: 'number',
      maskConfidence: 'number',
      faceBoundary: FindImagesResponseBodyImagesFacesFaceAttributesFaceBoundary,
      headPose: FindImagesResponseBodyImagesFacesFaceAttributesHeadPose,
      beard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesFacesEmotionDetails extends $tea.Model {
  HAPPY?: number;
  SURPRISED?: number;
  CALM?: number;
  DISGUSTED?: number;
  ANGRY?: number;
  SAD?: number;
  SCARED?: number;
  static names(): { [key: string]: string } {
    return {
      HAPPY: 'HAPPY',
      SURPRISED: 'SURPRISED',
      CALM: 'CALM',
      DISGUSTED: 'DISGUSTED',
      ANGRY: 'ANGRY',
      SAD: 'SAD',
      SCARED: 'SCARED',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAPPY: 'number',
      SURPRISED: 'number',
      CALM: 'number',
      DISGUSTED: 'number',
      ANGRY: 'number',
      SAD: 'number',
      SCARED: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesFaces extends $tea.Model {
  gender?: string;
  faceId?: string;
  genderConfidence?: number;
  faceAttributes?: FindImagesResponseBodyImagesFacesFaceAttributes;
  faceQuality?: number;
  emotion?: string;
  age?: number;
  faceConfidence?: number;
  emotionConfidence?: number;
  attractive?: number;
  groupId?: string;
  emotionDetails?: FindImagesResponseBodyImagesFacesEmotionDetails;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceId: 'FaceId',
      genderConfidence: 'GenderConfidence',
      faceAttributes: 'FaceAttributes',
      faceQuality: 'FaceQuality',
      emotion: 'Emotion',
      age: 'Age',
      faceConfidence: 'FaceConfidence',
      emotionConfidence: 'EmotionConfidence',
      attractive: 'Attractive',
      groupId: 'GroupId',
      emotionDetails: 'EmotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      faceId: 'string',
      genderConfidence: 'number',
      faceAttributes: FindImagesResponseBodyImagesFacesFaceAttributes,
      faceQuality: 'number',
      emotion: 'string',
      age: 'number',
      faceConfidence: 'number',
      emotionConfidence: 'number',
      attractive: 'number',
      groupId: 'string',
      emotionDetails: FindImagesResponseBodyImagesFacesEmotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesImageQuality extends $tea.Model {
  overallScore?: number;
  color?: number;
  colorScore?: number;
  contrastScore?: number;
  contrast?: number;
  exposureScore?: number;
  clarityScore?: number;
  clarity?: number;
  exposure?: number;
  compositionScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'OverallScore',
      color: 'Color',
      colorScore: 'ColorScore',
      contrastScore: 'ContrastScore',
      contrast: 'Contrast',
      exposureScore: 'ExposureScore',
      clarityScore: 'ClarityScore',
      clarity: 'Clarity',
      exposure: 'Exposure',
      compositionScore: 'CompositionScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
      color: 'number',
      colorScore: 'number',
      contrastScore: 'number',
      contrast: 'number',
      exposureScore: 'number',
      clarityScore: 'number',
      clarity: 'number',
      exposure: 'number',
      compositionScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImagesCroppingSuggestionCroppingBoundary extends $tea.Model {
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

export class FindImagesResponseBodyImagesCroppingSuggestion extends $tea.Model {
  score?: number;
  croppingBoundary?: FindImagesResponseBodyImagesCroppingSuggestionCroppingBoundary;
  aspectRatio?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      croppingBoundary: 'CroppingBoundary',
      aspectRatio: 'AspectRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      croppingBoundary: FindImagesResponseBodyImagesCroppingSuggestionCroppingBoundary,
      aspectRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindImagesResponseBodyImages extends $tea.Model {
  croppingSuggestionStatus?: string;
  imageQualityModifyTime?: string;
  tagsFailReason?: string;
  remarksC?: string;
  createTime?: string;
  sourceType?: string;
  facesFailReason?: string;
  tags?: FindImagesResponseBodyImagesTags[];
  facesModifyTime?: string;
  imageTime?: string;
  OCRModifyTime?: string;
  addressModifyTime?: string;
  OCR?: FindImagesResponseBodyImagesOCR[];
  imageQualityFailReason?: string;
  facesStatus?: string;
  imageHeight?: number;
  remarksArrayA?: string;
  address?: FindImagesResponseBodyImagesAddress;
  externalId?: string;
  sourceUri?: string;
  modifyTime?: string;
  fileSize?: number;
  sourcePosition?: string;
  faces?: FindImagesResponseBodyImagesFaces[];
  imageQualityStatus?: string;
  OCRFailReason?: string;
  addressFailReason?: string;
  imageQuality?: FindImagesResponseBodyImagesImageQuality;
  croppingSuggestionModifyTime?: string;
  imageFormat?: string;
  imageWidth?: number;
  remarksArrayB?: string;
  croppingSuggestion?: FindImagesResponseBodyImagesCroppingSuggestion[];
  orientation?: string;
  remarksD?: string;
  tagsStatus?: string;
  croppingSuggestionFailReason?: string;
  remarksA?: string;
  imageUri?: string;
  tagsModifyTime?: string;
  OCRStatus?: string;
  addressStatus?: string;
  exif?: string;
  location?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      croppingSuggestionStatus: 'CroppingSuggestionStatus',
      imageQualityModifyTime: 'ImageQualityModifyTime',
      tagsFailReason: 'TagsFailReason',
      remarksC: 'RemarksC',
      createTime: 'CreateTime',
      sourceType: 'SourceType',
      facesFailReason: 'FacesFailReason',
      tags: 'Tags',
      facesModifyTime: 'FacesModifyTime',
      imageTime: 'ImageTime',
      OCRModifyTime: 'OCRModifyTime',
      addressModifyTime: 'AddressModifyTime',
      OCR: 'OCR',
      imageQualityFailReason: 'ImageQualityFailReason',
      facesStatus: 'FacesStatus',
      imageHeight: 'ImageHeight',
      remarksArrayA: 'RemarksArrayA',
      address: 'Address',
      externalId: 'ExternalId',
      sourceUri: 'SourceUri',
      modifyTime: 'ModifyTime',
      fileSize: 'FileSize',
      sourcePosition: 'SourcePosition',
      faces: 'Faces',
      imageQualityStatus: 'ImageQualityStatus',
      OCRFailReason: 'OCRFailReason',
      addressFailReason: 'AddressFailReason',
      imageQuality: 'ImageQuality',
      croppingSuggestionModifyTime: 'CroppingSuggestionModifyTime',
      imageFormat: 'ImageFormat',
      imageWidth: 'ImageWidth',
      remarksArrayB: 'RemarksArrayB',
      croppingSuggestion: 'CroppingSuggestion',
      orientation: 'Orientation',
      remarksD: 'RemarksD',
      tagsStatus: 'TagsStatus',
      croppingSuggestionFailReason: 'CroppingSuggestionFailReason',
      remarksA: 'RemarksA',
      imageUri: 'ImageUri',
      tagsModifyTime: 'TagsModifyTime',
      OCRStatus: 'OCRStatus',
      addressStatus: 'AddressStatus',
      exif: 'Exif',
      location: 'Location',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppingSuggestionStatus: 'string',
      imageQualityModifyTime: 'string',
      tagsFailReason: 'string',
      remarksC: 'string',
      createTime: 'string',
      sourceType: 'string',
      facesFailReason: 'string',
      tags: { 'type': 'array', 'itemType': FindImagesResponseBodyImagesTags },
      facesModifyTime: 'string',
      imageTime: 'string',
      OCRModifyTime: 'string',
      addressModifyTime: 'string',
      OCR: { 'type': 'array', 'itemType': FindImagesResponseBodyImagesOCR },
      imageQualityFailReason: 'string',
      facesStatus: 'string',
      imageHeight: 'number',
      remarksArrayA: 'string',
      address: FindImagesResponseBodyImagesAddress,
      externalId: 'string',
      sourceUri: 'string',
      modifyTime: 'string',
      fileSize: 'number',
      sourcePosition: 'string',
      faces: { 'type': 'array', 'itemType': FindImagesResponseBodyImagesFaces },
      imageQualityStatus: 'string',
      OCRFailReason: 'string',
      addressFailReason: 'string',
      imageQuality: FindImagesResponseBodyImagesImageQuality,
      croppingSuggestionModifyTime: 'string',
      imageFormat: 'string',
      imageWidth: 'number',
      remarksArrayB: 'string',
      croppingSuggestion: { 'type': 'array', 'itemType': FindImagesResponseBodyImagesCroppingSuggestion },
      orientation: 'string',
      remarksD: 'string',
      tagsStatus: 'string',
      croppingSuggestionFailReason: 'string',
      remarksA: 'string',
      imageUri: 'string',
      tagsModifyTime: 'string',
      OCRStatus: 'string',
      addressStatus: 'string',
      exif: 'string',
      location: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponseBodyFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class FindSimilarFacesResponseBodyFacesFaceAttributes extends $tea.Model {
  faceBoundary?: FindSimilarFacesResponseBodyFacesFaceAttributesFaceBoundary;
  static names(): { [key: string]: string } {
    return {
      faceBoundary: 'FaceBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoundary: FindSimilarFacesResponseBodyFacesFaceAttributesFaceBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributes extends $tea.Model {
  faceBoundary?: FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributesFaceBoundary;
  static names(): { [key: string]: string } {
    return {
      faceBoundary: 'FaceBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoundary: FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributesFaceBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponseBodyFacesSimilarFaces extends $tea.Model {
  faceId?: string;
  imageUri?: string;
  externalId?: string;
  faceAttributes?: FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributes;
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageUri: 'ImageUri',
      externalId: 'ExternalId',
      faceAttributes: 'FaceAttributes',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageUri: 'string',
      externalId: 'string',
      faceAttributes: FindSimilarFacesResponseBodyFacesSimilarFacesFaceAttributes,
      similarity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindSimilarFacesResponseBodyFaces extends $tea.Model {
  faceId?: string;
  imageUri?: string;
  externalId?: string;
  faceAttributes?: FindSimilarFacesResponseBodyFacesFaceAttributes;
  similarity?: number;
  similarFaces?: FindSimilarFacesResponseBodyFacesSimilarFaces[];
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageUri: 'ImageUri',
      externalId: 'ExternalId',
      faceAttributes: 'FaceAttributes',
      similarity: 'Similarity',
      similarFaces: 'SimilarFaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageUri: 'string',
      externalId: 'string',
      faceAttributes: FindSimilarFacesResponseBodyFacesFaceAttributes,
      similarity: 'number',
      similarFaces: { 'type': 'array', 'itemType': FindSimilarFacesResponseBodyFacesSimilarFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageQuality extends $tea.Model {
  overallScore?: number;
  color?: number;
  colorScore?: number;
  contrastScore?: number;
  contrast?: number;
  exposureScore?: number;
  clarityScore?: number;
  clarity?: number;
  exposure?: number;
  compositionScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'OverallScore',
      color: 'Color',
      colorScore: 'ColorScore',
      contrastScore: 'ContrastScore',
      contrast: 'Contrast',
      exposureScore: 'ExposureScore',
      clarityScore: 'ClarityScore',
      clarity: 'Clarity',
      exposure: 'Exposure',
      compositionScore: 'CompositionScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
      color: 'number',
      colorScore: 'number',
      contrastScore: 'number',
      contrast: 'number',
      exposureScore: 'number',
      clarityScore: 'number',
      clarity: 'number',
      exposure: 'number',
      compositionScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyAddress extends $tea.Model {
  township?: string;
  district?: string;
  addressLine?: string;
  country?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      township: 'Township',
      district: 'District',
      addressLine: 'AddressLine',
      country: 'Country',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      township: 'string',
      district: 'string',
      addressLine: 'string',
      country: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyTags extends $tea.Model {
  tagName?: string;
  tagConfidence?: number;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagConfidence: 'TagConfidence',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagConfidence: 'number',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class GetImageResponseBodyFacesFaceAttributesHeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyFacesFaceAttributes extends $tea.Model {
  glassesConfidence?: number;
  glasses?: string;
  mask?: string;
  beardConfidence?: number;
  maskConfidence?: number;
  faceBoundary?: GetImageResponseBodyFacesFaceAttributesFaceBoundary;
  headPose?: GetImageResponseBodyFacesFaceAttributesHeadPose;
  beard?: string;
  static names(): { [key: string]: string } {
    return {
      glassesConfidence: 'GlassesConfidence',
      glasses: 'Glasses',
      mask: 'Mask',
      beardConfidence: 'BeardConfidence',
      maskConfidence: 'MaskConfidence',
      faceBoundary: 'FaceBoundary',
      headPose: 'HeadPose',
      beard: 'Beard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glassesConfidence: 'number',
      glasses: 'string',
      mask: 'string',
      beardConfidence: 'number',
      maskConfidence: 'number',
      faceBoundary: GetImageResponseBodyFacesFaceAttributesFaceBoundary,
      headPose: GetImageResponseBodyFacesFaceAttributesHeadPose,
      beard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyFacesEmotionDetails extends $tea.Model {
  HAPPY?: number;
  CALM?: number;
  SURPRISED?: number;
  DISGUSTED?: number;
  ANGRY?: number;
  SAD?: number;
  SCARED?: number;
  static names(): { [key: string]: string } {
    return {
      HAPPY: 'HAPPY',
      CALM: 'CALM',
      SURPRISED: 'SURPRISED',
      DISGUSTED: 'DISGUSTED',
      ANGRY: 'ANGRY',
      SAD: 'SAD',
      SCARED: 'SCARED',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAPPY: 'number',
      CALM: 'number',
      SURPRISED: 'number',
      DISGUSTED: 'number',
      ANGRY: 'number',
      SAD: 'number',
      SCARED: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyFaces extends $tea.Model {
  gender?: string;
  genderConfidence?: number;
  faceId?: string;
  faceAttributes?: GetImageResponseBodyFacesFaceAttributes;
  faceQuality?: number;
  emotion?: string;
  age?: string;
  faceConfidence?: number;
  emotionConfidence?: number;
  attractive?: number;
  groupId?: string;
  emotionDetails?: GetImageResponseBodyFacesEmotionDetails;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      faceId: 'FaceId',
      faceAttributes: 'FaceAttributes',
      faceQuality: 'FaceQuality',
      emotion: 'Emotion',
      age: 'Age',
      faceConfidence: 'FaceConfidence',
      emotionConfidence: 'EmotionConfidence',
      attractive: 'Attractive',
      groupId: 'GroupId',
      emotionDetails: 'EmotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      genderConfidence: 'number',
      faceId: 'string',
      faceAttributes: GetImageResponseBodyFacesFaceAttributes,
      faceQuality: 'number',
      emotion: 'string',
      age: 'string',
      faceConfidence: 'number',
      emotionConfidence: 'number',
      attractive: 'number',
      groupId: 'string',
      emotionDetails: GetImageResponseBodyFacesEmotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyCroppingSuggestionCroppingBoundary extends $tea.Model {
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

export class GetImageResponseBodyCroppingSuggestion extends $tea.Model {
  score?: number;
  croppingBoundary?: GetImageResponseBodyCroppingSuggestionCroppingBoundary;
  aspectRatio?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      croppingBoundary: 'CroppingBoundary',
      aspectRatio: 'AspectRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      croppingBoundary: GetImageResponseBodyCroppingSuggestionCroppingBoundary,
      aspectRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyOCROCRBoundary extends $tea.Model {
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

export class GetImageResponseBodyOCR extends $tea.Model {
  OCRConfidence?: number;
  OCRContents?: string;
  OCRBoundary?: GetImageResponseBodyOCROCRBoundary;
  static names(): { [key: string]: string } {
    return {
      OCRConfidence: 'OCRConfidence',
      OCRContents: 'OCRContents',
      OCRBoundary: 'OCRBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OCRConfidence: 'number',
      OCRContents: 'string',
      OCRBoundary: GetImageResponseBodyOCROCRBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageCroppingSuggestionsResponseBodyCroppingSuggestionsCroppingBoundary extends $tea.Model {
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

export class GetImageCroppingSuggestionsResponseBodyCroppingSuggestions extends $tea.Model {
  score?: number;
  croppingBoundary?: GetImageCroppingSuggestionsResponseBodyCroppingSuggestionsCroppingBoundary;
  aspectRatio?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      croppingBoundary: 'CroppingBoundary',
      aspectRatio: 'AspectRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      croppingBoundary: GetImageCroppingSuggestionsResponseBodyCroppingSuggestionsCroppingBoundary,
      aspectRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageQualityResponseBodyImageQuality extends $tea.Model {
  overallScore?: number;
  color?: number;
  colorScore?: number;
  contrastScore?: number;
  contrast?: number;
  exposureScore?: number;
  clarityScore?: number;
  clarity?: number;
  exposure?: number;
  compositionScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'OverallScore',
      color: 'Color',
      colorScore: 'ColorScore',
      contrastScore: 'ContrastScore',
      contrast: 'Contrast',
      exposureScore: 'ExposureScore',
      clarityScore: 'ClarityScore',
      clarity: 'Clarity',
      exposure: 'Exposure',
      compositionScore: 'CompositionScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
      color: 'number',
      colorScore: 'number',
      contrastScore: 'number',
      contrast: 'number',
      exposureScore: 'number',
      clarityScore: 'number',
      clarity: 'number',
      exposure: 'number',
      compositionScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaFormatTag extends $tea.Model {
  creationTime?: string;
  album?: string;
  albumArtist?: string;
  performer?: string;
  composer?: string;
  artist?: string;
  title?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      performer: 'Performer',
      composer: 'Composer',
      artist: 'Artist',
      title: 'Title',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      album: 'string',
      albumArtist: 'string',
      performer: 'string',
      composer: 'string',
      artist: 'string',
      title: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaFormatAddress extends $tea.Model {
  township?: string;
  district?: string;
  addressLine?: string;
  country?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      township: 'Township',
      district: 'District',
      addressLine: 'AddressLine',
      country: 'Country',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      township: 'string',
      district: 'string',
      addressLine: 'string',
      country: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaFormat extends $tea.Model {
  creationTime?: string;
  numberPrograms?: number;
  numberStreams?: number;
  tag?: GetMediaMetaResponseBodyMediaMetaMediaFormatTag;
  bitrate?: string;
  startTime?: string;
  size?: string;
  address?: GetMediaMetaResponseBodyMediaMetaMediaFormatAddress;
  formatLongName?: string;
  duration?: string;
  formatName?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      numberPrograms: 'NumberPrograms',
      numberStreams: 'NumberStreams',
      tag: 'Tag',
      bitrate: 'Bitrate',
      startTime: 'StartTime',
      size: 'Size',
      address: 'Address',
      formatLongName: 'FormatLongName',
      duration: 'Duration',
      formatName: 'FormatName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      numberPrograms: 'number',
      numberStreams: 'number',
      tag: GetMediaMetaResponseBodyMediaMetaMediaFormatTag,
      bitrate: 'string',
      startTime: 'string',
      size: 'string',
      address: GetMediaMetaResponseBodyMediaMetaMediaFormatAddress,
      formatLongName: 'string',
      duration: 'string',
      formatName: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaStreamsVideoStreams extends $tea.Model {
  index?: number;
  codecLongName?: string;
  height?: number;
  sampleAspectRatio?: string;
  averageFrameRate?: string;
  bitrate?: string;
  rotate?: string;
  codecTagString?: string;
  language?: string;
  hasBFrames?: number;
  frameRrate?: string;
  profile?: string;
  startTime?: string;
  frames?: string;
  codecName?: string;
  width?: number;
  duration?: string;
  displayAspectRatio?: string;
  codecTag?: string;
  codecTimeBase?: string;
  timeBase?: string;
  level?: number;
  pixelFormat?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      codecLongName: 'CodecLongName',
      height: 'Height',
      sampleAspectRatio: 'SampleAspectRatio',
      averageFrameRate: 'AverageFrameRate',
      bitrate: 'Bitrate',
      rotate: 'Rotate',
      codecTagString: 'CodecTagString',
      language: 'Language',
      hasBFrames: 'HasBFrames',
      frameRrate: 'FrameRrate',
      profile: 'Profile',
      startTime: 'StartTime',
      frames: 'Frames',
      codecName: 'CodecName',
      width: 'Width',
      duration: 'Duration',
      displayAspectRatio: 'DisplayAspectRatio',
      codecTag: 'CodecTag',
      codecTimeBase: 'CodecTimeBase',
      timeBase: 'TimeBase',
      level: 'Level',
      pixelFormat: 'PixelFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      codecLongName: 'string',
      height: 'number',
      sampleAspectRatio: 'string',
      averageFrameRate: 'string',
      bitrate: 'string',
      rotate: 'string',
      codecTagString: 'string',
      language: 'string',
      hasBFrames: 'number',
      frameRrate: 'string',
      profile: 'string',
      startTime: 'string',
      frames: 'string',
      codecName: 'string',
      width: 'number',
      duration: 'string',
      displayAspectRatio: 'string',
      codecTag: 'string',
      codecTimeBase: 'string',
      timeBase: 'string',
      level: 'number',
      pixelFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaStreamsAudioStreams extends $tea.Model {
  index?: number;
  sampleRate?: string;
  channelLayout?: string;
  codecLongName?: string;
  channels?: number;
  bitrate?: string;
  codecTagString?: string;
  language?: string;
  startTime?: string;
  sampleFormat?: string;
  frames?: string;
  codecName?: string;
  duration?: string;
  codecTag?: string;
  codecTimeBase?: string;
  timeBase?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      sampleRate: 'SampleRate',
      channelLayout: 'ChannelLayout',
      codecLongName: 'CodecLongName',
      channels: 'Channels',
      bitrate: 'Bitrate',
      codecTagString: 'CodecTagString',
      language: 'Language',
      startTime: 'StartTime',
      sampleFormat: 'SampleFormat',
      frames: 'Frames',
      codecName: 'CodecName',
      duration: 'Duration',
      codecTag: 'CodecTag',
      codecTimeBase: 'CodecTimeBase',
      timeBase: 'TimeBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      sampleRate: 'string',
      channelLayout: 'string',
      codecLongName: 'string',
      channels: 'number',
      bitrate: 'string',
      codecTagString: 'string',
      language: 'string',
      startTime: 'string',
      sampleFormat: 'string',
      frames: 'string',
      codecName: 'string',
      duration: 'string',
      codecTag: 'string',
      codecTimeBase: 'string',
      timeBase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaStreamsSubtitleStreams extends $tea.Model {
  index?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMetaMediaStreams extends $tea.Model {
  videoStreams?: GetMediaMetaResponseBodyMediaMetaMediaStreamsVideoStreams[];
  audioStreams?: GetMediaMetaResponseBodyMediaMetaMediaStreamsAudioStreams[];
  subtitleStreams?: GetMediaMetaResponseBodyMediaMetaMediaStreamsSubtitleStreams[];
  static names(): { [key: string]: string } {
    return {
      videoStreams: 'VideoStreams',
      audioStreams: 'AudioStreams',
      subtitleStreams: 'SubtitleStreams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStreams: { 'type': 'array', 'itemType': GetMediaMetaResponseBodyMediaMetaMediaStreamsVideoStreams },
      audioStreams: { 'type': 'array', 'itemType': GetMediaMetaResponseBodyMediaMetaMediaStreamsAudioStreams },
      subtitleStreams: { 'type': 'array', 'itemType': GetMediaMetaResponseBodyMediaMetaMediaStreamsSubtitleStreams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaMetaResponseBodyMediaMeta extends $tea.Model {
  mediaFormat?: GetMediaMetaResponseBodyMediaMetaMediaFormat;
  mediaStreams?: GetMediaMetaResponseBodyMediaMetaMediaStreams;
  static names(): { [key: string]: string } {
    return {
      mediaFormat: 'MediaFormat',
      mediaStreams: 'MediaStreams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaFormat: GetMediaMetaResponseBodyMediaMetaMediaFormat,
      mediaStreams: GetMediaMetaResponseBodyMediaMetaMediaStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskResponseBodyFailDetail extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoResponseBodyVideoTags extends $tea.Model {
  tagName?: string;
  tagConfidence?: number;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagConfidence: 'TagConfidence',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagConfidence: 'number',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponseBodyFaceGroupsGroupCoverFaceFaceBoundary extends $tea.Model {
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

export class ListFaceGroupsResponseBodyFaceGroupsGroupCoverFace extends $tea.Model {
  imageUri?: string;
  faceId?: string;
  faceBoundary?: ListFaceGroupsResponseBodyFaceGroupsGroupCoverFaceFaceBoundary;
  static names(): { [key: string]: string } {
    return {
      imageUri: 'ImageUri',
      faceId: 'FaceId',
      faceBoundary: 'FaceBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUri: 'string',
      faceId: 'string',
      faceBoundary: ListFaceGroupsResponseBodyFaceGroupsGroupCoverFaceFaceBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceGroupsResponseBodyFaceGroups extends $tea.Model {
  gender?: string;
  createTime?: string;
  remarksC?: string;
  groupCoverFace?: ListFaceGroupsResponseBodyFaceGroupsGroupCoverFace;
  faceCount?: number;
  remarksArrayB?: string;
  remarksD?: string;
  maxAge?: number;
  groupId?: string;
  groupName?: string;
  remarksA?: string;
  averageAge?: number;
  remarksArrayA?: string;
  minAge?: number;
  imageCount?: number;
  externalId?: string;
  remarksB?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      createTime: 'CreateTime',
      remarksC: 'RemarksC',
      groupCoverFace: 'GroupCoverFace',
      faceCount: 'FaceCount',
      remarksArrayB: 'RemarksArrayB',
      remarksD: 'RemarksD',
      maxAge: 'MaxAge',
      groupId: 'GroupId',
      groupName: 'GroupName',
      remarksA: 'RemarksA',
      averageAge: 'AverageAge',
      remarksArrayA: 'RemarksArrayA',
      minAge: 'MinAge',
      imageCount: 'ImageCount',
      externalId: 'ExternalId',
      remarksB: 'RemarksB',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      createTime: 'string',
      remarksC: 'string',
      groupCoverFace: ListFaceGroupsResponseBodyFaceGroupsGroupCoverFace,
      faceCount: 'number',
      remarksArrayB: 'string',
      remarksD: 'string',
      maxAge: 'number',
      groupId: 'string',
      groupName: 'string',
      remarksA: 'string',
      averageAge: 'number',
      remarksArrayA: 'string',
      minAge: 'number',
      imageCount: 'number',
      externalId: 'string',
      remarksB: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesTags extends $tea.Model {
  tagConfidence?: number;
  tagName?: string;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagConfidence: 'TagConfidence',
      tagName: 'TagName',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagConfidence: 'number',
      tagName: 'string',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesOCROCRBoundary extends $tea.Model {
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

export class ListImagesResponseBodyImagesOCR extends $tea.Model {
  OCRConfidence?: number;
  OCRContents?: string;
  OCRBoundary?: ListImagesResponseBodyImagesOCROCRBoundary;
  static names(): { [key: string]: string } {
    return {
      OCRConfidence: 'OCRConfidence',
      OCRContents: 'OCRContents',
      OCRBoundary: 'OCRBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OCRConfidence: 'number',
      OCRContents: 'string',
      OCRBoundary: ListImagesResponseBodyImagesOCROCRBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesAddress extends $tea.Model {
  township?: string;
  district?: string;
  addressLine?: string;
  country?: string;
  city?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      township: 'Township',
      district: 'District',
      addressLine: 'AddressLine',
      country: 'Country',
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      township: 'string',
      district: 'string',
      addressLine: 'string',
      country: 'string',
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class ListImagesResponseBodyImagesFacesFaceAttributesHeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesFacesFaceAttributes extends $tea.Model {
  glassesConfidence?: number;
  glasses?: string;
  mask?: string;
  beardConfidence?: number;
  maskConfidence?: number;
  faceBoundary?: ListImagesResponseBodyImagesFacesFaceAttributesFaceBoundary;
  headPose?: ListImagesResponseBodyImagesFacesFaceAttributesHeadPose;
  beard?: string;
  static names(): { [key: string]: string } {
    return {
      glassesConfidence: 'GlassesConfidence',
      glasses: 'Glasses',
      mask: 'Mask',
      beardConfidence: 'BeardConfidence',
      maskConfidence: 'MaskConfidence',
      faceBoundary: 'FaceBoundary',
      headPose: 'HeadPose',
      beard: 'Beard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glassesConfidence: 'number',
      glasses: 'string',
      mask: 'string',
      beardConfidence: 'number',
      maskConfidence: 'number',
      faceBoundary: ListImagesResponseBodyImagesFacesFaceAttributesFaceBoundary,
      headPose: ListImagesResponseBodyImagesFacesFaceAttributesHeadPose,
      beard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesFacesEmotionDetails extends $tea.Model {
  HAPPY?: number;
  SURPRISED?: number;
  CALM?: number;
  DISGUSTED?: number;
  ANGRY?: number;
  SAD?: number;
  SCARED?: number;
  static names(): { [key: string]: string } {
    return {
      HAPPY: 'HAPPY',
      SURPRISED: 'SURPRISED',
      CALM: 'CALM',
      DISGUSTED: 'DISGUSTED',
      ANGRY: 'ANGRY',
      SAD: 'SAD',
      SCARED: 'SCARED',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAPPY: 'number',
      SURPRISED: 'number',
      CALM: 'number',
      DISGUSTED: 'number',
      ANGRY: 'number',
      SAD: 'number',
      SCARED: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesFaces extends $tea.Model {
  gender?: string;
  faceId?: string;
  genderConfidence?: number;
  faceAttributes?: ListImagesResponseBodyImagesFacesFaceAttributes;
  faceQuality?: number;
  emotion?: string;
  age?: number;
  faceConfidence?: number;
  emotionConfidence?: number;
  attractive?: number;
  groupId?: string;
  emotionDetails?: ListImagesResponseBodyImagesFacesEmotionDetails;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceId: 'FaceId',
      genderConfidence: 'GenderConfidence',
      faceAttributes: 'FaceAttributes',
      faceQuality: 'FaceQuality',
      emotion: 'Emotion',
      age: 'Age',
      faceConfidence: 'FaceConfidence',
      emotionConfidence: 'EmotionConfidence',
      attractive: 'Attractive',
      groupId: 'GroupId',
      emotionDetails: 'EmotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      faceId: 'string',
      genderConfidence: 'number',
      faceAttributes: ListImagesResponseBodyImagesFacesFaceAttributes,
      faceQuality: 'number',
      emotion: 'string',
      age: 'number',
      faceConfidence: 'number',
      emotionConfidence: 'number',
      attractive: 'number',
      groupId: 'string',
      emotionDetails: ListImagesResponseBodyImagesFacesEmotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesImageQuality extends $tea.Model {
  overallScore?: number;
  color?: number;
  colorScore?: number;
  contrastScore?: number;
  contrast?: number;
  exposureScore?: number;
  clarityScore?: number;
  clarity?: number;
  exposure?: number;
  compositionScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'OverallScore',
      color: 'Color',
      colorScore: 'ColorScore',
      contrastScore: 'ContrastScore',
      contrast: 'Contrast',
      exposureScore: 'ExposureScore',
      clarityScore: 'ClarityScore',
      clarity: 'Clarity',
      exposure: 'Exposure',
      compositionScore: 'CompositionScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
      color: 'number',
      colorScore: 'number',
      contrastScore: 'number',
      contrast: 'number',
      exposureScore: 'number',
      clarityScore: 'number',
      clarity: 'number',
      exposure: 'number',
      compositionScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImagesCroppingSuggestionCroppingBoundary extends $tea.Model {
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

export class ListImagesResponseBodyImagesCroppingSuggestion extends $tea.Model {
  score?: number;
  croppingBoundary?: ListImagesResponseBodyImagesCroppingSuggestionCroppingBoundary;
  aspectRatio?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      croppingBoundary: 'CroppingBoundary',
      aspectRatio: 'AspectRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      croppingBoundary: ListImagesResponseBodyImagesCroppingSuggestionCroppingBoundary,
      aspectRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $tea.Model {
  croppingSuggestionStatus?: string;
  imageQualityModifyTime?: string;
  tagsFailReason?: string;
  remarksC?: string;
  createTime?: string;
  sourceType?: string;
  facesFailReason?: string;
  tags?: ListImagesResponseBodyImagesTags[];
  facesModifyTime?: string;
  imageTime?: string;
  OCRModifyTime?: string;
  addressModifyTime?: string;
  OCR?: ListImagesResponseBodyImagesOCR[];
  imageQualityFailReason?: string;
  facesStatus?: string;
  imageHeight?: number;
  remarksArrayA?: string;
  address?: ListImagesResponseBodyImagesAddress;
  externalId?: string;
  sourceUri?: string;
  modifyTime?: string;
  fileSize?: number;
  sourcePosition?: string;
  faces?: ListImagesResponseBodyImagesFaces[];
  imageQualityStatus?: string;
  OCRFailReason?: string;
  addressFailReason?: string;
  imageQuality?: ListImagesResponseBodyImagesImageQuality;
  croppingSuggestionModifyTime?: string;
  imageFormat?: string;
  imageWidth?: number;
  remarksArrayB?: string;
  croppingSuggestion?: ListImagesResponseBodyImagesCroppingSuggestion[];
  orientation?: string;
  remarksD?: string;
  tagsStatus?: string;
  croppingSuggestionFailReason?: string;
  remarksA?: string;
  imageUri?: string;
  tagsModifyTime?: string;
  OCRStatus?: string;
  addressStatus?: string;
  exif?: string;
  location?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      croppingSuggestionStatus: 'CroppingSuggestionStatus',
      imageQualityModifyTime: 'ImageQualityModifyTime',
      tagsFailReason: 'TagsFailReason',
      remarksC: 'RemarksC',
      createTime: 'CreateTime',
      sourceType: 'SourceType',
      facesFailReason: 'FacesFailReason',
      tags: 'Tags',
      facesModifyTime: 'FacesModifyTime',
      imageTime: 'ImageTime',
      OCRModifyTime: 'OCRModifyTime',
      addressModifyTime: 'AddressModifyTime',
      OCR: 'OCR',
      imageQualityFailReason: 'ImageQualityFailReason',
      facesStatus: 'FacesStatus',
      imageHeight: 'ImageHeight',
      remarksArrayA: 'RemarksArrayA',
      address: 'Address',
      externalId: 'ExternalId',
      sourceUri: 'SourceUri',
      modifyTime: 'ModifyTime',
      fileSize: 'FileSize',
      sourcePosition: 'SourcePosition',
      faces: 'Faces',
      imageQualityStatus: 'ImageQualityStatus',
      OCRFailReason: 'OCRFailReason',
      addressFailReason: 'AddressFailReason',
      imageQuality: 'ImageQuality',
      croppingSuggestionModifyTime: 'CroppingSuggestionModifyTime',
      imageFormat: 'ImageFormat',
      imageWidth: 'ImageWidth',
      remarksArrayB: 'RemarksArrayB',
      croppingSuggestion: 'CroppingSuggestion',
      orientation: 'Orientation',
      remarksD: 'RemarksD',
      tagsStatus: 'TagsStatus',
      croppingSuggestionFailReason: 'CroppingSuggestionFailReason',
      remarksA: 'RemarksA',
      imageUri: 'ImageUri',
      tagsModifyTime: 'TagsModifyTime',
      OCRStatus: 'OCRStatus',
      addressStatus: 'AddressStatus',
      exif: 'Exif',
      location: 'Location',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppingSuggestionStatus: 'string',
      imageQualityModifyTime: 'string',
      tagsFailReason: 'string',
      remarksC: 'string',
      createTime: 'string',
      sourceType: 'string',
      facesFailReason: 'string',
      tags: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesTags },
      facesModifyTime: 'string',
      imageTime: 'string',
      OCRModifyTime: 'string',
      addressModifyTime: 'string',
      OCR: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesOCR },
      imageQualityFailReason: 'string',
      facesStatus: 'string',
      imageHeight: 'number',
      remarksArrayA: 'string',
      address: ListImagesResponseBodyImagesAddress,
      externalId: 'string',
      sourceUri: 'string',
      modifyTime: 'string',
      fileSize: 'number',
      sourcePosition: 'string',
      faces: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesFaces },
      imageQualityStatus: 'string',
      OCRFailReason: 'string',
      addressFailReason: 'string',
      imageQuality: ListImagesResponseBodyImagesImageQuality,
      croppingSuggestionModifyTime: 'string',
      imageFormat: 'string',
      imageWidth: 'number',
      remarksArrayB: 'string',
      croppingSuggestion: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesCroppingSuggestion },
      orientation: 'string',
      remarksD: 'string',
      tagsStatus: 'string',
      croppingSuggestionFailReason: 'string',
      remarksA: 'string',
      imageUri: 'string',
      tagsModifyTime: 'string',
      OCRStatus: 'string',
      addressStatus: 'string',
      exif: 'string',
      location: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskResponseBodyTasks extends $tea.Model {
  status?: string;
  percent?: number;
  finishTime?: string;
  createTime?: string;
  pageCount?: number;
  notifyTopicName?: string;
  notifyEndpoint?: string;
  tgtUri?: string;
  tgtType?: string;
  srcUri?: string;
  imageSpec?: string;
  externalID?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      finishTime: 'FinishTime',
      createTime: 'CreateTime',
      pageCount: 'PageCount',
      notifyTopicName: 'NotifyTopicName',
      notifyEndpoint: 'NotifyEndpoint',
      tgtUri: 'TgtUri',
      tgtType: 'TgtType',
      srcUri: 'SrcUri',
      imageSpec: 'ImageSpec',
      externalID: 'ExternalID',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'number',
      finishTime: 'string',
      createTime: 'string',
      pageCount: 'number',
      notifyTopicName: 'string',
      notifyEndpoint: 'string',
      tgtUri: 'string',
      tgtType: 'string',
      srcUri: 'string',
      imageSpec: 'string',
      externalID: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  type?: string;
  CU?: number;
  createTime?: string;
  serviceRole?: string;
  endpoint?: string;
  project?: string;
  regionId?: string;
  billingType?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      CU: 'CU',
      createTime: 'CreateTime',
      serviceRole: 'ServiceRole',
      endpoint: 'Endpoint',
      project: 'Project',
      regionId: 'RegionId',
      billingType: 'BillingType',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      CU: 'number',
      createTime: 'string',
      serviceRole: 'string',
      endpoint: 'string',
      project: 'string',
      regionId: 'string',
      billingType: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetsResponseBodySets extends $tea.Model {
  videoCount?: number;
  createTime?: string;
  videoLength?: number;
  setId?: string;
  imageCount?: number;
  faceCount?: number;
  setName?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      videoCount: 'VideoCount',
      createTime: 'CreateTime',
      videoLength: 'VideoLength',
      setId: 'SetId',
      imageCount: 'ImageCount',
      faceCount: 'FaceCount',
      setName: 'SetName',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCount: 'number',
      createTime: 'string',
      videoLength: 'number',
      setId: 'string',
      imageCount: 'number',
      faceCount: 'number',
      setName: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetTagsResponseBodyTags extends $tea.Model {
  tagName?: string;
  tagCount?: number;
  tagLevel?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagCount: 'TagCount',
      tagLevel: 'TagLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagCount: 'number',
      tagLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoAudiosResponseBodyAudiosAudioTexts extends $tea.Model {
  endTime?: number;
  library?: string;
  confidence?: number;
  beginTime?: number;
  channelId?: number;
  emotionValue?: number;
  speechRate?: number;
  text?: string;
  person?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      library: 'Library',
      confidence: 'Confidence',
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      speechRate: 'SpeechRate',
      text: 'Text',
      person: 'Person',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      library: 'string',
      confidence: 'number',
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'number',
      speechRate: 'number',
      text: 'string',
      person: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoAudiosResponseBodyAudios extends $tea.Model {
  sourcePosition?: string;
  createTime?: string;
  remarksC?: string;
  audioDuration?: number;
  sourceType?: string;
  audioTextsStatus?: string;
  audioFormat?: string;
  remarksD?: string;
  processModifyTime?: string;
  processFailReason?: string;
  audioUri?: string;
  audioRate?: number;
  audioTextsModifyTime?: string;
  remarksA?: string;
  audioTexts?: ListVideoAudiosResponseBodyAudiosAudioTexts[];
  externalId?: string;
  sourceUri?: string;
  processStatus?: string;
  audioTextsFailReason?: string;
  remarksB?: string;
  fileSize?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      sourcePosition: 'SourcePosition',
      createTime: 'CreateTime',
      remarksC: 'RemarksC',
      audioDuration: 'AudioDuration',
      sourceType: 'SourceType',
      audioTextsStatus: 'AudioTextsStatus',
      audioFormat: 'AudioFormat',
      remarksD: 'RemarksD',
      processModifyTime: 'ProcessModifyTime',
      processFailReason: 'ProcessFailReason',
      audioUri: 'AudioUri',
      audioRate: 'AudioRate',
      audioTextsModifyTime: 'AudioTextsModifyTime',
      remarksA: 'RemarksA',
      audioTexts: 'AudioTexts',
      externalId: 'ExternalId',
      sourceUri: 'SourceUri',
      processStatus: 'ProcessStatus',
      audioTextsFailReason: 'AudioTextsFailReason',
      remarksB: 'RemarksB',
      fileSize: 'FileSize',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourcePosition: 'string',
      createTime: 'string',
      remarksC: 'string',
      audioDuration: 'number',
      sourceType: 'string',
      audioTextsStatus: 'string',
      audioFormat: 'string',
      remarksD: 'string',
      processModifyTime: 'string',
      processFailReason: 'string',
      audioUri: 'string',
      audioRate: 'number',
      audioTextsModifyTime: 'string',
      remarksA: 'string',
      audioTexts: { 'type': 'array', 'itemType': ListVideoAudiosResponseBodyAudiosAudioTexts },
      externalId: 'string',
      sourceUri: 'string',
      processStatus: 'string',
      audioTextsFailReason: 'string',
      remarksB: 'string',
      fileSize: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesTags extends $tea.Model {
  tagConfidence?: number;
  tagName?: string;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagConfidence: 'TagConfidence',
      tagName: 'TagName',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagConfidence: 'number',
      tagName: 'string',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesOCROCRBoundary extends $tea.Model {
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

export class ListVideoFramesResponseBodyFramesOCR extends $tea.Model {
  OCRConfidence?: number;
  OCRContents?: string;
  OCRBoundary?: ListVideoFramesResponseBodyFramesOCROCRBoundary;
  static names(): { [key: string]: string } {
    return {
      OCRConfidence: 'OCRConfidence',
      OCRContents: 'OCRContents',
      OCRBoundary: 'OCRBoundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OCRConfidence: 'number',
      OCRContents: 'string',
      OCRBoundary: ListVideoFramesResponseBodyFramesOCROCRBoundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesFacesFaceAttributesFaceBoundary extends $tea.Model {
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

export class ListVideoFramesResponseBodyFramesFacesFaceAttributesHeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesFacesFaceAttributes extends $tea.Model {
  glassesConfidence?: number;
  glasses?: string;
  mask?: string;
  beardConfidence?: number;
  maskConfidence?: number;
  faceBoundary?: ListVideoFramesResponseBodyFramesFacesFaceAttributesFaceBoundary;
  headPose?: ListVideoFramesResponseBodyFramesFacesFaceAttributesHeadPose;
  beard?: string;
  static names(): { [key: string]: string } {
    return {
      glassesConfidence: 'GlassesConfidence',
      glasses: 'Glasses',
      mask: 'Mask',
      beardConfidence: 'BeardConfidence',
      maskConfidence: 'MaskConfidence',
      faceBoundary: 'FaceBoundary',
      headPose: 'HeadPose',
      beard: 'Beard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glassesConfidence: 'number',
      glasses: 'string',
      mask: 'string',
      beardConfidence: 'number',
      maskConfidence: 'number',
      faceBoundary: ListVideoFramesResponseBodyFramesFacesFaceAttributesFaceBoundary,
      headPose: ListVideoFramesResponseBodyFramesFacesFaceAttributesHeadPose,
      beard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesFacesEmotionDetails extends $tea.Model {
  HAPPY?: number;
  SURPRISED?: number;
  CALM?: number;
  DISGUSTED?: number;
  ANGRY?: number;
  SAD?: number;
  SCARED?: number;
  static names(): { [key: string]: string } {
    return {
      HAPPY: 'HAPPY',
      SURPRISED: 'SURPRISED',
      CALM: 'CALM',
      DISGUSTED: 'DISGUSTED',
      ANGRY: 'ANGRY',
      SAD: 'SAD',
      SCARED: 'SCARED',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAPPY: 'number',
      SURPRISED: 'number',
      CALM: 'number',
      DISGUSTED: 'number',
      ANGRY: 'number',
      SAD: 'number',
      SCARED: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFramesFaces extends $tea.Model {
  gender?: string;
  faceId?: string;
  genderConfidence?: number;
  faceAttributes?: ListVideoFramesResponseBodyFramesFacesFaceAttributes;
  faceQuality?: number;
  emotion?: string;
  age?: number;
  faceConfidence?: number;
  emotionConfidence?: number;
  attractive?: number;
  groupId?: string;
  emotionDetails?: ListVideoFramesResponseBodyFramesFacesEmotionDetails;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceId: 'FaceId',
      genderConfidence: 'GenderConfidence',
      faceAttributes: 'FaceAttributes',
      faceQuality: 'FaceQuality',
      emotion: 'Emotion',
      age: 'Age',
      faceConfidence: 'FaceConfidence',
      emotionConfidence: 'EmotionConfidence',
      attractive: 'Attractive',
      groupId: 'GroupId',
      emotionDetails: 'EmotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      faceId: 'string',
      genderConfidence: 'number',
      faceAttributes: ListVideoFramesResponseBodyFramesFacesFaceAttributes,
      faceQuality: 'number',
      emotion: 'string',
      age: 'number',
      faceConfidence: 'number',
      emotionConfidence: 'number',
      attractive: 'number',
      groupId: 'string',
      emotionDetails: ListVideoFramesResponseBodyFramesFacesEmotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoFramesResponseBodyFrames extends $tea.Model {
  tagsFailReason?: string;
  remarksC?: string;
  createTime?: string;
  sourceType?: string;
  facesFailReason?: string;
  tags?: ListVideoFramesResponseBodyFramesTags[];
  facesModifyTime?: string;
  imageTime?: string;
  OCRModifyTime?: string;
  OCR?: ListVideoFramesResponseBodyFramesOCR[];
  facesStatus?: string;
  imageHeight?: number;
  externalId?: string;
  sourceUri?: string;
  fileSize?: number;
  modifyTime?: string;
  sourcePosition?: string;
  faces?: ListVideoFramesResponseBodyFramesFaces[];
  OCRFailReason?: string;
  imageFormat?: string;
  imageWidth?: number;
  orientation?: string;
  remarksD?: string;
  tagsStatus?: string;
  remarksA?: string;
  imageUri?: string;
  tagsModifyTime?: string;
  OCRStatus?: string;
  exif?: string;
  location?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      tagsFailReason: 'TagsFailReason',
      remarksC: 'RemarksC',
      createTime: 'CreateTime',
      sourceType: 'SourceType',
      facesFailReason: 'FacesFailReason',
      tags: 'Tags',
      facesModifyTime: 'FacesModifyTime',
      imageTime: 'ImageTime',
      OCRModifyTime: 'OCRModifyTime',
      OCR: 'OCR',
      facesStatus: 'FacesStatus',
      imageHeight: 'ImageHeight',
      externalId: 'ExternalId',
      sourceUri: 'SourceUri',
      fileSize: 'FileSize',
      modifyTime: 'ModifyTime',
      sourcePosition: 'SourcePosition',
      faces: 'Faces',
      OCRFailReason: 'OCRFailReason',
      imageFormat: 'ImageFormat',
      imageWidth: 'ImageWidth',
      orientation: 'Orientation',
      remarksD: 'RemarksD',
      tagsStatus: 'TagsStatus',
      remarksA: 'RemarksA',
      imageUri: 'ImageUri',
      tagsModifyTime: 'TagsModifyTime',
      OCRStatus: 'OCRStatus',
      exif: 'Exif',
      location: 'Location',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagsFailReason: 'string',
      remarksC: 'string',
      createTime: 'string',
      sourceType: 'string',
      facesFailReason: 'string',
      tags: { 'type': 'array', 'itemType': ListVideoFramesResponseBodyFramesTags },
      facesModifyTime: 'string',
      imageTime: 'string',
      OCRModifyTime: 'string',
      OCR: { 'type': 'array', 'itemType': ListVideoFramesResponseBodyFramesOCR },
      facesStatus: 'string',
      imageHeight: 'number',
      externalId: 'string',
      sourceUri: 'string',
      fileSize: 'number',
      modifyTime: 'string',
      sourcePosition: 'string',
      faces: { 'type': 'array', 'itemType': ListVideoFramesResponseBodyFramesFaces },
      OCRFailReason: 'string',
      imageFormat: 'string',
      imageWidth: 'number',
      orientation: 'string',
      remarksD: 'string',
      tagsStatus: 'string',
      remarksA: 'string',
      imageUri: 'string',
      tagsModifyTime: 'string',
      OCRStatus: 'string',
      exif: 'string',
      location: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideosResponseBodyVideosVideoTags extends $tea.Model {
  tagName?: string;
  tagConfidence?: number;
  tagLevel?: number;
  parentTagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagConfidence: 'TagConfidence',
      tagLevel: 'TagLevel',
      parentTagName: 'ParentTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagConfidence: 'number',
      tagLevel: 'number',
      parentTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideosResponseBodyVideos extends $tea.Model {
  createTime?: string;
  remarksC?: string;
  videoTagsFailReason?: string;
  sourceType?: string;
  videoDuration?: number;
  videoTags?: ListVideosResponseBodyVideosVideoTags[];
  processModifyTime?: string;
  videoFrames?: number;
  videoTagsStatus?: string;
  externalId?: string;
  sourceUri?: string;
  fileSize?: number;
  modifyTime?: string;
  sourcePosition?: string;
  videoWidth?: number;
  videoFormat?: string;
  videoHeight?: number;
  remarksD?: string;
  videoUri?: string;
  processFailReason?: string;
  videoTagsModifyTime?: string;
  remarksA?: string;
  processStatus?: string;
  remarksB?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      remarksC: 'RemarksC',
      videoTagsFailReason: 'VideoTagsFailReason',
      sourceType: 'SourceType',
      videoDuration: 'VideoDuration',
      videoTags: 'VideoTags',
      processModifyTime: 'ProcessModifyTime',
      videoFrames: 'VideoFrames',
      videoTagsStatus: 'VideoTagsStatus',
      externalId: 'ExternalId',
      sourceUri: 'SourceUri',
      fileSize: 'FileSize',
      modifyTime: 'ModifyTime',
      sourcePosition: 'SourcePosition',
      videoWidth: 'VideoWidth',
      videoFormat: 'VideoFormat',
      videoHeight: 'VideoHeight',
      remarksD: 'RemarksD',
      videoUri: 'VideoUri',
      processFailReason: 'ProcessFailReason',
      videoTagsModifyTime: 'VideoTagsModifyTime',
      remarksA: 'RemarksA',
      processStatus: 'ProcessStatus',
      remarksB: 'RemarksB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      remarksC: 'string',
      videoTagsFailReason: 'string',
      sourceType: 'string',
      videoDuration: 'number',
      videoTags: { 'type': 'array', 'itemType': ListVideosResponseBodyVideosVideoTags },
      processModifyTime: 'string',
      videoFrames: 'number',
      videoTagsStatus: 'string',
      externalId: 'string',
      sourceUri: 'string',
      fileSize: 'number',
      modifyTime: 'string',
      sourcePosition: 'string',
      videoWidth: 'number',
      videoFormat: 'string',
      videoHeight: 'number',
      remarksD: 'string',
      videoUri: 'string',
      processFailReason: 'string',
      videoTagsModifyTime: 'string',
      remarksA: 'string',
      processStatus: 'string',
      remarksB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVideoTasksResponseBodyTasks extends $tea.Model {
  endTime?: string;
  status?: string;
  startTime?: string;
  taskType?: string;
  progress?: number;
  notifyEndpoint?: string;
  errorMessage?: string;
  parameters?: string;
  result?: string;
  taskId?: string;
  notifyTopicName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      taskType: 'TaskType',
      progress: 'Progress',
      notifyEndpoint: 'NotifyEndpoint',
      errorMessage: 'ErrorMessage',
      parameters: 'Parameters',
      result: 'Result',
      taskId: 'TaskId',
      notifyTopicName: 'NotifyTopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      startTime: 'string',
      taskType: 'string',
      progress: 'number',
      notifyEndpoint: 'string',
      errorMessage: 'string',
      parameters: 'string',
      result: 'string',
      taskId: 'string',
      notifyTopicName: 'string',
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
      'cn-beijing-gov-1': "imm-vpc.cn-beijing-gov-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async compareImageFacesWithOptions(request: CompareImageFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareImageFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompareImageFacesResponse>(await this.doRPCRequest("CompareImageFaces", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CompareImageFacesResponse({}));
  }

  async compareImageFaces(request: CompareImageFacesRequest): Promise<CompareImageFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareImageFacesWithOptions(request, runtime);
  }

  async convertOfficeFormatWithOptions(request: ConvertOfficeFormatRequest, runtime: $Util.RuntimeOptions): Promise<ConvertOfficeFormatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertOfficeFormatResponse>(await this.doRPCRequest("ConvertOfficeFormat", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertOfficeFormatResponse({}));
  }

  async convertOfficeFormat(request: ConvertOfficeFormatRequest): Promise<ConvertOfficeFormatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertOfficeFormatWithOptions(request, runtime);
  }

  async createGrabFrameTaskWithOptions(request: CreateGrabFrameTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateGrabFrameTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGrabFrameTaskResponse>(await this.doRPCRequest("CreateGrabFrameTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGrabFrameTaskResponse({}));
  }

  async createGrabFrameTask(request: CreateGrabFrameTaskRequest): Promise<CreateGrabFrameTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGrabFrameTaskWithOptions(request, runtime);
  }

  async createGroupFacesJobWithOptions(request: CreateGroupFacesJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupFacesJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupFacesJobResponse>(await this.doRPCRequest("CreateGroupFacesJob", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupFacesJobResponse({}));
  }

  async createGroupFacesJob(request: CreateGroupFacesJobRequest): Promise<CreateGroupFacesJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupFacesJobWithOptions(request, runtime);
  }

  async createImageProcessTaskWithOptions(request: CreateImageProcessTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageProcessTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageProcessTaskResponse>(await this.doRPCRequest("CreateImageProcessTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageProcessTaskResponse({}));
  }

  async createImageProcessTask(request: CreateImageProcessTaskRequest): Promise<CreateImageProcessTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageProcessTaskWithOptions(request, runtime);
  }

  async createMediaComplexTaskWithOptions(request: CreateMediaComplexTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMediaComplexTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMediaComplexTaskResponse>(await this.doRPCRequest("CreateMediaComplexTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMediaComplexTaskResponse({}));
  }

  async createMediaComplexTask(request: CreateMediaComplexTaskRequest): Promise<CreateMediaComplexTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMediaComplexTaskWithOptions(request, runtime);
  }

  async createMergeFaceGroupsJobWithOptions(request: CreateMergeFaceGroupsJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateMergeFaceGroupsJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMergeFaceGroupsJobResponse>(await this.doRPCRequest("CreateMergeFaceGroupsJob", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMergeFaceGroupsJobResponse({}));
  }

  async createMergeFaceGroupsJob(request: CreateMergeFaceGroupsJobRequest): Promise<CreateMergeFaceGroupsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMergeFaceGroupsJobWithOptions(request, runtime);
  }

  async createOfficeConversionTaskWithOptions(request: CreateOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOfficeConversionTaskResponse>(await this.doRPCRequest("CreateOfficeConversionTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOfficeConversionTaskResponse({}));
  }

  async createOfficeConversionTask(request: CreateOfficeConversionTaskRequest): Promise<CreateOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOfficeConversionTaskWithOptions(request, runtime);
  }

  async createSetWithOptions(request: CreateSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSetResponse>(await this.doRPCRequest("CreateSet", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSetResponse({}));
  }

  async createSet(request: CreateSetRequest): Promise<CreateSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSetWithOptions(request, runtime);
  }

  async createStreamAnalyseTaskWithOptions(request: CreateStreamAnalyseTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateStreamAnalyseTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStreamAnalyseTaskResponse>(await this.doRPCRequest("CreateStreamAnalyseTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStreamAnalyseTaskResponse({}));
  }

  async createStreamAnalyseTask(request: CreateStreamAnalyseTaskRequest): Promise<CreateStreamAnalyseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamAnalyseTaskWithOptions(request, runtime);
  }

  async createVideoAbstractTaskWithOptions(request: CreateVideoAbstractTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoAbstractTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoAbstractTaskResponse>(await this.doRPCRequest("CreateVideoAbstractTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoAbstractTaskResponse({}));
  }

  async createVideoAbstractTask(request: CreateVideoAbstractTaskRequest): Promise<CreateVideoAbstractTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoAbstractTaskWithOptions(request, runtime);
  }

  async createVideoAnalyseTaskWithOptions(request: CreateVideoAnalyseTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoAnalyseTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoAnalyseTaskResponse>(await this.doRPCRequest("CreateVideoAnalyseTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoAnalyseTaskResponse({}));
  }

  async createVideoAnalyseTask(request: CreateVideoAnalyseTaskRequest): Promise<CreateVideoAnalyseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoAnalyseTaskWithOptions(request, runtime);
  }

  async createVideoCompressTaskWithOptions(request: CreateVideoCompressTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoCompressTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoCompressTaskResponse>(await this.doRPCRequest("CreateVideoCompressTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoCompressTaskResponse({}));
  }

  async createVideoCompressTask(request: CreateVideoCompressTaskRequest): Promise<CreateVideoCompressTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoCompressTaskWithOptions(request, runtime);
  }

  async createVideoProduceTaskWithOptions(request: CreateVideoProduceTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoProduceTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoProduceTaskResponse>(await this.doRPCRequest("CreateVideoProduceTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoProduceTaskResponse({}));
  }

  async createVideoProduceTask(request: CreateVideoProduceTaskRequest): Promise<CreateVideoProduceTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoProduceTaskWithOptions(request, runtime);
  }

  async decodeBlindWatermarkWithOptions(request: DecodeBlindWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<DecodeBlindWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DecodeBlindWatermarkResponse>(await this.doRPCRequest("DecodeBlindWatermark", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DecodeBlindWatermarkResponse({}));
  }

  async decodeBlindWatermark(request: DecodeBlindWatermarkRequest): Promise<DecodeBlindWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decodeBlindWatermarkWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageResponse>(await this.doRPCRequest("DeleteImage", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteImageJobWithOptions(request: DeleteImageJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageJobResponse>(await this.doRPCRequest("DeleteImageJob", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageJobResponse({}));
  }

  async deleteImageJob(request: DeleteImageJobRequest): Promise<DeleteImageJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageJobWithOptions(request, runtime);
  }

  async deleteOfficeConversionTaskWithOptions(request: DeleteOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOfficeConversionTaskResponse>(await this.doRPCRequest("DeleteOfficeConversionTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOfficeConversionTaskResponse({}));
  }

  async deleteOfficeConversionTask(request: DeleteOfficeConversionTaskRequest): Promise<DeleteOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOfficeConversionTaskWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async deleteSetWithOptions(request: DeleteSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSetResponse>(await this.doRPCRequest("DeleteSet", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSetResponse({}));
  }

  async deleteSet(request: DeleteSetRequest): Promise<DeleteSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSetWithOptions(request, runtime);
  }

  async deleteVideoWithOptions(request: DeleteVideoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVideoResponse>(await this.doRPCRequest("DeleteVideo", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVideoResponse({}));
  }

  async deleteVideo(request: DeleteVideoRequest): Promise<DeleteVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoWithOptions(request, runtime);
  }

  async deleteVideoTaskWithOptions(request: DeleteVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVideoTaskResponse>(await this.doRPCRequest("DeleteVideoTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVideoTaskResponse({}));
  }

  async deleteVideoTask(request: DeleteVideoTaskRequest): Promise<DeleteVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoTaskWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async detectImageBodiesWithOptions(request: DetectImageBodiesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageBodiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageBodiesResponse>(await this.doRPCRequest("DetectImageBodies", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageBodiesResponse({}));
  }

  async detectImageBodies(request: DetectImageBodiesRequest): Promise<DetectImageBodiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageBodiesWithOptions(request, runtime);
  }

  async detectImageFacesWithOptions(request: DetectImageFacesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageFacesResponse>(await this.doRPCRequest("DetectImageFaces", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageFacesResponse({}));
  }

  async detectImageFaces(request: DetectImageFacesRequest): Promise<DetectImageFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageFacesWithOptions(request, runtime);
  }

  async detectImageLogosWithOptions(request: DetectImageLogosRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageLogosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageLogosResponse>(await this.doRPCRequest("DetectImageLogos", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageLogosResponse({}));
  }

  async detectImageLogos(request: DetectImageLogosRequest): Promise<DetectImageLogosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageLogosWithOptions(request, runtime);
  }

  async detectImageQRCodesWithOptions(request: DetectImageQRCodesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageQRCodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageQRCodesResponse>(await this.doRPCRequest("DetectImageQRCodes", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageQRCodesResponse({}));
  }

  async detectImageQRCodes(request: DetectImageQRCodesRequest): Promise<DetectImageQRCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageQRCodesWithOptions(request, runtime);
  }

  async detectImageTagsWithOptions(request: DetectImageTagsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectImageTagsResponse>(await this.doRPCRequest("DetectImageTags", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectImageTagsResponse({}));
  }

  async detectImageTags(request: DetectImageTagsRequest): Promise<DetectImageTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageTagsWithOptions(request, runtime);
  }

  async detectQRCodesWithOptions(request: DetectQRCodesRequest, runtime: $Util.RuntimeOptions): Promise<DetectQRCodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectQRCodesResponse>(await this.doRPCRequest("DetectQRCodes", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new DetectQRCodesResponse({}));
  }

  async detectQRCodes(request: DetectQRCodesRequest): Promise<DetectQRCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectQRCodesWithOptions(request, runtime);
  }

  async encodeBlindWatermarkWithOptions(request: EncodeBlindWatermarkRequest, runtime: $Util.RuntimeOptions): Promise<EncodeBlindWatermarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EncodeBlindWatermarkResponse>(await this.doRPCRequest("EncodeBlindWatermark", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new EncodeBlindWatermarkResponse({}));
  }

  async encodeBlindWatermark(request: EncodeBlindWatermarkRequest): Promise<EncodeBlindWatermarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encodeBlindWatermarkWithOptions(request, runtime);
  }

  async findImagesWithOptions(request: FindImagesRequest, runtime: $Util.RuntimeOptions): Promise<FindImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindImagesResponse>(await this.doRPCRequest("FindImages", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new FindImagesResponse({}));
  }

  async findImages(request: FindImagesRequest): Promise<FindImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findImagesWithOptions(request, runtime);
  }

  async findSimilarFacesWithOptions(request: FindSimilarFacesRequest, runtime: $Util.RuntimeOptions): Promise<FindSimilarFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindSimilarFacesResponse>(await this.doRPCRequest("FindSimilarFaces", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new FindSimilarFacesResponse({}));
  }

  async findSimilarFaces(request: FindSimilarFacesRequest): Promise<FindSimilarFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findSimilarFacesWithOptions(request, runtime);
  }

  async getContentKeyWithOptions(request: GetContentKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetContentKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetContentKeyResponse>(await this.doRPCRequest("GetContentKey", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetContentKeyResponse({}));
  }

  async getContentKey(request: GetContentKeyRequest): Promise<GetContentKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContentKeyWithOptions(request, runtime);
  }

  async getDRMLicenseWithOptions(request: GetDRMLicenseRequest, runtime: $Util.RuntimeOptions): Promise<GetDRMLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDRMLicenseResponse>(await this.doRPCRequest("GetDRMLicense", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetDRMLicenseResponse({}));
  }

  async getDRMLicense(request: GetDRMLicenseRequest): Promise<GetDRMLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDRMLicenseWithOptions(request, runtime);
  }

  async getImageWithOptions(request: GetImageRequest, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageResponse>(await this.doRPCRequest("GetImage", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageResponse({}));
  }

  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  async getImageCroppingSuggestionsWithOptions(request: GetImageCroppingSuggestionsRequest, runtime: $Util.RuntimeOptions): Promise<GetImageCroppingSuggestionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageCroppingSuggestionsResponse>(await this.doRPCRequest("GetImageCroppingSuggestions", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageCroppingSuggestionsResponse({}));
  }

  async getImageCroppingSuggestions(request: GetImageCroppingSuggestionsRequest): Promise<GetImageCroppingSuggestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageCroppingSuggestionsWithOptions(request, runtime);
  }

  async getImageQualityWithOptions(request: GetImageQualityRequest, runtime: $Util.RuntimeOptions): Promise<GetImageQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetImageQualityResponse>(await this.doRPCRequest("GetImageQuality", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetImageQualityResponse({}));
  }

  async getImageQuality(request: GetImageQualityRequest): Promise<GetImageQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageQualityWithOptions(request, runtime);
  }

  async getMediaMetaWithOptions(request: GetMediaMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetMediaMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMediaMetaResponse>(await this.doRPCRequest("GetMediaMeta", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetMediaMetaResponse({}));
  }

  async getMediaMeta(request: GetMediaMetaRequest): Promise<GetMediaMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMediaMetaWithOptions(request, runtime);
  }

  async getOfficeConversionTaskWithOptions(request: GetOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOfficeConversionTaskResponse>(await this.doRPCRequest("GetOfficeConversionTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetOfficeConversionTaskResponse({}));
  }

  async getOfficeConversionTask(request: GetOfficeConversionTaskRequest): Promise<GetOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeConversionTaskWithOptions(request, runtime);
  }

  async getOfficeEditURLWithOptions(request: GetOfficeEditURLRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeEditURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOfficeEditURLResponse>(await this.doRPCRequest("GetOfficeEditURL", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetOfficeEditURLResponse({}));
  }

  async getOfficeEditURL(request: GetOfficeEditURLRequest): Promise<GetOfficeEditURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeEditURLWithOptions(request, runtime);
  }

  async getOfficePreviewURLWithOptions(request: GetOfficePreviewURLRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficePreviewURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOfficePreviewURLResponse>(await this.doRPCRequest("GetOfficePreviewURL", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetOfficePreviewURLResponse({}));
  }

  async getOfficePreviewURL(request: GetOfficePreviewURLRequest): Promise<GetOfficePreviewURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficePreviewURLWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectResponse>(await this.doRPCRequest("GetProject", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getSetWithOptions(request: GetSetRequest, runtime: $Util.RuntimeOptions): Promise<GetSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSetResponse>(await this.doRPCRequest("GetSet", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetSetResponse({}));
  }

  async getSet(request: GetSetRequest): Promise<GetSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSetWithOptions(request, runtime);
  }

  async getVideoWithOptions(request: GetVideoRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoResponse>(await this.doRPCRequest("GetVideo", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoResponse({}));
  }

  async getVideo(request: GetVideoRequest): Promise<GetVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoWithOptions(request, runtime);
  }

  async getVideoTaskWithOptions(request: GetVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoTaskResponse>(await this.doRPCRequest("GetVideoTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoTaskResponse({}));
  }

  async getVideoTask(request: GetVideoTaskRequest): Promise<GetVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoTaskWithOptions(request, runtime);
  }

  async getWebofficeURLWithOptions(request: GetWebofficeURLRequest, runtime: $Util.RuntimeOptions): Promise<GetWebofficeURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebofficeURLResponse>(await this.doRPCRequest("GetWebofficeURL", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebofficeURLResponse({}));
  }

  async getWebofficeURL(request: GetWebofficeURLRequest): Promise<GetWebofficeURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebofficeURLWithOptions(request, runtime);
  }

  async indexImageWithOptions(request: IndexImageRequest, runtime: $Util.RuntimeOptions): Promise<IndexImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IndexImageResponse>(await this.doRPCRequest("IndexImage", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new IndexImageResponse({}));
  }

  async indexImage(request: IndexImageRequest): Promise<IndexImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.indexImageWithOptions(request, runtime);
  }

  async indexVideoWithOptions(request: IndexVideoRequest, runtime: $Util.RuntimeOptions): Promise<IndexVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IndexVideoResponse>(await this.doRPCRequest("IndexVideo", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new IndexVideoResponse({}));
  }

  async indexVideo(request: IndexVideoRequest): Promise<IndexVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.indexVideoWithOptions(request, runtime);
  }

  async listFaceGroupsWithOptions(request: ListFaceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceGroupsResponse>(await this.doRPCRequest("ListFaceGroups", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceGroupsResponse({}));
  }

  async listFaceGroups(request: ListFaceGroupsRequest): Promise<ListFaceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceGroupsWithOptions(request, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListImagesResponse>(await this.doRPCRequest("ListImages", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListImagesResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  async listOfficeConversionTaskWithOptions(request: ListOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOfficeConversionTaskResponse>(await this.doRPCRequest("ListOfficeConversionTask", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListOfficeConversionTaskResponse({}));
  }

  async listOfficeConversionTask(request: ListOfficeConversionTaskRequest): Promise<ListOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeConversionTaskWithOptions(request, runtime);
  }

  async listProjectAPIsWithOptions(request: ListProjectAPIsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectAPIsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectAPIsResponse>(await this.doRPCRequest("ListProjectAPIs", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectAPIsResponse({}));
  }

  async listProjectAPIs(request: ListProjectAPIsRequest): Promise<ListProjectAPIsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectAPIsWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listSetsWithOptions(request: ListSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSetsResponse>(await this.doRPCRequest("ListSets", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListSetsResponse({}));
  }

  async listSets(request: ListSetsRequest): Promise<ListSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSetsWithOptions(request, runtime);
  }

  async listSetTagsWithOptions(request: ListSetTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListSetTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSetTagsResponse>(await this.doRPCRequest("ListSetTags", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListSetTagsResponse({}));
  }

  async listSetTags(request: ListSetTagsRequest): Promise<ListSetTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSetTagsWithOptions(request, runtime);
  }

  async listVideoAudiosWithOptions(request: ListVideoAudiosRequest, runtime: $Util.RuntimeOptions): Promise<ListVideoAudiosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVideoAudiosResponse>(await this.doRPCRequest("ListVideoAudios", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListVideoAudiosResponse({}));
  }

  async listVideoAudios(request: ListVideoAudiosRequest): Promise<ListVideoAudiosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVideoAudiosWithOptions(request, runtime);
  }

  async listVideoFramesWithOptions(request: ListVideoFramesRequest, runtime: $Util.RuntimeOptions): Promise<ListVideoFramesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVideoFramesResponse>(await this.doRPCRequest("ListVideoFrames", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListVideoFramesResponse({}));
  }

  async listVideoFrames(request: ListVideoFramesRequest): Promise<ListVideoFramesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVideoFramesWithOptions(request, runtime);
  }

  async listVideosWithOptions(request: ListVideosRequest, runtime: $Util.RuntimeOptions): Promise<ListVideosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVideosResponse>(await this.doRPCRequest("ListVideos", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListVideosResponse({}));
  }

  async listVideos(request: ListVideosRequest): Promise<ListVideosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVideosWithOptions(request, runtime);
  }

  async listVideoTasksWithOptions(request: ListVideoTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListVideoTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVideoTasksResponse>(await this.doRPCRequest("ListVideoTasks", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListVideoTasksResponse({}));
  }

  async listVideoTasks(request: ListVideoTasksRequest): Promise<ListVideoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVideoTasksWithOptions(request, runtime);
  }

  async openImmServiceWithOptions(request: OpenImmServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenImmServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenImmServiceResponse>(await this.doRPCRequest("OpenImmService", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new OpenImmServiceResponse({}));
  }

  async openImmService(request: OpenImmServiceRequest): Promise<OpenImmServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openImmServiceWithOptions(request, runtime);
  }

  async putProjectWithOptions(request: PutProjectRequest, runtime: $Util.RuntimeOptions): Promise<PutProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutProjectResponse>(await this.doRPCRequest("PutProject", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new PutProjectResponse({}));
  }

  async putProject(request: PutProjectRequest): Promise<PutProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putProjectWithOptions(request, runtime);
  }

  async refreshOfficeEditTokenWithOptions(request: RefreshOfficeEditTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshOfficeEditTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshOfficeEditTokenResponse>(await this.doRPCRequest("RefreshOfficeEditToken", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshOfficeEditTokenResponse({}));
  }

  async refreshOfficeEditToken(request: RefreshOfficeEditTokenRequest): Promise<RefreshOfficeEditTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshOfficeEditTokenWithOptions(request, runtime);
  }

  async refreshOfficePreviewTokenWithOptions(request: RefreshOfficePreviewTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshOfficePreviewTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshOfficePreviewTokenResponse>(await this.doRPCRequest("RefreshOfficePreviewToken", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshOfficePreviewTokenResponse({}));
  }

  async refreshOfficePreviewToken(request: RefreshOfficePreviewTokenRequest): Promise<RefreshOfficePreviewTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshOfficePreviewTokenWithOptions(request, runtime);
  }

  async refreshWebofficeTokenWithOptions(request: RefreshWebofficeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshWebofficeTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshWebofficeTokenResponse>(await this.doRPCRequest("RefreshWebofficeToken", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshWebofficeTokenResponse({}));
  }

  async refreshWebofficeToken(request: RefreshWebofficeTokenRequest): Promise<RefreshWebofficeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshWebofficeTokenWithOptions(request, runtime);
  }

  async updateFaceGroupWithOptions(request: UpdateFaceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFaceGroupResponse>(await this.doRPCRequest("UpdateFaceGroup", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFaceGroupResponse({}));
  }

  async updateFaceGroup(request: UpdateFaceGroupRequest): Promise<UpdateFaceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceGroupWithOptions(request, runtime);
  }

  async updateImageWithOptions(request: UpdateImageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateImageResponse>(await this.doRPCRequest("UpdateImage", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateImageResponse({}));
  }

  async updateImage(request: UpdateImageRequest): Promise<UpdateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateSetWithOptions(request: UpdateSetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSetResponse>(await this.doRPCRequest("UpdateSet", "2017-09-06", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSetResponse({}));
  }

  async updateSet(request: UpdateSetRequest): Promise<UpdateSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSetWithOptions(request, runtime);
  }

}
