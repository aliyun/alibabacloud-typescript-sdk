// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagOptionResponseBodyTagOptionDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag option is enabled. Valid values:
   * 
   * *   true
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
   * tag-bp15qmwz3r****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
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

export class GetTagOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1509725-055D-5C7B-9420-8B737DBD****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the tag option.
   */
  tagOptionDetail?: GetTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: GetTagOptionResponseBodyTagOptionDetail,
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

