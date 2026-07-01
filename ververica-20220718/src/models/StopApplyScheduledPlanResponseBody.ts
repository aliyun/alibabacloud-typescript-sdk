// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPlanAppliedInfo } from "./ScheduledPlanAppliedInfo";


export class StopApplyScheduledPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application information for the scheduled plan.
   */
  data?: ScheduledPlanAppliedInfo;
  /**
   * @remarks
   * The error code. This parameter is not empty if the request fails. This parameter is empty if the request is successful.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is not empty if the request fails. This parameter is empty if the request is successful.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 is always returned. Use the \\`success\\` parameter to check if the request was successful.
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
   * Indicates whether the request was successful.
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
      data: ScheduledPlanAppliedInfo,
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

