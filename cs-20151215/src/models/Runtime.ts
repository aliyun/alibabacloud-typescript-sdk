// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Runtime extends $dara.Model {
  /**
   * @example
   * docker
   */
  name?: string;
  /**
   * @example
   * 19.03.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

