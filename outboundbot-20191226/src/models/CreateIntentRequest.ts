// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  intentDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  intentName?: string;
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b06fad9a-cc74-4ab6-b3a5-8d062adebf2c
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

