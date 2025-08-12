// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricStat } from "./MetricStat";


export class BatchExportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data requested by the backend. A larger timestamp indicates that the data export time is closer to the current time.
   * 
   * @example
   * 1678781819000
   */
  anchor?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The Cursor information that is used to call this operation again.
   * 
   * >  If `null` is returned, the monitoring data is exported.
   * 
   * @example
   * v2.5eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0ODAwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQzMjdhNjU2MjY3N2E2NjZhNzczOTY2NmM3Mjc0NjM3MzY5Njg3NDcyMjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2MH0***
   */
  cursor?: string;
  /**
   * @remarks
   * The data returned in this call.
   */
  dataResults?: MetricStat[];
  /**
   * @remarks
   * Indicates whether the data has been exported. Valid values:
   * 
   * *   true: Some data is not exported.
   * *   false: All the data is exported.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The number of data entries returned in this call.
   * 
   * @example
   * 1000
   */
  length?: number;
  /**
   * @remarks
   * The returned message.
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
   * 251402CD-305C-1617-808E-D8C11FC8138D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      code: 'Code',
      cursor: 'Cursor',
      dataResults: 'DataResults',
      hasNext: 'HasNext',
      length: 'Length',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      code: 'number',
      cursor: 'string',
      dataResults: { 'type': 'array', 'itemType': MetricStat },
      hasNext: 'boolean',
      length: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dataResults)) {
      $dara.Model.validateArray(this.dataResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

