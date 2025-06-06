// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelProviderAuthorization } from "./ModelProviderAuthorization";
import { ModelProviderSchema } from "./ModelProviderSchema";


export class ModelProviderSpec extends $dara.Model {
  authorization?: ModelProviderAuthorization;
  schema?: ModelProviderSchema;
  static names(): { [key: string]: string } {
    return {
      authorization: 'authorization',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: ModelProviderAuthorization,
      schema: ModelProviderSchema,
    };
  }

  validate() {
    if(this.authorization && typeof (this.authorization as any).validate === 'function') {
      (this.authorization as any).validate();
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

