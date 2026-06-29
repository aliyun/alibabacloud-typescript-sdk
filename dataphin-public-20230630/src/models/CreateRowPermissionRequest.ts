// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRowPermissionRequestCreateRowPermissionCommandMappingColumns extends $dara.Model {
  /**
   * @remarks
   * The description of the mapping column.
   * 
   * @example
   * 控制业务ID字段
   */
  columnDesc?: string;
  /**
   * @remarks
   * The name of the mapping column.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @remarks
   * The type of the mapping column.
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

export class CreateRowPermissionRequestCreateRowPermissionCommandRulesExpressions extends $dara.Model {
  /**
   * @remarks
   * The name of the mapping column.
   * 
   * This parameter is required.
   * 
   * @example
   * id
   */
  mappingColumnName?: string;
  /**
   * @remarks
   * The operator of the expression.
   * 
   * This parameter is required.
   * 
   * @example
   * EQUAL
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
   * The type of the expression.
   * 
   * This parameter is required.
   * 
   * @example
   * RELATION
   */
  type?: string;
  /**
   * @remarks
   * The expression operation values.
   * 
   * This parameter is required.
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

export class CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingListAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the account bound to the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 300001111
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

export class CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingList extends $dara.Model {
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
   * 
   * @example
   * PERSONAL
   */
  accounts?: CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingListAccounts[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accounts: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingListAccounts },
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

export class CreateRowPermissionRequestCreateRowPermissionCommandRules extends $dara.Model {
  /**
   * @remarks
   * The rule expressions.
   * 
   * This parameter is required.
   */
  expressions?: CreateRowPermissionRequestCreateRowPermissionCommandRulesExpressions[];
  /**
   * @remarks
   * Specifies whether to delete the rule.
   * 
   * @example
   * 1
   */
  isDelete?: boolean;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 中台
   */
  ruleName?: string;
  /**
   * @remarks
   * The scope type of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT_COLUMN
   */
  scopeType?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The accounts bound to the rule.
   */
  userMappingList?: CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingList[];
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
      expressions: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandRulesExpressions },
      isDelete: 'boolean',
      ruleName: 'string',
      scopeType: 'string',
      status: 'number',
      userMappingList: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandRulesUserMappingList },
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

export class CreateRowPermissionRequestCreateRowPermissionCommandTables extends $dara.Model {
  /**
   * @remarks
   * The column of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @remarks
   * The name of the mapping column.
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

export class CreateRowPermissionRequestCreateRowPermissionCommand extends $dara.Model {
  /**
   * @remarks
   * The mapping columns.
   * 
   * This parameter is required.
   */
  mappingColumns?: CreateRowPermissionRequestCreateRowPermissionCommandMappingColumns[];
  /**
   * @remarks
   * The description of the row-level permission.
   * 
   * @example
   * 管控业务数据
   */
  rowPermissionDesc?: string;
  /**
   * @remarks
   * The name of the row-level permission.
   * 
   * This parameter is required.
   * 
   * @example
   * 业务管控
   */
  rowPermissionName?: string;
  /**
   * @remarks
   * The rules.
   */
  rules?: CreateRowPermissionRequestCreateRowPermissionCommandRules[];
  /**
   * @remarks
   * The related tables.
   */
  tables?: CreateRowPermissionRequestCreateRowPermissionCommandTables[];
  static names(): { [key: string]: string } {
    return {
      mappingColumns: 'MappingColumns',
      rowPermissionDesc: 'RowPermissionDesc',
      rowPermissionName: 'RowPermissionName',
      rules: 'Rules',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingColumns: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandMappingColumns },
      rowPermissionDesc: 'string',
      rowPermissionName: 'string',
      rules: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandRules },
      tables: { 'type': 'array', 'itemType': CreateRowPermissionRequestCreateRowPermissionCommandTables },
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

export class CreateRowPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Request command.
   * 
   * This parameter is required.
   */
  createRowPermissionCommand?: CreateRowPermissionRequestCreateRowPermissionCommand;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createRowPermissionCommand: 'CreateRowPermissionCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRowPermissionCommand: CreateRowPermissionRequestCreateRowPermissionCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createRowPermissionCommand && typeof (this.createRowPermissionCommand as any).validate === 'function') {
      (this.createRowPermissionCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

