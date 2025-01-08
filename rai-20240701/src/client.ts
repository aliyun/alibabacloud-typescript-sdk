// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchContentAsyncDetectRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameterList?: BatchContentAsyncDetectRequestServiceParameterList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameterList: 'serviceParameterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentAsyncDetectRequestServiceParameterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentAsyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 9736C44E-F718-566B-821F-710216aAAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****F68692
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchContentAsyncDetectResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchContentAsyncDetectResponseBody;
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
      body: BatchContentAsyncDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   * imageDetection
   */
  serviceName?: string;
  serviceParameterList?: BatchContentSyncDetectRequestServiceParameterList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameterList: 'serviceParameterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameterList: { 'type': 'array', 'itemType': BatchContentSyncDetectRequestServiceParameterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentSyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchContentSyncDetectResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchContentSyncDetectResponseBody;
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
      body: BatchContentSyncDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountRequest extends $tea.Model {
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

export class CheckAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: CheckAccountResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CheckAccountResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccountResponseBody;
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
      body: CheckAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameter?: ContentAsyncDetectRequestServiceParameter;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameter: 'serviceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameter: ContentAsyncDetectRequestServiceParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ContentAsyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ContentAsyncDetectResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContentAsyncDetectResponseBody;
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
      body: ContentAsyncDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * ""
   */
  sceneName?: string;
  /**
   * @example
   * textDetection
   */
  serviceName?: string;
  serviceParameter?: ContentSyncDetectRequestServiceParameter;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sceneName: 'SceneName',
      serviceName: 'ServiceName',
      serviceParameter: 'serviceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sceneName: 'string',
      serviceName: 'string',
      serviceParameter: ContentSyncDetectRequestServiceParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ContentSyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ContentSyncDetectResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContentSyncDetectResponseBody;
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
      body: ContentSyncDetectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultRequest extends $tea.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
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

export class GetContentDetectResultResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: GetContentDetectResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContentDetectResultResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContentDetectResultResponseBody;
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
      body: GetContentDetectResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
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
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: ListSensitiveWordResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSensitiveWordResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSensitiveWordResponseBody;
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
      body: ListSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAccountRequest extends $tea.Model {
  /**
   * @example
   * "user api register"
   */
  memo?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memo: 'Memo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAccountResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterAccountResponseBody;
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
      body: RegisterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordRequest extends $tea.Model {
  bodyData?: SyncSensitiveWordRequestBodyData;
  /**
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      commit: 'Commit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: SyncSensitiveWordRequestBodyData,
      commit: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordShrinkRequest extends $tea.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      commit: 'Commit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      commit: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponseBody extends $tea.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: SyncSensitiveWordResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SyncSensitiveWordResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncSensitiveWordResponseBody;
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
      body: SyncSensitiveWordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectRequestServiceParameterList extends $tea.Model {
  /**
   * @example
   * "XXXXXXXX"
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentAsyncDetectResponseBodyData extends $tea.Model {
  /**
   * @example
   * 19657954336
   */
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

export class BatchContentSyncDetectRequestServiceParameterList extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBodyDataDetectResultList extends $tea.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchContentSyncDetectResponseBodyData extends $tea.Model {
  detectResultList?: BatchContentSyncDetectResponseBodyDataDetectResultList[];
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': BatchContentSyncDetectResponseBodyDataDetectResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  checkResult?: number;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectRequestServiceParameter extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentAsyncDetectResponseBodyData extends $tea.Model {
  /**
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
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

export class ContentSyncDetectRequestServiceParameter extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentSyncDetectResponseBodyData extends $tea.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponseBodyDataDetectResultList extends $tea.Model {
  riskInfo?: string;
  /**
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskInfo: 'string',
      riskResult: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentDetectResultResponseBodyData extends $tea.Model {
  detectResultList?: GetContentDetectResultResponseBodyDataDetectResultList[];
  /**
   * @example
   * 10
   */
  processedCount?: number;
  taskId?: string;
  /**
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectResultList: 'DetectResultList',
      processedCount: 'ProcessedCount',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectResultList: { 'type': 'array', 'itemType': GetContentDetectResultResponseBodyDataDetectResultList },
      processedCount: 'number',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBodyDataSensitiveWordList extends $tea.Model {
  /**
   * @example
   * 387907
   */
  id?: number;
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveWordResponseBodyData extends $tea.Model {
  /**
   * @example
   * 10000
   */
  maxCount?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  sensitiveWordList?: ListSensitiveWordResponseBodyDataSensitiveWordList[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sensitiveWordList: 'SensitiveWordList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sensitiveWordList: { 'type': 'array', 'itemType': ListSensitiveWordResponseBodyDataSensitiveWordList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordRequestBodyDataSensitiveWordList extends $tea.Model {
  /**
   * @example
   * 341806
   */
  id?: number;
  label?: string;
  status?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordRequestBodyData extends $tea.Model {
  sensitiveWordList?: SyncSensitiveWordRequestBodyDataSensitiveWordList[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordList: 'SensitiveWordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordList: { 'type': 'array', 'itemType': SyncSensitiveWordRequestBodyDataSensitiveWordList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponseBodyDataSensitiveWordErrorList extends $tea.Model {
  /**
   * @example
   * ""
   */
  errMessage?: string;
  /**
   * @example
   * 1
   */
  errStatus?: number;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * contraband
   */
  label?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      errStatus: 'ErrStatus',
      index: 'Index',
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      errStatus: 'number',
      index: 'number',
      label: 'string',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSensitiveWordResponseBodyData extends $tea.Model {
  sensitiveWordErrorList?: SyncSensitiveWordResponseBodyDataSensitiveWordErrorList[];
  static names(): { [key: string]: string } {
    return {
      sensitiveWordErrorList: 'SensitiveWordErrorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveWordErrorList: { 'type': 'array', 'itemType': SyncSensitiveWordResponseBodyDataSensitiveWordErrorList },
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
    this._endpoint = this.getEndpoint("rai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetectWithOptions(request: BatchContentAsyncDetectRequest, runtime: $Util.RuntimeOptions): Promise<BatchContentAsyncDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new BatchContentAsyncDetectResponse({}));
  }

  /**
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetect(request: BatchContentAsyncDetectRequest): Promise<BatchContentAsyncDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetectWithOptions(request: BatchContentSyncDetectRequest, runtime: $Util.RuntimeOptions): Promise<BatchContentSyncDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchContentSyncDetectResponse>(await this.callApi(params, req, runtime), new BatchContentSyncDetectResponse({}));
  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetect(request: BatchContentSyncDetectRequest): Promise<BatchContentSyncDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountResponse
   */
  async checkAccountWithOptions(request: CheckAccountRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAccountResponse>(await this.callApi(params, req, runtime), new CheckAccountResponse({}));
  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @returns CheckAccountResponse
   */
  async checkAccount(request: CheckAccountRequest): Promise<CheckAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountWithOptions(request, runtime);
  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetectWithOptions(request: ContentAsyncDetectRequest, runtime: $Util.RuntimeOptions): Promise<ContentAsyncDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new ContentAsyncDetectResponse({}));
  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetect(request: ContentAsyncDetectRequest): Promise<ContentAsyncDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetectWithOptions(request: ContentSyncDetectRequest, runtime: $Util.RuntimeOptions): Promise<ContentSyncDetectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ContentSyncDetectResponse>(await this.callApi(params, req, runtime), new ContentSyncDetectResponse({}));
  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetect(request: ContentSyncDetectRequest): Promise<ContentSyncDetectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contentSyncDetectWithOptions(request, runtime);
  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResultWithOptions(request: GetContentDetectResultRequest, runtime: $Util.RuntimeOptions): Promise<GetContentDetectResultResponse> {
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
      action: "GetContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetContentDetectResultResponse>(await this.callApi(params, req, runtime), new GetContentDetectResultResponse({}));
  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResult(request: GetContentDetectResultRequest): Promise<GetContentDetectResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContentDetectResultWithOptions(request, runtime);
  }

  /**
   * ListSensitiveWord
   * 
   * @param request - ListSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSensitiveWordResponse
   */
  async listSensitiveWordWithOptions(request: ListSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<ListSensitiveWordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSensitiveWord",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSensitiveWordResponse>(await this.callApi(params, req, runtime), new ListSensitiveWordResponse({}));
  }

  /**
   * ListSensitiveWord
   * 
   * @param request - ListSensitiveWordRequest
   * @returns ListSensitiveWordResponse
   */
  async listSensitiveWord(request: ListSensitiveWordRequest): Promise<ListSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSensitiveWordWithOptions(request, runtime);
  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterAccountResponse
   */
  async registerAccountWithOptions(request: RegisterAccountRequest, runtime: $Util.RuntimeOptions): Promise<RegisterAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterAccountResponse>(await this.callApi(params, req, runtime), new RegisterAccountResponse({}));
  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @returns RegisterAccountResponse
   */
  async registerAccount(request: RegisterAccountRequest): Promise<RegisterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerAccountWithOptions(request, runtime);
  }

  /**
   * SyncSensitiveWord
   * 
   * @param tmpReq - SyncSensitiveWordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSensitiveWordResponse
   */
  async syncSensitiveWordWithOptions(tmpReq: SyncSensitiveWordRequest, runtime: $Util.RuntimeOptions): Promise<SyncSensitiveWordResponse> {
    Util.validateModel(tmpReq);
    let request = new SyncSensitiveWordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commit)) {
      query["Commit"] = request.commit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncSensitiveWord",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncSensitiveWordResponse>(await this.callApi(params, req, runtime), new SyncSensitiveWordResponse({}));
  }

  /**
   * SyncSensitiveWord
   * 
   * @param request - SyncSensitiveWordRequest
   * @returns SyncSensitiveWordResponse
   */
  async syncSensitiveWord(request: SyncSensitiveWordRequest): Promise<SyncSensitiveWordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncSensitiveWordWithOptions(request, runtime);
  }

}
