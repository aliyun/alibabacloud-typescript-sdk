// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting } from "./CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting";


export class CreateMediaLiveChannelRequestAudioSettings extends $dara.Model {
  /**
   * @remarks
   * The audio codec. If it is not specified, the source specification is used. Valid values: aac and libfdk_aac.
   * 
   * @example
   * libfdk_aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding settings.
   */
  audioCodecSetting?: CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting;
  /**
   * @remarks
   * The name of the audio selector.
   * 
   * @example
   * a1
   */
  audioSelectorName?: string;
  /**
   * @remarks
   * Enter a three-letter ISO 639-2 language code. If the audio track selected by the audio selector has a language code, the language code specified in the audio selector is used. If the selected audio track does not have a language code, or if the audio selector cannot find a track that matches its criteria, this language code is used.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  /**
   * @remarks
   * The tag that identifies the language of the RTMP input. It can be referenced by the output. The maximum length is 32 characters. Supported characters:
   * 
   * *   Unicode letters
   * *   Digits (0-9)
   * *   Underscore (_)
   * *   Hyphen (-)
   * *   Space (a space cannot be at the beginning or end)
   * 
   * @example
   * English
   */
  languageName?: string;
  /**
   * @remarks
   * The name of the audio settings. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * audio1
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
      audioCodecSetting: CreateMediaLiveChannelRequestAudioSettingsAudioCodecSetting,
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

