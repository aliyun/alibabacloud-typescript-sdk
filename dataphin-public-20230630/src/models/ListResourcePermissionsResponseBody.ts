// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionsResponseBodyPageResultDataPeriod extends $dara.Model {
  /**
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
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
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
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
  period?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod;
  /**
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
   * @example
   * xx
   */
  displayName?: string;
  /**
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
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1123131
   */
  id?: number;
  /**
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
  bizUnitInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo;
  /**
   * @example
   * tb1
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @example
   * tb1
   */
  name?: string;
  projectInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
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
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
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
   * @example
   * selectTable
   */
  authScope?: string;
  period?: ListResourcePermissionsResponseBodyPageResultDataPeriod;
  permissionPeriodList?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList[];
  /**
   * @example
   * 12123111
   */
  recordId?: string;
  resourceInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfo;
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
  data?: ListResourcePermissionsResponseBodyPageResultData[];
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
  pageResult?: ListResourcePermissionsResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

