// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the task.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The public IP address of the asset that you want to query.
   * 
   * @example
   * 1.1.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset that you want to query.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The language type. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * oracle-win-001****
   */
  machineName?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query main tasks. Valid values:
   * 
   * *   **true**: queries main tasks.
   * *   **false**: queries subtasks.
   * 
   * @example
   * false
   */
  rootTask?: boolean;
  /**
   * @remarks
   * The ID of the main task.
   * 
   * @example
   * 12c27343861610c5db3f7a2573b4****
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The start timestamp of the task.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the detection task.
   * 
   * *   **1**: The detection task is in progress.
   * *   **2**: The detection task is complete.
   * *   **3**: The detection task fails.
   * *   **4**: The detection task times out.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The name of the asset that you want to detect.
   * 
   * @example
   * source-test-obj-0****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset that you want to detect. Valid values:
   * 
   * *   **1**: snapshot
   * *   **2**: image
   * 
   * @example
   * 1
   */
  targetType?: number;
  /**
   * @remarks
   * The ID of the main task. If you want to query subtasks of a main task, you must specify this parameter.
   * 
   * @example
   * d7b2acf8d362742123e4a84e1bf8****
   */
  taskId?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * e4af3620-6895-4e2f-a641-a9d8fb53****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lang: 'Lang',
      machineName: 'MachineName',
      pageSize: 'PageSize',
      rootTask: 'RootTask',
      rootTaskId: 'RootTaskId',
      startTime: 'StartTime',
      status: 'Status',
      targetName: 'TargetName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      internetIp: 'string',
      intranetIp: 'string',
      lang: 'string',
      machineName: 'string',
      pageSize: 'number',
      rootTask: 'boolean',
      rootTaskId: 'string',
      startTime: 'number',
      status: 'number',
      targetName: 'string',
      targetType: 'number',
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

