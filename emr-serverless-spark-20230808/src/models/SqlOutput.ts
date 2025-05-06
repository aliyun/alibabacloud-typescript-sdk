// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlOutputRows } from "./SqlOutputRows";
import { SqlOutputSchema } from "./SqlOutputSchema";


export class SqlOutput extends $dara.Model {
  rows?: SqlOutputRows[];
  schema?: SqlOutputSchema;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': SqlOutputRows },
      schema: SqlOutputSchema,
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

