// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output audio.
   * 
   * @example
   * 1000
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The audio codec.
   * 
   * @example
   * AAC
   */
  codec?: string;
  /**
   * @remarks
   * The audio codec profile.
   * 
   * @example
   * 1
   */
  profile?: string;
  /**
   * @remarks
   * The audio sampling rate.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channels: 'Channels',
      codec: 'Codec',
      profile: 'Profile',
      samplerate: 'Samplerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channels: 'string',
      codec: 'string',
      profile: 'string',
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

