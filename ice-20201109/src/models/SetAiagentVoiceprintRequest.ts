// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAIAgentVoiceprintRequestInput extends $dara.Model {
  /**
   * @remarks
   * The access URL.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/audio/sample.wav
   */
  data?: string;
  /**
   * @remarks
   * The audio file type. Only wav is supported.
   * 
   * @example
   * wav
   */
  format?: string;
  /**
   * @remarks
   * The access type of the audio media. The system verifies file accessibility through HEAD/GET requests. Valid values:
   * 
   * - url: an HTTP URL of the audio file.
   * - oss: Alibaba Cloud OSS object storage. The following formats are supported:
   *   1. OSS URI format: oss://bucket-name/object-key
   * 
   *      Example: oss://my-bucket/audio/sample.wav
   *   
   *   2. OSS public endpoint: http(s)://${bucket}.oss-${region}.aliyuncs.com/${object}
   * 
   *      Example: https://my-bucket.oss-cn-hangzhou.aliyuncs.com/audio/sample.wav
   * 
   * > The OSS bucket must be in the same region as the service. Otherwise, access fails.
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
   * The input media.
   */
  input?: SetAIAgentVoiceprintRequestInput;
  /**
   * @remarks
   * The unique identifier of a voiceprint. Generate this ID based on your business rules. Character length: 1-127.
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

