// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValueListResponseBodyTagValues extends $dara.Model {
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValue)) {
      $dara.Model.validateArray(this.tagValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBody extends $dara.Model {
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
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B04B8CF3-4489-432D-83BA-6F128E4F2295
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
  tagValues?: DescribeTagValueListResponseBodyTagValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagValues: DescribeTagValueListResponseBodyTagValues,
    };
  }

  validate() {
    if(this.tagValues && typeof (this.tagValues as any).validate === 'function') {
      (this.tagValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

