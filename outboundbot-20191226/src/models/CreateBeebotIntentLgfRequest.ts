// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBeebotIntentLgfRequestLgfDefinition extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10717802
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

export class CreateBeebotIntentLgfRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  lgfDefinition?: CreateBeebotIntentLgfRequestLgfDefinition;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lgfDefinition: 'LgfDefinition',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lgfDefinition: CreateBeebotIntentLgfRequestLgfDefinition,
      scriptId: 'string',
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

