// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSayRequestUserSayDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * The end index of the slot in the intent utterance (exclusive).
   * 
   * @example
   * 6
   */
  endIndex?: number;
  /**
   * @remarks
   * The slot ID.
   * 
   * @example
   * fb34adf2fv43f2
   */
  slotId?: string;
  /**
   * @remarks
   * The start index of the slot in the intent utterance.
   * 
   * @example
   * 4
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

export class CreateUserSayRequestUserSayDefinition extends $dara.Model {
  /**
   * @remarks
   * The user utterance.
   * 
   * This parameter is required.
   * 
   * @example
   * What is the weather in Beijing tomorrow?
   */
  content?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123232
   */
  intentId?: number;
  /**
   * @remarks
   * The slot information.
   */
  slotInfos?: CreateUserSayRequestUserSayDefinitionSlotInfos[];
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
      slotInfos: { 'type': 'array', 'itemType': CreateUserSayRequestUserSayDefinitionSlotInfos },
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

export class CreateUserSayRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The user utterance definition information.
   */
  userSayDefinition?: CreateUserSayRequestUserSayDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      userSayDefinition: 'UserSayDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      userSayDefinition: CreateUserSayRequestUserSayDefinition,
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

