// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   **rescale**: The input video is rescaled.
   * *   **crop**: The input video is cropped.
   * *   **none**: No change is made.
   * 
   * @example
   * rescale
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked.
   * 
   * If this feature is enabled and the system detects that the audio bitrate of the output file is greater than that of the input file, the audio bitrate of the input file is retained after transcoding.
   * 
   * *   **true**: The audio bitrate is checked.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If this feature is enabled and the system detects that the audio bitrate of the output file is higher than that of the input file, the input file is not transcoded. This parameter has a higher priority than the **IsCheckAudioBitrate** parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked. In this case, if the audio bitrate of the output file is higher than that of the input file, the input file is not transcoded.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked.
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, the resolution of the input file is retained after transcoding.
   * 
   * @example
   * true
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked.
   * 
   * *   **true**: The resolution is checked.
   * *   **false**: The resolution is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the resolution of the output file is higher than that of the input file based on the width or height, an error that indicates a transcoding failure is returned.
   * 
   * @example
   * true
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked.
   * 
   * *   **true**: The video bitrate is checked.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * > If this feature is enabled and the system detects that the video bitrate of the output file is greater than that of the input file, the video bitrate of the input file is retained after transcoding.
   * 
   * @example
   * true
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If this feature is enabled and the system detects that the video bitrate of the output file is higher than that of the input file, the input file is not transcoded. This parameter has a higher priority than the IsCheckVideoBitrate parameter.
   * 
   * *   **true**: The video bitrate is checked. In this case, if the video bitrate of the output file is higher than that of the input file, the input file is not transcoded.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * true
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
   * *   Default value: **onepass**.
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

