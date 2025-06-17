// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $dara.Model {
  /**
   * @example
   * 2023-09-23T14:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * demo.aliyundoc.com_2015_05_23_2100_2200.gz
   */
  logName?: string;
  /**
   * @example
   * guide.aliyundoc.com-hangzhou.xxx
   */
  logPath?: string;
  /**
   * @example
   * 258
   */
  logSize?: number;
  /**
   * @example
   * 2023-09-23T13:00:00Z
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

