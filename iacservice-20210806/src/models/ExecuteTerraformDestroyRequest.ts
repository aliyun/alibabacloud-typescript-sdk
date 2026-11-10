// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformDestroyRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. The format is [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the state file.
   * 
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

