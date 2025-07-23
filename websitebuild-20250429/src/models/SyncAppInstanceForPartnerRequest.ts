// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncAppInstanceForPartnerRequestAppInstanceProfile extends $dara.Model {
  /**
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * 12313213
   */
  lxInstanceId?: string;
  /**
   * @example
   * 222217928591
   */
  orderId?: string;
  /**
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @example
   * DC4D30B7BADDAFE9928A6C36416A2A4C
   */
  templateEtag?: string;
  /**
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
   * @example
   * WEBSITE
   */
  appType?: string;
  /**
   * @example
   * WD20250711094503000001
   */
  bizId?: string;
  /**
   * @example
   * fase
   */
  deleted?: string;
  /**
   * @example
   * alliveout.xntv.tv
   */
  domain?: string;
  /**
   * @example
   * 2024-08-23T02:14:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  gmtDelete?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  gmtPublish?: string;
  /**
   * @example
   * icon/WS20250626112715000001/thumbnail.jpg
   */
  iconUrl?: string;
  name?: string;
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
   * @example
   * 31104757
   */
  slug?: string;
  /**
   * @example
   * 2025-07-15T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * {\\"Phase\\": \\"Running\\", \\"SlotNum\\": 1, \\"UsedCapacity\\": \\"500.0Gi\\"}
   */
  status?: string;
  /**
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
  appInstance?: SyncAppInstanceForPartnerRequestAppInstance;
  /**
   * @example
   * CREATE
   */
  eventType?: string;
  /**
   * @example
   * system
   */
  operator?: string;
  /**
   * @example
   * 31104757
   */
  sourceBizId?: string;
  /**
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

