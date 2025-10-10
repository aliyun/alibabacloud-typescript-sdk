// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardRequest extends $dara.Model {
  /**
   * @example
   * 29201799
   */
  appKey?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @example
   * 4.8
   */
  appVersion?: string;
  /**
   * @example
   * 1681985390256
   */
  endTime?: number;
  /**
   * @example
   * 4.8
   */
  keyword?: string;
  /**
   * @example
   * queryAppVersions
   */
  proxyAction?: string;
  /**
   * @example
   * mqc
   */
  serviceName?: string;
  /**
   * @example
   * 1681369984564
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appType: 'AppType',
      appVersion: 'AppVersion',
      endTime: 'EndTime',
      keyword: 'Keyword',
      proxyAction: 'ProxyAction',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appType: 'number',
      appVersion: 'string',
      endTime: 'number',
      keyword: 'string',
      proxyAction: 'string',
      serviceName: 'string',
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

