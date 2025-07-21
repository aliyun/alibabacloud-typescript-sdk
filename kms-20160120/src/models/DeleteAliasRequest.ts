// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias that you want to delete.
   * 
   * The value must be 1 to 255 characters in length and must include the alias/ prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

