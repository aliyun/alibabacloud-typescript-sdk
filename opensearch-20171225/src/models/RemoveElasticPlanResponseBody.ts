// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveElasticPlanResponseBody extends $dara.Model {
  /**
   * @example
   * ElasticPlan.NotFound
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * Elastic plan not found
   */
  message?: string;
  /**
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @example
   * -
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

