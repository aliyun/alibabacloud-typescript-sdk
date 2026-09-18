// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the dashboard has integrated CloudMonitor to display Ray metrics.
   * 
   * @example
   * true
   */
  metricsEnabled?: string;
  /**
   * @remarks
   * The URL of the Ray Dashboard.
   * 
   * @example
   * https://pre-pai-dlc-proxy-cn-hangzhou.aliyun.com/ray/dashboard/dlc1k7426goc7bvy
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      metricsEnabled: 'metricsEnabled',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricsEnabled: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

