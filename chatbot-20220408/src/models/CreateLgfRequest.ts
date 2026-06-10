// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLgfRequestLgfDefinition extends $dara.Model {
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4675678567
   */
  intentId?: number;
  /**
   * @remarks
   * The LGF configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * .{0,10}北京天气
   */
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
      ruleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLgfRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you omit this parameter, the default business space is used. You can find the key on the Business Management page of your main account.
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
   * The LGF definition.
   */
  lgfDefinition?: CreateLgfRequestLgfDefinition;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinition: 'LgfDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinition: CreateLgfRequestLgfDefinition,
    };
  }

  validate() {
    if(this.lgfDefinition && typeof (this.lgfDefinition as any).validate === 'function') {
      (this.lgfDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

