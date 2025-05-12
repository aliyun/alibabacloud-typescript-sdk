// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTemplateListResponseBodyTemplateListTemplateAudioVolume } from "./QueryTemplateListResponseBodyTemplateListTemplateAudioVolume";


export class QueryTemplateListResponseBodyTemplateListTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: **[8,1000]**.
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec format. Default value: **aac**. Valid values:
   * 
   * *   **aac**
   * *   **mp3**
   * *   **vorbis**
   * *   **flac**
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values when the value of Codec is aac:
   * 
   * *   **aac_low**
   * *   **aac_he**
   * *   **aac_he_v2**
   * *   **aac_ld**
   * *   **aac_eld**
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The strength of the independent denoising algorithm.
   * 
   * @example
   * 1
   */
  qscale?: string;
  /**
   * @remarks
   * Indicates whether the audio stream is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz
   * *   Default value: **44100**.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control configurations.
   */
  volume?: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      remove: 'Remove',
      samplerate: 'Samplerate',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      remove: 'string',
      samplerate: 'string',
      volume: QueryTemplateListResponseBodyTemplateListTemplateAudioVolume,
    };
  }

  validate() {
    if(this.volume && typeof (this.volume as any).validate === 'function') {
      (this.volume as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

