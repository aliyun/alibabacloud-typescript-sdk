// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyServiceInfosSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the Software.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 6.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
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

