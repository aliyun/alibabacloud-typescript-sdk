// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters extends $dara.Model {
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
   * - POST
   * 
   * - GET
   * 
   * - DELETE
   * 
   * - PUT
   * 
   * - HEAD
   * 
   * - TRACE
   * 
   * - PATCH
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

export class ListApiDestinationsResponseBodyDataApiDestinations extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * api-destination-2
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection.
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
   * 1665223213000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The request parameters that are configured for the API destination.
   */
  httpApiParameters?: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters;
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
      httpApiParameters: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters,
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

export class ListApiDestinationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API destinations.
   */
  apiDestinations?: ListApiDestinationsResponseBodyDataApiDestinations[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiDestinations: 'ApiDestinations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinations: { 'type': 'array', 'itemType': ListApiDestinationsResponseBodyDataApiDestinations },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiDestinations)) {
      $dara.Model.validateArray(this.apiDestinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponseBody extends $dara.Model {
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
  data?: ListApiDestinationsResponseBodyData;
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
   * 96D7C0AB-DCE5-5E82-96B8-4725E1706BB1
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
      data: ListApiDestinationsResponseBodyData,
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

