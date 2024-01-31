// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeFileModerationResultRequest extends $tea.Model {
  service?: string;
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
  code?: number;
  data?: DescribeFileModerationResultResponseBodyData;
  message?: string;
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
  code?: number;
  data?: DescribeImageModerationResultResponseBodyData;
  msg?: string;
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
  infoType?: string;
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
  code?: number;
  data?: DescribeImageResultExtResponseBodyData;
  msg?: string;
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
  code?: number;
  data?: DescribeUploadTokenResponseBodyData;
  msg?: string;
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
  code?: number;
  data?: DescribeUrlModerationResultResponseBodyData;
  msg?: string;
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
  service?: string;
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
  code?: number;
  data?: FileModerationResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: ImageAsyncModerationResponseBodyData;
  msg?: string;
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
  service?: string;
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
  code?: number;
  data?: ImageModerationResponseBodyData;
  msg?: string;
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
  service?: string;
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
  code?: number;
  data?: TextModerationResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: TextModerationPlusResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: UrlAsyncModerationResponseBodyData;
  msg?: string;
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
  service?: string;
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
  code?: number;
  data?: VideoModerationResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: VideoModerationResultResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: VoiceModerationResponseBodyData;
  message?: string;
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
  service?: string;
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
  code?: number;
  message?: string;
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
  service?: string;
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
  code?: number;
  data?: VoiceModerationResultResponseBodyData;
  message?: string;
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
  confidence?: number;
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

export class DescribeFileModerationResultResponseBodyDataPageResultImageResult extends $tea.Model {
  description?: string;
  labelResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult[];
  location?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation;
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
  description?: string;
  labels?: string;
  riskTips?: string;
  riskWords?: string;
  service?: string;
  text?: string;
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
  imageResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResult[];
  imageUrl?: string;
  pageNum?: number;
  textResult?: DescribeFileModerationResultResponseBodyDataPageResultTextResult[];
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
  dataId?: string;
  docType?: string;
  pageResult?: DescribeFileModerationResultResponseBodyDataPageResult[];
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
  confidence?: number;
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
  dataId?: string;
  frame?: string;
  frameNum?: number;
  reqId?: string;
  result?: DescribeImageModerationResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      frame: 'Frame',
      frameNum: 'FrameNum',
      reqId: 'ReqId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      frame: 'string',
      frameNum: 'number',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': DescribeImageModerationResultResponseBodyDataResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyDataCustomImage extends $tea.Model {
  imageId?: string;
  libId?: string;
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

export class DescribeImageResultExtResponseBodyDataTextInImage extends $tea.Model {
  ocrDatas?: string[];
  riskWords?: string[];
  static names(): { [key: string]: string } {
    return {
      ocrDatas: 'OcrDatas',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocrDatas: { 'type': 'array', 'itemType': 'string' },
      riskWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResultExtResponseBodyData extends $tea.Model {
  customImage?: DescribeImageResultExtResponseBodyDataCustomImage[];
  publicFigure?: DescribeImageResultExtResponseBodyDataPublicFigure[];
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
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  expiration?: number;
  fileNamePrefix?: string;
  ossInternalEndPoint?: string;
  ossInternetEndPoint?: string;
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
  icpNo?: string;
  icpType?: string;
  static names(): { [key: string]: string } {
    return {
      icpNo: 'IcpNo',
      icpType: 'IcpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNo: 'string',
      icpType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUrlModerationResultResponseBodyDataResult extends $tea.Model {
  confidence?: number;
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
  dataId?: string;
  extraInfo?: DescribeUrlModerationResultResponseBodyDataExtraInfo;
  reqId?: string;
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
  dataId?: string;
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

export class ImageModerationResponseBodyDataResult extends $tea.Model {
  confidence?: number;
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
  dataId?: string;
  result?: ImageModerationResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBodyData extends $tea.Model {
  accountId?: string;
  deviceId?: string;
  labels?: string;
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
  answer?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResultCustomizedHit extends $tea.Model {
  keyWords?: string;
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
  confidence?: number;
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  label?: string;
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
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  result?: TextModerationPlusResponseBodyDataResult[];
  score?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      result: 'Result',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAdvice },
      result: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResult },
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBodyData extends $tea.Model {
  dataId?: string;
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

export class VideoModerationResultResponseBodyDataAudioResultAudioSummarys extends $tea.Model {
  label?: string;
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
  endTime?: number;
  endTimestamp?: number;
  extend?: string;
  labels?: string;
  riskTips?: string;
  riskWords?: string;
  score?: number;
  startTime?: number;
  startTimestamp?: number;
  text?: string;
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
  audioSummarys?: VideoModerationResultResponseBodyDataAudioResultAudioSummarys[];
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
  label?: string;
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

export class VideoModerationResultResponseBodyDataFrameResultFramesResultsResult extends $tea.Model {
  confidence?: number;
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
  result?: VideoModerationResultResponseBodyDataFrameResultFramesResultsResult[];
  service?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsResult },
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoModerationResultResponseBodyDataFrameResultFrames extends $tea.Model {
  offset?: number;
  results?: VideoModerationResultResponseBodyDataFrameResultFramesResults[];
  tempUrl?: string;
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
  frameNum?: number;
  frameSummarys?: VideoModerationResultResponseBodyDataFrameResultFrameSummarys[];
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
  audioResult?: VideoModerationResultResponseBodyDataAudioResult;
  dataId?: string;
  frameResult?: VideoModerationResultResponseBodyDataFrameResult;
  liveId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      dataId: 'DataId',
      frameResult: 'FrameResult',
      liveId: 'LiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: VideoModerationResultResponseBodyDataAudioResult,
      dataId: 'string',
      frameResult: VideoModerationResultResponseBodyDataFrameResult,
      liveId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceModerationResponseBodyData extends $tea.Model {
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

export class VoiceModerationResultResponseBodyDataSliceDetails extends $tea.Model {
  endTime?: number;
  endTimestamp?: number;
  extend?: string;
  labels?: string;
  originAlgoResult?: { [key: string]: any };
  riskTips?: string;
  riskWords?: string;
  score?: number;
  startTime?: number;
  startTimestamp?: number;
  text?: string;
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
  liveId?: string;
  sliceDetails?: VoiceModerationResultResponseBodyDataSliceDetails[];
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      sliceDetails: 'SliceDetails',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

  async describeFileModerationResult(request: DescribeFileModerationResultRequest): Promise<DescribeFileModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileModerationResultWithOptions(request, runtime);
  }

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

  async describeImageModerationResult(request: DescribeImageModerationResultRequest): Promise<DescribeImageModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageModerationResultWithOptions(request, runtime);
  }

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

  async describeImageResultExt(request: DescribeImageResultExtRequest): Promise<DescribeImageResultExtResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageResultExtWithOptions(request, runtime);
  }

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

  async describeUploadToken(): Promise<DescribeUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadTokenWithOptions(runtime);
  }

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

  async describeUrlModerationResult(request: DescribeUrlModerationResultRequest): Promise<DescribeUrlModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUrlModerationResultWithOptions(request, runtime);
  }

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

  async fileModeration(request: FileModerationRequest): Promise<FileModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fileModerationWithOptions(request, runtime);
  }

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

  async imageAsyncModeration(request: ImageAsyncModerationRequest): Promise<ImageAsyncModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageAsyncModerationWithOptions(request, runtime);
  }

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

  async imageModeration(request: ImageModerationRequest): Promise<ImageModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.imageModerationWithOptions(request, runtime);
  }

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

  async textModeration(request: TextModerationRequest): Promise<TextModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.textModerationWithOptions(request, runtime);
  }

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

  async textModerationPlus(request: TextModerationPlusRequest): Promise<TextModerationPlusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.textModerationPlusWithOptions(request, runtime);
  }

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

  async urlAsyncModeration(request: UrlAsyncModerationRequest): Promise<UrlAsyncModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.urlAsyncModerationWithOptions(request, runtime);
  }

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

  async videoModeration(request: VideoModerationRequest): Promise<VideoModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationWithOptions(request, runtime);
  }

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

  async videoModerationCancel(request: VideoModerationCancelRequest): Promise<VideoModerationCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationCancelWithOptions(request, runtime);
  }

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

  async videoModerationResult(request: VideoModerationResultRequest): Promise<VideoModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.videoModerationResultWithOptions(request, runtime);
  }

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

  async voiceModeration(request: VoiceModerationRequest): Promise<VoiceModerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationWithOptions(request, runtime);
  }

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

  async voiceModerationCancel(request: VoiceModerationCancelRequest): Promise<VoiceModerationCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationCancelWithOptions(request, runtime);
  }

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

  async voiceModerationResult(request: VoiceModerationResultRequest): Promise<VoiceModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.voiceModerationResultWithOptions(request, runtime);
  }

}
