// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerRequestAppInstanceProfile extends $dara.Model {
  /**
   * @remarks
   * Deployment region
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * Lingxiao instance ID
   * 
   * @example
   * 12313213
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 222217928591
   */
  orderId?: string;
  /**
   * @remarks
   * Version
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * DC4D30B7BADDAFE9928A6C36416A2A4C
   */
  templateEtag?: string;
  /**
   * @remarks
   * Model template ID
   * 
   * @example
   * ST20211231160247sYG4
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      deployArea: 'DeployArea',
      lxInstanceId: 'LxInstanceId',
      orderId: 'OrderId',
      siteVersion: 'SiteVersion',
      templateEtag: 'TemplateEtag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployArea: 'string',
      lxInstanceId: 'string',
      orderId: 'string',
      siteVersion: 'string',
      templateEtag: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAppInstanceForPartnerRequestAppInstance extends $dara.Model {
  /**
   * @remarks
   * Application Type: WEBSITE
   * 
   * @example
   * WEBSITE
   */
  appType?: string;
  /**
   * @remarks
   * Website business ID
   * 
   * @example
   * WD20250711094503000001
   */
  bizId?: string;
  /**
   * @remarks
   * Logical deletion
   * 
   * @example
   * fase
   */
  deleted?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * alliveout.xntv.tv
   */
  domain?: string;
  /**
   * @remarks
   * Event end time (UNIX timestamp).
   * 
   * @example
   * 2024-08-23T02:14:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Deletion time
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtDelete?: string;
  /**
   * @remarks
   * Vulnerability published UNIX timestamp, in milliseconds.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtPublish?: string;
  /**
   * @remarks
   * Application icon URL.
   * 
   * @example
   * icon/WS20250626112715000001/thumbnail.jpg
   */
  iconUrl?: string;
  /**
   * @remarks
   * Website name
   * 
   * @example
   * AI建站
   */
  name?: string;
  /**
   * @remarks
   * Website configuration information
   * 
   * @example
   * 网站配置信息
   */
  profile?: SyncAppInstanceForPartnerRequestAppInstanceProfile;
  /**
   * @remarks
   * siteId
   * 
   * @example
   * xxxx.scd.wezhan.cn
   */
  siteHost?: string;
  /**
   * @remarks
   * Website SiteID
   * 
   * @example
   * 31104757
   */
  slug?: string;
  /**
   * @remarks
   * Query start time. If no start and end times are provided, all historical deployment records of the instance are queried.
   * 
   * @example
   * 2025-07-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Instance running status.  
   * - NotRun: Not running  
   * - Running: Running  
   * - WaitTime: Waiting for TriggerTime  
   * - CheckingCondition: Checking branch conditions  
   * - WaitResource: Waiting for resources  
   * - Failure: Execution failed  
   * - Success: Execution succeeded  
   * - Checking: Sent to Data Quality check
   * 
   * @example
   * {\\"Phase\\": \\"Running\\", \\"SlotNum\\": 1, \\"UsedCapacity\\": \\"500.0Gi\\"}
   */
  status?: string;
  /**
   * @remarks
   * Thumbnail URL.
   * 
   * @example
   * thumbnails/WS20250626112715000001/thumbnail.jpg
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * 123123123131232
   * 
   * @example
   * 12313213131
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      bizId: 'BizId',
      deleted: 'Deleted',
      domain: 'Domain',
      endTime: 'EndTime',
      gmtDelete: 'GmtDelete',
      gmtPublish: 'GmtPublish',
      iconUrl: 'IconUrl',
      name: 'Name',
      profile: 'Profile',
      siteHost: 'SiteHost',
      slug: 'Slug',
      startTime: 'StartTime',
      status: 'Status',
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      bizId: 'string',
      deleted: 'string',
      domain: 'string',
      endTime: 'string',
      gmtDelete: 'string',
      gmtPublish: 'string',
      iconUrl: 'string',
      name: 'string',
      profile: SyncAppInstanceForPartnerRequestAppInstanceProfile,
      siteHost: 'string',
      slug: 'string',
      startTime: 'string',
      status: 'string',
      thumbnailUrl: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAppInstanceForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * Application instance object data
   */
  appInstance?: SyncAppInstanceForPartnerRequestAppInstance;
  /**
   * @remarks
   * Type of system event. CREATE, UPDATE, COMPLETE
   * 
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @remarks
   * Operator ID
   * 
   * @example
   * system
   */
  operator?: string;
  /**
   * @remarks
   * Source business ID.
   * 
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @remarks
   * Source: MARKET_CLOUD_DREAM
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstance: 'AppInstance',
      eventType: 'EventType',
      operator: 'Operator',
      sourceBizId: 'SourceBizId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstance: SyncAppInstanceForPartnerRequestAppInstance,
      eventType: 'string',
      operator: 'string',
      sourceBizId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(this.appInstance && typeof (this.appInstance as any).validate === 'function') {
      (this.appInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

