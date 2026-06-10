// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * A description of the intent.
   * 
   * @example
   * 确定是本人的意图
   */
  intentDescription?: string;
  /**
   * @remarks
   * The name of the intent. This name must be unique within the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 是本人
   */
  intentName?: string;
  /**
   * @remarks
   * A JSON-formatted string containing an array of keywords that help identify the intent.
   * 
   * @example
   * ["是","是的"]
   */
  keywords?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * A JSON-formatted string containing an array of sample utterances that trigger this intent.
   * 
   * This parameter is required.
   * 
   * @example
   * ["是","是的","是啊","嗯嗯","是我","是我，有事吗","对，是","对的","对是我",""]
   */
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentDescription: 'IntentDescription',
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

