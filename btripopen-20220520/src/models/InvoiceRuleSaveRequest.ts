// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleSaveRequestEntities extends $dara.Model {
  id?: string;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceRuleSaveRequest extends $dara.Model {
  allEmploye?: boolean;
  entities?: InvoiceRuleSaveRequestEntities[];
  scope?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdPartId?: string;
  static names(): { [key: string]: string } {
    return {
      allEmploye: 'all_employe',
      entities: 'entities',
      scope: 'scope',
      thirdPartId: 'third_part_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allEmploye: 'boolean',
      entities: { 'type': 'array', 'itemType': InvoiceRuleSaveRequestEntities },
      scope: 'number',
      thirdPartId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

