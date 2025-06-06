// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ToolsetSchema } from "./ToolsetSchema";


export class ToolsetSpec extends $dara.Model {
  schema?: ToolsetSchema;
  static names(): { [key: string]: string } {
    return {
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: ToolsetSchema,
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

