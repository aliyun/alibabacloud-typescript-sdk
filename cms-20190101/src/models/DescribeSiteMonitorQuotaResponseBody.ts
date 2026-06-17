// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether second-level monitoring is enabled. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * @example
   * false
   */
  secondMonitor?: boolean;
  /**
   * @remarks
   * The quota of Alibaba detection points. The free quota is 5.
   * 
   * @example
   * 5
   */
  siteMonitorIdcQuota?: number;
  /**
   * @remarks
   * The quota of non-Alibaba detection points. Default value: 0.
   * 
   * @example
   * 0
   */
  siteMonitorOperatorQuotaQuota?: number;
  /**
   * @remarks
   * The number of used site monitoring detection task quotas.
   * 
   * @example
   * 6
   */
  siteMonitorQuotaTaskUsed?: number;
  /**
   * @remarks
   * The quota of site monitoring detection tasks.
   * 
   * @example
   * 10
   */
  siteMonitorTaskQuota?: number;
  /**
   * @remarks
   * The version of site monitoring. Valid values:
   * 
   * - V1: the old version.
   *  
   * - V2: the new version.
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
   * The HTTP status code.
   * 
   * > The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quota information.
   */
  data?: DescribeSiteMonitorQuotaResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Request succeeded.
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
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
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

