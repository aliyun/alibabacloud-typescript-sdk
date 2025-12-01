// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDLAServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature of automatically adding incremental data to a data lake. If this feature is enabled, DBS adds the backup sets that are newly generated to the data lake that is created for the backup schedule. Valid values:
   * 
   * *   **true**: enables the feature.
   * *   **false**: disables the feature.
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
   * Indicates whether a failed DLA task exists in the return result. Valid values:
   * 
   * *   **true**: A failed DLA task exists.
   * *   **false**: No failed DLA task exists.
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
   * The status of the DLA service for the backup schedule. Valid values:
   * 
   * *   **Running**: DLA is running.
   * *   **Closing**: DLA is being disabled.
   * *   **Closed**: DLA is disabled.
   * 
   * @example
   * Running
   */
  state?: string;
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

