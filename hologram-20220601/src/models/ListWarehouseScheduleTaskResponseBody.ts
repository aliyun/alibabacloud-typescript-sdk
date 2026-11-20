// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleTaskResponseBodyScheduleTaskListPlans extends $dara.Model {
  /**
   * @remarks
   * The description of the elastic plan.
   * 
   * @example
   * bill stat
   */
  description?: string;
  /**
   * @remarks
   * The elastic resources. The value must be a multiple of 16, greater than or equal to 16, and less than or equal to the compute group specifications.
   * 
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @remarks
   * The end time. Only full hours and half hours are supported. The format is HHmm (four digits, 24-hour clock).
   * 
   * @example
   * 0400
   */
  endTime?: string;
  /**
   * @remarks
   * The elastic plan ID.
   * 
   * @example
   * 1802985780260052993
   */
  id?: string;
  /**
   * @remarks
   * The start time. Only full hours and half hours are supported, such as 0100 for 1:00 AM. The format is HHmm (four digits, 24-hour clock).
   * 
   * @example
   * 0100
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticCu: 'ElasticCu',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticCu: 'number',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehouseScheduleTaskResponseBodyScheduleTaskList extends $dara.Model {
  /**
   * @remarks
   * The elastic type.
   * 
   * @example
   * timed
   */
  elasticType?: string;
  /**
   * @remarks
   * The list of elastic plans for a single compute group.
   */
  plans?: ListWarehouseScheduleTaskResponseBodyScheduleTaskListPlans[];
  /**
   * @remarks
   * The reserved resources of the compute group.
   * 
   * @example
   * 32
   */
  reservedCpu?: number;
  /**
   * @remarks
   * The status of the compute group.
   * 
   * @example
   * kRunning
   */
  status?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * 1
   */
  warehouseId?: string;
  /**
   * @remarks
   * The compute group name.
   * 
   * @example
   * init_warehouse
   */
  warehouseName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticType: 'ElasticType',
      plans: 'Plans',
      reservedCpu: 'ReservedCpu',
      status: 'Status',
      warehouseId: 'WarehouseId',
      warehouseName: 'WarehouseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticType: 'string',
      plans: { 'type': 'array', 'itemType': ListWarehouseScheduleTaskResponseBodyScheduleTaskListPlans },
      reservedCpu: 'number',
      status: 'string',
      warehouseId: 'string',
      warehouseName: 'string',
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

export class ListWarehouseScheduleTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0A16C46-5B56-1F9B-AA37-4C3EAD95AAA8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of time-based elastic plans.
   */
  scheduleTaskList?: ListWarehouseScheduleTaskResponseBodyScheduleTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleTaskList: 'ScheduleTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleTaskList: { 'type': 'array', 'itemType': ListWarehouseScheduleTaskResponseBodyScheduleTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.scheduleTaskList)) {
      $dara.Model.validateArray(this.scheduleTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

