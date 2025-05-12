// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat extends $dara.Model {
  /**
   * @remarks
   * The total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1630.045
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the input media file. Unit: seconds.
   * 
   * @example
   * 17.226000
   */
  duration?: string;
  /**
   * @remarks
   * The full name of the container format.
   * 
   * @example
   * QuickTime/MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The short name of the container format. For more information about the parameters, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * mov
   */
  formatName?: string;
  /**
   * @remarks
   * The total number of program streams.
   * 
   * @example
   * 0
   */
  numPrograms?: string;
  /**
   * @remarks
   * The total number of media streams.
   * 
   * @example
   * 2
   */
  numStreams?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 3509895
   */
  size?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

