// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportListResponseBodyReportList extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnosis was performed.
   * 
   * @example
   * 2018-01-17T12:46:09Z
   */
  diagnosticTime?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://rdsreport-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx
   */
  downloadURL?: string;
  /**
   * @remarks
   * The end time of the monitoring data.
   * 
   * @example
   * 2018-01-10T15:31:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The diagnostic score.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * The start time of the monitoring data.
   * 
   * @example
   * 2018-01-10T15:30:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticTime: 'DiagnosticTime',
      downloadURL: 'DownloadURL',
      endTime: 'EndTime',
      score: 'Score',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticTime: 'string',
      downloadURL: 'string',
      endTime: 'string',
      score: 'number',
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

