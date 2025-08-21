// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The status of the endpoint connection. Valid values:
   * 
   * *   Pending
   * *   Connecting
   * *   Connected
   * *   Disconnecting
   * *   Disconnected
   * *   Deleting
   * *   ServiceDeleted
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2021-07-22T01:19:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The business status of the endpoint. Valid values:
   * 
   * *   Normal
   * *   FinancialLocked
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The domain name of the endpoint. The domain name is used for connection configuration.
   * 
   * @example
   * ep-bp18s6wy9420wdi4****.epsrv-bp1bz3efowa4kc0****.cn-hangzhou.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp1tah7zbrwmkjef****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   Creating
   * *   Active
   * *   Pending
   * *   Deleting
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The ID of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * epsrv-bp1w0p3jdirbfmt6****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-hangzhou.epsrv-bp1w0p3jdirbfmt6****
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      createTime: 'createTime',
      endpointBusinessStatus: 'endpointBusinessStatus',
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      endpointStatus: 'endpointStatus',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      serviceId: 'string',
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

export class ListVpcEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the endpoints.
   */
  result?: ListVpcEndpointsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

