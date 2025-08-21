// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentRequestIntentDefinitionSlotInfos extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fg452dfg3df23
   */
  slotId?: string;
  /**
   * @remarks
   * This parameter is required.
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
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
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

