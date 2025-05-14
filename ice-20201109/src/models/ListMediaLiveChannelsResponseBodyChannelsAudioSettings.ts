// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting } from "./ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting";


export class ListMediaLiveChannelsResponseBodyChannelsAudioSettings extends $dara.Model {
  /**
   * @remarks
   * The audio codec.
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding settings.
   */
  audioCodecSetting?: ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The name of the audio selector.
   * 
   * @example
   * myselector
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * A three-letter ISO 639-2 language code.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The name of the language.
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The name of the audio settings.
   * 
   * @example
   * zhuanfengzhuang
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      audioCodec: 'AudioCodec',
      audioCodecSetting: 'AudioCodecSetting',
      audioSelectorName: 'AudioSelectorName',
      languageCode: 'LanguageCode',
      languageName: 'LanguageName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCodec: 'string',
      audioCodecSetting: ListMediaLiveChannelsResponseBodyChannelsAudioSettingsAudioCodecSetting,
      audioSelectorName: 'string',
      languageCode: 'string',
      languageName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.audioCodecSetting && typeof (this.audioCodecSetting as any).validate === 'function') {
      (this.audioCodecSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

