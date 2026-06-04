// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaEntityDefRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

