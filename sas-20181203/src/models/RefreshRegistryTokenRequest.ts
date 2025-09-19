// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshRegistryTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

