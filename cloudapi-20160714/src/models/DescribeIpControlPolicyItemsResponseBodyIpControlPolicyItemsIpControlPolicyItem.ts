// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 11112
   */
  appId?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks.
   * 
   * @example
   * 113.125.XX.XX;101.11.XX.XX
   */
  cidrIp?: string;
  /**
   * @remarks
   * The time when the policy was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the policy was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:25:13Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * P151617000829241
   */
  policyItemId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      policyItemId: 'PolicyItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      policyItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

