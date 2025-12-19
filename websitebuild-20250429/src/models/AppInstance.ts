// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppInstanceProfile } from "./AppInstanceProfile";


export class AppInstance extends $dara.Model {
  appSubType?: string;
  appType?: string;
  bizId?: string;
  buildType?: string;
  deleted?: number;
  description?: string;
  designSpecBizId?: string;
  designSpecId?: string;
  domain?: string;
  endTime?: string;
  espBizId?: string;
  gmtCreate?: string;
  gmtDelete?: string;
  gmtModified?: string;
  gmtPublish?: string;
  iconUrl?: string;
  name?: string;
  profile?: AppInstanceProfile;
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
  thumbnailUrl?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appSubType: 'AppSubType',
      appType: 'AppType',
      bizId: 'BizId',
      buildType: 'BuildType',
      deleted: 'Deleted',
      description: 'Description',
      designSpecBizId: 'DesignSpecBizId',
      designSpecId: 'DesignSpecId',
      domain: 'Domain',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtDelete: 'GmtDelete',
      gmtModified: 'GmtModified',
      gmtPublish: 'GmtPublish',
      iconUrl: 'IconUrl',
      name: 'Name',
      profile: 'Profile',
      siteHost: 'SiteHost',
      slug: 'Slug',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSubType: 'string',
      appType: 'string',
      bizId: 'string',
      buildType: 'string',
      deleted: 'number',
      description: 'string',
      designSpecBizId: 'string',
      designSpecId: 'string',
      domain: 'string',
      endTime: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtDelete: 'string',
      gmtModified: 'string',
      gmtPublish: 'string',
      iconUrl: 'string',
      name: 'string',
      profile: AppInstanceProfile,
      siteHost: 'string',
      slug: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusText: 'string',
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

