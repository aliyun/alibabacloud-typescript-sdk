// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRowPermissionRequestUpdateRowPermissionCommandMappingColumns extends $dara.Model {
  /**
   * @remarks
   * The mapping column description.
   * 
   * @example
   * Business ID.
   */
  columnDesc?: string;
  /**
   * @remarks
   * The mapping column name.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @remarks
   * The mapping column type.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  columnType?: string;
  static names(): { [key: string]: string } {
    return {
      columnDesc: 'ColumnDesc',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDesc: 'string',
      columnName: 'string',
      columnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommandRulesExpressions extends $dara.Model {
  /**
   * @remarks
   * The mapping column name.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
   * @remarks
   * The expression operator.
   * 
   * This parameter is required.
   * 
   * @example
   * OR
   */
  operator?: string;
  /**
   * @remarks
   * The sub-expressions.
   * 
   * This parameter is required.
   */
  subConditions?: any[];
  /**
   * @remarks
   * The expression type.
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESSION
   */
  type?: string;
  /**
   * @remarks
   * The expression operation values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      mappingColumnName: 'MappingColumnName',
      operator: 'Operator',
      subConditions: 'SubConditions',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingColumnName: 'string',
      operator: 'string',
      subConditions: { 'type': 'array', 'itemType': 'any' },
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subConditions)) {
      $dara.Model.validateArray(this.subConditions);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingListAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the account bound to the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingList extends $dara.Model {
  /**
   * @remarks
   * The type of the account bound to the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * PERSONAL
   */
  accountType?: string;
  /**
   * @remarks
   * The accounts bound to the rule.
   * 
   * This parameter is required.
   */
  accounts?: UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingListAccounts[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accounts: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingListAccounts },
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommandRules extends $dara.Model {
  /**
   * @remarks
   * The rule expressions.
   * 
   * This parameter is required.
   */
  expressions?: UpdateRowPermissionRequestUpdateRowPermissionCommandRulesExpressions[];
  /**
   * @remarks
   * Specifies whether to delete the rule.
   * 
   * @example
   * 0
   */
  isDelete?: boolean;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * Control business ID greater than 100
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule scope type.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT_COLUMN
   */
  scopeType?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The accounts bound to the rule.
   */
  userMappingList?: UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingList[];
  static names(): { [key: string]: string } {
    return {
      expressions: 'Expressions',
      isDelete: 'IsDelete',
      ruleName: 'RuleName',
      scopeType: 'ScopeType',
      status: 'Status',
      userMappingList: 'UserMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressions: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandRulesExpressions },
      isDelete: 'boolean',
      ruleName: 'string',
      scopeType: 'string',
      status: 'number',
      userMappingList: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandRulesUserMappingList },
    };
  }

  validate() {
    if(Array.isArray(this.expressions)) {
      $dara.Model.validateArray(this.expressions);
    }
    if(Array.isArray(this.userMappingList)) {
      $dara.Model.validateArray(this.userMappingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommandTables extends $dara.Model {
  /**
   * @remarks
   * The table column.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @remarks
   * The mapping column name.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
   * @remarks
   * The GUID of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.300199897.project_name.table_name
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      mappingColumnName: 'MappingColumnName',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      mappingColumnName: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequestUpdateRowPermissionCommand extends $dara.Model {
  /**
   * @remarks
   * The mapping columns.
   * 
   * This parameter is required.
   */
  mappingColumns?: UpdateRowPermissionRequestUpdateRowPermissionCommandMappingColumns[];
  /**
   * @remarks
   * The row-level permission description.
   * 
   * @example
   * Control business data.
   */
  rowPermissionDesc?: string;
  /**
   * @remarks
   * The row-level permission ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30009999
   */
  rowPermissionId?: number;
  /**
   * @remarks
   * The row-level permission name.
   * 
   * This parameter is required.
   * 
   * @example
   * BusinessControl.
   */
  rowPermissionName?: string;
  /**
   * @remarks
   * The rules.
   */
  rules?: UpdateRowPermissionRequestUpdateRowPermissionCommandRules[];
  /**
   * @remarks
   * The related tables.
   */
  tables?: UpdateRowPermissionRequestUpdateRowPermissionCommandTables[];
  static names(): { [key: string]: string } {
    return {
      mappingColumns: 'MappingColumns',
      rowPermissionDesc: 'RowPermissionDesc',
      rowPermissionId: 'RowPermissionId',
      rowPermissionName: 'RowPermissionName',
      rules: 'Rules',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingColumns: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandMappingColumns },
      rowPermissionDesc: 'string',
      rowPermissionId: 'number',
      rowPermissionName: 'string',
      rules: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandRules },
      tables: { 'type': 'array', 'itemType': UpdateRowPermissionRequestUpdateRowPermissionCommandTables },
    };
  }

  validate() {
    if(Array.isArray(this.mappingColumns)) {
      $dara.Model.validateArray(this.mappingColumns);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRowPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  updateRowPermissionCommand?: UpdateRowPermissionRequestUpdateRowPermissionCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateRowPermissionCommand: 'UpdateRowPermissionCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateRowPermissionCommand: UpdateRowPermissionRequestUpdateRowPermissionCommand,
    };
  }

  validate() {
    if(this.updateRowPermissionCommand && typeof (this.updateRowPermissionCommand as any).validate === 'function') {
      (this.updateRowPermissionCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

