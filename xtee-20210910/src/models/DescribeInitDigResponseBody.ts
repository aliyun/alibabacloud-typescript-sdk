// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitDigResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Prompt information
   * 
   * @example
   * 阿里云内部测试
   */
  tipInfo?: string;
  static names(): { [key: string]: string } {
    return {
      tipInfo: 'TipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tipInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInitDigResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
   */
  resultObject?: DescribeInitDigResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeInitDigResponseBodyResultObject,
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

