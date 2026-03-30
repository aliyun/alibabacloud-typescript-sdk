// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloneVoiceRequest extends $dara.Model {
  /**
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
  /**
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  instanceId?: string;
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

