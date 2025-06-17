// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserUsageDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language in which you want to export the file. Default value: zh-cn. Valid values:
   * 
   * *   **zh-cn**: Chinese
   * *   **en-us**: English
   * 
   * @example
   * zh-cn
   */
  language?: string;
  /**
   * @remarks
   * The start of the time range to query. The data is collected every 5 minutes.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
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
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      language: 'Language',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      language: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

