// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoMediaAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio stream. Unit: bit/s.
   * 
   * @example
   * 129280
   */
  bitRate?: string;
  /**
   * @remarks
   * The audio encoding mode.
   * 
   * @example
   * aac
   */
  codeName?: string;
  /**
   * @remarks
   * The duration of the audio stream. Unit: seconds.
   * 
   * @example
   * 7704.573000
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'bit_rate',
      codeName: 'code_name',
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'string',
      codeName: 'string',
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

