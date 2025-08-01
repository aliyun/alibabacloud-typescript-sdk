// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstancesInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The enabled port.
   * 
   * @example
   * 8848
   */
  clientPort?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-12-15T02:02:15Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  healthStatus?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 120.55.71.x
   */
  internetIp?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 25.24.91.x
   */
  ip?: string;
  /**
   * @remarks
   * The pod name.
   * 
   * @example
   * mse-xxxxx-xxxxx-reg-center-0-1
   */
  podName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  role?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 172.16.66.x
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  zone?: string;
  /**
   * @remarks
   * Indicates whether all pods in the cluster are distributed in the specified zones.
   * 
   * @example
   * true
   */
  zoneDistributed?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientPort: 'ClientPort',
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
      zoneDistributed: 'ZoneDistributed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPort: 'string',
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
      zoneDistributed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancesInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: QueryInstancesInfoResponseBodyData[];
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
   * The HTTP status code.
   * 
   * @example
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryInstancesInfoResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

