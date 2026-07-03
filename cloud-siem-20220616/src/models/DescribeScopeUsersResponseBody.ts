// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScopeUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID in Security Information and Event Management (SIEM).
   * 
   * @example
   * 123456789****
   */
  aliUid?: number;
  /**
   * @remarks
   * The cloud code. Valid values:
   * 
   * - qcloud: Tencent Cloud
   * 
   * - hcloud: Huawei Cloud
   * 
   * @example
   * qcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The list of domain names protected by the WAF instance.
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
   * The multicloud user ID.
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

export class DescribeScopeUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeScopeUsersResponseBodyData[];
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeScopeUsersResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

