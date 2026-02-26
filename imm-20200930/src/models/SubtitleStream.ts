// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 74
   */
  bitrate?: number;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * MOV text
   */
  codecLongName?: string;
  /**
   * @remarks
   * The abbreviated name of the codec.
   * 
   * @example
   * mov_text
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x67337874
   */
  codecTag?: string;
  /**
   * @remarks
   * The description of the codec tag.
   * 
   * @example
   * tx3g
   */
  codecTagString?: string;
  /**
   * @remarks
   * The subtitle content.
   */
  content?: string;
  /**
   * @remarks
   * The duration of the subtitle stream in seconds.
   * 
   * @example
   * 71.378
   */
  duration?: number;
  /**
   * @remarks
   * The height of the subtitles. Unit: pixels.
   * 
   * @example
   * 30
   */
  height?: number;
  /**
   * @remarks
   * The index number of the subtitle stream.
   * 
   * @example
   * 2
   */
  index?: number;
  /**
   * @remarks
   * The subtitle language in the BCP 47 standard.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The start time of the subtitle stream in seconds.
   * 
   * @example
   * 0.000000
   */
  startTime?: number;
  /**
   * @remarks
   * The width of the subtitles. Unit: pixels.
   * 
   * @example
   * 600
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      content: 'Content',
      duration: 'Duration',
      height: 'Height',
      index: 'Index',
      language: 'Language',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      content: 'string',
      duration: 'number',
      height: 'number',
      index: 'number',
      language: 'string',
      startTime: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

