// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams extends $dara.Model {
  /**
   * @remarks
   * The audio bitrate.
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
   * The encoding profile.
   * 
   * @example
   * aac_low
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

