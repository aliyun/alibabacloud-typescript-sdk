// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelDetailsByIdResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Model prediction result.
   * 
   * @example
   * {\\"AUC\\":0.9895246624946594,\\"Count\\":2489,\\"DecisionMark\\":[0.0,0.0010000000474974513,0.05287817938420348,0.0]}
   */
  modelEffectEvaluation?: string;
  static names(): { [key: string]: string } {
    return {
      modelEffectEvaluation: 'modelEffectEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelEffectEvaluation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelDetailsByIdResponseBody extends $dara.Model {
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
   * Returned result information
   */
  resultObject?: DescribeModelDetailsByIdResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeModelDetailsByIdResponseBodyResultObject },
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

