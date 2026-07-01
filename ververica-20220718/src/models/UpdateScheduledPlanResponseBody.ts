// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPlan } from "./ScheduledPlan";


export class UpdateScheduledPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure of the updated scheduled plan.
   */
  data?: ScheduledPlan;
  /**
   * @remarks
   * The business error code. This parameter is not empty when the success parameter is false. This parameter is empty when the success parameter is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message. This parameter is not empty when the success parameter is false. This parameter is empty when the success parameter is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code. This is always 200. Use the success parameter to determine if the request was successful.
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
      data: ScheduledPlan,
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

