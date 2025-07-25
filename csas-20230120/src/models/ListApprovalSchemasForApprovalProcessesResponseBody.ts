// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas extends $dara.Model {
  /**
   * @example
   * 2024-03-15 14:44:07
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
   * @example
   * 1715680940
   */
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      policyType: 'PolicyType',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      policyType: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      schemaVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListApprovalSchemasForApprovalProcessesResponseBody extends $dara.Model {
  processes?: ListApprovalSchemasForApprovalProcessesResponseBodyProcesses[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalSchemasForApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
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

