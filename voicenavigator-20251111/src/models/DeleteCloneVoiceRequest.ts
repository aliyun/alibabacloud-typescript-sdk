// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloneVoiceRequest extends $dara.Model {
  /**
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5b
   */
  cloneVoiceId?: string;
  /**
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5a
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceId: 'CloneVoiceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

