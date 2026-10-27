// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVoiceCloneRequest extends $dara.Model {
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
   * The status of the voice. Note: For a newly created voice, you must call the ModifyVoiceClone operation and set Status to Enabled before it can be used.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the cloned voice to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * cosyvoice-v2-067dc4b2e9d34dbeb5de20b5b093d1e3
   */
  voiceId?: string;
  /**
   * @remarks
   * The name of the voice.
   * 
   * @example
   * Cloned voice 1
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
      voiceId: 'string',
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

