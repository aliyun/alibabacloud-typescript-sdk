// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshProxyStatusResponseBodyProxyStatus extends $dara.Model {
  /**
   * @remarks
   * The update status of the proxy. Valid values:
   * 
   * *   `SYNCED`: The status of the proxy is updated.
   * *   `NOT SENT`: The status of the proxy is not updated.
   * *   `STALE (Never Acknowledged)`: Istiod has sent multiple requests to the Envoy proxy to update the status of the proxy but receives no response.
   * *   `STALE`: Istiod has sent a request to the Envoy proxy to update the status of the proxy but receives no response.
   * 
   * @example
   * SYNCED
   */
  clusterSynced?: string;
  /**
   * @remarks
   * The percentage of the updated endpoints.
   * 
   * @example
   * 1
   */
  endpointPercent?: string;
  /**
   * @remarks
   * The update status of the endpoint. Valid values:
   * 
   * *   `SYNCED`: The status of the endpoint is updated.
   * *   `NOT SENT`: The status of the endpoint is not updated.
   * *   `STALE (Never Acknowledged)`: Istiod has sent multiple requests to the Envoy proxy to update the status of the endpoint but receives no response.
   * *   `STALE`: Istiod has sent a request to the Envoy proxy to update the status of the endpoint but receives no response.
   * 
   * @example
   * SYNCED
   */
  endpointSynced?: string;
  /**
   * @remarks
   * The version of Istiod.
   * 
   * @example
   * 1.9.7
   */
  istioVersion?: string;
  /**
   * @remarks
   * The update status of the listener. Valid values:
   * 
   * *   `SYNCED`: The status of the listener is updated.
   * *   `NOT SENT`: The status of the listener is not updated.
   * *   `STALE (Never Acknowledged)`: Istiod has sent multiple requests to the Envoy proxy to update the status of the listener but receives no response.
   * *   `STALE`: Istiod has sent a request to the Envoy proxy to update the status of the listener but receives no response.
   * 
   * @example
   * SYNCED
   */
  listenerSynced?: string;
  /**
   * @remarks
   * The ID of the proxy on the data plane.
   * 
   * @example
   * 119q****
   */
  proxyId?: string;
  /**
   * @remarks
   * The version number of a proxy on the data plane.
   * 
   * @example
   * 1.9.7
   */
  proxyVersion?: string;
  /**
   * @remarks
   * The update status of the route. Valid values:
   * 
   * *   `SYNCED`: The status of the route is updated.
   * *   `NOT SENT`: The status of the route is not updated.
   * *   `STALE (Never Acknowledged)`: Istiod has sent multiple requests to the Envoy proxy to update the status of the route but receives no response.
   * *   `STALE`: Istiod has sent a request to the Envoy proxy to update the status of the route but receives no response.
   * 
   * @example
   * SYNCED
   */
  routeSynced?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSynced: 'ClusterSynced',
      endpointPercent: 'EndpointPercent',
      endpointSynced: 'EndpointSynced',
      istioVersion: 'IstioVersion',
      listenerSynced: 'ListenerSynced',
      proxyId: 'ProxyId',
      proxyVersion: 'ProxyVersion',
      routeSynced: 'RouteSynced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSynced: 'string',
      endpointPercent: 'string',
      endpointSynced: 'string',
      istioVersion: 'string',
      listenerSynced: 'string',
      proxyId: 'string',
      proxyVersion: 'string',
      routeSynced: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshProxyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * `200`: The operation is successful.
   * 
   * *   `403`: You are not authorized to perform this operation.
   * *   `503`: A backend server error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The information about the status of the proxies on the data plane.
   */
  proxyStatus?: DescribeServiceMeshProxyStatusResponseBodyProxyStatus[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * success
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      proxyStatus: 'ProxyStatus',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      proxyStatus: { 'type': 'array', 'itemType': DescribeServiceMeshProxyStatusResponseBodyProxyStatus },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyStatus)) {
      $dara.Model.validateArray(this.proxyStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

