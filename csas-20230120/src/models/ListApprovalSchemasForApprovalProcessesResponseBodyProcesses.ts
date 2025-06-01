// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas } from "./ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas";


export class ListApprovalSchemasForApprovalProcessesResponseBodyProcesses extends $dara.Model {
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  schemas?: ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas[];
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
      schemas: { 'type': 'array', 'itemType': ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas },
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

