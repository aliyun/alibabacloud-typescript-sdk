// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The public IP address of the asset to query.
   * 
   * @example
   * 1.1.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset to query.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The language type. Valid values:  
   * 
   * - **zh**: Chinese
   * - **en**: English
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
   * The maximum number of entries to return per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query the root task list. Valid values:
   * 
   * - **true**: Queries root tasks.
   * - **false**: Queries subtasks.
   * 
   * @example
   * false
   */
  rootTask?: boolean;
  /**
   * @remarks
   * The ID of the root task.
   * 
   * @example
   * 12c27343861610c5db3f7a2573b4****
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the detection task. Valid values:
   * 
   * - **1**: running
   * - **2**: completed
   * - **3**: failed
   * - **4**: timed out
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The name of the scan target.
   * 
   * @example
   * source-test-obj-0****
   */
  targetName?: string;
  /**
   * @remarks
   * The object type of the scan. Valid values:
   * 
   * - **1**: snapshot 
   * - **2**: image
   * 
   * @example
   * 1
   */
  targetType?: number;
  /**
   * @remarks
   * The ID of the root task. Specify this parameter when you query the list of subtasks under a root task.
   * 
   * @example
   * d7b2acf8d362742123e4a84e1bf8****
   */
  taskId?: string;
  /**
   * @remarks
   * The list of task IDs to return. You can specify up to 100 IDs. You must specify RootTask and cannot specify this parameter together with TaskId. If RootTask is set to true, root tasks are queried. If RootTask is set to false, subtasks are queried, and cross-root task queries are allowed. If RootTaskId is specified, the intersection is returned.
   */
  taskIdListShrink?: string;
  /**
   * @remarks
   * The UUID of the server to query.
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
      taskIdListShrink: 'TaskIdList',
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
      taskIdListShrink: 'string',
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

