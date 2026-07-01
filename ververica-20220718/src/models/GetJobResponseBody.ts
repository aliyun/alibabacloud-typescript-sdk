// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class GetJobResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * - The job instance information if `success` is `true`.
   * 
   * - An empty object if `success` is `false`.
   */
  data?: Job;
  /**
   * @remarks
   * - An error code if `success` is `false`.
   * 
   * - An empty string if `success` is `true`.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - An error message if `success` is `false`.
   * 
   * - An empty string if `success` is `true`.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * A fixed value of 200.
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

