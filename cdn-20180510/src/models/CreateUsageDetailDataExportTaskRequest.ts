// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsageDetailDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names. If you do not specify the Group parameter, resource usage details of these domain names are exported.
   * 
   * If you do not specify this parameter, resource usage details are exported based on accounts.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The domain name group. If you specify this parameter, the **DomainNames** parameter is ignored.
   * 
   * @example
   * xxx
   */
  group?: string;
  /**
   * @remarks
   * The language in which you want to export the file. Valid values:
   * 
   * *   **zh-cn**: Chinese. This is the default value.
   * *   **en-us**: English
   * 
   * @example
   * en-us
   */
  language?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Refresh
   */
  taskName?: string;
  /**
   * @remarks
   * The type of resource usage data to query. Valid values:
   * 
   * *   **flow**: traffic and bandwidth
   * *   **vas**: requests
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      group: 'Group',
      language: 'Language',
      startTime: 'StartTime',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      endTime: 'string',
      group: 'string',
      language: 'string',
      startTime: 'string',
      taskName: 'string',
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

