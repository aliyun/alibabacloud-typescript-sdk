// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSayRequestUserSayDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * The end index of the slot in the intent utterance (exclusive).
   * 
   * @example
   * 3
   */
  endIndex?: number;
  /**
   * @remarks
   * The slot ID.
   * 
   * @example
   * 346ffg3q23dv
   */
  slotId?: string;
  /**
   * @remarks
   * The start index of the slot in the intent utterance.
   * 
   * @example
   * 1
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      endIndex: 'EndIndex',
      slotId: 'SlotId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIndex: 'number',
      slotId: 'string',
      startIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayRequestUserSayDefinition extends $dara.Model {
  /**
   * @remarks
   * The user utterance.
   * 
   * This parameter is required.
   * 
   * @example
   * Have you taken a COVID test?
   */
  content?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  intentId?: number;
  /**
   * @remarks
   * The slot information.
   */
  slotInfos?: UpdateUserSayRequestUserSayDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      intentId: 'IntentId',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      intentId: 'number',
      slotInfos: { 'type': 'array', 'itemType': UpdateUserSayRequestUserSayDefinitionSlotInfos },
    };
  }

  validate() {
    if(Array.isArray(this.slotInfos)) {
      $dara.Model.validateArray(this.slotInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSayRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The definition of the user utterance.
   */
  userSayDefinition?: UpdateUserSayRequestUserSayDefinition;
  /**
   * @remarks
   * The user utterance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34512323
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinition: 'UserSayDefinition',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinition: UpdateUserSayRequestUserSayDefinition,
      userSayId: 'number',
    };
  }

  validate() {
    if(this.userSayDefinition && typeof (this.userSayDefinition as any).validate === 'function') {
      (this.userSayDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

