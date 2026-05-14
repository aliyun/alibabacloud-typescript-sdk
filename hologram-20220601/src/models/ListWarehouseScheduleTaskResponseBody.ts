// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarehouseScheduleTaskResponseBodyScheduleTaskListPlans extends $dara.Model {
  /**
   * @example
   * bill stat
   */
  description?: string;
  /**
   * @example
   * 32
   */
  elasticCu?: number;
  /**
   * @example
   * 0400
   */
  endTime?: string;
  /**
   * @example
   * 1802985780260052993
   */
  id?: string;
  /**
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
   * @example
   * timed
   */
  elasticType?: string;
  plans?: ListWarehouseScheduleTaskResponseBodyScheduleTaskListPlans[];
  /**
   * @example
   * 32
   */
  reservedCpu?: number;
  /**
   * @example
   * kRunning
   */
  status?: string;
  /**
   * @example
   * 1
   */
  warehouseId?: string;
  /**
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
   * @example
   * A0A16C46-5B56-1F9B-AA37-4C3EAD95AAA8
   */
  requestId?: string;
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

