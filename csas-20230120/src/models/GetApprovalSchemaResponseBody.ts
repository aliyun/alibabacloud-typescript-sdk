// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalSchemaResponseBodySchema extends $dara.Model {
  /**
   * @remarks
   * The time when the approval template was created.
   * 
   * @example
   * 2022-02-14 11:57:51
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
   * Indicates whether the template is an official template.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **DomainBlacklist**: Domain name blacklist.
   * 
   * - **DomainWhitelist**: Domain name whitelist.
   * 
   * - **SoftwareBlock**: Software blocking.
   * 
   * - **AppUninstall**: Application uninstallation.
   * 
   * - **DlpSend**: Outbound file transfer.
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

export class GetApprovalSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  /**
   * @remarks
   * The approval template.
   */
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

