// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInputFeildCountByEventCodeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Whether it exceeds the maximum quantity
   * 
   * @example
   * true
   */
  limit?: boolean;
  /**
   * @remarks
   * Maximum number of created items
   * 
   * @example
   * 100
   */
  maxTotalItem?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 8
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

export class DescribeInputFeildCountByEventCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeInputFeildCountByEventCodeResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeInputFeildCountByEventCodeResponseBodyResultObject,
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

