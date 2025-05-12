// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate of the output file.
   * 
   * *   Unit: Kbit/s.
   * *   Default value: **128**.
   * 
   * @example
   * 8
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels. Default value: **2**.
   * 
   * @example
   * 1
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec format. Default value: **acc**.
   * 
   * @example
   * mp3
   */
  codec?: string;
  /**
   * @remarks
   * The codec profile of the audio. Valid values if the **Codec** parameter is set to **aac**: aac_low, aac_he, aac_he_v2, aac_ld, and aac_eld.
   * 
   * @example
   * aac_low
   */
  profile?: string;
  /**
   * @remarks
   * The level of quality control on the audio.
   * 
   * @example
   * 10
   */
  qscale?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * *   Unit: Hz.
   * *   Default value: **44100**.
   * 
   * @example
   * 32000
   */
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      qscale: 'Qscale',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
      qscale: 'string',
      samplerate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

