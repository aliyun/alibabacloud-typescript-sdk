// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceEndpointsResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service. The value of this parameter varies based on the value of EndpointType:
   * 
   * - If EndpointType is DefaultGateway, this parameter is set to default.
   * 
   * - If EndpointType is PrivateGateway, this parameter is the ID of the dedicated gateway.
   * 
   * - If EndpointType is Nlb, this parameter is the ID of the NLB instance.
   * 
   * - If EndpointType is Nacos, this parameter is the ID of the Nacos instance.
   * 
   * @example
   * nlb-5q4sp7u6oorkha****
   */
  backendId?: string;
  /**
   * @remarks
   * The connection type of the service endpoint. Valid values:
   * 
   * - DefaultGateway: The service is connected using a shared gateway.
   * 
   * - PrivateGateway: The service is connected using a dedicated gateway.
   * 
   * - Nlb: The service is attached to a Network Load Balancer (NLB) instance.
   * 
   * - Nacos: The service is attached to a Nacos instance.
   * 
   * @example
   * Nlb
   */
  endpointType?: string;
  /**
   * @remarks
   * The list of internet-facing endpoints.
   */
  internetEndpoints?: string[];
  /**
   * @remarks
   * The list of internal endpoints.
   */
  intranetEndpoints?: string[];
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - Group: The endpoint of an audience group.
   * 
   * - Service: The endpoint of a service.
   * 
   * @example
   * Service
   */
  pathType?: string;
  /**
   * @remarks
   * The port number. This parameter is returned only when the service is attached to an NLB or Nacos instance.
   * 
   * @example
   * 9090
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

export class DescribeServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhN****TQ0YzBmYTIyN2MxZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The list of service endpoints.
   */
  endpoints?: DescribeServiceEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Execution succeeded.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739998B5-FB39-12A3-8323-0FA340317298
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
      endpoints: { 'type': 'array', 'itemType': DescribeServiceEndpointsResponseBodyEndpoints },
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

