// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule } from "./ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule";
import { ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList } from "./ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList";


export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn extends $dara.Model {
  categoryName?: string;
  /**
   * @example
   * test_column
   */
  columnName?: string;
  defaultDesensitizationRule?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule;
  /**
   * @example
   * 183****
   */
  instanceId?: number;
  /**
   * @example
   * False
   */
  isPlain?: boolean;
  sampleData?: string;
  /**
   * @example
   * test_schema
   */
  schemaName?: string;
  securityLevel?: string;
  semiDesensitizationRuleList?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * S1
   */
  userSensitivityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      columnName: 'ColumnName',
      defaultDesensitizationRule: 'DefaultDesensitizationRule',
      instanceId: 'InstanceId',
      isPlain: 'IsPlain',
      sampleData: 'SampleData',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      semiDesensitizationRuleList: 'SemiDesensitizationRuleList',
      tableName: 'TableName',
      userSensitivityLevel: 'UserSensitivityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      columnName: 'string',
      defaultDesensitizationRule: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule,
      instanceId: 'number',
      isPlain: 'boolean',
      sampleData: 'string',
      schemaName: 'string',
      securityLevel: 'string',
      semiDesensitizationRuleList: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList,
      tableName: 'string',
      userSensitivityLevel: 'string',
    };
  }

  validate() {
    if(this.defaultDesensitizationRule && typeof (this.defaultDesensitizationRule as any).validate === 'function') {
      (this.defaultDesensitizationRule as any).validate();
    }
    if(this.semiDesensitizationRuleList && typeof (this.semiDesensitizationRuleList as any).validate === 'function') {
      (this.semiDesensitizationRuleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

