// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method of resolution adjustment. Default value: **none**. Valid values:
   * 
   * *   rescale: The video image is resized.
   * *   crop: The video image is cropped.
   * *   pad: The video image is scaled out to fill the view.
   * *   none: The resolution is not adjusted.
   * 
   * @example
   * crop
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
   *     *   If this parameter is empty and the codec of the output audio is different from the codec of the input audio, the default value is false.
   *     *   If this parameter is empty and the codec of the output audio is the same as the codec of the input audio, the default value is true.
   * 
   * @example
   * false
   */
  isCheckAudioBitrate?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. This parameter has a higher priority than **IsCheckAudioBitrate**. If the bitrate of the output audio is higher than that of the input audio, a transcoding failure is returned without transcoding the audio. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
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
   * Indicates whether the resolution is checked. This parameter has a higher priority than IsCheckReso. If the output resolution is higher than the input resolution based on the width or height, a transcoding failure is returned without transcoding the video. Valid values:
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
   * Indicates whether the video bitrate is checked. If the bitrate of the output video is higher than that of the input video, a transcoding failure is returned without transcoding the video. This parameter has a higher priority than**IsCheckVideoBitrate**. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * *   **onepass**: transcoding based on one-pass algorithms, which has higher accuracy.
   * *   **twopass**: transcoding based on two-pass algorithms, which has lower accuracy.
   * *   **CBR**: transcoding based on a fixed bitrate.
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

