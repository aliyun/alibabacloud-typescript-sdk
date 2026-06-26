// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the function.
   * 
   * @example
   * prod
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

