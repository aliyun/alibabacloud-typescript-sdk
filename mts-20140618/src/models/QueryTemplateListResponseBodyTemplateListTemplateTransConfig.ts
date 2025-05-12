// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateListResponseBodyTemplateListTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale
   * *   crop
   * *   none
   * 
   * @example
   * none
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is higher than that of the input audio, the input bitrate is retained and the specified audio bitrate does not take effect. This parameter has a lower priority than IsCheckAudioBitrateFail. Valid values:
   * 
   * *   **true**
   * 
   * *   **false**
   * 
   * *   Default value:
   * 
   *     *   If this parameter is not specified and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If this parameter is not specified and the codec of the output audio is the same as that of the input audio, the default value is true.
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether audio bitrate check errors are allowed. This parameter has a greater priority than IsCheckAudioBitrate. Valid values:
   * 
   * *   **true**: If the audio bitrate check fails, the input file is not transcoded.
   * *   **false**: The audio bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckAudioBitrateFail?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, the input resolution is retained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckReso?: string;
  /**
   * @remarks
   * Indicates whether the resolution is checked. If the output resolution is higher than the input resolution based on the width or height, a transcoding failure is returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckResoFail?: string;
  /**
   * @remarks
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, the input bitrate is retained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrate?: string;
  /**
   * @remarks
   * Indicates whether video bitrate check errors are allowed. This parameter has a higher priority than IsCheckVideoBitrate. Valid values:
   * 
   * *   **true**: If the video bitrate check fails, the input file is not transcoded.
   * *   **false**: The video bitrate is not checked.
   * *   Default value: **false**.
   * 
   * @example
   * false
   */
  isCheckVideoBitrateFail?: string;
  /**
   * @remarks
   * The transcoding mode. Default value: **onepass**. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
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

