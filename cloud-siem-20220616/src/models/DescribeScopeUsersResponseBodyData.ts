// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScopeUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the security information and event management (SIEM) user.
   * 
   * @example
   * 123456789****
   */
  aliUid?: number;
  /**
   * @remarks
   * 云code。  取值：
   * - qcloud：腾讯云
   * - hcloud：华为云
   * 
   * @example
   * qcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * An array consisting of the domain names that are protected by the WAF instance.
   * 
   * @example
   * [123.com, 456.com]
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * @example
   * waf-cn-tl123ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * 多云用户ID。
   * 
   * @example
   * 123456789****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test001
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cloudCode: 'CloudCode',
      domains: 'Domains',
      instanceId: 'InstanceId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cloudCode: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

