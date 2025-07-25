// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan extends $dara.Model {
  /**
   * @remarks
   * The time when the disaster recovery plan was created.
   * 
   * @example
   * 2019-08-11T06:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the disaster recovery plan was created.
   * 
   * @example
   * 1565499867000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of faulty address pools.
   * 
   * @example
   * 0
   */
  faultAddrPoolNum?: number;
  /**
   * @remarks
   * The last time when the disaster recovery plan was executed.
   * 
   * @example
   * 2019-08-11T06:44Z
   */
  lastExecuteTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates the last time when the disaster recovery plan was executed.
   * 
   * @example
   * 1565505898000
   */
  lastExecuteTimestamp?: number;
  /**
   * @remarks
   * The last time when the disaster recovery plan was rolled back.
   * 
   * @example
   * 2019-08-11T06:45Z
   */
  lastRollbackTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates the last time when the disaster recovery plan was rolled back.
   * 
   * @example
   * 1565505919000
   */
  lastRollbackTimestamp?: number;
  /**
   * @remarks
   * The name of the disaster recovery plan.
   * 
   * @example
   * name-example
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan.
   * 
   * @example
   * 55
   */
  recoveryPlanId?: number;
  /**
   * @remarks
   * The remarks about the disaster recovery plan.
   * 
   * @example
   * remark-example
   */
  remark?: string;
  /**
   * @remarks
   * The status of the disaster recovery plan. Valid values:
   * 
   * *   **UNEXECUTED**: The plan is not executed.
   * *   **EXECUTED**: The plan is executed.
   * *   **ROLLED_BACK**: The plan is rolled back.
   * 
   * @example
   * UNEXECUTED
   */
  status?: string;
  /**
   * @remarks
   * The last time when the disaster recovery plan was updated.
   * 
   * @example
   * 2019-08-11T06:45Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates the last time when the disaster recovery plan was updated.
   * 
   * @example
   * 1565505919000
   */
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
  /**
   * @remarks
   * The details about the queried disaster recovery plans.
   */
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

