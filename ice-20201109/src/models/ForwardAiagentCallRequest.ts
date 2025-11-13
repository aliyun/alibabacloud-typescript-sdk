// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardAIAgentCallRequest extends $dara.Model {
  /**
   * @example
   * 13**********
   */
  calledNumber?: string;
  errorPrompt?: string;
  /**
   * @example
   * call_instance_202******
   */
  instanceId?: string;
  transferPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      errorPrompt: 'ErrorPrompt',
      instanceId: 'InstanceId',
      transferPrompt: 'TransferPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      errorPrompt: 'string',
      instanceId: 'string',
      transferPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

