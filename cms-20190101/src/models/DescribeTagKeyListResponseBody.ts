// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeyListResponseBodyTagKeys extends $dara.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter PageSize is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B04B8CF3-4489-432D-83BA-6F128E5F2293
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  tagKeys?: DescribeTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagKeys: DescribeTagKeyListResponseBodyTagKeys,
    };
  }

  validate() {
    if(this.tagKeys && typeof (this.tagKeys as any).validate === 'function') {
      (this.tagKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

