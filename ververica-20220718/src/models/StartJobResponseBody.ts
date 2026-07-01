// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class StartJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the access denial.
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * - When \\`success\\` is \\`true\\`, the created instance information is returned.
   * 
   * - Returns an empty value if \\`success\\` is false.
   */
  data?: Job;
  /**
   * @remarks
   * - If success is false, the call returns a business error code.If success is true, the call returns business data. The following table describes the data format.If success is true, the call returns business data. The following table describes the data format.
   * 
   * - When success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - If success is false, a business error message is returned.
   * 
   * - When \\`success\\` is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * Fixed value: 200.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the service request was successful.
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

