// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagOptionResponseBodyTagOptionDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag option is enabled. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The key of the tag option.
   * 
   * The key must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the tag option belongs.
   * 
   * @example
   * 133413081827****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * @example
   * tag-bp1r3mxq3t****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * The value must be 1 to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A48A5F12-6098-54A1-A389-6834AF27****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the tag option.
   */
  tagOptionDetail?: CreateTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: CreateTagOptionResponseBodyTagOptionDetail,
    };
  }

  validate() {
    if(this.tagOptionDetail && typeof (this.tagOptionDetail as any).validate === 'function') {
      (this.tagOptionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

