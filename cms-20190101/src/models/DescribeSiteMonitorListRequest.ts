// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorListRequest extends $dara.Model {
  /**
   * @remarks
   * Task network type. Valid values:
   * 
   * - PC: Cable Network
   * 
   * - MOBILE: Mobile Cellular Network
   * 
   * - FC: Alibaba Cloud VPC Network
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The keyword to be matched.
   * 
   * >  You can search for tasks by name or address. Fuzzy search is supported.
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
   * *   1: The task is enabled.
   * *   2: The task is disabled.
   * 
   * @example
   * 1
   */
  taskState?: string;
  /**
   * @remarks
   * The protocol that is used by the site monitoring task. Valid values: HTTP, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
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

