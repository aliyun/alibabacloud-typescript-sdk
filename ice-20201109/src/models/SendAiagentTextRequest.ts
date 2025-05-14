// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentTextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

