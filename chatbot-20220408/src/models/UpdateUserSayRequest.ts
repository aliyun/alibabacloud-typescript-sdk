// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSayRequestUserSayDefinitionSlotInfos extends $dara.Model {
  /**
   * @example
   * 3
   */
  endIndex?: number;
  /**
   * @example
   * 346ffg3q23dv
   */
  slotId?: string;
  /**
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
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  intentId?: number;
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
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  userSayDefinition?: UpdateUserSayRequestUserSayDefinition;
  /**
   * @remarks
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

