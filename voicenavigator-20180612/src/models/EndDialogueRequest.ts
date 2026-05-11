// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8fb819b5-d032-48a9-ae5e-cff041b83596
   */
  conversationId?: string;
  /**
   * @example
   * {\\"duration\\":40,\\"endTime\\":1645082505345,\\"hangUpDirection\\":\\"ivr\\",\\"hasLastPlaybackCompleted\\":true,\\"startTime\\":1645082505305}
   */
  hangUpParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e48e45dd-e47a-4744-a063-f08cbebb1c5a
   */
  instanceId?: string;
  /**
   * @example
   * 1399572315967217
   */
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      hangUpParams: 'HangUpParams',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      hangUpParams: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

