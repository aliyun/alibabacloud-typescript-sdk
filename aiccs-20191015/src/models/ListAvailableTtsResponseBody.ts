// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableTtsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 音色试听文件
   * 
   * @example
   * 示例值
   */
  ttsAuditionFileUrl?: string;
  /**
   * @remarks
   * 音色平台CosyVoice/Volcano
   * 
   * @example
   * CosyVoice/Volcano
   */
  ttsEngine?: string;
  /**
   * @remarks
   * 音色cosy类型 cosyvoice-v2-XXXX-XXXX
   * 
   * @example
   * 5EBAEBE6-0E77-5E1F-99E4-7B20512FCB3C
   */
  ttsStyle?: string;
  /**
   * @remarks
   * 音色编码
   * 
   * @example
   * V123456789
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * 音色名称
   * 
   * @example
   * 示例值示例值
   */
  ttsVoiceName?: string;
  static names(): { [key: string]: string } {
    return {
      ttsAuditionFileUrl: 'TtsAuditionFileUrl',
      ttsEngine: 'TtsEngine',
      ttsStyle: 'TtsStyle',
      ttsVoiceCode: 'TtsVoiceCode',
      ttsVoiceName: 'TtsVoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttsAuditionFileUrl: 'string',
      ttsEngine: 'string',
      ttsStyle: 'string',
      ttsVoiceCode: 'string',
      ttsVoiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableTtsResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListAvailableTtsResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 5EBAEBE6-0E77-5E1F-99E4-7B20512F22222
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAvailableTtsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

