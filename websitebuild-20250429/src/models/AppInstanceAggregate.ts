// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppAiStaff } from "./AppAiStaff";
import { AppOperationAddress } from "./AppOperationAddress";
import { AppServiceAggregate } from "./AppServiceAggregate";
import { AppInstanceProfile } from "./AppInstanceProfile";


/**
 */
export class AppInstanceAggregatePartnerDetailBindData extends $dara.Model {
  bizId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  mobile?: string;
  parentPk?: string;
  partnerId?: string;
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
  bindData?: AppInstanceAggregatePartnerDetailBindData;
  partnerId?: string;
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
  tagKey?: string;
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
  aiStaffList?: AppAiStaff[];
  appOperationAddress?: AppOperationAddress;
  appServiceList?: AppServiceAggregate[];
  appSubType?: string;
  appType?: string;
  bizId?: string;
  buildType?: string;
  createTime?: string;
  deleted?: number;
  description?: string;
  designSpecBizId?: string;
  designSpecId?: string;
  domain?: string;
  endTime?: string;
  espBizId?: string;
  gmtDelete?: string;
  gmtModified?: string;
  gmtPublish?: string;
  iconUrl?: string;
  name?: string;
  partnerDetail?: AppInstanceAggregatePartnerDetail;
  profile?: AppInstanceProfile;
  resourceGroupId?: string;
  siteHost?: string;
  slug?: string;
  sourceType?: string;
  startTime?: string;
  /**
   * @remarks
   * trial,draft,live,refunded,expired,released
   */
  status?: string;
  statusText?: string;
  tags?: AppInstanceAggregateTags[];
  thumbnailUrl?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aiStaffList: 'AiStaffList',
      appOperationAddress: 'AppOperationAddress',
      appServiceList: 'AppServiceList',
      appSubType: 'AppSubType',
      appType: 'AppType',
      bizId: 'BizId',
      buildType: 'BuildType',
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
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
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
      thumbnailUrl: 'string',
      userId: 'string',
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
    if(this.partnerDetail && typeof (this.partnerDetail as any).validate === 'function') {
      (this.partnerDetail as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

