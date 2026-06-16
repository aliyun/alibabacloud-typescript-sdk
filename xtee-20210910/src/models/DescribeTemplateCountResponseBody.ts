// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateCountResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The template quantity limit.
   * 
   * @example
   * false
   */
  limit?: boolean;
  /**
   * @remarks
   * The maximum number of items.
   * 
   * @example
   * 1000
   */
  maxTotalItem?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 13
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

export class DescribeTemplateCountResponseBody extends $dara.Model {
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
  resultObject?: DescribeTemplateCountResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeTemplateCountResponseBodyResultObject,
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

