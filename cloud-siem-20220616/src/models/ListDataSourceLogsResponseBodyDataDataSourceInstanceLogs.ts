// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams } from "./ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams";


export class ListDataSourceLogsResponseBodyDataDataSourceInstanceLogs extends $dara.Model {
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_waf_xxxxx
   */
  logCode?: string;
  /**
   * @remarks
   * The ID of the log. The value is obtained after the threat analysis feature calculates the MD5 hash value of a parameter.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  logInstanceId?: string;
  /**
   * @remarks
   * The display code of the log.
   * 
   * @example
   * ${siem.prod.cloud_siem_waf_xxxxx}
   */
  logMdsCode?: string;
  /**
   * @remarks
   * The parameters of the log.
   */
  logParams?: ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams[];
  /**
   * @remarks
   * Indicates whether the task for which logs are collected is enabled. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      logInstanceId: 'LogInstanceId',
      logMdsCode: 'LogMdsCode',
      logParams: 'LogParams',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      logInstanceId: 'string',
      logMdsCode: 'string',
      logParams: { 'type': 'array', 'itemType': ListDataSourceLogsResponseBodyDataDataSourceInstanceLogsLogParams },
      taskStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logParams)) {
      $dara.Model.validateArray(this.logParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

