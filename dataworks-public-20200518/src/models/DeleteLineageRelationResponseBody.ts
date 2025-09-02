// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLineageRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 1010040007
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * qualifiedName should be in format as entity-table.entity-guid
   */
  errorMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID: used for locating logs and troubleshooting
   * 
   * @example
   * 64B-587A-8CED-969E1973887FXXX-TT
   */
  requestId?: string;
  /**
   * @remarks
   * Operation result:
   * 
   * true: Success
   * 
   * false: Failure
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Whether the call was successful. Values are as follows:
   * 
   * true: success
   * 
   * false: failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      status: 'boolean',
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

