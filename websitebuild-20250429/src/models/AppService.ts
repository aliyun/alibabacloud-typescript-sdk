// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppServiceProfile } from "./AppServiceProfile";


export class AppService extends $dara.Model {
  bizId?: string;
  createTime?: string;
  deleted?: number;
  endTime?: string;
  espBizId?: string;
  gmtModified?: string;
  instanceBizId?: string;
  name?: string;
  profile?: AppServiceProfile;
  serviceType?: string;
  serviceTypeText?: string;
  slug?: string;
  startTime?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtModified: 'GmtModified',
      instanceBizId: 'InstanceBizId',
      name: 'Name',
      profile: 'Profile',
      serviceType: 'ServiceType',
      serviceTypeText: 'ServiceTypeText',
      slug: 'Slug',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      createTime: 'string',
      deleted: 'number',
      endTime: 'string',
      espBizId: 'string',
      gmtModified: 'string',
      instanceBizId: 'string',
      name: 'string',
      profile: AppServiceProfile,
      serviceType: 'string',
      serviceTypeText: 'string',
      slug: 'string',
      startTime: 'string',
      status: 'string',
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

