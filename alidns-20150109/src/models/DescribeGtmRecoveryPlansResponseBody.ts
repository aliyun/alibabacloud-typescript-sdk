// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan extends $dara.Model {
  createTime?: string;
  createTimestamp?: number;
  faultAddrPoolNum?: number;
  lastExecuteTime?: string;
  lastExecuteTimestamp?: number;
  lastRollbackTime?: string;
  lastRollbackTimestamp?: number;
  name?: string;
  recoveryPlanId?: number;
  remark?: string;
  status?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      lastExecuteTime: 'LastExecuteTime',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      lastRollbackTime: 'LastRollbackTime',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      faultAddrPoolNum: 'number',
      lastExecuteTime: 'string',
      lastExecuteTimestamp: 'number',
      lastRollbackTime: 'string',
      lastRollbackTimestamp: 'number',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlans extends $dara.Model {
  recoveryPlan?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan[];
  static names(): { [key: string]: string } {
    return {
      recoveryPlan: 'RecoveryPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlan: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan },
    };
  }

  validate() {
    if(Array.isArray(this.recoveryPlan)) {
      $dara.Model.validateArray(this.recoveryPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  recoveryPlans?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2BA072CF-CA21-4A34-B6C2-227BE2C58079
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlans: 'RecoveryPlans',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlans: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.recoveryPlans && typeof (this.recoveryPlans as any).validate === 'function') {
      (this.recoveryPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

