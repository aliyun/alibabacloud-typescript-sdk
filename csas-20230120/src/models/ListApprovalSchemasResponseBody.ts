// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasResponseBodySchemas extends $dara.Model {
  /**
   * @remarks
   * The creation time of the approval template.
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
   * Indicates if it is an officially maintained template.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist.
   * 
   * - **DomainWhitelist**: Domain whitelist.
   * 
   * - **SoftwareBlock**: Software disable.
   * 
   * - **AppUninstall**: Terminal uninstall.
   * 
   * - **DlpSend**: File outbound.
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
   * The approval template ID.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The approval template name.
   * 
   * @example
   * 测试
   */
  schemaName?: string;
  /**
   * @remarks
   * The approval template version.
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

export class ListApprovalSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @remarks
   * The list of approval templates.
   */
  schemas?: ListApprovalSchemasResponseBodySchemas[];
  /**
   * @remarks
   * The total number of approval templates.
   * 
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

