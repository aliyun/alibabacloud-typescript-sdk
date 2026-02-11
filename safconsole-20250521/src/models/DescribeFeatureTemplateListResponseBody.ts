// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFeatureTemplateListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Parameter label.
   * 
   * @example
   * 51维特征
   */
  label?: string;
  /**
   * @remarks
   * Label value.
   * 
   * @example
   * FINANCE_51
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFeatureTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
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
  resultObject?: DescribeFeatureTemplateListResponseBodyResultObject[];
  /**
   * @remarks
   * Success flag
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
      resultObject: { 'type': 'array', 'itemType': DescribeFeatureTemplateListResponseBodyResultObject },
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

