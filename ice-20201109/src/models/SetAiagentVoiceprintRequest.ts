// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIAgentVoiceprintRequestInput extends $dara.Model {
  /**
   * @remarks
   * The media access link.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/audio/sample.wav
   */
  data?: string;
  /**
   * @remarks
   * The audio file format. Only WAV is supported.
   * 
   * @example
   * wav
   */
  format?: string;
  /**
   * @remarks
   * Specifies the access type for the audio file. The system will verify file accessibility via HEAD or GET requests. Valid values:
   * 
   * *   url: An HTTP(S) link to the audio file.
   * 
   * *   oss: An OSS object. Supports the following formats:
   * 
   *     1.  OSS URI: oss://bucket-name/object-key
   * 
   *         Example: oss://my-bucket/audio/sample.wav
   * 
   *     2.  OSS public URL: http(s)://${bucket}.oss-${region}.aliyuncs.com/${object}
   * 
   *         Example: https://my-bucket.oss-cn-hangzhou.aliyuncs.com/audio/sample.wav
   * 
   * >  The OSS bucket must be in the same region as the service. Otherwise, the access fails.
   * 
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
  /**
   * @remarks
   * The input file.
   */
  input?: SetAIAgentVoiceprintRequestInput;
  /**
   * @remarks
   * A unique identifier for the voiceprint. Generate this ID based on your own business rules. Requirement: 1 to 127 characters in length.
   * 
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

