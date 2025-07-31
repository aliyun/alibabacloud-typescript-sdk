// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions extends $dara.Model {
  /**
   * @example
   * business_id
   */
  mappingColumnName?: string;
  /**
   * @example
   * EQUAL
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingListAccounts extends $dara.Model {
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

export class ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingList extends $dara.Model {
  /**
   * @example
   * PERSONAL
   */
  accountType?: string;
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
  expressions?: ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions[];
  /**
   * @example
   * 0
   */
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
  userMappingList?: ListRowPermissionByUserIdResponseBodyPageResultDataRulesUserMappingList[];
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
      expressions: { 'type': 'array', 'itemType': ListRowPermissionByUserIdResponseBodyPageResultDataRulesExpressions },
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
   * @example
   * business_id
   */
  columnName?: string;
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

export class ListRowPermissionByUserIdResponseBodyPageResultData extends $dara.Model {
  /**
   * @example
   * 30008888
   */
  creator?: string;
  /**
   * @example
   * 2023-03-30T21:37:23Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-03-03T10:14Z
   */
  gmtModified?: string;
  /**
   * @example
   * 30008888
   */
  modifier?: string;
  rules?: ListRowPermissionByUserIdResponseBodyPageResultDataRules[];
  tables?: ListRowPermissionByUserIdResponseBodyPageResultDataTables[];
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
  data?: ListRowPermissionByUserIdResponseBodyPageResultData[];
  /**
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
  pageResult?: ListRowPermissionByUserIdResponseBodyPageResult;
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

