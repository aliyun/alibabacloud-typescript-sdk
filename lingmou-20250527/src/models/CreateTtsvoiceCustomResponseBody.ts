// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTTSVoiceCustomResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://xxx-aliyuncs.com/material/INPUT_TRAIN_AUDIO/Mt.CQEG75L4FWIU2/TestTTSVoiceName.mp3?Expires=1764262805&OSSAccessKeyId=LTAI5tK3WcKwKtAyaTSeq7sx&Signature=D%2Fld6gp9Zh6TsGRU9cd6GD2pFY0%3D
   */
  audioURL?: string;
  /**
   * @example
   * CHECKING
   */
  censorStatus?: string;
  /**
   * @example
   * false
   */
  common?: boolean;
  /**
   * @example
   * 2024-10-10T07:48:31Z
   */
  createTime?: string;
  /**
   * @example
   * This is a testTTSVoice。
   */
  description?: string;
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
   * zh
   */
  language?: string;
  /**
   * @example
   * 2024-10-10T07:48:31Z
   */
  modifiedTime?: string;
  /**
   * @example
   * TestTTSVoiceName
   */
  name?: string;
  /**
   * @example
   * 100
   */
  pitchRate?: number;
  /**
   * @example
   * 100
   */
  remainSeconds?: number;
  /**
   * @example
   * 100
   */
  speechRate?: number;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  text?: string;
  /**
   * @example
   * testTTSVoice
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
      pitchRate: 'pitchRate',
      remainSeconds: 'remainSeconds',
      speechRate: 'speechRate',
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
      pitchRate: 'number',
      remainSeconds: 'number',
      speechRate: 'number',
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

export class CreateTTSVoiceCustomResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateTTSVoiceCustomResponseBodyData;
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
   * A7174E51-3523-5AEB-AE18-1D877FF22497
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
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTTSVoiceCustomResponseBodyData,
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

