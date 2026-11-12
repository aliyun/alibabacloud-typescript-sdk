// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShareImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs to which the image is shared.
   */
  aliUidList?: number[];
  static names(): { [key: string]: string } {
    return {
      aliUidList: 'AliUidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUidList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.aliUidList)) {
      $dara.Model.validateArray(this.aliUidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShareImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Image.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The returned object.
   * 
   * @example
   * None
   */
  data?: DescribeShareImageResponseBodyData;
  /**
   * @remarks
   * The message returned by the request.
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
   * 01A0C2ED-95F2-1A37-9FC6-4A395179****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      code: 'string',
      data: DescribeShareImageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

