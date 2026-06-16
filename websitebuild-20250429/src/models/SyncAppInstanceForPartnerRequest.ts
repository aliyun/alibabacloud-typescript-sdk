// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerRequestAppInstanceProfile extends $dara.Model {
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * The LingXiao instance ID.
   * 
   * @example
   * 12313213
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 222217928591
   */
  orderId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The template identifier.
   * 
   * @example
   * DC4D30B7BADDAFE9928A6C36416A2A4C
   */
  templateEtag?: string;
  /**
   * @remarks
   * The model template ID.
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
   * The application type. Set this parameter to WEBSITE.
   * 
   * @example
   * WEBSITE
   */
  appType?: string;
  /**
   * @remarks
   * The website business ID.
   * 
   * @example
   * WD20250711094503000001
   */
  bizId?: string;
  /**
   * @remarks
   * Specifies whether the instance is logically deleted.
   * 
   * @example
   * fase
   */
  deleted?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * alliveout.xntv.tv
   */
  domain?: string;
  /**
   * @remarks
   * The end time of the event, in UNIX timestamp format.
   * 
   * @example
   * 2024-08-23T02:14:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The deletion time.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtDelete?: string;
  /**
   * @remarks
   * The timestamp when the vulnerability was published, in milliseconds.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtPublish?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * icon/WS20250626112715000001/thumbnail.jpg
   */
  iconUrl?: string;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * AI建站
   */
  name?: string;
  /**
   * @remarks
   * The website configuration information.
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
   * The website SiteID.
   * 
   * @example
   * 31104757
   */
  slug?: string;
  /**
   * @remarks
   * The start time of the query. If you do not specify the start time or end time, all historical deployment records of the instance are queried.
   * 
   * @example
   * 2025-07-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * - NotRun: not running.
   * - Running: running.
   * - WaitTime: waiting for TriggerTime.
   * - CheckingCondition: checking branch conditions.
   * - WaitResource: waiting for resources.
   * - Failure: execution failed.
   * - Success: execution succeeded.
   * - Checking: submitted for data quality check.
   * 
   * @example
   * {\\"Phase\\": \\"Running\\", \\"SlotNum\\": 1, \\"UsedCapacity\\": \\"500.0Gi\\"}
   */
  status?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
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
   * The website instance object data.
   */
  appInstance?: SyncAppInstanceForPartnerRequestAppInstance;
  /**
   * @remarks
   * The type of the system event. Valid values: CREATE, UPDATE, and COMPLETE.
   * 
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @remarks
   * The employee ID of the operator.
   * 
   * @example
   * system
   */
  operator?: string;
  /**
   * @remarks
   * The source business ID.
   * 
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
   * @remarks
   * The source. Set this parameter to MARKET_CLOUD_DREAM.
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

