// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig";
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig";


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is a scheduled task for historical data cleanup. This parameter is a reserved parameter and is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * true
   */
  cron?: boolean;
  /**
   * @remarks
   * The number of times the scheduled task is run. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * 0
   */
  cronCallTimes?: number;
  /**
   * @remarks
   * The additional configuration information about historical data cleanup. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   */
  cronExtConfig?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig;
  /**
   * @remarks
   * The CRON expression of the scheduled task. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronFormat?: string;
  /**
   * @remarks
   * The time when the task was last run.
   * 
   * @example
   * 2024-04-19 02:00:00.0
   */
  cronLastCallStartTime?: string;
  /**
   * @remarks
   * The time when the task is run next time. This parameter is returned only if the value of CronStatus is SUCCESS.
   * 
   * @example
   * 2024-04-19 02:00:00
   */
  cronNextCallTime?: string;
  /**
   * @remarks
   * The state of the scheduled task. If this parameter is empty, the task is not run. Valid values:
   * 
   * *   PAUSE: The task is suspended.
   * *   WAITING: The task is waiting to be run.
   * *   SUCCESS: The task is run.
   * 
   * @example
   * SUCCESS
   */
  cronStatus?: string;
  /**
   * @remarks
   * The name of the table to which data is to be imported. This parameter is valid only if the value of DetailType is BIG_FILE. If the value of FileType is SQL, this parameter is empty.
   * 
   * @example
   * tb_import_tb_name
   */
  csvTableName?: string;
  /**
   * @remarks
   * The ID of the current data change task. This is a reserved parameter and can be ignored.
   * 
   * @example
   * 13***
   */
  currentTaskId?: number;
  /**
   * @remarks
   * The type of the ticket. Valid values:
   * 
   * *   COMMON: regular data change.
   * *   CHUNK_DML: lock-free data change.
   * *   BIG_FILE: large data import.
   * *   CRON_CLEAR_DATA: historical data cleanup.
   * *   PROCEDURE: programmable object change.
   * 
   * @example
   * BIG_FILE
   */
  detailType?: string;
  /**
   * @remarks
   * The execution duration of the scheduled task. Unit: hour. This parameter is valid only if the value of DetailType is CRON_CLEAR_DATA. If the value is greater than 0, an execution duration is set.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The encoding method of the file. This parameter may be empty, which indicates the value of AUTO. Valid values:
   * 
   * *   **AUTO**: automatic identification.
   * *   **UTF-8**: UTF-8 encoding.
   * *   **GBK**: GBK encoding.
   * *   **ISO-8859-1**: ISO-8859-1 encoding.
   * 
   * @example
   * UTF-8
   */
  fileEncoding?: string;
  /**
   * @remarks
   * The type of the file to be imported. This parameter is valid if the value of DetailType is BIG_FILE. Valid values:
   * 
   * *   **SQL**: an SQL file.
   * *   **CSV**: a CSV file.
   * *   **EXCEL**: an Excel file.
   * *   **JSON**: a JSON file, which is supported only by MongoDB databases.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * The additional configuration information about data import. This parameter is valid if the value of DetailType is BIG_FILE.
   */
  importExtConfig?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      cronCallTimes: 'CronCallTimes',
      cronExtConfig: 'CronExtConfig',
      cronFormat: 'CronFormat',
      cronLastCallStartTime: 'CronLastCallStartTime',
      cronNextCallTime: 'CronNextCallTime',
      cronStatus: 'CronStatus',
      csvTableName: 'CsvTableName',
      currentTaskId: 'CurrentTaskId',
      detailType: 'DetailType',
      duration: 'Duration',
      fileEncoding: 'FileEncoding',
      fileType: 'FileType',
      importExtConfig: 'ImportExtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'boolean',
      cronCallTimes: 'number',
      cronExtConfig: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig,
      cronFormat: 'string',
      cronLastCallStartTime: 'string',
      cronNextCallTime: 'string',
      cronStatus: 'string',
      csvTableName: 'string',
      currentTaskId: 'number',
      detailType: 'string',
      duration: 'number',
      fileEncoding: 'string',
      fileType: 'string',
      importExtConfig: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig,
    };
  }

  validate() {
    if(this.cronExtConfig && typeof (this.cronExtConfig as any).validate === 'function') {
      (this.cronExtConfig as any).validate();
    }
    if(this.importExtConfig && typeof (this.importExtConfig as any).validate === 'function') {
      (this.importExtConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

