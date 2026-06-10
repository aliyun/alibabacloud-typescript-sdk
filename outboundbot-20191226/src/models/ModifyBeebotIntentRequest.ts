// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBeebotIntentRequestIntentDefinition extends $dara.Model {
  /**
   * @remarks
   * Intent alias
   * 
   * @example
   * 嗯明白了
   */
  aliasName?: string;
  /**
   * @remarks
   * Intent name
   * 
   * This parameter is required.
   * 
   * @example
   * 知道了么
   */
  intentName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      intentName: 'IntentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      intentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBeebotIntentRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * Intent definition
   * 
   * This parameter is required.
   */
  intentDefinition?: ModifyBeebotIntentRequestIntentDefinition;
  /**
   * @remarks
   * Intent ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * Scenario ID
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentDefinition: 'IntentDefinition',
      intentId: 'IntentId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentDefinition: ModifyBeebotIntentRequestIntentDefinition,
      intentId: 'number',
      scriptId: 'string',
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

