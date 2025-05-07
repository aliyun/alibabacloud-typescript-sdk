// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesSessions extends $dara.Model {
  nickName?: string;
  /**
   * @example
   * 2025-01-22T11:03:36Z
   */
  resourceSessionStartTime?: string;
  /**
   * @example
   * user001
   */
  userId?: string;
  /**
   * @example
   * benchmark_test@test.shenzhen
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      resourceSessionStartTime: 'ResourceSessionStartTime',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      resourceSessionStartTime: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

