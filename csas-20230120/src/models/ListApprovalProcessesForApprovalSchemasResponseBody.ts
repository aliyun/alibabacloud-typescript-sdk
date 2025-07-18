// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesForApprovalSchemasResponseBodySchemasProcesses extends $dara.Model {
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * approval-process-dc61e92ba5c5****
   */
  processId?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      processId: 'ProcessId',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      processId: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

