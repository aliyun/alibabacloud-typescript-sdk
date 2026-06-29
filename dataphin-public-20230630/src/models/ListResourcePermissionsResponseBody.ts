// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionsResponseBodyPageResultDataPeriod extends $dara.Model {
  /**
   * @remarks
   * Expiration time.
   * 
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @remarks
   * Validity period type. Custom: CUSTOM. Long-term: LONG_TERM.
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

export class ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod extends $dara.Model {
  /**
   * @remarks
   * Expiration time.
   * 
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @remarks
   * Validity period type. Custom: CUSTOM. Long-term: LONG_TERM.
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

export class ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList extends $dara.Model {
  /**
   * @remarks
   * Validity period settings.
   */
  period?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod;
  /**
   * @remarks
   * Permission type.
   * 
   * @example
   * SELECT
   */
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod,
      permissionType: 'string',
    };
  }

  validate() {
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo extends $dara.Model {
  /**
   * @remarks
   * Display name.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * Environment identifier. Development: DEV. Production: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * ID.
   * 
   * @example
   * 121323
   */
  id?: string;
  /**
   * @remarks
   * Name.
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

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo extends $dara.Model {
  /**
   * @remarks
   * Display name.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * Environment identifier. Development: DEV. Production: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 1123131
   */
  id?: number;
  /**
   * @remarks
   * Name.
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

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfo extends $dara.Model {
  /**
   * @remarks
   * Business unit.
   */
  bizUnitInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo;
  /**
   * @remarks
   * Resource display name.
   * 
   * @example
   * tb1
   */
  displayName?: string;
  /**
   * @remarks
   * Resource environment type. Development: DEV. Production: PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Permission resource ID.
   * 
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @remarks
   * Permission resource name.
   * 
   * @example
   * tb1
   */
  name?: string;
  /**
   * @remarks
   * Project.
   */
  projectInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
   * @remarks
   * Resource type. Valid values: PHYSICAL_TABLE, PHYSICAL_VIEW, LOGICAL_TABLE, LOGICAL_VIEW, REALTIME_LOGICAL_TABLE, REALTIME_MIRROR_TABLE, and DATASOURCE.
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
      bizUnitInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo,
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
      projectInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo,
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

export class ListResourcePermissionsResponseBodyPageResultDataTargetAccount extends $dara.Model {
  /**
   * @remarks
   * Personal account: the userId on the Dataphin side. Production account: the UserId obtained by calling the GetProjectProduceUser operation. User group: the user group ID obtained by calling the ListUserGroup operation.
   * 
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @remarks
   * Personal account: the userId on the Dataphin side. Production account: the UserId obtained by calling the GetProjectProduceUser operation. User group: the user group ID obtained by calling the ListUserGroup operation.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * Authorization account type. Valid values: PERSONAL (personal account), PRODUCE (production account), and USER_GROUP (user group).
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

export class ListResourcePermissionsResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * Authorization scope of the table. Specified table: selectTable. All tables in the project: projectAllTable. All logical tables in the business unit: bizUnitAllLogicTable.
   * 
   * @example
   * selectTable
   */
  authScope?: string;
  /**
   * @remarks
   * Validity period settings.
   */
  period?: ListResourcePermissionsResponseBodyPageResultDataPeriod;
  /**
   * @remarks
   * List of validity periods for different permission types.
   */
  permissionPeriodList?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList[];
  /**
   * @remarks
   * Record ID.
   * 
   * @example
   * 12123111
   */
  recordId?: string;
  /**
   * @remarks
   * Permission resource.
   */
  resourceInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfo;
  /**
   * @remarks
   * Authorized object.
   */
  targetAccount?: ListResourcePermissionsResponseBodyPageResultDataTargetAccount;
  static names(): { [key: string]: string } {
    return {
      authScope: 'AuthScope',
      period: 'Period',
      permissionPeriodList: 'PermissionPeriodList',
      recordId: 'RecordId',
      resourceInfo: 'ResourceInfo',
      targetAccount: 'TargetAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authScope: 'string',
      period: ListResourcePermissionsResponseBodyPageResultDataPeriod,
      permissionPeriodList: { 'type': 'array', 'itemType': ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList },
      recordId: 'string',
      resourceInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfo,
      targetAccount: ListResourcePermissionsResponseBodyPageResultDataTargetAccount,
    };
  }

  validate() {
    if(this.period && typeof (this.period as any).validate === 'function') {
      (this.period as any).validate();
    }
    if(Array.isArray(this.permissionPeriodList)) {
      $dara.Model.validateArray(this.permissionPeriodList);
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

export class ListResourcePermissionsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * Paginated list.
   */
  data?: ListResourcePermissionsResponseBodyPageResultData[];
  /**
   * @remarks
   * Total number of records.
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
      data: { 'type': 'array', 'itemType': ListResourcePermissionsResponseBodyPageResultData },
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

export class ListResourcePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. OK indicates a normal request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
   */
  pageResult?: ListResourcePermissionsResponseBodyPageResult;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request is successful.
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
      pageResult: ListResourcePermissionsResponseBodyPageResult,
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

