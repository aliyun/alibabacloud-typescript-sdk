// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionsResponseBodyPageResultDataPeriod extends $dara.Model {
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
   * The validity period type.
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
   * The expiration time.
   * 
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @remarks
   * The validity period type.
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
   * The validity period settings.
   */
  period?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod;
  /**
   * @remarks
   * The permission type.
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
   * The display name.
   * 
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development.
   * - PROD: production.
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

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo extends $dara.Model {
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
   * - DEV: development.
   * - PROD: production.
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

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit.
   */
  bizUnitInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo;
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
   * The resource environment type. Valid values:
   * - DEV: development.
   * - PROD: production.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the permission resource.
   * 
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @remarks
   * The name of the permission resource.
   * 
   * @example
   * tb1
   */
  name?: string;
  /**
   * @remarks
   * The project.
   */
  projectInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
   * @remarks
   * The resource type. Valid values: PHYSICAL_TABLE, PHYSICAL_VIEW, LOGICAL_TABLE, LOGICAL_VIEW, REALTIME_LOGICAL_TABLE, REALTIME_MIRROR_TABLE, DATASOURCE.
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
   * The account ID. For an individual account, this is the Dataphin-side userId. For a production account, this is the UserId obtained by calling the GetProjectProduceUser operation. For a user group, this is the user group ID obtained by calling the ListUserGroup operation.
   * 
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @remarks
   * The account ID. For an individual account, this is the Dataphin-side userId. For a production account, this is the UserId obtained by calling the GetProjectProduceUser operation. For a user group, this is the user group ID obtained by calling the ListUserGroup operation.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The type of the authorized account. Valid values:
   * - PERSONAL: individual account.
   * - PRODUCE: production account.
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

export class ListResourcePermissionsResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The authorization scope of the table. Valid values:
   * - selectTable: a specified table.
   * - projectAllTable: all tables in the project.
   * - bizUnitAllLogicTable: all logical tables in the business unit.
   * 
   * @example
   * selectTable
   */
  authScope?: string;
  /**
   * @remarks
   * The validity period settings.
   */
  period?: ListResourcePermissionsResponseBodyPageResultDataPeriod;
  /**
   * @remarks
   * The list of validity periods for different permission types.
   */
  permissionPeriodList?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList[];
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 12123111
   */
  recordId?: string;
  /**
   * @remarks
   * The permission resource.
   */
  resourceInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfo;
  /**
   * @remarks
   * The authorized object.
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
   * The paged list.
   */
  data?: ListResourcePermissionsResponseBodyPageResultData[];
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
   * The error message returned for the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListResourcePermissionsResponseBodyPageResult;
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

