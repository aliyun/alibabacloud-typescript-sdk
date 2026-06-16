// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiLimitResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the maximum number is exceeded.
   * 
   * @example
   * true
   */
  limit?: boolean;
  /**
   * @remarks
   * The maximum number of items that can be created.
   * 
   * @example
   * 150
   */
  maxTotalItem?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 31
   */
  totalItem?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      maxTotalItem: 'maxTotalItem',
      totalItem: 'totalItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'boolean',
      maxTotalItem: 'number',
      totalItem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeApiLimitResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeApiLimitResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

