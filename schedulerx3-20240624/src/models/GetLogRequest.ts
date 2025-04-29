// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogRequest extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1721636220
   */
  endTime?: number;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * hello word
   */
  keyword?: string;
  /**
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * LineNum
   * 
   * @example
   * 2
   */
  lineNum?: number;
  /**
   * @example
   * 344008
   */
  logId?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1721636220
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      keyword: 'Keyword',
      level: 'Level',
      lineNum: 'LineNum',
      logId: 'LogId',
      offset: 'Offset',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobExecutionId: 'string',
      keyword: 'string',
      level: 'string',
      lineNum: 'number',
      logId: 'number',
      offset: 'number',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

