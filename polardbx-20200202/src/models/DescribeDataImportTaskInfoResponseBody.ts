// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailListTaskDetailList extends $dara.Model {
  /**
   * @remarks
   * The delay time.
   * 
   * @example
   * 58329
   */
  delay?: number;
  /**
   * @remarks
   * The most recent error message.
   * 
   * @example
   * null
   */
  lastError?: string;
  /**
   * @remarks
   * The physical database name.
   * 
   * @example
   * drds_test
   */
  physicalDbName?: string;
  /**
   * @remarks
   * The data import progress.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The performance and runtime metrics collected during the execution of the data migration or import task.
   * 
   * @example
   * {
   *   "applyCount": 0,
   *   "cpuUseRatio": 41,
   *   "fsmId": 1,
   *   "fullGcCount": 
   * }
   */
  statistics?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fc3b1568-ad96-****-adca-dfe018b38077
   */
  taskId?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * FULL_COPY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      lastError: 'LastError',
      physicalDbName: 'PhysicalDbName',
      progress: 'Progress',
      statistics: 'Statistics',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      lastError: 'string',
      physicalDbName: 'string',
      progress: 'number',
      statistics: 'string',
      status: 'string',
      taskId: 'number',
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

export class DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailList extends $dara.Model {
  /**
   * @remarks
   * The service detail ID.
   * 
   * @example
   * 1991609
   */
  id?: number;
  /**
   * @remarks
   * The task execution status.
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The task details.
   */
  taskDetailList?: DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailListTaskDetailList[];
  /**
   * @remarks
   * Valid values:
   * - FULL_COPY: full replication.
   * - INC_COPY: incremental replication.
   * 
   * @example
   * FULL_COPY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
      taskDetailList: 'TaskDetailList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      status: 'string',
      taskDetailList: { 'type': 'array', 'itemType': DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailListTaskDetailList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskDetailList)) {
      $dara.Model.validateArray(this.taskDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The progress ID.
   * 
   * @example
   * 1
   */
  fsmId?: number;
  /**
   * @remarks
   * The state identifier in a data migration or synchronization task.
   * 
   * @example
   * RECON_FINISHED_CATCH_UP
   */
  fsmState?: string;
  /**
   * @remarks
   * The status in a data migration, import, or synchronization system.
   * 
   * @example
   * IMPORT_NOT_BEGIN
   */
  fsmStatus?: string;
  /**
   * @remarks
   * The data import task details.
   */
  serviceDetailList?: DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailList[];
  static names(): { [key: string]: string } {
    return {
      fsmId: 'FsmId',
      fsmState: 'FsmState',
      fsmStatus: 'FsmStatus',
      serviceDetailList: 'ServiceDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsmId: 'number',
      fsmState: 'string',
      fsmStatus: 'string',
      serviceDetailList: { 'type': 'array', 'itemType': DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.serviceDetailList)) {
      $dara.Model.validateArray(this.serviceDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTaskInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task details.
   */
  dataImportTaskDetailInfo?: DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfo;
  static names(): { [key: string]: string } {
    return {
      dataImportTaskDetailInfo: 'DataImportTaskDetailInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataImportTaskDetailInfo: DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfo,
    };
  }

  validate() {
    if(this.dataImportTaskDetailInfo && typeof (this.dataImportTaskDetailInfo as any).validate === 'function') {
      (this.dataImportTaskDetailInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. This parameter is empty when the request succeeds. When the request fails, an exception message such as an error code is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result set.
   */
  data?: DescribeDataImportTaskInfoResponseBodyData;
  /**
   * @remarks
   * The returned message. This parameter has a value only when the task status is success. Otherwise, an empty value is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-5C98-****-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeDataImportTaskInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

