// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectedNumberRequest extends $dara.Model {
  additionalContext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  instanceId?: string;
  /**
   * @example
   * 1426738157626835
   */
  instanceOwnerId?: number;
  /**
   * @example
   * 1500060224
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      conversationId: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

