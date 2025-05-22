// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SummaryJobDetailResponseBodyProgressSummaryDetails } from "./SummaryJobDetailResponseBodyProgressSummaryDetails";


export class SummaryJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * @example
   * l3m1213ye7l****
   */
  jobId?: string;
  /**
   * @remarks
   * The returned information about the migrated or synchronized objects in arrays.
   * 
   * >  The arrays are in the following format: [{"key":"Function","state":5,"totalCount":22},{"key":"Procedure","state":5,"totalCount":26},{"key":"Table","state":0,"totalCount":68},{"key":"View","state":5,"totalCount":100}].
   */
  progressSummaryDetails?: SummaryJobDetailResponseBodyProgressSummaryDetails[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9033138C-5AB3-5EB7-BA78-43131F19297C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      progressSummaryDetails: 'ProgressSummaryDetails',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobId: 'string',
      progressSummaryDetails: { 'type': 'array', 'itemType': SummaryJobDetailResponseBodyProgressSummaryDetails },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.progressSummaryDetails)) {
      $dara.Model.validateArray(this.progressSummaryDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

