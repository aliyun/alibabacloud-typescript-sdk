// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRegistryExtraRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to obtain the ID.
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

