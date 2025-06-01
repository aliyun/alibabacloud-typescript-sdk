// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalProcessesForApprovalSchemasResponseBodySchemas } from "./ListApprovalProcessesForApprovalSchemasResponseBodySchemas";


export class ListApprovalProcessesForApprovalSchemasResponseBody extends $dara.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  schemas?: ListApprovalProcessesForApprovalSchemasResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalProcessesForApprovalSchemasResponseBodySchemas },
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

