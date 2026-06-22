// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The image repository ID.
   * >Call the [PageImageRegistry](~~PageImageRegistry~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 22233
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

