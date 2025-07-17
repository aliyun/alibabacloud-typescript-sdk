// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identifier } from "./Identifier";
import { Schema } from "./Schema";


export class CreateTableRequest extends $dara.Model {
  identifier?: Identifier;
  schema?: Schema;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: Identifier,
      schema: Schema,
    };
  }

  validate() {
    if(this.identifier && typeof (this.identifier as any).validate === 'function') {
      (this.identifier as any).validate();
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

