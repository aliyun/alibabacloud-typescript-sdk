// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainTaskRequest extends $dara.Model {
  /**
   * @example
   * 13168123111
   */
  aliyunMainId?: string;
  /**
   * @example
   * BASIC_MODEL
   */
  resSpecType?: string;
  /**
   * @example
   * CopyAnchorAndVoice
   */
  taskType?: string;
  /**
   * @example
   * realTimeInteractivity
   */
  useScene?: string;
  /**
   * @example
   * M
   */
  voiceGender?: string;
  /**
   * @example
   * zh
   */
  voiceLanguage?: string;
  voiceName?: string;
  /**
   * @example
   * https://yic-pre/video/test-0513.mp3
   */
  voicePath?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunMainId: 'aliyunMainId',
      resSpecType: 'resSpecType',
      taskType: 'taskType',
      useScene: 'useScene',
      voiceGender: 'voiceGender',
      voiceLanguage: 'voiceLanguage',
      voiceName: 'voiceName',
      voicePath: 'voicePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunMainId: 'string',
      resSpecType: 'string',
      taskType: 'string',
      useScene: 'string',
      voiceGender: 'string',
      voiceLanguage: 'string',
      voiceName: 'string',
      voicePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

