// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAudioProduceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job description.
   * 
   * *   The job description can be up to 1,024 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * 任务描述  长度不超过1024字节  UTF8编码
   */
  description?: string;
  /**
   * @remarks
   * The audio editing configurations.
   * 
   * *   voice: the [voice type](https://help.aliyun.com/document_detail/449563.html).
   * *   customizedVoice: the ID of the personalized human voice.
   * *   format: the format of the output file. Valid values: PCM, WAV, and MP3.
   * *   volume: the volume. Default value: 50. Valid values: 0 to 100.
   * *   speech_rate: the speech tempo. Default value: 0. Value range: -500 to 500.
   * *   pitch_rate: the intonation. Default value: 0. Value range: -500 to 500.
   * 
   * >  If you specify both voice and customizedVoice, customizedVoice takes precedence over voice.
   * 
   * This parameter is required.
   * 
   * @example
   * {"voice":"Siqi","format":"MP3","volume":50}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The text content. A maximum of 2,000 characters are supported. The [Speech Synthesis Markup Language (SSML)](https://help.aliyun.com/document_detail/2672807.html) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试文本
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output audio configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"bucket":"bucket","object":"objeck"}
   */
  outputConfig?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the existing Object Storage Service (OSS) object.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The job title. If you do not specify this parameter, the system generates a title based on the current date.
   * 
   * *   The job title can be up to 128 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * 任务标题。若不提供，根据日期自动生成默认title  长度不超过128字节  UTF8编码
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which can be up to 512 bytes in length. You can specify a custom callback URL. For more information, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * {"user":"data"}
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

