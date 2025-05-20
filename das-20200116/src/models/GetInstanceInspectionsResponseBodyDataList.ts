// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceInspectionsResponseBodyDataListAutoFunction } from "./GetInstanceInspectionsResponseBodyDataListAutoFunction";
import { GetInstanceInspectionsResponseBodyDataListInstance } from "./GetInstanceInspectionsResponseBodyDataListInstance";


export class GetInstanceInspectionsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the autonomy service is enabled.
   */
  autoFunction?: GetInstanceInspectionsResponseBodyDataListAutoFunction;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * "data": { "hasDeadLock": false, "exceptionTableMap": {}, "bigTransactionCount": 0, "cpu": 4, "isRds": true, "rdsEnable": true, "enable": false, "activeSessions": [], "bigTransactionList": [], "bigSessionList": [ { "blockDuration": 0, "active": false, "Time": 0, "db": "" },
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: enabled.
   * *   **2**: not supported.
   * 
   * @example
   * 0
   */
  enableDasPro?: number;
  /**
   * @remarks
   * The end time of the inspection and scoring task. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 1608888296001
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1603247192000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The information about the instance.
   */
  instance?: GetInstanceInspectionsResponseBodyDataListInstance;
  /**
   * @remarks
   * The inspection score of the instance.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The scores that are deducted for the instance.
   */
  scoreMap?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the inspection and scoring task. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the inspection and scoring task. Valid values:
   * 
   * *   **0**: The task is waiting for execution.
   * *   **1**: The task is in progress.
   * *   **2**: The task is complete.
   * 
   * @example
   * 2
   */
  state?: number;
  /**
   * @remarks
   * The mode in which the inspection and scoring task was initiated. Valid values:
   * 
   * *   **0**: automatic mode.
   * *   **1**: manual mode.
   * 
   * @example
   * 0
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      autoFunction: 'AutoFunction',
      data: 'Data',
      enableDasPro: 'EnableDasPro',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      instance: 'Instance',
      score: 'Score',
      scoreMap: 'ScoreMap',
      startTime: 'StartTime',
      state: 'State',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFunction: GetInstanceInspectionsResponseBodyDataListAutoFunction,
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDasPro: 'number',
      endTime: 'number',
      gmtCreate: 'number',
      instance: GetInstanceInspectionsResponseBodyDataListInstance,
      score: 'number',
      scoreMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'number',
      state: 'number',
      taskType: 'number',
    };
  }

  validate() {
    if(this.autoFunction && typeof (this.autoFunction as any).validate === 'function') {
      (this.autoFunction as any).validate();
    }
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    if(this.scoreMap) {
      $dara.Model.validateMap(this.scoreMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

