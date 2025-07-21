// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias that you want to bind.
   * 
   * The value must be 1 to 255 characters in length and must include the alias/ prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
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
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
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

