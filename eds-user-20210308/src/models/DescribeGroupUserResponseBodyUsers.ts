// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * xx-xx-xx
   */
  address?: string;
  /**
   * @example
   * https://avatar.****.com
   */
  avatar?: string;
  /**
   * @example
   * alex****@aliyun.com
   */
  email?: string;
  /**
   * @example
   * alex****
   */
  endUserId?: string;
  /**
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-08-26T02:59:22.000+00:00
   */
  gmtJoinGroup?: string;
  /**
   * @example
   * 123
   */
  jobNumber?: string;
  /**
   * @example
   * alex
   */
  nickName?: string;
  /**
   * @example
   * 188888****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      avatar: 'Avatar',
      email: 'Email',
      endUserId: 'EndUserId',
      gmtCreated: 'GmtCreated',
      gmtJoinGroup: 'GmtJoinGroup',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      avatar: 'string',
      email: 'string',
      endUserId: 'string',
      gmtCreated: 'string',
      gmtJoinGroup: 'string',
      jobNumber: 'string',
      nickName: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

