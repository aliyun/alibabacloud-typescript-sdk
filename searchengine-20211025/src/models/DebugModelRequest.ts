// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugModelRequest extends $dara.Model {
  /**
   * @remarks
   * The input of the model.
   * 
   * @example
   * test
   */
  input?: string;
  /**
   * @remarks
   * Specifies whether to perform an online query. Set this parameter to true to use the search configuration. Set this parameter to false to use the build configuration.
   * 
   * @example
   * true
   */
  isOnline?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      isOnline: 'isOnline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      isOnline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

