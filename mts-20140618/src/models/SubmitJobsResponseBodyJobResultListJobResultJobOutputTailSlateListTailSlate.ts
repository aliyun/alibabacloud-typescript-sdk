// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate extends $dara.Model {
  /**
   * @remarks
   * The color of the bars that are added to the ending part if the size of the ending part is smaller than that of the main part. Default value: **White**. For more information, see [Background colors](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/29253/cn_zh/1502784952344/color.txt?spm=a2c4g.11186623.2.63.241240f77qp3Yy\\&file=color.txt).
   * 
   * @example
   * White
   */
  bgColor?: string;
  /**
   * @remarks
   * The duration of the transition between the main part and the ending part. A fade transition is used: The last frame of the main part fades out, and the first frame of the ending part fades in. Unit: seconds. Default value: **0**.
   * 
   * @example
   * 2
   */
  blendDuration?: string;
  /**
   * @remarks
   * The height of the ending part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   A value of **-1** indicates that the height of the source of the ending part is retained. A value of **full** indicates that the height of the main part is used for the ending part.
   * *   Default value: -1.
   * 
   * @example
   * 1080
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
   * false
   */
  isMergeAudio?: boolean;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1
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
   * The width of the ending part.
   * 
   * *   Valid values: values in the range of **(0,4096)**, **-1**, and **full**.
   * *   A value of **-1** indicates that the width of the source of the ending part is retained. A value of **full** indicates that the width of the main part is used for the ending part.
   * *   Default value: -1.
   * 
   * @example
   * 1920
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

