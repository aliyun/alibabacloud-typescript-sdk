// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaEntityDefRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type. The value must match the regular expression `^custom_(?:entity-[A-Za-z0-9_]+|[A-Za-z0-9_]+-(?:database|table|column))$`.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

