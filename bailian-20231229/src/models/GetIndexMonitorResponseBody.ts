// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The core data object of the response.
   * 
   * **pipelineCommercialType** (String): The edition of the knowledge base.
   * 
   * - standard: Standard Edition
   * 
   * - enterprise: Ultimate Edition
   * 
   * **storageMonitorData** (Object): The storage monitoring data of the knowledge base.
   * 
   * - indexStorageLimit (Number): The index storage limit of the knowledge base, in GB.
   * 
   * - indexStorageUsage (Number): The current index storage usage of the knowledge base, in GB.
   * 
   * **pipelineCommercialCu** (Integer): The number of RCU for the Ultimate Edition knowledge base. For example: 2.
   * 
   * **qpsMonitorData** (Object): The aggregated retrieval monitoring data for the knowledge base over the entire query period.
   * 
   * - peakQps (Integer): The peak QPS over the entire time period.
   * 
   * - totalRequests (Integer): The total number of requests over the entire time period.
   * 
   * - avgQpsOfActiveSeconds (Number): The average QPS during active seconds over the entire time period. Active seconds are seconds in which calls were made.
   * 
   * - monitorData (Array): An array of detailed monitoring data broken down by time window. Each object in the array represents the performance statistics for a single time window.
   * 
   *   <details>
   * 
   *   <summary>
   * 
   *   Sub-properties
   * 
   *   </summary>
   * 
   *   - successData (Object): The statistics for successful requests within this window.
   * 
   *   - limitData (Object): The statistics for rate-limited requests within this window.
   * 
   *   - failData (Object): The statistics for failed calls within this window.
   * 
   *   - peakQpsInWindowRange (Integer): The total peak QPS within this window (successful + rate-limited + failed).
   * 
   *   - totalRequests (Integer): The total number of requests within this window (successful + rate-limited + failed).
   * 
   *   - windowRange (Integer): The start time of the time window (UNIX timestamp in seconds).
   * 
   *   - windowRangeEnd (Integer): The end time of the time window (UNIX timestamp in seconds).
   * 
   *   - avgQpsOfActiveSeconds (Number): The average QPS during active seconds within this window.
   * 
   *   **The successData, limitData, and failData objects have the same internal structure, as described below:**
   * 
   *   - peakQpsInWindowRange (Integer): The peak QPS for the corresponding status.
   * 
   *   - totalRequests (Integer): The total number of requests for the corresponding status.
   * 
   *   - avgQpsOfActiveSeconds (Number): The average QPS during active seconds for the corresponding status.
   * 
   *   </details>
   * 
   * @example
   * {
   *     "code": "Success",
   *     "status_code": 200,
   *     "data": {
   * "pipelineCommercialType": "standard",       "storageMonitorData": Object{...},
   *         "qpsMonitorData": Object{...}
   *     },
   *     "success": true,
   *     "message": "success",
   *     "request_id": "65d34b79-b97e-478e-a0a3-xxx",
   *     "status": "SUCCESS"
   * }
   */
  data?: any;
  /**
   * @remarks
   * The status message.
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
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * SUCCESS
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

