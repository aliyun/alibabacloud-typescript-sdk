// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteLogsResponseBodySiteLogDetailsLogInfos extends $dara.Model {
  /**
   * @example
   * 2022-11-06T17:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * example.com_2022_11_07_000000_020000.gz.xxxxxx
   */
  logName?: string;
  /**
   * @example
   * example.aliyundoc.com /v1.l1cache/105252530/example.com/2022_11_07/example.com_2022_11_07_000000_020000.gz.xxxxxx?Expires=1636963354&OSSAccessKeyId=LTAIviCc6zy8****&Signature=u0V6foRfZniHE8i%2BHUdxGOhZsK****
   */
  logPath?: string;
  /**
   * @example
   * 438304768
   */
  logSize?: number;
  /**
   * @example
   * 2022-11-06T16:00:00Z
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

