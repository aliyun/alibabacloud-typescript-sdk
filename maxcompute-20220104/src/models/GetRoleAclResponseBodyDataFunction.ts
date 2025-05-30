// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleAclResponseBodyDataFunction extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the function.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * functionA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

