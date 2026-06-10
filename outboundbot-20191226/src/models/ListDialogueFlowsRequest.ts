// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogueFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b5b0a30f-69e7-4147-98b5-553fc526361d
   */
  instanceId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d7c28efb-47f7-4a85-a522-5038e30a0b98
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

