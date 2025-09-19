// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRegistryExtraRequest extends $dara.Model {
  /**
   * @remarks
   * Image registry ID.
   * > You can obtain this parameter by calling the [PageImageRegistry](~~PageImageRegistry~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 25363
   */
  registryId?: number;
  static names(): { [key: string]: string } {
    return {
      registryId: 'RegistryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

