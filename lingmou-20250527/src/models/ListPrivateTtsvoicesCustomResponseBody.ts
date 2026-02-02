// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateTTSVoicesCustomResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * https://xxx-aliyuncs.com/material/INPUT_TRAIN_AUDIO/Mt.CQEG75L4FWIU2/TestTTSVoiceName.mp3?Expires=1764262805&OSSAccessKeyId=LTAI5tK3WcKwKtAyaT******&Signature=D%2Fld6gp9Zh6TsGRU9cd6GD2pFY0%3D
   */
  audioURL?: string;
  /**
   * @example
   * PASS
   */
  censorStatus?: string;
  /**
   * @example
   * false
   */
  common?: boolean;
  /**
   * @example
   * 2024-04-15T09:42:15Z
   */
  createTime?: string;
  /**
   * @example
   * Optional for WH managernif no issue will be cancel
   */
  description?: string;
  /**
   * @remarks
   * 错误码。
   * 
   * @example
   * Audio.AudioShortError
   */
  errorCode?: string;
  /**
   * @example
   * Error
   */
  errorDetail?: string;
  /**
   * @example
   * FEMALE
   */
  gender?: string;
  /**
   * @example
   * M1lhKArheOyYdeYybDFqS1-Q
   */
  id?: string;
  /**
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @example
   * 2024-04-15T09:42:15Z
   */
  modifiedTime?: string;
  /**
   * @example
   * TestTTSVoice
   */
  name?: string;
  /**
   * @example
   * 100
   */
  remainSeconds?: number;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  text?: string;
  /**
   * @example
   * TestTTSVoice
   */
  voiceKey?: string;
  static names(): { [key: string]: string } {
    return {
      audioURL: 'audioURL',
      censorStatus: 'censorStatus',
      common: 'common',
      createTime: 'createTime',
      description: 'description',
      errorCode: 'errorCode',
      errorDetail: 'errorDetail',
      gender: 'gender',
      id: 'id',
      language: 'language',
      modifiedTime: 'modifiedTime',
      name: 'name',
      remainSeconds: 'remainSeconds',
      status: 'status',
      text: 'text',
      voiceKey: 'voiceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioURL: 'string',
      censorStatus: 'string',
      common: 'boolean',
      createTime: 'string',
      description: 'string',
      errorCode: 'string',
      errorDetail: 'string',
      gender: 'string',
      id: 'string',
      language: 'string',
      modifiedTime: 'string',
      name: 'string',
      remainSeconds: 'number',
      status: 'string',
      text: 'string',
      voiceKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateTTSVoicesCustomResponseBodyData extends $dara.Model {
  data?: ListPrivateTTSVoicesCustomResponseBodyDataData[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 16
   */
  pages?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      page: 'page',
      pages: 'pages',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPrivateTTSVoicesCustomResponseBodyDataData },
      page: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateTTSVoicesCustomResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListPrivateTTSVoicesCustomResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * qht-fc2-test
   */
  nextToken?: string;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPrivateTTSVoicesCustomResponseBodyData,
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

