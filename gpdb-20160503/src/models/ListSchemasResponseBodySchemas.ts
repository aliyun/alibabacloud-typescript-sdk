// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasResponseBodySchemas extends $dara.Model {
  schemas?: string[];
  static names(): { [key: string]: string } {
    return {
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemas: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

