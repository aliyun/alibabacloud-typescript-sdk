// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorListRequest extends $dara.Model {
  /**
   * @remarks
   * The type of detection points used by the task. Valid values:
   * 
   * - PC: PC-based detection points.
   * 
   * - MOBILE: mobile-based detection points.
   * 
   * - FC: internal detection points.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The keyword used to search for site monitoring tasks.
   * 
   * > Fuzzy match is supported based on the task name or task address.
   * 
   * @example
   * site
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * @example
   * a1ecd34a-8157-44d9-b060-14950837****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 1: Normal.
   * 
   * - 2: Disabled.
   * 
   * @example
   * 1
   */
  taskState?: string;
  /**
   * @remarks
   * The type of the site monitoring task. CloudMonitor supports the following types: HTTP, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      agentGroup: 'AgentGroup',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroup: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: 'string',
      taskState: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

