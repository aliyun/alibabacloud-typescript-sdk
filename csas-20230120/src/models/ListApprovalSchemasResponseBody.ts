// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalSchemasResponseBodySchemas } from "./ListApprovalSchemasResponseBodySchemas";


export class ListApprovalSchemasResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  schemas?: ListApprovalSchemasResponseBodySchemas[];
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalSchemasResponseBodySchemas },
      totalNum: 'string',
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

