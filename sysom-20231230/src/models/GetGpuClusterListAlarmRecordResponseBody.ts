// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterListAlarmRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster where the alert was triggered.
   * 
   * @example
   * cluster1
   */
  alarmCluster?: string;
  /**
   * @remarks
   * The additional information about the alert.
   * 
   * @example
   * {
   * error_node_gpu, 
   * error_pod,  
   * task_pod_list, 
   * error_type, 
   * kernel,  
   * }
   */
  alarmExtInfo?: any;
  /**
   * @remarks
   * The unique ID of the alert.
   * 
   * @example
   * 746d13f8-9662-4441-b76b-a8ed8d485195
   */
  alarmId?: string;
  /**
   * @remarks
   * The event log associated with the alert.
   * 
   * @example
   * cuda OOM：xxxxx
   */
  alarmLog?: string;
  /**
   * @remarks
   * The ID of the task where the anomaly occurred.
   * 
   * @example
   * task job id
   */
  alarmTask?: string;
  /**
   * @remarks
   * The date and time when the alert was triggered.
   * 
   * @example
   * 2025-08-22 18:16:25
   */
  alarmTime?: string;
  /**
   * @remarks
   * The topology snapshot.
   * 
   * @example
   * topology data，e.g.
   *       "alarmTopology": {
   *         "nodes": [
   *           {
   *             "gpu_list": [
   *               {
   *                 "values": {
   *                   "Basic": [
   *                     {
   *                       "value": "1",
   *                       "key": "Gpu Number\\n"
   *                     }
   *                   ],
   *                   "Metric": [
   *                     {
   *                       "value": "50",
   *                       "key": "gpu_util(%)\\n"
   *                     }
   *                   ],
   *                   "Exception": [
   *                     {
   *                       "value": "NCCL HANG",
   *                       "key": "error0"
   *                     }
   *                   ]
   *                 },
   *                 "name": "GPU1",
   *                 "style": {
   *                   "fill": "#e94242\\n",
   *                   "opacity": "0.1"
   *                 },
   *                 "id": "6cc37fbc"
   *               }
   *             ],
   *             "values": {
   *               "Basic": [
   *                 {
   *                   "value": "i-xxxxxx",
   *                   "key": "instance"
   *                 }
   *               ],
   *               "Metric": [
   *                 {
   *                   "value": "value of metrics 1",
   *                   "key": "name of metric 1"
   *                 }
   *               ],
   *               "Exception": [
   *                 {
   *                   "value": "NCCL HANG",
   *                   "key": "error0"
   *                 }
   *               ]
   *             },
   *             "name": "i-xxxxxx\\n",
   *             "style": {
   *               "fillOpacity": "0.5",
   *               "fill": "#e94242\\n"
   *             },
   *             "id": "975fbcb0"
   *           }
   *         ],
   *         "edges": [
   *           {
   *             "src_id": "00534a88",
   *             "values": {
   *               "Basic": [
   *                 {
   *                   "value": "v2.22.3\\n",
   *                   "key": "NCCL Version\\n"
   *                 }
   *               ],
   *               "Metric": [
   *                 {
   *                   "value": "10000",
   *                   "key": "Recv Msg Count"
   *                 }
   *               ],
   *               "Exception": [
   *                 {
   *                   "value": "NCCL HANG",
   *                   "key": "error0"
   *                 }
   *               ]
   *             },
   *             "dst_id": "260525e9",
   *             "style": {
   *               "opacity": "0.1",
   *               "lineWidth": "1",
   *               "selectedStyle": "\\"{\\\\\\"opacity\\\\\\": 1, \\\\\\"lineWidth\\\\\\": 1}\\"\\n",
   *               "stroke": "#e94242"
   *             },
   *             "type": "GPU"
   *           }
   *         ]
   *       },
   */
  alarmTopology?: any;
  /**
   * @remarks
   * The Alarm Metric for alerting.
   * 
   * @example
   * cuda OOM
   */
  alarmType?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running、blocking、restart、exited、failed
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the cloud account.
   * 
   * @example
   * 1234123412352311
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCluster: 'alarmCluster',
      alarmExtInfo: 'alarmExtInfo',
      alarmId: 'alarmId',
      alarmLog: 'alarmLog',
      alarmTask: 'alarmTask',
      alarmTime: 'alarmTime',
      alarmTopology: 'alarmTopology',
      alarmType: 'alarmType',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCluster: 'string',
      alarmExtInfo: 'any',
      alarmId: 'string',
      alarmLog: 'string',
      alarmTask: 'string',
      alarmTime: 'string',
      alarmTopology: 'any',
      alarmType: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGpuClusterListAlarmRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value is "Success" or "Sysom.ServerError".
   * 
   * @example
   * Success or Sysom.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The list of alert data.
   */
  data?: GetGpuClusterListAlarmRecordResponseBodyData[];
  /**
   * @remarks
   * When code is not "Success", message contains the error information.
   * 
   * @example
   * server error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * real request ID
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned records.
   * 
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetGpuClusterListAlarmRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

