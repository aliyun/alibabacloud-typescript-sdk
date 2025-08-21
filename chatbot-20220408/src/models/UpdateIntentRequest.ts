// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntentRequestIntentDefinitionSlotInfos extends $dara.Model {
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
   * dgadf23dfg2f
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

export class UpdateIntentRequestIntentDefinition extends $dara.Model {
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
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
  intentDefinition?: UpdateIntentRequestIntentDefinition;
  /**
   * @remarks
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

