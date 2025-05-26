// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaConvertTaskRequestSourcesSubtitles extends $dara.Model {
  /**
   * @remarks
   * The subtitle language. If you specify this parameter, comply with the ISO 639-2 standard. This parameter is left empty by default.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The time offset of the subtitle. Unit: seconds. Default value: 0.
   * 
   * @example
   * 10.5
   */
  timeOffset?: number;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket. Specify the value in the `oss://${Bucket}/${Object}` format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the complete path to the file whose name contains an extension. The following subtitle formats are supported: srt, vtt, mov_text, ass, dvd_sub, and pgs.
   * 
   * @example
   * oss://test-bucket/subtitles
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      timeOffset: 'TimeOffset',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      timeOffset: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

