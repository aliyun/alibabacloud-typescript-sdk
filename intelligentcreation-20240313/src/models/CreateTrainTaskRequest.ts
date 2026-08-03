// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainTaskRequest extends $dara.Model {
  aliyunMainId?: string;
  resSpecType?: string;
  taskType?: string;
  useScene?: string;
  voiceGender?: string;
  voiceLanguage?: string;
  voiceName?: string;
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

