// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-7xxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The detailed resource usage of the cluster.
   * 
   * @example
   * 69
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code returned. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information of the call result. Valid values:
   * - If the request was successful, **Success** is returned. 
   * - If the request failed, a specific error code is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65D2***-45C1-5C18-**********
   */
  requestId?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * - **success**: The check passed.
   * - **false**: The check failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      DBClusterId: 'string',
      data: 'string',
      httpStatusCode: 'number',
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

