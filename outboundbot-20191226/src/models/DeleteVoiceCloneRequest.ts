// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVoiceCloneRequest extends $dara.Model {
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
   * The ID of the cloned voice to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * cosyvoice-v2-067dc4b2e9d34dbeb5de20b5b093d1e3
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

