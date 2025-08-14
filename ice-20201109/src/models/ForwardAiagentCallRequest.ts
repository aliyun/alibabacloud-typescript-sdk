// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardAIAgentCallRequest extends $dara.Model {
  /**
   * @example
   * 13**********
   */
  calledNumber?: string;
  /**
   * @example
   * call_instance_202******
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

