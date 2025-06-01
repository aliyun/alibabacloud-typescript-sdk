// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalSchemaResponseBodySchema } from "./GetApprovalSchemaResponseBodySchema";


export class GetApprovalSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  schema?: GetApprovalSchemaResponseBodySchema;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: GetApprovalSchemaResponseBodySchema,
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

