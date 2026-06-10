// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * This parameter is required.
   * 
   * @example
   * 10717802
   */
  intentId?: string;
  /**
   * @remarks
   * The ID of the script.
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

