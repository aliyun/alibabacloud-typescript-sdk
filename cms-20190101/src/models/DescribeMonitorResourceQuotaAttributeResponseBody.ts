// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi extends $dara.Model {
  /**
   * @remarks
   * The total API quota. Unit: 10,000 calls.
   * 
   * @example
   * 500
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The API quota included in the plan. Unit: 10,000 calls.
   * 
   * @example
   * 500
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used API quota in the plan. Unit: calls.
   * 
   * @example
   * 9987
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor extends $dara.Model {
  /**
   * @remarks
   * The total quota of custom monitoring time series. Unit: time series.
   * 
   * @example
   * 1200
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of custom monitoring time series included in the plan. Unit: time series.
   * 
   * @example
   * 1000
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of custom monitoring time series in the plan. Unit: time series.
   * 
   * @example
   * 8
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota extends $dara.Model {
  /**
   * @remarks
   * The instance ID of Hybrid Cloud Monitoring.
   * 
   * @example
   * cms_enterprise_public_cn-7mz27pd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of Hybrid Cloud Monitoring.
   * 
   * @example
   * ENTERPRISE
   */
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      suitInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor extends $dara.Model {
  /**
   * @remarks
   * The total quota of event monitoring. Unit: 10,000 events.
   * 
   * @example
   * 55
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of event monitoring included in the plan. Unit: 10,000 events.
   * 
   * @example
   * 50
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of event monitoring in the plan. Unit: 10,000 events.
   * 
   * @example
   * 2
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor extends $dara.Model {
  /**
   * @remarks
   * The total quota of Log Monitoring. Unit: MByte/Min.
   * 
   * @example
   * 150
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of Log Monitoring included in the plan. Unit: MByte/Min.
   * 
   * @example
   * 150
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of Log Monitoring in the plan. Unit: MByte/Min.
   * 
   * @example
   * 80
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone extends $dara.Model {
  /**
   * @remarks
   * The total quota of alert phone calls. Unit: calls.
   * 
   * @example
   * 550
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of alert phone call packages. Unit: calls.
   * 
   * @example
   * 500
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of alert phone call packages. Unit: calls.
   * 
   * @example
   * 100
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS extends $dara.Model {
  /**
   * @remarks
   * The total quota of alert text messages. Unit: messages.
   * 
   * @example
   * 550
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of alert text message packages. Unit: messages.
   * 
   * @example
   * 500
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of alert text message packages. Unit: messages.
   * 
   * @example
   * 38
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser extends $dara.Model {
  /**
   * @remarks
   * The total quota of browser-based monitoring tasks. Unit: tasks.
   * 
   * @example
   * 50
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of browser-based monitoring tasks included in the plan. Unit: tasks.
   * 
   * @example
   * 50
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of browser-based monitoring tasks in the plan. Unit: tasks.
   * 
   * @example
   * 15
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe extends $dara.Model {
  /**
   * @remarks
   * The total quota of ECS detection points for site monitoring.
   * 
   * > The maximum number of ECS detection points that can be selected for a single site monitoring task.
   * 
   * @example
   * 5
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of ECS detection points for site monitoring included in the plan.
   * 
   * @example
   * 5
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of ECS detection points for site monitoring in the plan.
   * 
   * > The total number of ECS detection points across all site monitoring tasks that have been created.
   * 
   * @example
   * 20
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile extends $dara.Model {
  /**
   * @remarks
   * The total quota of mobile monitoring tasks. Unit: tasks.
   * 
   * @example
   * 50
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of mobile monitoring tasks included in the plan. Unit: tasks.
   * 
   * @example
   * 50
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of mobile monitoring tasks in the plan. Unit: tasks.
   * 
   * @example
   * 15
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe extends $dara.Model {
  /**
   * @remarks
   * The total quota of carrier detection points for site monitoring.
   * 
   * @example
   * 5
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of carrier detection points for site monitoring included in the plan.
   * 
   * @example
   * 5
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of carrier detection points for site monitoring in the plan.
   * 
   * @example
   * 0
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask extends $dara.Model {
  /**
   * @remarks
   * The total quota of site monitoring tasks. Unit: tasks.
   * 
   * @example
   * 25
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The quota of site monitoring tasks included in the plan. Unit: tasks.
   * 
   * @example
   * 20
   */
  quotaPackage?: number;
  /**
   * @remarks
   * The used quota of site monitoring tasks in the plan. Unit: tasks.
   * 
   * @example
   * 15
   */
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota extends $dara.Model {
  /**
   * @remarks
   * The API quota.
   */
  api?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi;
  /**
   * @remarks
   * The quota of custom monitoring.
   */
  customMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor;
  /**
   * @remarks
   * The quota details of Hybrid Cloud Monitoring.
   */
  enterpriseQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota;
  /**
   * @remarks
   * The quota of event monitoring.
   */
  eventMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor;
  /**
   * @remarks
   * The expiration time of the plan. The time follows the ISO 8601 standard in the YYYY-MM-DD format. The default time zone is UTC+8.
   * 
   * @example
   * 2021-02-28
   */
  expireTime?: string;
  /**
   * @remarks
   * The subscription plan ID.
   * 
   * @example
   * cms_edition-cn-n6w20rn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota of Log Monitoring.
   */
  logMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor;
  /**
   * @remarks
   * The quota of alert phone call packages.
   */
  phone?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone;
  /**
   * @remarks
   * The quota of alert text message packages.
   */
  SMS?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS;
  /**
   * @remarks
   * The quota of browser-based monitoring tasks.
   */
  siteMonitorBrowser?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser;
  /**
   * @remarks
   * The quota of ECS detection points for site monitoring.
   */
  siteMonitorEcsProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe;
  /**
   * @remarks
   * The quota of mobile monitoring tasks.
   */
  siteMonitorMobile?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile;
  /**
   * @remarks
   * The quota of carrier detection points for site monitoring.
   */
  siteMonitorOperatorProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe;
  /**
   * @remarks
   * The quota of site monitoring tasks.
   */
  siteMonitorTask?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask;
  /**
   * @remarks
   * The current edition of CloudMonitor. Valid values:
   * - free: Free Edition.
   * - pro: Pro Edition.
   * - cms_post: Pay-as-you-go.
   * 
   * @example
   * pro
   */
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      customMonitor: 'CustomMonitor',
      enterpriseQuota: 'EnterpriseQuota',
      eventMonitor: 'EventMonitor',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      logMonitor: 'LogMonitor',
      phone: 'Phone',
      SMS: 'SMS',
      siteMonitorBrowser: 'SiteMonitorBrowser',
      siteMonitorEcsProbe: 'SiteMonitorEcsProbe',
      siteMonitorMobile: 'SiteMonitorMobile',
      siteMonitorOperatorProbe: 'SiteMonitorOperatorProbe',
      siteMonitorTask: 'SiteMonitorTask',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi,
      customMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor,
      enterpriseQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota,
      eventMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor,
      expireTime: 'string',
      instanceId: 'string',
      logMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor,
      phone: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone,
      SMS: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS,
      siteMonitorBrowser: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser,
      siteMonitorEcsProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe,
      siteMonitorMobile: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile,
      siteMonitorOperatorProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe,
      siteMonitorTask: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask,
      suitInfo: 'string',
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    if(this.customMonitor && typeof (this.customMonitor as any).validate === 'function') {
      (this.customMonitor as any).validate();
    }
    if(this.enterpriseQuota && typeof (this.enterpriseQuota as any).validate === 'function') {
      (this.enterpriseQuota as any).validate();
    }
    if(this.eventMonitor && typeof (this.eventMonitor as any).validate === 'function') {
      (this.eventMonitor as any).validate();
    }
    if(this.logMonitor && typeof (this.logMonitor as any).validate === 'function') {
      (this.logMonitor as any).validate();
    }
    if(this.phone && typeof (this.phone as any).validate === 'function') {
      (this.phone as any).validate();
    }
    if(this.SMS && typeof (this.SMS as any).validate === 'function') {
      (this.SMS as any).validate();
    }
    if(this.siteMonitorBrowser && typeof (this.siteMonitorBrowser as any).validate === 'function') {
      (this.siteMonitorBrowser as any).validate();
    }
    if(this.siteMonitorEcsProbe && typeof (this.siteMonitorEcsProbe as any).validate === 'function') {
      (this.siteMonitorEcsProbe as any).validate();
    }
    if(this.siteMonitorMobile && typeof (this.siteMonitorMobile as any).validate === 'function') {
      (this.siteMonitorMobile as any).validate();
    }
    if(this.siteMonitorOperatorProbe && typeof (this.siteMonitorOperatorProbe as any).validate === 'function') {
      (this.siteMonitorOperatorProbe as any).validate();
    }
    if(this.siteMonitorTask && typeof (this.siteMonitorTask as any).validate === 'function') {
      (this.siteMonitorTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31BC7201-00F2-47B2-B7B9-6A173076ACE
   */
  requestId?: string;
  /**
   * @remarks
   * The quota details of CloudMonitor.
   */
  resourceQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceQuota: 'ResourceQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resourceQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota,
    };
  }

  validate() {
    if(this.resourceQuota && typeof (this.resourceQuota as any).validate === 'function') {
      (this.resourceQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

