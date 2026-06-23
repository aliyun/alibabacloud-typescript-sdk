// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaEntityWriteResult extends $dara.Model {
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * custom_entity-demo
   */
  entityType?: string;
  /**
   * @remarks
   * The error message if the operation fails for the entity.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * custom_entity-demo:entity_01
   */
  id?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * entity_01
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded for the entity.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      name: 'Name',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      errorMessage: 'string',
      id: 'string',
      name: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

