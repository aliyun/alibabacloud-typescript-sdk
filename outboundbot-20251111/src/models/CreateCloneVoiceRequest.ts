// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloneVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * 文件Key
   * 
   * @example
   * voice_clone/upload/d25ace5f-c8c6-45af-a5b1-8fd6b8595747/019FDB17-4901-17A9-99D6-27B77BC047C0_record.wav
   */
  fileKey?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 模型名称
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      instanceId: 'InstanceId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      instanceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

