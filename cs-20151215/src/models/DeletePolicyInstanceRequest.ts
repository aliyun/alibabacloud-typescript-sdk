// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy instance.
   * 
   * @example
   * allowed-repos-mqdsf
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instance_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

