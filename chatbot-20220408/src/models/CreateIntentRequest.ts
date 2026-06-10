// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentRequestIntentDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the slot can have multiple values.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Specifies whether to encrypt the slot value.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * Specifies whether the slot is interactive.
   * 
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * The slot name.
   * 
   * This parameter is required.
   * 
   * @example
   * 天气
   */
  name?: string;
  /**
   * @remarks
   * The slot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fg452dfg3df23
   */
  slotId?: string;
  /**
   * @remarks
   * The name of the associated entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 天气
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequestIntentDefinition extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
   * 
   * @example
   * 查天气意图
   */
  aliasName?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * This parameter is required.
   * 
   * @example
   * 查天气意图
   */
  intentName?: string;
  /**
   * @remarks
   * An array of objects, each defining a slot for the intent.
   */
  slotInfos?: CreateIntentRequestIntentDefinitionSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      intentName: 'IntentName',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      intentName: 'string',
      slotInfos: { 'type': 'array', 'itemType': CreateIntentRequestIntentDefinitionSlotInfos },
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

export class CreateIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you do not specify this parameter, the default business space is used. You can get the key from the business management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent definition.
   */
  intentDefinition?: CreateIntentRequestIntentDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinition: 'IntentDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinition: CreateIntentRequestIntentDefinition,
    };
  }

  validate() {
    if(this.intentDefinition && typeof (this.intentDefinition as any).validate === 'function') {
      (this.intentDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

