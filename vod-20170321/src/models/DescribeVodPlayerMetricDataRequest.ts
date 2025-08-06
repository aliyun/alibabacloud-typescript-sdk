// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * [
   *   {
   *     "Field": "codec",
   *     "Op": "=",
   *     "Value": "h265#_#h264"
   *   },
   *   {
   *     "Field": "os",
   *     "Op": "=",
   *     "Value": "Android#_#iOS"
   *   }
   * ]
   */
  filters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1d
   */
  interval?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Vv,Uv,AvgPerVv
   */
  metrics?: string;
  /**
   * @example
   * Android、iOS、Windows
   */
  os?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * web
   */
  terminalType?: string;
  /**
   * @example
   * 5
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      filters: 'Filters',
      interval: 'Interval',
      language: 'Language',
      metrics: 'Metrics',
      os: 'Os',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      terminalType: 'TerminalType',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      filters: 'string',
      interval: 'string',
      language: 'string',
      metrics: 'string',
      os: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      terminalType: 'string',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

