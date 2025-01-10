// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCartoonHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0***eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40c804***697
   */
  startVideoMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://***.mp4
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCartoonResponseBody;
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
      body: AddCartoonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQARequest extends $tea.Model {
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  keyWords?: string[];
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAShrinkRequest extends $tea.Model {
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  keyWordsShrink?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomQAResponseBody;
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
      body: AddCustomQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Headers extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Request extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  keyWords?: string[];
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  keyWordsShrink?: string;
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: AddCustomQAV2ResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: AddCustomQAV2ResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomQAV2ResponseBody;
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
      body: AddCustomQAV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * 11
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMessageTemplateResponseBody;
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
      body: AddMessageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateDisPlayModesResponseBody;
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
      body: AddOrUpdateDisPlayModesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequest extends $tea.Model {
  hotelDeviceModeList?: string[];
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaver?: AddOrUpdateHotelSettingRequestHotelScreenSaver;
  nightMode?: AddOrUpdateHotelSettingRequestNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
      nightMode: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateHotelSettingRequestHotelScreenSaver,
      nightMode: AddOrUpdateHotelSettingRequestNightMode,
      settingType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingShrinkRequest extends $tea.Model {
  hotelDeviceModeListShrink?: string;
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaverShrink?: string;
  nightModeShrink?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
      nightModeShrink: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
      nightModeShrink: 'string',
      settingType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateHotelSettingResponseBody;
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
      body: AddOrUpdateHotelSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaver?: AddOrUpdateScreenSaverRequestHotelScreenSaver;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateScreenSaverRequestHotelScreenSaver,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaverShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4EED***9661
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateScreenSaverResponseBody;
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
      body: AddOrUpdateScreenSaverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
      welcomeText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateWelcomeTextResponseBody;
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
      body: AddOrUpdateWelcomeTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReq?: AuditHotelRequestAuditHotelReq;
  static names(): { [key: string]: string } {
    return {
      auditHotelReq: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReq: AuditHotelRequestAuditHotelReq,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      auditHotelReqShrink: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReqShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @remarks
   * RequestId
   */
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditHotelResponseBody;
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
      body: AuditHotelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoList: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoListShrink: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddHotelRoomResponseBody;
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
      body: BatchAddHotelRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoList: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoListShrink: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteHotelRoomResponseBody;
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
      body: BatchDeleteHotelRoomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckoutWithAKResponseBody;
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
      body: CheckoutWithAKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lee
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30471753
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appKey: 'AppKey',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      appKey: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3DB51A10-327C-58D3-91DF-3A5A471C51E7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChildAccountAuthResponseBody;
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
      body: ChildAccountAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thing.attribute.set
   * thing.attribute.adjust
   */
  cmd?: string;
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INFRARED49122575595
   */
  deviceNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  properties?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      hotelId: 'HotelId',
      properties: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thing.attribute.set
   * thing.attribute.adjust
   */
  cmd?: string;
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INFRARED49122575595
   */
  deviceNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      hotelId: 'HotelId',
      propertiesShrink: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      propertiesShrink: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceResponseBody extends $tea.Model {
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ControlRoomDeviceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ControlRoomDeviceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ControlRoomDeviceResponseBody;
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
      body: ControlRoomDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333566791
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-1 00:00:00
   */
  estOpenTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13xxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jTO****Rw
   */
  relatedPk?: string;
  /**
   * @remarks
   * 酒店关联产品列表
   */
  relatedPks?: string[];
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPk: 'RelatedPk',
      relatedPks: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPk: 'string',
      relatedPks: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333566791
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-1 00:00:00
   */
  estOpenTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13xxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jTO****Rw
   */
  relatedPk?: string;
  /**
   * @remarks
   * 酒店关联产品列表
   */
  relatedPksShrink?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPk: 'RelatedPk',
      relatedPksShrink: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPk: 'string',
      relatedPksShrink: 'string',
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * 5abfd9***2c38661
   */
  result?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHotelResponseBody;
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
      body: CreateHotelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * DOU_YIN
   */
  musicType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rooms?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfo?: CreateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      rooms: 'Rooms',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
      scheduleInfo: CreateHotelAlarmRequestScheduleInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * DOU_YIN
   */
  musicType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      roomsShrink: 'Rooms',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      roomsShrink: 'string',
      scheduleInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***86881
   */
  requestId?: string;
  result?: CreateHotelAlarmResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': CreateHotelAlarmResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHotelAlarmResponseBody;
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
      body: CreateHotelAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTO?: CreateRcuSceneRequestSceneRelationExtDTO;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTO: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTO: CreateRcuSceneRequestSceneRelationExtDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTOShrink: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTOShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 844BA5CE-E30A-53CB-8A11-DE1F344C846D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRcuSceneResponseBody;
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
      body: CreateRcuSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonRequest extends $tea.Model {
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCartoonResponseBody;
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
      body: DeleteCartoonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQARequest extends $tea.Model {
  customQAIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      customQAIds: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIds: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAShrinkRequest extends $tea.Model {
  customQAIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      customQAIdsShrink: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIdsShrink: 'string',
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomQAResponseBody;
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
      body: DeleteCustomQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: DeleteHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': DeleteHotelAlarmRequestAlarms },
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelAlarmResponseBody;
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
      body: DeleteHotelAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @example
   * 11823
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelSceneBookItemResponseBody;
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
      body: DeleteHotelSceneBookItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingRequest extends $tea.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      settingType: 'SettingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      settingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67****BB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelSettingResponseBody;
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
      body: DeleteHotelSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateRequest extends $tea.Model {
  /**
   * @example
   * 234
   */
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

export class DeleteMessageTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMessageTemplateResponseBody;
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
      body: DeleteMessageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4F61A7B7-409C-525D-AFDB-238A4E88925A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRcuSceneResponseBody;
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
      body: DeleteRcuSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequest extends $tea.Model {
  payload?: DeviceControlRequestPayload;
  userInfo?: DeviceControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: DeviceControlRequestPayload,
      userInfo: DeviceControlRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  result?: DeviceControlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: DeviceControlResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeviceControlResponseBody;
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
      body: DeviceControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 191C79AD-F9F9-531E-B8C1-73DF6433B920
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSceneResponseBody;
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
      body: ExecuteSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQARequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: GetBasicInfoQAResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetBasicInfoQAResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicInfoQAResponseBody;
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
      body: GetBasicInfoQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetCartoonResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetCartoonResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCartoonResponseBody;
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
      body: GetCartoonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceRequest extends $tea.Model {
  deviceInfo?: GetHotelContactByGenieDeviceRequestDeviceInfo;
  userInfo?: GetHotelContactByGenieDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetHotelContactByGenieDeviceRequestDeviceInfo,
      userInfo: GetHotelContactByGenieDeviceRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  result?: GetHotelContactByGenieDeviceResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelContactByGenieDeviceResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactByGenieDeviceResponseBody;
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
      body: GetHotelContactByGenieDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  number?: string;
  userInfo?: GetHotelContactByNumberRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      userInfo: GetHotelContactByNumberRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  number?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelContactByNumberResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelContactByNumberResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactByNumberResponseBody;
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
      body: GetHotelContactByNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsRequest extends $tea.Model {
  userInfo?: GetHotelContactsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelContactsRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsShrinkRequest extends $tea.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelContactsResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelContactsResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactsResponseBody;
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
      body: GetHotelContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelHomeBackImageAndModesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelHomeBackImageAndModesRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 394450FC-9035-1B7C-8829-BC88832473FC
   */
  requestId?: string;
  result?: GetHotelHomeBackImageAndModesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelHomeBackImageAndModesResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelHomeBackImageAndModesResponseBody;
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
      body: GetHotelHomeBackImageAndModesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelNoticeRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelNoticeRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * test notice...
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelNoticeResponseBody;
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
      body: GetHotelNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Headers extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Request extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelNoticeV2RequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelNoticeV2RequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C***67DB
   */
  requestId?: string;
  result?: GetHotelNoticeV2ResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelNoticeV2ResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelNoticeV2ResponseBody;
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
      body: GetHotelNoticeV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: GetHotelOrderDetailRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: GetHotelOrderDetailRequestPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 6F579407-13C4-1708-AFA2-B657BE5FE8F5
   */
  requestId?: string;
  result?: GetHotelOrderDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelOrderDetailResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelOrderDetailResponseBody;
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
      body: GetHotelOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * vrehvuifdsgrts
   */
  requestId?: string;
  result?: GetHotelRoomDeviceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelRoomDeviceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelRoomDeviceResponseBody;
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
      body: GetHotelRoomDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesRequest extends $tea.Model {
  userInfo?: GetHotelSampleUtterancesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelSampleUtterancesRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesShrinkRequest extends $tea.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSampleUtterancesResponseBody;
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
      body: GetHotelSampleUtterancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @example
   * 10336
   */
  itemId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      itemId: 'ItemId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      itemId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelSceneItemDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelSceneItemDetailResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSceneItemDetailResponseBody;
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
      body: GetHotelSceneItemDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelScreenSaverRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelScreenSaverRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5F0467E1-19F2-1757-B6D0-B79917BA2E81
   */
  requestId?: string;
  result?: GetHotelScreenSaverResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelScreenSaverResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelScreenSaverResponseBody;
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
      body: GetHotelScreenSaverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleRequest extends $tea.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67**6FA
   */
  requestId?: string;
  result?: GetHotelScreenSaverStyleResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelScreenSaverStyleResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelScreenSaverStyleResponseBody;
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
      body: GetHotelScreenSaverStyleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingRequest extends $tea.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      settingType: 'SettingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      settingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  result?: GetHotelSettingResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelSettingResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSettingResponseBody;
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
      body: GetHotelSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetRelationProductListResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetRelationProductListResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRelationProductListResponseBody;
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
      body: GetRelationProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62a319****abdc
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE_ID
   */
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetUnionIdResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetUnionIdResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUnionIdResponseBody;
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
      body: GetUnionIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetWelcomeTextAndMusicResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: GetWelcomeTextAndMusicResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWelcomeTextAndMusicResponseBody;
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
      body: GetWelcomeTextAndMusicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * freuisghrtiesnvfkdsvbfuidslnvfs
   */
  code?: string;
  extInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      code: 'Code',
      extInfo: 'ExtInfo',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      code: 'string',
      extInfo: 'string',
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73****9-175A-1324-8202-9FAAB*****A
   */
  requestId?: string;
  result?: HotelQrBindResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: HotelQrBindResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HotelQrBindResponseBody;
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
      body: HotelQrBindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfig?: ImportHotelConfigRequestImportHotelConfig;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfig: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfig: ImportHotelConfigRequestImportHotelConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfigShrink: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportHotelConfigResponseBody;
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
      body: ImportHotelConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequest extends $tea.Model {
  enableInfraredDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevices?: ImportRoomControlDevicesRequestLocationDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      hotelId: 'HotelId',
      locationDevices: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      hotelId: 'string',
      locationDevices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevices },
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesShrinkRequest extends $tea.Model {
  enableInfraredDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevicesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      hotelId: 'HotelId',
      locationDevicesShrink: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      hotelId: 'string',
      locationDevicesShrink: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsfregtre
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportRoomControlDevicesResponseBody;
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
      body: ImportRoomControlDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: ImportRoomGenieScenesRequestSceneList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  sceneListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneListShrink: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportRoomGenieScenesResponseBody;
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
      body: ImportRoomGenieScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemRequest extends $tea.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReq?: InsertHotelSceneBookItemRequestAddHotelSceneItemReq;
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      addHotelSceneItemReq: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReq: InsertHotelSceneBookItemRequestAddHotelSceneItemReq,
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReqShrink?: string;
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      addHotelSceneItemReqShrink: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReqShrink: 'string',
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 36FB***80C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertHotelSceneBookItemResponseBody;
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
      body: InsertHotelSceneBookItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  pushType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pushType: 'PushType',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pushType: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeRobotPushResponseBody;
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
      body: InvokeRobotPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 00534880-4397-5134-B212-1030B7A37C27
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllProvincesResponseBody;
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
      body: ListAllProvincesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 860194F7-9593-50EA-8E53-BCEC0D325A00
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCitiesByProvinceResponseBody;
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
      body: ListCitiesByProvinceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQARequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListCustomQARequestPage;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      page: ListCustomQARequestPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      pageShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListCustomQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListCustomQAResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListCustomQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCustomQAResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomQAResponseBody;
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
      body: ListCustomQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * hotelId
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListDialogueTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDialogueTemplateResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDialogueTemplateResponseBody;
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
      body: ListDialogueTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmRequest extends $tea.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  rooms?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      rooms: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmShrinkRequest extends $tea.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  roomsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomsShrink: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  result?: ListHotelAlarmResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelAlarmResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelAlarmResponseBody;
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
      body: ListHotelAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceRequest extends $tea.Model {
  userInfo?: ListHotelControlDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: ListHotelControlDeviceRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceShrinkRequest extends $tea.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelControlDeviceResponseBody;
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
      body: ListHotelControlDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  message?: string;
  requestId?: string;
  result?: ListHotelInfoResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelInfoResponseBody;
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
      body: ListHotelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: ListHotelMessageTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelMessageTemplateResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelMessageTemplateResponseBody;
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
      body: ListHotelMessageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelOrderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelOrderRequestPayload,
      userInfo: ListHotelOrderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListHotelOrderResponseBodyPage;
  /**
   * @example
   * 07F61FDA-606F-10A0-8ED0-C6CE62710A48
   */
  requestId?: string;
  result?: ListHotelOrderResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelOrderResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelOrderResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelOrderResponseBody;
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
      body: ListHotelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsRequest extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoom?: ListHotelRoomsRequestHotelAdminRoom;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelAdminRoom: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoom: ListHotelRoomsRequestHotelAdminRoom,
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsShrinkRequest extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoomShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelAdminRoomShrink: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoomShrink: 'string',
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: ListHotelRoomsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelRoomsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelRoomsResponseBody;
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
      body: ListHotelRoomsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelSceneBookItemsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      page: 'Page',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      page: ListHotelSceneBookItemsRequestPage,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pageShrink: 'Page',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pageShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListHotelSceneBookItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelSceneBookItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneBookItemsResponseBody;
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
      body: ListHotelSceneBookItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelSceneItemRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListHotelSceneItemRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelSceneItemRequestPayload,
      userInfo: ListHotelSceneItemRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListHotelSceneItemResponseBodyPage;
  /**
   * @example
   * CEADB586-51CB-1B6B-95BD-AB85A7A08E97
   */
  requestId?: string;
  result?: ListHotelSceneItemResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelSceneItemResponseBodyPage,
      requestId: 'string',
      result: ListHotelSceneItemResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneItemResponseBody;
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
      body: ListHotelSceneItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReq?: ListHotelSceneItemsRequestListHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReq: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReq: ListHotelSceneItemsRequestListHotelSceneReq,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReqShrink: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReqShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListHotelSceneItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelSceneItemsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneItemsResponseBody;
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
      body: ListHotelSceneItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelServiceCategoryRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelServiceCategoryRequestPayload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5373C821-65D2-1764-B9F9-951914937FF5
   */
  requestId?: string;
  result?: ListHotelServiceCategoryResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelServiceCategoryResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelServiceCategoryResponseBody;
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
      body: ListHotelServiceCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequest extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequest?: ListHotelsRequestHotelRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequest: 'HotelRequest',
      page: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequest: ListHotelsRequestHotelRequest,
      page: ListHotelsRequestPage,
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsShrinkRequest extends $tea.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequestShrink: 'HotelRequest',
      pageShrink: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequestShrink: 'string',
      pageShrink: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   */
  requestId?: string;
  result?: ListHotelsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelsResponseBody;
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
      body: ListHotelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      serviceProvider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 860194F7-9593-50EA-8E53-BCEC0D325A00
   */
  requestId?: string;
  result?: { [key: string]: string[] };
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInfraredDeviceBrandsResponseBody;
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
      body: ListInfraredDeviceBrandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersRequest extends $tea.Model {
  brand?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      category: 'Category',
      city: 'City',
      hotelId: 'HotelId',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      category: 'string',
      city: 'string',
      hotelId: 'string',
      province: 'string',
      serviceProvider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0C90A059-3653-5356-A78E-8A6BDA606155
   */
  requestId?: string;
  result?: ListInfraredRemoteControllersResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInfraredRemoteControllersResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInfraredRemoteControllersResponseBody;
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
      body: ListInfraredRemoteControllersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1036C376-7A37-5A73-BE8B-C6DB40107EC1
   */
  requestId?: string;
  result?: { [key: string]: string[] };
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSTBServiceProvidersResponseBody;
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
      body: ListSTBServiceProvidersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryRequest extends $tea.Model {
  /**
   * @remarks
   * hotelId
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSceneCategoryResponseBody;
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
      body: ListSceneCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQARequest extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  page?: ListServiceQARequestPage;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      hotelId: 'string',
      keyword: 'string',
      page: ListServiceQARequestPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAShrinkRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      hotelId: 'string',
      keyword: 'string',
      pageShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListServiceQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListServiceQAResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListServiceQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListServiceQAResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceQAResponseBody;
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
      body: ListServiceQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $tea.Model {
  /**
   * @example
   * 2022-09-14 14:23:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * true
   */
  isDesc?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  page?: ListTicketsRequestPage;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * gmtCalled
   */
  sortField?: string;
  /**
   * @example
   * 2022-04-08 09:39:00
   */
  startTime?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hotelId: 'HotelId',
      isDesc: 'IsDesc',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      page: 'Page',
      roomNo: 'RoomNo',
      sortField: 'SortField',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hotelId: 'string',
      isDesc: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      page: ListTicketsRequestPage,
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsShrinkRequest extends $tea.Model {
  /**
   * @example
   * 2022-09-14 14:23:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * true
   */
  isDesc?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  pageShrink?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * gmtCalled
   */
  sortField?: string;
  /**
   * @example
   * 2022-04-08 09:39:00
   */
  startTime?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hotelId: 'HotelId',
      isDesc: 'IsDesc',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      pageShrink: 'Page',
      roomNo: 'RoomNo',
      sortField: 'SortField',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hotelId: 'string',
      isDesc: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      pageShrink: 'string',
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListTicketsResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListTicketsResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListTicketsResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTicketsResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTicketsResponseBody;
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
      body: ListTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  page?: PageGetHotelRoomDevicesResponseBodyPage;
  /**
   * @example
   * 4EFBDDF4-B19D-526C-8C3D-CD8AB51974EE
   */
  requestId?: string;
  result?: PageGetHotelRoomDevicesResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      page: PageGetHotelRoomDevicesResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PageGetHotelRoomDevicesResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageGetHotelRoomDevicesResponseBody;
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
      body: PageGetHotelRoomDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PmsEventReportResponseBody;
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
      body: PmsEventReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageRequest extends $tea.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReq?: PushHotelMessageRequestPushHotelMessageReq;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReq: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReq: PushHotelMessageRequestPushHotelMessageReq,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReqShrink: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReqShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushHotelMessageResponseBody;
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
      body: PushHotelMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commands?: PushVoiceBoxCommandsRequestCommands[];
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': PushVoiceBoxCommandsRequestCommands },
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commandsShrink: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandsShrink: 'string',
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushVoiceBoxCommandsResponseBody;
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
      body: PushVoiceBoxCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  welcomeMusicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      welcomeMusicUrl: 'WelcomeMusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      welcomeMusicUrl: 'string',
      welcomeText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushWelcomeResponseBody;
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
      body: PushWelcomeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  templateVariable?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      templateVariable: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      templateVariable: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  templateVariableShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      templateVariableShrink: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      templateVariableShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushWelcomeTextAndMusicResponseBody;
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
      body: PushWelcomeTextAndMusicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequest extends $tea.Model {
  payload?: QueryDeviceStatusRequestPayload;
  userInfo?: QueryDeviceStatusRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: QueryDeviceStatusRequestPayload,
      userInfo: QueryDeviceStatusRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusShrinkRequest extends $tea.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsgrefds
   */
  requestId?: string;
  result?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceStatusResponseBody;
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
      body: QueryDeviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailRequest extends $tea.Model {
  /**
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * 38:c8:**:**:f5:22
   */
  mac?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * 设备sn信息
   * 注：若在mac uuid sn全都输入的情况下 按照输入正确的内容查询 若全输入都是正确的 则 按照 uuid > mac > sn 优先级查询
   * 传入mac uuid sn其中一个 则酒店id和房间号可不传
   * 
   * @example
   * 280**28
   */
  sn?: string;
  /**
   * @example
   * 588***96j5WU
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      mac: 'Mac',
      roomNo: 'RoomNo',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      mac: 'string',
      roomNo: 'string',
      sn: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: QueryHotelRoomDetailResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: QueryHotelRoomDetailResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotelRoomDetailResponseBody;
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
      body: QueryHotelRoomDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsgfdscvre
   */
  requestId?: string;
  result?: QueryRoomControlDevicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomControlDevicesResponseBody;
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
      body: QueryRoomControlDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusRequest extends $tea.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67***6FA
   */
  requestId?: string;
  result?: QueryRoomControlDevicesAndStatusResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResult },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomControlDevicesAndStatusResponseBody;
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
      body: QueryRoomControlDevicesAndStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusRequest extends $tea.Model {
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: QueryRoomStatusResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: QueryRoomStatusResponseBodyResult,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomStatusResponseBody;
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
      body: QueryRoomStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStates?: number[];
  sceneTypes?: string[];
  templateInfoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStates: 'SceneStates',
      sceneTypes: 'SceneTypes',
      templateInfoIds: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStates: { 'type': 'array', 'itemType': 'number' },
      sceneTypes: { 'type': 'array', 'itemType': 'string' },
      templateInfoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStatesShrink?: string;
  sceneTypesShrink?: string;
  templateInfoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStatesShrink: 'SceneStates',
      sceneTypesShrink: 'SceneTypes',
      templateInfoIdsShrink: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStatesShrink: 'string',
      sceneTypesShrink: 'string',
      templateInfoIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  results?: QuerySceneListResponseBodyResults[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResults },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySceneListResponseBody;
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
      body: QuerySceneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30**53
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tbxxxx
   */
  childAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      childAccountName: 'ChildAccountName',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      childAccountName: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F12B***F34E
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveChildAccountAuthResponseBody;
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
      body: RemoveChildAccountAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelRequest extends $tea.Model {
  /**
   * @remarks
   * appkey
   * 
   * This parameter is required.
   * 
   * @example
   * 30193305
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveHotelResponseBody;
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
      body: RemoveHotelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetWelcomeTextAndMusicResponseBody;
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
      body: ResetWelcomeTextAndMusicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequest extends $tea.Model {
  deviceInfo?: RoomCheckOutRequestDeviceInfo;
  userInfo?: RoomCheckOutRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: RoomCheckOutRequestDeviceInfo,
      userInfo: RoomCheckOutRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutShrinkRequest extends $tea.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * dsvrevd
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RoomCheckOutResponseBody;
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
      body: RoomCheckOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: SubmitHotelOrderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: SubmitHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: SubmitHotelOrderRequestPayload,
      userInfo: SubmitHotelOrderRequestUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CCCF2E86-D9B5-12A6-AD25-8A06933D2B0F
   */
  requestId?: string;
  /**
   * @example
   * 20220809104752000114671478353329
   */
  result?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitHotelOrderResponseBody;
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
      body: SubmitHotelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkRequest extends $tea.Model {
  categoryCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  categoryEnName?: string;
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  locationCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bedLight
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  switch?: number;
  fanSpeed?: string;
  mode?: string;
  roomTemperature?: string;
  temperature?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCnName: 'CategoryCnName',
      categoryEnName: 'CategoryEnName',
      deviceName: 'DeviceName',
      hotelId: 'HotelId',
      location: 'Location',
      locationCnName: 'LocationCnName',
      number: 'Number',
      roomNo: 'RoomNo',
      switch: 'Switch',
      fanSpeed: 'fanSpeed',
      mode: 'mode',
      roomTemperature: 'roomTemperature',
      temperature: 'temperature',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCnName: 'string',
      categoryEnName: 'string',
      deviceName: 'string',
      hotelId: 'string',
      location: 'string',
      locationCnName: 'string',
      number: 'string',
      roomNo: 'string',
      switch: 'number',
      fanSpeed: 'string',
      mode: 'string',
      roomTemperature: 'string',
      temperature: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      statusCode: 'StatusCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: 'boolean',
      statusCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncDeviceStatusWithAkResponseBody;
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
      body: SyncDeviceStatusWithAkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQARequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkOutTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingExpenses?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingPosition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelIntroduction: 'HotelIntroduction',
      hotelMember: 'HotelMember',
      hotelService: 'HotelService',
      parkingExpenses: 'ParkingExpenses',
      parkingPosition: 'ParkingPosition',
      phoneNumber: 'PhoneNumber',
      wifiName: 'WifiName',
      wifiPassword: 'WifiPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInTime: 'string',
      checkOutTime: 'string',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelIntroduction: 'string',
      hotelMember: 'string',
      hotelService: 'string',
      parkingExpenses: 'string',
      parkingPosition: 'string',
      phoneNumber: 'string',
      wifiName: 'string',
      wifiPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicInfoQAResponseBody;
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
      body: UpdateBasicInfoQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQARequest extends $tea.Model {
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customQAId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  keyWords?: string[];
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      customQAId: 'string',
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAShrinkRequest extends $tea.Model {
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customQAId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  keyWordsShrink?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      customQAId: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***BB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomQAResponseBody;
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
      body: UpdateCustomQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31342884
   */
  appKey?: string;
  /**
   * @example
   * 2022-02-22 00:00:00
   */
  estOpenTime?: string;
  hotelAddress?: string;
  /**
   * @example
   * a*****@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 130***
   */
  phoneNumber?: string;
  relatedPks?: string[];
  remark?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPks: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelId: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPks: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31342884
   */
  appKey?: string;
  /**
   * @example
   * 2022-02-22 00:00:00
   */
  estOpenTime?: string;
  hotelAddress?: string;
  /**
   * @example
   * a*****@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 130***
   */
  phoneNumber?: string;
  relatedPksShrink?: string;
  remark?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPksShrink: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelId: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPksShrink: 'string',
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46C53AEB-B19C-5C42-B32E-A726979C126F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelResponseBody;
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
      body: UpdateHotelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: UpdateHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfo?: UpdateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': UpdateHotelAlarmRequestAlarms },
      hotelId: 'string',
      scheduleInfo: UpdateHotelAlarmRequestScheduleInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
      scheduleInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmResponseBody extends $tea.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelAlarmResponseBody;
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
      body: UpdateHotelAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneBookReq
   * 
   * This parameter is required.
   */
  updateHotelSceneBookReq?: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReq: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReq: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneBookReq
   * 
   * This parameter is required.
   */
  updateHotelSceneBookReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReqShrink: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReqShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelSceneBookItemResponseBody;
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
      body: UpdateHotelSceneBookItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReq?: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReq?: UpdateHotelSceneItemRequestUpdateHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReq: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReq: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReq: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq,
      updateHotelSceneReq: UpdateHotelSceneItemRequestUpdateHotelSceneReq,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReqShrink?: string;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReqShrink: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReqShrink: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReqShrink: 'string',
      updateHotelSceneReqShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C***67DB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelSceneItemResponseBody;
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
      body: UpdateHotelSceneItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateRequest extends $tea.Model {
  templateDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMessageTemplateResponseBody;
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
      body: UpdateMessageTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTO?: UpdateRcuSceneRequestSceneRelationExtDTO;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTO: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTO: UpdateRcuSceneRequestSceneRelationExtDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTOShrink: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTOShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3A680F3A-6672-5A47-AB28-12BBCD80C679
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRcuSceneResponseBody;
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
      body: UpdateRcuSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQARequest extends $tea.Model {
  answer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  /**
   * @example
   * true
   */
  isActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hotelId: 'HotelId',
      serviceQAId: 'ServiceQAId',
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hotelId: 'string',
      serviceQAId: 'number',
      isActive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67***6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceQAResponseBody;
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
      body: UpdateServiceQAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waiting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupKey: 'GroupKey',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupKey: 'string',
      hotelId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTicketResponseBody;
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
      body: UpdateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ResponseBodyResult extends $tea.Model {
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  keyWords?: string;
  /**
   * @example
   * 8xxx9
   */
  lastOperator?: string;
  majorQuestion?: string;
  /**
   * @remarks
   * qaID
   * 
   * @example
   * 1
   */
  qaId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      lastOperator: 'LastOperator',
      majorQuestion: 'MajorQuestion',
      qaId: 'QaId',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      hotelId: 'string',
      keyWords: 'string',
      lastOperator: 'string',
      majorQuestion: 'string',
      qaId: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequestHotelScreenSaver extends $tea.Model {
  /**
   * @example
   * https://a****jpg
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequestNightMode extends $tea.Model {
  defaultBright?: string;
  defaultVolume?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 22:00
   */
  end?: string;
  /**
   * @example
   * screenoff
   */
  standbyAction?: string;
  /**
   * @example
   * 7:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      defaultBright: 'DefaultBright',
      defaultVolume: 'DefaultVolume',
      enable: 'Enable',
      end: 'End',
      standbyAction: 'StandbyAction',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBright: 'string',
      defaultVolume: 'string',
      enable: 'boolean',
      end: 'string',
      standbyAction: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverRequestHotelScreenSaver extends $tea.Model {
  /**
   * @example
   * xxx.png
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelRequestAuditHotelReq extends $tea.Model {
  /**
   * @example
   * 同意
   */
  auditOpinion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      auditOpinion: 'AuditOpinion',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditOpinion: 'string',
      hotelId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceResponseBodyResult extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmRequestScheduleInfoOnce extends $tea.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 19
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 9
   */
  month?: number;
  /**
   * @example
   * 2022
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmRequestScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmRequestScheduleInfo extends $tea.Model {
  once?: CreateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * This parameter is required.
   */
  type?: string;
  weekly?: CreateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: CreateHotelAlarmRequestScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 94
   */
  alarmId?: number;
  /**
   * @example
   * Pvk***TA==
   */
  deviceOpenId?: string;
  failMsg?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @example
   * mg***Qd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      failMsg: 'FailMsg',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      failMsg: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneRequestSceneRelationExtDTO extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpusList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmRequestAlarms extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5029
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PvkB***TA==
   */
  deviceOpenId?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgw/k***HQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aircondition
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  cmd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * air_condition
   */
  deviceNumber?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cmd: 'Cmd',
      deviceNumber: 'DeviceNumber',
      extendInfo: 'ExtendInfo',
      location: 'Location',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cmd: 'string',
      deviceNumber: 'string',
      extendInfo: 'string',
      location: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 200
   */
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

export class GetBasicInfoQAResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @example
   * 11:11
   */
  checkOutTime?: string;
  hotelAddress?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  parkingExpenses?: string;
  parkingPosition?: string;
  /**
   * @example
   * 123***
   */
  phoneNumber?: string;
  wifiName?: string;
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
      hotelIntroduction: 'HotelIntroduction',
      hotelMember: 'HotelMember',
      hotelService: 'HotelService',
      parkingExpenses: 'ParkingExpenses',
      parkingPosition: 'ParkingPosition',
      phoneNumber: 'PhoneNumber',
      wifiName: 'WifiName',
      wifiPassword: 'WifiPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInTime: 'string',
      checkOutTime: 'string',
      hotelAddress: 'string',
      hotelIntroduction: 'string',
      hotelMember: 'string',
      hotelService: 'string',
      parkingExpenses: 'string',
      parkingPosition: 'string',
      phoneNumber: 'string',
      wifiName: 'string',
      wifiPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponseBodyResult extends $tea.Model {
  /**
   * @example
   * https://ai***.mp4
   */
  startVideoMd5?: string;
  /**
   * @example
   * 40c8***97
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceRequestDeviceInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1***2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * 2022-07-21 20:02:12
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 2E57***D45F9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hotelId: 'HotelId',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotelId: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1649316479098
   */
  expireAt?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 2E57***D45F9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      hotelId: 'HotelId',
      icon: 'Icon',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      hotelId: 'string',
      icon: 'string',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * cf24***96e7
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 0862***A809
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      hotelId: 'HotelId',
      icon: 'Icon',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      hotelId: 'string',
      icon: 'string',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBodyResultModeList extends $tea.Model {
  /**
   * @example
   * 浪漫模式
   */
  cnName?: string;
  /**
   * @example
   * romantic
   */
  code?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/langman.png
   */
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBodyResult extends $tea.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhn.jpg
   */
  backgroundImage?: string;
  /**
   * @example
   * 宣雍测试橙蜂酒店
   */
  hotelName?: string;
  modeList?: GetHotelHomeBackImageAndModesResponseBodyResultModeList[];
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      hotelName: 'HotelName',
      modeList: 'ModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      hotelName: 'string',
      modeList: { 'type': 'array', 'itemType': GetHotelHomeBackImageAndModesResponseBodyResultModeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeRequestUserInfo extends $tea.Model {
  /**
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2RequestUserInfo extends $tea.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ResponseBodyResult extends $tea.Model {
  content?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      hotelId: 'HotelId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hotelId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20220714150702000168270112410630
   */
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 200
   */
  applyAmt?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/weixiu/dianqilei/chuanglian.png
   */
  itemUrl?: string;
  /**
   * @example
   * 窗帘
   */
  name?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      itemUrl: 'ItemUrl',
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      itemUrl: 'string',
      name: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1.0.0-release
   */
  firmwareVersion?: string;
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * aa:aa:aa:aa:aa:aa
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * dsfdsfrgreg
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBodyResultDialogueList extends $tea.Model {
  /**
   * @example
   * 1666164774
   */
  createTime?: number;
  /**
   * @example
   * 336
   */
  dialogueId?: string;
  noAnswer?: string;
  /**
   * @example
   * 4
   */
  noAnswerTemplate?: string;
  /**
   * @example
   * 0
   */
  process?: number;
  question?: string;
  /**
   * @example
   * 10336
   */
  serviceId?: string;
  /**
   * @example
   * 1666164774
   */
  updateTime?: number;
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
      updateTime: 'number',
      yesAnswer: 'string',
      yesAnswerTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  dialogueList?: GetHotelSceneItemDetailResponseBodyResultDialogueList[];
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/zhijin.png
   */
  icon?: string;
  /**
   * @example
   * 10336
   */
  id?: number;
  /**
   * @example
   * 擦鞋布
   */
  name?: string;
  /**
   * @example
   * 170
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  /**
   * @example
   * 1666168828
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetHotelSceneItemDetailResponseBodyResultDialogueList },
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponseBodyResult extends $tea.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhd.jpg
   */
  picUrl?: string;
  /**
   * @example
   * common-weather
   */
  styleCode?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      styleCode: 'StyleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      styleCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponseBodyResult extends $tea.Model {
  cnName?: string;
  /**
   * @example
   * common-weather
   */
  code?: string;
  /**
   * @example
   * common-weather
   */
  enName?: string;
  /**
   * @example
   * https://img.***.png
   */
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      enName: 'EnName',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      enName: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResultHotelScreenSaver extends $tea.Model {
  /**
   * @example
   * https://a***png
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResultNightMode extends $tea.Model {
  /**
   * @remarks
   * 夜间模式下的默认亮度
   */
  defaultBright?: string;
  /**
   * @remarks
   * 夜间模式下的默认音量
   */
  defaultVolume?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 22:00
   */
  end?: string;
  /**
   * @example
   * screenoff
   */
  standbyAction?: string;
  /**
   * @example
   * 07:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      defaultBright: 'DefaultBright',
      defaultVolume: 'DefaultVolume',
      enable: 'Enable',
      end: 'End',
      standbyAction: 'StandbyAction',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBright: 'string',
      defaultVolume: 'string',
      enable: 'boolean',
      end: 'string',
      standbyAction: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 0
   */
  deleteToken?: number;
  /**
   * @example
   * {}
   */
  extInfo?: string;
  hotelDeviceModeList?: string[];
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelScreenSaver?: GetHotelSettingResponseBodyResultHotelScreenSaver;
  nightMode?: GetHotelSettingResponseBodyResultNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deleteToken: 'DeleteToken',
      extInfo: 'ExtInfo',
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
      nightMode: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteToken: 'number',
      extInfo: 'string',
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: GetHotelSettingResponseBodyResultHotelScreenSaver,
      nightMode: GetHotelSettingResponseBodyResultNightMode,
      settingType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponseBodyResult extends $tea.Model {
  name?: string;
  /**
   * @example
   * jTOSl***l1odxImRw
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 4325***765
   */
  organizationId?: string;
  /**
   * @example
   * 8bh2****8s8
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      unionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponseBodyResult extends $tea.Model {
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResultOpenDeviceInfo extends $tea.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResultOpenUserInfo extends $tea.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResult extends $tea.Model {
  openDeviceInfo?: HotelQrBindResponseBodyResultOpenDeviceInfo;
  openUserInfo?: HotelQrBindResponseBodyResultOpenUserInfo;
  static names(): { [key: string]: string } {
    return {
      openDeviceInfo: 'OpenDeviceInfo',
      openUserInfo: 'OpenUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openDeviceInfo: HotelQrBindResponseBodyResultOpenDeviceInfo,
      openUserInfo: HotelQrBindResponseBodyResultOpenUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequestImportHotelConfigRcuCustomScenes extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpusList?: string[];
  description?: string;
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequestImportHotelConfig extends $tea.Model {
  rcuCustomScenes?: ImportHotelConfigRequestImportHotelConfigRcuCustomScenes[];
  static names(): { [key: string]: string } {
    return {
      rcuCustomScenes: 'RcuCustomScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcuCustomScenes: { 'type': 'array', 'itemType': ImportHotelConfigRequestImportHotelConfigRcuCustomScenes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList extends $tea.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt extends $tea.Model {
  switchList?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevices extends $tea.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  connectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceName?: string;
  dn?: string;
  infraredId?: string;
  infraredIndex?: string;
  infraredVersion?: string;
  multiKeySwitchExt?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  pk?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
      dn: 'Dn',
      infraredId: 'InfraredId',
      infraredIndex: 'InfraredIndex',
      infraredVersion: 'InfraredVersion',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      pk: 'Pk',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevices extends $tea.Model {
  devices?: ImportRoomControlDevicesRequestLocationDevicesDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevices },
      location: 'string',
      locationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActionsAttributeValues extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * powerstate
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActionsDevice extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 0
   */
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3c5d2ab8f9ec
   */
  deviceNumber?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActions extends $tea.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListActionsAttributeValues[];
  device?: ImportRoomGenieScenesRequestSceneListActionsDevice;
  reply?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      device: 'Device',
      reply: 'Reply',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActionsAttributeValues },
      device: ImportRoomGenieScenesRequestSceneListActionsDevice,
      reply: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersAttributeValues extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersDevice extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  deviceIndex?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceNumber?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'string',
      deviceNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggers extends $tea.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListTriggersAttributeValues[];
  corpusList?: string[];
  device?: ImportRoomGenieScenesRequestSceneListTriggersDevice;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      corpusList: 'CorpusList',
      device: 'Device',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggersAttributeValues },
      corpusList: { 'type': 'array', 'itemType': 'string' },
      device: ImportRoomGenieScenesRequestSceneListTriggersDevice,
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actions?: ImportRoomGenieScenesRequestSceneListActions[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  display?: boolean;
  /**
   * @example
   * http://xxx.com/yyy.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  triggerLogical?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  triggers?: ImportRoomGenieScenesRequestSceneListTriggers[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      description: 'Description',
      display: 'Display',
      icon: 'Icon',
      sceneName: 'SceneName',
      triggerLogical: 'TriggerLogical',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActions },
      description: 'string',
      display: 'boolean',
      icon: 'string',
      sceneName: 'string',
      triggerLogical: 'number',
      triggers: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemRequestAddHotelSceneItemReq extends $tea.Model {
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1250
   */
  price?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      name: 'Name',
      price: 'Price',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      name: 'string',
      price: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQARequestPage extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class ListCustomQAResponseBodyPage extends $tea.Model {
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
   * 21
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 22;11
   */
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * 111
   */
  customQAId?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * 22;11
   */
  keyWords?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 22;11
   */
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      customQAId: 'string',
      hotelId: 'string',
      keyWords: 'string',
      majorQuestion: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate extends $tea.Model {
  /**
   * @example
   * ${goodsName}${price}元，请问需要服务员送来吗？
   */
  nonzeroPriceYesAnswer?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品。
   */
  zeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来。
   */
  zeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
      zeroPriceNoAnswer: 'ZeroPriceNoAnswer',
      zeroPriceYesAnswer: 'ZeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceYesAnswer: 'string',
      zeroPriceNoAnswer: 'string',
      zeroPriceYesAnswer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate extends $tea.Model {
  /**
   * @example
   * 好的，已取消。
   */
  nonzeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来${goodsName}
   */
  nonzeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceNoAnswer: 'NonzeroPriceNoAnswer',
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceNoAnswer: 'string',
      nonzeroPriceYesAnswer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetail extends $tea.Model {
  firstDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate;
  secondDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate;
  static names(): { [key: string]: string } {
    return {
      firstDialogueTemplate: 'FirstDialogueTemplate',
      secondDialogueTemplate: 'SecondDialogueTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate,
      secondDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResult extends $tea.Model {
  templateDetail?: ListDialogueTemplateResponseBodyResultTemplateDetail;
  /**
   * @example
   * 4
   */
  templateId?: number;
  /**
   * @example
   * 物品多轮模板
   */
  templateName?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: ListDialogueTemplateResponseBodyResultTemplateDetail,
      templateId: 'number',
      templateName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBodyResultScheduleInfoOnce extends $tea.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 9
   */
  month?: number;
  /**
   * @example
   * 2022
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBodyResultScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBodyResultScheduleInfo extends $tea.Model {
  once?: ListHotelAlarmResponseBodyResultScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: ListHotelAlarmResponseBodyResultScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: ListHotelAlarmResponseBodyResultScheduleInfoOnce,
      type: 'string',
      weekly: ListHotelAlarmResponseBodyResultScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 5039
   */
  alarmId?: number;
  /**
   * @example
   * PvkB****VVTA==
   */
  deviceOpenId?: string;
  scheduleInfo?: ListHotelAlarmResponseBodyResultScheduleInfo;
  /**
   * @example
   * mgw/k***HQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      scheduleInfo: 'ScheduleInfo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      scheduleInfo: ListHotelAlarmResponseBodyResultScheduleInfo,
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBodyResultAuthAccount extends $tea.Model {
  /**
   * @example
   * leetest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBodyResult extends $tea.Model {
  authAccount?: ListHotelInfoResponseBodyResultAuthAccount[];
  hotelAddress?: string;
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  hotelName?: string;
  static names(): { [key: string]: string } {
    return {
      authAccount: 'AuthAccount',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccount: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResultAuthAccount },
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 不通过
   */
  auditMark?: string;
  /**
   * @example
   * COMMIT
   */
  auditStatus?: string;
  /**
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditMark: 'AuditMark',
      auditStatus: 'AuditStatus',
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMark: 'string',
      auditStatus: 'string',
      templateDetail: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestPayloadPage extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class ListHotelOrderRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelOrderRequestPayloadPage;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelOrderRequestPayloadPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBodyPage extends $tea.Model {
  hasNext?: boolean;
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
   * 21
   */
  total?: number;
  /**
   * @example
   * 7
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 21.5
   */
  applyAmt?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  /**
   * @example
   * 20220808180132000114508555527711
   */
  orderNo?: string;
  /**
   * @example
   * 12
   */
  quantity?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * REPAIR
   */
  type?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/shebeiweixiu.png
   */
  typeIconUrl?: string;
  /**
   * @example
   * 设备维修
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      orderNo: 'OrderNo',
      quantity: 'Quantity',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
      typeIconUrl: 'TypeIconUrl',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      orderNo: 'string',
      quantity: 'number',
      roomNo: 'string',
      status: 'string',
      type: 'string',
      typeIconUrl: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsRequestHotelAdminRoom extends $tea.Model {
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @example
   * 102
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsRequestPage extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class ListHotelSceneBookItemsResponseBodyResultPage extends $tea.Model {
  /**
   * @example
   * True
   */
  hasNext?: boolean;
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
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBodyResultSceneItemList extends $tea.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 11824
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @example
   * 1850
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * FOOD
   */
  type?: string;
  /**
   * @example
   * 1666161803
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBodyResult extends $tea.Model {
  page?: ListHotelSceneBookItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneBookItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneBookItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneBookItemsResponseBodyResultSceneItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyPage extends $tea.Model {
  hasNext?: boolean;
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
   * 12
   */
  total?: number;
  /**
   * @example
   * 6
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryListItemList extends $tea.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @example
   * 152860
   */
  id?: string;
  /**
   * @example
   * 棉签
   */
  name?: string;
  /**
   * @example
   * 1
   */
  price?: number;
  residueLimit?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      residueLimit: 'ResidueLimit',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      icon: 'string',
      id: 'string',
      name: 'string',
      price: 'number',
      residueLimit: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryList extends $tea.Model {
  itemList?: ListHotelSceneItemResponseBodyResultSecondCategoryListItemList[];
  /**
   * @example
   * 客用品类
   */
  secondCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      secondCategoryName: 'SecondCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryListItemList },
      secondCategoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResult extends $tea.Model {
  secondCategoryList?: ListHotelSceneItemResponseBodyResultSecondCategoryList[];
  static names(): { [key: string]: string } {
    return {
      secondCategoryList: 'SecondCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondCategoryList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequestListHotelSceneReqPage extends $tea.Model {
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

export class ListHotelSceneItemsRequestListHotelSceneReq extends $tea.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * 棉签
   */
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelSceneItemsRequestListHotelSceneReqPage;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keywords: 'Keywords',
      page: 'Page',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keywords: 'string',
      page: ListHotelSceneItemsRequestListHotelSceneReqPage,
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResultPage extends $tea.Model {
  /**
   * @example
   * False
   */
  hasNext?: boolean;
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
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResultSceneItemList extends $tea.Model {
  beyondLimitReply?: string;
  /**
   * @example
   * 客用品类
   */
  category?: string;
  deliveryMethod?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 10336
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  /**
   * @example
   * 棉签
   */
  name?: string;
  paymentMethod?: string;
  /**
   * @example
   * 160
   */
  price?: number;
  robotName?: string;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  /**
   * @example
   * 1666163226
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      category: 'Category',
      deliveryMethod: 'DeliveryMethod',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      category: 'string',
      deliveryMethod: 'string',
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResult extends $tea.Model {
  page?: ListHotelSceneItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneItemsResponseBodyResultSceneItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBodyResult extends $tea.Model {
  /**
   * @example
   * GOODS
   */
  code?: string;
  /**
   * @example
   * 生活及洗漱用品
   */
  desc?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/wupintianjia.png
   */
  icon?: string;
  /**
   * @example
   * 物品添加
   */
  name?: string;
  /**
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      icon: 'Icon',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      icon: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequestHotelRequest extends $tea.Model {
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequestPage extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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

export class ListHotelsResponseBodyResultHotelInfoList extends $tea.Model {
  accountNames?: string[];
  /**
   * @example
   * 1654568802000
   */
  createTime?: number;
  /**
   * @example
   * 酒店地址
   */
  hotelAddress?: string;
  /**
   * @example
   * 73ab1b03018d4da69b5bef17095f569b
   */
  hotelId?: string;
  /**
   * @example
   * 酒店名称
   */
  hotelName?: string;
  /**
   * @example
   * 酒店
   */
  industryType?: string;
  /**
   * @example
   * 13312340987
   */
  phoneNumber?: string;
  /**
   * @example
   * 测试产品
   */
  relatedProductName?: string;
  /**
   * @example
   * 12
   */
  roomNum?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      createTime: 'CreateTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      industryType: 'IndustryType',
      phoneNumber: 'PhoneNumber',
      relatedProductName: 'RelatedProductName',
      roomNum: 'RoomNum',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
      industryType: 'string',
      phoneNumber: 'string',
      relatedProductName: 'string',
      roomNum: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResultPage extends $tea.Model {
  hasNext?: boolean;
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
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResult extends $tea.Model {
  hotelInfoList?: ListHotelsResponseBodyResultHotelInfoList[];
  page?: ListHotelsResponseBodyResultPage;
  static names(): { [key: string]: string } {
    return {
      hotelInfoList: 'HotelInfoList',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfoList: { 'type': 'array', 'itemType': ListHotelsResponseBodyResultHotelInfoList },
      page: ListHotelsResponseBodyResultPage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 3747
   */
  rid?: number;
  /**
   * @example
   * 4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      rid: 'Rid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      rid: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQARequestPage extends $tea.Model {
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

export class ListServiceQAResponseBodyPage extends $tea.Model {
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
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBodyResult extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @example
   * ***
   */
  answer?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
  question?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      answer: 'Answer',
      gmtModified: 'GmtModified',
      question: 'Question',
      serviceQAId: 'ServiceQAId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      answer: 'string',
      gmtModified: 'string',
      question: 'string',
      serviceQAId: 'number',
      templates: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequestPage extends $tea.Model {
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

export class ListTicketsResponseBodyPage extends $tea.Model {
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
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResultDialogs extends $tea.Model {
  answer?: string;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * false
   */
  action?: boolean;
  /**
   * @example
   * ***
   */
  assignedHandler?: string;
  /**
   * @example
   * ***
   */
  chargesRemark?: string;
  /**
   * @example
   * ***
   */
  completeRemark?: string;
  dialogs?: ListTicketsResponseBodyResultDialogs[];
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCalled?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtDelayed?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @example
   * 45
   */
  id?: number;
  /**
   * @example
   * false
   */
  isAcceptedCharges?: boolean;
  /**
   * @example
   * true
   */
  isDelayed?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  operations?: { [key: string]: any }[];
  /**
   * @example
   * ***
   */
  remark?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      assignedHandler: 'AssignedHandler',
      chargesRemark: 'ChargesRemark',
      completeRemark: 'CompleteRemark',
      dialogs: 'Dialogs',
      gmtCalled: 'GmtCalled',
      gmtCreate: 'GmtCreate',
      gmtDelayed: 'GmtDelayed',
      gmtModified: 'GmtModified',
      groupKey: 'GroupKey',
      id: 'Id',
      isAcceptedCharges: 'IsAcceptedCharges',
      isDelayed: 'IsDelayed',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      operations: 'Operations',
      remark: 'Remark',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'boolean',
      assignedHandler: 'string',
      chargesRemark: 'string',
      completeRemark: 'string',
      dialogs: { 'type': 'array', 'itemType': ListTicketsResponseBodyResultDialogs },
      gmtCalled: 'string',
      gmtCreate: 'string',
      gmtDelayed: 'string',
      gmtModified: 'string',
      groupKey: 'string',
      id: 'number',
      isAcceptedCharges: 'boolean',
      isDelayed: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      operations: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      remark: 'string',
      roomNo: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBodyPage extends $tea.Model {
  /**
   * @example
   * 4
   */
  end?: number;
  /**
   * @example
   * False
   */
  hasNext?: boolean;
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
   * 0
   */
  start?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBodyResult extends $tea.Model {
  /**
   * @example
   * V21.10.00.313
   */
  firmwareVersion?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * b4:xx:xx:xx:65:2b
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  /**
   * @example
   * 1200xxx048
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageRequestPushHotelMessageReq extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  paramMap?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      paramMap: 'ParamMap',
      roomNo: 'RoomNo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      paramMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsRequestCommands extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commandName?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      commandDomain: 'CommandDomain',
      commandName: 'CommandName',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDomain: 'string',
      commandName: 'string',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayloadLocationDevices extends $tea.Model {
  /**
   * @example
   * night_light
   */
  deviceNumber?: string;
  /**
   * @example
   * light
   */
  deviceType?: string;
  /**
   * @example
   * room
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      deviceType: 'DeviceType',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      deviceType: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayload extends $tea.Model {
  locationDevices?: QueryDeviceStatusRequestPayloadLocationDevices[];
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      locationDevices: 'LocationDevices',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDevices: { 'type': 'array', 'itemType': QueryDeviceStatusRequestPayloadLocationDevices },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultAuthAccounts extends $tea.Model {
  accountName?: string;
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  authTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      authTime: 'AuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      authTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultDeviceInfos extends $tea.Model {
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  activeTime?: string;
  deviceName?: string;
  /**
   * @example
   * 6.1.8-RS-20230425.1806
   */
  firmwareVersion?: string;
  /**
   * @example
   * fa:03:23:58:c3:00
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * sag42dlz4qf
   */
  sn?: string;
  /**
   * @example
   * 41c95c18a0a643bcb58edf438877def5
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      deviceName: 'DeviceName',
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      deviceName: 'string',
      firmwareVersion: 'string',
      mac: 'string',
      onlineStatus: 'number',
      sn: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultOtherService extends $tea.Model {
  /**
   * @example
   * false
   */
  openCall?: boolean;
  /**
   * @example
   * 0
   */
  unhandleTickets?: number;
  static names(): { [key: string]: string } {
    return {
      openCall: 'OpenCall',
      unhandleTickets: 'UnhandleTickets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openCall: 'boolean',
      unhandleTickets: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos extends $tea.Model {
  /**
   * @example
   * light
   */
  categoryEnName?: string;
  /**
   * @example
   * 3
   */
  categoryId?: number;
  categoryName?: string;
  /**
   * @example
   * rcu
   */
  deviceConnectType?: string;
  /**
   * @example
   * 4
   */
  deviceCount?: number;
  /**
   * @example
   * readLight
   */
  deviceId?: string;
  deviceName?: string;
  /**
   * @example
   * room
   */
  locationEnName?: string;
  /**
   * @example
   * 1
   */
  locationId?: number;
  locationName?: string;
  /**
   * @example
   * a1ueWGP6W2L
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      categoryEnName: 'CategoryEnName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      deviceConnectType: 'DeviceConnectType',
      deviceCount: 'DeviceCount',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      locationEnName: 'LocationEnName',
      locationId: 'LocationId',
      locationName: 'LocationName',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryEnName: 'string',
      categoryId: 'number',
      categoryName: 'string',
      deviceConnectType: 'string',
      deviceCount: 'number',
      deviceId: 'string',
      deviceName: 'string',
      locationEnName: 'string',
      locationId: 'number',
      locationName: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfo extends $tea.Model {
  /**
   * @example
   * 78
   */
  appId?: number;
  /**
   * @example
   * app
   */
  appName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos[];
  /**
   * @example
   * http://www.xxx.com
   */
  rcuUrl?: string;
  /**
   * @example
   * 1170
   */
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      deviceInfos: 'DeviceInfos',
      rcuUrl: 'RcuUrl',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos },
      rcuUrl: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomServiceInfo extends $tea.Model {
  /**
   * @example
   * 0
   */
  bookServiceCnt?: number;
  /**
   * @example
   * 10
   */
  goodsServiceCnt?: number;
  /**
   * @example
   * 10
   */
  repairServiceCnt?: number;
  /**
   * @example
   * 12
   */
  roomServiceCnt?: number;
  static names(): { [key: string]: string } {
    return {
      bookServiceCnt: 'BookServiceCnt',
      goodsServiceCnt: 'GoodsServiceCnt',
      repairServiceCnt: 'RepairServiceCnt',
      roomServiceCnt: 'RoomServiceCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookServiceCnt: 'number',
      goodsServiceCnt: 'number',
      repairServiceCnt: 'number',
      roomServiceCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResult extends $tea.Model {
  authAccounts?: QueryHotelRoomDetailResponseBodyResultAuthAccounts[];
  /**
   * @example
   * rcu
   */
  connectType?: string;
  creatorAccountName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultDeviceInfos[];
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  hotelName?: string;
  otherService?: QueryHotelRoomDetailResponseBodyResultOtherService;
  roomControlInfo?: QueryHotelRoomDetailResponseBodyResultRoomControlInfo;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  roomServiceInfo?: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo;
  static names(): { [key: string]: string } {
    return {
      authAccounts: 'AuthAccounts',
      connectType: 'ConnectType',
      creatorAccountName: 'CreatorAccountName',
      deviceInfos: 'DeviceInfos',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      otherService: 'OtherService',
      roomControlInfo: 'RoomControlInfo',
      roomNo: 'RoomNo',
      roomServiceInfo: 'RoomServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccounts: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultAuthAccounts },
      connectType: 'string',
      creatorAccountName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultDeviceInfos },
      hotelId: 'string',
      hotelName: 'string',
      otherService: QueryHotelRoomDetailResponseBodyResultOtherService,
      roomControlInfo: QueryHotelRoomDetailResponseBodyResultRoomControlInfo,
      roomNo: 'string',
      roomServiceInfo: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $tea.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  deviceStatus?: string;
  elementCode?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      deviceStatus: 'string',
      elementCode: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt extends $tea.Model {
  switchList?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevices extends $tea.Model {
  aliasList?: string[];
  connectType?: string;
  DN?: string;
  deviceName?: string;
  deviceStatus?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt;
  /**
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      connectType: 'ConnectType',
      DN: 'DN',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      connectType: 'string',
      DN: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      PK: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResult extends $tea.Model {
  devices?: QueryRoomControlDevicesResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $tea.Model {
  aliasList?: string[];
  /**
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 1
   */
  deviceIndex?: number;
  deviceName?: string;
  /**
   * @example
   * {
   *       "powerstate": "0"
   * }
   */
  deviceStatus?: string;
  /**
   * @example
   * e2
   */
  elementCode?: string;
  /**
   * @example
   * room
   */
  location?: string;
  status?: { [key: string]: string };
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      deviceStatus: 'string',
      elementCode: 'string',
      location: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt extends $tea.Model {
  switchList?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevices extends $tea.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  /**
   * @example
   * rcu
   */
  connectType?: string;
  deviceName?: string;
  /**
   * @example
   * {"powerstate": "1"}
   */
  deviceStatus?: string;
  /**
   * @example
   * 3c5d***9ec
   */
  dn?: string;
  /**
   * @example
   * 9**7
   */
  infraredId?: string;
  /**
   * @example
   * 2
   */
  infraredIndex?: string;
  /**
   * @example
   * 3.0
   */
  infraredVersion?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt;
  /**
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  /**
   * @example
   * 50255129
   */
  pk?: string;
  province?: string;
  serviceProvider?: string;
  status?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      dn: 'Dn',
      infraredId: 'InfraredId',
      infraredIndex: 'InfraredIndex',
      infraredVersion: 'InfraredVersion',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      pk: 'Pk',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResult extends $tea.Model {
  devices?: QueryRoomControlDevicesAndStatusResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
      roomNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResultSceneList extends $tea.Model {
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResultStatusList extends $tea.Model {
  statusName?: string;
  statusValue?: string;
  /**
   * @example
   * Thu Jan 09 13:56:51 CST 2025
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      statusName: 'StatusName',
      statusValue: 'StatusValue',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusName: 'string',
      statusValue: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResult extends $tea.Model {
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: QueryRoomStatusResponseBodyResultSceneList[];
  statusList?: QueryRoomStatusResponseBodyResultStatusList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultSceneList },
      statusList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBodyResultsTemplateInfoDTOList extends $tea.Model {
  description?: string;
  /**
   * @example
   * 6962
   */
  id?: number;
  /**
   * @example
   * 101
   */
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

export class QuerySceneListResponseBodyResults extends $tea.Model {
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  /**
   * @example
   * 73
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * external
   */
  sceneSource?: string;
  /**
   * @example
   * 1
   */
  sceneState?: number;
  /**
   * @example
   * common
   */
  sceneType?: string;
  templateInfoDTOList?: QuerySceneListResponseBodyResultsTemplateInfoDTOList[];
  unavailableReason?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      sceneSource: 'SceneSource',
      sceneState: 'SceneState',
      sceneType: 'SceneType',
      templateInfoDTOList: 'TemplateInfoDTOList',
      unavailableReason: 'UnavailableReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      sceneId: 'string',
      sceneName: 'string',
      sceneSource: 'string',
      sceneState: 'number',
      sceneType: 'string',
      templateInfoDTOList: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResultsTemplateInfoDTOList },
      unavailableReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequestDeviceInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestPayloadItemList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 152860
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestPayload extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  itemList?: SubmitHotelOrderRequestPayloadItemList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': SubmitHotelOrderRequestPayloadItemList },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestUserInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestAlarms extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pvk***VTA==
   */
  deviceOpenId?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgw/***dHQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestScheduleInfoOnce extends $tea.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  /**
   * @example
   * 9
   */
  month?: number;
  /**
   * @example
   * 2022
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestScheduleInfoWeekly extends $tea.Model {
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestScheduleInfo extends $tea.Model {
  once?: UpdateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: UpdateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: UpdateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: UpdateHotelAlarmRequestScheduleInfoWeekly,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq extends $tea.Model {
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1250
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isUseTemplateAnswer?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      isUseTemplateAnswer: 'IsUseTemplateAnswer',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUseTemplateAnswer: 'boolean',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList extends $tea.Model {
  /**
   * @example
   * 335
   */
  dialogueId?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品
   */
  noAnswer?: string;
  /**
   * @example
   * 4
   */
  noAnswerTemplate?: string;
  /**
   * @example
   * 0
   */
  process?: number;
  question?: string;
  /**
   * @remarks
   * itemId
   * 
   * @example
   * 10337
   */
  serviceId?: string;
  /**
   * @example
   * 纸巾1.5元，请问需要么？
   */
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
      yesAnswer: 'string',
      yesAnswerTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneReq extends $tea.Model {
  beyondLimitReply?: string;
  deliveryMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList[];
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * itemID
   * 
   * @example
   * 10337
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  name?: string;
  paymentMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 165
   */
  price?: number;
  robotName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 已添加
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      deliveryMethod: 'DeliveryMethod',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      deliveryMethod: 'string',
      dialogueList: { 'type': 'array', 'itemType': UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList },
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneRequestSceneRelationExtDTO extends $tea.Model {
  corpusList?: string[];
  description?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
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
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @param headers - AddCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCartoonResponse
   */
  async addCartoonWithOptions(request: AddCartoonRequest, headers: AddCartoonHeaders, runtime: $Util.RuntimeOptions): Promise<AddCartoonResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.startVideoMd5)) {
      body["StartVideoMd5"] = request.startVideoMd5;
    }

    if (!Util.isUnset(request.startVideoUrl)) {
      body["StartVideoUrl"] = request.startVideoUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCartoonResponse>(await this.callApi(params, req, runtime), new AddCartoonResponse({}));
  }

  /**
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @returns AddCartoonResponse
   */
  async addCartoon(request: AddCartoonRequest): Promise<AddCartoonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddCartoonHeaders({ });
    return await this.addCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 新增自定义问答
   * 
   * @param tmpReq - AddCustomQARequest
   * @param headers - AddCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAResponse
   */
  async addCustomQAWithOptions(tmpReq: AddCustomQARequest, headers: AddCustomQAHeaders, runtime: $Util.RuntimeOptions): Promise<AddCustomQAResponse> {
    Util.validateModel(tmpReq);
    let request = new AddCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!Util.isUnset(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!Util.isUnset(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!Util.isUnset(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!Util.isUnset(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomQAResponse>(await this.callApi(params, req, runtime), new AddCustomQAResponse({}));
  }

  /**
   * 新增自定义问答
   * 
   * @param request - AddCustomQARequest
   * @returns AddCustomQAResponse
   */
  async addCustomQA(request: AddCustomQARequest): Promise<AddCustomQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddCustomQAHeaders({ });
    return await this.addCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 添加问答V2
   * 
   * @param tmpReq - AddCustomQAV2Request
   * @param headers - AddCustomQAV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2WithOptions(tmpReq: AddCustomQAV2Request, headers: AddCustomQAV2Headers, runtime: $Util.RuntimeOptions): Promise<AddCustomQAV2Response> {
    Util.validateModel(tmpReq);
    let request = new AddCustomQAV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!Util.isUnset(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!Util.isUnset(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!Util.isUnset(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!Util.isUnset(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomQAV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addQAV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomQAV2Response>(await this.callApi(params, req, runtime), new AddCustomQAV2Response({}));
  }

  /**
   * 添加问答V2
   * 
   * @param request - AddCustomQAV2Request
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2(request: AddCustomQAV2Request): Promise<AddCustomQAV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddCustomQAV2Headers({ });
    return await this.addCustomQAV2WithOptions(request, headers, runtime);
  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @param headers - AddMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplateWithOptions(request: AddMessageTemplateRequest, headers: AddMessageTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<AddMessageTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMessageTemplateResponse>(await this.callApi(params, req, runtime), new AddMessageTemplateResponse({}));
  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplate(request: AddMessageTemplateRequest): Promise<AddMessageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddMessageTemplateHeaders({ });
    return await this.addMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param tmpReq - AddOrUpdateDisPlayModesRequest
   * @param headers - AddOrUpdateDisPlayModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModesWithOptions(tmpReq: AddOrUpdateDisPlayModesRequest, headers: AddOrUpdateDisPlayModesHeaders, runtime: $Util.RuntimeOptions): Promise<AddOrUpdateDisPlayModesResponse> {
    Util.validateModel(tmpReq);
    let request = new AddOrUpdateDisPlayModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddOrUpdateDisPlayModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateDisPlayModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOrUpdateDisPlayModesResponse>(await this.callApi(params, req, runtime), new AddOrUpdateDisPlayModesResponse({}));
  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param request - AddOrUpdateDisPlayModesRequest
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModes(request: AddOrUpdateDisPlayModesRequest): Promise<AddOrUpdateDisPlayModesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddOrUpdateDisPlayModesHeaders({ });
    return await this.addOrUpdateDisPlayModesWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param tmpReq - AddOrUpdateHotelSettingRequest
   * @param headers - AddOrUpdateHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSettingWithOptions(tmpReq: AddOrUpdateHotelSettingRequest, headers: AddOrUpdateHotelSettingHeaders, runtime: $Util.RuntimeOptions): Promise<AddOrUpdateHotelSettingResponse> {
    Util.validateModel(tmpReq);
    let request = new AddOrUpdateHotelSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    if (!Util.isUnset(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    if (!Util.isUnset(tmpReq.nightMode)) {
      request.nightModeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nightMode, "NightMode", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    if (!Util.isUnset(request.nightModeShrink)) {
      body["NightMode"] = request.nightModeShrink;
    }

    if (!Util.isUnset(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddOrUpdateHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOrUpdateHotelSettingResponse>(await this.callApi(params, req, runtime), new AddOrUpdateHotelSettingResponse({}));
  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param request - AddOrUpdateHotelSettingRequest
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSetting(request: AddOrUpdateHotelSettingRequest): Promise<AddOrUpdateHotelSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddOrUpdateHotelSettingHeaders({ });
    return await this.addOrUpdateHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param tmpReq - AddOrUpdateScreenSaverRequest
   * @param headers - AddOrUpdateScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaverWithOptions(tmpReq: AddOrUpdateScreenSaverRequest, headers: AddOrUpdateScreenSaverHeaders, runtime: $Util.RuntimeOptions): Promise<AddOrUpdateScreenSaverResponse> {
    Util.validateModel(tmpReq);
    let request = new AddOrUpdateScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddOrUpdateScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOrUpdateScreenSaverResponse>(await this.callApi(params, req, runtime), new AddOrUpdateScreenSaverResponse({}));
  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param request - AddOrUpdateScreenSaverRequest
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaver(request: AddOrUpdateScreenSaverRequest): Promise<AddOrUpdateScreenSaverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddOrUpdateScreenSaverHeaders({ });
    return await this.addOrUpdateScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @param headers - AddOrUpdateWelcomeTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeTextWithOptions(request: AddOrUpdateWelcomeTextRequest, headers: AddOrUpdateWelcomeTextHeaders, runtime: $Util.RuntimeOptions): Promise<AddOrUpdateWelcomeTextResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.musicUrl)) {
      body["MusicUrl"] = request.musicUrl;
    }

    if (!Util.isUnset(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddOrUpdateWelcomeText",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateWelcomeText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddOrUpdateWelcomeTextResponse>(await this.callApi(params, req, runtime), new AddOrUpdateWelcomeTextResponse({}));
  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeText(request: AddOrUpdateWelcomeTextRequest): Promise<AddOrUpdateWelcomeTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AddOrUpdateWelcomeTextHeaders({ });
    return await this.addOrUpdateWelcomeTextWithOptions(request, headers, runtime);
  }

  /**
   * 审批酒店
   * 
   * @param tmpReq - AuditHotelRequest
   * @param headers - AuditHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditHotelResponse
   */
  async auditHotelWithOptions(tmpReq: AuditHotelRequest, headers: AuditHotelHeaders, runtime: $Util.RuntimeOptions): Promise<AuditHotelResponse> {
    Util.validateModel(tmpReq);
    let request = new AuditHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.auditHotelReq)) {
      request.auditHotelReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditHotelReq, "AuditHotelReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.auditHotelReqShrink)) {
      query["AuditHotelReq"] = request.auditHotelReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuditHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/auditHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuditHotelResponse>(await this.callApi(params, req, runtime), new AuditHotelResponse({}));
  }

  /**
   * 审批酒店
   * 
   * @param request - AuditHotelRequest
   * @returns AuditHotelResponse
   */
  async auditHotel(request: AuditHotelRequest): Promise<AuditHotelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AuditHotelHeaders({ });
    return await this.auditHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建房间
   * 
   * @param tmpReq - BatchAddHotelRoomRequest
   * @param headers - BatchAddHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoomWithOptions(tmpReq: BatchAddHotelRoomRequest, headers: BatchAddHotelRoomHeaders, runtime: $Util.RuntimeOptions): Promise<BatchAddHotelRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchAddHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchAddHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddHotelRoomResponse>(await this.callApi(params, req, runtime), new BatchAddHotelRoomResponse({}));
  }

  /**
   * 批量创建房间
   * 
   * @param request - BatchAddHotelRoomRequest
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoom(request: BatchAddHotelRoomRequest): Promise<BatchAddHotelRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchAddHotelRoomHeaders({ });
    return await this.batchAddHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除房间
   * 
   * @param tmpReq - BatchDeleteHotelRoomRequest
   * @param headers - BatchDeleteHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoomWithOptions(tmpReq: BatchDeleteHotelRoomRequest, headers: BatchDeleteHotelRoomHeaders, runtime: $Util.RuntimeOptions): Promise<BatchDeleteHotelRoomResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDeleteHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchDeleteHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteHotelRoomResponse>(await this.callApi(params, req, runtime), new BatchDeleteHotelRoomResponse({}));
  }

  /**
   * 批量删除房间
   * 
   * @param request - BatchDeleteHotelRoomRequest
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoom(request: BatchDeleteHotelRoomRequest): Promise<BatchDeleteHotelRoomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BatchDeleteHotelRoomHeaders({ });
    return await this.batchDeleteHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @param headers - CheckoutWithAKHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAKWithOptions(request: CheckoutWithAKRequest, headers: CheckoutWithAKHeaders, runtime: $Util.RuntimeOptions): Promise<CheckoutWithAKResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckoutWithAK",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/checkoutWithAK`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckoutWithAKResponse>(await this.callApi(params, req, runtime), new CheckoutWithAKResponse({}));
  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAK(request: CheckoutWithAKRequest): Promise<CheckoutWithAKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CheckoutWithAKHeaders({ });
    return await this.checkoutWithAKWithOptions(request, headers, runtime);
  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @param headers - ChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuthWithOptions(request: ChildAccountAuthRequest, headers: ChildAccountAuthHeaders, runtime: $Util.RuntimeOptions): Promise<ChildAccountAuthResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.account)) {
      body["Account"] = request.account;
    }

    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/childAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChildAccountAuthResponse>(await this.callApi(params, req, runtime), new ChildAccountAuthResponse({}));
  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuth(request: ChildAccountAuthRequest): Promise<ChildAccountAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChildAccountAuthHeaders({ });
    return await this.childAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间内设备
   * 
   * @param tmpReq - ControlRoomDeviceRequest
   * @param headers - ControlRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDeviceWithOptions(tmpReq: ControlRoomDeviceRequest, headers: ControlRoomDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<ControlRoomDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new ControlRoomDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cmd)) {
      body["Cmd"] = request.cmd;
    }

    if (!Util.isUnset(request.deviceIndex)) {
      body["DeviceIndex"] = request.deviceIndex;
    }

    if (!Util.isUnset(request.deviceNumber)) {
      body["DeviceNumber"] = request.deviceNumber;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.propertiesShrink)) {
      body["Properties"] = request.propertiesShrink;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ControlRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/controlRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ControlRoomDeviceResponse>(await this.callApi(params, req, runtime), new ControlRoomDeviceResponse({}));
  }

  /**
   * 控制房间内设备
   * 
   * @param request - ControlRoomDeviceRequest
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDevice(request: ControlRoomDeviceRequest): Promise<ControlRoomDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ControlRoomDeviceHeaders({ });
    return await this.controlRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 创建酒店项目
   * 
   * @param tmpReq - CreateHotelRequest
   * @param headers - CreateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelResponse
   */
  async createHotelWithOptions(tmpReq: CreateHotelRequest, headers: CreateHotelHeaders, runtime: $Util.RuntimeOptions): Promise<CreateHotelResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!Util.isUnset(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!Util.isUnset(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!Util.isUnset(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.relatedPk)) {
      body["RelatedPk"] = request.relatedPk;
    }

    if (!Util.isUnset(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!Util.isUnset(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHotelResponse>(await this.callApi(params, req, runtime), new CreateHotelResponse({}));
  }

  /**
   * 创建酒店项目
   * 
   * @param request - CreateHotelRequest
   * @returns CreateHotelResponse
   */
  async createHotel(request: CreateHotelRequest): Promise<CreateHotelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateHotelHeaders({ });
    return await this.createHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建闹钟
   * 
   * @param tmpReq - CreateHotelAlarmRequest
   * @param headers - CreateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarmWithOptions(tmpReq: CreateHotelAlarmRequest, headers: CreateHotelAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<CreateHotelAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    if (!Util.isUnset(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.musicType)) {
      body["MusicType"] = request.musicType;
    }

    if (!Util.isUnset(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    if (!Util.isUnset(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHotelAlarmResponse>(await this.callApi(params, req, runtime), new CreateHotelAlarmResponse({}));
  }

  /**
   * 批量创建闹钟
   * 
   * @param request - CreateHotelAlarmRequest
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarm(request: CreateHotelAlarmRequest): Promise<CreateHotelAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateHotelAlarmHeaders({ });
    return await this.createHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param tmpReq - CreateRcuSceneRequest
   * @param headers - CreateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRcuSceneResponse
   */
  async createRcuSceneWithOptions(tmpReq: CreateRcuSceneRequest, headers: CreateRcuSceneHeaders, runtime: $Util.RuntimeOptions): Promise<CreateRcuSceneResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRcuSceneResponse>(await this.callApi(params, req, runtime), new CreateRcuSceneResponse({}));
  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param request - CreateRcuSceneRequest
   * @returns CreateRcuSceneResponse
   */
  async createRcuScene(request: CreateRcuSceneRequest): Promise<CreateRcuSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateRcuSceneHeaders({ });
    return await this.createRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @param headers - DeleteCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCartoonResponse
   */
  async deleteCartoonWithOptions(request: DeleteCartoonRequest, headers: DeleteCartoonHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCartoonResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCartoonResponse>(await this.callApi(params, req, runtime), new DeleteCartoonResponse({}));
  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @returns DeleteCartoonResponse
   */
  async deleteCartoon(request: DeleteCartoonRequest): Promise<DeleteCartoonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCartoonHeaders({ });
    return await this.deleteCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 删除自定义问答
   * 
   * @param tmpReq - DeleteCustomQARequest
   * @param headers - DeleteCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQAWithOptions(tmpReq: DeleteCustomQARequest, headers: DeleteCustomQAHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCustomQAResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customQAIds)) {
      request.customQAIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customQAIds, "CustomQAIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customQAIdsShrink)) {
      body["CustomQAIds"] = request.customQAIdsShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomQAResponse>(await this.callApi(params, req, runtime), new DeleteCustomQAResponse({}));
  }

  /**
   * 删除自定义问答
   * 
   * @param request - DeleteCustomQARequest
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQA(request: DeleteCustomQARequest): Promise<DeleteCustomQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCustomQAHeaders({ });
    return await this.deleteCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店闹钟
   * 
   * @param tmpReq - DeleteHotelAlarmRequest
   * @param headers - DeleteHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarmWithOptions(tmpReq: DeleteHotelAlarmRequest, headers: DeleteHotelAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteHotelAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHotelAlarmResponse>(await this.callApi(params, req, runtime), new DeleteHotelAlarmResponse({}));
  }

  /**
   * 删除酒店闹钟
   * 
   * @param request - DeleteHotelAlarmRequest
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarm(request: DeleteHotelAlarmRequest): Promise<DeleteHotelAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteHotelAlarmHeaders({ });
    return await this.deleteHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @param headers - DeleteHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItemWithOptions(request: DeleteHotelSceneBookItemRequest, headers: DeleteHotelSceneBookItemHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteHotelSceneBookItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new DeleteHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItem(request: DeleteHotelSceneBookItemRequest): Promise<DeleteHotelSceneBookItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteHotelSceneBookItemHeaders({ });
    return await this.deleteHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @param headers - DeleteHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSettingWithOptions(request: DeleteHotelSettingRequest, headers: DeleteHotelSettingHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteHotelSettingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHotelSettingResponse>(await this.callApi(params, req, runtime), new DeleteHotelSettingResponse({}));
  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSetting(request: DeleteHotelSettingRequest): Promise<DeleteHotelSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteHotelSettingHeaders({ });
    return await this.deleteHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @param headers - DeleteMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplateWithOptions(request: DeleteMessageTemplateRequest, headers: DeleteMessageTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteMessageTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMessageTemplateResponse>(await this.callApi(params, req, runtime), new DeleteMessageTemplateResponse({}));
  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplate(request: DeleteMessageTemplateRequest): Promise<DeleteMessageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteMessageTemplateHeaders({ });
    return await this.deleteMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @param headers - DeleteRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuSceneWithOptions(request: DeleteRcuSceneRequest, headers: DeleteRcuSceneHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteRcuSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRcuSceneResponse>(await this.callApi(params, req, runtime), new DeleteRcuSceneResponse({}));
  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuScene(request: DeleteRcuSceneRequest): Promise<DeleteRcuSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteRcuSceneHeaders({ });
    return await this.deleteRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 设备控制
   * 
   * @param tmpReq - DeviceControlRequest
   * @param headers - DeviceControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceControlResponse
   */
  async deviceControlWithOptions(tmpReq: DeviceControlRequest, headers: DeviceControlHeaders, runtime: $Util.RuntimeOptions): Promise<DeviceControlResponse> {
    Util.validateModel(tmpReq);
    let request = new DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeviceControl",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deviceControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeviceControlResponse>(await this.callApi(params, req, runtime), new DeviceControlResponse({}));
  }

  /**
   * 设备控制
   * 
   * @param request - DeviceControlRequest
   * @returns DeviceControlResponse
   */
  async deviceControl(request: DeviceControlRequest): Promise<DeviceControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @param headers - ExecuteSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSceneResponse
   */
  async executeSceneWithOptions(request: ExecuteSceneRequest, headers: ExecuteSceneHeaders, runtime: $Util.RuntimeOptions): Promise<ExecuteSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/executeScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSceneResponse>(await this.callApi(params, req, runtime), new ExecuteSceneResponse({}));
  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @returns ExecuteSceneResponse
   */
  async executeScene(request: ExecuteSceneRequest): Promise<ExecuteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ExecuteSceneHeaders({ });
    return await this.executeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @param headers - GetBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQAWithOptions(request: GetBasicInfoQARequest, headers: GetBasicInfoQAHeaders, runtime: $Util.RuntimeOptions): Promise<GetBasicInfoQAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicInfoQAResponse>(await this.callApi(params, req, runtime), new GetBasicInfoQAResponse({}));
  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQA(request: GetBasicInfoQARequest): Promise<GetBasicInfoQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetBasicInfoQAHeaders({ });
    return await this.getBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @param headers - GetCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCartoonResponse
   */
  async getCartoonWithOptions(request: GetCartoonRequest, headers: GetCartoonHeaders, runtime: $Util.RuntimeOptions): Promise<GetCartoonResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCartoonResponse>(await this.callApi(params, req, runtime), new GetCartoonResponse({}));
  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @returns GetCartoonResponse
   */
  async getCartoon(request: GetCartoonRequest): Promise<GetCartoonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCartoonHeaders({ });
    return await this.getCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param tmpReq - GetHotelContactByGenieDeviceRequest
   * @param headers - GetHotelContactByGenieDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDeviceWithOptions(tmpReq: GetHotelContactByGenieDeviceRequest, headers: GetHotelContactByGenieDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelContactByGenieDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelContactByGenieDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelContactByGenieDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByGenieDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelContactByGenieDeviceResponse>(await this.callApi(params, req, runtime), new GetHotelContactByGenieDeviceResponse({}));
  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param request - GetHotelContactByGenieDeviceRequest
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDevice(request: GetHotelContactByGenieDeviceRequest): Promise<GetHotelContactByGenieDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelContactByGenieDeviceHeaders({ });
    return await this.getHotelContactByGenieDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactByNumberRequest
   * @param headers - GetHotelContactByNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumberWithOptions(tmpReq: GetHotelContactByNumberRequest, headers: GetHotelContactByNumberHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelContactByNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelContactByNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.number)) {
      body["Number"] = request.number;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelContactByNumber",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotelContactByNumberResponse>(await this.callApi(params, req, runtime), new GetHotelContactByNumberResponse({}));
  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param request - GetHotelContactByNumberRequest
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumber(request: GetHotelContactByNumberRequest): Promise<GetHotelContactByNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelContactByNumberHeaders({ });
    return await this.getHotelContactByNumberWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactsRequest
   * @param headers - GetHotelContactsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactsResponse
   */
  async getHotelContactsWithOptions(tmpReq: GetHotelContactsRequest, headers: GetHotelContactsHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelContactsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelContacts",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelContactsResponse>(await this.callApi(params, req, runtime), new GetHotelContactsResponse({}));
  }

  /**
   * 获取酒店联系人
   * 
   * @param request - GetHotelContactsRequest
   * @returns GetHotelContactsResponse
   */
  async getHotelContacts(request: GetHotelContactsRequest): Promise<GetHotelContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelContactsHeaders({ });
    return await this.getHotelContactsWithOptions(request, headers, runtime);
  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param tmpReq - GetHotelHomeBackImageAndModesRequest
   * @param headers - GetHotelHomeBackImageAndModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModesWithOptions(tmpReq: GetHotelHomeBackImageAndModesRequest, headers: GetHotelHomeBackImageAndModesHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelHomeBackImageAndModesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelHomeBackImageAndModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelHomeBackImageAndModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelHomeBackImageAndModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelHomeBackImageAndModesResponse>(await this.callApi(params, req, runtime), new GetHotelHomeBackImageAndModesResponse({}));
  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param request - GetHotelHomeBackImageAndModesRequest
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModes(request: GetHotelHomeBackImageAndModesRequest): Promise<GetHotelHomeBackImageAndModesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelHomeBackImageAndModesHeaders({ });
    return await this.getHotelHomeBackImageAndModesWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeRequest
   * @param headers - GetHotelNoticeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeResponse
   */
  async getHotelNoticeWithOptions(tmpReq: GetHotelNoticeRequest, headers: GetHotelNoticeHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelNoticeResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelNoticeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelNotice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNotice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelNoticeResponse>(await this.callApi(params, req, runtime), new GetHotelNoticeResponse({}));
  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeRequest
   * @returns GetHotelNoticeResponse
   */
  async getHotelNotice(request: GetHotelNoticeRequest): Promise<GetHotelNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelNoticeHeaders({ });
    return await this.getHotelNoticeWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeV2Request
   * @param headers - GetHotelNoticeV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2WithOptions(tmpReq: GetHotelNoticeV2Request, headers: GetHotelNoticeV2Headers, runtime: $Util.RuntimeOptions): Promise<GetHotelNoticeV2Response> {
    Util.validateModel(tmpReq);
    let request = new GetHotelNoticeV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelNoticeV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNoticeV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelNoticeV2Response>(await this.callApi(params, req, runtime), new GetHotelNoticeV2Response({}));
  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeV2Request
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2(request: GetHotelNoticeV2Request): Promise<GetHotelNoticeV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelNoticeV2Headers({ });
    return await this.getHotelNoticeV2WithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店订单详情
   * 
   * @param tmpReq - GetHotelOrderDetailRequest
   * @param headers - GetHotelOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetailWithOptions(tmpReq: GetHotelOrderDetailRequest, headers: GetHotelOrderDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelOrderDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelOrderDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelOrderDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelOrderDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelOrderDetailResponse>(await this.callApi(params, req, runtime), new GetHotelOrderDetailResponse({}));
  }

  /**
   * 获取酒店订单详情
   * 
   * @param request - GetHotelOrderDetailRequest
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetail(request: GetHotelOrderDetailRequest): Promise<GetHotelOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelOrderDetailHeaders({ });
    return await this.getHotelOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @param headers - GetHotelRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDeviceWithOptions(request: GetHotelRoomDeviceRequest, headers: GetHotelRoomDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelRoomDeviceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelRoomDeviceResponse>(await this.callApi(params, req, runtime), new GetHotelRoomDeviceResponse({}));
  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDevice(request: GetHotelRoomDeviceRequest): Promise<GetHotelRoomDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelRoomDeviceHeaders({ });
    return await this.getHotelRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取推荐语料
   * 
   * @param tmpReq - GetHotelSampleUtterancesRequest
   * @param headers - GetHotelSampleUtterancesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterancesWithOptions(tmpReq: GetHotelSampleUtterancesRequest, headers: GetHotelSampleUtterancesHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelSampleUtterancesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelSampleUtterancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelSampleUtterances",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSampleUtterances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelSampleUtterancesResponse>(await this.callApi(params, req, runtime), new GetHotelSampleUtterancesResponse({}));
  }

  /**
   * 获取推荐语料
   * 
   * @param request - GetHotelSampleUtterancesRequest
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterances(request: GetHotelSampleUtterancesRequest): Promise<GetHotelSampleUtterancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelSampleUtterancesHeaders({ });
    return await this.getHotelSampleUtterancesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @param headers - GetHotelSceneItemDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetailWithOptions(request: GetHotelSceneItemDetailRequest, headers: GetHotelSceneItemDetailHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelSceneItemDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelSceneItemDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSceneItemDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotelSceneItemDetailResponse>(await this.callApi(params, req, runtime), new GetHotelSceneItemDetailResponse({}));
  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetail(request: GetHotelSceneItemDetailRequest): Promise<GetHotelSceneItemDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelSceneItemDetailHeaders({ });
    return await this.getHotelSceneItemDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店屏保
   * 
   * @param tmpReq - GetHotelScreenSaverRequest
   * @param headers - GetHotelScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaverWithOptions(tmpReq: GetHotelScreenSaverRequest, headers: GetHotelScreenSaverHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelScreenSaverResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotelScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHotelScreenSaverResponse>(await this.callApi(params, req, runtime), new GetHotelScreenSaverResponse({}));
  }

  /**
   * 获取酒店屏保
   * 
   * @param request - GetHotelScreenSaverRequest
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaver(request: GetHotelScreenSaverRequest): Promise<GetHotelScreenSaverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelScreenSaverHeaders({ });
    return await this.getHotelScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @param headers - GetHotelScreenSaverStyleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyleWithOptions(request: GetHotelScreenSaverStyleRequest, headers: GetHotelScreenSaverStyleHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelScreenSaverStyleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelScreenSaverStyle",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaverStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotelScreenSaverStyleResponse>(await this.callApi(params, req, runtime), new GetHotelScreenSaverStyleResponse({}));
  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyle(request: GetHotelScreenSaverStyleRequest): Promise<GetHotelScreenSaverStyleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelScreenSaverStyleHeaders({ });
    return await this.getHotelScreenSaverStyleWithOptions(request, headers, runtime);
  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @param headers - GetHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSettingResponse
   */
  async getHotelSettingWithOptions(request: GetHotelSettingRequest, headers: GetHotelSettingHeaders, runtime: $Util.RuntimeOptions): Promise<GetHotelSettingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotelSettingResponse>(await this.callApi(params, req, runtime), new GetHotelSettingResponse({}));
  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @returns GetHotelSettingResponse
   */
  async getHotelSetting(request: GetHotelSettingRequest): Promise<GetHotelSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetHotelSettingHeaders({ });
    return await this.getHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 关联产品列表查看
   * 
   * @param headers - GetRelationProductListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRelationProductListResponse
   */
  async getRelationProductListWithOptions(headers: GetRelationProductListHeaders, runtime: $Util.RuntimeOptions): Promise<GetRelationProductListResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetRelationProductList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getRelationProductList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRelationProductListResponse>(await this.callApi(params, req, runtime), new GetRelationProductListResponse({}));
  }

  /**
   * 关联产品列表查看
   * @returns GetRelationProductListResponse
   */
  async getRelationProductList(): Promise<GetRelationProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetRelationProductListHeaders({ });
    return await this.getRelationProductListWithOptions(headers, runtime);
  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @param headers - GetUnionIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnionIdResponse
   */
  async getUnionIdWithOptions(request: GetUnionIdRequest, headers: GetUnionIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetUnionIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encodeKey)) {
      body["EncodeKey"] = request.encodeKey;
    }

    if (!Util.isUnset(request.encodeType)) {
      body["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.idType)) {
      body["IdType"] = request.idType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUnionId",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getUnionId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUnionIdResponse>(await this.callApi(params, req, runtime), new GetUnionIdResponse({}));
  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @returns GetUnionIdResponse
   */
  async getUnionId(request: GetUnionIdRequest): Promise<GetUnionIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUnionIdHeaders({ });
    return await this.getUnionIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @param headers - GetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusicWithOptions(request: GetWelcomeTextAndMusicRequest, headers: GetWelcomeTextAndMusicHeaders, runtime: $Util.RuntimeOptions): Promise<GetWelcomeTextAndMusicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new GetWelcomeTextAndMusicResponse({}));
  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusic(request: GetWelcomeTextAndMusicRequest): Promise<GetWelcomeTextAndMusicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetWelcomeTextAndMusicHeaders({ });
    return await this.getWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @param headers - HotelQrBindHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelQrBindResponse
   */
  async hotelQrBindWithOptions(request: HotelQrBindRequest, headers: HotelQrBindHeaders, runtime: $Util.RuntimeOptions): Promise<HotelQrBindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "HotelQrBind",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/hotelQrBind`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HotelQrBindResponse>(await this.callApi(params, req, runtime), new HotelQrBindResponse({}));
  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @returns HotelQrBindResponse
   */
  async hotelQrBind(request: HotelQrBindRequest): Promise<HotelQrBindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new HotelQrBindHeaders({ });
    return await this.hotelQrBindWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入酒店配置
   * 
   * @param tmpReq - ImportHotelConfigRequest
   * @param headers - ImportHotelConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfigWithOptions(tmpReq: ImportHotelConfigRequest, headers: ImportHotelConfigHeaders, runtime: $Util.RuntimeOptions): Promise<ImportHotelConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportHotelConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importHotelConfig)) {
      request.importHotelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importHotelConfig, "ImportHotelConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.importHotelConfigShrink)) {
      body["ImportHotelConfig"] = request.importHotelConfigShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportHotelConfig",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importHotelConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportHotelConfigResponse>(await this.callApi(params, req, runtime), new ImportHotelConfigResponse({}));
  }

  /**
   * 批量导入酒店配置
   * 
   * @param request - ImportHotelConfigRequest
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfig(request: ImportHotelConfigRequest): Promise<ImportHotelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ImportHotelConfigHeaders({ });
    return await this.importHotelConfigWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param tmpReq - ImportRoomControlDevicesRequest
   * @param headers - ImportRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevicesWithOptions(tmpReq: ImportRoomControlDevicesRequest, headers: ImportRoomControlDevicesHeaders, runtime: $Util.RuntimeOptions): Promise<ImportRoomControlDevicesResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportRoomControlDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.locationDevices)) {
      request.locationDevicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDevices, "LocationDevices", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableInfraredDeviceImport)) {
      body["EnableInfraredDeviceImport"] = request.enableInfraredDeviceImport;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.locationDevicesShrink)) {
      body["LocationDevices"] = request.locationDevicesShrink;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new ImportRoomControlDevicesResponse({}));
  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param request - ImportRoomControlDevicesRequest
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevices(request: ImportRoomControlDevicesRequest): Promise<ImportRoomControlDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ImportRoomControlDevicesHeaders({ });
    return await this.importRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 导入房间内精灵场景
   * 
   * @param tmpReq - ImportRoomGenieScenesRequest
   * @param headers - ImportRoomGenieScenesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenesWithOptions(tmpReq: ImportRoomGenieScenesRequest, headers: ImportRoomGenieScenesHeaders, runtime: $Util.RuntimeOptions): Promise<ImportRoomGenieScenesResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportRoomGenieScenesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sceneList)) {
      request.sceneListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneList, "SceneList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.sceneListShrink)) {
      body["SceneList"] = request.sceneListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportRoomGenieScenes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomGenieScenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportRoomGenieScenesResponse>(await this.callApi(params, req, runtime), new ImportRoomGenieScenesResponse({}));
  }

  /**
   * 导入房间内精灵场景
   * 
   * @param request - ImportRoomGenieScenesRequest
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenes(request: ImportRoomGenieScenesRequest): Promise<ImportRoomGenieScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ImportRoomGenieScenesHeaders({ });
    return await this.importRoomGenieScenesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订新增
   * 
   * @param tmpReq - InsertHotelSceneBookItemRequest
   * @param headers - InsertHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItemWithOptions(tmpReq: InsertHotelSceneBookItemRequest, headers: InsertHotelSceneBookItemHeaders, runtime: $Util.RuntimeOptions): Promise<InsertHotelSceneBookItemResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addHotelSceneItemReq)) {
      request.addHotelSceneItemReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addHotelSceneItemReq, "AddHotelSceneItemReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addHotelSceneItemReqShrink)) {
      query["AddHotelSceneItemReq"] = request.addHotelSceneItemReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/insertHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new InsertHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订新增
   * 
   * @param request - InsertHotelSceneBookItemRequest
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItem(request: InsertHotelSceneBookItemRequest): Promise<InsertHotelSceneBookItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InsertHotelSceneBookItemHeaders({ });
    return await this.insertHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @param headers - InvokeRobotPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPushWithOptions(request: InvokeRobotPushRequest, headers: InvokeRobotPushHeaders, runtime: $Util.RuntimeOptions): Promise<InvokeRobotPushResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.pushType)) {
      body["PushType"] = request.pushType;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvokeRobotPush",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/invokeRobotPush`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvokeRobotPushResponse>(await this.callApi(params, req, runtime), new InvokeRobotPushResponse({}));
  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPush(request: InvokeRobotPushRequest): Promise<InvokeRobotPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvokeRobotPushHeaders({ });
    return await this.invokeRobotPushWithOptions(request, headers, runtime);
  }

  /**
   * 查询省份
   * 
   * @param headers - ListAllProvincesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProvincesResponse
   */
  async listAllProvincesWithOptions(headers: ListAllProvincesHeaders, runtime: $Util.RuntimeOptions): Promise<ListAllProvincesResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListAllProvinces",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listAllProvinces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAllProvincesResponse>(await this.callApi(params, req, runtime), new ListAllProvincesResponse({}));
  }

  /**
   * 查询省份
   * @returns ListAllProvincesResponse
   */
  async listAllProvinces(): Promise<ListAllProvincesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAllProvincesHeaders({ });
    return await this.listAllProvincesWithOptions(headers, runtime);
  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @param headers - ListCitiesByProvinceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvinceWithOptions(request: ListCitiesByProvinceRequest, headers: ListCitiesByProvinceHeaders, runtime: $Util.RuntimeOptions): Promise<ListCitiesByProvinceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCitiesByProvince",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCitiesByProvince`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCitiesByProvinceResponse>(await this.callApi(params, req, runtime), new ListCitiesByProvinceResponse({}));
  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvince(request: ListCitiesByProvinceRequest): Promise<ListCitiesByProvinceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCitiesByProvinceHeaders({ });
    return await this.listCitiesByProvinceWithOptions(request, headers, runtime);
  }

  /**
   * 查询自定义问答列表
   * 
   * @param tmpReq - ListCustomQARequest
   * @param headers - ListCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomQAResponse
   */
  async listCustomQAWithOptions(tmpReq: ListCustomQARequest, headers: ListCustomQAHeaders, runtime: $Util.RuntimeOptions): Promise<ListCustomQAResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomQAResponse>(await this.callApi(params, req, runtime), new ListCustomQAResponse({}));
  }

  /**
   * 查询自定义问答列表
   * 
   * @param request - ListCustomQARequest
   * @returns ListCustomQAResponse
   */
  async listCustomQA(request: ListCustomQARequest): Promise<ListCustomQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCustomQAHeaders({ });
    return await this.listCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @param headers - ListDialogueTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplateWithOptions(request: ListDialogueTemplateRequest, headers: ListDialogueTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<ListDialogueTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDialogueTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listDialogueTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDialogueTemplateResponse>(await this.callApi(params, req, runtime), new ListDialogueTemplateResponse({}));
  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplate(request: ListDialogueTemplateRequest): Promise<ListDialogueTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListDialogueTemplateHeaders({ });
    return await this.listDialogueTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店闹钟
   * 
   * @param tmpReq - ListHotelAlarmRequest
   * @param headers - ListHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarmWithOptions(tmpReq: ListHotelAlarmRequest, headers: ListHotelAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelAlarmList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotelAlarmResponse>(await this.callApi(params, req, runtime), new ListHotelAlarmResponse({}));
  }

  /**
   * 查询酒店闹钟
   * 
   * @param request - ListHotelAlarmRequest
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarm(request: ListHotelAlarmRequest): Promise<ListHotelAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelAlarmHeaders({ });
    return await this.listHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店设备列表
   * 
   * @param tmpReq - ListHotelControlDeviceRequest
   * @param headers - ListHotelControlDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDeviceWithOptions(tmpReq: ListHotelControlDeviceRequest, headers: ListHotelControlDeviceHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelControlDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelControlDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelControlDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelControlDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelControlDeviceResponse>(await this.callApi(params, req, runtime), new ListHotelControlDeviceResponse({}));
  }

  /**
   * 酒店设备列表
   * 
   * @param request - ListHotelControlDeviceRequest
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDevice(request: ListHotelControlDeviceRequest): Promise<ListHotelControlDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelControlDeviceHeaders({ });
    return await this.listHotelControlDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店列表
   * 
   * @param headers - ListHotelInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelInfoResponse
   */
  async listHotelInfoWithOptions(headers: ListHotelInfoHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelInfoResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListHotelInfo",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelInfoResponse>(await this.callApi(params, req, runtime), new ListHotelInfoResponse({}));
  }

  /**
   * 获取酒店列表
   * @returns ListHotelInfoResponse
   */
  async listHotelInfo(): Promise<ListHotelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelInfoHeaders({ });
    return await this.listHotelInfoWithOptions(headers, runtime);
  }

  /**
   * 获取消息模板
   * 
   * @param headers - ListHotelMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplateWithOptions(headers: ListHotelMessageTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelMessageTemplateResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListHotelMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelMessageTemplateResponse>(await this.callApi(params, req, runtime), new ListHotelMessageTemplateResponse({}));
  }

  /**
   * 获取消息模板
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplate(): Promise<ListHotelMessageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelMessageTemplateHeaders({ });
    return await this.listHotelMessageTemplateWithOptions(headers, runtime);
  }

  /**
   * 酒店订单列表
   * 
   * @param tmpReq - ListHotelOrderRequest
   * @param headers - ListHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelOrderResponse
   */
  async listHotelOrderWithOptions(tmpReq: ListHotelOrderRequest, headers: ListHotelOrderHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelOrderResponse>(await this.callApi(params, req, runtime), new ListHotelOrderResponse({}));
  }

  /**
   * 酒店订单列表
   * 
   * @param request - ListHotelOrderRequest
   * @returns ListHotelOrderResponse
   */
  async listHotelOrder(request: ListHotelOrderRequest): Promise<ListHotelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelOrderHeaders({ });
    return await this.listHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店的所有房间
   * 
   * @param tmpReq - ListHotelRoomsRequest
   * @param headers - ListHotelRoomsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelRoomsResponse
   */
  async listHotelRoomsWithOptions(tmpReq: ListHotelRoomsRequest, headers: ListHotelRoomsHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelRoomsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelRoomsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotelAdminRoom)) {
      request.hotelAdminRoomShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelAdminRoom, "HotelAdminRoom", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelAdminRoomShrink)) {
      body["HotelAdminRoom"] = request.hotelAdminRoomShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelRooms",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelRooms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotelRoomsResponse>(await this.callApi(params, req, runtime), new ListHotelRoomsResponse({}));
  }

  /**
   * 获取酒店的所有房间
   * 
   * @param request - ListHotelRoomsRequest
   * @returns ListHotelRoomsResponse
   */
  async listHotelRooms(request: ListHotelRoomsRequest): Promise<ListHotelRoomsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelRoomsHeaders({ });
    return await this.listHotelRoomsWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param tmpReq - ListHotelSceneBookItemsRequest
   * @param headers - ListHotelSceneBookItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItemsWithOptions(tmpReq: ListHotelSceneBookItemsRequest, headers: ListHotelSceneBookItemsHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelSceneBookItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelSceneBookItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelSceneBookItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneBookItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotelSceneBookItemsResponse>(await this.callApi(params, req, runtime), new ListHotelSceneBookItemsResponse({}));
  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param request - ListHotelSceneBookItemsRequest
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItems(request: ListHotelSceneBookItemsRequest): Promise<ListHotelSceneBookItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelSceneBookItemsHeaders({ });
    return await this.listHotelSceneBookItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务项目
   * 
   * @param tmpReq - ListHotelSceneItemRequest
   * @param headers - ListHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItemWithOptions(tmpReq: ListHotelSceneItemRequest, headers: ListHotelSceneItemHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelSceneItemResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelSceneItemResponse>(await this.callApi(params, req, runtime), new ListHotelSceneItemResponse({}));
  }

  /**
   * 服务项目
   * 
   * @param request - ListHotelSceneItemRequest
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItem(request: ListHotelSceneItemRequest): Promise<ListHotelSceneItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelSceneItemHeaders({ });
    return await this.listHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param tmpReq - ListHotelSceneItemsRequest
   * @param headers - ListHotelSceneItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItemsWithOptions(tmpReq: ListHotelSceneItemsRequest, headers: ListHotelSceneItemsHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelSceneItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelSceneItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listHotelSceneReq)) {
      request.listHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listHotelSceneReq, "ListHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listHotelSceneReqShrink)) {
      query["ListHotelSceneReq"] = request.listHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelSceneItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotelSceneItemsResponse>(await this.callApi(params, req, runtime), new ListHotelSceneItemsResponse({}));
  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param request - ListHotelSceneItemsRequest
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItems(request: ListHotelSceneItemsRequest): Promise<ListHotelSceneItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelSceneItemsHeaders({ });
    return await this.listHotelSceneItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务分类列表
   * 
   * @param tmpReq - ListHotelServiceCategoryRequest
   * @param headers - ListHotelServiceCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategoryWithOptions(tmpReq: ListHotelServiceCategoryRequest, headers: ListHotelServiceCategoryHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelServiceCategoryResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelServiceCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotelServiceCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelServiceCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListHotelServiceCategoryResponse>(await this.callApi(params, req, runtime), new ListHotelServiceCategoryResponse({}));
  }

  /**
   * 服务分类列表
   * 
   * @param request - ListHotelServiceCategoryRequest
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategory(request: ListHotelServiceCategoryRequest): Promise<ListHotelServiceCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelServiceCategoryHeaders({ });
    return await this.listHotelServiceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param tmpReq - ListHotelsRequest
   * @param headers - ListHotelsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelsResponse
   */
  async listHotelsWithOptions(tmpReq: ListHotelsRequest, headers: ListHotelsHeaders, runtime: $Util.RuntimeOptions): Promise<ListHotelsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotelRequest)) {
      request.hotelRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelRequest, "HotelRequest", "json");
    }

    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelRequestShrink)) {
      query["HotelRequest"] = request.hotelRequestShrink;
    }

    if (!Util.isUnset(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotels",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotelsResponse>(await this.callApi(params, req, runtime), new ListHotelsResponse({}));
  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param request - ListHotelsRequest
   * @returns ListHotelsResponse
   */
  async listHotels(request: ListHotelsRequest): Promise<ListHotelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListHotelsHeaders({ });
    return await this.listHotelsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @param headers - ListInfraredDeviceBrandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrandsWithOptions(request: ListInfraredDeviceBrandsRequest, headers: ListInfraredDeviceBrandsHeaders, runtime: $Util.RuntimeOptions): Promise<ListInfraredDeviceBrandsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInfraredDeviceBrands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredDeviceBrands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInfraredDeviceBrandsResponse>(await this.callApi(params, req, runtime), new ListInfraredDeviceBrandsResponse({}));
  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrands(request: ListInfraredDeviceBrandsRequest): Promise<ListInfraredDeviceBrandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListInfraredDeviceBrandsHeaders({ });
    return await this.listInfraredDeviceBrandsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @param headers - ListInfraredRemoteControllersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllersWithOptions(request: ListInfraredRemoteControllersRequest, headers: ListInfraredRemoteControllersHeaders, runtime: $Util.RuntimeOptions): Promise<ListInfraredRemoteControllersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.city)) {
      body["City"] = request.city;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    if (!Util.isUnset(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInfraredRemoteControllers",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredRemoteControllers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInfraredRemoteControllersResponse>(await this.callApi(params, req, runtime), new ListInfraredRemoteControllersResponse({}));
  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllers(request: ListInfraredRemoteControllersRequest): Promise<ListInfraredRemoteControllersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListInfraredRemoteControllersHeaders({ });
    return await this.listInfraredRemoteControllersWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @param headers - ListSTBServiceProvidersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProvidersWithOptions(request: ListSTBServiceProvidersRequest, headers: ListSTBServiceProvidersHeaders, runtime: $Util.RuntimeOptions): Promise<ListSTBServiceProvidersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.city)) {
      body["City"] = request.city;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSTBServiceProviders",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSTBServiceProviders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSTBServiceProvidersResponse>(await this.callApi(params, req, runtime), new ListSTBServiceProvidersResponse({}));
  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProviders(request: ListSTBServiceProvidersRequest): Promise<ListSTBServiceProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSTBServiceProvidersHeaders({ });
    return await this.listSTBServiceProvidersWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @param headers - ListSceneCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategoryWithOptions(request: ListSceneCategoryRequest, headers: ListSceneCategoryHeaders, runtime: $Util.RuntimeOptions): Promise<ListSceneCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSceneCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSceneCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSceneCategoryResponse>(await this.callApi(params, req, runtime), new ListSceneCategoryResponse({}));
  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategory(request: ListSceneCategoryRequest): Promise<ListSceneCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListSceneCategoryHeaders({ });
    return await this.listSceneCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务设施问答列表
   * 
   * @param tmpReq - ListServiceQARequest
   * @param headers - ListServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceQAResponse
   */
  async listServiceQAWithOptions(tmpReq: ListServiceQARequest, headers: ListServiceQAHeaders, runtime: $Util.RuntimeOptions): Promise<ListServiceQAResponse> {
    Util.validateModel(tmpReq);
    let request = new ListServiceQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceQAResponse>(await this.callApi(params, req, runtime), new ListServiceQAResponse({}));
  }

  /**
   * 查询服务设施问答列表
   * 
   * @param request - ListServiceQARequest
   * @returns ListServiceQAResponse
   */
  async listServiceQA(request: ListServiceQARequest): Promise<ListServiceQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListServiceQAHeaders({ });
    return await this.listServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询工单列表
   * 
   * @param tmpReq - ListTicketsRequest
   * @param headers - ListTicketsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(tmpReq: ListTicketsRequest, headers: ListTicketsHeaders, runtime: $Util.RuntimeOptions): Promise<ListTicketsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.isDesc)) {
      body["IsDesc"] = request.isDesc;
    }

    if (!Util.isUnset(request.isNeedCallback)) {
      body["IsNeedCallback"] = request.isNeedCallback;
    }

    if (!Util.isUnset(request.isNeedCharges)) {
      body["IsNeedCharges"] = request.isNeedCharges;
    }

    if (!Util.isUnset(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTickets",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listTickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTicketsResponse>(await this.callApi(params, req, runtime), new ListTicketsResponse({}));
  }

  /**
   * 查询工单列表
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  async listTickets(request: ListTicketsRequest): Promise<ListTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListTicketsHeaders({ });
    return await this.listTicketsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @param headers - PageGetHotelRoomDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevicesWithOptions(request: PageGetHotelRoomDevicesRequest, headers: PageGetHotelRoomDevicesHeaders, runtime: $Util.RuntimeOptions): Promise<PageGetHotelRoomDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PageGetHotelRoomDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pageGetHotelRoomDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageGetHotelRoomDevicesResponse>(await this.callApi(params, req, runtime), new PageGetHotelRoomDevicesResponse({}));
  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevices(request: PageGetHotelRoomDevicesRequest): Promise<PageGetHotelRoomDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PageGetHotelRoomDevicesHeaders({ });
    return await this.pageGetHotelRoomDevicesWithOptions(request, headers, runtime);
  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @param headers - PmsEventReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PmsEventReportResponse
   */
  async pmsEventReportWithOptions(request: PmsEventReportRequest, headers: PmsEventReportHeaders, runtime: $Util.RuntimeOptions): Promise<PmsEventReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payload)) {
      body["Payload"] = request.payload;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PmsEventReport",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pmsEventReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PmsEventReportResponse>(await this.callApi(params, req, runtime), new PmsEventReportResponse({}));
  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @returns PmsEventReportResponse
   */
  async pmsEventReport(request: PmsEventReportRequest): Promise<PmsEventReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PmsEventReportHeaders({ });
    return await this.pmsEventReportWithOptions(request, headers, runtime);
  }

  /**
   * 推送酒店消息
   * 
   * @param tmpReq - PushHotelMessageRequest
   * @param headers - PushHotelMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessageWithOptions(tmpReq: PushHotelMessageRequest, headers: PushHotelMessageHeaders, runtime: $Util.RuntimeOptions): Promise<PushHotelMessageResponse> {
    Util.validateModel(tmpReq);
    let request = new PushHotelMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.pushHotelMessageReq)) {
      request.pushHotelMessageReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pushHotelMessageReq, "PushHotelMessageReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pushHotelMessageReqShrink)) {
      query["PushHotelMessageReq"] = request.pushHotelMessageReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushHotelMessage",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushHotelMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PushHotelMessageResponse>(await this.callApi(params, req, runtime), new PushHotelMessageResponse({}));
  }

  /**
   * 推送酒店消息
   * 
   * @param request - PushHotelMessageRequest
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessage(request: PushHotelMessageRequest): Promise<PushHotelMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushHotelMessageHeaders({ });
    return await this.pushHotelMessageWithOptions(request, headers, runtime);
  }

  /**
   * 推送音箱指令
   * 
   * @param tmpReq - PushVoiceBoxCommandsRequest
   * @param headers - PushVoiceBoxCommandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommandsWithOptions(tmpReq: PushVoiceBoxCommandsRequest, headers: PushVoiceBoxCommandsHeaders, runtime: $Util.RuntimeOptions): Promise<PushVoiceBoxCommandsResponse> {
    Util.validateModel(tmpReq);
    let request = new PushVoiceBoxCommandsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commands)) {
      request.commandsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commands, "Commands", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commandsShrink)) {
      body["Commands"] = request.commandsShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushVoiceBoxCommands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushVoiceBoxCommands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushVoiceBoxCommandsResponse>(await this.callApi(params, req, runtime), new PushVoiceBoxCommandsResponse({}));
  }

  /**
   * 推送音箱指令
   * 
   * @param request - PushVoiceBoxCommandsRequest
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommands(request: PushVoiceBoxCommandsRequest): Promise<PushVoiceBoxCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushVoiceBoxCommandsHeaders({ });
    return await this.pushVoiceBoxCommandsWithOptions(request, headers, runtime);
  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @param headers - PushWelcomeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeResponse
   */
  async pushWelcomeWithOptions(request: PushWelcomeRequest, headers: PushWelcomeHeaders, runtime: $Util.RuntimeOptions): Promise<PushWelcomeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.welcomeMusicUrl)) {
      body["WelcomeMusicUrl"] = request.welcomeMusicUrl;
    }

    if (!Util.isUnset(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushWelcome",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcome`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushWelcomeResponse>(await this.callApi(params, req, runtime), new PushWelcomeResponse({}));
  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @returns PushWelcomeResponse
   */
  async pushWelcome(request: PushWelcomeRequest): Promise<PushWelcomeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushWelcomeHeaders({ });
    return await this.pushWelcomeWithOptions(request, headers, runtime);
  }

  /**
   * 推送欢迎语
   * 
   * @param tmpReq - PushWelcomeTextAndMusicRequest
   * @param headers - PushWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusicWithOptions(tmpReq: PushWelcomeTextAndMusicRequest, headers: PushWelcomeTextAndMusicHeaders, runtime: $Util.RuntimeOptions): Promise<PushWelcomeTextAndMusicResponse> {
    Util.validateModel(tmpReq);
    let request = new PushWelcomeTextAndMusicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.templateVariable)) {
      request.templateVariableShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateVariable, "TemplateVariable", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.templateVariableShrink)) {
      body["TemplateVariable"] = request.templateVariableShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new PushWelcomeTextAndMusicResponse({}));
  }

  /**
   * 推送欢迎语
   * 
   * @param request - PushWelcomeTextAndMusicRequest
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusic(request: PushWelcomeTextAndMusicRequest): Promise<PushWelcomeTextAndMusicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushWelcomeTextAndMusicHeaders({ });
    return await this.pushWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param tmpReq - QueryDeviceStatusRequest
   * @param headers - QueryDeviceStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatusWithOptions(tmpReq: QueryDeviceStatusRequest, headers: QueryDeviceStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryDeviceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryDeviceStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceStatusResponse>(await this.callApi(params, req, runtime), new QueryDeviceStatusResponse({}));
  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param request - QueryDeviceStatusRequest
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatus(request: QueryDeviceStatusRequest): Promise<QueryDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryDeviceStatusHeaders({ });
    return await this.queryDeviceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @param headers - QueryHotelRoomDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetailWithOptions(request: QueryHotelRoomDetailRequest, headers: QueryHotelRoomDetailHeaders, runtime: $Util.RuntimeOptions): Promise<QueryHotelRoomDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.sn)) {
      body["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryHotelRoomDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryHotelRoomDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHotelRoomDetailResponse>(await this.callApi(params, req, runtime), new QueryHotelRoomDetailResponse({}));
  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetail(request: QueryHotelRoomDetailRequest): Promise<QueryHotelRoomDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryHotelRoomDetailHeaders({ });
    return await this.queryHotelRoomDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @param headers - QueryRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevicesWithOptions(request: QueryRoomControlDevicesRequest, headers: QueryRoomControlDevicesHeaders, runtime: $Util.RuntimeOptions): Promise<QueryRoomControlDevicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new QueryRoomControlDevicesResponse({}));
  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevices(request: QueryRoomControlDevicesRequest): Promise<QueryRoomControlDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryRoomControlDevicesHeaders({ });
    return await this.queryRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @param headers - QueryRoomControlDevicesAndStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatusWithOptions(request: QueryRoomControlDevicesAndStatusRequest, headers: QueryRoomControlDevicesAndStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryRoomControlDevicesAndStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRoomControlDevicesAndStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevicesAndStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRoomControlDevicesAndStatusResponse>(await this.callApi(params, req, runtime), new QueryRoomControlDevicesAndStatusResponse({}));
  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatus(request: QueryRoomControlDevicesAndStatusRequest): Promise<QueryRoomControlDevicesAndStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryRoomControlDevicesAndStatusHeaders({ });
    return await this.queryRoomControlDevicesAndStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @param headers - QueryRoomStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatusWithOptions(request: QueryRoomStatusRequest, headers: QueryRoomStatusHeaders, runtime: $Util.RuntimeOptions): Promise<QueryRoomStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRoomStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRoomStatusResponse>(await this.callApi(params, req, runtime), new QueryRoomStatusResponse({}));
  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatus(request: QueryRoomStatusRequest): Promise<QueryRoomStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QueryRoomStatusHeaders({ });
    return await this.queryRoomStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店场景列表
   * 
   * @param tmpReq - QuerySceneListRequest
   * @param headers - QuerySceneListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySceneListResponse
   */
  async querySceneListWithOptions(tmpReq: QuerySceneListRequest, headers: QuerySceneListHeaders, runtime: $Util.RuntimeOptions): Promise<QuerySceneListResponse> {
    Util.validateModel(tmpReq);
    let request = new QuerySceneListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sceneStates)) {
      request.sceneStatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneStates, "SceneStates", "json");
    }

    if (!Util.isUnset(tmpReq.sceneTypes)) {
      request.sceneTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneTypes, "SceneTypes", "json");
    }

    if (!Util.isUnset(tmpReq.templateInfoIds)) {
      request.templateInfoIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateInfoIds, "TemplateInfoIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.sceneStatesShrink)) {
      body["SceneStates"] = request.sceneStatesShrink;
    }

    if (!Util.isUnset(request.sceneTypesShrink)) {
      body["SceneTypes"] = request.sceneTypesShrink;
    }

    if (!Util.isUnset(request.templateInfoIdsShrink)) {
      body["TemplateInfoIds"] = request.templateInfoIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QuerySceneList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/querySceneList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySceneListResponse>(await this.callApi(params, req, runtime), new QuerySceneListResponse({}));
  }

  /**
   * 查询酒店场景列表
   * 
   * @param request - QuerySceneListRequest
   * @returns QuerySceneListResponse
   */
  async querySceneList(request: QuerySceneListRequest): Promise<QuerySceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new QuerySceneListHeaders({ });
    return await this.querySceneListWithOptions(request, headers, runtime);
  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @param headers - RemoveChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuthWithOptions(request: RemoveChildAccountAuthRequest, headers: RemoveChildAccountAuthHeaders, runtime: $Util.RuntimeOptions): Promise<RemoveChildAccountAuthResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.childAccountName)) {
      body["ChildAccountName"] = request.childAccountName;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeChildAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveChildAccountAuthResponse>(await this.callApi(params, req, runtime), new RemoveChildAccountAuthResponse({}));
  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuth(request: RemoveChildAccountAuthRequest): Promise<RemoveChildAccountAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RemoveChildAccountAuthHeaders({ });
    return await this.removeChildAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @param headers - RemoveHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveHotelResponse
   */
  async removeHotelWithOptions(request: RemoveHotelRequest, headers: RemoveHotelHeaders, runtime: $Util.RuntimeOptions): Promise<RemoveHotelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveHotelResponse>(await this.callApi(params, req, runtime), new RemoveHotelResponse({}));
  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @returns RemoveHotelResponse
   */
  async removeHotel(request: RemoveHotelRequest): Promise<RemoveHotelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RemoveHotelHeaders({ });
    return await this.removeHotelWithOptions(request, headers, runtime);
  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @param headers - ResetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusicWithOptions(request: ResetWelcomeTextAndMusicRequest, headers: ResetWelcomeTextAndMusicHeaders, runtime: $Util.RuntimeOptions): Promise<ResetWelcomeTextAndMusicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/resetWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new ResetWelcomeTextAndMusicResponse({}));
  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusic(request: ResetWelcomeTextAndMusicRequest): Promise<ResetWelcomeTextAndMusicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ResetWelcomeTextAndMusicHeaders({ });
    return await this.resetWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 退房
   * 
   * @param tmpReq - RoomCheckOutRequest
   * @param headers - RoomCheckOutHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RoomCheckOutResponse
   */
  async roomCheckOutWithOptions(tmpReq: RoomCheckOutRequest, headers: RoomCheckOutHeaders, runtime: $Util.RuntimeOptions): Promise<RoomCheckOutResponse> {
    Util.validateModel(tmpReq);
    let request = new RoomCheckOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RoomCheckOut",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/roomCheckOut`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RoomCheckOutResponse>(await this.callApi(params, req, runtime), new RoomCheckOutResponse({}));
  }

  /**
   * 退房
   * 
   * @param request - RoomCheckOutRequest
   * @returns RoomCheckOutResponse
   */
  async roomCheckOut(request: RoomCheckOutRequest): Promise<RoomCheckOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RoomCheckOutHeaders({ });
    return await this.roomCheckOutWithOptions(request, headers, runtime);
  }

  /**
   * 提交酒店订单
   * 
   * @param tmpReq - SubmitHotelOrderRequest
   * @param headers - SubmitHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrderWithOptions(tmpReq: SubmitHotelOrderRequest, headers: SubmitHotelOrderHeaders, runtime: $Util.RuntimeOptions): Promise<SubmitHotelOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!Util.isUnset(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!Util.isUnset(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/submitHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotelOrderResponse>(await this.callApi(params, req, runtime), new SubmitHotelOrderResponse({}));
  }

  /**
   * 提交酒店订单
   * 
   * @param request - SubmitHotelOrderRequest
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrder(request: SubmitHotelOrderRequest): Promise<SubmitHotelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SubmitHotelOrderHeaders({ });
    return await this.submitHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @param headers - SyncDeviceStatusWithAkHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAkWithOptions(request: SyncDeviceStatusWithAkRequest, headers: SyncDeviceStatusWithAkHeaders, runtime: $Util.RuntimeOptions): Promise<SyncDeviceStatusWithAkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryCnName)) {
      body["CategoryCnName"] = request.categoryCnName;
    }

    if (!Util.isUnset(request.categoryEnName)) {
      body["CategoryEnName"] = request.categoryEnName;
    }

    if (!Util.isUnset(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.locationCnName)) {
      body["LocationCnName"] = request.locationCnName;
    }

    if (!Util.isUnset(request.number)) {
      body["Number"] = request.number;
    }

    if (!Util.isUnset(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!Util.isUnset(request.switch)) {
      body["Switch"] = request.switch;
    }

    if (!Util.isUnset(request.fanSpeed)) {
      body["fanSpeed"] = request.fanSpeed;
    }

    if (!Util.isUnset(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!Util.isUnset(request.roomTemperature)) {
      body["roomTemperature"] = request.roomTemperature;
    }

    if (!Util.isUnset(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!Util.isUnset(request.value)) {
      body["value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncDeviceStatusWithAk",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/syncDeviceStatusWithAk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncDeviceStatusWithAkResponse>(await this.callApi(params, req, runtime), new SyncDeviceStatusWithAkResponse({}));
  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAk(request: SyncDeviceStatusWithAkRequest): Promise<SyncDeviceStatusWithAkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SyncDeviceStatusWithAkHeaders({ });
    return await this.syncDeviceStatusWithAkWithOptions(request, headers, runtime);
  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @param headers - UpdateBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQAWithOptions(request: UpdateBasicInfoQARequest, headers: UpdateBasicInfoQAHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateBasicInfoQAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkInTime)) {
      body["CheckInTime"] = request.checkInTime;
    }

    if (!Util.isUnset(request.checkOutTime)) {
      body["CheckOutTime"] = request.checkOutTime;
    }

    if (!Util.isUnset(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.hotelIntroduction)) {
      body["HotelIntroduction"] = request.hotelIntroduction;
    }

    if (!Util.isUnset(request.hotelMember)) {
      body["HotelMember"] = request.hotelMember;
    }

    if (!Util.isUnset(request.hotelService)) {
      body["HotelService"] = request.hotelService;
    }

    if (!Util.isUnset(request.parkingExpenses)) {
      body["ParkingExpenses"] = request.parkingExpenses;
    }

    if (!Util.isUnset(request.parkingPosition)) {
      body["ParkingPosition"] = request.parkingPosition;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.wifiName)) {
      body["WifiName"] = request.wifiName;
    }

    if (!Util.isUnset(request.wifiPassword)) {
      body["WifiPassword"] = request.wifiPassword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBasicInfoQAResponse>(await this.callApi(params, req, runtime), new UpdateBasicInfoQAResponse({}));
  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQA(request: UpdateBasicInfoQARequest): Promise<UpdateBasicInfoQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateBasicInfoQAHeaders({ });
    return await this.updateBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改自定义问答
   * 
   * @param tmpReq - UpdateCustomQARequest
   * @param headers - UpdateCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQAWithOptions(tmpReq: UpdateCustomQARequest, headers: UpdateCustomQAHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateCustomQAResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!Util.isUnset(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!Util.isUnset(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!Util.isUnset(request.customQAId)) {
      body["CustomQAId"] = request.customQAId;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!Util.isUnset(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!Util.isUnset(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomQAResponse>(await this.callApi(params, req, runtime), new UpdateCustomQAResponse({}));
  }

  /**
   * 修改自定义问答
   * 
   * @param request - UpdateCustomQARequest
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQA(request: UpdateCustomQARequest): Promise<UpdateCustomQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateCustomQAHeaders({ });
    return await this.updateCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店项目
   * 
   * @param tmpReq - UpdateHotelRequest
   * @param headers - UpdateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelResponse
   */
  async updateHotelWithOptions(tmpReq: UpdateHotelRequest, headers: UpdateHotelHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateHotelResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!Util.isUnset(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!Util.isUnset(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!Util.isUnset(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHotelResponse>(await this.callApi(params, req, runtime), new UpdateHotelResponse({}));
  }

  /**
   * 修改酒店项目
   * 
   * @param request - UpdateHotelRequest
   * @returns UpdateHotelResponse
   */
  async updateHotel(request: UpdateHotelRequest): Promise<UpdateHotelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateHotelHeaders({ });
    return await this.updateHotelWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店闹钟
   * 
   * @param tmpReq - UpdateHotelAlarmRequest
   * @param headers - UpdateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarmWithOptions(tmpReq: UpdateHotelAlarmRequest, headers: UpdateHotelAlarmHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateHotelAlarmResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    if (!Util.isUnset(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHotelAlarmResponse>(await this.callApi(params, req, runtime), new UpdateHotelAlarmResponse({}));
  }

  /**
   * 修改酒店闹钟
   * 
   * @param request - UpdateHotelAlarmRequest
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarm(request: UpdateHotelAlarmRequest): Promise<UpdateHotelAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateHotelAlarmHeaders({ });
    return await this.updateHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订编辑
   * 
   * @param tmpReq - UpdateHotelSceneBookItemRequest
   * @param headers - UpdateHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItemWithOptions(tmpReq: UpdateHotelSceneBookItemRequest, headers: UpdateHotelSceneBookItemHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateHotelSceneBookItemResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateHotelSceneBookReq)) {
      request.updateHotelSceneBookReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneBookReq, "UpdateHotelSceneBookReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateHotelSceneBookReqShrink)) {
      query["UpdateHotelSceneBookReq"] = request.updateHotelSceneBookReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new UpdateHotelSceneBookItemResponse({}));
  }

  /**
   * 酒店场景预订编辑
   * 
   * @param request - UpdateHotelSceneBookItemRequest
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItem(request: UpdateHotelSceneBookItemRequest): Promise<UpdateHotelSceneBookItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateHotelSceneBookItemHeaders({ });
    return await this.updateHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param tmpReq - UpdateHotelSceneItemRequest
   * @param headers - UpdateHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItemWithOptions(tmpReq: UpdateHotelSceneItemRequest, headers: UpdateHotelSceneItemHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateHotelSceneItemResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateHotelSceneOperateReq)) {
      request.updateHotelSceneOperateReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneOperateReq, "UpdateHotelSceneOperateReq", "json");
    }

    if (!Util.isUnset(tmpReq.updateHotelSceneReq)) {
      request.updateHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneReq, "UpdateHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateHotelSceneOperateReqShrink)) {
      query["UpdateHotelSceneOperateReq"] = request.updateHotelSceneOperateReqShrink;
    }

    if (!Util.isUnset(request.updateHotelSceneReqShrink)) {
      query["UpdateHotelSceneReq"] = request.updateHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHotelSceneItemResponse>(await this.callApi(params, req, runtime), new UpdateHotelSceneItemResponse({}));
  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param request - UpdateHotelSceneItemRequest
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItem(request: UpdateHotelSceneItemRequest): Promise<UpdateHotelSceneItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateHotelSceneItemHeaders({ });
    return await this.updateHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @param headers - UpdateMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplateWithOptions(request: UpdateMessageTemplateRequest, headers: UpdateMessageTemplateHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateMessageTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMessageTemplateResponse>(await this.callApi(params, req, runtime), new UpdateMessageTemplateResponse({}));
  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplate(request: UpdateMessageTemplateRequest): Promise<UpdateMessageTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateMessageTemplateHeaders({ });
    return await this.updateMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param tmpReq - UpdateRcuSceneRequest
   * @param headers - UpdateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuSceneWithOptions(tmpReq: UpdateRcuSceneRequest, headers: UpdateRcuSceneHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateRcuSceneResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRcuSceneResponse>(await this.callApi(params, req, runtime), new UpdateRcuSceneResponse({}));
  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param request - UpdateRcuSceneRequest
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuScene(request: UpdateRcuSceneRequest): Promise<UpdateRcuSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateRcuSceneHeaders({ });
    return await this.updateRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @param headers - UpdateServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQAWithOptions(request: UpdateServiceQARequest, headers: UpdateServiceQAHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateServiceQAResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.answer)) {
      body["Answer"] = request.answer;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.serviceQAId)) {
      body["ServiceQAId"] = request.serviceQAId;
    }

    if (!Util.isUnset(request.isActive)) {
      body["isActive"] = request.isActive;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceQAResponse>(await this.callApi(params, req, runtime), new UpdateServiceQAResponse({}));
  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQA(request: UpdateServiceQARequest): Promise<UpdateServiceQAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateServiceQAHeaders({ });
    return await this.updateServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @param headers - UpdateTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketResponse
   */
  async updateTicketWithOptions(request: UpdateTicketRequest, headers: UpdateTicketHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTicketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupKey)) {
      body["GroupKey"] = request.groupKey;
    }

    if (!Util.isUnset(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = Util.toJSONString(headers.xAcsAligenieAccessToken);
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTicket",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTicketResponse>(await this.callApi(params, req, runtime), new UpdateTicketResponse({}));
  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @returns UpdateTicketResponse
   */
  async updateTicket(request: UpdateTicketRequest): Promise<UpdateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTicketHeaders({ });
    return await this.updateTicketWithOptions(request, headers, runtime);
  }

}
