// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagOptionResponseBodyTagOptionDetail extends $dara.Model {
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
   * The key must be 1 to 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
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
   * tag-bp1u6mdf3d****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * The value must be 1 to 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
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

export class UpdateTagOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the tag option.
   */
  tagOptionDetail?: UpdateTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: UpdateTagOptionResponseBodyTagOptionDetail,
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

