// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether second-level monitoring is enabled. Valid values:
   * 
   * *   true: Second-level monitoring is enabled.
   * *   false: Second-level monitoring is disabled.
   * 
   * @example
   * false
   */
  secondMonitor?: boolean;
  /**
   * @remarks
   * The quota of detection points that are provided by Alibaba Cloud. Five detection points are provided for free.
   * 
   * @example
   * 5
   */
  siteMonitorIdcQuota?: number;
  /**
   * @remarks
   * The quota of detection points that are not provided by Alibaba Cloud. Default value: 0.
   * 
   * @example
   * 0
   */
  siteMonitorOperatorQuotaQuota?: number;
  /**
   * @remarks
   * The used quota of site monitoring tasks.
   * 
   * @example
   * 6
   */
  siteMonitorQuotaTaskUsed?: number;
  /**
   * @remarks
   * The quota of site monitoring tasks.
   * 
   * @example
   * 10
   */
  siteMonitorTaskQuota?: number;
  /**
   * @remarks
   * The version of site monitoring. Valid values:
   * 
   * *   V1
   * *   V2
   * 
   * @example
   * V1
   */
  siteMonitorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      secondMonitor: 'SecondMonitor',
      siteMonitorIdcQuota: 'SiteMonitorIdcQuota',
      siteMonitorOperatorQuotaQuota: 'SiteMonitorOperatorQuotaQuota',
      siteMonitorQuotaTaskUsed: 'SiteMonitorQuotaTaskUsed',
      siteMonitorTaskQuota: 'SiteMonitorTaskQuota',
      siteMonitorVersion: 'SiteMonitorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondMonitor: 'boolean',
      siteMonitorIdcQuota: 'number',
      siteMonitorOperatorQuotaQuota: 'number',
      siteMonitorQuotaTaskUsed: 'number',
      siteMonitorTaskQuota: 'number',
      siteMonitorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quota.
   */
  data?: DescribeSiteMonitorQuotaResponseBodyData;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26860260-76C6-404E-AB7A-EB98D36A6885
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSiteMonitorQuotaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

