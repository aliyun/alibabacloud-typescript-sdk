// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLgfRequestLgfDefinition extends $dara.Model {
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23234523522
   */
  intentId?: number;
  /**
   * @remarks
   * The LGF configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * .{0,10}[天气]
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
   * The LGF information.
   * 
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

