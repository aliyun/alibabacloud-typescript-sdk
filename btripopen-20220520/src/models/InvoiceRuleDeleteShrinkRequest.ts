// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleDeleteShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  delAll?: boolean;
  entitiesShrink?: string;
  /**
   * @remarks
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

