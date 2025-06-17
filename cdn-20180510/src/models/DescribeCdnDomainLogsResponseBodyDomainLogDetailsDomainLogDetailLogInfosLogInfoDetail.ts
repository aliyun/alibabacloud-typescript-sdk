// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2015-05-23T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * demo.aliyundoc.com_2015_05_23_2100_2200.gz
   */
  logName?: string;
  /**
   * @remarks
   * The path of the log file.
   * 
   * @example
   * guide.aliyundoc.com-hangzhou.xxx
   */
  logPath?: string;
  /**
   * @remarks
   * The size of the log file.
   * 
   * @example
   * 258
   */
  logSize?: number;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-05-23T13:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

