// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformDestroyRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token. Format: [0-9a-zA-Z-]{1,64}. Use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The state file ID.
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

