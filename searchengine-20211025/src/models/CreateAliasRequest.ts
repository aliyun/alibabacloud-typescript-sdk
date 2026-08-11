// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * The associated index.
   * 
   * @example
   * index
   */
  index?: string;
  /**
   * @remarks
   * Specifies whether the new version of the console page is used.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      index: 'index',
      newMode: 'newMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      index: 'string',
      newMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

