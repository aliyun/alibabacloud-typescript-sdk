// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions extends $dara.Model {
  /**
   * @remarks
   * The mapping field name.
   * 
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
   * @remarks
   * The expression operator.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The sub-expressions.
   */
  subConditions?: any[];
  /**
   * @remarks
   * The expression type.
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingListAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the account bound to the rule.
   * 
   * @example
   * 30008888
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingList extends $dara.Model {
  /**
   * @remarks
   * The type of the account bound to the rule.
   * 
   * @example
   * PERSONAL
   */
  accountType?: string;
  /**
   * @remarks
   * The accounts bound to the rule.
   */
  accounts?: ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingListAccounts[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accounts: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingListAccounts },
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataRules extends $dara.Model {
  /**
   * @remarks
   * The rule expressions.
   */
  expressions?: ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the rule is deleted.
   * 
   * @example
   * 0
   */
  isDelete?: boolean;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 业务管控
   */
  ruleName?: string;
  /**
   * @remarks
   * The scope type of the rule.
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
  userMappingList?: ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingList[];
  static names(): { [key: string]: string } {
    return {
      expressions: 'Expressions',
      id: 'Id',
      isDelete: 'IsDelete',
      ruleName: 'RuleName',
      scopeType: 'ScopeType',
      status: 'Status',
      userMappingList: 'UserMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressions: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions },
      id: 'number',
      isDelete: 'boolean',
      ruleName: 'string',
      scopeType: 'string',
      status: 'number',
      userMappingList: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingList },
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataTables extends $dara.Model {
  /**
   * @remarks
   * The table field.
   * 
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @remarks
   * The mapping field name.
   * 
   * @example
   * 拦截规则
   */
  mappingColumnName?: string;
  /**
   * @remarks
   * The table GUID.
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

export class ListRowPermissionByUserIdResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30008888
   */
  creator?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-03-30T21:37:23Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-03-03T10:14Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * 30008888
   */
  modifier?: string;
  /**
   * @remarks
   * The rules.
   */
  rules?: ListRowPermissionByUserIdResponseBodyPageResultDataRules[];
  /**
   * @remarks
   * The related tables.
   */
  tables?: ListRowPermissionByUserIdResponseBodyPageResultDataTables[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30000001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifier: 'Modifier',
      rules: 'Rules',
      tables: 'Tables',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      rules: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataRules },
      tables: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataTables },
      tenantId: 'number',
    };
  }

  validate() {
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

export class ListRowPermissionByUserIdResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  data?: ListRowPermissionByUserIdResponseBodyPageResultData[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRowPermissionByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListRowPermissionByUserIdResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListRowPermissionByUserIdResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

