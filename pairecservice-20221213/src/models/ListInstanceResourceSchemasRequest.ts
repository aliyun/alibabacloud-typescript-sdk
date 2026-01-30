// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourceSchemasRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

