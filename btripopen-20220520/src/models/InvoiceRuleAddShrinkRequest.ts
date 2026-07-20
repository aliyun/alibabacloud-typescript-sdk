// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleAddShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entitiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4854821
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      entitiesShrink: 'entities',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

