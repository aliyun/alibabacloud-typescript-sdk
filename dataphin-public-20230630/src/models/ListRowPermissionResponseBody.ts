// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionResponseBodyPageResultDataMappingColumns extends $dara.Model {
  columnDesc?: string;
  /**
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @example
   * string
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

export class ListRowPermissionResponseBodyPageResultDataRulesExpressions extends $dara.Model {
  /**
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
   * @example
   * 30008888
   */
  operator?: string;
  subConditions?: any[];
  /**
   * @example
   * EXPRESSION
   */
  type?: string;
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

export class ListRowPermissionResponseBodyPageResultDataRulesUserMappingListAccounts extends $dara.Model {
  /**
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

export class ListRowPermissionResponseBodyPageResultDataRulesUserMappingList extends $dara.Model {
  /**
   * @example
   * PERSONAL
   */
  accountType?: string;
  accounts?: ListRowPermissionResponseBodyPageResultDataRulesUserMappingListAccounts[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accounts: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataRulesUserMappingListAccounts },
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

export class ListRowPermissionResponseBodyPageResultDataRules extends $dara.Model {
  expressions?: ListRowPermissionResponseBodyPageResultDataRulesExpressions[];
  isDelete?: boolean;
  ruleName?: string;
  /**
   * @example
   * SELECT_COLUMN
   */
  scopeType?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  userMappingList?: ListRowPermissionResponseBodyPageResultDataRulesUserMappingList[];
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
      expressions: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataRulesExpressions },
      isDelete: 'boolean',
      ruleName: 'string',
      scopeType: 'string',
      status: 'number',
      userMappingList: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataRulesUserMappingList },
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

export class ListRowPermissionResponseBodyPageResultDataTables extends $dara.Model {
  /**
   * @example
   * business_id
   */
  columnName?: string;
  /**
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
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

export class ListRowPermissionResponseBodyPageResultData extends $dara.Model {
  /**
   * @example
   * 30008888
   */
  creator?: string;
  /**
   * @example
   * 2023-08-23T08:01:44Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-02-12T02:16:45Z
   */
  gmtModified?: string;
  mappingColumns?: ListRowPermissionResponseBodyPageResultDataMappingColumns[];
  /**
   * @example
   * 30008888
   */
  modifier?: string;
  rowPermissionDesc?: string;
  /**
   * @example
   * 30008888
   */
  rowPermissionId?: number;
  rowPermissionName?: string;
  rules?: ListRowPermissionResponseBodyPageResultDataRules[];
  tables?: ListRowPermissionResponseBodyPageResultDataTables[];
  /**
   * @example
   * 30000001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mappingColumns: 'MappingColumns',
      modifier: 'Modifier',
      rowPermissionDesc: 'RowPermissionDesc',
      rowPermissionId: 'RowPermissionId',
      rowPermissionName: 'RowPermissionName',
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
      mappingColumns: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataMappingColumns },
      modifier: 'string',
      rowPermissionDesc: 'string',
      rowPermissionId: 'number',
      rowPermissionName: 'string',
      rules: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataRules },
      tables: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultDataTables },
      tenantId: 'number',
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

export class ListRowPermissionResponseBodyPageResult extends $dara.Model {
  data?: ListRowPermissionResponseBodyPageResultData[];
  /**
   * @example
   * 10
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
      data: { 'type': 'array', 'itemType': ListRowPermissionResponseBodyPageResultData },
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

export class ListRowPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListRowPermissionResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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
      pageResult: ListRowPermissionResponseBodyPageResult,
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

