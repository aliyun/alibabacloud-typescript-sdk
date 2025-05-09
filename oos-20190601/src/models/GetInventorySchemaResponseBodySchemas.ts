// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInventorySchemaResponseBodySchemasAttributes } from "./GetInventorySchemaResponseBodySchemasAttributes";


export class GetInventorySchemaResponseBodySchemas extends $dara.Model {
  /**
   * @remarks
   * The properties of the configuration list.
   */
  attributes?: GetInventorySchemaResponseBodySchemasAttributes[];
  /**
   * @remarks
   * The name of the configuration list.
   * 
   * @example
   * ACS:Application
   */
  typeName?: string;
  /**
   * @remarks
   * The version of the configuration list.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      typeName: 'TypeName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemasAttributes },
      typeName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

