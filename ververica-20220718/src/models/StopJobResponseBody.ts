// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class StopJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * - The details of the stopped job instance, returned if the request succeeds.
   * 
   * - Empty if the request fails.
   */
  data?: Job;
  /**
   * @remarks
   * - The error code that is returned if the request fails.
   * 
   * - Empty if the request succeeds.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - The error message that is returned if the request fails.
   * 
   * - Empty if the request succeeds.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The value is fixed at 200.
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
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: Job,
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

