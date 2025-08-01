// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListenersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the listener.
   * 
   * @example
   * 119.23.84.102
   */
  addr?: string;
  /**
   * @remarks
   * The listener client version.
   * 
   * @example
   * Nacos-Java-Client:v2.1.1
   */
  agent?: string;
  /**
   * @remarks
   * The application name of the listener.
   * 
   * @example
   * app
   */
  app?: string;
  /**
   * @remarks
   * The name of the cluster to which the monitored service belongs.
   * 
   * @example
   * DEFAULT
   */
  cluster?: string;
  /**
   * @remarks
   * The IP address of the monitored service.
   * 
   * @example
   * 172.16.1.5
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 0ba53825-b183-414f-a6a0-288e4f1c467e
   */
  namespaceId?: string;
  /**
   * @remarks
   * The port number of the monitored service.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The name of the monitored service.
   * 
   * @example
   * zeekr-orderboss
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      agent: 'Agent',
      app: 'App',
      cluster: 'Cluster',
      IP: 'IP',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      agent: 'string',
      app: 'string',
      cluster: 'string',
      IP: 'string',
      namespaceId: 'string',
      port: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetServiceListenersResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54973C90-F379-4372-9AA5-053A3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of listeners that are queried.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetServiceListenersResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

