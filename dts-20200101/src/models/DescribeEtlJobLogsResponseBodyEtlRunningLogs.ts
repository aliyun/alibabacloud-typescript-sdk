// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEtlJobLogsResponseBodyEtlRunningLogs extends $dara.Model {
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * @example
   * Starting DTS-ETL...
   */
  content?: string;
  /**
   * @remarks
   * The module for which the logs are generated, such as the conversion module of ETL tasks.
   * 
   * @example
   * DTS-ETL
   */
  contentKey?: string;
  /**
   * @remarks
   * The ID of the ETL task.
   * 
   * @example
   * u**********5
   */
  etlId?: string;
  /**
   * @remarks
   * The time when the log was generated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1637306503000
   */
  logDatetime?: string;
  /**
   * @remarks
   * The log level. Valid values: ERROR, WARN, INFO, and DEBUG.
   * 
   * @example
   * INFO
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 121323*******454512
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentKey: 'ContentKey',
      etlId: 'EtlId',
      logDatetime: 'LogDatetime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentKey: 'string',
      etlId: 'string',
      logDatetime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

