// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The average time consumed, in milliseconds.
   */
  avgTimeCostMs?: number;
  /**
   * @remarks
   * The number of abnormal change orders.
   * 
   * @example
   * 1
   */
  error?: number;
  /**
   * @remarks
   * The percentage of failed change orders.
   * 
   * @example
   * 0.25
   */
  errorPercent?: number;
  /**
   * @remarks
   * The maximum time consumed, in milliseconds.
   */
  maxTimeCostMs?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The optimization suggestions.
   */
  optimizeSuggestions?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The average time consumed by the task, in milliseconds.
   */
  taskTimeCostMsAvg?: string;
  /**
   * @remarks
   * The total number of change orders.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      avgTimeCostMs: 'AvgTimeCostMs',
      error: 'Error',
      errorPercent: 'ErrorPercent',
      maxTimeCostMs: 'MaxTimeCostMs',
      name: 'Name',
      optimizeSuggestions: 'OptimizeSuggestions',
      regionId: 'RegionId',
      taskTimeCostMsAvg: 'TaskTimeCostMsAvg',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      avgTimeCostMs: 'number',
      error: 'number',
      errorPercent: 'number',
      maxTimeCostMs: 'number',
      name: 'string',
      optimizeSuggestions: 'string',
      regionId: 'string',
      taskTimeCostMsAvg: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of application information.
   */
  data?: GetChangeOrderMetricResponseBodyData[];
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B763F98-0BA2-5C23-B6B8-558568D2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the service list was retrieved. Valid values:
   * 
   * - **true**: The service list was retrieved.
   * - **false**: The retrieval failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChangeOrderMetricResponseBodyData },
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

