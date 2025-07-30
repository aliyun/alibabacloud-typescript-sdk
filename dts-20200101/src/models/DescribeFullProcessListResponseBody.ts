// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullProcessListResponseBodyFullProcessList extends $dara.Model {
  /**
   * @remarks
   * Details
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The abnormal status of the task. Valid values:**notstarted**. -**checking**. -**failed**. -**finished**.
   * 
   * @example
   * notstarted
   */
  exception?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * universer
   */
  processName?: string;
  /**
   * @remarks
   * The type of the process. Valid values:
   * 
   * *   **1**: trusted
   * *   **2**: suspicious
   * *   **3**: malicious
   * 
   * @example
   * 1
   */
  processType?: string;
  /**
   * @remarks
   * SQL that is running
   * 
   * @example
   * test
   */
  runningSQL?: string;
  /**
   * @remarks
   * The log status.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * TaskD4E5F6
   */
  taskID?: string;
  /**
   * @remarks
   * The time when the logs were collected. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
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
   * The throttling configuration. Valid values:
   * 
   * *   **dts.datamove.blaster.qps.max**: The rate at which queries are made to the source database per second.
   * *   **dts.datamove.source.rps.max**: the number of rows that are fully synchronized or migrated per second.
   * *   **dts.datamove.source.bps.max**: the amount of data processed per second for full synchronization or migration. Unit: Byte/s.
   * 
   * > 
   * 
   * *   When you set the **JobCode** parameter to **03**, you need to specify the **EnableLimit** parameter as **true**. Otherwise, the configuration cannot take effect.
   * 
   * *   When you set the **JobCode** parameter to **04** or **07**, you only need to specify the **dts.datamove.source.rps.max** and **dts.datamove.source.bps.max** parameters.
   * *   A value of \\*\\*-1\\*\\* indicates no rate limit.
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
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * >  The request parameter **DtsJobId** is invalid if **The Value of Input Parameter %s is not valid** is returned for **ErrMessage** and **DtsJobId** is returned for **DynamicMessage**.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the request failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The details of the GA instances.
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
   * *   **true**
   * *   **false**
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

