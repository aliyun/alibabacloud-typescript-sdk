// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInvoiceEntityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all applicable personnel. If del_all is set to true, all entities under the invoice header are deleted, and the entity list parameter is not validated.
   * 
   * @example
   * false
   */
  delAll?: boolean;
  /**
   * @remarks
   * The entity list. This parameter is required when del_all is set to false or null.
   */
  entitiesShrink?: string;
  /**
   * @remarks
   * The third-party invoice ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      delAll: 'del_all',
      entitiesShrink: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
      entitiesShrink: 'string',
      thirdPartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

