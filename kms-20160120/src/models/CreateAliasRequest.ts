// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the CMK. The alias must be 1 to 255 characters in length, must contain the `alias/` prefix, and cannot start with the reserved word `alias/acs`.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
  /**
   * @remarks
   * The globally unique identifier of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
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

