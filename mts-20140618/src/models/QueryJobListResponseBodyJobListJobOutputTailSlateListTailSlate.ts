// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputTailSlateListTailSlate extends $dara.Model {
  /**
   * @remarks
   * The color of the bars that are added to the ending part if the size of the ending part is smaller than that of the main part. Default value: White. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * White
   */
  bgColor?: string;
  /**
   * @remarks
   * The duration of the transition between the main part and the ending part. A fade transition is used: The last frame of the main part fades out, and the first frame of the ending part fades in. Unit: seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  blendDuration?: string;
  /**
   * @remarks
   * The height of the ending part.
   * 
   * *   Valid values: values in the range of (0,4096), -1, and full.
   * *   A value of -1 indicates that the original height of the ending part is retained.
   * *   A value of full indicates that the height of the ending part equals the height of the main part.
   * *   Default value: -1.
   * 
   * @example
   * -1
   */
  height?: string;
  /**
   * @remarks
   * Indicates whether the audio content of the ending part is merged. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isMergeAudio?: boolean;
  /**
   * @remarks
   * The time when the ending part is played.
   * 
   * @example
   * 00000.00
   */
  start?: string;
  /**
   * @remarks
   * The OSS URL of the ending part.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv
   */
  tailUrl?: string;
  /**
   * @remarks
   * The width of the ending part. Valid values: values in the range of (0,4096), -1, and full.
   * 
   * *   A value of -1 indicates that the original width of the ending part is retained.
   * *   A value of full indicates that the width of the ending part equals the width of the main part.
   * *   Default value: -1.
   * 
   * @example
   * -1
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      blendDuration: 'BlendDuration',
      height: 'Height',
      isMergeAudio: 'IsMergeAudio',
      start: 'Start',
      tailUrl: 'TailUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      blendDuration: 'string',
      height: 'string',
      isMergeAudio: 'boolean',
      start: 'string',
      tailUrl: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

