// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerModuleOutputInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 2
   */
  finalScoreFormat?: string;
  /**
   * @example
   * score
   */
  processExpression?: string;
  /**
   * @example
   * customer/xxxxxxxxx/xxxxxxxx.pmml
   */
  testFile?: string;
  static names(): { [key: string]: string } {
    return {
      finalScoreFormat: 'FinalScoreFormat',
      processExpression: 'ProcessExpression',
      testFile: 'TestFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalScoreFormat: 'string',
      processExpression: 'string',
      testFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerModuleOutputInfoResponseBody extends $dara.Model {
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
   * success
   */
  message?: string;
  /**
   * @example
   * 055f1546-f465-4c92-a2da-bfb86abe6f56
   */
  requestId?: string;
  resultObject?: DescribeCustomerModuleOutputInfoResponseBodyResultObject;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeCustomerModuleOutputInfoResponseBodyResultObject,
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

