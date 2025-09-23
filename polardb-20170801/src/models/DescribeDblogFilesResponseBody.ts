// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLogFilesResponseBodyHaLogItems extends $dara.Model {
  affectedSessions?: number;
  fromDBType?: string;
  switchCauseCode?: string;
  switchCauseDetail?: string;
  switchFinishTime?: string;
  /**
   * @example
   * e571f897-9b3c-4012-9470-88333832dec4
   */
  switchId?: string;
  switchStartTime?: string;
  /**
   * @example
   * 0
   */
  switchType?: number;
  totalSessions?: number;
  static names(): { [key: string]: string } {
    return {
      affectedSessions: 'AffectedSessions',
      fromDBType: 'FromDBType',
      switchCauseCode: 'SwitchCauseCode',
      switchCauseDetail: 'SwitchCauseDetail',
      switchFinishTime: 'SwitchFinishTime',
      switchId: 'SwitchId',
      switchStartTime: 'SwitchStartTime',
      switchType: 'SwitchType',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedSessions: 'number',
      fromDBType: 'string',
      switchCauseCode: 'string',
      switchCauseDetail: 'string',
      switchFinishTime: 'string',
      switchId: 'string',
      switchStartTime: 'string',
      switchType: 'number',
      totalSessions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems extends $dara.Model {
  endTime?: string;
  isSuccess?: string;
  simulatePhase?: string;
  startTime?: string;
  stepName?: string;
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems extends $dara.Model {
  DBInstanceId?: string;
  dstDbType?: string;
  eventFinishTime?: string;
  eventStartTime?: string;
  simulateListId?: string;
  simulateLogId?: string;
  simulateStatus?: string;
  srcDbType?: string;
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dstDbType: 'DstDbType',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      simulateListId: 'SimulateListId',
      simulateLogId: 'SimulateLogId',
      simulateStatus: 'SimulateStatus',
      srcDbType: 'SrcDbType',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dstDbType: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      simulateListId: 'string',
      simulateLogId: 'string',
      simulateStatus: 'string',
      srcDbType: 'string',
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems extends $dara.Model {
  DBNodeId?: string;
  endTime?: string;
  isSuccess?: string;
  simulatePhase?: string;
  startTime?: string;
  stepName?: string;
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchListItems extends $dara.Model {
  DBNodeCrashList?: string[];
  endTime?: string;
  eventFinishTime?: string;
  eventStartTime?: string;
  faultInjectionType?: string;
  simulateListId?: string;
  simulateMode?: string;
  simulateStatus?: string;
  simulateTaskId?: string;
  startTime?: string;
  switchLogItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems[];
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBNodeCrashList: 'DBNodeCrashList',
      endTime: 'EndTime',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      faultInjectionType: 'FaultInjectionType',
      simulateListId: 'SimulateListId',
      simulateMode: 'SimulateMode',
      simulateStatus: 'SimulateStatus',
      simulateTaskId: 'SimulateTaskId',
      startTime: 'StartTime',
      switchLogItems: 'SwitchLogItems',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeCrashList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      faultInjectionType: 'string',
      simulateListId: 'string',
      simulateMode: 'string',
      simulateStatus: 'string',
      simulateTaskId: 'string',
      startTime: 'string',
      switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchLogItems },
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeCrashList)) {
      $dara.Model.validateArray(this.DBNodeCrashList);
    }
    if(Array.isArray(this.switchLogItems)) {
      $dara.Model.validateArray(this.switchLogItems);
    }
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems extends $dara.Model {
  DBNodeId?: string;
  endTime?: string;
  isSuccess?: string;
  simulatePhase?: string;
  startTime?: string;
  stepMsg?: string;
  stepName?: string;
  timeCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      isSuccess: 'IsSuccess',
      simulatePhase: 'SimulatePhase',
      startTime: 'StartTime',
      stepMsg: 'StepMsg',
      stepName: 'StepName',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      endTime: 'string',
      isSuccess: 'string',
      simulatePhase: 'string',
      startTime: 'string',
      stepMsg: 'string',
      stepName: 'string',
      timeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBodySwitchLogItems extends $dara.Model {
  DBInstanceId?: string;
  dstDbType?: string;
  eventFinishTime?: string;
  eventStartTime?: string;
  simulateListId?: string;
  simulateStatus?: string;
  simulatecode?: string;
  srcDbType?: string;
  switchStepItems?: DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dstDbType: 'DstDbType',
      eventFinishTime: 'EventFinishTime',
      eventStartTime: 'EventStartTime',
      simulateListId: 'SimulateListId',
      simulateStatus: 'SimulateStatus',
      simulatecode: 'Simulatecode',
      srcDbType: 'SrcDbType',
      switchStepItems: 'SwitchStepItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dstDbType: 'string',
      eventFinishTime: 'string',
      eventStartTime: 'string',
      simulateListId: 'string',
      simulateStatus: 'string',
      simulatecode: 'string',
      srcDbType: 'string',
      switchStepItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItemsSwitchStepItems },
    };
  }

  validate() {
    if(Array.isArray(this.switchStepItems)) {
      $dara.Model.validateArray(this.switchStepItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLogFilesResponseBody extends $dara.Model {
  /**
   * @example
   * pi-****************
   */
  DBInstanceName?: string;
  /**
   * @example
   * polardb_mysql_rw
   */
  DBInstanceType?: string;
  haLogItems?: DescribeDBLogFilesResponseBodyHaLogItems[];
  /**
   * @example
   * 1
   */
  haStatus?: number;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  switchListItems?: DescribeDBLogFilesResponseBodySwitchListItems[];
  switchLogItems?: DescribeDBLogFilesResponseBodySwitchLogItems[];
  /**
   * @example
   * 160
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBInstanceType: 'DBInstanceType',
      haLogItems: 'HaLogItems',
      haStatus: 'HaStatus',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      switchListItems: 'SwitchListItems',
      switchLogItems: 'SwitchLogItems',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBInstanceType: 'string',
      haLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodyHaLogItems },
      haStatus: 'number',
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      switchListItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchListItems },
      switchLogItems: { 'type': 'array', 'itemType': DescribeDBLogFilesResponseBodySwitchLogItems },
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.haLogItems)) {
      $dara.Model.validateArray(this.haLogItems);
    }
    if(Array.isArray(this.switchListItems)) {
      $dara.Model.validateArray(this.switchListItems);
    }
    if(Array.isArray(this.switchLogItems)) {
      $dara.Model.validateArray(this.switchLogItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

