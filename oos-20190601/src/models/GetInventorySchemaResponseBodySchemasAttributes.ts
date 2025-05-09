// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventorySchemaResponseBodySchemasAttributes extends $dara.Model {
  /**
   * @remarks
   * The data type of the property.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * ApplicationType
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

