// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixListAmix extends $dara.Model {
  /**
   * @remarks
   * The URL of the audio track that is mixed as the background music.
   * 
   * *   The URL can be an OSS URL or the string `input`.
   * *   A value of input indicates that two audio tracks are mixed in a video.
   * 
   * @example
   * https://outpu***.oss-cn-shanghai.aliyuncs.com/mp4-to-mp3%5E1571025263578816%40.mp3
   */
  amixURL?: string;
  /**
   * @remarks
   * The duration of the mixed audio track. The value is in the number or time format.
   * 
   * @example
   * 20
   */
  duration?: string;
  /**
   * @remarks
   * The audio track that is mixed. Format: 0:a:{audio_index}. Example: 0:a:0.
   * 
   * @example
   * 0:a:0
   */
  map?: string;
  /**
   * @remarks
   * The mode to specify the mixing duration. Valid values: **first** and **long**.
   * 
   * *   **first**: The length of the output media equals the length of the input media.
   * *   **long**: The length of the output media equals the length of the output media or the length of the input media, whichever is longer.
   * *   Default value: **long**.
   * 
   * @example
   * long
   */
  mixDurMode?: string;
  /**
   * @remarks
   * The start time. The value is in the number or time format. Examples: 1:25:36.240 and 32000.23.
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      amixURL: 'AmixURL',
      duration: 'Duration',
      map: 'Map',
      mixDurMode: 'MixDurMode',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amixURL: 'string',
      duration: 'string',
      map: 'string',
      mixDurMode: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

