// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * ASS (Advanced SSA) subtitle
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values:
   * 
   * *   **srt**
   * *   **ass**
   * 
   * @example
   * ass
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 0/1
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration. Unit: seconds.
   * 
   * @example
   * 1370.116000
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the subtitle stream. The value indicates the position of the subtitle stream in all subtitle streams.
   * 
   * @example
   * 3
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/1000
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

