// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAiStaff } from "./AppAiStaff";
import { AppOperationAddress } from "./AppOperationAddress";
import { AppServiceAggregate } from "./AppServiceAggregate";
import { AppInstanceProfile } from "./AppInstanceProfile";
import { TemplateRecord } from "./TemplateRecord";


/**
 */
export class AppInstanceAggregateConversationInfo extends $dara.Model {
  /**
   * @remarks
   * 0 表示存在空会话。
   * 
   * @example
   * 1
   */
  chatNum?: number;
  static names(): { [key: string]: string } {
    return {
      chatNum: 'ChatNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstanceAggregatePartnerDetailBindData extends $dara.Model {
  /**
   * @remarks
   * The external business ID.
   * 
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1672123722000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * Wed Nov 26 10:15:28 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * The record ID.
   */
  id?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * ***********
   */
  mobile?: string;
  /**
   * @remarks
   * The primary key of the parent record.
   * 
   * @example
   * 1123213
   */
  parentPk?: string;
  /**
   * @remarks
   * The partner ID.
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the bound user.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mobile: 'Mobile',
      parentPk: 'ParentPk',
      partnerId: 'PartnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      mobile: 'string',
      parentPk: 'string',
      partnerId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstanceAggregatePartnerDetail extends $dara.Model {
  /**
   * @remarks
   * data
   */
  bindData?: AppInstanceAggregatePartnerDetailBindData;
  /**
   * @remarks
   * The partner ID.
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * The partner binding status. Valid values: BOUND (bound) and UNBOUND (unbound).
   * 
   * @example
   * BOUND
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bindData: 'BindData',
      partnerId: 'PartnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindData: AppInstanceAggregatePartnerDetailBindData,
      partnerId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.bindData && typeof (this.bindData as any).validate === 'function') {
      (this.bindData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstanceAggregateTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**. If you specify this parameter, it cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * Group
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: **1** to **20**. If you specify this parameter, it can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * ufo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppInstanceAggregate extends $dara.Model {
  /**
   * @remarks
   * The list of AI agents associated with the application.
   */
  aiStaffList?: AppAiStaff[];
  /**
   * @remarks
   * The operation address of the application.
   */
  appOperationAddress?: AppOperationAddress;
  /**
   * @remarks
   * The list of service instances associated with the application.
   */
  appServiceList?: AppServiceAggregate[];
  /**
   * @remarks
   * The application subtype.
   * 
   * @example
   * SEO_CONTENT
   */
  appSubType?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * WEBSITE
   */
  appType?: string;
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * The build type.
   * 
   * @example
   * CLOUD_DREAM_SAAS
   */
  buildType?: string;
  /**
   * @remarks
   * 没有关联会话时为 null。
   */
  conversationInfo?: AppInstanceAggregateConversationInfo;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * base
   */
  description?: string;
  /**
   * @remarks
   * The business ID of the design specification.
   * 
   * @example
   * WS20250801151731000007
   */
  designSpecBizId?: string;
  /**
   * @remarks
   * The design specification ID.
   */
  designSpecId?: string;
  /**
   * @remarks
   * The primary domain name.
   * 
   * @example
   * stxycw.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-05T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the associated delivery order.
   * 
   * @example
   * p20202933455
   */
  espBizId?: string;
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
   * The update time.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The publication time.
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
   * The application name.
   * 
   * @example
   * docs
   */
  name?: string;
  /**
   * @remarks
   * The partner details.
   */
  partnerDetail?: AppInstanceAggregatePartnerDetail;
  /**
   * @remarks
   * The configuration and runtime information of the application instance.
   */
  profile?: AppInstanceProfile;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2smovqqpvuly
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The website domain name.
   * 
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  /**
   * @remarks
   * The application identifier.
   * 
   * @example
   * 31104757
   */
  slug?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-03-24T10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * trial,draft,live,refunded,expired,released
   * 
   * @example
   * live
   */
  status?: string;
  /**
   * @remarks
   * The status text.
   * 
   * @example
   * Published
   */
  statusText?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: AppInstanceAggregateTags[];
  /**
   * @remarks
   * The application template record information.
   */
  templateRecord?: TemplateRecord;
  /**
   * @remarks
   * The URL of the application thumbnail.
   * 
   * @example
   * thumbnails/WS20250626112715000001/thumbnail.jpg
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123241414
   */
  userId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 2019-04-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aiStaffList: 'AiStaffList',
      appOperationAddress: 'AppOperationAddress',
      appServiceList: 'AppServiceList',
      appSubType: 'AppSubType',
      appType: 'AppType',
      bizId: 'BizId',
      buildType: 'BuildType',
      conversationInfo: 'ConversationInfo',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      description: 'Description',
      designSpecBizId: 'DesignSpecBizId',
      designSpecId: 'DesignSpecId',
      domain: 'Domain',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtDelete: 'GmtDelete',
      gmtModified: 'GmtModified',
      gmtPublish: 'GmtPublish',
      iconUrl: 'IconUrl',
      name: 'Name',
      partnerDetail: 'PartnerDetail',
      profile: 'Profile',
      resourceGroupId: 'ResourceGroupId',
      siteHost: 'SiteHost',
      slug: 'Slug',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      tags: 'Tags',
      templateRecord: 'TemplateRecord',
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiStaffList: { 'type': 'array', 'itemType': AppAiStaff },
      appOperationAddress: AppOperationAddress,
      appServiceList: { 'type': 'array', 'itemType': AppServiceAggregate },
      appSubType: 'string',
      appType: 'string',
      bizId: 'string',
      buildType: 'string',
      conversationInfo: AppInstanceAggregateConversationInfo,
      createTime: 'string',
      deleted: 'number',
      description: 'string',
      designSpecBizId: 'string',
      designSpecId: 'string',
      domain: 'string',
      endTime: 'string',
      espBizId: 'string',
      gmtDelete: 'string',
      gmtModified: 'string',
      gmtPublish: 'string',
      iconUrl: 'string',
      name: 'string',
      partnerDetail: AppInstanceAggregatePartnerDetail,
      profile: AppInstanceProfile,
      resourceGroupId: 'string',
      siteHost: 'string',
      slug: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusText: 'string',
      tags: { 'type': 'array', 'itemType': AppInstanceAggregateTags },
      templateRecord: TemplateRecord,
      thumbnailUrl: 'string',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiStaffList)) {
      $dara.Model.validateArray(this.aiStaffList);
    }
    if(this.appOperationAddress && typeof (this.appOperationAddress as any).validate === 'function') {
      (this.appOperationAddress as any).validate();
    }
    if(Array.isArray(this.appServiceList)) {
      $dara.Model.validateArray(this.appServiceList);
    }
    if(this.conversationInfo && typeof (this.conversationInfo as any).validate === 'function') {
      (this.conversationInfo as any).validate();
    }
    if(this.partnerDetail && typeof (this.partnerDetail as any).validate === 'function') {
      (this.partnerDetail as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.templateRecord && typeof (this.templateRecord as any).validate === 'function') {
      (this.templateRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

