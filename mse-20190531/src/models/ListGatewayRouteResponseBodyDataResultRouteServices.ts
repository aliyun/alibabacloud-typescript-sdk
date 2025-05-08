// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder } from "./ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder";


export class ListGatewayRouteResponseBodyDataResultRouteServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol.
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
  /**
   * @remarks
   * The transcoder of the Dubbo protocol.
   */
  httpDubboTranscoder?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The weight in the form of a percentage value.
   * 
   * @example
   * 11
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1563
   */
  serviceId?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * hu
   */
  serviceName?: string;
  /**
   * @remarks
   * The Dubbo port number.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * The version of the service.
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
      httpDubboTranscoder: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder,
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

