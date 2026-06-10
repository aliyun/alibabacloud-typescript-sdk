// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBeebotIntentUserSayRequestUserSayDefinition extends $dara.Model {
  /**
   * @remarks
   * The content of the user utterance.
   * 
   * This parameter is required.
   * 
   * @example
   * 你知道xxxxx么？
   */
  content?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      intentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBeebotIntentUserSayRequest extends $dara.Model {
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
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * The definition of the user utterance.
   * 
   * This parameter is required.
   */
  userSayDefinition?: ModifyBeebotIntentUserSayRequestUserSayDefinition;
  /**
   * @remarks
   * The user utterance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 17448458
   */
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      userSayDefinition: 'UserSayDefinition',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      userSayDefinition: ModifyBeebotIntentUserSayRequestUserSayDefinition,
      userSayId: 'string',
    };
  }

  validate() {
    if(this.userSayDefinition && typeof (this.userSayDefinition as any).validate === 'function') {
      (this.userSayDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

