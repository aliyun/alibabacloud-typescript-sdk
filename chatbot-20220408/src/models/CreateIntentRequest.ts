// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentRequestIntentDefinitionSlotInfos extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the slot is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Specifies whether the slot value is masked.
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
   * Weather
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
   * Weather
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
   * CheckWeatherIntent
   */
  aliasName?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * This parameter is required.
   * 
   * @example
   * CheckWeatherIntent
   */
  intentName?: string;
  /**
   * @remarks
   * The slot information.
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
   * The business space key. If this parameter is not set, the default business space is accessed. You can obtain the key value on the business management page of the main account.
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
   * The intent definition struct.
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

