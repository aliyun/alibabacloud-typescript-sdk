// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentTaskModelUsageMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The start time of the statistical interval for the time-series point. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735660800
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the statistical interval for the time-series point. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735660860
   */
  endTime?: number;
  /**
   * @remarks
   * The TPM at the time-series point, which represents the number of tokens consumed in the statistical interval.
   * 
   * @example
   * 1200
   */
  tpm?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      tpm: 'Tpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      tpm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAgentTaskModelUsageMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of time-series TPM metrics for model usage. The usage at each time point is returned in chronological order.
   */
  data?: GetDataAgentTaskModelUsageMetricsResponseBodyData[];
  /**
   * @remarks
   * The error code, which is returned when a request exception occurs.
   * 
   * @example
   * DMS-DA-40411
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message, which is returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 67E910F2-***7695C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataAgentTaskModelUsageMetricsResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
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

