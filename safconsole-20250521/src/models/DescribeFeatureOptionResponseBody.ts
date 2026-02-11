// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFeatureOptionResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Feature name.
   * 
   * @example
   * xxx
   */
  featureName?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFeatureOptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  resultObject?: DescribeFeatureOptionResponseBodyResultObject[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
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
      code: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeFeatureOptionResponseBodyResultObject },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

