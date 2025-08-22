// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformDestroyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-xxx
   */
  stateId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      stateId: 'stateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      stateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

