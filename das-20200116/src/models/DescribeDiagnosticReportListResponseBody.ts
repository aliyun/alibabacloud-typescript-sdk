// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information of the diagnostics reports. Valid values:
   * 
   * *   **total**: the number of diagnostics reports.
   * *   **score**: the health score.
   * *   **diagnosticTime**: the time when the diagnostics report was generated. The time is displayed in UTC.
   * *   **startTime**: the start time of the query. The time is displayed in UTC.
   * *   **endTime**: the end time of the query. The time is displayed in UTC.
   * 
   * @example
   * {     "total": 1,     "list": [       {         "score": 100,         "diagnosticTime": "2022-11-14T08:17:00Z",         "startTime": "2022-11-14T07:16:59Z",         "endTime": "2022-11-14T08:16:59Z"       }     ]   }
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D00DB161-FEF6-5428-B37A-8D29A4C2****
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
  success?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

