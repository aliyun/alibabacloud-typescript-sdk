// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvVar extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * ENABLE_DEBUG
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

