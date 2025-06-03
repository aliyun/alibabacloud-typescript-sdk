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

