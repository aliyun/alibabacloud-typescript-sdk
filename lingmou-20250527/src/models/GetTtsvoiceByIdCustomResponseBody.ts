// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTTSVoiceByIdCustomResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://xxx-aliyuncs.com/material/INPUT_TTS_VOICE/Mt.CQEG75L4FWIU2/TestTTSVoiceName.mp3?Expires=1764262805&OSSAccessKeyId=LTAI5tK3WcKwKtAyaTSe*****&Signature=D%2Fld6gp9Zh6TsGRU9cd6GD2pFY0%3D
   */
  audioURL?: string;
  /**
   * @example
   * CHECKING。
   */
  censorStatus?: string;
  /**
   * @example
   * false。
   */
  common?: boolean;
  /**
   * @example
   * 2025-11-28T10:11:28
   */
  createTime?: string;
  /**
   * @example
   * This is a testTTSVoice。
   */
  description?: string;
  errorDetail?: string;
  /**
   * @example
   * FEMALE
   */
  gender?: string;
  /**
   * @example
   * M1lhKArheOyYdeYyb*****
   */
  id?: string;
  language?: string;
  /**
   * @example
   * 2025-11-28T13:41:31
   */
  modifiedTime?: string;
  /**
   * @example
   * TestTTSVoiceName。
   */
  name?: string;
  /**
   * @example
   * 100。
   */
  remainSeconds?: number;
  /**
   * @example
   * SUCCESS。
   */
  status?: string;
  text?: string;
  /**
   * @example
   * avatar-2464b55a65794e75a20fe07dde2*****
   */
  voiceKey?: string;
  static names(): { [key: string]: string } {
    return {
      audioURL: 'audioURL',
      censorStatus: 'censorStatus',
      common: 'common',
      createTime: 'createTime',
      description: 'description',
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

export class GetTTSVoiceByIdCustomResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetTTSVoiceByIdCustomResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBD****
   */
  requestId?: string;
  /**
   * @example
   * True。
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTTSVoiceByIdCustomResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

