// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullProcessListResponseBodyFullProcessList extends $dara.Model {
  /**
   * @remarks
   * The details.
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The exception status of the task. Valid values: - **notstarted**: not started. - **checking**: being checked. - **failed**: failed. - **finished**: completed.
   * 
   * @example
   * notstarted
   */
  exception?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * universer
   */
  processName?: string;
  /**
   * @remarks
   * The process type. Valid values:
   * - **1**: trusted
   * - **2**: suspicious
   * - **3**: malicious.
   * 
   * @example
   * 1
   */
  processType?: string;
  /**
   * @remarks
   * The SQL statement that is being executed.
   * 
   * @example
   * test
   */
  runningSQL?: string;
  /**
   * @remarks
   * The status of the log information.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * TaskD4E5F6
   */
  taskID?: string;
  /**
   * @remarks
   * The time when the log was collected, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 1729650129452
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      exception: 'Exception',
      processName: 'ProcessName',
      processType: 'ProcessType',
      runningSQL: 'RunningSQL',
      state: 'State',
      taskID: 'TaskID',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      exception: 'string',
      processName: 'string',
      processType: 'string',
      runningSQL: 'string',
      state: 'string',
      taskID: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFullProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * This parameter does not return a value. The following parameters describe the rate limiting configurations:
   * 
   * - **dts.datamove.blaster.qps.max**: the rate of queries per second to the source database.
   * - **dts.datamove.source.rps.max**: the number of rows per second for full data synchronization or migration (RPS).
   * - **dts.datamove.source.bps.max**: the amount of data per second for full data synchronization or migration, in bytes per second.
   * 
   * > - When **JobCode** is set to **03**, you must set **EnableLimit** to **true** for the three parameters to take effect.
   * - When **JobCode** is set to **04** or **07**, you only need to configure **dts.datamove.source.rps.max** and **dts.datamove.source.bps.max**.
   * - A value of **-1** indicates that rate limiting is disabled.
   * 
   * @example
   * {
   *       "dts.datamove.source.rps.max": 5000,
   *       "dts.datamove.source.bps.max": 10485760
   * }
   */
  configList?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the migration, synchronization, or change tracking task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The details of the Alibaba Cloud Global Accelerator (GA) instance list.
   */
  fullProcessList?: DescribeFullProcessListResponseBodyFullProcessList[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configList: 'ConfigList',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      fullProcessList: 'FullProcessList',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      configList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dtsJobId: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      fullProcessList: { 'type': 'array', 'itemType': DescribeFullProcessListResponseBodyFullProcessList },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.configList) {
      $dara.Model.validateMap(this.configList);
    }
    if(Array.isArray(this.fullProcessList)) {
      $dara.Model.validateArray(this.fullProcessList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

