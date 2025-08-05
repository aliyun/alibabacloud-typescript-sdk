// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiDestinationResponseBodyDataHttpApiParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the API destination.
   * 
   * @example
   * http://127.0.0.1:8001/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   POST
   * *   GET
   * *   DELETE
   * *   PUT
   * *   HEAD
   * *   TRACE
   * *   PATCH
   * 
   * @example
   * POST
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * demo
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * test-basic
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the API destination.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The time when the API destination was created.
   * 
   * @example
   * 1649055710565
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The request parameters that are configured for the API destination.
   */
  httpApiParameters?: GetApiDestinationResponseBodyDataHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      httpApiParameters: GetApiDestinationResponseBodyDataHttpApiParameters,
    };
  }

  validate() {
    if(this.httpApiParameters && typeof (this.httpApiParameters as any).validate === 'function') {
      (this.httpApiParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetApiDestinationResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request is successful, success is returned. If the request failed, an error code is returned.
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
   * B896B484-F16D-59DE-9E23-DD0E5C361108
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApiDestinationResponseBodyData,
      message: 'string',
      requestId: 'string',
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

