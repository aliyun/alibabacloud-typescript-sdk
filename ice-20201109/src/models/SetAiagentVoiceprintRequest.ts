// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIAgentVoiceprintRequestInput extends $dara.Model {
  /**
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/audio/sample.wav
   */
  data?: string;
  /**
   * @example
   * wav
   */
  format?: string;
  /**
   * @example
   * url
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      format: 'Format',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      format: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAIAgentVoiceprintRequest extends $dara.Model {
  input?: SetAIAgentVoiceprintRequestInput;
  /**
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SetAIAgentVoiceprintRequestInput,
      voiceprintId: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

