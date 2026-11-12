// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountAccessIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bound AccessKeyId.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The MD5 value of the multi-cloud AccessKeyId.
   * 
   * @example
   * abcXXXXXXXX
   */
  accessIdMd5?: string;
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The account information of the multi-cloud AccessKeyId. The format is Alibaba Cloud account ID|Alibaba Cloud account name|multi-cloud AccessKeyId.
   * 
   * @example
   * 123xxxxxx|xxxx|ABCXXXXX
   */
  accountStr?: string;
  /**
   * @remarks
   * Indicates whether the AccessKeyId is bound to threat detection and response. Valid values:
   *  - 0: Not bound.
   *  - 1: Bound.
   * 
   * @example
   * 1
   */
  bound?: number;
  /**
   * @remarks
   * The code of the multi-cloud provider.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that corresponds to the multi-cloud AccessKeyId.
   * 
   * @example
   * ABCXXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessIdMd5: 'AccessIdMd5',
      accountId: 'AccountId',
      accountStr: 'AccountStr',
      bound: 'Bound',
      cloudCode: 'CloudCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessIdMd5: 'string',
      accountId: 'string',
      accountStr: 'string',
      bound: 'number',
      cloudCode: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountAccessIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: ListAccountAccessIdResponseBodyData[];
  /**
   * @remarks
   * The returned message description.
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
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      data: { 'type': 'array', 'itemType': ListAccountAccessIdResponseBodyData },
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

