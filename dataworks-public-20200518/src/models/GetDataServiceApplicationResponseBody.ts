// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AppCode for simple authentication. You can select simple authentication or signature authentication when you call an API operation.
   * 
   * @example
   * CODE123
   */
  applicationCode?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 10000
   */
  applicationId?: number;
  /**
   * @remarks
   * The AppKey for signature authentication. You can select simple authentication or signature authentication when you call an API operation.
   * 
   * @example
   * KEY123
   */
  applicationKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Test application
   */
  applicationName?: string;
  /**
   * @remarks
   * The AppSecret for signature authentication. You can select simple authentication or signature authentication when you call an API operation.
   * 
   * @example
   * SECRET123
   */
  applicationSecret?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      applicationId: 'ApplicationId',
      applicationKey: 'ApplicationKey',
      applicationName: 'ApplicationName',
      applicationSecret: 'ApplicationSecret',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      applicationId: 'number',
      applicationKey: 'string',
      applicationName: 'string',
      applicationSecret: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   */
  data?: GetDataServiceApplicationResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Normal
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
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
      data: GetDataServiceApplicationResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

