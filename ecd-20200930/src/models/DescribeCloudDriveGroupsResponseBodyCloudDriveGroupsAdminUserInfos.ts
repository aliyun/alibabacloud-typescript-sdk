// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos extends $dara.Model {
  email?: string;
  endUserId?: string;
  jobNumber?: string;
  nickName?: string;
  phone?: string;
  realNickName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      jobNumber: 'string',
      nickName: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

