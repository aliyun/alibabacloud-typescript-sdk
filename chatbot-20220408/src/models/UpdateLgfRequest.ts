// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLgfRequestLgfDefinition extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23234523522
   */
  intentId?: number;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateLgfRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  lgfDefinition?: UpdateLgfRequestLgfDefinition;
  /**
   * @remarks
   * LGF ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinition: 'LgfDefinition',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinition: UpdateLgfRequestLgfDefinition,
      lgfId: 'number',
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

