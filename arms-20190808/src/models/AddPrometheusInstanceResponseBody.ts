// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned. { "RequestId": the request ID, "Data": "{ "clusterType": the cluster type, "remoteWriteUrl": the public URL for remote write, "internetGrafanaUrl": the internal URL for Grafana, "authToken": indicates whether authentication is enabled, "internetPushGatewayUrl": the internal URL for Pushgateway, "clusterId": the cluster ID, "internetRemoteReadUrl": the internal URL for remote read, "remoteReadUrl": the public URL for remote read, "grafanaUrl": the public URL for Grafana, "pushGatewayUrl": the public URL for Pushgateway, "internetRemoteWriteUrl": the internal URL for remote write}" }
   * 
   * @example
   * {
   *   "RequestId": "1293091C-54AD-50FE-B787-E314B94B35AB",
   *   "Data": "{
   *   "clusterType":"remote-write-prometheus",
   *   "remoteWriteUrl":"http://cn-hu/api/v3/write",
   *   "internetGrafanaUrl":"https://cn-hanga/cn-hangzhou",
   *   "authToken":false,
   *   "internetPushGatewayUrl":"https://cangzhou/api/v2",
   *   "clusterId":"vrju1lj3sa|123456",
   *   "internetRemoteReadUrl":"https://cn-hangzh67cn-hangzhou/api/v1/read",
   *   "remoteReadUrl":"http://cn-hanou/api/v1/read",
   *   "grafanaUrl":"http://cn-angzhou",
   *   "pushGatewayUrl":"htt1lj3sa/cn-hangzhou/api/v2",
   *   "internetRemoteWriteUrl":"httpsngzhou/api/v3/write"}"
   * }
   */
  data?: string;
  /**
   * @remarks
   * The message returned.
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
   * 9319A57D-2D9E-472A-B69B-CF3CD16D****
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

