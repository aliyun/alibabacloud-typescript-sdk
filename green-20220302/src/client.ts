// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeFileModerationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"taskId\\":\\"vi_f_hPgx9PFIQISdlfA888hOFG-1yJq8v\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeFileModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeFileModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileModerationResultResponseBody;
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
      body: DescribeFileModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImageModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2881AD4F-638B-52A3-BA20-F74C5B1CEAE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageModerationResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageModerationResultResponseBody;
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
      body: DescribeImageModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtRequest extends $tea.Model {
  /**
   * @remarks
   * The content of the information to be obtained. Multiple values are separated by commas.
   * 
   * @example
   * customImage,textInImage
   */
  infoType?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * 638EDDC65C82AB39319A9F60
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      reqId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeImageResultExtResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeImageResultExtResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageResultExtResponseBody;
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
      body: DescribeImageResultExtResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUploadTokenResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeUploadTokenResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUploadTokenResponseBody;
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
      body: DescribeUploadTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUrlModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01F9144A-2088-5D87-935B-2DB865284B1A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeUrlModerationResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUrlModerationResultResponseBody;
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
      body: DescribeUrlModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"url":"https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: FileModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: FileModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileModerationResponseBody;
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
      body: FileModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img123****"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ImageAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncModerationResponseBody;
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
      body: ImageAsyncModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"imageUrl":"https://www.aliyun.com/test.jpg","dataId":"img1234567"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ImageModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImageModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageModerationResponseBody;
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
      body: ImageModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"content":"Content to be moderated"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextModerationResponseBody;
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
      body: TextModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * llm_query_moderation
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"content":"Content to be moderated"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: TextModerationPlusResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationPlusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextModerationPlusResponseBody;
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
      body: TextModerationPlusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * url_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {
   *         "url": "https://help.aliyun.com/",
   *         "dataId": "url123******"
   * }
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: UrlAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UrlAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UrlAsyncModerationResponseBody;
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
      body: UrlAsyncModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"url\\": \\"https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4\\", \\"dataId\\": \\"94db0b88-f521-11ed-806e-fae21c1f239c\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VideoModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VideoModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationResponseBody;
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
      body: VideoModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"taskId\\":\\"vi_s_4O9gp7GfNQdx9GOqdekFmk-1z2RJT\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationCancelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationCancelResponseBody;
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
      body: VideoModerationCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"taskId\\":\\"au_f_8PoWiZKoLbczp5HRn69VdT-1y8@U5\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VideoModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success finished
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF2815C-C8C7-4A01-B52E-FF6E24F53492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VideoModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoModerationResultResponseBody;
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
      body: VideoModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"url": "http://aliyundoc.com/test.flv", "dataId": "data1234"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VoiceModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VoiceModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationResponseBody;
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
      body: VoiceModerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationCancelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationCancelResponseBody;
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
      body: VoiceModerationCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: VoiceModerationResultResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2881AD4F-638B-52A3-BA20-F74C5B1CEAE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: VoiceModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceModerationResultResponseBody;
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
      body: VoiceModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult extends $tea.Model {
  /**
   * @remarks
   * Confidence score, 0 to 100, reserved to 2 decimal places.
   * 
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * nonlabel
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

export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation extends $tea.Model {
  /**
   * @remarks
   * The H value of the coordinate point.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The W value of the coordinate point.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The X value of the coordinate point.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The Y value of the coordinate point.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultImageResult extends $tea.Model {
  /**
   * @remarks
   * Description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * Label information.
   */
  labelResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult[];
  /**
   * @remarks
   * Location information.
   */
  location?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labelResult: 'LabelResult',
      location: 'Location',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labelResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult },
      location: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation,
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResultTextResult extends $tea.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The risk details that are hit.
   * 
   * @example
   * xxx
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit.
   * 
   * @example
   * xxx
   */
  riskWords?: string;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * chat_detection
   */
  service?: string;
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * This is a text.
   */
  text?: string;
  /**
   * @remarks
   * Text segmentation information.
   * 
   * @example
   * [0,999]
   */
  textSegment?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      service: 'Service',
      text: 'Text',
      textSegment: 'TextSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      riskTips: 'string',
      riskWords: 'string',
      service: 'string',
      text: 'string',
      textSegment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyDataPageResult extends $tea.Model {
  /**
   * @remarks
   * Image detection results.
   */
  imageResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResult[];
  /**
   * @remarks
   * The image url.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Text detection results.
   */
  textResult?: DescribeFileModerationResultResponseBodyDataPageResultTextResult[];
  /**
   * @remarks
   * the text url.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.txt
   */
  textUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageResult: 'ImageResult',
      imageUrl: 'ImageUrl',
      pageNum: 'PageNum',
      textResult: 'TextResult',
      textUrl: 'TextUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResult },
      imageUrl: 'string',
      pageNum: 'number',
      textResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultTextResult },
      textUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileModerationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * Optional, document type.
   * 
   * @example
   * doc
   */
  docType?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageResult?: DescribeFileModerationResultResponseBodyDataPageResult[];
  /**
   * @remarks
   * The URL of the moderation object.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      docType: 'DocType',
      pageResult: 'PageResult',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      docType: 'string',
      pageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResult },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModerationResultResponseBodyDataResult extends $tea.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the image moderation.
   * 
   * @example
   * violent_explosion
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

export class DescribeImageModerationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 2a5389eb-4ff8-4584-ac99-644e2a539aa1
   */
  dataId?: string;
  /**
   * @remarks
   * Image frame information.
   * 
   * @example
   * [{"result":[{"confidence":81.22,"label":"violent_explosion"}]}]
   */
  frame?: string;
  /**
   * @remarks
   * Number of result frames
   * 
   * @example
   * 1
   */
  frameNum?: number;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: DescribeImageModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      frame: 'Frame',
      frameNum: 'FrameNum',
      reqId: 'ReqId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      frame: 'string',
      frameNum: 'number',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeImageModerationResultResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataCustomImage extends $tea.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * 图库123
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataPublicFigure extends $tea.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * yzazhzou
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImageCustomTexts extends $tea.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataTextInImage extends $tea.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customTexts?: DescribeImageResultExtResponseBodyDataTextInImageCustomTexts[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrDatas?: string[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWords?: string[];
  static names(): { [key: string]: string } {
    return {
      customTexts: 'CustomTexts',
      ocrDatas: 'OcrDatas',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTexts: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataTextInImageCustomTexts },
      ocrDatas: { 'type': 'array', 'itemType': 'string' },
      riskWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: DescribeImageResultExtResponseBodyDataCustomImage[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: DescribeImageResultExtResponseBodyDataPublicFigure[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: DescribeImageResultExtResponseBodyDataTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      publicFigure: 'PublicFigure',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataCustomImage },
      publicFigure: { 'type': 'array', 'itemType': DescribeImageResultExtResponseBodyDataPublicFigure },
      textInImage: DescribeImageResultExtResponseBodyDataTextInImage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadTokenResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUEUjvDqMuvH6oQA1TXxxH4wVR
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * oss-cip-shanghai
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the file sharing link expires.
   * 
   * @example
   * 1720577200
   */
  expiration?: number;
  /**
   * @remarks
   * The file prefix.
   * 
   * @example
   * upload/1xxb89/
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * the oss intranet point.
   * 
   * @example
   * https://oss-cn-shanghai-internal.aliyuncs.com
   */
  ossInternalEndPoint?: string;
  /**
   * @remarks
   * the oss internet point.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com
   */
  ossInternetEndPoint?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * xxxx
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      fileNamePrefix: 'FileNamePrefix',
      ossInternalEndPoint: 'OssInternalEndPoint',
      ossInternetEndPoint: 'OssInternetEndPoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiration: 'number',
      fileNamePrefix: 'string',
      ossInternalEndPoint: 'string',
      ossInternetEndPoint: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataExtraInfo extends $tea.Model {
  /**
   * @remarks
   * ICP record number.
   * 
   * @example
   * xx
   */
  icpNo?: string;
  /**
   * @remarks
   * ICP filing type.
   * 
   * @example
   * xx
   */
  icpType?: string;
  siteType?: string;
  static names(): { [key: string]: string } {
    return {
      icpNo: 'IcpNo',
      icpType: 'IcpType',
      siteType: 'SiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNo: 'string',
      icpType: 'string',
      siteType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataResult extends $tea.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the url async moderation.
   * 
   * @example
   * sexual_url
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

export class DescribeUrlModerationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * Supplementary information.
   */
  extraInfo?: DescribeUrlModerationResultResponseBodyDataExtraInfo;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
   */
  reqId?: string;
  /**
   * @remarks
   * The results of url async moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: DescribeUrlModerationResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      extraInfo: 'ExtraInfo',
      reqId: 'ReqId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      extraInfo: DescribeUrlModerationResultResponseBodyDataExtraInfo,
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeUrlModerationResultResponseBodyDataResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
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

export class ImageAsyncModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Image Async Moderation API. You can use this field to query the detection results.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtCustomImage extends $tea.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 123456
   */
  imageId?: string;
  /**
   * @remarks
   * The image library ID.
   * 
   * @example
   * lib_123456
   */
  libId?: string;
  /**
   * @remarks
   * The image library name.
   * 
   * @example
   * xx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoDataLocation extends $tea.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoDataLogo extends $tea.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  /**
   * @remarks
   * Logo category.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtLogoData extends $tea.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtLogoDataLocation;
  /**
   * @remarks
   * Logo information.
   */
  logo?: ImageModerationResponseBodyDataExtLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtLogoDataLocation,
      logo: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoDataLogo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtOcrResultLocation extends $tea.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtOcrResult extends $tea.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtOcrResultLocation;
  /**
   * @remarks
   * The text information in the recognized image.
   * 
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtOcrResultLocation,
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtPublicFigureLocation extends $tea.Model {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtPublicFigure extends $tea.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * xx
   */
  figureId?: string;
  /**
   * @remarks
   * Identified person name information.
   * 
   * @example
   * xx
   */
  figureName?: string;
  location?: ImageModerationResponseBodyDataExtPublicFigureLocation[];
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
      figureName: 'FigureName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
      figureName: 'string',
      location: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigureLocation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtRecognition extends $tea.Model {
  /**
   * @remarks
   * The category of image recognition.
   * 
   * @example
   * xx
   */
  classification?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageCustomText extends $tea.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * xxxx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResultLocation extends $tea.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 33
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 44
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImageOcrResult extends $tea.Model {
  /**
   * @remarks
   * Location information.
   */
  location?: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation;
  /**
   * @remarks
   * The text information in the recognized image.
   * 
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageModerationResponseBodyDataExtTextInImageOcrResultLocation,
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExtTextInImage extends $tea.Model {
  /**
   * @remarks
   * When a custom text library is hit, the custom library ID, custom library name, and custom word are returned.
   */
  customText?: ImageModerationResponseBodyDataExtTextInImageCustomText[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtTextInImageOcrResult[];
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   */
  riskWord?: string[];
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      ocrResult: 'OcrResult',
      riskWord: 'RiskWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageCustomText },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtTextInImageOcrResult },
      riskWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataExt extends $tea.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: ImageModerationResponseBodyDataExtCustomImage[];
  /**
   * @remarks
   * Logo information.
   */
  logoData?: ImageModerationResponseBodyDataExtLogoData[];
  /**
   * @remarks
   * Returns the text information in the recognized image.
   */
  ocrResult?: ImageModerationResponseBodyDataExtOcrResult[];
  /**
   * @remarks
   * Person information list.
   */
  publicFigure?: ImageModerationResponseBodyDataExtPublicFigure[];
  /**
   * @remarks
   * The result of image recognition.
   */
  recognition?: ImageModerationResponseBodyDataExtRecognition[];
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: ImageModerationResponseBodyDataExtTextInImage;
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      logoData: 'LogoData',
      ocrResult: 'OcrResult',
      publicFigure: 'PublicFigure',
      recognition: 'Recognition',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtCustomImage },
      logoData: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtLogoData },
      ocrResult: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtOcrResult },
      publicFigure: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigure },
      recognition: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtRecognition },
      textInImage: ImageModerationResponseBodyDataExtTextInImage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageModerationResponseBodyDataResult extends $tea.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the image moderation.
   * 
   * @example
   * violent_explosion
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

export class ImageModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * Auxiliary reference information.
   */
  ext?: ImageModerationResponseBodyDataExt;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: ImageModerationResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      ext: 'Ext',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      ext: ImageModerationResponseBodyDataExt,
      result: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * xxxxxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The JSON string used to locate the cause.
   * 
   * @example
   * {\\"detectedLanguage\\":\\"ar\\",\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\",\\"translatedContent\\":\\"pxxxxy sxxxx\\"}
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      deviceId: 'deviceId',
      labels: 'labels',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      deviceId: 'string',
      labels: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataAdvice extends $tea.Model {
  /**
   * @remarks
   * Answer
   * 
   * @example
   * XXX
   */
  answer?: string;
  /**
   * @remarks
   * Hit Label
   * 
   * @example
   * xxx
   */
  hitLabel?: string;
  /**
   * @remarks
   * Hit Library Name
   * 
   * @example
   * xxx
   */
  hitLibName?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hitLabel: 'HitLabel',
      hitLibName: 'HitLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hitLabel: 'string',
      hitLibName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResultCustomizedHit extends $tea.Model {
  /**
   * @remarks
   * Hit keywords, comma separated.
   * 
   * @example
   * xxx
   */
  keyWords?: string;
  /**
   * @remarks
   * Library Name
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResult extends $tea.Model {
  /**
   * @remarks
   * Confidence score, 0 to 100, reserved to 2 decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * Custom keyword hits
   */
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * Risk words
   * 
   * @example
   * XXX
   */
  riskWords?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      customizedHit: 'CustomizedHit',
      label: 'Label',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultCustomizedHit },
      label: 'string',
      riskWords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Advice
   */
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  /**
   * @remarks
   * The moderation results.
   */
  result?: TextModerationPlusResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Score.
   * 
   * @example
   * 1
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      result: 'Result',
      riskLevel: 'RiskLevel',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAdvice },
      result: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResult },
      riskLevel: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultAudioSummarys extends $tea.Model {
  /**
   * @remarks
   * Voice label.
   * 
   * @example
   * profanity
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 8
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      labelSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResultSliceDetails extends $tea.Model {
  /**
   * @remarks
   * The end time of the text after voice-to-text conversion. Unit: seconds.
   * 
   * @example
   * 30
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1685245261939
   */
  endTimestamp?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * {\\"consoleProduct\\":\\"slbnext\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * Subcategory labels. Multiple labels are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit. Multiple words are separated by commas (,).
   * 
   * @example
   * ""
   */
  riskWords?: string;
  /**
   * @remarks
   * Risk score, default range 0-99.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The start time of the text after voice-to-text conversion. Unit: seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1659935002123
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from voice.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * If the moderation object is a voice stream, this parameter indicates the temporary access URL of the voice stream to which the text entry corresponds. The validity period of the URL is 30 minutes. You must prepare another URL to store the audio stream at the earliest opportunity.
   * 
   * @example
   * http://xxxx.abc.img
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      score: 'Score',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimestamp: 'number',
      extend: 'string',
      labels: 'string',
      riskTips: 'string',
      riskWords: 'string',
      score: 'number',
      startTime: 'number',
      startTimestamp: 'number',
      text: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataAudioResult extends $tea.Model {
  /**
   * @remarks
   * Summary of voice labels.
   */
  audioSummarys?: VideoModerationResultResponseBodyDataAudioResultAudioSummarys[];
  /**
   * @remarks
   * The details about the text in the moderated voice. The value is a JSON array that contains one or more elements. Each element corresponds to a text entry.
   */
  sliceDetails?: VideoModerationResultResponseBodyDataAudioResultSliceDetails[];
  static names(): { [key: string]: string } {
    return {
      audioSummarys: 'AudioSummarys',
      sliceDetails: 'SliceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultAudioSummarys },
      sliceDetails: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataAudioResultSliceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFrameSummarys extends $tea.Model {
  /**
   * @remarks
   * The label against which a captured frame is matched.
   * 
   * @example
   * violent_armedForces
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 8
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      labelSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage extends $tea.Model {
  /**
   * @remarks
   * The ID of the hit custom image.
   * 
   * @example
   * 1234
   */
  imageId?: string;
  /**
   * @remarks
   * The custom image library ID of the hit.
   * 
   * @example
   * 12345678
   */
  libId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $tea.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsResult extends $tea.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The label returned after a frame is moderated. Multiple risk labels and the corresponding scores of confidence levels may be returned for a frame.
   * 
   * @example
   * bloody
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResults extends $tea.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the hit custom image library is returned.
   */
  customImage?: VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage[];
  /**
   * @remarks
   * If the video contains a specific person, the recognized person code is returned.
   */
  publicFigure?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure[];
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: VideoModerationResultResponseBodyDataFrameResultFramesResultsResult[];
  /**
   * @remarks
   * The moderation service that is called.
   * 
   * @example
   * tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * Returns the text information in the hit image.
   */
  textInImage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      publicFigure: 'PublicFigure',
      result: 'Result',
      service: 'Service',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage },
      publicFigure: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure },
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsResult },
      service: 'string',
      textInImage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFrames extends $tea.Model {
  /**
   * @remarks
   * The interval between the start of the video file and the captured frame. Unit: seconds.
   * 
   * @example
   * 338
   */
  offset?: number;
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  results?: VideoModerationResultResponseBodyDataFrameResultFramesResults[];
  /**
   * @remarks
   * The temporary URL of a captured frame. This URL is valid for 30 minutes.
   * 
   * @example
   * http://xxxx.abc.jpg
   */
  tempUrl?: string;
  /**
   * @remarks
   * The absolute timestamp. Unit: milliseconds.
   * 
   * @example
   * 1684559739000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      results: 'Results',
      tempUrl: 'TempUrl',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      results: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResults },
      tempUrl: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResult extends $tea.Model {
  /**
   * @remarks
   * The number of captured frames that are returned for the video file.
   * 
   * @example
   * 10
   */
  frameNum?: number;
  /**
   * @remarks
   * The summary of the labels against which captured frames are matched.
   */
  frameSummarys?: VideoModerationResultResponseBodyDataFrameResultFrameSummarys[];
  /**
   * @remarks
   * The information about the frames that match the labels.
   */
  frames?: VideoModerationResultResponseBodyDataFrameResultFrames[];
  static names(): { [key: string]: string } {
    return {
      frameNum: 'FrameNum',
      frameSummarys: 'FrameSummarys',
      frames: 'Frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameNum: 'number',
      frameSummarys: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrameSummarys },
      frames: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFrames },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The voice moderation results. The moderation results contain a structure.
   */
  audioResult?: VideoModerationResultResponseBodyDataAudioResult;
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * product_content-2055763
   */
  dataId?: string;
  /**
   * @remarks
   * The image moderation results. If the call is successful, the HTTP status code 200 and moderation results are returned. The moderation results contain a structure.
   */
  frameResult?: VideoModerationResultResponseBodyDataFrameResult;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      dataId: 'DataId',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: VideoModerationResultResponseBodyDataAudioResult,
      dataId: 'string',
      frameResult: VideoModerationResultResponseBodyDataFrameResult,
      liveId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBodyDataSliceDetails extends $tea.Model {
  /**
   * @remarks
   * The end time of the text after audio-to-text conversion. Unit: seconds.
   * 
   * @example
   * 10
   */
  endTime?: number;
  /**
   * @remarks
   * The end timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  endTimestamp?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * {\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * sexual_sounds
   */
  labels?: string;
  /**
   * @remarks
   * Reserved field.
   * 
   * @example
   * {}
   */
  originAlgoResult?: { [key: string]: any };
  /**
   * @remarks
   * The risk details that are hit.
   * 
   * @example
   * sexuality_Suggestive
   */
  riskTips?: string;
  /**
   * @remarks
   * The risk words that are hit.
   * 
   * @example
   * AAA,BBB,CCC
   */
  riskWords?: string;
  /**
   * @remarks
   * Risk score, default range 0-99.
   * 
   * @example
   * 87.01
   */
  score?: number;
  /**
   * @remarks
   * The start time of the text after audio-to-text conversion. Unit: seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The start timestamp of the segment. Unit: milliseconds.
   * 
   * @example
   * 1678854649720
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The text converted from voice.
   * 
   * @example
   * Disgusting
   */
  text?: string;
  /**
   * @remarks
   * The temporary access address of the audio segment. The validity period of the URL is 30 minutes. You must prepare another URL to store the audio segment at the earliest opportunity.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      extend: 'Extend',
      labels: 'Labels',
      originAlgoResult: 'OriginAlgoResult',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      score: 'Score',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimestamp: 'number',
      extend: 'string',
      labels: 'string',
      originAlgoResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskTips: 'string',
      riskWords: 'string',
      score: 'number',
      startTime: 'number',
      startTimestamp: 'number',
      text: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResultResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  /**
   * @remarks
   * The details about the audio segments.
   */
  sliceDetails?: VoiceModerationResultResponseBodyDataSliceDetails[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * kw24ihd0WGkdi5nniVZM@qOj-1x5Ibb
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the moderation object.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      liveId: 'LiveId',
      sliceDetails: 'SliceDetails',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      liveId: 'string',
      sliceDetails: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetails },
      taskId: 'string',
      url: 'string',
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
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResultWithOptions(request: DescribeFileModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileModerationResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFileModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFileModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeFileModerationResultResponse({}));
  }

  /**
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResult(request: DescribeFileModerationResultRequest): Promise<DescribeFileModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileModerationResultWithOptions(request, runtime);
  }

  /**
   * 查询异步检测结果
   * 
   * @param request - DescribeImageModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResultWithOptions(request: DescribeImageModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageModerationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeImageModerationResultResponse({}));
  }

  /**
   * 查询异步检测结果
   * 
   * @param request - DescribeImageModerationResultRequest
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResult(request: DescribeImageModerationResultRequest): Promise<DescribeImageModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageModerationResultWithOptions(request, runtime);
  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExtWithOptions(request: DescribeImageResultExtRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageResultExtResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.infoType)) {
      body["InfoType"] = request.infoType;
    }

    if (!Util.isUnset(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageResultExt",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageResultExtResponse>(await this.callApi(params, req, runtime), new DescribeImageResultExtResponse({}));
  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExt(request: DescribeImageResultExtRequest): Promise<DescribeImageResultExtResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageResultExtWithOptions(request, runtime);
  }

  /**
   * 查询上传token
   * 
   * @param request - DescribeUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadTokenWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUploadTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeUploadToken",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUploadTokenResponse>(await this.callApi(params, req, runtime), new DescribeUploadTokenResponse({}));
  }

  /**
   * 查询上传token
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadToken(): Promise<DescribeUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadTokenWithOptions(runtime);
  }

  /**
   * 查询 url 检测结果
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResultWithOptions(request: DescribeUrlModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUrlModerationResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUrlModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUrlModerationResultResponse>(await this.callApi(params, req, runtime), new DescribeUrlModerationResultResponse({}));
  }

  /**
   * 查询 url 检测结果
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResult(request: DescribeUrlModerationResultRequest): Promise<DescribeUrlModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUrlModerationResultWithOptions(request, runtime);
  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileModerationResponse
   */
  async fileModerationWithOptions(request: FileModerationRequest, runtime: $Util.RuntimeOptions): Promise<FileModerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FileModerationResponse>(await this.callApi(params, req, runtime), new FileModerationResponse({}));
  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @returns FileModerationResponse
   */
  async fileModeration(request: FileModerationRequest): Promise<FileModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fileModerationWithOptions(request, runtime);
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModerationWithOptions(request: ImageAsyncModerationRequest, runtime: $Util.RuntimeOptions): Promise<ImageAsyncModerationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImageAsyncModerationResponse>(await this.callApi(params, req, runtime), new ImageAsyncModerationResponse({}));
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModeration(request: ImageAsyncModerationRequest): Promise<ImageAsyncModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 图片审核
   * 
   * @param request - ImageModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageModerationResponse
   */
  async imageModerationWithOptions(request: ImageModerationRequest, runtime: $Util.RuntimeOptions): Promise<ImageModerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImageModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImageModerationResponse>(await this.callApi(params, req, runtime), new ImageModerationResponse({}));
  }

  /**
   * 图片审核
   * 
   * @param request - ImageModerationRequest
   * @returns ImageModerationResponse
   */
  async imageModeration(request: ImageModerationRequest): Promise<ImageModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageModerationWithOptions(request, runtime);
  }

  /**
   * 文本审核
   * 
   * @param request - TextModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationResponse
   */
  async textModerationWithOptions(request: TextModerationRequest, runtime: $Util.RuntimeOptions): Promise<TextModerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TextModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TextModerationResponse>(await this.callApi(params, req, runtime), new TextModerationResponse({}));
  }

  /**
   * 文本审核
   * 
   * @param request - TextModerationRequest
   * @returns TextModerationResponse
   */
  async textModeration(request: TextModerationRequest): Promise<TextModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.textModerationWithOptions(request, runtime);
  }

  /**
   * 文本检测Plus版
   * 
   * @param request - TextModerationPlusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationPlusResponse
   */
  async textModerationPlusWithOptions(request: TextModerationPlusRequest, runtime: $Util.RuntimeOptions): Promise<TextModerationPlusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TextModerationPlus",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TextModerationPlusResponse>(await this.callApi(params, req, runtime), new TextModerationPlusResponse({}));
  }

  /**
   * 文本检测Plus版
   * 
   * @param request - TextModerationPlusRequest
   * @returns TextModerationPlusResponse
   */
  async textModerationPlus(request: TextModerationPlusRequest): Promise<TextModerationPlusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.textModerationPlusWithOptions(request, runtime);
  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModerationWithOptions(request: UrlAsyncModerationRequest, runtime: $Util.RuntimeOptions): Promise<UrlAsyncModerationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UrlAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UrlAsyncModerationResponse>(await this.callApi(params, req, runtime), new UrlAsyncModerationResponse({}));
  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModeration(request: UrlAsyncModerationRequest): Promise<UrlAsyncModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.urlAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResponse
   */
  async videoModerationWithOptions(request: VideoModerationRequest, runtime: $Util.RuntimeOptions): Promise<VideoModerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VideoModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VideoModerationResponse>(await this.callApi(params, req, runtime), new VideoModerationResponse({}));
  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @returns VideoModerationResponse
   */
  async videoModeration(request: VideoModerationRequest): Promise<VideoModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationWithOptions(request, runtime);
  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancelWithOptions(request: VideoModerationCancelRequest, runtime: $Util.RuntimeOptions): Promise<VideoModerationCancelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VideoModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VideoModerationCancelResponse>(await this.callApi(params, req, runtime), new VideoModerationCancelResponse({}));
  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancel(request: VideoModerationCancelRequest): Promise<VideoModerationCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationCancelWithOptions(request, runtime);
  }

  /**
   * 获取视频检测结果
   * 
   * @param request - VideoModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResultResponse
   */
  async videoModerationResultWithOptions(request: VideoModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<VideoModerationResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VideoModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VideoModerationResultResponse>(await this.callApi(params, req, runtime), new VideoModerationResultResponse({}));
  }

  /**
   * 获取视频检测结果
   * 
   * @param request - VideoModerationResultRequest
   * @returns VideoModerationResultResponse
   */
  async videoModerationResult(request: VideoModerationResultRequest): Promise<VideoModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationResultWithOptions(request, runtime);
  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResponse
   */
  async voiceModerationWithOptions(request: VoiceModerationRequest, runtime: $Util.RuntimeOptions): Promise<VoiceModerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VoiceModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VoiceModerationResponse>(await this.callApi(params, req, runtime), new VoiceModerationResponse({}));
  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @returns VoiceModerationResponse
   */
  async voiceModeration(request: VoiceModerationRequest): Promise<VoiceModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationWithOptions(request, runtime);
  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancelWithOptions(request: VoiceModerationCancelRequest, runtime: $Util.RuntimeOptions): Promise<VoiceModerationCancelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VoiceModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VoiceModerationCancelResponse>(await this.callApi(params, req, runtime), new VoiceModerationCancelResponse({}));
  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancel(request: VoiceModerationCancelRequest): Promise<VoiceModerationCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationCancelWithOptions(request, runtime);
  }

  /**
   * 语音检测结果获取接口
   * 
   * @param request - VoiceModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResultWithOptions(request: VoiceModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<VoiceModerationResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.service)) {
      body["Service"] = request.service;
    }

    if (!Util.isUnset(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VoiceModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VoiceModerationResultResponse>(await this.callApi(params, req, runtime), new VoiceModerationResultResponse({}));
  }

  /**
   * 语音检测结果获取接口
   * 
   * @param request - VoiceModerationResultRequest
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResult(request: VoiceModerationResultRequest): Promise<VoiceModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationResultWithOptions(request, runtime);
  }

}
