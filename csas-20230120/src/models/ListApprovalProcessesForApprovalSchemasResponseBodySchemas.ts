// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses } from "./ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses";


export class ListApprovalProcessesForApprovalSchemasResponseBodySchemas extends $dara.Model {
  processes?: ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

