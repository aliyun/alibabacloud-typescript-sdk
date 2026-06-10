// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent description.
   * 
   * @example
   * 询问车险意图
   */
  intentDescription?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b9a2b33-50d4-4576-8c68-22498f4bf731
   */
  intentId?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * This parameter is required.
   * 
   * @example
   * 车险如何办理
   */
  intentName?: string;
  /**
   * @remarks
   * The keywords. The value must be a JSON array of strings.
   * 
   * @example
   * []
   */
  keywords?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9b70486f-b1c2-429c-8a24-62798015ab1b
   */
  scriptId?: string;
  /**
   * @remarks
   * The user utterances. The value must be a JSON array of strings.
   * 
   * This parameter is required.
   * 
   * @example
   * ["车险如何办理"]
   */
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentDescription: 'IntentDescription',
      intentId: 'IntentId',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentDescription: 'string',
      intentId: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      utterances: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

