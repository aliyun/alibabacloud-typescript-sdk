// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerModuleMetaInfoResponseBodyResultObjectFeatureList extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  defaultValue?: string;
  /**
   * @example
   * f1
   */
  featureName?: string;
  /**
   * @example
   * double
   */
  featureType?: string;
  /**
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

export class DescribeCustomerModuleMetaInfoResponseBodyResultObject extends $dara.Model {
  featureList?: DescribeCustomerModuleMetaInfoResponseBodyResultObjectFeatureList[];
  /**
   * @example
   * FINANCE_60
   */
  featureTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      featureList: 'FeatureList',
      featureTemplate: 'FeatureTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureList: { 'type': 'array', 'itemType': DescribeCustomerModuleMetaInfoResponseBodyResultObjectFeatureList },
      featureTemplate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerModuleMetaInfoResponseBody extends $dara.Model {
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
   * 055f1546-f465-4c92-a2da-bfb86abe6f56
   */
  requestId?: string;
  resultObject?: DescribeCustomerModuleMetaInfoResponseBodyResultObject;
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
      resultObject: DescribeCustomerModuleMetaInfoResponseBodyResultObject,
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

