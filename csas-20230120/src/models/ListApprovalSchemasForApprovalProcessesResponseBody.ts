// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasForApprovalProcessesResponseBodyProcessesSchemas extends $dara.Model {
  /**
   * @remarks
   * The time when the approval template was created.
   * 
   * @example
   * 2024-03-15 14:44:07
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the approval template.
   * 
   * @example
   * 这是一个模板
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the template is maintained by Alibaba Cloud.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The policy type that the template applies to. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist.
   * 
   * - **DomainWhitelist**: Domain whitelist.
   * 
   * - **SoftwareBlock**: Software disable.
   * 
   * - **AppUninstall**: Application uninstall.
   * 
   * - **DlpSend**: File transfer.
   * 
   * - **PeripheralBlock**: Peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The content of the approval template.
   * 
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The name of the approval template.
   * 
   * @example
   * 测试
   */
  schemaName?: string;
  /**
   * @remarks
   * The version of the approval template.
   * 
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
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  /**
   * @remarks
   * A list of approval templates.
   */
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
  /**
   * @remarks
   * A list of approval processes.
   */
  processes?: ListApprovalSchemasForApprovalProcessesResponseBodyProcesses[];
  /**
   * @remarks
   * The ID of this request.
   * 
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

