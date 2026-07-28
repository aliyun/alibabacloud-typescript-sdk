// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TuningHistory } from "./TuningHistory";


export class ListAutopilotTuningHistoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of tuning history records.
   */
  tuningHistories?: TuningHistory[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
      tuningHistories: 'tuningHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tuningHistories: { 'type': 'array', 'itemType': TuningHistory },
    };
  }

  validate() {
    if(Array.isArray(this.tuningHistories)) {
      $dara.Model.validateArray(this.tuningHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutopilotTuningHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tuning history list result.
   */
  data?: ListAutopilotTuningHistoriesResponseBodyData;
  /**
   * @remarks
   * When success is false, this value is not empty and indicates the business error code. When success is true, this value is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * When success is false, this value is not empty and indicates the business error message. When success is true, this value is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is always 200. Use success to determine whether the business request is successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAutopilotTuningHistoriesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

