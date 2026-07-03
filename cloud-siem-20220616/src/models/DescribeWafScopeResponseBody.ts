// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafScopeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The list of domain names that are protected by the WAF instance.
   * 
   * @example
   * [123.com, 456.com]
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-tl123ast****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      domains: 'Domains',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
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

export class DescribeWafScopeResponseBody extends $dara.Model {
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
  data?: DescribeWafScopeResponseBodyData[];
  /**
   * @remarks
   * The message returned.
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
      data: { 'type': 'array', 'itemType': DescribeWafScopeResponseBodyData },
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

