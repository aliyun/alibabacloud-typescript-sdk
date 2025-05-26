// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaConvertTaskRequestSourcesSubtitles } from "./CreateMediaConvertTaskRequestSourcesSubtitles";


export class CreateMediaConvertTaskRequestSources extends $dara.Model {
  alignMode?: string;
  attached?: boolean;
  disableAudio?: boolean;
  disableVideo?: boolean;
  /**
   * @remarks
   * The transcoding duration of the media. Unit: seconds. Default value: 0. A value of 0 specifies that the transcoding duration lasts until the end of the video.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the media transcoding task. Unit: seconds. Valid values:
   * 
   * *   0 (default): starts transcoding when the media starts playing.
   * *   n: starts transcoding n seconds after the media starts playing. n must be greater than 0.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The subtitles. By default, this parameter is left empty.
   */
  subtitles?: CreateMediaConvertTaskRequestSourcesSubtitles[];
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket. Specify the value in the `oss://${Bucket}/${Object}` format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the complete path to the file whose name contains an extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      alignMode: 'AlignMode',
      attached: 'Attached',
      disableAudio: 'DisableAudio',
      disableVideo: 'DisableVideo',
      duration: 'Duration',
      startTime: 'StartTime',
      subtitles: 'Subtitles',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignMode: 'string',
      attached: 'boolean',
      disableAudio: 'boolean',
      disableVideo: 'boolean',
      duration: 'number',
      startTime: 'number',
      subtitles: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSourcesSubtitles },
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

