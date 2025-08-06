// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerCollectDataRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1d
   */
  interval?: string;
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
   * 1d
   */
  period?: string;
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      metrics: 'Metrics',
      os: 'Os',
      period: 'Period',
      startTime: 'StartTime',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      metrics: 'string',
      os: 'string',
      period: 'string',
      startTime: 'string',
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

