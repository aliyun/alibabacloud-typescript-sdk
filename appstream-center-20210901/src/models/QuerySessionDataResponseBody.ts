// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionDataResponseBodyIndexData extends $dara.Model {
  /**
   * @remarks
   * The hour to which the session data belongs. Valid values: 00 to 23 (full hours).
   * 
   * @example
   * 10
   */
  hh?: string;
  /**
   * @remarks
   * The minute to which the session data belongs, aggregated in 10-minute intervals. Valid values: 00 to 50 (specifically 00, 10, 20, 30, 40, and 50).
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
   * The statistical date to which the session data belongs, in the yyyyMMdd format, which is the same as the StatDate request parameter.
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
   * The return code. This parameter is empty if the request is successful and data is found. If the query result is empty, NO_DATA is returned. If the request fails, the corresponding error code is returned. For example, if the format of the statistical parameter is invalid, InvalidParameter.DateFormat is returned.
   * 
   * @example
   * NO_DATA
   */
  code?: string;
  /**
   * @remarks
   * The list of session trend data, sorted in ascending order by hour and minute. If there is no session data on the specified date, an empty array is returned, and the return code is NO_DATA.
   */
  indexData?: QuerySessionDataResponseBodyIndexData[];
  /**
   * @remarks
   * The return message. This parameter is empty if the request is successful. If the request fails, the corresponding error description is returned.
   * 
   * @example
   * The parameter DateFormat is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, used to locate call records and troubleshoot issues. The example value is partially desensitized.
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

