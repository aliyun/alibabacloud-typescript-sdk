// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the environment.
   * 
   * This parameter is required.
   * 
   * @example
   * Test environment
   */
  alias?: string;
  /**
   * @remarks
   * The description of the environment. You can specify information such as the purpose of the environment and the owner.
   * 
   * @example
   * This is the test environment for the xx project of xx
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

