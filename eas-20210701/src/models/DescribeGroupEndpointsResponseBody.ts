// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupEndpointsResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The backend access ID, which varies based on the value of the EndpointType parameter.
   * 
   * *   If you set EndpointType to DefaultGateway, the value of this parameter is default.
   * *   If you set EndpointType to PrivateGateway, the value of this parameter is the ID of the dedicated gateway.
   * *   If you set EndpointType to Nlb, the value of this parameter is the ID of the NLB instance.
   * *   If you set EndpointType to Nacos, the value of this parameter is the ID of the Nacos instance.
   * 
   * @example
   * gw-26340kjxjx8l3r****
   */
  backendId?: string;
  /**
   * @remarks
   * The service endpoint type. Valid values:
   * 
   * *   DefaultGateway: the shared gateway.
   * *   PrivateGateway: the dedicated gateway.
   * *   Nlb: Associate the service with the Network Load Balancer (NLB) instance.
   * *   Nacos: Associate the service with the Nacos instance.
   * 
   * @example
   * PrivateGateway
   */
  endpointType?: string;
  /**
   * @remarks
   * The full endpoint.
   */
  internetEndpoints?: string[];
  /**
   * @remarks
   * The full endpoint.
   */
  intranetEndpoints?: string[];
  /**
   * @remarks
   * The path type. Valid values:
   * 
   * *   Group: the path of the service group.
   * 
   * @example
   * Group
   */
  pathType?: string;
  /**
   * @remarks
   * The port number. This parameter takes effect only when you associate the service with an NLB or Nacos instance.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      endpointType: 'EndpointType',
      internetEndpoints: 'InternetEndpoints',
      intranetEndpoints: 'IntranetEndpoints',
      pathType: 'PathType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      endpointType: 'string',
      internetEndpoints: { 'type': 'array', 'itemType': 'string' },
      intranetEndpoints: { 'type': 'array', 'itemType': 'string' },
      pathType: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.internetEndpoints)) {
      $dara.Model.validateArray(this.internetEndpoints);
    }
    if(Array.isArray(this.intranetEndpoints)) {
      $dara.Model.validateArray(this.intranetEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhNTM4OTQ0YzBmYTIy****ZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The endpoints of the service group.
   */
  endpoints?: DescribeGroupEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Execution successful.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 890772EF-3AD6-129A-8E15-8F349C944783
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      endpoints: 'Endpoints',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeGroupEndpointsResponseBodyEndpoints },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

