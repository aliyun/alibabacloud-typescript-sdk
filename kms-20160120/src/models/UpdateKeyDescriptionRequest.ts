// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKeyDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the CMK. This description includes the purpose of the CMK, such as the types of data that you want to protect and applications that can use the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

