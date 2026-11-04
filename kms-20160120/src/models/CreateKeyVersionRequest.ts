// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The key ID, which is the globally unique identifier of the key.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz62f1cb66fa42qo***
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

