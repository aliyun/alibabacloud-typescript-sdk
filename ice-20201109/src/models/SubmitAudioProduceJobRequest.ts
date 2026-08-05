// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioProduceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task description:
   * - Maximum length: 1024 bytes.
   * - UTF-8 encoding.
   * 
   * @example
   * Task description, max 1024 bytes, UTF-8 encoded
   */
  description?: string;
  /**
   * @remarks
   * The audio production configuration:
   * - voice: the [voice type](https://help.aliyun.com/document_detail/449563.html).
   * - customizedVoice: the VoiceId for voice cloning.
   * - format: the output file format. Valid values: PCM, WAV, and MP3.
   * - volume: the volume. Valid values: 0 to 100. Default value: 50.
   * - speech_rate: the speech rate. Valid values: -500 to 500. Default value: 0.
   *     - [-500, 0, 500] corresponds to the speed multiplier range of [0.5, 1.0, 2.0].
   *     - The calculation method is as follows:
   *         - 0.8x speed: (1-1/0.8)/0.002 = -125
   *         - 1.2x speed: (1-1/1.2)/0.001 = 166
   *         - For speeds less than 1x, use the 0.002 coefficient.
   *         - For speeds greater than 1x, use the 0.001 coefficient.
   * - pitch_rate: the pitch. Valid values: -500 to 500. Default value: 0.
   * <notice>If both voice and customizedVoice are specified, customizedVoice takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * {"voice":"Siqi","format":"MP3","volume":50}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The text content. A maximum of 10,000 Chinese characters is supported. [SSML markup language](https://help.aliyun.com/document_detail/2672807.html) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Audio production task
   */
  inputConfig?: string;
  /**
   * @remarks
   * The audio output configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * For example, to store the output audio at http://my_bucket.oss-cn-shanghai.aliyuncs.com/target_audio.mp3, configure this parameter as:
   * {
   *       "bucket": "my_bucket",
   *       "object": "target_audio"
   * }
   */
  outputConfig?: string;
  /**
   * @remarks
   * Specifies whether to overwrite existing OSS files.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The task title. If not provided, a default title is automatically generated based on the date.
   * - Maximum length: 128 bytes.
   * - UTF-8 encoding.
   * 
   * @example
   * China Regional Daily News
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in JSON format. Maximum length: 512 bytes. [Custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html) is supported.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      overwrite: 'Overwrite',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      outputConfig: 'string',
      overwrite: 'boolean',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

