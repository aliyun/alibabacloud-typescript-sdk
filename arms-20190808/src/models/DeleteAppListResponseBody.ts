// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. 2XX indicates that the request was successful. 3XX indicates that the request was redirected. 4XX indicates that a request error occurred. 5XX indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "{\\"code\\":200,\\"data\\":\\"{\\\\\\"code\\\\\\":200,\\\\\\"data\\\\\\":true,\\\\\\"errorCode\\\\ \\":\\\\\\"Deletion of application successful\\\\\\",\\\\\\"Message\\\\\\":\\\\\\"Deletion of application successful\\\\\\",\\\\\\"Successful\\\\\\":true,\\ \\\\"traceId\\\\\\":\\\\\\"0bc1667516940677164677396d0088\\\\\\"}\\",\\"errorCode\\":\\"Batch deletion of applications successful\\",\\"message\\":\\"Batch deletion of applications successful\\ ",\\"Success\\":true,\\"traceId\\":\\"210f470416940677161213505e0e7a\\"}"
   */
  data?: string;
  /**
   * @remarks
   * The error message returned for invalid request parameters.
   * 
   * @example
   * "Deletion of application successful"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B446DF2-3DDD-4B5B-8E3F-D5225120****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the specified applications are deleted. Valid values:
   * 
   * *   `true`: The applications are deleted.
   * *   `false`: The applications failed to be deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

