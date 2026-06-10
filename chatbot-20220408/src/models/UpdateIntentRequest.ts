// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntentRequestIntentDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the slot can contain an array of values.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Specifies whether to enable data masking for the slot value.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * Specifies whether the slot is interactive. If true, the chatbot prompts the user for a value if the user does not provide one.
   * 
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * The name of the slot.
   * 
   * This parameter is required.
   * 
   * @example
   * 天气
   */
  name?: string;
  /**
   * @remarks
   * The ID of the slot.
   * 
   * This parameter is required.
   * 
   * @example
   * dgadf23dfg2f
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

export class UpdateIntentRequestIntentDefinition extends $dara.Model {
  /**
   * @remarks
   * The alias for the intent.
   * 
   * @example
   * 查天气意图
   */
  aliasName?: string;
  /**
   * @remarks
   * The name of the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * 查天气意图
   */
  intentName?: string;
  /**
   * @remarks
   * A list of slot objects.
   */
  slotInfos?: UpdateIntentRequestIntentDefinitionSlotInfos[];
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
      slotInfos: { 'type': 'array', 'itemType': UpdateIntentRequestIntentDefinitionSlotInfos },
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

export class UpdateIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you omit this parameter, the system uses the default business space. You can find this key on the Business Management page of your primary account.
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
   * The intent definition object.
   */
  intentDefinition?: UpdateIntentRequestIntentDefinition;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * 234234234534
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinition: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinition: UpdateIntentRequestIntentDefinition,
      intentId: 'number',
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

