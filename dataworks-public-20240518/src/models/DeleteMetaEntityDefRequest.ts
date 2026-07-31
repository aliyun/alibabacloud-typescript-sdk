// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaEntityDefRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * Specifies whether to force delete the entity definition. Default value: false. Valid values:
   * 
   * - true: Automatically deletes all entity objects created under this entity type.
   * - false: Checks whether entity objects exist under this entity type. If objects exist, the deletion is failed.
   * 
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

