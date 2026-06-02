// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIntentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  intentDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3b9a2b33-50d4-4576-8c68-22498f4bf731
   */
  intentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
  /**
   * @example
   * []
   */
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9b70486f-b1c2-429c-8a24-62798015ab1b
   */
  scriptId?: string;
  /**
   * @remarks
   * This parameter is required.
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

