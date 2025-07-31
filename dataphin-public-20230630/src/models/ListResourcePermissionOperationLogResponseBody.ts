// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionOperationLogResponseBodyPageResultDataAccount extends $dara.Model {
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

export class ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod extends $dara.Model {
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

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo extends $dara.Model {
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

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo extends $dara.Model {
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

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo extends $dara.Model {
  bizUnitInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo;
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
  projectInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo;
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

export class ListResourcePermissionOperationLogResponseBodyPageResultData extends $dara.Model {
  account?: ListResourcePermissionOperationLogResponseBodyPageResultDataAccount;
  /**
   * @example
   * selectTable
   */
  authScope?: string;
  /**
   * @example
   * 123133
   */
  operateId?: number;
  /**
   * @example
   * 1710012121000
   */
  operateTime?: number;
  /**
   * @example
   * APPLY
   */
  operateType?: string;
  period?: ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod;
  /**
   * @example
   * xx测试
   */
  reason?: string;
  resourceInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo;
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
  data?: ListResourcePermissionOperationLogResponseBodyPageResultData[];
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
  pageResult?: ListResourcePermissionOperationLogResponseBodyPageResult;
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

