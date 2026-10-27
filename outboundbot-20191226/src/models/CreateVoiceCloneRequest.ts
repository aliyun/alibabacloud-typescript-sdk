// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVoiceCloneRequest extends $dara.Model {
  /**
   * @remarks
   * The Folder field returned after a file is uploaded by calling the GetJobDataUploadParams operation.
   * 
   * This parameter is required.
   * 
   * @example
   * voiceclone/recordings/demo.mp3
   */
  fileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The model used for voice cloning.
   * 
   * @example
   * cosyvoice-v3.5-flash
   */
  model?: string;
  /**
   * @remarks
   * The name of the cloned voice. The names of enabled voices within the same instance must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * Cloned voice 1
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      instanceId: 'InstanceId',
      model: 'Model',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      instanceId: 'string',
      model: 'string',
      voiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

