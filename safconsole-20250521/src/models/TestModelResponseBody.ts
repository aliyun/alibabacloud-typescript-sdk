// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestModelResponseBodyResultObjectTestResult extends $dara.Model {
  /**
   * @example
   * 0.00
   */
  actualResult?: string;
  /**
   * @example
   * true
   */
  consistency?: boolean;
  /**
   * @example
   * 0.00
   */
  testResult?: string;
  /**
   * @example
   * 0.00
   */
  trainResult?: string;
  static names(): { [key: string]: string } {
    return {
      actualResult: 'ActualResult',
      consistency: 'Consistency',
      testResult: 'TestResult',
      trainResult: 'TrainResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualResult: 'string',
      consistency: 'boolean',
      testResult: 'string',
      trainResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestModelResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 49.0
   */
  consistencyCount?: number;
  /**
   * @example
   * 98.0
   */
  consistencyRate?: number;
  testResult?: TestModelResponseBodyResultObjectTestResult[];
  /**
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      consistencyCount: 'ConsistencyCount',
      consistencyRate: 'ConsistencyRate',
      testResult: 'TestResult',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistencyCount: 'number',
      consistencyRate: 'number',
      testResult: { 'type': 'array', 'itemType': TestModelResponseBodyResultObjectTestResult },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.testResult)) {
      $dara.Model.validateArray(this.testResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestModelResponseBody extends $dara.Model {
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
  resultObject?: TestModelResponseBodyResultObject;
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
      resultObject: TestModelResponseBodyResultObject,
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

