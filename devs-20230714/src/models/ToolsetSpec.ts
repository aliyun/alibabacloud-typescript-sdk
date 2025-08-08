// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Authorization } from "./Authorization";
import { ToolsetSchema } from "./ToolsetSchema";


export class ToolsetSpec extends $dara.Model {
  authConfig?: Authorization;
  schema?: ToolsetSchema;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: Authorization,
      schema: ToolsetSchema,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
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

