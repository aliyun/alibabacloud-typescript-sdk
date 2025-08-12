// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutHybridMonitorMetricDataResponseBodyErrorDetail extends $dara.Model {
  /**
   * @remarks
   * The error message of the invalid parameter.
   * 
   * @example
   * label name :123 not match [a-zA-Z_][a-zA-Z0-9_]*
   */
  errorMessage?: string;
  /**
   * @remarks
   * The position of the error message in the array.
   * 
   * @example
   * 0
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of invalid parameters.
   * 
   * If a request parameter is invalid, the details of the invalid parameter are returned.
   */
  errorDetail?: PutHybridMonitorMetricDataResponseBodyErrorDetail[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DB1CBCA-D14A-55FA-814F-B4DBD9735F68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorDetail: 'ErrorDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorDetail: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataResponseBodyErrorDetail },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetail)) {
      $dara.Model.validateArray(this.errorDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

