// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloneVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the cloned voice.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cloned voice.
   * 
   * @example
   * TestClonedVoice
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceId: 'CloneVoiceId',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceId: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

