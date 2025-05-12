// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateResponseBodyTemplateAudioVolume } from "./UpdateTemplateResponseBodyTemplateAudioVolume";


export class UpdateTemplateResponseBodyTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Valid values: 8 to 1000.****
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz.
   * *   Default value: **44100**.
   * 
   * @example
   * aac
   */
  codec?: string;
  /**
   * @remarks
   * Indicates whether the audio stream is deleted.
   * 
   * *   **true**: The audio stream is deleted.
   * *   **false**: The audio stream is retained.
   * *   Default value: **false**.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 1
   */
  qscale?: string;
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
   * false
   */
  remove?: string;
  /**
   * @remarks
   * The level of the independent denoising algorithm.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The volume control configurations.
   */
  volume?: UpdateTemplateResponseBodyTemplateAudioVolume;
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
      volume: UpdateTemplateResponseBodyTemplateAudioVolume,
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

