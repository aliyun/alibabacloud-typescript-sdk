// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailListTaskDetailList extends $dara.Model {
  /**
   * @example
   * 58329
   */
  delay?: number;
  /**
   * @example
   * null
   */
  lastError?: string;
  /**
   * @example
   * drds_test
   */
  physicalDbName?: string;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
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
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * fc3b1568-ad96-****-adca-dfe018b38077
   */
  taskId?: number;
  /**
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
   * @example
   * 1991609
   */
  id?: number;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  taskDetailList?: DescribeDataImportTaskInfoResponseBodyDataDataImportTaskDetailInfoServiceDetailListTaskDetailList[];
  /**
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
   * @example
   * 1
   */
  fsmId?: number;
  /**
   * @example
   * RECON_FINISHED_CATCH_UP
   */
  fsmState?: string;
  /**
   * @example
   * IMPORT_NOT_BEGIN
   */
  fsmStatus?: string;
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
   * @example
   * 200
   */
  code?: number;
  data?: DescribeDataImportTaskInfoResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 9B2F3840-5C98-****-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
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

