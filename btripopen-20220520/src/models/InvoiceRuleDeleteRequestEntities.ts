// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceRuleDeleteRequestEntities extends $dara.Model {
  /**
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @example
   * 1
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

