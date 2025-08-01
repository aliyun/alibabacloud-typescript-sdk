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
   * The percentage of change failures.
   * 
   * @example
   * 0.25
   */
  errorPercent?: number;
  maxTimeCostMs?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  name?: string;
  optimizeSuggestions?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The HTTP status code. The following limits are imposed on the ID:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of applications.
   */
  data?: GetChangeOrderMetricResponseBodyData[];
  /**
   * @remarks
   * The additional information that is returned. The following limits are imposed on the ID:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * 3B763F98-0BA2-5C23-B6B8-558568D2C1C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the microservice list was obtained. The following limits are imposed on the ID:
   * 
   * *   **true**: The namespaces were obtained.
   * *   **false**: no
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

