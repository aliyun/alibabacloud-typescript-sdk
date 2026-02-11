// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerModuleOutputInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of decimal places for the output.
   * 
   * @example
   * 2
   */
  finalScoreFormat?: string;
  /**
   * @remarks
   * Score processing logic.
   * 
   * @example
   * score
   */
  processExpression?: string;
  /**
   * @remarks
   * Test file.
   * 
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
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 055f1546-f465-4c92-a2da-bfb86abe6f56
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  resultObject?: DescribeCustomerModuleOutputInfoResponseBodyResultObject;
  /**
   * @remarks
   * Indicates whether the request was successful, with possible values as follows:
   * - true, indicating the request was successful
   * - false, indicating the request failed
   * 
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

