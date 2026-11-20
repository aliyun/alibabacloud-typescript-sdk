// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database creation result. A value of true indicates that the database was created successfully, and a value of false indicates that the creation failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92F00FA1-CE4E-55A1-8BA9-F2C61534B518
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: The operation is successful. false: The operation fails.
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

