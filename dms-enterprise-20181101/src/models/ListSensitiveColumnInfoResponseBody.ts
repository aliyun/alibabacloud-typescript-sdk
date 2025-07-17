// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule extends $dara.Model {
  /**
   * @example
   * 101**
   */
  ruleId?: number;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule extends $dara.Model {
  /**
   * @example
   * 10***
   */
  ruleId?: number;
  /**
   * @example
   * test01
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList extends $dara.Model {
  semiDesensitizationRule?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule[];
  static names(): { [key: string]: string } {
    return {
      semiDesensitizationRule: 'SemiDesensitizationRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      semiDesensitizationRule: { 'type': 'array', 'itemType': ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule },
    };
  }

  validate() {
    if(Array.isArray(this.semiDesensitizationRule)) {
      $dara.Model.validateArray(this.semiDesensitizationRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListSensitiveColumnInfoResponseBodySensitiveColumnList extends $dara.Model {
  sensitiveColumn?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumn: 'SensitiveColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumn: { 'type': 'array', 'itemType': ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumn },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveColumn)) {
      $dara.Model.validateArray(this.sensitiveColumn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveColumnInfoResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  sensitiveColumnList?: ListSensitiveColumnInfoResponseBodySensitiveColumnList;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnList: 'SensitiveColumnList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnList: ListSensitiveColumnInfoResponseBodySensitiveColumnList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sensitiveColumnList && typeof (this.sensitiveColumnList as any).validate === 'function') {
      (this.sensitiveColumnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

