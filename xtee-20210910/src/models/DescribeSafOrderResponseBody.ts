// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafOrderResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Expiration date (timestamp).
   * 
   * @example
   * 1755076800000
   */
  expirationDate?: number;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'expirationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafOrderResponseBody extends $dara.Model {
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
   * Returned object.
   */
  resultObject?: DescribeSafOrderResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeSafOrderResponseBodyResultObject,
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

