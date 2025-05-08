// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder } from "./GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder";


export class GetGatewayRouteDetailResponseBodyDataRouteServices extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The name of the group to which the service belongs.
   * 
   * @example
   * api
   */
  groupName?: string;
  /**
   * @example
   * Health
   */
  healthStatus?: string;
  httpDubboTranscoder?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * dubbo4
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 782
   */
  serviceId?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * xkc-crm
   */
  serviceName?: string;
  /**
   * @remarks
   * The port number of the service.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      healthStatus: 'HealthStatus',
      httpDubboTranscoder: 'HttpDubboTranscoder',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      unhealthyEndpoints: 'UnhealthyEndpoints',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      healthStatus: 'string',
      httpDubboTranscoder: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder,
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      serviceName: 'string',
      servicePort: 'number',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(this.httpDubboTranscoder && typeof (this.httpDubboTranscoder as any).validate === 'function') {
      (this.httpDubboTranscoder as any).validate();
    }
    if(Array.isArray(this.unhealthyEndpoints)) {
      $dara.Model.validateArray(this.unhealthyEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

