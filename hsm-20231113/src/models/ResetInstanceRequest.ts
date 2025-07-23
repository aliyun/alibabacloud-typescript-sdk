// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

