// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceCommandStep extends $dara.Model {
  /**
   * @example
   * ./
   */
  path?: string;
  /**
   * @example
   * s invoke
   */
  run?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      run: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

