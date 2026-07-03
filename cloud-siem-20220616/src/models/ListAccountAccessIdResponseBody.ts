// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountAccessIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The attached AccessKey ID.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The MD5 value of the multicloud AccessKey ID.
   * 
   * @example
   * abcXXXXXXXX
   */
  accessIdMd5?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The information of the account to which the multicloud AccessKey ID belongs. The format is: Alibaba Cloud account ID|Alibaba Cloud account name|Multicloud AccessKey ID.
   * 
   * @example
   * 123xxxxxx|xxxx|ABCXXXXX
   */
  accountStr?: string;
  /**
   * @remarks
   * Indicates whether the AccessKey ID is attached to threat analysis. Valid values:
   * 
   * - 0: Not attached.
   * 
   * - 1: Attached.
   * 
   * @example
   * 1
   */
  bound?: number;
  /**
   * @remarks
   * The code for the multicloud environment.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that corresponds to the multicloud AccessKey ID.
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
   * The data returned.
   */
  data?: ListAccountAccessIdResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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

