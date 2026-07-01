// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioProduceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the job.
   * 
   * - Cannot exceed 1,024 bytes.
   * 
   * - Must be UTF-8 encoded.
   * 
   * @example
   * Task description, max 1024 bytes, UTF-8 encoded
   */
  description?: string;
  /**
   * @remarks
   * The audio production configuration:
   * 
   * - `voice`: The [voice type](https://help.aliyun.com/document_detail/449563.html).
   * 
   * - `customizedVoice`: The ID of the custom voice for voice cloning.
   * 
   * - `format`: The output file format. Supported formats: `PCM`, `WAV`, and `MP3`.
   * 
   * - `volume`: The volume. The value ranges from 0 to 100. Default: 50.
   * 
   * - `speech_rate`: The speech rate. The value ranges from -500 to 500. Default: 0.
   * 
   *   - Values of -500, 0, and 500 correspond to 0.5x, 1.0x, and 2.0x speed, respectively.
   * 
   *   - Calculation method:
   * 
   *     - For a 0.8x speed multiplier: (1 - 1/0.8) / 0.002 = -125.
   * 
   *     - For a 1.2x speed multiplier: (1 - 1/1.2) / 0.001 = 166.
   * 
   *     - For speed multipliers less than 1, use a factor of 0.002.
   * 
   *     - For speed multipliers greater than 1, use a factor of 0.001.
   * 
   * - `pitch_rate`: The pitch rate. The value ranges from -500 to 500. Default: 0.
   * 
   * 
   *   >Notice: 
   * 
   *   If you provide both `voice` and `customizedVoice`, `customizedVoice` takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * {"voice":"Siqi","format":"MP3","volume":50}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The text to synthesize. The maximum length is 10,000 characters. Supports [SSML](https://help.aliyun.com/document_detail/2672807.html).
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
   * Specifies whether to overwrite an existing OSS file.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The title of the job. If you do not provide a title, the system automatically generates one based on the current date.
   * 
   * - Cannot exceed 128 bytes.
   * 
   * - Must be UTF-8 encoded.
   * 
   * @example
   * China Regional Daily News
   */
  title?: string;
  /**
   * @remarks
   * Custom settings in JSON format. The maximum length is 512 bytes. This parameter supports [custom callback address configuration](https://help.aliyun.com/document_detail/451631.html).
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

