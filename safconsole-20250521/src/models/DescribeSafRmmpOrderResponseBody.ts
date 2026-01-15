// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafRmmpOrderResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * true
   */
  accessible?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessible: 'Accessible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafRmmpOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  resultObject?: DescribeSafRmmpOrderResponseBodyResultObject;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      resultObject: DescribeSafRmmpOrderResponseBodyResultObject,
      success: 'boolean',
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

