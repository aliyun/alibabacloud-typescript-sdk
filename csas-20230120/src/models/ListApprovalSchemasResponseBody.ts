// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalSchemasResponseBodySchemas extends $dara.Model {
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

