// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * > You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to query the IDs of image repositories.
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

