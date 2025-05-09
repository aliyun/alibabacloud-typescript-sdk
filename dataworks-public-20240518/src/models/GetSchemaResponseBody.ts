// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class GetSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * A89B5D9D-74EA-XXXXXX
   */
  requestId?: string;
  schema?: Schema;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: Schema,
      success: 'boolean',
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

