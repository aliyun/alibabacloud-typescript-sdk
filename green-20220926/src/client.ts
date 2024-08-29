// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddImageLibRequest extends $tea.Model {
  comment?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageLibResponseBody;
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
      body: AddImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImages2LibRequest extends $tea.Model {
  /**
   * @example
   * upload/ea7a98f9-f8bd-4905-a79b-963c9da419c5.jpg
   */
  imgUrl?: string;
  /**
   * @example
   * xxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imgUrl: 'ImgUrl',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgUrl: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImages2LibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddImages2LibResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddImages2LibResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImages2LibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImages2LibResponseBody;
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
      body: AddImages2LibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibRequest extends $tea.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddKeywordLibResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddKeywordLibResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordLibResponseBody;
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
      body: AddKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsRequest extends $tea.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: AddKeywordsResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddKeywordsResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordsResponseBody;
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
      body: AddKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibRequest extends $tea.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponseBody extends $tea.Model {
  data?: AddKeywordsToLibResponseBodyData;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddKeywordsToLibResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddKeywordsToLibResponseBody;
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
      body: AddKeywordsToLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelStockOssCheckTaskRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * P_UNYVB
   */
  taskId?: string;
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

export class CancelStockOssCheckTaskResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelStockOssCheckTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelStockOssCheckTaskResponseBody;
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
      body: CancelStockOssCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyServiceConfigRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyServiceConfigResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyServiceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyServiceConfigResponseBody;
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
      body: CopyServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatStockOssCheckTaskRequest extends $tea.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * 1751
   */
  callbackId?: string;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 01:09:30-01:19:30
   */
  executeTime?: string;
  freeze?: boolean;
  freezeHighRisk1?: boolean;
  freezeHighRisk2?: boolean;
  freezeMediumRisk1?: boolean;
  freezeMediumRisk2?: boolean;
  freezeType?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * 0
   */
  scanResourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  taskCycle?: number;
  taskName?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      callbackId: 'CallbackId',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      executeDate: 'ExecuteDate',
      executeTime: 'ExecuteTime',
      freeze: 'Freeze',
      freezeHighRisk1: 'FreezeHighRisk1',
      freezeHighRisk2: 'FreezeHighRisk2',
      freezeMediumRisk1: 'FreezeMediumRisk1',
      freezeMediumRisk2: 'FreezeMediumRisk2',
      freezeType: 'FreezeType',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      callbackId: 'string',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      executeDate: 'number',
      executeTime: 'string',
      freeze: 'boolean',
      freezeHighRisk1: 'boolean',
      freezeHighRisk2: 'boolean',
      freezeMediumRisk1: 'boolean',
      freezeMediumRisk2: 'boolean',
      freezeType: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'string',
      scanService: 'string',
      startTime: 'string',
      taskCycle: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatStockOssCheckTaskResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatStockOssCheckTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatStockOssCheckTaskResponseBody;
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
      body: CreatStockOssCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePreCheckRequest extends $tea.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanService: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePreCheckResponseBody extends $tea.Model {
  data?: { [key: string]: boolean };
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePreCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePreCheckResponseBody;
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
      body: CreatePreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesFromLibRequest extends $tea.Model {
  /**
   * @example
   * [158794]
   */
  imageIds?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesFromLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesFromLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImagesFromLibResponseBody;
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
      body: DeleteImagesFromLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordRequest extends $tea.Model {
  /**
   * @example
   * [16754493]
   */
  keywordIds?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordIds: 'KeywordIds',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordIds: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordResponseBody;
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
      body: DeleteKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibRequest extends $tea.Model {
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeywordLibResponseBody;
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
      body: DeleteKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCipStatsRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-04-16 09:00:00
   */
  endDate?: string;
  /**
   * @example
   * xx
   */
  label?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * 2024-04-15 09:00:00
   */
  startDate?: string;
  /**
   * @example
   * 268220485413130979
   */
  subUid?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      label: 'Label',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
      subUid: 'SubUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      label: 'string',
      regionId: 'string',
      resourceType: 'string',
      startDate: 'string',
      subUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCipStatsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/cipStat/text/statistics1720597246783.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCipStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportCipStatsResponseBody;
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
      body: ExportCipStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordRequest extends $tea.Model {
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/console_data/export/production/keyword/export_keywordO4ee1Bok1R8IIDVpcT9viU-1xxWr
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKeywordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportKeywordResponseBody;
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
      body: ExportKeywordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/console_data/production/scanResult/osscheck/ossCheckResult_aliiGGXhSMvmIvsS7Lrl3LaUZ-1A9%24oZ.xlsx
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportResultResponseBody;
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
      body: ExportResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      resourceType: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  sortShrink?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/scanResult/text/textScanResult_aliow2MAdWXCakCxlitVY8Lnn-1A9KEw.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportScanResultResponseBody;
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
      body: ExportScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultRequest extends $tea.Model {
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      queryShrink: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      queryShrink: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/portal_data/production/scanResult/text/textScanResult_aliow2MAdWXCakCxlitVY8Lnn-1A9KEw.xlsx
   */
  data?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportTextScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportTextScanResultResponseBody;
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
      body: ExportTextScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetBackupBucketsListResponseBody extends $tea.Model {
  data?: GetBackupBucketsListResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBackupBucketsListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupBucketsListResponseBody;
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
      body: GetBackupBucketsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupConfigRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  backupMode?: number;
  /**
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 300
   */
  expireSeconds?: number;
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * aliyun/template/
   */
  path?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1772612608370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      bucket: 'Bucket',
      enable: 'Enable',
      expireSeconds: 'ExpireSeconds',
      gmtModified: 'GmtModified',
      path: 'Path',
      region: 'Region',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'number',
      bucket: 'string',
      enable: 'boolean',
      expireSeconds: 'number',
      gmtModified: 'string',
      path: 'string',
      region: 'string',
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupConfigResponseBody;
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
      body: GetBackupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStatusRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetBackupStatusResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackupStatusResponseBody;
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
      body: GetBackupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketsListRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetBucketsListResponseBody extends $tea.Model {
  data?: GetBucketsListResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBucketsListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBucketsListResponseBody;
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
      body: GetBucketsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * xx
   */
  label?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  /**
   * @example
   * 253552244990701265
   */
  subUid?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      label: 'Label',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
      subUid: 'SubUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      label: 'string',
      regionId: 'string',
      resourceType: 'string',
      startDate: 'string',
      subUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetCipStatsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetCipStatsResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCipStatsResponseBody;
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
      body: GetCipStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecuteTimeRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetExecuteTimeResponseBody extends $tea.Model {
  /**
   * @example
   * 02:24:30
   */
  data?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
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

export class GetExecuteTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExecuteTimeResponseBody;
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
      body: GetExecuteTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageSceneLabelListConfRequest extends $tea.Model {
  /**
   * @example
   * baselineCheck
   */
  imageServiceCode?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageServiceCode: 'ImageServiceCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageServiceCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageSceneLabelListConfResponseBody extends $tea.Model {
  data?: any[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageSceneLabelListConfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageSceneLabelListConfResponseBody;
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
      body: GetImageSceneLabelListConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListRequest extends $tea.Model {
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListShrinkRequest extends $tea.Model {
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListResponseBody extends $tea.Model {
  data?: string[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobNameListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobNameListResponseBody;
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
      body: GetJobNameListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordImportResultRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * xxx-xxx
   */
  taskId?: string;
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

export class GetKeywordImportResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetKeywordImportResultResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKeywordImportResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordImportResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeywordImportResultResponseBody;
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
      body: GetKeywordImportResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatusRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetOssCheckStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @example
   * True
   */
  ramStatus?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  slsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      commodityCode: 'CommodityCode',
      indebt: 'Indebt',
      ramStatus: 'RamStatus',
      requestId: 'RequestId',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buy: 'boolean',
      commodityCode: 'string',
      indebt: 'boolean',
      ramStatus: 'string',
      requestId: 'string',
      slsStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOssCheckStatusResponseBody;
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
      body: GetOssCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanNumRequest extends $tea.Model {
  /**
   * @example
   * tmpsample
   */
  buckets?: string;
  /**
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      mediaType: 'MediaType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      mediaType: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanNumResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  limitNumber?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  scanNumber?: number;
  /**
   * @example
   * 10
   */
  sumNumber?: number;
  /**
   * @example
   * True
   */
  tag?: boolean;
  static names(): { [key: string]: string } {
    return {
      limitNumber: 'LimitNumber',
      requestId: 'RequestId',
      scanNumber: 'ScanNumber',
      sumNumber: 'SumNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitNumber: 'number',
      requestId: 'string',
      scanNumber: 'number',
      sumNumber: 'number',
      tag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanNumResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScanNumResponseBody;
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
      body: GetScanNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      resourceType: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetScanResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScanResultResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScanResultResponseBody;
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
      body: GetScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfRequest extends $tea.Model {
  /**
   * @example
   * False
   */
  byDefault?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      byDefault: 'ByDefault',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byDefault: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {}
   */
  customServiceConf?: { [key: string]: any };
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 17726*****370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      msg: 'Msg',
      option: 'Option',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      success: 'Success',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      customServiceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtModified: 'string',
      msg: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      success: 'boolean',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceConfResponseBody;
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
      body: GetServiceConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetServiceConfigResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceConfigResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceConfigResponseBody;
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
      body: GetServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLabelConfigRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLabelConfigResponseBody extends $tea.Model {
  data?: any[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLabelConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceLabelConfigResponseBody;
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
      body: GetServiceLabelConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      startTime: 'StartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startTime: 'StartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      startTime: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetStockOssCheckTasksListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStockOssCheckTasksListResponseBody;
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
      body: GetStockOssCheckTasksListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      queryShrink: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTextScanResultResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTextScanResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextScanResultResponseBody;
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
      body: GetTextScanResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadInfoRequest extends $tea.Model {
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadInfoResponseBody extends $tea.Model {
  /**
   * @example
   * LTAI5t9HM*****EXQmw3DVH
   */
  accessId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 900
   */
  expire?: number;
  /**
   * @example
   * image/upload/xxx
   */
  folder?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  name?: string;
  /**
   * @example
   * xxxx
   */
  policy?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * iyu7VHblYj+mEF9p46cdGOlNPAw=
   */
  signature?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      code: 'Code',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      httpStatusCode: 'HttpStatusCode',
      key: 'Key',
      msg: 'Msg',
      name: 'Name',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      code: 'number',
      expire: 'number',
      folder: 'string',
      host: 'string',
      httpStatusCode: 'number',
      key: 'string',
      msg: 'string',
      name: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadInfoResponseBody;
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
      body: GetUploadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class GetUserBuyStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetUserBuyStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUserBuyStatusResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserBuyStatusResponseBody;
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
      body: GetUserBuyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLibRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class ListImageLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  libList?: ListImageLibResponseBodyLibList[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      libList: 'LibList',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      libList: { 'type': 'array', 'itemType': ListImageLibResponseBodyLibList },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImageLibResponseBody;
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
      body: ListImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 112
   */
  imgId?: string;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      imgId: 'ImgId',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      imgId: 'string',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 112
   */
  imgId?: string;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      imgId: 'ImgId',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      imgId: 'string',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: ListImagesFromLibResponseBodyItems[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      msg: 'Msg',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListImagesFromLibResponseBodyItems },
      msg: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesFromLibResponseBody;
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
      body: ListImagesFromLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

export class ListKeywordLibsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListKeywordLibsResponseBodyData[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListKeywordLibsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeywordLibsResponseBody;
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
      body: ListKeywordLibsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sort: 'Sort',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      libId: 'LibId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      libId: 'string',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListKeywordsResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListKeywordsResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeywordsResponseBody;
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
      body: ListKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      finishNum: 'FinishNum',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sort: 'Sort',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      finishNum: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-08-24 10:01:55
   */
  endDate?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {"TaskId":"P_11TL5T"}
   */
  query?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sortShrink?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  startDate?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      finishNum: 'FinishNum',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      finishNum: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      sortShrink: 'string',
      startDate: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListOssCheckResultResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListOssCheckResultResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOssCheckResultResponseBody;
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
      body: ListOssCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsRequest extends $tea.Model {
  classify?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      regionId: 'string',
      resourceType: 'string',
      useStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBody extends $tea.Model {
  /**
   * @example
   * 400
   */
  code?: number;
  data?: ListServiceConfigsResponseBodyData[];
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceConfigsResponseBody;
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
      body: ListServiceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInfoRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInfoResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyServiceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyServiceInfoResponseBody;
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
      body: ModifyServiceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupConfigRequest extends $tea.Model {
  /**
   * @example
   * {}
   */
  backupConfig?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @example
   * videoDetection
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      backupConfig: 'BackupConfig',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConfig: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupConfigResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBackupConfigResponseBody;
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
      body: UpdateBackupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibRequest extends $tea.Model {
  comment?: string;
  /**
   * @example
   * 0
   */
  freeInspection?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      libId: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageLibResponseBody;
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
      body: UpdateImageLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibFreeInspectionRequest extends $tea.Model {
  config?: { [key: string]: number };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibFreeInspectionShrinkRequest extends $tea.Model {
  configShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibFreeInspectionResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageLibFreeInspectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageLibFreeInspectionResponseBody;
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
      body: UpdateImageLibFreeInspectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibRequest extends $tea.Model {
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeywordLibResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKeywordLibResponseBody;
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
      body: UpdateKeywordLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScanResultFeedbackRequest extends $tea.Model {
  /**
   * @example
   * missOut
   */
  feedback?: string;
  /**
   * @example
   * 46232656-984E-****-A648-B1D0667B6C3E
   */
  queryRequestId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      queryRequestId: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScanResultFeedbackResponseBody extends $tea.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScanResultFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScanResultFeedbackResponseBody;
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
      body: UpdateScanResultFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigRequest extends $tea.Model {
  /**
   * @example
   * {}
   */
  fileConfig?: string;
  /**
   * @example
   * []
   */
  keywordFilterLibs?: string;
  /**
   * @example
   * []
   */
  keywordHitLibs?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * {}
   */
  sceneConfig?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * {}
   */
  videoConfig?: string;
  static names(): { [key: string]: string } {
    return {
      fileConfig: 'FileConfig',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sceneConfig: 'SceneConfig',
      serviceCode: 'ServiceCode',
      videoConfig: 'VideoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileConfig: 'string',
      keywordFilterLibs: 'string',
      keywordHitLibs: 'string',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      sceneConfig: 'string',
      serviceCode: 'string',
      videoConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceConfigResponseBody;
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
      body: UpdateServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImages2LibResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100001
   */
  imgId?: string;
  static names(): { [key: string]: string } {
    return {
      imgId: 'ImgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponseBodyDataKeywordsResult extends $tea.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 133
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 118
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 278
   */
  successCount?: number;
  /**
   * @example
   * xxx
   */
  tips?: string;
  /**
   * @example
   * 529
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordLibResponseBodyData extends $tea.Model {
  keywordsResult?: AddKeywordLibResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordLibResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponseBodyDataKeywordsResult extends $tea.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 6
   */
  successCount?: number;
  /**
   * @example
   * xxxxx
   */
  tips?: string;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsResponseBodyData extends $tea.Model {
  keywordsResult?: AddKeywordsResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordsResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponseBodyDataKeywordsResult extends $tea.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKeywordsToLibResponseBodyData extends $tea.Model {
  keywordsResult?: AddKeywordsToLibResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordsToLibResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListResponseBodyData extends $tea.Model {
  /**
   * @example
   * gj-bucket1
   */
  bucket?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketsListResponseBodyData extends $tea.Model {
  /**
   * @example
   * bucket_test
   */
  bucket?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataLabelStatChartTreeChart extends $tea.Model {
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @example
   * 99.91
   */
  value?: string;
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

export class GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart extends $tea.Model {
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  /**
   * @example
   * 99.91
   */
  value?: string;
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

export class GetCipStatsResponseBodyDataLabelStatChartY extends $tea.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataLabelStatChart extends $tea.Model {
  /**
   * @example
   * nickNameDetection
   */
  serviceCode?: string;
  /**
   * @example
   * 117
   */
  totalCount?: number;
  treeChart?: GetCipStatsResponseBodyDataLabelStatChartTreeChart[];
  voiceTreeChart?: GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataLabelStatChartY[];
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      totalCount: 'TotalCount',
      treeChart: 'TreeChart',
      voiceTreeChart: 'VoiceTreeChart',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      totalCount: 'number',
      treeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartTreeChart },
      voiceTreeChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartVoiceTreeChart },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChartY },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataY extends $tea.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyDataZ extends $tea.Model {
  data?: number[];
  /**
   * @example
   * nickNameDetection
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCipStatsResponseBodyData extends $tea.Model {
  labelStatChart?: GetCipStatsResponseBodyDataLabelStatChart[];
  uids?: string[];
  x?: string[];
  y?: GetCipStatsResponseBodyDataY[];
  z?: GetCipStatsResponseBodyDataZ[];
  static names(): { [key: string]: string } {
    return {
      labelStatChart: 'LabelStatChart',
      uids: 'Uids',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelStatChart: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataLabelStatChart },
      uids: { 'type': 'array', 'itemType': 'string' },
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataY },
      z: { 'type': 'array', 'itemType': GetCipStatsResponseBodyDataZ },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeywordImportResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * xxx
   */
  i18nKey?: string;
  illegalLengthKeywords?: string[];
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  invalidKeywords?: string[];
  /**
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  repeatKeywords?: string[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * xxx
   */
  tips?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      i18nKey: 'I18nKey',
      illegalLengthKeywords: 'IllegalLengthKeywords',
      invalidCount: 'InvalidCount',
      invalidKeywords: 'InvalidKeywords',
      libId: 'LibId',
      progress: 'Progress',
      repeatCount: 'RepeatCount',
      repeatKeywords: 'RepeatKeywords',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      i18nKey: 'string',
      illegalLengthKeywords: { 'type': 'array', 'itemType': 'string' },
      invalidCount: 'number',
      invalidKeywords: { 'type': 'array', 'itemType': 'string' },
      libId: 'string',
      progress: 'number',
      repeatCount: 'number',
      repeatKeywords: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyDataItemsResult extends $tea.Model {
  /**
   * @example
   * 50.0
   */
  confidence?: string;
  /**
   * @example
   * politics
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * dataId
   * 
   * @example
   * 4f27b8cc7c4544cb90b41882a5b36326
   */
  dataId?: string;
  /**
   * @example
   * 22
   */
  endTime?: string;
  /**
   * @example
   * xxx
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 20
   */
  frameCount?: number;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  gmtCreate?: string;
  imageLabels?: { [key: string]: any }[];
  /**
   * @example
   * baselineCheck
   */
  imageService?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @example
   * nonLabel
   */
  labels?: string;
  noLabels?: string[];
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  requestTime?: string;
  result?: GetScanResultResponseBodyDataItemsResult[];
  riskTips?: string;
  riskWords?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 25
   */
  score?: number;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * 11
   */
  startTime?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * vi_s_EbrXb716LyBpkfwxyX5xyh-1A6RY9
   */
  taskId?: string;
  textLabels?: { [key: string]: any }[];
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  thumbnail?: string;
  /**
   * @example
   * 00:00:40-00:00:42
   */
  timeStamp?: string;
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  url?: string;
  voiceLabels?: { [key: string]: any }[];
  /**
   * @example
   * True
   */
  voiceScanOpened?: boolean;
  /**
   * @example
   * live_stream_detection
   */
  voiceService?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataId: 'DataId',
      endTime: 'EndTime',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      frameCount: 'FrameCount',
      gmtCreate: 'GmtCreate',
      imageLabels: 'ImageLabels',
      imageService: 'ImageService',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
      noLabels: 'NoLabels',
      offset: 'Offset',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      result: 'Result',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      scanResult: 'ScanResult',
      score: 'Score',
      serviceCode: 'ServiceCode',
      startTime: 'StartTime',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      textLabels: 'TextLabels',
      thumbnail: 'Thumbnail',
      timeStamp: 'TimeStamp',
      url: 'Url',
      voiceLabels: 'VoiceLabels',
      voiceScanOpened: 'VoiceScanOpened',
      voiceService: 'VoiceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataId: 'string',
      endTime: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      frameCount: 'number',
      gmtCreate: 'string',
      imageLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      imageService: 'string',
      imageUrl: 'string',
      labels: 'string',
      noLabels: { 'type': 'array', 'itemType': 'string' },
      offset: 'number',
      pageNum: 'number',
      requestId: 'string',
      requestTime: 'string',
      result: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItemsResult },
      riskTips: 'string',
      riskWords: 'string',
      scanResult: 'string',
      score: 'number',
      serviceCode: 'string',
      startTime: 'string',
      suggestion: 'string',
      taskId: 'string',
      textLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      thumbnail: 'string',
      timeStamp: 'string',
      url: 'string',
      voiceLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      voiceScanOpened: 'boolean',
      voiceService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetScanResultResponseBodyDataItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBodyDataCustomServiceConf extends $tea.Model {
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBodyData extends $tea.Model {
  customServiceConf?: GetServiceConfigResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2024-05-06 03:07:44
   */
  gmtModified?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 165379****31937
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customServiceConf: GetServiceConfigResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $tea.Model {
  /**
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'CopyFrom',
      isCopy: 'IsCopy',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      isCopy: 'boolean',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItemsConfig extends $tea.Model {
  callbackId?: number;
  /**
   * @example
   * false
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 02:00:00
   */
  executeTime?: string;
  freeze?: boolean;
  freezeHighRisk1?: boolean;
  freezeHighRisk2?: boolean;
  freezeMediumRisk1?: boolean;
  freezeMediumRisk2?: boolean;
  freezeType?: string;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  prefixFilters?: string[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * 0
   */
  scanResourceType?: number;
  scanService?: string[];
  scanServiceInfos?: GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos[];
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  taskCycle?: number;
  static names(): { [key: string]: string } {
    return {
      callbackId: 'CallbackId',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      executeDate: 'ExecuteDate',
      executeTime: 'ExecuteTime',
      freeze: 'Freeze',
      freezeHighRisk1: 'FreezeHighRisk1',
      freezeHighRisk2: 'FreezeHighRisk2',
      freezeMediumRisk1: 'FreezeMediumRisk1',
      freezeMediumRisk2: 'FreezeMediumRisk2',
      freezeType: 'FreezeType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      scanServiceInfos: 'ScanServiceInfos',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackId: 'number',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      executeDate: 'number',
      executeTime: 'string',
      freeze: 'boolean',
      freezeHighRisk1: 'boolean',
      freezeHighRisk2: 'boolean',
      freezeMediumRisk1: 'boolean',
      freezeMediumRisk2: 'boolean',
      freezeType: 'string',
      prefixFilterType: 'string',
      prefixFilters: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'number',
      scanService: { 'type': 'array', 'itemType': 'string' },
      scanServiceInfos: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos },
      startTime: 'string',
      taskCycle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItems extends $tea.Model {
  /**
   * @example
   * tmp
   */
  buckets?: string;
  config?: GetStockOssCheckTasksListResponseBodyItemsConfig;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 02:00:00
   */
  lastExecuteDate?: string;
  /**
   * @example
   * video
   */
  mediaType?: number;
  /**
   * @example
   * 02:00:00
   */
  nextExecuteDate?: string;
  /**
   * @example
   * 10
   */
  objectNum?: number;
  /**
   * @example
   * 10
   */
  searchNum?: number;
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * P_XHDUS
   */
  taskId?: string;
  taskName?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      config: 'Config',
      endTime: 'EndTime',
      finishNum: 'FinishNum',
      isInc: 'IsInc',
      lastExecuteDate: 'LastExecuteDate',
      mediaType: 'MediaType',
      nextExecuteDate: 'NextExecuteDate',
      objectNum: 'ObjectNum',
      searchNum: 'SearchNum',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      config: GetStockOssCheckTasksListResponseBodyItemsConfig,
      endTime: 'string',
      finishNum: 'number',
      isInc: 'boolean',
      lastExecuteDate: 'string',
      mediaType: 'number',
      nextExecuteDate: 'string',
      objectNum: 'number',
      searchNum: 'number',
      startTime: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyDataItemsResult extends $tea.Model {
  /**
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @example
   * political_n
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyDataItems extends $tea.Model {
  content?: string;
  /**
   * @example
   * miss
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  gmtCreate?: string;
  /**
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-07-11 14:21:36
   */
  requestTime?: string;
  result?: GetTextScanResultResponseBodyDataItemsResult[];
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * txtwkgb******AsYNXoJswy-1Aa1Qk
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      labels: 'Labels',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      result: 'Result',
      scanResult: 'ScanResult',
      score: 'Score',
      serviceCode: 'ServiceCode',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      labels: 'string',
      requestId: 'string',
      requestTime: 'string',
      result: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItemsResult },
      scanResult: 'string',
      score: 'number',
      serviceCode: 'string',
      suggestion: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextScanResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetTextScanResultResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetTextScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: number;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      indebt: 'Indebt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      buy: 'boolean',
      indebt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLibResponseBodyLibList extends $tea.Model {
  comment?: string;
  /**
   * @example
   * 1
   */
  freeInspection?: number;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  imageNum?: number;
  /**
   * @example
   * custom_xxxx
   */
  libId?: string;
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageNum: 'ImageNum',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageNum: 'number',
      libId: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesFromLibResponseBodyItems extends $tea.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtCreate?: string;
  /**
   * @example
   * 112
   */
  imageId?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com/image/upload/IMG_2123.jpg
   */
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      imageId: 'string',
      imageUrl: 'string',
      thumbnailUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtModified?: string;
  /**
   * @example
   * 10
   */
  keywordCount?: string;
  /**
   * @example
   * custom_xxxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBodyDataItems extends $tea.Model {
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-06-03 14:43:03
   */
  gmtModified?: string;
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * custom_xxxx
   */
  keywordLibId?: string;
  /**
   * @example
   * 4205334
   */
  keywordMd5Id?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      keywordLibId: 'KeywordLibId',
      keywordMd5Id: 'KeywordMd5Id',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      keywordLibId: 'string',
      keywordMd5Id: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListKeywordsResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListKeywordsResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponseBodyItems extends $tea.Model {
  /**
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  freezeStatus?: string;
  freezeType?: string;
  /**
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @example
   * dhT20X2310
   */
  jobName?: string;
  labels?: string[];
  labels2?: string[];
  /**
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  riskLevel?: string;
  riskLevel0?: string;
  riskLevel2?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  serviceName?: string;
  /**
   * @example
   * EP6TI7_au_Zo25ITvCbkocNuF801QOQX
   */
  taskId?: string;
  /**
   * @example
   * http://www.aliyuncs.com/test.mp3
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      code: 'Code',
      contentType: 'ContentType',
      copyFrom: 'CopyFrom',
      freezeStatus: 'FreezeStatus',
      freezeType: 'FreezeType',
      imageUrl: 'ImageUrl',
      isCopy: 'IsCopy',
      jobName: 'JobName',
      labels: 'Labels',
      labels2: 'Labels2',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      code: 'string',
      contentType: 'string',
      copyFrom: 'string',
      freezeStatus: 'string',
      freezeType: 'string',
      imageUrl: 'string',
      isCopy: 'boolean',
      jobName: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      md5: 'string',
      msg: 'string',
      object: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule extends $tea.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule extends $tea.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRules extends $tea.Model {
  imageScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule;
  /**
   * @example
   * 1
   */
  index?: number;
  textScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule;
  static names(): { [key: string]: string } {
    return {
      imageScanRule: 'ImageScanRule',
      index: 'Index',
      textScanRule: 'TextScanRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule,
      index: 'number',
      textScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConf extends $tea.Model {
  /**
   * @example
   * audio_media_detection
   */
  audioService?: string;
  imageService?: string[];
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  rules?: ListServiceConfigsResponseBodyDataCustomServiceConfRules[];
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      audioService: 'AudioService',
      imageService: 'ImageService',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      rules: 'Rules',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioService: 'string',
      imageService: { 'type': 'array', 'itemType': 'string' },
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyDataCustomServiceConfRules },
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyData extends $tea.Model {
  classify?: string;
  /**
   * @example
   * nickname_detection
   */
  copyFrom?: string;
  customServiceConf?: ListServiceConfigsResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2023-07-11 15:40:04
   */
  gmtModified?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  /**
   * @example
   * plus
   */
  serviceType?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1674*****0071291
   */
  uid?: string;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      copyFrom: 'CopyFrom',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      option: 'Option',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      uid: 'Uid',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      copyFrom: 'string',
      customServiceConf: ListServiceConfigsResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
      serviceType: 'string',
      uid: 'string',
      useStatus: 'string',
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
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLibResponse
   */
  async addImageLibWithOptions(request: AddImageLibRequest, runtime: $Util.RuntimeOptions): Promise<AddImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImageLibResponse>(await this.callApi(params, req, runtime), new AddImageLibResponse({}));
  }

  /**
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @returns AddImageLibResponse
   */
  async addImageLib(request: AddImageLibRequest): Promise<AddImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImageLibWithOptions(request, runtime);
  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImages2LibResponse
   */
  async addImages2LibWithOptions(request: AddImages2LibRequest, runtime: $Util.RuntimeOptions): Promise<AddImages2LibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imgUrl)) {
      body["ImgUrl"] = request.imgUrl;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImages2Lib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImages2LibResponse>(await this.callApi(params, req, runtime), new AddImages2LibResponse({}));
  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @returns AddImages2LibResponse
   */
  async addImages2Lib(request: AddImages2LibRequest): Promise<AddImages2LibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImages2LibWithOptions(request, runtime);
  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordLibResponse
   */
  async addKeywordLibWithOptions(request: AddKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<AddKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!Util.isUnset(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddKeywordLibResponse>(await this.callApi(params, req, runtime), new AddKeywordLibResponse({}));
  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @returns AddKeywordLibResponse
   */
  async addKeywordLib(request: AddKeywordLibRequest): Promise<AddKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addKeywordLibWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsResponse
   */
  async addKeywordsWithOptions(request: AddKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<AddKeywordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddKeywordsResponse>(await this.callApi(params, req, runtime), new AddKeywordsResponse({}));
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @returns AddKeywordsResponse
   */
  async addKeywords(request: AddKeywordsRequest): Promise<AddKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addKeywordsWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLibWithOptions(request: AddKeywordsToLibRequest, runtime: $Util.RuntimeOptions): Promise<AddKeywordsToLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddKeywordsToLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddKeywordsToLibResponse>(await this.callApi(params, req, runtime), new AddKeywordsToLibResponse({}));
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLib(request: AddKeywordsToLibRequest): Promise<AddKeywordsToLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addKeywordsToLibWithOptions(request, runtime);
  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTaskWithOptions(request: CancelStockOssCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelStockOssCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new CancelStockOssCheckTaskResponse({}));
  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTask(request: CancelStockOssCheckTaskRequest): Promise<CancelStockOssCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfigWithOptions(request: CopyServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<CopyServiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CopyServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyServiceConfigResponse>(await this.callApi(params, req, runtime), new CopyServiceConfigResponse({}));
  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfig(request: CopyServiceConfigRequest): Promise<CopyServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyServiceConfigWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTaskWithOptions(request: CreatStockOssCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreatStockOssCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!Util.isUnset(request.callbackId)) {
      query["CallbackId"] = request.callbackId;
    }

    if (!Util.isUnset(request.distinctHistoryTasks)) {
      query["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeDate)) {
      query["ExecuteDate"] = request.executeDate;
    }

    if (!Util.isUnset(request.executeTime)) {
      query["ExecuteTime"] = request.executeTime;
    }

    if (!Util.isUnset(request.freeze)) {
      query["Freeze"] = request.freeze;
    }

    if (!Util.isUnset(request.freezeHighRisk1)) {
      query["FreezeHighRisk1"] = request.freezeHighRisk1;
    }

    if (!Util.isUnset(request.freezeHighRisk2)) {
      query["FreezeHighRisk2"] = request.freezeHighRisk2;
    }

    if (!Util.isUnset(request.freezeMediumRisk1)) {
      query["FreezeMediumRisk1"] = request.freezeMediumRisk1;
    }

    if (!Util.isUnset(request.freezeMediumRisk2)) {
      query["FreezeMediumRisk2"] = request.freezeMediumRisk2;
    }

    if (!Util.isUnset(request.freezeType)) {
      query["FreezeType"] = request.freezeType;
    }

    if (!Util.isUnset(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.prefixFilterType)) {
      query["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!Util.isUnset(request.prefixFilters)) {
      query["PrefixFilters"] = request.prefixFilters;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scanLimit)) {
      query["ScanLimit"] = request.scanLimit;
    }

    if (!Util.isUnset(request.scanNoFileType)) {
      query["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!Util.isUnset(request.scanResourceType)) {
      query["ScanResourceType"] = request.scanResourceType;
    }

    if (!Util.isUnset(request.scanService)) {
      query["ScanService"] = request.scanService;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskCycle)) {
      query["TaskCycle"] = request.taskCycle;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new CreatStockOssCheckTaskResponse({}));
  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTask(request: CreatStockOssCheckTaskRequest): Promise<CreatStockOssCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.creatStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePreCheckResponse
   */
  async createPreCheckWithOptions(request: CreatePreCheckRequest, runtime: $Util.RuntimeOptions): Promise<CreatePreCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!Util.isUnset(request.distinctHistoryTasks)) {
      body["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isInc)) {
      body["IsInc"] = request.isInc;
    }

    if (!Util.isUnset(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.prefixFilterType)) {
      body["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!Util.isUnset(request.prefixFilters)) {
      body["PrefixFilters"] = request.prefixFilters;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.scanLimit)) {
      body["ScanLimit"] = request.scanLimit;
    }

    if (!Util.isUnset(request.scanNoFileType)) {
      body["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!Util.isUnset(request.scanService)) {
      body["ScanService"] = request.scanService;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePreCheck",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePreCheckResponse>(await this.callApi(params, req, runtime), new CreatePreCheckResponse({}));
  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @returns CreatePreCheckResponse
   */
  async createPreCheck(request: CreatePreCheckRequest): Promise<CreatePreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPreCheckWithOptions(request, runtime);
  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLibWithOptions(request: DeleteImagesFromLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesFromLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageIds)) {
      body["ImageIds"] = request.imageIds;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImagesFromLibResponse>(await this.callApi(params, req, runtime), new DeleteImagesFromLibResponse({}));
  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLib(request: DeleteImagesFromLibRequest): Promise<DeleteImagesFromLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordResponse
   */
  async deleteKeywordWithOptions(request: DeleteKeywordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeywordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywordIds)) {
      body["KeywordIds"] = request.keywordIds;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeywordResponse>(await this.callApi(params, req, runtime), new DeleteKeywordResponse({}));
  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @returns DeleteKeywordResponse
   */
  async deleteKeyword(request: DeleteKeywordRequest): Promise<DeleteKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeywordWithOptions(request, runtime);
  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLibWithOptions(request: DeleteKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteKeywordLibResponse>(await this.callApi(params, req, runtime), new DeleteKeywordLibResponse({}));
  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLib(request: DeleteKeywordLibRequest): Promise<DeleteKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeywordLibWithOptions(request, runtime);
  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCipStatsResponse
   */
  async exportCipStatsWithOptions(request: ExportCipStatsRequest, runtime: $Util.RuntimeOptions): Promise<ExportCipStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportCipStatsResponse>(await this.callApi(params, req, runtime), new ExportCipStatsResponse({}));
  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @returns ExportCipStatsResponse
   */
  async exportCipStats(request: ExportCipStatsRequest): Promise<ExportCipStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportCipStatsWithOptions(request, runtime);
  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportKeywordResponse
   */
  async exportKeywordWithOptions(request: ExportKeywordRequest, runtime: $Util.RuntimeOptions): Promise<ExportKeywordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportKeywordResponse>(await this.callApi(params, req, runtime), new ExportKeywordResponse({}));
  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @returns ExportKeywordResponse
   */
  async exportKeyword(request: ExportKeywordRequest): Promise<ExportKeywordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportKeywordWithOptions(request, runtime);
  }

  /**
   * 导出oss扫描结果
   * 
   * @param tmpReq - ExportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportResultResponse
   */
  async exportResultWithOptions(tmpReq: ExportResultRequest, runtime: $Util.RuntimeOptions): Promise<ExportResultResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportResultResponse>(await this.callApi(params, req, runtime), new ExportResultResponse({}));
  }

  /**
   * 导出oss扫描结果
   * 
   * @param request - ExportResultRequest
   * @returns ExportResultResponse
   */
  async exportResult(request: ExportResultRequest): Promise<ExportResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportScanResultResponse
   */
  async exportScanResultWithOptions(tmpReq: ExportScanResultRequest, runtime: $Util.RuntimeOptions): Promise<ExportScanResultResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportScanResultResponse>(await this.callApi(params, req, runtime), new ExportScanResultResponse({}));
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportScanResultRequest
   * @returns ExportScanResultResponse
   */
  async exportScanResult(request: ExportScanResultRequest): Promise<ExportScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportScanResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResultWithOptions(tmpReq: ExportTextScanResultRequest, runtime: $Util.RuntimeOptions): Promise<ExportTextScanResultResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportTextScanResultResponse>(await this.callApi(params, req, runtime), new ExportTextScanResultResponse({}));
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportTextScanResultRequest
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResult(request: ExportTextScanResultRequest): Promise<ExportTextScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportTextScanResultWithOptions(request, runtime);
  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsListWithOptions(request: GetBackupBucketsListRequest, runtime: $Util.RuntimeOptions): Promise<GetBackupBucketsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBackupBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackupBucketsListResponse>(await this.callApi(params, req, runtime), new GetBackupBucketsListResponse({}));
  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsList(request: GetBackupBucketsListRequest): Promise<GetBackupBucketsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupBucketsListWithOptions(request, runtime);
  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupConfigResponse
   */
  async getBackupConfigWithOptions(request: GetBackupConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetBackupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackupConfigResponse>(await this.callApi(params, req, runtime), new GetBackupConfigResponse({}));
  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @returns GetBackupConfigResponse
   */
  async getBackupConfig(request: GetBackupConfigRequest): Promise<GetBackupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupConfigWithOptions(request, runtime);
  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupStatusResponse
   */
  async getBackupStatusWithOptions(request: GetBackupStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetBackupStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBackupStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackupStatusResponse>(await this.callApi(params, req, runtime), new GetBackupStatusResponse({}));
  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @returns GetBackupStatusResponse
   */
  async getBackupStatus(request: GetBackupStatusRequest): Promise<GetBackupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupStatusWithOptions(request, runtime);
  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketsListResponse
   */
  async getBucketsListWithOptions(request: GetBucketsListRequest, runtime: $Util.RuntimeOptions): Promise<GetBucketsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBucketsListResponse>(await this.callApi(params, req, runtime), new GetBucketsListResponse({}));
  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @returns GetBucketsListResponse
   */
  async getBucketsList(request: GetBucketsListRequest): Promise<GetBucketsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBucketsListWithOptions(request, runtime);
  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCipStatsResponse
   */
  async getCipStatsWithOptions(request: GetCipStatsRequest, runtime: $Util.RuntimeOptions): Promise<GetCipStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.label)) {
      body["Label"] = request.label;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCipStatsResponse>(await this.callApi(params, req, runtime), new GetCipStatsResponse({}));
  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @returns GetCipStatsResponse
   */
  async getCipStats(request: GetCipStatsRequest): Promise<GetCipStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCipStatsWithOptions(request, runtime);
  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTimeWithOptions(request: GetExecuteTimeRequest, runtime: $Util.RuntimeOptions): Promise<GetExecuteTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExecuteTime",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExecuteTimeResponse>(await this.callApi(params, req, runtime), new GetExecuteTimeResponse({}));
  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTime(request: GetExecuteTimeRequest): Promise<GetExecuteTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecuteTimeWithOptions(request, runtime);
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConfWithOptions(request: GetImageSceneLabelListConfRequest, runtime: $Util.RuntimeOptions): Promise<GetImageSceneLabelListConfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageServiceCode)) {
      query["ImageServiceCode"] = request.imageServiceCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImageSceneLabelListConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageSceneLabelListConfResponse>(await this.callApi(params, req, runtime), new GetImageSceneLabelListConfResponse({}));
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConf(request: GetImageSceneLabelListConfRequest): Promise<GetImageSceneLabelListConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageSceneLabelListConfWithOptions(request, runtime);
  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param tmpReq - GetJobNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobNameListResponse
   */
  async getJobNameListWithOptions(tmpReq: GetJobNameListRequest, runtime: $Util.RuntimeOptions): Promise<GetJobNameListResponse> {
    Util.validateModel(tmpReq);
    let request = new GetJobNameListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobNameList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobNameListResponse>(await this.callApi(params, req, runtime), new GetJobNameListResponse({}));
  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param request - GetJobNameListRequest
   * @returns GetJobNameListResponse
   */
  async getJobNameList(request: GetJobNameListRequest): Promise<GetJobNameListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobNameListWithOptions(request, runtime);
  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResultWithOptions(request: GetKeywordImportResultRequest, runtime: $Util.RuntimeOptions): Promise<GetKeywordImportResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetKeywordImportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKeywordImportResultResponse>(await this.callApi(params, req, runtime), new GetKeywordImportResultResponse({}));
  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResult(request: GetKeywordImportResultRequest): Promise<GetKeywordImportResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeywordImportResultWithOptions(request, runtime);
  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatusWithOptions(request: GetOssCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOssCheckStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssCheckStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssCheckStatusResponse>(await this.callApi(params, req, runtime), new GetOssCheckStatusResponse({}));
  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatus(request: GetOssCheckStatusRequest): Promise<GetOssCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssCheckStatusWithOptions(request, runtime);
  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanNumResponse
   */
  async getScanNumWithOptions(request: GetScanNumRequest, runtime: $Util.RuntimeOptions): Promise<GetScanNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!Util.isUnset(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScanNum",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScanNumResponse>(await this.callApi(params, req, runtime), new GetScanNumResponse({}));
  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @returns GetScanNumResponse
   */
  async getScanNum(request: GetScanNumRequest): Promise<GetScanNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScanNumWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanResultResponse
   */
  async getScanResultWithOptions(tmpReq: GetScanResultRequest, runtime: $Util.RuntimeOptions): Promise<GetScanResultResponse> {
    Util.validateModel(tmpReq);
    let request = new GetScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScanResultResponse>(await this.callApi(params, req, runtime), new GetScanResultResponse({}));
  }

  /**
   * 查询调用结果
   * 
   * @param request - GetScanResultRequest
   * @returns GetScanResultResponse
   */
  async getScanResult(request: GetScanResultRequest): Promise<GetScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScanResultWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfResponse
   */
  async getServiceConfWithOptions(request: GetServiceConfRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceConfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.byDefault)) {
      body["ByDefault"] = request.byDefault;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceConfResponse>(await this.callApi(params, req, runtime), new GetServiceConfResponse({}));
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @returns GetServiceConfResponse
   */
  async getServiceConf(request: GetServiceConfRequest): Promise<GetServiceConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceConfWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfigResponse
   */
  async getServiceConfigWithOptions(request: GetServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceConfigResponse>(await this.callApi(params, req, runtime), new GetServiceConfigResponse({}));
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @returns GetServiceConfigResponse
   */
  async getServiceConfig(request: GetServiceConfigRequest): Promise<GetServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceConfigWithOptions(request, runtime);
  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfigWithOptions(request: GetServiceLabelConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLabelConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceLabelConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceLabelConfigResponse>(await this.callApi(params, req, runtime), new GetServiceLabelConfigResponse({}));
  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfig(request: GetServiceLabelConfigRequest): Promise<GetServiceLabelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLabelConfigWithOptions(request, runtime);
  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param tmpReq - GetStockOssCheckTasksListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksListWithOptions(tmpReq: GetStockOssCheckTasksListRequest, runtime: $Util.RuntimeOptions): Promise<GetStockOssCheckTasksListResponse> {
    Util.validateModel(tmpReq);
    let request = new GetStockOssCheckTasksListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetStockOssCheckTasksList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStockOssCheckTasksListResponse>(await this.callApi(params, req, runtime), new GetStockOssCheckTasksListResponse({}));
  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param request - GetStockOssCheckTasksListRequest
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksList(request: GetStockOssCheckTasksListRequest): Promise<GetStockOssCheckTasksListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStockOssCheckTasksListWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextScanResultResponse
   */
  async getTextScanResultWithOptions(tmpReq: GetTextScanResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTextScanResultResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTextScanResultResponse>(await this.callApi(params, req, runtime), new GetTextScanResultResponse({}));
  }

  /**
   * 查询调用结果
   * 
   * @param request - GetTextScanResultRequest
   * @returns GetTextScanResultResponse
   */
  async getTextScanResult(request: GetTextScanResultRequest): Promise<GetTextScanResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTextScanResultWithOptions(request, runtime);
  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadInfoResponse
   */
  async getUploadInfoWithOptions(request: GetUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadInfoResponse>(await this.callApi(params, req, runtime), new GetUploadInfoResponse({}));
  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @returns GetUploadInfoResponse
   */
  async getUploadInfo(request: GetUploadInfoRequest): Promise<GetUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadInfoWithOptions(request, runtime);
  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatusWithOptions(request: GetUserBuyStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetUserBuyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserBuyStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserBuyStatusResponse>(await this.callApi(params, req, runtime), new GetUserBuyStatusResponse({}));
  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatus(request: GetUserBuyStatusRequest): Promise<GetUserBuyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLibResponse
   */
  async listImageLibWithOptions(request: ListImageLibRequest, runtime: $Util.RuntimeOptions): Promise<ListImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImageLibResponse>(await this.callApi(params, req, runtime), new ListImageLibResponse({}));
  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @returns ListImageLibResponse
   */
  async listImageLib(request: ListImageLibRequest): Promise<ListImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImageLibWithOptions(request, runtime);
  }

  /**
   * 图片列表 分页
   * 
   * @param tmpReq - ListImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLibWithOptions(tmpReq: ListImagesFromLibRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesFromLibResponse> {
    Util.validateModel(tmpReq);
    let request = new ListImagesFromLibShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.imgId)) {
      body["ImgId"] = request.imgId;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesFromLibResponse>(await this.callApi(params, req, runtime), new ListImagesFromLibResponse({}));
  }

  /**
   * 图片列表 分页
   * 
   * @param request - ListImagesFromLibRequest
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLib(request: ListImagesFromLibRequest): Promise<ListImagesFromLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibsWithOptions(request: ListKeywordLibsRequest, runtime: $Util.RuntimeOptions): Promise<ListKeywordLibsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKeywordLibs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListKeywordLibsResponse>(await this.callApi(params, req, runtime), new ListKeywordLibsResponse({}));
  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibs(request: ListKeywordLibsRequest): Promise<ListKeywordLibsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeywordLibsWithOptions(request, runtime);
  }

  /**
   * 查询关键词列表
   * 
   * @param tmpReq - ListKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordsResponse
   */
  async listKeywordsWithOptions(tmpReq: ListKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<ListKeywordsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListKeywordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.word)) {
      body["Word"] = request.word;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListKeywordsResponse>(await this.callApi(params, req, runtime), new ListKeywordsResponse({}));
  }

  /**
   * 查询关键词列表
   * 
   * @param request - ListKeywordsRequest
   * @returns ListKeywordsResponse
   */
  async listKeywords(request: ListKeywordsRequest): Promise<ListKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeywordsWithOptions(request, runtime);
  }

  /**
   * oss扫描结果查询
   * 
   * @param tmpReq - ListOssCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResultWithOptions(tmpReq: ListOssCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<ListOssCheckResultResponse> {
    Util.validateModel(tmpReq);
    let request = new ListOssCheckResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.finishNum)) {
      query["FinishNum"] = request.finishNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOssCheckResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOssCheckResultResponse>(await this.callApi(params, req, runtime), new ListOssCheckResultResponse({}));
  }

  /**
   * oss扫描结果查询
   * 
   * @param request - ListOssCheckResultRequest
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResult(request: ListOssCheckResultRequest): Promise<ListOssCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOssCheckResultWithOptions(request, runtime);
  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigsWithOptions(request: ListServiceConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.useStatus)) {
      query["UseStatus"] = request.useStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceConfigs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceConfigsResponse>(await this.callApi(params, req, runtime), new ListServiceConfigsResponse({}));
  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigs(request: ListServiceConfigsRequest): Promise<ListServiceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceConfigsWithOptions(request, runtime);
  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfoWithOptions(request: ModifyServiceInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyServiceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyServiceInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyServiceInfoResponse>(await this.callApi(params, req, runtime), new ModifyServiceInfoResponse({}));
  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfo(request: ModifyServiceInfoRequest): Promise<ModifyServiceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyServiceInfoWithOptions(request, runtime);
  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfigWithOptions(request: UpdateBackupConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBackupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupConfig)) {
      query["BackupConfig"] = request.backupConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBackupConfigResponse>(await this.callApi(params, req, runtime), new UpdateBackupConfigResponse({}));
  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfig(request: UpdateBackupConfigRequest): Promise<UpdateBackupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBackupConfigWithOptions(request, runtime);
  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibResponse
   */
  async updateImageLibWithOptions(request: UpdateImageLibRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.freeInspection)) {
      body["FreeInspection"] = request.freeInspection;
    }

    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!Util.isUnset(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageLibResponse>(await this.callApi(params, req, runtime), new UpdateImageLibResponse({}));
  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @returns UpdateImageLibResponse
   */
  async updateImageLib(request: UpdateImageLibRequest): Promise<UpdateImageLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageLibWithOptions(request, runtime);
  }

  /**
   * 编辑图库免检配置
   * 
   * @param tmpReq - UpdateImageLibFreeInspectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspectionWithOptions(tmpReq: UpdateImageLibFreeInspectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageLibFreeInspectionResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateImageLibFreeInspectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImageLibFreeInspection",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageLibFreeInspectionResponse>(await this.callApi(params, req, runtime), new UpdateImageLibFreeInspectionResponse({}));
  }

  /**
   * 编辑图库免检配置
   * 
   * @param request - UpdateImageLibFreeInspectionRequest
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspection(request: UpdateImageLibFreeInspectionRequest): Promise<UpdateImageLibFreeInspectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageLibFreeInspectionWithOptions(request, runtime);
  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLibWithOptions(request: UpdateKeywordLibRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKeywordLibResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!Util.isUnset(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateKeywordLibResponse>(await this.callApi(params, req, runtime), new UpdateKeywordLibResponse({}));
  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLib(request: UpdateKeywordLibRequest): Promise<UpdateKeywordLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeywordLibWithOptions(request, runtime);
  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedbackWithOptions(request: UpdateScanResultFeedbackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScanResultFeedbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.feedback)) {
      body["Feedback"] = request.feedback;
    }

    if (!Util.isUnset(request.queryRequestId)) {
      body["QueryRequestId"] = request.queryRequestId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScanResultFeedback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScanResultFeedbackResponse>(await this.callApi(params, req, runtime), new UpdateScanResultFeedbackResponse({}));
  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedback(request: UpdateScanResultFeedbackRequest): Promise<UpdateScanResultFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScanResultFeedbackWithOptions(request, runtime);
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfigWithOptions(request: UpdateServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileConfig)) {
      body["FileConfig"] = request.fileConfig;
    }

    if (!Util.isUnset(request.keywordFilterLibs)) {
      body["KeywordFilterLibs"] = request.keywordFilterLibs;
    }

    if (!Util.isUnset(request.keywordHitLibs)) {
      body["KeywordHitLibs"] = request.keywordHitLibs;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.sceneConfig)) {
      body["SceneConfig"] = request.sceneConfig;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.videoConfig)) {
      body["VideoConfig"] = request.videoConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceConfigResponse>(await this.callApi(params, req, runtime), new UpdateServiceConfigResponse({}));
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfig(request: UpdateServiceConfigRequest): Promise<UpdateServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceConfigWithOptions(request, runtime);
  }

}
