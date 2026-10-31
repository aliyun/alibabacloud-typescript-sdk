// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGranularityBySummaryIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * DimIds
   */
  dimIds?: number[];
  /**
   * @remarks
   * GranularityId
   * 
   * @example
   * 122
   */
  granularityId?: number;
  /**
   * @remarks
   * SummaryId
   * 
   * @example
   * 123
   */
  summaryId?: number;
  static names(): { [key: string]: string } {
    return {
      dimIds: 'DimIds',
      granularityId: 'GranularityId',
      summaryId: 'SummaryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimIds: { 'type': 'array', 'itemType': 'number' },
      granularityId: 'number',
      summaryId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimIds)) {
      $dara.Model.validateArray(this.dimIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGranularityBySummaryIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: GetGranularityBySummaryIdResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGranularityBySummaryIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

