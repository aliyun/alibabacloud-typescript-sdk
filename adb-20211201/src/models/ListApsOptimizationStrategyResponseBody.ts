// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsOptimizationStrategyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the lifecycle management policy. Valid values:
   * 
   * 1.  on: enabled.
   * 2.  off: disabled.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The description of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyDesc?: string;
  /**
   * @remarks
   * The name of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The type of the lifecycle management policy. Only StrategyValue is returned.
   * 
   * @example
   * StrategyValue
   */
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      status: 'Status',
      strategyDesc: 'StrategyDesc',
      strategyName: 'StrategyName',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      status: 'string',
      strategyDesc: 'string',
      strategyName: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApsOptimizationStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * -
   */
  data?: ListApsOptimizationStrategyResponseBodyData[];
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListApsOptimizationStrategyResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

