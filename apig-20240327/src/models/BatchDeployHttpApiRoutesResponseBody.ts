// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResultsValue } from "./DataResultsValue";


export class BatchDeployHttpApiRoutesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of routes that fail to be published in the batch. This parameter is returned only for a synchronous publish and can be 0.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * A map of results with route IDs as keys. If other routes in the same batch fail, the successfully published routes remain valid.
   * 
   * @example
   * {"hr-example001":{"routeId":"hr-example001","status":"Succeeded"},"hr-example002":{"routeId":"hr-example002","status":"Succeeded"}}
   */
  results?: { [key: string]: DataResultsValue };
  /**
   * @remarks
   * The number of routes that are successfully published in the batch. This parameter is returned only for a synchronous publish and can be 0.
   * 
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'failedCount',
      results: 'results',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': DataResultsValue },
      successCount: 'number',
    };
  }

  validate() {
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeployHttpApiRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the API call. For the acceptance or publish result of each route, see data.results.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The route-level results of the batch publish. A synchronous publish also returns the number of successful and failed routes. An asynchronous publish returns only the route-level acceptance results.
   */
  data?: BatchDeployHttpApiRoutesResponseBodyData;
  /**
   * @remarks
   * The response message of the API call. If a route fails or is rejected, see the errorMessage of the corresponding route for the cause.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID of the API call. You can invoke this ID to locate the active request.
   * 
   * @example
   * F7B8A1C2-1234-5678-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchDeployHttpApiRoutesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

