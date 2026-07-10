// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleSaveShrinkRequest extends $dara.Model {
  allEmploye?: boolean;
  entitiesShrink?: string;
  scope?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      allEmploye: 'all_employe',
      entitiesShrink: 'entities',
      scope: 'scope',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allEmploye: 'boolean',
      entitiesShrink: 'string',
      scope: 'number',
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

