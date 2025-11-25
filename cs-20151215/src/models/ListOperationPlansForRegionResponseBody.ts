// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationPlansForRegionResponseBodyPlansStateReason extends $dara.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansForRegionResponseBodyPlans extends $dara.Model {
  /**
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  clusterId?: string;
  /**
   * @example
   * 2023-11-21T20:01:22+08:00
   */
  created?: string;
  /**
   * @example
   * 2023-11-22T18:00:00+08:00
   */
  endTime?: string;
  /**
   * @example
   * P-655c9c127e0e6603ef00****
   */
  planId?: string;
  /**
   * @example
   * 2023-11-22T15:18:00+08:00
   */
  startTime?: string;
  /**
   * @example
   * Scheduled
   */
  state?: string;
  stateReason?: ListOperationPlansForRegionResponseBodyPlansStateReason;
  /**
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  targetId?: string;
  /**
   * @example
   * cluster
   */
  targetType?: string;
  /**
   * @example
   * T-681ac448b23ced010600****
   */
  taskId?: string;
  /**
   * @example
   * CLUSTER_UPGRADE_MASTER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      endTime: 'end_time',
      planId: 'plan_id',
      startTime: 'start_time',
      state: 'state',
      stateReason: 'state_reason',
      targetId: 'target_id',
      targetType: 'target_type',
      taskId: 'task_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      endTime: 'string',
      planId: 'string',
      startTime: 'string',
      state: 'string',
      stateReason: ListOperationPlansForRegionResponseBodyPlansStateReason,
      targetId: 'string',
      targetType: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.stateReason && typeof (this.stateReason as any).validate === 'function') {
      (this.stateReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationPlansForRegionResponseBody extends $dara.Model {
  plans?: ListOperationPlansForRegionResponseBodyPlans[];
  static names(): { [key: string]: string } {
    return {
      plans: 'plans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListOperationPlansForRegionResponseBodyPlans },
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

