// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBeebotIntentRequestIntentDefinition extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
   * 
   * @example
   * 嗯明白了
   */
  aliasName?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * > This is the intent code. It serves as a unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 知道了
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

export class CreateBeebotIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the intent.
   * 
   * This parameter is required.
   */
  intentDefinition?: CreateBeebotIntentRequestIntentDefinition;
  /**
   * @remarks
   * The scenario ID.
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
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentDefinition: CreateBeebotIntentRequestIntentDefinition,
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

