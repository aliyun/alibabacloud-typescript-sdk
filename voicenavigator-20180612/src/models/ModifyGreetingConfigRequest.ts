// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGreetingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The greeting words.
   * 
   * This parameter is required.
   * 
   * @example
   * 你好，欢迎使用智能导航。
   */
  greetingWords?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent trigger.
   * 
   * @example
   * 开始
   */
  intentTrigger?: string;
  /**
   * @remarks
   * The type.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbotIntent
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      greetingWords: 'GreetingWords',
      instanceId: 'InstanceId',
      intentTrigger: 'IntentTrigger',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingWords: 'string',
      instanceId: 'string',
      intentTrigger: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

