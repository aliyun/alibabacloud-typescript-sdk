// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportNodeStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Resource Not Found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fault report ID.
   * 
   * @example
   * 156837191934
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      errorMessage: 'ErrorMessage',
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      errorMessage: 'string',
      reportId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

