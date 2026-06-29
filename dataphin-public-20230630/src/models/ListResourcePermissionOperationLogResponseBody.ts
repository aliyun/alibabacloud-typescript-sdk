// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionOperationLogResponseBodyPageResultDataAccount extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * - Individual account: the userId on the Dataphin side.
   * - Production account: the UserId obtained by calling the GetProjectProduceUser operation.
   * - User group: the user group ID obtained by calling the ListUserGroup operation.
   * 
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The authorization account type. Valid values:
   * - PERSONAL: individual account
   * - PRODUCE: production account
   * - USER_GROUP: user group.
   * 
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @remarks
   * The validity period type. Valid values:
   * - CUSTOM: custom
   * - LONG_TERM: permanently valid
   * - DAYS_30: valid for 30 days
   * - DAYS_90: valid for 90 days
   * - DAYS_180: valid for 180 days.
   * 
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier. Valid values: 
   * - DEV
   * - PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 121323
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier. Valid values: 
   * - DEV
   * - PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1123131
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit information.
   */
  bizUnitInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo;
  /**
   * @remarks
   * The display name of the resource.
   * 
   * @example
   * tb1
   */
  displayName?: string;
  /**
   * @remarks
   * The resource environment. Valid values:
   * - DEV
   * - PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The permission resource ID.
   * 
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @remarks
   * The permission resource name.
   * 
   * @example
   * tb1
   */
  name?: string;
  /**
   * @remarks
   * The project information.
   */
  projectInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
   * @remarks
   * The resource type. Valid values:
   * - PHYSICAL_TABLE: physical table
   * - PHYSICAL_VIEW: physical view
   * - LOGICAL_TABLE: fact logical table
   * - LOGICAL_VIEW: fact logical view
   * - REALTIME_LOGICAL_TABLE: real-time meta table
   * - REALTIME_MIRROR_TABLE: real-time meta table
   * - DATASOURCE: datasource.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitInfo: 'BizUnitInfo',
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
      projectInfo: 'ProjectInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo,
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
      projectInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo,
      type: 'string',
    };
  }

  validate() {
    if(this.bizUnitInfo && typeof (this.bizUnitInfo as any).validate === 'function') {
      (this.bizUnitInfo as any).validate();
    }
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The authorized account type.
   * 
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The operator.
   */
  account?: ListResourcePermissionOperationLogResponseBodyPageResultDataAccount;
  /**
   * @remarks
   * The authorization scope of the table. Valid values:
   * - selectTable: specified table
   * - projectAllTable: all tables in the project
   * - bizUnitAllLogicTable: all logical tables in the business unit.
   * 
   * @example
   * selectTable
   */
  authScope?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 123133
   */
  operateId?: number;
  /**
   * @remarks
   * The operation time.
   * 
   * @example
   * 1710012121000
   */
  operateTime?: number;
  /**
   * @remarks
   * The operation type. Valid values:
   * - APPLY: Apply for permissions.
   * - GRANT: Grant permissions.
   * 
   * @example
   * APPLY
   */
  operateType?: string;
  /**
   * @remarks
   * The validity period settings.
   */
  period?: ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod;
  /**
   * @remarks
   * The reason.
   * 
   * @example
   * xx测试
   */
  reason?: string;
  /**
   * @remarks
   * The permission resource.
   */
  resourceInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo;
  /**
   * @remarks
   * The authorized object.
   */
  targetAccount?: ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      authScope: 'AuthScope',
      operateId: 'OperateId',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
      period: 'Period',
      reason: 'Reason',
      resourceInfo: 'ResourceInfo',
      targetAccount: 'TargetAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: ListResourcePermissionOperationLogResponseBodyPageResultDataAccount,
      authScope: 'string',
      operateId: 'number',
      operateTime: 'number',
      operateType: 'string',
      period: ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod,
      reason: 'string',
      resourceInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo,
      targetAccount: ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount,
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    if(this.resourceInfo && typeof (this.resourceInfo as any).validate === 'function') {
      (this.resourceInfo as any).validate();
    }
    if(this.targetAccount && typeof (this.targetAccount as any).validate === 'function') {
      (this.targetAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paginated records.
   */
  data?: ListResourcePermissionOperationLogResponseBodyPageResultData[];
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
      data: { 'type': 'array', 'itemType': ListResourcePermissionOperationLogResponseBodyPageResultData },
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

export class ListResourcePermissionOperationLogResponseBody extends $dara.Model {
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
   * The paging query result.
   */
  pageResult?: ListResourcePermissionOperationLogResponseBodyPageResult;
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
   * 
   * @example
   * true
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
      pageResult: ListResourcePermissionOperationLogResponseBodyPageResult,
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

