// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionDataResponseBodyIndexData extends $dara.Model {
  /**
   * @remarks
   * The hour to which the session data belongs, with a value range of 00 to 23 (full hours).
   * 
   * @example
   * 10
   */
  hh?: string;
  /**
   * @remarks
   * The minute to which the session data belongs, aggregated in 10-minute intervals, with a value range of 00 to 50 (namely 00, 10, 20, 30, 40, and 50).
   * 
   * @example
   * 30
   */
  mi?: string;
  /**
   * @remarks
   * The total number of sessions within the hour and minute interval (10-minute granularity).
   * 
   * @example
   * 128
   */
  sessionCntMi?: number;
  /**
   * @remarks
   * The statistical date to which the session data belongs, in the yyyyMMdd format, consistent with the request parameter StatDate.
   * 
   * @example
   * 20261106
   */
  statDate?: string;
  static names(): { [key: string]: string } {
    return {
      hh: 'Hh',
      mi: 'Mi',
      sessionCntMi: 'SessionCntMi',
      statDate: 'StatDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hh: 'string',
      mi: 'string',
      sessionCntMi: 'number',
      statDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. It is empty when the request is successful and data is found. NO_DATA is returned when the query result is empty. A corresponding error code is returned when the request fails. For example, InvalidParameter.DateFormat is returned when the format of the statistical parameter is invalid.
   * 
   * @example
   * NO_DATA
   */
  code?: string;
  /**
   * @remarks
   * The list of session trend data, sorted in ascending order by hour and minute. An empty array is returned when there is no session data on the specified date, and the return code is NO_DATA.
   */
  indexData?: QuerySessionDataResponseBodyIndexData[];
  /**
   * @remarks
   * The return message. It is empty when the request is successful. A corresponding error description is returned when the request fails.
   * 
   * @example
   * The parameter DateFormat is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, used to locate call records and troubleshoot issues. The example is a partially desensitized value.
   * 
   * @example
   * D4A13D91-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexData: 'IndexData',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexData: { 'type': 'array', 'itemType': QuerySessionDataResponseBodyIndexData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexData)) {
      $dara.Model.validateArray(this.indexData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

