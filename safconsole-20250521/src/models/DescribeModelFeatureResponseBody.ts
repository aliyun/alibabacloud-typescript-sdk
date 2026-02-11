// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelFeatureResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Default value of the feature.
   * 
   * @example
   * 0.1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Feature mapping name.
   * 
   * @example
   * f1
   */
  featureName?: string;
  /**
   * @remarks
   * Feature type.
   * 
   * @example
   * double
   */
  featureType?: string;
  /**
   * @remarks
   * Feature name.
   * 
   * @example
   * f1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureName: 'string',
      featureType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelFeatureResponseBody extends $dara.Model {
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
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  resultObject?: DescribeModelFeatureResponseBodyResultObject[];
  /**
   * @remarks
   * Whether the call was successful.
   * 
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
      code: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeModelFeatureResponseBodyResultObject },
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

