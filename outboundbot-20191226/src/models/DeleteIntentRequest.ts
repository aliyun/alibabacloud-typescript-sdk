// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the intent to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * c21fb0ec-fb5e-476f-a6bf-81a892739c8d
   */
  intentId?: string;
  /**
   * @remarks
   * The ID of the script that contains the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * aa279896-64a6-4182-864c-4f2b04ec8d17
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

