// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDLAServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic data ingestion into the data lake for incremental data is enabled. If this feature is enabled, the system automatically adds newly generated backup sets to the data lake. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  autoAdd?: boolean;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * Indicates whether the response contains failed DLA tasks. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  haveJobFailed?: boolean;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
   */
  requestId?: string;
  /**
   * @remarks
   * The DLA service status of the backup plan. Valid values:
   * - **Running**: The service is running.
   * - **Closing**: The service is being closed.
   * - **Closed**: The service is closed.
   * 
   * @example
   * Running
   */
  state?: string;
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
      autoAdd: 'AutoAdd',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      haveJobFailed: 'HaveJobFailed',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      state: 'State',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAdd: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      haveJobFailed: 'boolean',
      httpStatusCode: 'number',
      requestId: 'string',
      state: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

