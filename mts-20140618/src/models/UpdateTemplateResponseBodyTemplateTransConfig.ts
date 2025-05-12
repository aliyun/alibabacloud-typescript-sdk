// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBodyTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If this parameter is set to true and the system detects that the video bitrate of the output file is greater than that of the input file, the video bitrate of the input file is retained after transcoding. Valid values:
   * 
   * *   **true**: The video bitrate is checked.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * The transcoding mode. Default value: **onepass**. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * *   **Normal**: The template is normal.
   * *   **Deleted**: The template is deleted.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. This parameter has a higher priority than the IsCheckVideoBitrate parameter. Valid values:
   * 
   * *   **true**: The video bitrate is checked
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. This parameter has a higher priority than the IsCheckAudioBitrate parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If this parameter is set to true and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, an error that indicates a transcoding failure is returned. Valid values:
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale: The input video is rescaled.
   * *   crop: The input video is cropped.
   * *   none: No change is made.
   * 
   * @example
   * false
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained after transcoding. Valid values:
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * onepass
   */
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'string',
      isCheckAudioBitrateFail: 'string',
      isCheckReso: 'string',
      isCheckResoFail: 'string',
      isCheckVideoBitrate: 'string',
      isCheckVideoBitrateFail: 'string',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

