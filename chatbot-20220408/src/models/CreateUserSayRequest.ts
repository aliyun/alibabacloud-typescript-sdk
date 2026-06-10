// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSayRequestUserSayDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * The zero-based end index of the slot in the user say content. This index is exclusive.
   * 
   * @example
   * 6
   */
  endIndex?: number;
  /**
   * @remarks
   * The ID of the slot.
   * 
   * @example
   * fb34adf2fv43f2
   */
  slotId?: string;
  /**
   * @remarks
   * The zero-based start index of the slot in the user say content.
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
   * The content of the user say.
   * 
   * This parameter is required.
   * 
   * @example
   * 请问明天北京的天气
   */
  content?: string;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * 123232
   */
  intentId?: number;
  /**
   * @remarks
   * An array of objects, each containing information about a slot.
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
   * The key of the business space. If you do not specify this parameter, the default business space is used. You can find the key on the Business Management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the chatbot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The definition of the user say.
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

