// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Endpoint ID
   * 
   * @example
   * ep-xxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The status. Valid values:
   *  * CONFIGURED: Configured.
   *  * DELETED: Deleted.
   * 
   * @example
   * CONFIGURED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data returned after the endpoint is created.
   * 
   * @example
   * {}
   */
  data?: CreateServiceEndpointResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2b7f1c2d-xxx
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
      code: 'Code',
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
      data: CreateServiceEndpointResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

